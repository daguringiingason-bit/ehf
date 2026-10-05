/* Monný – Fagstig framhald: Greining, verðmat og fjármögnun */
window.MONNY=window.MONNY||{courses:[]};
window.MONNY.courses.push({
 "id": "fagstig-framhald",
 "level": "Fagstig",
 "title": "Fagstig framhald",
 "name": "Greining, verðmat og fjármögnun",
 "audience": "Fyrir lengra komna",
 "color": "violet",
 "tagline": "Tólin sem greinendur, fjárfestar og fjármálastjórar nota: DuPont, veltufé, DCF, WACC, hluthafaskrár og áreiðanleikakönnun.",
 "chapters": [
  {
   "c": "sky",
   "title": "Hvaðan kemur arðsemin?",
   "short": "DuPont-greining brýtur arðsemi eigin fjár í þrennt.",
   "lead": "Tvö félög geta haft nákvæmlega sömu arðsemi eigin fjár af gjörólíkum ástæðum. Annað hefur háa framlegð, hitt veltir eignunum hratt, það þriðja er bara skuldsett. DuPont-greining sýnir hvert er hvað.",
   "learn": "<div class=\"formula\">ROE = Hagnaður/Tekjur × Tekjur/Eignir × Eignir/Eigið fé<small>Hagnaðarhlutfall × eignavelta × skuldsetningarmargfaldari. Tekjur og eignir styttast út, og eftir stendur hagnaður ÷ eigið fé.</small></div>\n <p><b>Hagnaðarhlutfall</b> mælir verðlagningu og kostnaðarstjórn. <b>Eignavelta</b> mælir hve vel eignirnar eru nýttar: hve miklar tekjur hver króna í eignum skilar. <b>Skuldsetningarmargfaldarinn</b> mælir hve mikið félagið notar lánsfé.</p>\n <p>Fyrstu tveir þættirnir eru rekstrarleg gæði. Sá þriðji er fjármögnunarákvörðun, og hann magnar bæði hagnað og tap. ROE sem byggir á skuldsetningu er brothættari en ROE sem byggir á framlegð.</p>\n <div class=\"fact\"><b>Fjöður ehf. 2025:</b> 6,7% × 2,68 × 2,33 ≈ 41,5%. Há arðsemi, en hún byggir að miklu leyti á hraðri eignaveltu og töluverðri skuldsetningu, ekki á framlegðinni.</div>",
   "tool": "dupont",
   "q": {
    "q": "Félag A er með 10% hagnaðarhlutfall, eignaveltu 1,0 og skuldsetningarmargfaldara 1,5. Félag B er með 4%, 2,5 og 2,0. Hvort hefur hærri arðsemi eigin fjár?",
    "o": [
     "A, með 15%",
     "B, með 20%",
     "Þau eru jöfn",
     "Ekki hægt að segja til um það"
    ],
    "a": 1,
    "no": "Margfaldaðu þættina þrjá saman fyrir hvort félag.",
    "ok": "A: 10% × 1,0 × 1,5 = 15%. B: 4% × 2,5 × 2,0 = 20%. B hefur hærri arðsemi, en hún byggir á veltu og skuldsetningu. A hefur traustari framlegð og þolir áföll betur."
   },
   "sc": {
    "q": "Stjórnin vill hækka arðsemi eigin fjár úr 15% í 20% á næsta ári.",
    "o": [
     [
      "Auka skuldsetningu, t.d. greiða út arð með lánsfé",
      "Fljótvirkasta leiðin á pappír. En áhættan eykst, vaxtakostnaður hækkar og í samdrætti fellur ROE hraðar. Þetta er fjármögnunarbragð, ekki rekstrarbati."
     ],
     [
      "Bæta framlegð",
      "Varanlegasta leiðin, en hún tekur tíma: endursemja við birgja, hækka verð eða breyta vöruframboði."
     ],
     [
      "Auka eignaveltu",
      "T.d. minnka birgðir og innheimta hraðar. Það losar fé, minnkar eignir og hækkar ROE án nýrrar áhættu. Oft vanmetin leið."
     ]
    ]
   },
   "sum": [
    "ROE = hagnaðarhlutfall × eignavelta × skuldsetningarmargfaldari.",
    "Arðsemi sem byggir á framlegð er traustari en arðsemi sem byggir á skuldum.",
    "Eignavelta er oft vanmetin leið að hærri arðsemi."
   ],
   "practice": [
    {
     "g": "dupont"
    },
    {
     "q": "Hvaða þáttur DuPont er fjármögnunarákvörðun frekar en rekstrarleg?",
     "o": [
      "Hagnaðarhlutfall",
      "Eignavelta",
      "Skuldsetningarmargfaldari",
      "Enginn"
     ],
     "a": 2,
     "e": "Hann endurspeglar hve mikið lánsfé er notað."
    }
   ]
  },
  {
   "c": "lagoon",
   "title": "Hve lengi er féð bundið?",
   "short": "Veltufjárhringrás: DSO, DIO og DPO.",
   "lead": "Frá því þú greiðir birgjum og þar til viðskiptavinurinn greiðir þér líður tími. Á meðan er peningurinn bundinn. Því lengri sem hringrásin er, því meira fé þarf reksturinn, og því hraðar vex þörfin þegar félagið stækkar.",
   "learn": "<div class=\"formula\">DSO = Viðskiptakröfur ÷ Tekjur × 365<br>DIO = Birgðir ÷ Vörunotkun × 365<br>DPO = Viðskiptaskuldir ÷ Vörunotkun × 365</div>\n <p><b>DSO</b> eru dagar þar til viðskiptavinir greiða. <b>DIO</b> eru dagar sem vörur sitja á lager. <b>DPO</b> eru dagar sem þú hefur til að greiða birgjum.</p>\n <div class=\"formula\">Veltufjárhringrás (CCC) = DSO + DIO − DPO</div>\n <p>Hjá Fjöður er hringrásin um 111 dagar, aðallega vegna 128 daga birgðahalds. Það skýrir hvers vegna félagið græddi 15,7 m.kr. en átti samt minna í bankanum í lok árs. Hraður vöxtur með langa hringrás getur sett arðbært félag í greiðsluþrot.</p>\n <div class=\"fact\"><b>Neikvæð hringrás</b> er draumastaða: viðskiptavinir greiða áður en þú greiðir birgjum. Áskriftarfélög og sumar verslanir ná þessu, og þá fjármagnar vöxturinn sig sjálfur.</div>",
   "tool": "ccc",
   "q": {
    "q": "DSO er 30 dagar, DIO 60 dagar og DPO 45 dagar. Hver er veltufjárhringrásin?",
    "o": [
     "15 dagar",
     "45 dagar",
     "75 dagar",
     "135 dagar"
    ],
    "a": 1,
    "no": "Leggðu saman DSO og DIO og dragðu DPO frá.",
    "ok": "30 + 60 − 45 = 45 dagar. Félagið þarf að fjármagna 45 daga af rekstri áður en peningarnir skila sér."
   },
   "sc": {
    "q": "Birgir býður 2% afslátt ef þú greiðir innan 10 daga í stað 30.",
    "o": [
     [
      "Taka afsláttinn",
      "Þú færð 2% fyrir að greiða 20 dögum fyrr. Á ársgrundvelli jafngildir það um 37% ávöxtun (2/98 × 365/20). Ef þú átt féð, eða getur fjármagnað það ódýrar en það, borgar þetta sig nær alltaf."
     ],
     [
      "Halda 30 daga frestinum",
      "Heldur handbæru fé hærra og hringrásinni styttri. Rétt ákvörðun ef lausafjárstaðan er þröng, en dýr ef hún er það ekki."
     ],
     [
      "Semja um hvort tveggja",
      "T.d. afslátt við 15 daga. Birgjar meta oft fyrirsjáanlegar greiðslur meira en nákvæma dagsetningu."
     ]
    ]
   },
   "sum": [
    "CCC = DSO + DIO − DPO.",
    "Löng hringrás og hraður vöxtur geta tæmt sjóðina.",
    "Snemmgreiðsluafsláttur er oft mjög há ávöxtun."
   ],
   "practice": [
    {
     "g": "ccc"
    },
    {
     "q": "Hvað gerist við fjárþörf ef DIO lækkar?",
     "o": [
      "Hún eykst",
      "Hún minnkar",
      "Ekkert",
      "Hún tvöfaldast"
     ],
     "a": 1,
     "e": "Styttri birgðatími losar fé."
    }
   ]
  },
  {
   "c": "violet",
   "title": "Hvað er framtíðin virði í dag?",
   "short": "Núvirði og sjóðstreymisverðmat.",
   "lead": "Króna í dag er meira virði en króna eftir ár, því hægt er að ávaxta hana og því framtíðin er óviss. Allt verðmat byggir á þessari einföldu hugmynd.",
   "learn": "<div class=\"formula\">Núvirði = Framtíðarvirði ÷ (1 + r)<sup>t</sup><small>r er ávöxtunarkrafan: sú ávöxtun sem fjárfestir krefst miðað við áhættuna.</small></div>\n <p><b>Sjóðstreymisverðmat (DCF)</b> spáir fyrir um frjálst sjóðstreymi félagsins nokkur ár fram í tímann, núvirðir það og bætir við <b>lokavirði</b> fyrir öll árin þar á eftir.</p>\n <div class=\"formula\">Lokavirði = FCF<sub>síðasta ár</sub> × (1 + g) ÷ (r − g)<small>Gordon-líkanið. g er langtímavöxtur, sem ætti ekki að vera hærri en langtímahagvöxtur.</small></div>\n <p>Veikleikinn: lokavirðið er oft 60–80% af niðurstöðunni, og það er mjög viðkvæmt fyrir r og g. Lítil breyting á forsendum getur breytt verðmatinu um tugi prósenta. Prófaðu að breyta ávöxtunarkröfunni um eitt prósentustig í reiknivélinni.</p>\n <div class=\"fact\"><b>DCF er ekki svar, heldur spurning:</b> hvaða forsendur þurfa að standast til að verðið sé réttlætanlegt? Góðir greinendur birta alltaf næmnigreiningu.</div>",
   "tool": "dcf",
   "q": {
    "q": "Þú færð 1.000.000 kr. eftir 3 ár. Ávöxtunarkrafan er 10%. Hvert er núvirðið?",
    "o": [
     "700.000 kr.",
     "751.315 kr.",
     "909.091 kr.",
     "1.331.000 kr."
    ],
    "a": 1,
    "no": "Deildu með 1,1 í þriðja veldi.",
    "ok": "1.000.000 ÷ 1,1³ = 1.000.000 ÷ 1,331 ≈ 751.315 kr. 909.091 er núvirði eftir eitt ár, og 700.000 fæst með einföldum frádrætti sem tekur ekki tillit til vaxtavaxta."
   },
   "sc": {
    "q": "DCF-líkanið þitt sýnir að 78% af virði félagsins kemur úr lokavirðinu.",
    "o": [
     [
      "Treysta niðurstöðunni",
      "Það er algengt hlutfall, en þýðir að þú ert fyrst og fremst að veðja á forsendurnar um langtímavöxt og ávöxtunarkröfu, ekki á spána fyrir næstu fimm ár."
     ],
     [
      "Lengja spátímabilið",
      "Með 10 ára spá í stað 5 minnkar hlutur lokavirðisins. En spá fyrir ár 6–10 er sjaldnast traustari en lokavirðið sjálft."
     ],
     [
      "Bera saman við margfaldaraverðmat",
      "Ef DCF gefur virði sem jafngildir 25× EBITDA en sambærileg félög seljast á 8× þarf sterk rök fyrir muninum. Tvær ólíkar aðferðir sem lenda nálægt hvor annarri gefa mun meira traust."
     ]
    ]
   },
   "sum": [
    "Núvirði = framtíðarvirði ÷ (1 + r)^t.",
    "Lokavirði = FCF × (1 + g) ÷ (r − g).",
    "Lokavirðið vegur oft mest og er viðkvæmast."
   ],
   "practice": [
    {
     "g": "pv"
    },
    {
     "g": "gordon"
    }
   ]
  },
  {
   "c": "violet",
   "title": "Næmnigreining og sviðsmyndir",
   "short": "Hvað ef forsendurnar standast ekki?",
   "tool": "sens",
   "lead": "Eitt verðmat er ein ágiskun. Næmnigreining sýnir hve mikið niðurstaðan breytist þegar forsendurnar breytast, og það er oft mikilvægara en talan sjálf.",
   "learn": "<p>Í <b>næmnigreiningu</b> eru ein eða tvær forsendur breyttar kerfisbundið og áhrifin skoðuð. Algengast er að setja upp töflu með ávöxtunarkröfu á öðrum ásnum og langtímavöxt á hinum.</p>\n  <p>Í <b>sviðsmyndagreiningu</b> eru margar forsendur breyttar saman í samræmdar sögur: bjartsýna, líklegasta og svartsýna. Hverri er gefið líkindavægi.</p>\n  <div class=\"formula\">Vænt virði = Σ (Líkur × Virði í sviðsmynd)<small>T.d. 25% × 220 + 50% × 150 + 25% × 80 = 150.</small></div>\n  <p>Næmnigreiningin svarar líka annarri spurningu: hvaða forsenda skiptir mestu máli? Ef virðið breytist lítið með vexti en mikið með ávöxtunarkröfu, er það krafan sem þarf að rökstyðja best.</p>\n  <div class=\"fact\"><b>Ósamhverf áhætta.</b> Ef svartsýna sviðsmyndin þýðir gjaldþrot en sú bjartsýna aðeins aðeins meiri hagnað, getur vænt virði verið jákvætt en fjárfestingin samt óskynsamleg.</div>",
   "q": {
    "q": "Bjartsýn sviðsmynd gefur 300 m.kr. (20% líkur), líkleg 180 m.kr. (60%) og svartsýn 60 m.kr. (20%). Hvert er vænt virði?",
    "o": [
     "168 m.kr.",
     "180 m.kr.",
     "192 m.kr.",
     "200 m.kr."
    ],
    "a": 1,
    "no": "Margfaldaðu hverja sviðsmynd með líkum hennar og leggðu saman.",
    "ok": "0,2 × 300 + 0,6 × 180 + 0,2 × 60 = 60 + 108 + 12 = 180 m.kr. Hér er dreifingin samhverf, svo vænt virði er jafnt líklegustu sviðsmyndinni."
   },
   "sc": {
    "q": "Seljandi kynnir verðmat með einni tölu: 450 m.kr. Engin næmnigreining fylgir.",
    "o": [
     [
      "Taka töluna sem upphafspunkt",
      "Þá ertu að semja út frá forsendum seljandans, sem eru líklega bjartsýnar."
     ],
     [
      "Biðja um líkanið og keyra eigin næmnigreiningu",
      "Rétt. Ef 450 krefst 2% lægri ávöxtunarkröfu en þú telur eðlilega, veistu hvar á að semja."
     ],
     [
      "Hafna strax",
      "Of snemmt. Talan gæti staðist, en þú veist það ekki fyrr en þú hefur prófað forsendurnar."
     ]
    ]
   },
   "sum": [
    "Næmnigreining sýnir hvaða forsendur skipta mestu máli.",
    "Vænt virði = summa líkinda × virðis.",
    "Ein tala án næmnigreiningar segir lítið."
   ],
   "practice": [
    {
     "q": "Hvað sýnir næmnigreiningartafla með kröfu og vexti á ásunum?",
     "o": [
      "Sögulega ávöxtun",
      "Hvernig virði breytist með forsendum",
      "Hlutabréfaverð",
      "Skattbyrði"
     ],
     "a": 1,
     "e": "Hún sýnir áhrif breytinga á tvær lykilforsendur."
    },
    {
     "q": "Sviðsmyndir: 50% × 100 + 50% × 40. Hvert er vænt virði?",
     "o": [
      "40",
      "70",
      "100",
      "140"
     ],
     "a": 1,
     "e": "50 + 20 = 70."
    },
    {
     "g": "gordon"
    }
   ]
  },
  {
   "c": "coral",
   "title": "Hvað kostar fjármagnið?",
   "short": "CAPM og veginn fjármagnskostnaður.",
   "lead": "Ávöxtunarkrafan í DCF er ekki tala úr lausu lofti. Hún er það sem fjármagnið kostar félagið: blanda af því sem lánveitendur og eigendur krefjast.",
   "learn": "<div class=\"formula\">Krafa á eigið fé = r<sub>f</sub> + β × markaðsálag + sérstakt álag<small>CAPM. r<sub>f</sub> eru áhættulausir vextir, β mælir hve mikið hlutabréfið sveiflast með markaðnum.</small></div>\n <p>Eigendur krefjast meiri ávöxtunar en lánveitendur, því þeir fá greitt síðast og bera mesta áhættu. Fyrir lítil, óskráð félög er oft bætt við <b>smáfélagsálagi</b> vegna aukinnar áhættu og takmarkaðs seljanleika.</p>\n <div class=\"formula\">WACC = E/V × r<sub>e</sub> + D/V × r<sub>d</sub> × (1 − t)<small>Vextir eru frádráttarbærir frá skatti, svo raunkostnaður skulda er lægri. Á Íslandi er tekjuskattur lögaðila 20%.</small></div>\n <p>Vegna skattahagræðis virðast skuldir ódýrari. En meiri skuldsetning eykur áhættu eigenda, sem hækkar r<sub>e</sub>, og á endanum hækka lánveitendur líka vextina. Það er enginn ókeypis hádegisverður.</p>",
   "tool": "wacc",
   "q": {
    "q": "Eigið fé er 60 og skuldir 40 (markaðsvirði). Krafa á eigið fé er 14%, vextir á skuldum 8% og skatthlutfall 20%. Hver er WACC?",
    "o": [
     "10,96%",
     "11,0%",
     "11,6%",
     "22,0%"
    ],
    "a": 0,
    "no": "Mundu að margfalda vaxtakostnaðinn með (1 − skatthlutfall).",
    "ok": "0,6 × 14% + 0,4 × 8% × 0,8 = 8,4% + 2,56% = 10,96%. Án skattahagræðisins hefði niðurstaðan orðið 11,6%."
   },
   "sc": {
    "q": "Fjármálastjórinn leggur til að lækka WACC með því að fjármagna næsta áfanga eingöngu með lánsfé.",
    "o": [
     [
      "Samþykkja",
      "WACC lækkar líklega til skamms tíma vegna skattahagræðis og lægri kröfu á skuldir. En ef skuldsetningin verður mikil hækka bæði r<sub>e</sub> og r<sub>d</sub> og ávinningurinn hverfur."
     ],
     [
      "Hafna og nota eigið fé",
      "Minni áhætta og meira svigrúm í samdrætti. En eigið fé er dýrasta fjármagnið, og núverandi eigendur þynnast ef nýir koma inn."
     ],
     [
      "Setja markmið um skuldahlutfall",
      "T.d. nettóskuldir undir 2,5× EBITDA. Algeng nálgun sem nýtir skattahagræðið án þess að stefna rekstrinum í hættu."
     ]
    ]
   },
   "sum": [
    "Krafa á eigið fé = rf + β × markaðsálag + álag.",
    "WACC = E/V × re + D/V × rd × (1 − t).",
    "Meiri skuldir hækka áhættu og kröfu eigenda."
   ],
   "practice": [
    {
     "g": "wacc"
    },
    {
     "q": "Hvers vegna eru skuldir margfaldaðar með (1 − t) í WACC?",
     "o": [
      "Vextir eru frádráttarbærir frá skatti",
      "Skuldir eru áhættulausar",
      "Lánveitendur greiða skatt",
      "Það er hefð"
     ],
     "a": 0,
     "e": "Skattahagræðið lækkar raunkostnað skulda."
    }
   ]
  },
  {
   "c": "coral",
   "title": "Sambærileg félög",
   "short": "Verðmat út frá margföldurum markaðarins.",
   "tool": "comps",
   "lead": "Í stað þess að spá fyrir um framtíðina má spyrja einfaldari spurningar: hvað greiðir markaðurinn fyrir sambærileg félög í dag?",
   "learn": "<p>Algengustu margfaldararnir eru <b>EV/EBITDA</b>, <b>EV/tekjur</b> og <b>V/H</b> (verð á móti hagnaði). EV-margfaldarar eru óháðir fjármögnun og henta vel til samanburðar. V/H er einfaldur en verður fyrir áhrifum af skuldsetningu og sköttum.</p>\n  <p>Ferlið: veldu hóp sambærilegra félaga, reiknaðu margfaldara hvers, finndu <b>miðgildið</b> og beittu því á félagið sem verið er að meta. Miðgildið er notað svo eitt óvenjulegt félag skekki ekki niðurstöðuna.</p>\n  <div class=\"formula\">Heildarvirði = EBITDA × Miðgildi EV/EBITDA<br>Virði hlutafjár = Heildarvirði − Nettóskuldir</div>\n  <p>Sjaldnast eru til fullkomlega sambærileg félög. Skráð félög eru stærri, seljanlegri og oft með meiri dreifingu en lítil, óskráð félög. Þess vegna er oft beitt <b>afslætti</b> vegna stærðar og seljanleika.</p>\n  <div class=\"fact\"><b>Viðskiptamargfaldarar</b> byggja á verði í raunverulegum kaupum á heilum félögum. Þeir eru yfirleitt hærri en markaðsmargfaldarar, því kaupandinn greiðir fyrir yfirráð.</div>",
   "q": {
    "q": "EBITDA er 30 m.kr. Sambærileg félög eru á 5,0×, 7,0× og 11,0× EV/EBITDA. Beita á 20% afslætti vegna stærðar. Hvert er heildarvirðið miðað við miðgildið?",
    "o": [
     "168 m.kr.",
     "184 m.kr.",
     "210 m.kr.",
     "230 m.kr."
    ],
    "a": 0,
    "no": "Miðgildið er miðtalan, ekki meðaltalið. Beittu svo afslættinum.",
    "ok": "Miðgildið er 7,0×. Eftir 20% afslátt: 5,6×. Og 30 × 5,6 = 168 m.kr. Meðaltalið (7,67×) hefði gefið hærri niðurstöðu vegna eins óvenjulegs félags."
   },
   "sc": {
    "q": "DCF gefur 250 m.kr. en sambærileg félög benda til 160 m.kr.",
    "o": [
     [
      "Treysta DCF",
      "Það getur verið rétt ef félagið vex mun hraðar en hin. En þá þarf sterk rök fyrir því."
     ],
     [
      "Treysta margfaldaraverðmati",
      "Það endurspeglar markaðinn í dag, en markaðurinn getur verið rangur og sambærilegu félögin ekki svo sambærileg."
     ],
     [
      "Rannsaka muninn",
      "Rétt. Mismunur upp á 90 m.kr. segir að forsendurnar séu ólíkar. Að finna hvar þær greinir á er verðmætasta innsýnin."
     ]
    ]
   },
   "sum": [
    "Notaðu miðgildi, ekki meðaltal.",
    "EV-margfaldarar eru óháðir fjármögnun.",
    "Lítil, óskráð félög fá oft afslátt."
   ],
   "practice": [
    {
     "g": "comps"
    },
    {
     "q": "Hvers vegna er miðgildi notað frekar en meðaltal?",
     "o": [
      "Það er alltaf hærra",
      "Eitt óvenjulegt félag skekkir það síður",
      "Það er auðveldara",
      "Lög krefjast þess"
     ],
     "a": 1,
     "e": "Miðgildi er ónæmara fyrir útlögum."
    },
    {
     "q": "Hvaða margfaldari er óháður skuldsetningu?",
     "o": [
      "V/H",
      "EV/EBITDA",
      "Arðgreiðsluhlutfall",
      "Ekkert"
     ],
     "a": 1,
     "e": "Heildarvirði tekur til bæði skulda og eigin fjár."
    }
   ]
  },
  {
   "c": "sun",
   "title": "Hver á hvað eftir fjármögnun?",
   "short": "Pre-money, þynning og forgangur við sölu.",
   "lead": "Þegar fjárfestir kemur inn snýst samningurinn um meira en verðið. Skilmálarnir ráða því hver fær hvað þegar félagið er selt, og þeir geta skipt meira máli en verðmatið.",
   "learn": "<div class=\"formula\">Post-money = Pre-money + Fjárfesting<br>Hlutur fjárfestis = Fjárfesting ÷ Post-money</div>\n <p><b>Pre-money</b> er virði félagsins fyrir fjárfestinguna, <b>post-money</b> eftir hana. Fjárfestir sem greiðir 100 m.kr. á 400 m.kr. pre-money fær 20%. Stofnendur sem áttu 100% eiga þá 80%, og það kallast <b>þynning</b>.</p>\n <p><b>Valréttarpottur</b> eru hlutir fráteknir fyrir starfsfólk. Fjárfestar krefjast oft að hann sé búinn til fyrir fjárfestinguna, svo hann þynnir aðeins stofnendur, ekki fjárfestinn.</p>\n <h2>Forgangur við sölu</h2>\n <p>Með <b>1× forgangi án þátttöku</b> fær fjárfestirinn annaðhvort fjárfestinguna sína til baka eða sinn hlutfallslega hlut, hvort sem er hærra. Ef félagið selst á lægra verði en vonast var til getur fjárfestirinn fengið mun meira en hlutfallið segir til um, og stofnendur mun minna.</p>\n <div class=\"fact\"><b>Hærra verðmat er ekki alltaf betra.</b> Hátt pre-money með 2× forgangi getur skilað stofnendum minna en lægra pre-money með 1× forgangi, nema félagið seljist á mjög háu verði.</div>",
   "tool": "cap",
   "q": {
    "q": "Fjárfestir setur 100 m.kr. inn á 400 m.kr. pre-money, með 1× forgangi án þátttöku. Félagið er selt á 300 m.kr. Hve mikið fær fjárfestirinn?",
    "o": [
     "60 m.kr.",
     "75 m.kr.",
     "100 m.kr.",
     "300 m.kr."
    ],
    "a": 2,
    "no": "Berðu saman forgangsupphæðina og hlutfallslega hlutinn. Fjárfestirinn velur það sem er hærra.",
    "ok": "Hlutur hans er 20%, og 20% af 300 eru 60 m.kr. En forgangurinn tryggir honum 100 m.kr., sem er hærra. Hann fær 100 og eftir standa 200 m.kr. fyrir alla aðra, þó þeir eigi 80%."
   },
   "sc": {
    "q": "Tveir fjárfestar bjóða: A býður 600 m.kr. pre-money með 2× forgangi, B 450 m.kr. pre-money með 1× forgangi. Báðir fjárfesta 150 m.kr.",
    "o": [
     [
      "Taka tilboði A",
      "Hærra verðmat og minni þynning: 20% í stað 25%. En 2× forgangur þýðir að fjárfestirinn fær 300 m.kr. fyrst við sölu. Ef félagið selst á 600 m.kr. fá stofnendur aðeins 300, þó þeir eigi 80%."
     ],
     [
      "Taka tilboði B",
      "Meiri þynning, en hreinni skilmálar. Við 600 m.kr. sölu fær fjárfestirinn 150 og stofnendur 450. Prófaðu bæði tilboðin í reiknivélinni með mismunandi söluverði."
     ],
     [
      "Semja um skilmálana",
      "Algengt er að fá fjárfesti til að fara í 1× forgang gegn því að lækka verðmatið lítillega. Skilmálar eru oftast samningsatriði, ekki lögmál."
     ]
    ]
   },
   "sum": [
    "Post-money = pre-money + fjárfesting.",
    "Valréttarpottur fyrir fjárfestingu þynnir aðeins stofnendur.",
    "Forgangur getur skipt meira máli en verðmatið."
   ],
   "practice": [
    {
     "g": "pref"
    },
    {
     "q": "Pre-money 300, fjárfesting 100. Hvert er hlutfall fjárfestis?",
     "o": [
      "20%",
      "25%",
      "33%",
      "40%"
     ],
     "a": 1,
     "e": "100 ÷ 400 = 25%."
    }
   ]
  },
  {
   "c": "lagoon",
   "title": "Gjaldmiðlaáhætta",
   "short": "Krónan, náttúruleg vörn og framvirkir samningar.",
   "tool": "fxrisk",
   "lead": "Krónan er lítil mynt sem getur sveiflast mikið. Fyrir félag með tekjur eða kostnað í erlendri mynt getur gengið skipt meira máli en nokkur rekstrarákvörðun.",
   "learn": "<p>Gjaldmiðlaáhætta myndast þegar tekjur og kostnaður eru ekki í sömu mynt. Útflutningsfélag með tekjur í evrum en laun í krónum tapar þegar krónan <b>styrkist</b>, því hver evra skilar færri krónum. Innflutningsfélag tapar þegar krónan <b>veikist</b>.</p>\n  <div class=\"formula\">Áhrif á hagnað ≈ (Tekjur í mynt − Kostnaður í mynt) × Gengisbreyting</div>\n  <p><b>Náttúruleg vörn</b> er ódýrasta vörnin: að hafa tekjur og kostnað í sömu mynt, t.d. með því að kaupa aðföng eða fjármagna sig í sömu mynt og tekjurnar. <b>Framvirkir samningar</b> festa gengi fram í tímann gegn gjaldi og kröfu um tryggingar.</p>\n  <p>Lán í erlendri mynt, þegar tekjurnar eru í krónum, er skuldsett veðmál á gengið. Við hrun krónunnar árið 2008 hækkuðu slík lán gríðarlega í krónum talið og mörg heimili og fyrirtæki réðu ekki við þau.</p>\n  <div class=\"fact\"><b>Spurningin sem stjórnendur eiga að geta svarað:</b> hvað gerist við hagnaðinn ef krónan styrkist eða veikist um 10%?</div>",
   "q": {
    "q": "Félag hefur tekjur í evrum sem jafngilda 200 m.kr. og kostnað í evrum upp á 40 m.kr. Annar kostnaður er í krónum. Krónan styrkist um 10%. Um hve mikið lækkar hagnaðurinn?",
    "o": [
     "4 m.kr.",
     "16 m.kr.",
     "20 m.kr.",
     "24 m.kr."
    ],
    "a": 1,
    "no": "Áhrifin ráðast af nettóstöðunni í evrum.",
    "ok": "Nettóstaðan í evrum er 200 − 40 = 160 m.kr. Við 10% styrkingu lækkar hún um 16 m.kr. Ef allur kostnaðurinn hefði verið í evrum hefðu áhrifin verið mun minni."
   },
   "sc": {
    "q": "Ferðaþjónustufélag með tekjur að mestu í evrum vill taka 300 m.kr. lán. Bankinn býður lán í evrum á lægri vöxtum en í krónum.",
    "o": [
     [
      "Taka evrulán",
      "Getur verið náttúruleg vörn: tekjur og afborganir í sömu mynt. Ef tekjurnar eru raunverulega í evrum minnkar það áhættu frekar en að auka hana."
     ],
     [
      "Taka krónulán",
      "Hærri vextir, og félagið situr þá uppi með gengisáhættu á tekjunum án varnar."
     ],
     [
      "Blanda",
      "Hluti í evrum á móti tekjunum, hluti í krónum á móti krónukostnaði. Algeng og skynsamleg nálgun."
     ]
    ]
   },
   "sum": [
    "Áhættan felst í ójafnvægi milli tekna og kostnaðar í mynt.",
    "Náttúruleg vörn er ódýrust.",
    "Lán í annarri mynt en tekjurnar eru veðmál á gengið."
   ],
   "practice": [
    {
     "g": "fxr"
    },
    {
     "q": "Innflutningsfélag með kostnað í evrum og tekjur í krónum. Hvað gerist þegar krónan veikist?",
     "o": [
      "Hagnaður eykst",
      "Hagnaður minnkar",
      "Ekkert",
      "Tekjur hækka"
     ],
     "a": 1,
     "e": "Aðföngin verða dýrari í krónum."
    },
    {
     "q": "Hvað er náttúruleg vörn?",
     "o": [
      "Framvirkur samningur",
      "Að hafa tekjur og kostnað í sömu mynt",
      "Gulleign",
      "Tryggingar"
     ],
     "a": 1,
     "e": "Þá jafnast gengisáhrifin út."
    }
   ]
  },
  {
   "c": "leaf",
   "title": "Eru tölurnar réttar?",
   "short": "Leiðrétt EBITDA og áreiðanleikakönnun.",
   "lead": "Áður en félag er keypt fer kaupandinn í gegnum bókhaldið með fínni greiðu. Markmiðið er að finna hvað reksturinn skilar í raun, og hvað gæti komið á óvart eftir undirskrift.",
   "learn": "<p>Uppgefin EBITDA endurspeglar sjaldan rekstrarlega getu félagsins nákvæmlega. Því er reiknuð <b>leiðrétt EBITDA</b>, sem er grunnurinn að verðinu.</p>\n <div class=\"formula\">Leiðrétt EBITDA = Uppgefin EBITDA + Einskiptiskostnaður − Vanmetinn kostnaður</div>\n <p><b>Leiðréttingar upp</b> eru t.d. einskiptis lögfræðikostnaður, kostnaður við flutninga eða starfslokasamningar. <b>Leiðréttingar niður</b> eru t.d. eigandi sem tekur lægri laun en markaðslaun, húsnæði leigt af tengdum aðila undir markaðsverði eða einskiptistekjur.</p>\n <p>Hver milljón í leiðréttingu margfaldast með margfeldinu. Með 6× margfeldi lækkar 12 m.kr. lækkun á EBITDA kaupverðið um 72 m.kr.</p>\n <h2>Viðvörunarmerki</h2>\n <p>Tekjur sem vaxa hraðar en sjóðstreymi, viðskiptakröfur sem vaxa hraðar en sala, mikil háð fáum viðskiptavinum, tíðar breytingar á endurskoðanda og tekjufærsla sem breytist rétt fyrir sölu.</p>\n <div class=\"fact\"><b>Eðlilegt veltufé.</b> Í kaupsamningi er yfirleitt samið um eðlilegt stig veltufjár. Ef seljandinn tæmir birgðir eða innheimtir hart rétt fyrir afhendingu lækkar kaupverðið á móti.</div>",
   "tool": "adj",
   "q": {
    "q": "Uppgefin EBITDA er 50 m.kr. Í henni er 6 m.kr. einskiptis lögfræðikostnaður. Eigandinn tekur 6 m.kr. í laun, en markaðslaun fyrir starfið eru 18 m.kr. Hver er leiðrétt EBITDA?",
    "o": [
     "38 m.kr.",
     "44 m.kr.",
     "56 m.kr.",
     "62 m.kr."
    ],
    "a": 1,
    "no": "Einskiptiskostnaðurinn bætist við, en mismunurinn á launum dregst frá.",
    "ok": "50 + 6 − (18 − 6) = 44 m.kr. Nýr eigandi þyrfti að ráða framkvæmdastjóra á markaðslaunum, svo raunveruleg EBITDA er lægri en uppgefin."
   },
   "sc": {
    "q": "Í áreiðanleikakönnun kemur í ljós að einn viðskiptavinur stendur fyrir 45% af tekjum félagsins.",
    "o": [
     [
      "Lækka verðið",
      "Endurspeglar áhættuna, en seljandinn gæti hafnað. Kaupandinn situr samt uppi með sömu áhættu, bara á lægra verði."
     ],
     [
      "Skilyrt greiðsla (earn-out)",
      "Hluti kaupverðsins greiðist aðeins ef tekjur haldast yfir ákveðnu marki næstu 2–3 ár. Deilir áhættunni, en getur valdið ágreiningi um hvernig tekjur eru reiknaðar."
     ],
     [
      "Krefjast langtímasamnings við viðskiptavininn",
      "Ef hægt er að tryggja samning fyrir afhendingu minnkar áhættan verulega. Seljandinn þarf þá að vinna þá vinnu áður en hann fær greitt."
     ]
    ]
   },
   "sum": [
    "Leiðrétt EBITDA endurspeglar raunverulega getu rekstrarins.",
    "Hver leiðrétting margfaldast með margfeldinu.",
    "Samþjöppun viðskiptavina er algeng áhætta."
   ],
   "practice": [
    {
     "g": "adj"
    },
    {
     "q": "Hvað er „earn-out“?",
     "o": [
      "Bónus til starfsfólks",
      "Hluti kaupverðs sem greiðist ef árangur næst",
      "Arður",
      "Lán"
     ],
     "a": 1,
     "e": "Það deilir áhættunni milli kaupanda og seljanda."
    }
   ]
  }
 ],
 "exam": {
  "pass": 12,
  "questions": [
   [
    "Hagnaðarhlutfall er 5%, eignavelta 2,0 og skuldsetningarmargfaldari 2,0. Hver er arðsemi eigin fjár?",
    [
     "9%",
     "10%",
     "40%",
     "20%"
    ]
   ],
   [
    "DSO er 40 dagar, DIO 50 dagar og DPO 30 dagar. Hver er veltufjárhringrásin?",
    [
     "90 dagar",
     "20 dagar",
     "120 dagar",
     "60 dagar"
    ]
   ],
   [
    "Hvert er núvirði 500.000 kr. sem greiðast eftir 2 ár, með 10% ávöxtunarkröfu?",
    [
     "450.000 kr.",
     "454.545 kr.",
     "400.000 kr.",
     "413.223 kr."
    ]
   ],
   [
    "Frjálst sjóðstreymi næsta árs er 10, ávöxtunarkrafan 10% og langtímavöxtur 2%. Hvert er lokavirðið samkvæmt Gordon-líkaninu?",
    [
     "125",
     "102",
     "100",
     "500"
    ]
   ],
   [
    "Eigið fé og skuldir eru jafnstór. Krafa á eigið fé er 12%, vextir 6% og skatthlutfall 20%. Hver er WACC?",
    [
     "9,6%",
     "18%",
     "8,4%",
     "9,0%"
    ]
   ],
   [
    "Fjárfestir greiðir 50 m.kr. fyrir 20% hlut. Hvert er pre-money virðið?",
    [
     "300 m.kr.",
     "200 m.kr.",
     "250 m.kr.",
     "40 m.kr."
    ]
   ],
   [
    "Fjárfestir á 20% eftir að hafa fjárfest 50 m.kr. með 1× forgangi án þátttöku. Félagið selst á 500 m.kr. Hve mikið fær hann?",
    [
     "400 m.kr.",
     "150 m.kr.",
     "50 m.kr.",
     "100 m.kr."
    ]
   ],
   [
    "Hvað af eftirfarandi er dæmigerð leiðrétting sem hækkar EBITDA?",
    [
     "Einskiptistekjur af eignasölu",
     "Einskiptiskostnaður vegna málaferla",
     "Eigandi á lægri launum en markaðslaunum",
     "Leiga undir markaðsverði"
    ]
   ],
   [
    "Birgir býður 1% afslátt við greiðslu innan 10 daga í stað 30. Um það bil hve mikil árleg ávöxtun felst í að taka afslættinum?",
    [
     "1%",
     "18,4%",
     "3,7%",
     "36,5%"
    ]
   ],
   [
    "Hvað gerist almennt við kröfu á eigið fé þegar skuldsetning félags eykst?",
    [
     "Hún breytist ekki",
     "Hún hækkar",
     "Hún lækkar",
     "Hún verður jöfn vöxtum á skuldum"
    ]
   ],
   [
    "Sviðsmyndir: 25% × 200, 50% × 120, 25% × 40. Hvert er vænt virði?",
    [
     "200",
     "110",
     "140",
     "120"
    ]
   ],
   [
    "Hvað sýnir næmnigreining?",
    [
     "Söguleg gögn",
     "Hvernig niðurstaða breytist með forsendum",
     "Skattbyrði",
     "Hluthafa"
    ]
   ],
   [
    "EBITDA 20 m.kr. Sambærileg félög á 4×, 6× og 9×. Hvert er heildarvirði miðað við miðgildi?",
    [
     "80 m.kr.",
     "180 m.kr.",
     "120 m.kr.",
     "127 m.kr."
    ]
   ],
   [
    "Hvers vegna er afsláttur oft beittur á lítil óskráð félög?",
    [
     "Lægri laun",
     "Lög krefjast þess",
     "Minni seljanleiki og meiri áhætta",
     "Lægri skattar"
    ]
   ],
   [
    "Útflutningsfélag með tekjur í evrum og kostnað í krónum. Hvað gerist þegar krónan styrkist?",
    [
     "Kostnaður lækkar",
     "Hagnaður eykst",
     "Hagnaður minnkar",
     "Ekkert"
    ]
   ],
   [
    "Tekjur í evrum 100 m.kr., kostnaður í evrum 20 m.kr. Krónan styrkist um 5%. Hve mikið lækkar hagnaður?",
    [
     "1 m.kr.",
     "4 m.kr.",
     "5 m.kr.",
     "6 m.kr."
    ]
   ],
   [
    "Hvað er ódýrasta vörnin gegn gengisáhættu?",
    [
     "Engin",
     "Náttúruleg vörn",
     "Framvirkir samningar",
     "Valréttir"
    ]
   ],
   [
    "Hvaða þáttur í DuPont mælir nýtingu eigna?",
    [
     "Eignavelta",
     "WACC",
     "Hagnaðarhlutfall",
     "Skuldsetningarmargfaldari"
    ]
   ],
   [
    "Hvað þýðir CCC upp á −10 daga?",
    [
     "Birgðir eru neikvæðar",
     "Villa",
     "Félagið skuldar",
     "Viðskiptavinir greiða áður en félagið greiðir birgjum"
    ]
   ],
   [
    "Pre-money 300, fjárfesting 100. Hvað á fjárfestirinn?",
    [
     "33%",
     "40%",
     "20%",
     "25%"
    ]
   ],
   [
    "Hvað er earn-out?",
    [
     "Arður",
     "Afskrift",
     "Hluti kaupverðs sem greiðist ef árangur næst",
     "Bónus"
    ]
   ],
   [
    "Hvaða margfaldari verður fyrir áhrifum af skuldsetningu?",
    [
     "EV/tekjur",
     "Enginn",
     "EV/EBITDA",
     "V/H"
    ]
   ],
   [
    "Hvert er núvirði 1.210.000 kr. eftir 2 ár á 10%?",
    [
     "1.000.000 kr.",
     "990.000 kr.",
     "1.010.000 kr.",
     "1.100.000 kr."
    ]
   ],
   [
    "Hvað gerist við kröfu á eigið fé ef beta hækkar?",
    [
     "Ekkert",
     "Hún hækkar",
     "Hún verður núll",
     "Hún lækkar"
    ]
   ],
   [
    "Eigandi tekur 5 m.kr. í laun, markaðslaun eru 15 m.kr. Hvernig hefur það áhrif á leiðrétta EBITDA?",
    [
     "Engin",
     "Lækkar um 10",
     "Lækkar um 15",
     "Hækkar um 10"
    ]
   ]
  ],
  "ask": 15
 },
 "order": 3
});
