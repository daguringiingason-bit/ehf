/* Monný – Fagstig: Að lesa og reka fyrirtæki */
window.MONNY=window.MONNY||{courses:[]};
window.MONNY.courses.push({
 "id": "fagstig",
 "level": "Fagstig",
 "title": "Fagstig",
 "name": "Að lesa og reka fyrirtæki",
 "audience": "Fyrir fólk í rekstri",
 "color": "lagoon",
 "tagline": "Lestu ársreikninga eins og fagmaður og lærðu hvernig ákvarðanir í rekstri breyta tölunum. Allt út frá einu félagi, Fjöður ehf.",
 "chapters": [
  {
   "c": "sky",
   "title": "Hver er þetta?",
   "short": "Kennitala, ÍSAT og rekstrarform.",
   "lead": "Allt byrjar á hausnum: hver félagið er, hvenær það varð til og hvað það gerir. Fjöður ehf. selur íslenskar hettupeysur og annan fatnað í eigin verslun og á netinu.",
   "learn": "<h2>Að lesa</h2><p>Kennitala fyrirtækis er ekki tilviljanakennd. Fyrstu sex stafirnir eru stofndagurinn á forminu DDMMÁÁ, nema hvað 40 er bætt við daginn. Þannig er hægt að sjá strax hvort kennitala tilheyrir einstaklingi eða félagi: dagur yfir 40 þýðir fyrirtæki.</p>\n <p>Níundi stafurinn er vartala. Hver af fyrstu átta tölunum er margfölduð með föstu vægi (3, 2, 7, 6, 5, 4, 3, 2), summan er deild með 11 og afgangurinn dreginn frá 11. Ef útkoman passar ekki er kennitalan röng. Svona grípur kerfið innsláttarvillur.</p>\n <div class=\"formula\">5·3 + 4·2 + 0·7 + 3·6 + 1·5 + 9·4 + 1·3 + 3·2 = 91<br>91 mod 11 = 3, og 11 − 3 = 8<small>Vartala Fjaðrar er 8, og það passar við níunda stafinn í 540319-1380.</small></div>\n <p>ÍSAT-kóðinn segir hvað félagið gerir og forráðamaður hver er í forsvari. Smelltu á reitina á fyrirtækjasíðunni til að sjá skýringar.</p>",
   "tool": {
    "id": "fjodur",
    "sec": 0,
    "c": "sky"
   },
   "q": {
    "q": "Hvenær var Fjöður ehf. stofnað? Lestu það úr kennitölunni 540319-1380.",
    "o": [
     "54. mars 2019",
     "14. mars 2019",
     "5. apríl 2003",
     "19. mars 2054"
    ],
    "a": 1,
    "no": "Mundu að 40 er bætt við daginn hjá fyrirtækjum.",
    "ok": "54 − 40 = 14. Mánuður 03 og ár 19. Félagið var stofnað 14. mars 2019, sem passar við reitinn „Skráð“."
   },
   "after": "<h2>Að reka</h2><p>Áður en þú stofnar félag þarftu að velja rekstrarform. Algengast er að velja á milli þess að reka starfsemina á eigin kennitölu eða stofna einkahlutafélag.</p>\n <p><b>Á eigin kennitölu</b> er einfaldast og ódýrast að byrja, en þú berð persónulega ábyrgð á öllum skuldum. Ef reksturinn fer illa getur það náð til íbúðarinnar þinnar. <b>Einkahlutafélag</b> kostar meiri pappírsvinnu og ársreikningurinn verður opinber, en ábyrgðin takmarkast við hlutaféð.</p>\n <p>Í ehf. eru tvö hlutverk. <b>Stjórnin</b> setur stefnuna og hefur eftirlit fyrir hönd eigenda. <b>Framkvæmdastjórinn</b> sér um daglegan rekstur. Í litlum félögum er þetta oft sama manneskjan, en það er gott að vita hvaða hatt maður er með hverju sinni.</p>",
   "sc": {
    "q": "Þú og besti vinur þinn stofnið Fjöður saman. Hvernig skiptið þið eignarhlutnum?",
    "o": [
     [
      "50/50 og ekkert meira",
      "Sanngjarnt og einfalt. En ef þið verðið ósammála um eitthvað stórt getur hvorugt ráðið úrslitum og félagið festist. Ef annað ykkar hættir á það samt helminginn."
     ],
     [
      "51/49",
      "Skýrt hver ræður á endanum. En sá sem á 49% getur upplifað sig sem undirmann frekar en meðstofnanda, og það getur skemmt samstarfið."
     ],
     [
      "50/50 með hluthafasamkomulagi",
      "Mest vinna fyrirfram. Þið skrifið niður hvernig ágreiningur er leystur, hvað gerist ef annað hættir, og látið hlutina ávinnast yfir tíma. Flestir ráðgjafar mæla með þessari leið, einmitt af því að það er auðveldast að semja meðan allt gengur vel."
     ]
    ]
   },
   "sum": [
    "Fyrirtæki: dagur + 40 í kennitölunni.",
    "ÍSAT-kóðinn segir hvað félagið gerir.",
    "Í ehf. takmarkast ábyrgð eigenda við hlutaféð."
   ],
   "practice": [
    {
     "g": "ktday"
    },
    {
     "q": "Hver sér um daglegan rekstur ehf.?",
     "o": [
      "Stjórnin",
      "Framkvæmdastjórinn",
      "Hluthafafundur",
      "Endurskoðandinn"
     ],
     "a": 1,
     "e": "Stjórnin setur stefnu og hefur eftirlit; framkvæmdastjórinn rekur daglega."
    }
   ]
  },
  {
   "c": "coral",
   "title": "Bókhald frá grunni",
   "short": "Tvíhliða bókhald, debet og kredit, og fylgiskjöl.",
   "tool": null,
   "lead": "Allar tölurnar á fyrirtækjasíðunni verða til í bókhaldinu. Ef þú skilur hvernig ein færsla virkar, skilurðu hvernig allur ársreikningurinn er byggður.",
   "learn": "<p>Í <b>tvíhliða bókhaldi</b> hefur hver færsla tvær hliðar sem eru alltaf jafnháar: <b>debet</b> og <b>kredit</b>. Þess vegna gengur efnahagsjafnan alltaf upp.</p>\n  <div class=\"formula\">Debet: eignir aukast, gjöld aukast<br>Kredit: skuldir, eigið fé eða tekjur aukast<small>Hver færsla: summa debets = summa kredits.</small></div>\n  <p><b>Dæmi.</b> Fjöður selur peysu á 12.990 kr. og fær greitt með korti. Debet: bankareikningur 12.990. Kredit: sala 10.476 og útskattur 2.514. Önnur færsla: Fjöður kaupir efni fyrir 50.000 kr. á reikning. Debet: birgðir 50.000. Kredit: viðskiptaskuldir 50.000.</p>\n  <p>Hver færsla þarf <b>fylgiskjal</b>: reikning, kvittun eða samning sem sannar hana. Bókhaldsgögn þarf að varðveita í sjö ár.</p>\n  <div class=\"fact\"><b>Þú þarft ekki að færa bókhaldið sjálf/ur.</b> Flestir nota bókhaldskerfi og bókara. En sá sem skilur debet og kredit spyr betri spurninga og sér fyrr ef eitthvað er að.</div>",
   "q": {
    "q": "Fjöður tekur 5 m.kr. bankalán og peningarnir fara inn á bankareikning. Hvernig er færslan?",
    "o": [
     "Debet: lán. Kredit: banki.",
     "Debet: banki. Kredit: lán.",
     "Debet: tekjur. Kredit: banki.",
     "Debet: banki. Kredit: tekjur."
    ],
    "a": 1,
    "no": "Hvað eykst? Eign (bankinn) og skuld (lánið). Eignir aukast í debet, skuldir í kredit.",
    "ok": "Bankareikningurinn er eign sem eykst, svo hann fer í debet. Lánið er skuld sem eykst, svo það fer í kredit. Lán eru ekki tekjur."
   },
   "sc": {
    "q": "Þú ert nýbúin/n að stofna félag og veltan er lítil. Vinur segir þér að það sé óþarfi að halda bókhald fyrr en félagið stækkar.",
    "o": [
     [
      "Bíða",
      "Félög eru bókhaldsskyld frá fyrsta degi. Að endurgera bókhald ársins eftir á er dýrt, tímafrekt og villuhætt."
     ],
     [
      "Nota bókhaldskerfi frá byrjun",
      "Lítil vinna í hverri viku, og þú sérð stöðuna í rauntíma. Kerfin tengjast oft bankanum svo færslur skila sér sjálfkrafa."
     ],
     [
      "Fá bókara strax",
      "Kostar, en sparar tíma og mistök. Mörg lítil félög blanda saman: færa sjálf og láta bókara fara yfir og gera uppgjör."
     ]
    ]
   },
   "sum": [
    "Hver færsla hefur debet og kredit, og þau eru alltaf jöfn.",
    "Eignir og gjöld í debet; skuldir, eigið fé og tekjur í kredit.",
    "Hver færsla þarf fylgiskjal, sem geyma þarf í sjö ár."
   ],
   "practice": [
    {
     "q": "Félagið greiðir 200.000 kr. í leigu af bankareikningi. Hvað fer í debet?",
     "o": [
      "Banki",
      "Leigukostnaður",
      "Eigið fé",
      "Tekjur"
     ],
     "a": 1,
     "e": "Gjöld aukast í debet; bankinn lækkar í kredit."
    },
    {
     "q": "Viðskiptavinur fær reikning sem hann greiðir síðar. Hvað fer í debet?",
     "o": [
      "Sala",
      "Viðskiptakröfur",
      "Viðskiptaskuldir",
      "Banki"
     ],
     "a": 1,
     "e": "Krafa á viðskiptavininn er eign sem eykst."
    },
    {
     "q": "Hvers vegna gengur efnahagsjafnan alltaf upp?",
     "o": [
      "Endurskoðandinn lagar hana",
      "Hver færsla hefur jafnháa debet- og kredithlið",
      "Hún er nálgun",
      "Skatturinn reiknar hana"
     ],
     "a": 1,
     "e": "Tvíhliða bókhald heldur jafnvæginu í hverri færslu."
    }
   ]
  },
  {
   "c": "coral",
   "title": "Græðir félagið?",
   "short": "Rekstrarreikningur, verðlagning og núllpunktur.",
   "lead": "Rekstrarreikningurinn er eins og kvikmynd af árinu. Hann byrjar á öllu sem kom inn og dregur frá, lið fyrir lið, þar til hagnaðurinn stendur eftir.",
   "learn": "<h2>Að lesa</h2><p>Efsta línan, rekstrartekjur, er það sem flestir horfa á. En velta segir ekkert um hvort félagið græðir. Fjöður velti 236 milljónum árið 2025, en hagnaðurinn var bara brot af því.</p>\n <div class=\"formula\">Hagnaður = Tekjur − Kostnaður<small>Allur rekstrarreikningurinn er þessi jafna, brotin niður í skref.</small></div>\n <p>Hvert millistig svarar sinni spurningu. <b>Framlegð</b> segir hvort varan sjálf borgar sig. <b>EBITDA</b> segir hvort reksturinn í heild skilar peningum. <b>Hagnaður ársins</b> er það sem eftir er þegar búið er að greiða fyrir tæki, lán og skatt.</p>\n <p>Til að bera saman ár eða félög er hver lína skoðuð sem hlutfall af tekjum.</p>\n <div class=\"formula\">Hagnaðarhlutfall = Hagnaður ÷ Tekjur</div>",
   "tool": {
    "id": "fjodur",
    "sec": 1,
    "c": "coral"
   },
   "q": {
    "q": "Hvert var hagnaðarhlutfall Fjaðrar árið 2025? Notaðu tölurnar á fyrirtækjasíðunni.",
    "o": [
     "58,9%",
     "12,2%",
     "6,7%",
     "15,7%"
    ],
    "a": 2,
    "no": "Notaðu neðstu línuna, hagnað ársins, og deildu með tekjunum.",
    "ok": "15.734 ÷ 236.412 ≈ 6,7%. Af hverjum 100 krónum í sölu urðu tæpar 7 krónur að hagnaði. Hinir valkostirnir eru framlegðarhlutfallið (58,9%) og EBITDA-hlutfallið (12,2%)."
   },
   "after": "<h2>Að reka</h2><p>Tvennt ræður hagnaðinum sem þú stjórnar beint: verðið og kostnaðurinn. Tökum eina hettupeysu. Hún kostar 4.000 kr. í framleiðslu og er seld á 12.990 kr. En af því verði er virðisaukaskattur, 24%, sem fer til ríkisins.</p>\n <div class=\"formula\">Verð án VSK = 12.990 ÷ 1,24 ≈ 10.476 kr.<br>Framlegð á peysu = 10.476 − 4.000 = 6.476 kr.</div>\n <p>Kostnaður skiptist í <b>breytilegan</b>, sem hreyfist með sölu (efni, framleiðsla), og <b>fastan</b>, sem þarf að greiða hvort sem þú selur eða ekki (leiga, laun). Spurningin er: hve mikið þarftu að selja til að fastur kostnaður sé greiddur?</p>\n <div class=\"formula\">Núllpunktur = Fastur kostnaður ÷ Framlegð á einingu<small>Ef fastur kostnaður er 9 m.kr. á mánuði: 9.000.000 ÷ 6.476 ≈ 1.390 peysur á mánuði áður en fyrsta krónan í hagnað kemur.</small></div>",
   "sc": {
    "q": "Samkeppnisaðili lækkar verðið á sínum peysum um 20%. Hvað gerirðu?",
    "o": [
     [
      "Lækka verðið líka um 20%",
      "Verð án VSK fer í um 8.381 kr. og framlegðin í 4.381 kr. á peysu. Þú þarft þá að selja um 48% fleiri peysur bara til að standa í stað. Verðstríð vinnur sá sem hefur lægstan kostnað, ekki sá sem er hugrakkastur."
     ],
     [
      "Halda verðinu og byggja á vörumerkinu",
      "Verndar framlegðina. Þú tapar sennilega verðnæmustu kaupendunum, en ef fólk kaupir Fjöður vegna hönnunar og gæða gæti tapið orðið minna en þú óttast."
     ],
     [
      "Bæta við ódýrari línu",
      "Þú heldur aðalvörunni á sínu verði en mætir þeim sem leita að lægra verði. Á móti kemur meira flækjustig, fleiri vörur á lager og hætta á að ódýra línan éti söluna á dýrari línunni."
     ]
    ]
   },
   "sum": [
    "Velta segir ekkert um hagnað.",
    "Framlegð, EBITDA og hagnaður svara hver sinni spurningu.",
    "Núllpunktur = fastur kostnaður ÷ framlegð á einingu."
   ],
   "practice": [
    {
     "g": "gm"
    },
    {
     "g": "breakeven"
    },
    {
     "q": "Hvað er dregið frá til að fá EBIT úr EBITDA?",
     "o": [
      "Vextir",
      "Skattar",
      "Afskriftir",
      "Laun"
     ],
     "a": 2,
     "e": "EBIT er EBITDA mínus afskriftir."
    }
   ]
  },
  {
   "c": "lagoon",
   "title": "Hver á félagið?",
   "short": "Efnahagsreikningur og fjármögnun.",
   "lead": "Ef rekstrarreikningurinn er kvikmynd er efnahagsreikningurinn ljósmynd. Hann sýnir hvað félagið á og hvað það skuldar á einum degi.",
   "learn": "<h2>Að lesa</h2><div class=\"formula\">Eignir = Skuldir + Eigið fé<small>Þessi jafna gengur alltaf upp. Fjöður: 88.250 = 50.350 + 37.900.</small></div>\n <p>Vinstri hliðin er <i>hvað er til</i>. Hægri hliðin er <i>hver á tilkall til þess</i>. Allt sem félagið á hefur annaðhvort verið greitt með lánsfé eða peningum eigendanna, þar með talið hagnaði sem var ekki greiddur út.</p>\n <p>Eignir skiptast í <b>fastafjármuni</b>, sem nýtast í mörg ár, og <b>veltufjármuni</b>, sem breytast í peninga innan árs. Skuldir skiptast eins í langtíma og skammtíma.</p>\n <div class=\"formula\">Eiginfjárhlutfall = Eigið fé ÷ Eignir</div>\n <p>Þetta hlutfall segir hve stór hluti félagsins tilheyrir í raun eigendunum. Því hærra, því meira þolir félagið áföll áður en það kemst í vanda.</p>",
   "tool": {
    "id": "fjodur",
    "sec": 2,
    "c": "lagoon"
   },
   "q": {
    "q": "Hvert er eiginfjárhlutfall Fjaðrar í lok árs 2025?",
    "o": [
     "75,3%",
     "57,1%",
     "42,9%",
     "2,08"
    ],
    "a": 2,
    "no": "Deildu eigin fé með eignum samtals, ekki með skuldum.",
    "ok": "37.900 ÷ 88.250 ≈ 42,9%. Eigendurnir eiga tæp 43% af eignunum og lánveitendur afganginn. 75,3% fæst ef deilt er með skuldum, sem er algeng villa."
   },
   "after": "<h2>Að reka</h2><p>Þegar félag þarf peninga til að vaxa eru þrjár leiðir: að safna úr rekstrinum, að taka lán eða að fá fjárfesta. Hver leið kostar sitt, en kostnaðurinn er misaugljós.</p>\n <p><b>Lán</b> hefur augljósan kostnað. 20 m.kr. á 10% vöxtum kostar 2 m.kr. á ári. En þú heldur öllu félaginu.</p>\n <p><b>Fjárfestir</b> virðist ókeypis því ekkert þarf að endurgreiða. En hann fær hlut í félaginu að eilífu.</p>\n <div class=\"formula\">Fjárfestir greiðir 20 m.kr. fyrir 20% hlut<br>Virði eftir fjárfestingu = 20 ÷ 0,20 = 100 m.kr.<small>Ef félagið verður 300 m.kr. virði eftir fimm ár á hann 60 m.kr. Sá hlutur „kostaði“ þig 60 m.kr.</small></div>\n <p>Þegar ný hlutabréf eru gefin út minnkar hlutur þeirra sem fyrir eru. Það kallast þynning (dilution).</p>",
   "sc": {
    "q": "Þú vilt opna aðra verslun á Akureyri og þarft 20 m.kr. Hvernig fjármagnarðu það?",
    "o": [
     [
      "Bankalán",
      "Þú heldur 100% af félaginu og vextirnir eru um 2 m.kr. á ári. En lánið þarf að greiða þótt nýja verslunin gangi illa, og eiginfjárhlutfallið lækkar."
     ],
     [
      "Fjárfestir fyrir 20% hlut",
      "Engin endurgreiðsla og áhættunni er deilt. Góður fjárfestir getur líka fært reynslu og tengsl. En ef Fjöður verður verðmæt verður þessi hlutur dýrasta fjármögnunin sem þú fékkst."
     ],
     [
      "Bíða og safna úr rekstrinum",
      "Engin ný áhætta og enginn missir hlut. En það tekur tíma, og samkeppnisaðili gæti orðið fyrri til. Að gera ekkert er líka ákvörðun með kostnaði."
     ]
    ]
   },
   "sum": [
    "Eignir = skuldir + eigið fé.",
    "Eiginfjárhlutfall = eigið fé ÷ eignir.",
    "Fjárfestir „kostar“ hlut í félaginu að eilífu."
   ],
   "practice": [
    {
     "g": "eqr"
    },
    {
     "q": "Fjárfestir greiðir 50 m.kr. fyrir 25%. Hvert er virðið eftir fjárfestingu?",
     "o": [
      "75 m.kr.",
      "150 m.kr.",
      "200 m.kr.",
      "250 m.kr."
     ],
     "a": 2,
     "e": "50 ÷ 0,25 = 200 m.kr."
    }
   ]
  },
  {
   "c": "violet",
   "title": "Hvert fóru peningarnir?",
   "short": "Sjóðstreymi, VSK og greiðslufrestir.",
   "lead": "Hagnaður og peningar eru ekki það sama. Sjóðstreymið sýnir hvert raunverulegu krónurnar fóru, og það er hér sem mörg félög sem virðast ganga vel lenda í vanda.",
   "learn": "<h2>Að lesa</h2><p>Af hverju munar? Afskriftir eru kostnaður í bókhaldinu, en engir peningar fóru út á árinu. Vörur sem eru framleiddar en óseldar kosta peninga strax, en birtast ekki sem kostnaður fyrr en þær seljast. Sala á reikning telst sem tekjur þótt viðskiptavinurinn hafi ekki borgað.</p>\n <p>Sjóðstreymið skiptist í þrennt:</p>\n <div class=\"formula\">Rekstur + Fjárfesting + Fjármögnun = Breyting á handbæru fé<small>Fjöður 2025: 6.764 − 9.850 − 100 = −3.186</small></div>\n <p>Fjárfestar horfa mikið á <b>frjálst sjóðstreymi</b>: peningana sem reksturinn skilar umfram það sem þarf að fjárfesta.</p>\n <div class=\"formula\">Frjálst sjóðstreymi = Frá rekstri − Fjárfesting</div>",
   "tool": {
    "id": "fjodur",
    "sec": 3,
    "c": "violet"
   },
   "q": {
    "q": "Fjöður græddi 15,7 m.kr. árið 2025, en handbært fé lækkaði um 3,2 m.kr. Hvað skýrir þetta helst?",
    "o": [
     "Skatturinn tók hagnaðinn",
     "Birgðir jukust um 12,3 m.kr.",
     "Afskriftirnar voru of háar",
     "Félagið tapaði í raun peningum"
    ],
    "a": 1,
    "no": "Skoðaðu leiðréttingarnar fyrir ofan „Handbært fé frá rekstri“. Hver er stærst?",
    "ok": "Félagið lét framleiða mikið af peysum sem voru enn á lager í árslok. Þær kostuðu 12,3 m.kr. í peningum en birtast ekki sem kostnaður fyrr en þær seljast. Þetta er ekki endilega slæmt, en ef birgðir vaxa hraðar en salan ár eftir ár er það viðvörunarmerki."
   },
   "after": "<h2>Að reka</h2><p>Að stýra sjóðstreymi snýst um tímasetningu: hvenær peningar koma inn og hvenær þeir fara út.</p>\n <p><b>Virðisaukaskattur.</b> Þegar þú selur peysu á 12.990 kr. eru um 2.514 kr. VSK sem þú innheimtir fyrir ríkið. Peningarnir liggja á reikningnum þínum í nokkrar vikur, en þú átt þá ekki. Margir nýir rekstraraðilar lenda í vanda af því þeir eyða VSK-inum.</p>\n <p><b>Greiðslufrestir.</b> Ef viðskiptavinir greiða 60 dögum eftir sölu en þú greiðir birgjum eftir 30 daga ertu í raun að lána viðskiptavinunum peninga.</p>\n <div class=\"formula\">Runway = Handbært fé ÷ Mánaðarlegt tap<small>Hve marga mánuði þú lifir af áður en peningarnir klárast, ef ekkert breytist.</small></div>",
   "sc": {
    "q": "Stór verslunarkeðja vill selja Fjöður í öllum sínum búðum. Fyrsta pöntun er 10 m.kr., en hún vill 90 daga greiðslufrest. Þú átt 6 m.kr. í banka.",
    "o": [
     [
      "Samþykkja strax",
      "Frábær sala og mikil auglýsing. En þú þarft að láta framleiða peysurnar núna, um 4 m.kr., og færð ekki greitt fyrr en eftir þrjá mánuði. Það skilur eftir 2 m.kr. til að greiða laun og leigu á meðan. Eitt óvænt áfall og þú ert í vanda."
     ],
     [
      "Semja um styttri frest eða innborgun",
      "Til dæmis 30 daga, eða að keðjan greiði helminginn við pöntun. Margar keðjur segja nei, en það er alltaf þess virði að spyrja. Ef ekki, er hægt að skoða að fjármagna pöntunina sérstaklega hjá banka."
     ],
     [
      "Hafna",
      "Engin áhætta, en þú missir stærsta tækifæri ársins. Stundum er rétta svarið að vaxa hægar. Stundum er það að finna leið til að segja já."
     ]
    ]
   },
   "sum": [
    "Hagnaður er ekki það sama og peningar.",
    "Rekstur + fjárfesting + fjármögnun = breyting á handbæru fé.",
    "VSK á reikningnum er ekki þinn peningur."
   ],
   "practice": [
    {
     "g": "cfo"
    },
    {
     "q": "Hvers vegna eru afskriftir lagðar við hagnað í sjóðstreymi?",
     "o": [
      "Þær eru tekjur",
      "Engir peningar fóru út vegna þeirra á árinu",
      "Þær eru skattur",
      "Þær eru lán"
     ],
     "a": 1,
     "e": "Afskriftir eru kostnaður í bókhaldi en ekki útgreiðsla."
    }
   ]
  },
  {
   "c": "sky",
   "title": "VSK í rekstri",
   "short": "Útskattur, innskattur og uppgjör.",
   "tool": "vat",
   "lead": "Fyrirtæki innheimta virðisaukaskatt fyrir ríkið af því sem þau selja og fá til baka skattinn af því sem þau kaupa. Mismunurinn er greiddur, eða endurgreiddur, á hverju uppgjörstímabili.",
   "learn": "<p><b>Útskattur</b> er VSK sem þú innheimtir af viðskiptavinum. <b>Innskattur</b> er VSK sem þú greiddir af innkaupum til rekstrarins. Á hverju uppgjörstímabili, sem er almennt tveir mánuðir, er gert upp:</p>\n  <div class=\"formula\">VSK til greiðslu = Útskattur − Innskattur<small>Ef innskatturinn er hærri, t.d. eftir stóra fjárfestingu, færðu endurgreitt.</small></div>\n  <p>Þess vegna segja margir að VSK sé „ekki kostnaður“ hjá fyrirtæki. Það er rétt, svo lengi sem reksturinn er VSK-skyldur og allt er rétt fært. En peningarnir liggja á reikningnum í allt að tvo mánuði áður en þeir eru greiddir, og það er freistandi að nota þá.</p>\n  <p>Félög þurfa að skrá sig á VSK-skrá þegar velta fer yfir ákveðið lágmark. Sumar greinar eru undanþegnar, t.d. stór hluti heilbrigðis- og menntaþjónustu, og þá er ekki heldur hægt að draga innskatt frá.</p>\n  <div class=\"fact\"><b>Góð venja:</b> færðu VSK-hluta hverrar sölu strax inn á sérstakan reikning. Þá er peningurinn til þegar gjalddaginn kemur.</div>",
   "q": {
    "q": "Á tímabilinu selur Fjöður fyrir 3.100.000 kr. og kaupir inn fyrir 1.240.000 kr., allt með 24% VSK. Hve mikinn VSK þarf að greiða?",
    "o": [
     "446.400 kr.",
     "360.000 kr.",
     "600.000 kr.",
     "744.000 kr."
    ],
    "a": 1,
    "no": "Reiknaðu útskatt og innskatt með × 24 ÷ 124 og dragðu frá.",
    "ok": "Útskattur: 3.100.000 × 24 ÷ 124 = 600.000 kr. Innskattur: 1.240.000 × 24 ÷ 124 = 240.000 kr. Til greiðslu: 360.000 kr."
   },
   "sc": {
    "q": "Gjalddagi VSK er eftir viku og það vantar 400.000 kr. upp á.",
    "o": [
     [
      "Greiða seint",
      "Dráttarvextir og álag bætast við, og vanskil á VSK eru litin alvarlegum augum."
     ],
     [
      "Taka yfirdrátt til að brúa bilið",
      "Leysir málið í bili, en vandinn er að VSK-peningarnir voru notaðir í rekstur. Ef það gerist aftur er það merki um að sjóðstreymið sé í ólagi."
     ],
     [
      "Hafa samband við Skattinn fyrir gjalddaga",
      "Betra en að þegja. Og héðan í frá: aðskilinn VSK-reikningur."
     ]
    ]
   },
   "sum": [
    "VSK til greiðslu = útskattur − innskattur.",
    "VSK-peningarnir á reikningnum eru ekki þínir.",
    "Haltu VSK á sérstökum reikningi."
   ],
   "practice": [
    {
     "g": "vatnet"
    },
    {
     "q": "Hvað er innskattur?",
     "o": [
      "VSK af sölu",
      "VSK af innkaupum til rekstrar",
      "Tekjuskattur",
      "Tryggingagjald"
     ],
     "a": 1,
     "e": "Hann dregst frá útskattinum."
    },
    {
     "q": "Félag kaupir vél fyrir 12,4 m.kr. með VSK og selur lítið það tímabil. Hvað gerist líklega?",
     "o": [
      "Það greiðir háan VSK",
      "Það fær endurgreiðslu",
      "Ekkert",
      "Vélin verður VSK-frjáls"
     ],
     "a": 1,
     "e": "Innskatturinn er hærri en útskatturinn."
    }
   ]
  },
  {
   "c": "sun",
   "title": "Myndirðu lána?",
   "short": "Kennitölur, markmið og mælingar.",
   "lead": "Hráar tölur segja lítið einar og sér. Kennitölur eru hlutföll sem gera fyrirtæki af ólíkri stærð samanburðarhæf. Þetta eru tölurnar sem bankar og fjárfestar skoða fyrst.",
   "learn": "<h2>Að lesa</h2><p>Ekki rugla þessu saman við kennitölu félagsins. Á fyrirtækjasíðum merkir flipinn „Kennitölur“ fjárhagslegar lykiltölur.</p>\n <p>Kennitölur svara í grófum dráttum fjórum spurningum. <b>Vex félagið?</b> Tekjuvöxtur. <b>Er það arðbært?</b> Framlegðar-, EBITDA- og hagnaðarhlutfall. <b>Er það traust?</b> Eiginfjárhlutfall. <b>Getur það greitt reikningana sína?</b> Veltufjárhlutfall.</p>\n <div class=\"formula\">Veltufjárhlutfall = Veltufjármunir ÷ Skammtímaskuldir</div>\n <p>Mikilvægast er að skoða þróunina. Ein kennitala á einu ári segir lítið. Fimm ár í röð segja sögu. Skoðaðu hvernig hagnaðarhlutfall Fjaðrar hefur breyst frá 2021.</p>",
   "tool": {
    "id": "fjodur",
    "sec": 4,
    "c": "sun"
   },
   "q": {
    "q": "Bankinn skoðar veltufjárhlutfall Fjaðrar. Veltufjármunir eru 58.010 og skammtímaskuldir 27.950. Hvað er hlutfallið og hvað þýðir það?",
    "o": [
     "0,48. Félagið getur ekki greitt reikningana sína",
     "2,08. Skammtímaeignir duga tvisvar fyrir skammtímaskuldum",
     "2,08. Félagið er of skuldsett",
     "30.060. Félagið á 30 milljónir umfram skuldir"
    ],
    "a": 1,
    "no": "Deildu veltufjármunum með skammtímaskuldum og hugsaðu hvort hærri tala sé betri eða verri.",
    "ok": "58.010 ÷ 27.950 ≈ 2,08. Það sem breytist í peninga innan árs dugar rúmlega tvisvar fyrir því sem þarf að greiða innan árs. Bankinn yrði sáttur. En athugaðu að stór hluti veltufjármunanna eru birgðir, sem þarf fyrst að selja."
   },
   "after": "<h2>Að reka</h2><p>Ársreikningur er baksýnisspegill. Hann segir þér hvað gerðist fyrir mörgum mánuðum. Til að stýra félagi þarftu líka framrúðu: tölur sem þú skoðar vikulega og sýna hvert stefnir.</p>\n <p>Góð regla er að velja þrjár til fimm tölur og fylgjast með þeim reglulega. Fyrir Fjöður gætu það verið sala vikunnar, framlegðarhlutfall, handbært fé og birgðir í dögum.</p>\n <div class=\"formula\">Birgðir í dögum = Birgðir ÷ Vörunotkun × 365<small>Fjöður: 34.110 ÷ 97.140 × 365 ≈ 128 dagar. Það tæki rúma fjóra mánuði að selja lagerinn.</small></div>\n <p>Markmið virka best þegar þau eru mælanleg og með tímamörk. „Auka sölu“ er ósk. „Selja 1.500 peysur á mánuði fyrir lok júní“ er markmið.</p>",
   "sc": {
    "q": "Þú hefur tíma til að skoða eina tölu á hverjum mánudagsmorgni. Hverja velurðu?",
    "o": [
     [
      "Handbært fé",
      "Kemur í veg fyrir versta mögulega áfallið: að peningarnir klárist án þess að þú sjáir það koma. Margir reyndir rekstraraðilar segja að þetta sé talan sem skipti mestu."
     ],
     [
      "Sölu vikunnar",
      "Sýnir stefnuna fyrst. Ef salan dettur niður sérðu það áður en það birtist annars staðar. En sala án framlegðar getur blekkt."
     ],
     [
      "Framlegðarhlutfall",
      "Segir hvort vöxturinn sé arðbær. Félag sem selur meira og meira með minnkandi framlegð getur vaxið sig í þrot."
     ]
    ]
   },
   "sum": [
    "Kennitölur gera félög af ólíkri stærð samanburðarhæf.",
    "Þróun yfir ár segir meira en ein tala.",
    "Veltufjárhlutfall yfir 1: skammtímaeignir duga fyrir skammtímaskuldum."
   ],
   "practice": [
    {
     "g": "cr"
    },
    {
     "q": "Birgðir eru 30 og vörunotkun 365. Hve margir dagar af birgðum?",
     "o": [
      "12",
      "30",
      "365",
      "1.095"
     ],
     "a": 1,
     "e": "30 ÷ 365 × 365 = 30 dagar."
    }
   ]
  },
  {
   "c": "leaf",
   "title": "Hvað kostar starfsmaður?",
   "short": "Launakostnaður, framsal og ákvarðanir.",
   "lead": "Laun eru oftast stærsti kostnaðarliðurinn. Hjá Fjöður eru þau um 31% af tekjum. Að ráða, leiða og halda í gott fólk er því bæði stærðfræði og stjórnun.",
   "learn": "<h2>Að lesa</h2><p>Á fyrirtækjasíðum sést meðalfjöldi ársverka. Með honum er hægt að reikna tvær gagnlegar tölur.</p>\n <div class=\"formula\">Laun á ársverk = Launakostnaður ÷ Ársverk<br>Tekjur á ársverk = Tekjur ÷ Ársverk</div>\n <p>Fjöður 2025: 72.315 ÷ 13 ≈ 5,6 m.kr. á ársverk, og 236.412 ÷ 13 ≈ 18,2 m.kr. í tekjur á ársverk. Tekjur á ársverk eru mælikvarði á framleiðni: hvort fólkið skilar meiru eftir því sem félagið stækkar.</p>\n <p>Launakostnaður er meira en útborguð laun. Ofan á heildarlaun greiðir launagreiðandi meðal annars tryggingagjald og mótframlag í lífeyrissjóð. Samanlagt er það gróflega fimmtungur til fjórðungur ofan á launin, en nákvæm hlutföll breytast og fara eftir kjarasamningum.</p>",
   "tool": {
    "id": "fjodur",
    "sec": 5,
    "c": "leaf"
   },
   "q": {
    "q": "Þú ætlar að ráða starfsmann á 700.000 kr. heildarlaun á mánuði. Gerðu ráð fyrir að launatengd gjöld séu 22% ofan á. Hver er árlegur kostnaður?",
    "o": [
     "8,4 m.kr.",
     "10,2 m.kr.",
     "8,5 m.kr.",
     "15,4 m.kr."
    ],
    "a": 1,
    "no": "Margfaldaðu mánaðarlaunin með 1,22 og svo með 12.",
    "ok": "700.000 × 1,22 × 12 = 10.248.000 kr. Og með 58,9% framlegð þarf Fjöður að selja um 17,4 m.kr. meira á ári (10,25 ÷ 0,589) bara til að starfsmaðurinn borgi sig. 8,4 m.kr. fæst ef launatengdu gjöldin gleymast."
   },
   "after": "<h2>Að reka</h2><p><b>Að framselja.</b> Algengasta gildra stofnenda er að gera allt sjálf. Það virkar með þrjá starfsmenn en ekki þrettán. Spurðu: hvað er það sem aðeins ég get gert? Allt annað ætti einhvern tímann að fara á aðra.</p>\n <p><b>Að leiða.</b> Fólk þarf þrennt: að vita hvað er ætlast til af því, að fá heiðarlega endurgjöf og að finna traust til að taka ákvarðanir sjálft.</p>\n <p><b>Að taka ákvarðanir.</b> Gott er að greina á milli afturkræfra ákvarðana, sem hægt er að breyta ef þær reynast rangar (nýr litur á peysu), og óafturkræfra (tíu ára leigusamningur). Fyrri gerðina á að taka hratt. Þá seinni hægt.</p>",
   "sc": {
    "q": "Besti starfsmaðurinn þinn biður um 30% launahækkun. Annað fyrirtæki hefur boðið henni starf. Þú átt þriggja mánaða sjóð.",
    "o": [
     [
      "Samþykkja",
      "Þú heldur lykilmanneskju og sýnir að þú metur hana. En kostnaðurinn er varanlegur, og aðrir starfsmenn gætu frétt af því og viljað það sama."
     ],
     [
      "Hafna",
      "Sparar peninga til skamms tíma. En að finna og þjálfa arftaka tekur oft marga mánuði og kostar meira en hækkunin, fyrir utan þekkinguna sem fer með henni."
     ],
     [
      "Semja",
      "Til dæmis minni hækkun núna og skýr markmið sem gefa meira eftir sex mánuði, eða hlutdeild í hagnaði. Tengir hennar hag við hag félagsins. Krefst þess að þú standir við það sem þú lofar."
     ]
    ]
   },
   "sum": [
    "Launakostnaður er meira en útborguð laun.",
    "Tekjur á ársverk mæla framleiðni.",
    "Afturkræfar ákvarðanir hratt, óafturkræfar hægt."
   ],
   "practice": [
    {
     "g": "empcost"
    },
    {
     "q": "Laun eru 60 m.kr. og ársverk 12. Hver eru laun á ársverk?",
     "o": [
      "5 m.kr.",
      "6 m.kr.",
      "12 m.kr.",
      "720 m.kr."
     ],
     "a": 0,
     "e": "60 ÷ 12 = 5 m.kr."
    }
   ]
  },
  {
   "c": "leaf",
   "title": "Sala í tölum",
   "short": "CAC, LTV og brottfall.",
   "tool": "ltv",
   "lead": "Hversu mikið má kosta að ná í nýjan viðskiptavin? Svarið fer eftir því hve mikils virði hann er yfir allan tímann sem hann er hjá þér.",
   "learn": "<p><b>CAC</b> (customer acquisition cost) er heildarkostnaður við sölu og markaðsstarf deilt með fjölda nýrra viðskiptavina. <b>Brottfall</b> (churn) er hlutfall viðskiptavina sem hætta á hverju tímabili.</p>\n  <div class=\"formula\">CAC = Sölu- og markaðskostnaður ÷ Nýir viðskiptavinir<br>LTV = Tekjur á mánuði × Framlegð ÷ Brottfall á mánuði<small>Með 4% brottfalli á mánuði er meðalviðskiptavinur í um 1 ÷ 0,04 = 25 mánuði.</small></div>\n  <p>Algengt viðmið er að <b>LTV sé minnst þrefalt CAC</b>, og að CAC borgi sig á innan við ári. Ef LTV er lægra en CAC tapar félagið á hverjum nýjum viðskiptavini, og því hraðar sem það vex, því meira tapar það.</p>\n  <p>Brottfallið er oft vanmetnasta talan. Að lækka það úr 4% í 2% á mánuði tvöfaldar ævivirðið, án þess að ná í einn einasta nýjan viðskiptavin.</p>\n  <div class=\"fact\"><b>Fjöður</b> gæti notað þetta á áskrift að mánaðarlegum flíkum, en líka á venjulega netverslun: hve oft kemur viðskiptavinur aftur og hve mikið kostar fyrsta salan?</div>",
   "q": {
    "q": "Áskrift kostar 4.990 kr. á mánuði með 70% framlegð og 5% brottfalli á mánuði. CAC er 30.000 kr. Hvert er hlutfallið LTV ÷ CAC?",
    "o": [
     "0,7",
     "1,4",
     "2,3",
     "3,5"
    ],
    "a": 2,
    "no": "Reiknaðu LTV fyrst: 4.990 × 0,7 ÷ 0,05.",
    "ok": "LTV = 4.990 × 0,7 ÷ 0,05 = 69.860 kr. Og 69.860 ÷ 30.000 ≈ 2,3. Undir viðmiðinu 3, svo annaðhvort þarf að lækka CAC eða brottfall."
   },
   "sc": {
    "q": "Markaðsstjórinn vill tvöfalda auglýsingakostnaðinn til að ná í fleiri viðskiptavini. LTV ÷ CAC er nú 1,5.",
    "o": [
     [
      "Samþykkja",
      "Fleiri viðskiptavinir, en á hlutfallinu 1,5 skilar hver þeirra litlu umfram kostnaðinn, og CAC hækkar oft þegar auglýst er meira. Vöxturinn gæti brennt peningum."
     ],
     [
      "Lækka brottfall fyrst",
      "Hver prósentustig í brottfalli hækkar LTV. Betri þjónusta og vara geta verið ódýrari leið til vaxtar en auglýsingar."
     ],
     [
      "Prófa í smáum stíl",
      "Auka kostnaðinn um 20% í mánuð og mæla CAC nákvæmlega. Gögn í stað ágiskana."
     ]
    ]
   },
   "sum": [
    "CAC = sölu- og markaðskostnaður ÷ nýir viðskiptavinir.",
    "LTV = tekjur × framlegð ÷ brottfall.",
    "LTV ætti að vera minnst þrefalt CAC."
   ],
   "practice": [
    {
     "g": "ltv"
    },
    {
     "q": "Brottfall lækkar úr 4% í 2% á mánuði. Hvað gerist við LTV?",
     "o": [
      "Helmingast",
      "Tvöfaldast",
      "Ekkert",
      "Hækkar um 2%"
     ],
     "a": 1,
     "e": "LTV er í öfugu hlutfalli við brottfall."
    },
    {
     "q": "Félag eyðir 3 m.kr. í markaðsstarf og fær 100 nýja viðskiptavini. Hvert er CAC?",
     "o": [
      "3.000 kr.",
      "30.000 kr.",
      "300.000 kr.",
      "3 m.kr."
     ],
     "a": 1,
     "e": "3.000.000 ÷ 100 = 30.000 kr."
    }
   ]
  },
  {
   "c": "sky",
   "title": "Hvað myndirðu borga?",
   "short": "Verðmat og það sem gerir félag verðmætt.",
   "lead": "Hvað er fyrirtæki virði? Algengasta aðferðin í raunheimum er margfeldi: þú skoðar hvað sambærileg félög seldust á og yfirfærir hlutfallið.",
   "learn": "<h2>Að lesa</h2><div class=\"formula\">Heildarvirði = EBITDA × Margfeldi<br>Virði hlutafjár = Heildarvirði − Nettóskuldir</div>\n <p><b>Heildarvirði</b> er virði rekstrarins í heild. En kaupandinn tekur líka yfir skuldirnar, svo þær eru dregnar frá. Handbært fé fylgir líka með, svo það er dregið frá skuldunum. Útkoman, <b>virði hlutafjár</b>, er það sem eigendurnir fá í raun.</p>\n <p>Margfeldið er í raun spá markaðarins um framtíðina, þjappað í eina tölu. Félag sem vex hratt og stöðugt fær hátt margfeldi. Lítið félag sem stendur og fellur með stofnandanum fær lágt. Prófaðu sleðann á fyrirtækjasíðunni.</p>\n <p>Verðmat er mat, ekki staðreynd. Tveir hæfir greinendur geta komist að ólíkri niðurstöðu um sama félagið.</p>",
   "tool": {
    "id": "fjodur",
    "sec": 6,
    "c": "sky"
   },
   "q": {
    "q": "EBITDA Fjaðrar er 28,8 m.kr. Sambærileg félög seljast á 5× EBITDA. Nettóskuldir eru 20 m.kr. Hvert er virði hlutafjár?",
    "o": [
     "144 m.kr.",
     "124 m.kr.",
     "164 m.kr.",
     "49 m.kr."
    ],
    "a": 1,
    "no": "Reiknaðu fyrst heildarvirði og mundu svo eftir skuldunum.",
    "ok": "28,8 × 5 = 144 m.kr. í heildarvirði. Nettóskuldir eru 20 m.kr., svo virði hlutafjár er um 124 m.kr. Ef skuldunum er bætt við í stað þess að draga þær frá fæst 164."
   },
   "after": "<h2>Að reka</h2><p>Ef markmiðið er að byggja verðmætt félag skiptir máli hvað hækkar margfeldið, ekki bara hagnaðurinn. Kaupendur greiða meira fyrir:</p>\n <p><b>Endurteknar tekjur</b>, sem eru fyrirsjáanlegar. Áskrift eða fastir viðskiptavinir eru meira virði en stakar sölur. <b>Dreifðan viðskiptavinahóp</b>, svo enginn einn getur fellt félagið. <b>Kerfi sem virka án stofnandans.</b> Ef allt veltur á þér ertu að selja starf, ekki fyrirtæki. <b>Hreint bókhald</b>, því óreiða vekur tortryggni og lækkar verðið.</p>\n <div class=\"formula\">Samsettur árlegur vöxtur = (Lokagildi ÷ Upphafsgildi)<sup>1/n</sup> − 1<small>Ef 150 m.kr. verða 300 m.kr. á 5 árum: 2<sup>1/5</sup> − 1 ≈ 14,9% á ári.</small></div>",
   "sc": {
    "q": "Fjárfestir býður 150 m.kr. í allt félagið. Þú telur að Fjöður gæti orðið 300 m.kr. virði eftir fimm ár.",
    "o": [
     [
      "Selja",
      "Þú færð 150 m.kr. núna og örugglega. Að hafna þýðir að þú veðjar á að ná um 14,9% árlegri ávöxtun á félaginu, með allri áhættunni sem fylgir. Það er ekkert rangt við að taka öruggan sigur."
     ],
     [
      "Hafna",
      "Ef þú hefur rétt fyrir þér tvöfaldarðu verðmætið. En spár stofnenda eru yfirleitt bjartsýnar, og í fimm ár getur margt gerst. Spurðu: myndi ég kaupa félagið á 150 ef ég ætti það ekki?"
     ],
     [
      "Selja hluta",
      "Til dæmis 40% fyrir 60 m.kr. Þú tryggir hluta af verðmætinu, heldur áfram að stýra og nýtur vaxtar ef hann verður. Fjárfestirinn þarf þó að vilja minnihlutahlut."
     ]
    ]
   },
   "sum": [
    "Heildarvirði = EBITDA × margfeldi.",
    "Virði hlutafjár = heildarvirði − nettóskuldir.",
    "Endurteknar tekjur og óháð teymi hækka margfeldið."
   ],
   "practice": [
    {
     "g": "ev"
    },
    {
     "q": "Hvað af þessu hækkar yfirleitt margfeldið?",
     "o": [
      "Einn stór viðskiptavinur",
      "Endurteknar áskriftartekjur",
      "Félag sem stendur og fellur með stofnanda",
      "Óreiða í bókhaldi"
     ],
     "a": 1,
     "e": "Fyrirsjáanlegar tekjur eru meira virði."
    }
   ]
  }
 ],
 "exam": {
  "pass": 12,
  "questions": [
   [
    "Kennitala félags byrjar á 621104. Hvenær var það stofnað?",
    [
     "6. desember 2011",
     "4. nóvember 2021",
     "62. nóvember 2004",
     "22. nóvember 2004"
    ]
   ],
   [
    "Eignir eru 500 m.kr. og skuldir 350 m.kr. Hvert er eiginfjárhlutfallið?",
    [
     "70%",
     "30%",
     "43%",
     "150%"
    ]
   ],
   [
    "Hvað sýnir EBITDA?",
    [
     "Veltu félagsins",
     "Handbært fé í lok árs",
     "Hagnað eftir skatta",
     "Hagnað fyrir vexti, skatta og afskriftir"
    ]
   ],
   [
    "Hagnaður er 20, afskriftir 5, birgðir aukast um 10 og viðskiptakröfur um 5. Hvert er handbært fé frá rekstri?",
    [
     "40",
     "20",
     "30",
     "10"
    ]
   ],
   [
    "Veltufjármunir eru 90 og skammtímaskuldir 60. Hvert er veltufjárhlutfallið?",
    [
     "150",
     "30",
     "1,5",
     "0,67"
    ]
   ],
   [
    "Fastur kostnaður er 3 m.kr. á mánuði og framlegð á einingu er 1.500 kr. Hver er núllpunkturinn á mánuði?",
    [
     "20.000 einingar",
     "4.500 einingar",
     "200 einingar",
     "2.000 einingar"
    ]
   ],
   [
    "Fjárfestir greiðir 30 m.kr. fyrir 25% hlut. Hvert er virði félagsins eftir fjárfestinguna?",
    [
     "7,5 m.kr.",
     "120 m.kr.",
     "55 m.kr.",
     "90 m.kr."
    ]
   ],
   [
    "Starfsmaður er á 800.000 kr. heildarlaunum og launatengd gjöld eru 22%. Hver er árlegur kostnaður?",
    [
     "9,6 m.kr.",
     "10,6 m.kr.",
     "17,6 m.kr.",
     "11,7 m.kr."
    ]
   ],
   [
    "EBITDA er 40 m.kr., margfeldi 6 og nettóskuldir 60 m.kr. Hvert er virði hlutafjár?",
    [
     "180 m.kr.",
     "240 m.kr.",
     "300 m.kr.",
     "100 m.kr."
    ]
   ],
   [
    "Birgðir eru 20 og vörunotkun ársins 73. Um hve marga daga af birgðum er að ræða?",
    [
     "27",
     "100",
     "73",
     "365"
    ]
   ],
   [
    "Félag tekur lán og peningarnir fara á bankareikning. Hvað fer í kredit?",
    [
     "Gjöld",
     "Banki",
     "Tekjur",
     "Lán"
    ]
   ],
   [
    "Hvað fer í debet þegar félagið greiðir leigu?",
    [
     "Eigið fé",
     "Leigukostnaður",
     "Banki",
     "Skuldir"
    ]
   ],
   [
    "Hve lengi þarf að varðveita bókhaldsgögn?",
    [
     "Ótímabundið",
     "1 ár",
     "7 ár",
     "3 ár"
    ]
   ],
   [
    "Sala er 2.480.000 kr. og innkaup 620.000 kr., allt með 24% VSK. Hve mikinn VSK þarf að greiða?",
    [
     "446.400 kr.",
     "480.000 kr.",
     "360.000 kr.",
     "595.200 kr."
    ]
   ],
   [
    "Hvað er útskattur?",
    [
     "Útsvar",
     "VSK af sölu",
     "Tekjuskattur",
     "VSK af innkaupum"
    ]
   ],
   [
    "Tekjur 5.000 kr. á mánuði, framlegð 60%, brottfall 3%. Hvert er LTV?",
    [
     "166.667 kr.",
     "150.000 kr.",
     "30.000 kr.",
     "100.000 kr."
    ]
   ],
   [
    "Hvaða viðmið er algengt fyrir LTV ÷ CAC?",
    [
     "Minnst 3",
     "Undir 1",
     "Minnst 1",
     "Minnst 10"
    ]
   ],
   [
    "Tekjur 400, vörunotkun 240. Hvert er framlegðarhlutfallið?",
    [
     "24%",
     "40%",
     "60%",
     "160%"
    ]
   ],
   [
    "Hvað er ÍSAT?",
    [
     "Endurskoðunarstaðall",
     "Lánshæfismat",
     "Atvinnugreinaflokkun",
     "Skattflokkur"
    ]
   ],
   [
    "Hvers vegna eru afskriftir lagðar við hagnað í sjóðstreymi?",
    [
     "Þær eru skattur",
     "Engir peningar fóru út vegna þeirra á árinu",
     "Þær eru vextir",
     "Þær eru tekjur"
    ]
   ],
   [
    "Hvað þýðir að ábyrgð í ehf. sé takmörkuð?",
    [
     "Félagið greiðir ekki skatt",
     "Stjórnin ber enga ábyrgð",
     "Eigendur tapa í versta falli hlutafénu",
     "Lán eru bönnuð"
    ]
   ],
   [
    "Félag hefur eigið fé 30 og eignir 120. Hvert er eiginfjárhlutfallið?",
    [
     "40%",
     "25%",
     "400%",
     "30%"
    ]
   ],
   [
    "Hvaða kennitala sýnir hvort félag ráði við reikninga næstu 12 mánaða?",
    [
     "EBITDA",
     "Hagnaðarhlutfall",
     "Arðsemi eigin fjár",
     "Veltufjárhlutfall"
    ]
   ],
   [
    "Hvað hækkar yfirleitt margfeldi í verðmati?",
    [
     "Háð stofnanda",
     "Einn stór viðskiptavinur",
     "Endurteknar tekjur",
     "Óreiða í bókhaldi"
    ]
   ],
   [
    "Fastur kostnaður er 6 m.kr. og framlegð á einingu 3.000 kr. Hver er núllpunkturinn?",
    [
     "200",
     "18.000",
     "2.000",
     "3.000"
    ]
   ]
  ],
  "ask": 15
 },
 "order": 2
});
