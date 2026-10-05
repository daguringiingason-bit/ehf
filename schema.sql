-- Monný: gagnagrunnur fyrir Supabase
-- Keyrðu þessa skrá einu sinni í SQL Editor í Supabase-verkefninu þínu.
-- Keyrðu svo exam_keys.sql (svarlyklarnir), sem á ekki að fara á GitHub.

create extension if not exists pgcrypto;

-- Prófílar: fullt nafn notanda
create table if not exists public.profiles (
  id uuid primary key references auth.users on delete cascade,
  full_name text check (full_name is null or char_length(trim(full_name)) between 2 and 120),
  created_at timestamptz not null default now()
);

-- Framvinda: hvaða gátur notandi hefur leyst í hverju námskeiði
create table if not exists public.progress (
  user_id uuid not null references auth.users on delete cascade,
  course text not null,
  solved int[] not null default '{}',
  updated_at timestamptz not null default now(),
  primary key (user_id, course)
);

-- Svarlyklar lokaprófa. Engin RLS-regla leyfir lestur, svo notendur sjá þá aldrei.
create table if not exists public.exam_keys (
  course text primary key,
  answers int[] not null,
  pass_mark int not null,
  ask int
);
alter table public.exam_keys add column if not exists ask int;

-- Allar tilraunir við lokapróf
create table if not exists public.exam_attempts (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users on delete cascade,
  course text not null,
  score int not null,
  passed boolean not null,
  created_at timestamptz not null default now()
);

-- Viðurkenningarskjöl. Nafnið er afritað við útgáfu svo skjalið breytist ekki síðar.
create table if not exists public.certificates (
  code text primary key,
  user_id uuid not null references auth.users on delete cascade,
  course text not null,
  full_name text not null,
  score int not null,
  total int not null,
  issued_at timestamptz not null default now(),
  unique (user_id, course)
);

alter table public.profiles enable row level security;
alter table public.progress enable row level security;
alter table public.exam_keys enable row level security;
alter table public.exam_attempts enable row level security;
alter table public.certificates enable row level security;

drop policy if exists "eigin prófíll lesa" on public.profiles;
drop policy if exists "eigin prófíll búa til" on public.profiles;
drop policy if exists "eigin prófíll uppfæra" on public.profiles;
create policy "eigin prófíll lesa" on public.profiles for select using (id = auth.uid());
create policy "eigin prófíll búa til" on public.profiles for insert with check (id = auth.uid());
create policy "eigin prófíll uppfæra" on public.profiles for update using (id = auth.uid()) with check (id = auth.uid());

drop policy if exists "eigin framvinda" on public.progress;
create policy "eigin framvinda" on public.progress for all using (user_id = auth.uid()) with check (user_id = auth.uid());

drop policy if exists "eigin tilraunir" on public.exam_attempts;
create policy "eigin tilraunir" on public.exam_attempts for select using (user_id = auth.uid());

drop policy if exists "eigin skjöl" on public.certificates;
create policy "eigin skjöl" on public.certificates for select using (user_id = auth.uid());

-- Prófi skilað: farið er yfir svörin á þjóninum og skjal gefið út ef notandi stenst.
-- p_questions eru númer spurninganna í bankanum (talið frá 0), p_answers svörin við þeim.
drop function if exists public.submit_exam(text, int[]);
create or replace function public.submit_exam(p_course text, p_questions int[], p_answers int[])
returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_uid uuid := auth.uid();
  v_key int[];
  v_pass int;
  v_ask int;
  v_bank int;
  v_n int;
  v_score int := 0;
  v_last timestamptz;
  v_name text;
  v_code text;
  v_correct int[] := '{}';
  v_wait interval := interval '1 hour';  -- biðtími eftir fallið próf
  i int;
begin
  if v_uid is null then
    raise exception 'Innskráningu vantar';
  end if;

  select answers, pass_mark, ask into v_key, v_pass, v_ask from exam_keys where course = p_course;
  if v_key is null then
    raise exception 'Óþekkt námskeið: %', p_course;
  end if;
  v_bank := array_length(v_key, 1);
  v_ask := coalesce(v_ask, v_bank);
  v_n := coalesce(array_length(p_questions, 1), 0);

  if v_n <> v_ask or coalesce(array_length(p_answers, 1), 0) <> v_n then
    raise exception 'Svara þarf öllum % spurningunum', v_ask;
  end if;
  if (select count(distinct q) from unnest(p_questions) q) <> v_n
     or exists (select 1 from unnest(p_questions) q where q < 0 or q >= v_bank) then
    raise exception 'Ógild próftilraun';
  end if;

  select code into v_code from certificates where user_id = v_uid and course = p_course;
  if v_code is not null then
    return jsonb_build_object('already', true, 'code', v_code);
  end if;

  select full_name into v_name from profiles where id = v_uid;
  if coalesce(trim(v_name), '') = '' then
    raise exception 'Skráðu fullt nafn á prófílinn áður en þú tekur prófið';
  end if;

  select max(created_at) into v_last from exam_attempts
   where user_id = v_uid and course = p_course and not passed;
  if v_last is not null and v_last > now() - v_wait then
    return jsonb_build_object('wait_until', v_last + v_wait);
  end if;

  for i in 1..v_n loop
    v_correct := v_correct || v_key[p_questions[i] + 1];
    if p_answers[i] = v_key[p_questions[i] + 1] then
      v_score := v_score + 1;
    end if;
  end loop;

  insert into exam_attempts(user_id, course, score, passed)
  values (v_uid, p_course, v_score, v_score >= v_pass);

  if v_score >= v_pass then
    v_code := 'MON-' || upper(substr(encode(gen_random_bytes(4), 'hex'), 1, 4)) || '-' || upper(substr(encode(gen_random_bytes(4), 'hex'), 1, 4));
    insert into certificates(code, user_id, course, full_name, score, total)
    values (v_code, v_uid, p_course, trim(v_name), v_score, v_n);
    return jsonb_build_object('score', v_score, 'total', v_n, 'passed', true, 'code', v_code, 'answers', to_jsonb(v_correct));
  end if;

  return jsonb_build_object('score', v_score, 'total', v_n, 'passed', false, 'retry_at', now() + v_wait);
end;
$$;

revoke all on function public.submit_exam(text, int[], int[]) from public, anon;
grant execute on function public.submit_exam(text, int[], int[]) to authenticated;

-- Staðfesting skjals: hver sem er getur flett upp kóða.
create or replace function public.verify_certificate(p_code text)
returns table(code text, full_name text, course text, score int, total int, issued_at timestamptz)
language sql
security definer
set search_path = public, extensions
stable
as $$
  select c.code, c.full_name, c.course, c.score, c.total, c.issued_at
    from certificates c
   where c.code = upper(trim(p_code));
$$;

grant execute on function public.verify_certificate(text) to anon, authenticated;
