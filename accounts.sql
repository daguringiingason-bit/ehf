-- Monný: notandanöfn og lykilorð, án netfangs.
-- Keyrðu þessa skrá í SQL Editor í Supabase. Hún má fara á GitHub, því hún inniheldur engin leyndarmál.
-- Krefst þess að "Allow anonymous sign-ins" sé virkt í Authentication → Sign In / Providers.

create extension if not exists pgcrypto;

create table if not exists public.accounts (
  username text primary key check (username ~ '^[a-z0-9._-]{3,30}$'),
  pass_hash text not null,
  user_id uuid not null unique references auth.users on delete cascade,
  failed int not null default 0,
  locked_until timestamptz,
  created_at timestamptz not null default now()
);
alter table public.accounts enable row level security;
-- Engar RLS-reglur: enginn notandi les töfluna beint, aðeins í gegnum föllin hér að neðan.

-- Nýr aðgangur: tengir notandanafn og lykilorð við núverandi (nafnlausa) lotu.
create or replace function public.register_account(p_username text, p_password text, p_full_name text)
returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_uid uuid := auth.uid();
  v_u text := lower(trim(p_username));
  v_n text := trim(regexp_replace(coalesce(p_full_name, ''), '\s+', ' ', 'g'));
begin
  if v_uid is null then raise exception 'Innskráningu vantar'; end if;
  if v_u !~ '^[a-z0-9._-]{3,30}$' then return jsonb_build_object('ok', false, 'error', 'BAD_USERNAME'); end if;
  if length(coalesce(p_password, '')) < 8 then return jsonb_build_object('ok', false, 'error', 'SHORT_PASSWORD'); end if;
  if char_length(v_n) < 3 or position(' ' in v_n) = 0 then return jsonb_build_object('ok', false, 'error', 'BAD_NAME'); end if;
  if exists (select 1 from accounts where username = v_u) then return jsonb_build_object('ok', false, 'error', 'USERNAME_TAKEN'); end if;
  if exists (select 1 from accounts where user_id = v_uid) then return jsonb_build_object('ok', false, 'error', 'ALREADY_LINKED'); end if;

  insert into accounts(username, pass_hash, user_id) values (v_u, crypt(p_password, gen_salt('bf')), v_uid);
  insert into profiles(id, full_name) values (v_uid, v_n)
    on conflict (id) do update set full_name = excluded.full_name;
  return jsonb_build_object('ok', true, 'username', v_u);
end;
$$;

-- Innskráning: staðfestir lykilorð og flytur aðganginn yfir á lotuna í þessum vafra.
create or replace function public.login_account(p_username text, p_password text)
returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_uid uuid := auth.uid();
  v_u text := lower(trim(p_username));
  a accounts%rowtype;
begin
  if v_uid is null then raise exception 'Innskráningu vantar'; end if;

  select * into a from accounts where username = v_u for update;
  if not found then return jsonb_build_object('ok', false, 'error', 'BAD_LOGIN'); end if;
  if a.locked_until is not null and a.locked_until > now() then
    return jsonb_build_object('ok', false, 'error', 'LOCKED', 'until', a.locked_until);
  end if;

  if a.pass_hash <> crypt(coalesce(p_password, ''), a.pass_hash) then
    update accounts
       set failed = failed + 1,
           locked_until = case when failed + 1 >= 10 then now() + interval '15 minutes' else null end
     where username = v_u;
    return jsonb_build_object('ok', false, 'error', 'BAD_LOGIN');
  end if;

  if a.user_id <> v_uid then
    -- Flytja gögnin frá fyrri lotu yfir á þessa.
    delete from profiles where id = v_uid;
    update profiles set id = v_uid where id = a.user_id;

    insert into progress(user_id, course, solved, updated_at)
      select v_uid, course, solved, updated_at from progress where user_id = a.user_id
      on conflict (user_id, course) do update
        set solved = (select coalesce(array_agg(distinct x order by x), '{}') from unnest(progress.solved || excluded.solved) x),
            updated_at = now();
    delete from progress where user_id = a.user_id;

    update exam_attempts set user_id = v_uid where user_id = a.user_id;
    delete from certificates where user_id = v_uid;
    update certificates set user_id = v_uid where user_id = a.user_id;
  end if;

  update accounts set user_id = v_uid, failed = 0, locked_until = null where username = v_u;
  return jsonb_build_object('ok', true, 'username', v_u);
end;
$$;

create or replace function public.my_username()
returns text
language sql
security definer
set search_path = public
stable
as $$
  select username from accounts where user_id = auth.uid();
$$;

revoke all on function public.register_account(text, text, text) from public, anon;
revoke all on function public.login_account(text, text) from public, anon;
revoke all on function public.my_username() from public, anon;
grant execute on function public.register_account(text, text, text) to authenticated;
grant execute on function public.login_account(text, text) to authenticated;
grant execute on function public.my_username() to authenticated;
