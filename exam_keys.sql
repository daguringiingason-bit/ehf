-- Monný: svarlyklar lokaprófa.
-- Keyrðu þessa skrá í SQL Editor í Supabase EFTIR schema.sql.
-- EKKI setja hana á GitHub. Hún er í .gitignore.

insert into public.exam_keys(course,answers,pass_mark,ask) values ('grunnur',array[0,3,2,3,2,3,2,1,0,2,1,3,0,1,2,2,2,0,0,0,0,2,1,0,2],12,15)
  on conflict (course) do update set answers=excluded.answers, pass_mark=excluded.pass_mark, ask=excluded.ask;
insert into public.exam_keys(course,answers,pass_mark,ask) values ('grunnur-krakkar',array[0,1,3,0,3,2,2,2,3,3,3,0,1,0,3,1,3,0,0,1,1,1,2,1,3],12,15)
  on conflict (course) do update set answers=excluded.answers, pass_mark=excluded.pass_mark, ask=excluded.ask;
insert into public.exam_keys(course,answers,pass_mark,ask) values ('fagstig',array[3,0,3,3,2,0,0,3,3,1,3,0,1,1,3,0,3,0,1,0,1,3,0,1,2],12,15)
  on conflict (course) do update set answers=excluded.answers, pass_mark=excluded.pass_mark, ask=excluded.ask;
insert into public.exam_keys(course,answers,pass_mark,ask) values ('fagstig-framhald',array[0,3,3,3,1,2,1,3,1,3,2,1,1,2,1,1,1,3,0,0,0,2,1,3,1],12,15)
  on conflict (course) do update set answers=excluded.answers, pass_mark=excluded.pass_mark, ask=excluded.ask;
