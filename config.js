/*
  Monný – stillingar
  Settu inn slóð og "anon public" lykil úr Supabase (Project Settings → API).
  Anon-lykillinn má vera opinber: aðgangsreglurnar (RLS) í schema.sql vernda gögnin.
  Ef reitirnir eru tómir keyrir vefurinn í prufuham: námskeiðin virka,
  en innskráning, lokapróf og viðurkenningarskjöl eru óvirk.
*/
window.MONNY_CONFIG = {
  supabaseUrl: '',
  supabaseAnonKey: ''
};
