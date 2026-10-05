# Monný

Námskeið í fjármálum á íslensku, frá fyrstu launum til verðmats fyrirtækja.

| Stig | Námskeið | Fyrir |
| --- | --- | --- |
| Stig | Námskeið | Fyrir | Kaflar |
| --- | --- | --- | --- |
| Grunnur | **Grunnur**: Fjármál fullorðinsáranna | Fullorðna sem vilja ná tökum á lánum, kortum og sparnaði | 10 |
| Grunnur | **Grunnur krakkar**: Peningarnir þínir | 13–16 ára | 10 |
| Fagstig | **Fagstig**: Að lesa og reka fyrirtæki | Fólk í rekstri | 10 |
| Fagstig | **Fagstig framhald**: Greining, verðmat og fjármögnun | Lengra komna | 9 |

Hver kafli hefur útskýringar, reiknivél, æfingasett (þar sem tölurnar breytast í hvert skipti í reikningsdæmum), gátu sem opnar næsta kafla, aðstæður án eins rétts svars og samantekt. Hvert námskeið endar á lokaprófi: 15 spurningar dregnar af handahófi úr 25 spurninga banka, og 12 rétt þarf til að standast. Sá sem stenst fær viðurkenningarskjal með staðfestingarkóða sem hver sem er getur flett upp.

## Prófa á eigin tölvu

Engin smíði eða uppsetning þarf. Í möppunni:

```
python3 -m http.server 8000
```

Opnaðu svo http://localhost:8000. Án Supabase keyrir vefurinn í **prufuham**: öll námskeiðin virka og framvinda vistast í vafranum, en innskráning, lokapróf og skjöl eru óvirk.

## Birta á GitHub Pages

1. Búðu til repository og settu innihald möppunnar í rótina.
2. **Settings → Pages → Deploy from a branch**, veldu `main` og `/ (root)`.
3. Síðan birtist á `https://<notandanafn>.github.io/<repo>/`.

## Tengja Supabase (innskráning, próf og skjöl)

Supabase sér um innskráningu með tölvupósti og geymir prófíla, framvindu, próftilraunir og skjöl. Ókeypis áskrift dugar til að byrja.

1. Stofnaðu verkefni á [supabase.com](https://supabase.com).
2. Opnaðu **SQL Editor** og keyrðu `schema.sql`.
3. Keyrðu svo `exam_keys.sql`. Hún inniheldur svarlykla prófanna.
4. Í **Authentication → URL Configuration**: settu GitHub Pages slóðina sem **Site URL** og bættu henni við **Redirect URLs**. Bættu líka við `http://localhost:8000` ef þú prófar heima.
5. Í **Project Settings → API**: afritaðu **Project URL** og **anon public** lykilinn í `config.js`.

Anon-lykillinn má vera opinber. Aðgangsreglurnar (Row Level Security) í `schema.sql` tryggja að hver notandi sjái aðeins sín eigin gögn.

### Um svarlyklana

Farið er yfir lokaprófin á þjóninum, í fallinu `submit_exam`. Svarlyklarnir eru í töflu sem enginn notandi getur lesið, og þess vegna er ekki hægt að svindla með því að skoða kóðann. Skráin `exam_keys.sql` er í `.gitignore` svo hún fari ekki á GitHub. Geymdu afrit af henni á öruggum stað.

Eftir fallið próf þarf að bíða í eina klukkustund áður en reynt er aftur. Breyttu `v_wait` í `schema.sql` til að breyta því.

### Tölvupóstur

Innbyggða póstþjónusta Supabase er hugsuð til prófunar og sendir aðeins takmarkaðan fjölda pósta á klukkustund. Áður en vefurinn fer í almenna notkun þarf að tengja eigin SMTP-þjónustu undir **Authentication → Emails → SMTP Settings**.

Innskráningartengillinn þarf að vera opnaður í sama vafra og hann var beðinn um í.

## Uppbygging

Allar skrár eru í rót repository:

```
index.html             Síðan sjálf
style.css              Útlit, ljóst og dökkt þema, prentútlit skjala
config.js              Supabase-stillingar
app.js                 Leiðsögn, innskráning, framvinda, próf og skjöl
tools.js               Allar reiknivélar
grunnur.js o.fl.       Efni hvers námskeiðs
schema.sql             Töflur, aðgangsreglur og föll (keyrð í Supabase)
```

Svarlyklarnir (exam_keys.sql) eru ALDREI settir á GitHub. Þeir eru keyrðir beint í Supabase.

Til að breyta efni kafla skaltu breyta viðeigandi skrá í námskeiðsskránum. Ef spurningum í lokaprófi er breytt þarf líka að uppfæra svarlykilinn í `exam_keys.sql` og keyra hana aftur. Svörin eru talin frá 0: fyrsti valkostur er 0, annar 1 o.s.frv. Fjöldi spurninga í hverju prófi og lágmarkseinkunn eru í dálkunum `ask` og `pass_mark` í töflunni `exam_keys`.

Æfingadæmin með breytilegum tölum eru skilgreind í `GENS` í `tools.js`.

### Ef eldri útgáfa hefur verið sett upp

Keyrðu `schema.sql` og `exam_keys.sql` aftur, því prófafallið og svarlyklarnir hafa breyst. Framvinda er vistuð eftir númeri kafla, og þar sem köflum hefur verið bætt inn á milli getur vistuð framvinda frá eldri útgáfu bent á rangan kafla.

## Uppfærslur sem þarf að muna

- **Skattar.** Skatthlutföll, þrepamörk, persónuafsláttur og frítekjumark barna miðast við 2026 og eru í `TAX` efst í `tools.js`. Þau breytast um hver áramót.
- **Ríkisreikningur.** Skipting útgjalda er úr ríkisreikningsgögnum 2025, flokkuð gróft eftir málefnasviðum. Hún er í `SPEND` og `INC` í `tools.js`.

## Fyrirvari

Monný er kennsluefni, ekki fjármálaráðgjöf. Fjöður ehf. er tilbúið félag. 
