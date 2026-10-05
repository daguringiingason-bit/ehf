/* Monný – Grunnur: Fjármál fullorðinsáranna */
window.MONNY=window.MONNY||{courses:[]};
window.MONNY.courses.push({
 "id": "grunnur",
 "level": "Grunnur",
 "title": "Grunnur",
 "name": "Fjármál fullorðinsáranna",
 "audience": "Fyrir fullorðna",
 "color": "sky",
 "tagline": "Lán, kreditkort, neyðarsjóður og lífeyrir. Það sem enginn kenndi okkur en allir þurfa að kunna.",
 "chapters": [
  {
   "c": "coral",
   "title": "Hvert fer peningurinn?",
   "short": "Föst útgjöld, lekar og áskriftir sem gleymast.",
   "lead": "Flestir vanmeta hvað þeir eyða. Ekki vegna stórra kaupa, heldur vegna lítilla upphæða sem endurtaka sig á hverjum mánuði og enginn tekur eftir lengur.",
   "learn": "<p>Útgjöld heimilisins skiptast í þrennt. <b>Föst útgjöld</b> eru þau sömu í hverjum mánuði: leiga eða afborgun, tryggingar, áskriftir. <b>Breytileg útgjöld</b> sveiflast: matur, eldsneyti, skemmtun. <b>Óregluleg útgjöld</b> koma sjaldan en örugglega: bifreiðagjöld, tannlæknir, jólagjafir, viðgerðir.</p>\n <p>Óreglulegu útgjöldin eru þau sem setja flesta úr jafnvægi, af því þau koma alltaf á óvart, þó þau ættu ekki að gera það.</p>\n <div class=\"formula\">Mánaðarlegt ígildi = Árskostnaður ÷ 12<small>Bifreiðagjöld, tryggingar og jólagjafir upp á 360.000 kr. á ári eru í raun 30.000 kr. á mánuði.</small></div>\n <h2>Lekarnir</h2>\n <p>Áskriftir eru hannaðar til að gleymast. Þú skráir þig í prufuáskrift, hún verður að fastri greiðslu og þú tekur ekki eftir henni aftur. Fyrsta skrefið er að fara í gegnum færslur síðustu þriggja mánaða og merkja allt sem endurtekur sig.</p>\n <div class=\"fact\"><b>Prófaðu þetta:</b> Margfaldaðu hverja áskrift með 12 og spurðu hvort þú myndir greiða þá upphæð í einu lagi fyrir hana í dag.</div>",
   "tool": "subs",
   "q": {
    "q": "Þú ert með þrjár streymisveitur á 2.490, 2.990 og 1.790 kr. á mánuði. Hvað kosta þær samtals á ári?",
    "o": [
     "7.270 kr.",
     "29.880 kr.",
     "72.700 kr.",
     "87.240 kr."
    ],
    "a": 3,
    "no": "Leggðu fyrst saman mánaðarupphæðirnar og margfaldaðu svo með 12.",
    "ok": "2.490 + 2.990 + 1.790 = 7.270 kr. á mánuði, og 7.270 × 12 = 87.240 kr. á ári. Það er meira en marga grunar fyrir „bara nokkrar streymisveitur“."
   },
   "sc": {
    "q": "Í lok hvers mánaðar er reikningurinn tómur, en þú veist í raun ekki hvert peningarnir fóru.",
    "o": [
     [
      "Fara yfir færslur síðustu þriggja mánaða",
      "Tekur kvöldstund, en gefur þér raunverulega mynd. Flestir sem gera þetta finna að minnsta kosti einn útgjaldalið sem kemur þeim á óvart. Þú getur ekki lagað það sem þú sérð ekki."
     ],
     [
      "Setja þér vikulegt eyðsluþak",
      "Einföld regla sem virkar vel fyrir breytileg útgjöld. Hún leysir þó ekki föstu lekana, eins og gleymdar áskriftir, sem halda áfram óháð þakinu."
     ],
     [
      "Bíða og sjá hvort næsti mánuður verði betri",
      "Það gerist sjaldan af sjálfu sér. Án breytinga verður næsti mánuður líklega eins."
     ]
    ]
   },
   "sum": [
    "Útgjöld eru föst, breytileg og óregluleg.",
    "Óregluleg útgjöld: deildu árskostnaði með 12.",
    "Margfaldaðu hverja áskrift með 12 og spurðu hvort hún sé þess virði."
   ],
   "practice": [
    {
     "g": "annual"
    },
    {
     "q": "Hvað af þessu eru óregluleg útgjöld?",
     "o": [
      "Leiga",
      "Bifreiðagjöld",
      "Matarinnkaup vikunnar",
      "Símareikningur"
     ],
     "a": 1,
     "e": "Bifreiðagjöld koma sjaldan en örugglega."
    }
   ]
  },
  {
   "c": "sun",
   "title": "Fjárhagsáætlun og neyðarsjóður",
   "short": "Áætlun sem heldur, og púði fyrir það óvænta.",
   "lead": "Fjárhagsáætlun snýst ekki um að neita sér um allt. Hún snýst um að ákveða fyrirfram hvert peningarnir fara, svo þú þurfir ekki að velta því fyrir þér í hvert skipti.",
   "learn": "<p>Byrjaðu á <b>ráðstöfunartekjum</b>, þ.e. því sem lendir á reikningnum eftir skatt og lífeyri. Dragðu svo frá föst útgjöld, mánaðarlegt ígildi óreglulegra útgjalda og sparnað. Það sem eftir stendur er það sem þú mátt eyða í breytileg útgjöld.</p>\n <div class=\"formula\">Ráðstöfunartekjur − Föst − Óregluleg − Sparnaður = Til eyðslu</div>\n <h2>Neyðarsjóður</h2>\n <p>Neyðarsjóður er peningur sem þú snertir bara þegar eitthvað óvænt gerist: bíllinn bilar, þú missir vinnuna, tönn brotnar. Algengt viðmið er að eiga þriggja til sex mánaða nauðsynleg útgjöld. Án hans fer hvert áfall beint á kreditkortið eða yfirdráttinn, og þá byrjar vaxtakostnaðurinn.</p>\n <div class=\"formula\">Neyðarsjóður = Nauðsynleg mánaðarútgjöld × 3 til 6<small>Nauðsynleg útgjöld eru það sem þú þyrftir að greiða þótt allt annað væri skorið niður: húsnæði, matur, samgöngur, tryggingar, afborganir.</small></div>\n <div class=\"fact\"><b>Geymdu hann á sérstökum reikningi.</b> Ef neyðarsjóðurinn liggur á sama reikningi og launin er hann fljótur að verða hluti af venjulegri eyðslu.</div>",
   "tool": "emerg",
   "q": {
    "q": "Nauðsynleg útgjöld eru 380.000 kr. á mánuði og þú vilt fjögurra mánaða neyðarsjóð. Þú átt 320.000 kr. og getur sparað 60.000 kr. á mánuði. Hve marga mánuði tekur að ná markmiðinu?",
    "o": [
     "4 mánuði",
     "6 mánuði",
     "20 mánuði",
     "25 mánuði"
    ],
    "a": 2,
    "no": "Reiknaðu fyrst markmiðið, dragðu frá það sem þú átt og deildu svo með mánaðarsparnaðinum.",
    "ok": "Markmið: 380.000 × 4 = 1.520.000 kr. Vantar: 1.520.000 − 320.000 = 1.200.000 kr. Og 1.200.000 ÷ 60.000 = 20 mánuðir. Það tekur tíma, en hver mánuður gerir þig öruggari."
   },
   "sc": {
    "q": "Bíllinn bilar og viðgerðin kostar 280.000 kr. Þú átt engan neyðarsjóð.",
    "o": [
     [
      "Setja það á kreditkortið og dreifa",
      "Fljótlegt, en dreifing á kreditkorti ber oft háa vexti og gjöld. Ef þú greiðir það niður á ári getur vaxtakostnaðurinn orðið tugir þúsunda."
     ],
     [
      "Fara á yfirdrátt",
      "Jafn fljótlegt, en yfirdráttarvextir eru yfirleitt með þeim hæstu sem bjóðast. Þetta er oft dýrasta leiðin ef skuldin stendur lengi."
     ],
     [
      "Semja við verkstæðið eða leita til fjölskyldu",
      "Mörg verkstæði bjóða greiðsludreifingu, stundum á betri kjörum en kortið. Lán frá fjölskyldu getur verið vaxtalaust, en þarf skýran samning. Og þegar viðgerðinni er lokið: byrja á neyðarsjóðnum."
     ]
    ]
   },
   "sum": [
    "Ráðstöfunartekjur − föst − óregluleg − sparnaður = til eyðslu.",
    "Neyðarsjóður: 3–6 mánaða nauðsynleg útgjöld.",
    "Geymdu neyðarsjóðinn á sérstökum reikningi."
   ],
   "practice": [
    {
     "g": "emerg"
    },
    {
     "q": "Hvað eru ráðstöfunartekjur?",
     "o": [
      "Heildarlaun",
      "Tekjur eftir skatt og lífeyri",
      "Laun auk bóta",
      "Laun fyrir orlof"
     ],
     "a": 1,
     "e": "Það sem raunverulega lendir á reikningnum."
    }
   ]
  },
  {
   "c": "coral",
   "title": "Skattframtalið og álagningin",
   "short": "Hvað gerist í mars og júní, og hvernig forðast á bakreikning.",
   "tool": "pay",
   "lead": "Staðgreiðslan sem dregin er af laununum er bráðabirgðagreiðsla. Á hverju ári er gert upp hvort þú greiddir of mikið eða of lítið.",
   "learn": "<p>Á hverju vori opnar Skatturinn <b>skattframtalið</b> fyrir árið á undan. Flestar upplýsingar eru þegar forskráðar: laun, staðgreiðsla, innstæður, lán og fasteignir. Þitt hlutverk er að fara yfir þær og bæta við því sem vantar, t.d. tekjum sem ekki voru skráðar.</p>\n  <p>Í byrjun sumars er <b>álagningin</b> birt. Þá kemur í ljós hvort staðgreiðslan á árinu var rétt. Ef of mikið var greitt færðu <b>endurgreiðslu</b>. Ef of lítið var greitt færðu <b>bakreikning</b> sem þarf að greiða.</p>\n  <div class=\"formula\">Álagning − Greidd staðgreiðsla = Inneign eða skuld</div>\n  <h2>Algengasta ástæðan fyrir bakreikningi</h2>\n  <p>Fólk sem vinnur á tveimur stöðum lætur stundum nýta persónuafsláttinn hjá báðum vinnuveitendum. Þá er afslátturinn notaður tvisvar á launaseðlunum, en hann er bara einn. Það kemur í ljós við álagningu, og munurinn getur numið hundruðum þúsunda yfir árið. Sama getur gerst ef þú ert í hærra skattþrepi vegna samanlagðra tekna en hvor vinnuveitandinn reiknar með.</p>\n  <div class=\"fact\"><b>Persónuafsláttur er 72.492 kr. á mánuði árið 2026.</b> Hjón og sambúðarfólk í samsköttun geta nýtt ónýttan persónuafslátt hvort annars. Kynntu þér reglurnar hjá Skattinum.</div>",
   "q": {
    "q": "Þú vinnur á tveimur stöðum og hefur nýtt allan persónuafsláttinn hjá báðum í 12 mánuði. Um það bil hve hár verður bakreikningurinn, ef ekkert annað breytist?",
    "o": [
     "72.492 kr.",
     "434.952 kr.",
     "869.904 kr.",
     "Enginn"
    ],
    "a": 2,
    "no": "Hve oft var afslátturinn notaður umfram það sem þú átt rétt á?",
    "ok": "Þú áttir rétt á 72.492 kr. á mánuði en nýttir tvöfalt. Ofnýtingin er 72.492 × 12 = 869.904 kr., sem þarf að greiða við álagningu."
   },
   "sc": {
    "q": "Álagningin sýnir að þú skuldar 180.000 kr. Þú átt ekki fyrir því.",
    "o": [
     [
      "Hunsa það",
      "Skuldin hverfur ekki. Dráttarvextir bætast við og Skatturinn getur dregið af launum þínum."
     ],
     [
      "Semja um greiðsludreifingu",
      "Skatturinn býður oft upp á að dreifa skuldinni. Hafðu samband áður en gjalddaginn rennur upp."
     ],
     [
      "Leiðrétta staðgreiðsluna fyrir næsta ár",
      "Nauðsynlegt, svo sagan endurtaki sig ekki. Láttu nýta persónuafsláttinn aðeins á einum stað og athugaðu þrepin."
     ]
    ]
   },
   "sum": [
    "Staðgreiðslan er bráðabirgðagreiðsla sem er gerð upp við álagningu.",
    "Persónuafsláttinn má aðeins nýta einu sinni, sama hve margir vinnuveitendur eru.",
    "Farðu yfir forskráðar upplýsingar á framtalinu."
   ],
   "practice": [
    {
     "g": "pay16"
    },
    {
     "q": "Hvað er bakreikningur?",
     "o": [
      "Endurgreiðsla frá Skattinum",
      "Skuld sem kemur í ljós við álagningu",
      "Reikningur frá bankanum",
      "Afsláttur"
     ],
     "a": 1,
     "e": "Hann kemur þegar of lítil staðgreiðsla var greidd á árinu."
    },
    {
     "q": "Hvað er mest af upplýsingum á framtalinu?",
     "o": [
      "Tómt",
      "Forskráð",
      "Skáldað",
      "Valfrjálst"
     ],
     "a": 1,
     "e": "Flestar upplýsingar eru forskráðar, en þú berð ábyrgð á að þær séu réttar."
    }
   ]
  },
  {
   "c": "sky",
   "title": "Kreditkort og yfirdráttur",
   "short": "Vaxtalaust ef rétt er farið að, dýrt ef ekki.",
   "lead": "Kreditkort er ekki vandamál í sjálfu sér. Ef þú greiðir allan reikninginn á gjalddaga er það í raun vaxtalaust lán í nokkrar vikur. Vandinn byrjar þegar reikningurinn er ekki greiddur að fullu.",
   "learn": "<p>Þegar kortareikningurinn kemur hefurðu yfirleitt val: greiða allt, greiða hluta eða dreifa. Að greiða allt kostar ekkert. Allt hitt er lán, og vextirnir á því eru yfirleitt háir.</p>\n <p><b>Yfirdráttur</b> virkar eins: þú ferð undir núll og greiðir vexti af því sem þú skuldar hverju sinni. Hann er þægilegur af því hann er alltaf til staðar, og það er einmitt hættan. Margir eru árum saman á yfirdrætti án þess að taka eftir því hvað hann kostar.</p>\n <div class=\"formula\">Vextir á mánuði ≈ Skuld × Ársvextir ÷ 12<small>300.000 kr. á 15% ársvöxtum kosta um 3.750 kr. á mánuði, eða 45.000 kr. á ári, án þess að skuldin lækki um krónu.</small></div>\n <h2>Lágmarksgreiðslugildran</h2>\n <p>Ef þú greiðir bara rétt rúmlega vextina lækkar skuldin varla. Þá getur tekið mörg ár að greiða hana niður og heildarvextirnir orðið hærri en upphaflega upphæðin. Prófaðu reiknivélina og lækkaðu mánaðargreiðsluna.</p>\n <div class=\"fact\"><b>Lánshæfismat.</b> Fyrirtæki eins og Creditinfo halda utan um greiðslusögu. Vanskil geta lækkað lánshæfismatið og gert öll lán í framtíðinni dýrari eða ófáanleg.</div>",
   "tool": "card",
   "q": {
    "q": "Þú skuldar 500.000 kr. á yfirdrætti á 16% ársvöxtum. Um það bil hvað greiðir þú í vexti á mánuði?",
    "o": [
     "666 kr.",
     "6.667 kr.",
     "16.000 kr.",
     "80.000 kr."
    ],
    "a": 1,
    "no": "Margfaldaðu skuldina með ársvöxtunum og deildu með 12.",
    "ok": "500.000 × 0,16 = 80.000 kr. á ári, og 80.000 ÷ 12 ≈ 6.667 kr. á mánuði. Það eru peningar sem fara beint til bankans án þess að skuldin lækki."
   },
   "sc": {
    "q": "Kortafyrirtækið býður þér að dreifa 200.000 kr. reikningi mánaðarins á 12 mánuði.",
    "o": [
     [
      "Þiggja dreifinguna",
      "Léttir á mánuðinum núna. En skoðaðu ÁHK og heildarupphæðina áður en þú samþykkir, og spurðu þig hvort næsti mánuður verði í raun öðruvísi. Ef ekki, safnast dreifingarnar upp."
     ],
     [
      "Greiða allan reikninginn og þrengja að sér í mánuð",
      "Erfiður mánuður, en enginn vaxtakostnaður og ekkert sem fylgir þér áfram. Ef það er hægt er þetta nær alltaf ódýrasta leiðin."
     ],
     [
      "Greiða sem mest og dreifa afganginum",
      "Málamiðlun sem lágmarkar vaxtakostnaðinn. Gott er að skila kortinu í debet eða lækka heimildina á meðan, svo ný skuld bætist ekki ofan á."
     ]
    ]
   },
   "sum": [
    "Kreditkort er vaxtalaust ef allt er greitt á gjalddaga.",
    "Vextir á mánuði ≈ skuld × ársvextir ÷ 12.",
    "Lágmarksgreiðsla getur látið skuld endast árum saman."
   ],
   "practice": [
    {
     "g": "odint"
    },
    {
     "q": "Hvað gerist ef mánaðargreiðslan er lægri en vextirnir?",
     "o": [
      "Skuldin lækkar hægt",
      "Skuldin lækkar aldrei",
      "Vextirnir falla niður",
      "Bankinn afskrifar"
     ],
     "a": 1,
     "e": "Þá stendur skuldin í stað eða hækkar."
    }
   ]
  },
  {
   "c": "lagoon",
   "title": "Lán og húsnæðislán",
   "short": "Jafnar greiðslur, verðtrygging og hvað lánstíminn kostar.",
   "lead": "Húsnæðislán er yfirleitt stærsta fjárhagslega ákvörðun lífsins. Litlar breytingar á vöxtum eða lánstíma geta munað milljónum yfir líftíma lánsins.",
   "learn": "<p>Flest lán eru greidd með <b>jöfnum greiðslum</b>: sama upphæð í hverjum mánuði. Í byrjun fer mest af greiðslunni í vexti og lítið í að lækka höfuðstólinn. Eftir því sem á líður snýst það við.</p>\n <div class=\"formula\">Mánaðargreiðsla = Lán × r ÷ (1 − (1 + r)<sup>−n</sup>)<small>r eru mánaðarvextir (ársvextir ÷ 12) og n fjöldi greiðslna.</small></div>\n <p>Hin leiðin er <b>jafnar afborganir</b>: höfuðstóllinn lækkar um sömu upphæð í hverjum mánuði. Greiðslurnar eru hæstar í byrjun en lækka svo, og heildarvextirnir verða lægri.</p>\n <h2>Verðtryggt eða óverðtryggt</h2>\n <p>Á <b>óverðtryggðu</b> láni eru vextirnir hærri, en höfuðstóllinn lækkar jafnt og þétt. Á <b>verðtryggðu</b> láni eru vextirnir lægri og greiðslurnar lægri í byrjun, en höfuðstóllinn hækkar með verðbólgunni. Þess vegna getur skuldin hækkað í krónum talið fyrstu árin, þó þú greiðir af henni í hverjum mánuði.</p>\n <p>Hvort er betra fer eftir því hvernig verðbólga og vextir þróast, og það veit enginn fyrirfram. Lægri greiðsla í dag getur kostað meira til lengri tíma.</p>\n <div class=\"fact\"><b>Greiðslumat.</b> Áður en þú færð húsnæðislán metur lánveitandinn hvort þú ráðir við greiðslurnar. Það er gott að vita sjálf/ur hvar mörkin liggja áður en þú ferð að skoða íbúðir.</div>",
   "tool": "loan",
   "q": {
    "q": "Þú tekur 40 m.kr. óverðtryggt lán á 9% ársvöxtum til 25 ára með jöfnum greiðslum. Um það bil hver verður mánaðargreiðslan?",
    "o": [
     "133.333 kr.",
     "300.000 kr.",
     "335.679 kr.",
     "450.000 kr."
    ],
    "a": 2,
    "no": "Notaðu formúluna með r = 0,09 ÷ 12 og n = 300, eða reiknivélina fyrir ofan.",
    "ok": "r = 0,0075 og n = 300. 40.000.000 × 0,0075 ÷ (1 − 1,0075⁻³⁰⁰) ≈ 335.679 kr. Fyrsta mánuðinn fara 300.000 kr. af því í vexti. Heildarvextirnir yfir 25 ár verða um 60,7 m.kr."
   },
   "sc": {
    "q": "Bankinn býður þér verðtryggt lán með 230.000 kr. mánaðargreiðslu eða óverðtryggt með 335.000 kr. greiðslu.",
    "o": [
     [
      "Taka verðtryggða lánið",
      "Lægri greiðsla gefur meira svigrúm í hverjum mánuði. En höfuðstóllinn hækkar með verðbólgunni og eignamyndun verður hæg fyrstu árin. Ef verðbólga verður mikil greiðirðu meira til lengri tíma."
     ],
     [
      "Taka óverðtryggða lánið",
      "Þú eignast hraðar í íbúðinni og veist betur hvar þú stendur. En ef breytilegir vextir hækka getur greiðslan hækkað verulega með stuttum fyrirvara, og há greiðsla þrengir að."
     ],
     [
      "Blanda saman",
      "Sumir skipta láninu í tvo hluta til að dreifa áhættunni. Það gefur ekki bestu útkomuna í öllum tilvikum, en verstu útkomuna í engu."
     ]
    ]
   },
   "sum": [
    "Í byrjun láns fer mest af greiðslunni í vexti.",
    "Lengri lánstími: lægri greiðsla en hærri heildarvextir.",
    "Verðtryggður höfuðstóll hækkar með verðbólgu."
   ],
   "practice": [
    {
     "g": "loanpay"
    },
    {
     "q": "Hvað einkennir jafnar afborganir?",
     "o": [
      "Sama greiðsla allan tímann",
      "Greiðslur hæstar í byrjun og lækka svo",
      "Engir vextir",
      "Höfuðstóll hækkar"
     ],
     "a": 1,
     "e": "Höfuðstóllinn lækkar jafnt, svo vaxtahlutinn og greiðslan lækka með tímanum."
    }
   ]
  },
  {
   "c": "violet",
   "title": "Þegar skuldirnar vaxa",
   "short": "Snjóbolti, snjóflóð og hvert er hægt að leita.",
   "lead": "Skuldavandi byrjar sjaldan með einni stórri ákvörðun. Hann byrjar með mörgum litlum, og vex svo hraðar en flestir átta sig á. Góðu fréttirnar eru að til eru skýrar aðferðir til að snúa honum við.",
   "learn": "<p>Ef þú ert með fleiri en eina skuld greiðirðu lágmarksgreiðslu af öllum og setur allt aukafé á eina í einu. Spurningin er hverja.</p>\n <p><b>Snjóflóðsaðferðin</b> byrjar á skuldinni með hæstu vextina. Stærðfræðilega sparar hún mest. <b>Snjóboltaaðferðin</b> byrjar á minnstu skuldinni. Hún kostar oft aðeins meira, en þú losnar fyrr við fyrstu skuldina og það gefur kraft til að halda áfram. Besta aðferðin er sú sem þú heldur þig við.</p>\n <h2>Vanskil</h2>\n <p>Ef greiðsla dregst bætast við <b>dráttarvextir</b> og síðar <b>innheimtukostnaður</b>, sem getur orðið hærri en upphaflega upphæðin á litlum kröfum. Langvarandi vanskil geta endað á vanskilaskrá og lækkað lánshæfismatið.</p>\n <div class=\"fact\"><b>Talaðu við kröfuhafann áður en greiðslan fellur á gjalddaga.</b> Flestir eru tilbúnir að semja um frest eða nýja greiðsluáætlun ef haft er samband snemma. <b>Umboðsmaður skuldara</b> veitir ókeypis ráðgjöf fyrir fólk í greiðsluerfiðleikum.</div>\n <p>Varaðu þig á <b>smálánum</b> og skyndilánum sem lofa peningum á mínútum. Kostnaðurinn er oft margfalt hærri en á venjulegum lánum, og þau eru algeng leið inn í skuldavanda.</p>",
   "tool": "debts",
   "q": {
    "q": "Þú ert með þrjár skuldir: A er 150.000 kr. á 25% vöxtum, B er 600.000 kr. á 12% og C er 50.000 kr. á 8%. Hverja greiðirðu fyrst niður samkvæmt snjóflóðsaðferðinni?",
    "o": [
     "A",
     "B",
     "C",
     "Allar jafnt"
    ],
    "a": 0,
    "no": "Snjóflóðsaðferðin snýst um vextina, ekki upphæðina.",
    "ok": "A, því hún ber hæstu vextina. Snjóboltaaðferðin myndi byrja á C, sem er minnst. Prófaðu báðar í reiknivélinni og sjáðu muninn."
   },
   "sc": {
    "q": "Þú sérð fram á að geta ekki greitt af láni um næstu mánaðamót.",
    "o": [
     [
      "Bíða og vona að það reddist",
      "Þá bætast við dráttarvextir og innheimtubréf, og samningsstaðan versnar. Því lengur sem beðið er, því færri leiðir standa opnar."
     ],
     [
      "Hringja í bankann strax",
      "Óþægilegt símtal, en það opnar möguleika eins og frestun afborgana eða lengingu láns. Bankar kjósa oftast samning fram yfir innheimtu."
     ],
     [
      "Taka smálán til að brúa bilið",
      "Leysir mánuðinn, en kostnaðurinn er hár og þú ert þá með tvær skuldir í stað einnar. Þetta er algengasta leiðin inn í vítahring."
     ]
    ]
   },
   "sum": [
    "Snjóflóð (hæstu vextir fyrst) sparar mest.",
    "Snjóbolti (minnsta skuld fyrst) gefur hraðari árangur.",
    "Talaðu við kröfuhafa áður en greiðsla fellur á gjalddaga."
   ],
   "practice": [
    {
     "q": "Hvaða aðferð sparar mest í vöxtum?",
     "o": [
      "Snjóbolti",
      "Snjóflóð",
      "Greiða jafnt af öllu",
      "Greiða stærstu skuldina fyrst"
     ],
     "a": 1,
     "e": "Hæstu vextirnir kosta mest, svo það borgar sig að losna við þá fyrst."
    },
    {
     "q": "Hvaða stofnun veitir ókeypis ráðgjöf í greiðsluerfiðleikum?",
     "o": [
      "Umboðsmaður skuldara",
      "Creditinfo",
      "Skatturinn",
      "Hagstofan"
     ],
     "a": 0,
     "e": "Umboðsmaður skuldara veitir ókeypis ráðgjöf."
    }
   ]
  },
  {
   "c": "coral",
   "title": "Tryggingar",
   "short": "Hvað þarf, hvað er óþarfi og hvernig sjálfsábyrgð virkar.",
   "tool": "deduct",
   "lead": "Trygging er samningur: þú greiðir litla upphæð reglulega til að forðast að þurfa að greiða stóra upphæð í einu. Spurningin er alltaf hvaða áhættu þú hefur efni á að bera sjálf/ur.",
   "learn": "<p>Sumar tryggingar eru <b>lögbundnar</b>, eins og ábyrgðartrygging ökutækja. Aðrar eru valfrjálsar en skynsamlegar fyrir flesta, t.d. <b>heimilistrygging</b> sem bætir innbú og ábyrgð. <b>Líftrygging</b> skiptir mestu máli þegar aðrir, t.d. börn eða maki, treysta á tekjurnar þínar.</p>\n  <h2>Sjálfsábyrgð</h2>\n  <p><b>Sjálfsábyrgð</b> er sá hluti tjóns sem þú greiðir sjálf/ur. Hærri sjálfsábyrgð þýðir lægra iðgjald. Ef þú lendir sjaldan í tjóni og átt neyðarsjóð getur hærri sjálfsábyrgð sparað peninga yfir árin.</p>\n  <div class=\"formula\">Væntur kostnaður = Iðgjald + Fjöldi tjóna × Sjálfsábyrgð</div>\n  <div class=\"fact\"><b>Athugaðu tvítryggingar.</b> Margir greiða fyrir sömu vernd tvisvar, t.d. ferðatryggingu bæði í gegnum kreditkort og sérstaka ferðatryggingu. Farðu yfir skilmálana einu sinni á ári og berðu saman verð.</div>",
   "q": {
    "q": "Trygging A kostar 96.000 kr. á ári með 25.000 kr. sjálfsábyrgð. B kostar 78.000 kr. með 75.000 kr. Þú lendir í tjóni að meðaltali einu sinni á fimm árum. Hvor er ódýrari að meðaltali, og um hve mikið á ári?",
    "o": [
     "A, um 8.000 kr.",
     "B, um 8.000 kr.",
     "B, um 18.000 kr.",
     "Jafndýrar"
    ],
    "a": 1,
    "no": "Eitt tjón á fimm árum er 0,2 tjón á ári. Reiknaðu væntan kostnað beggja.",
    "ok": "A: 96.000 + 0,2 × 25.000 = 101.000 kr. B: 78.000 + 0,2 × 75.000 = 93.000 kr. B er um 8.000 kr. ódýrari á ári, ef þú átt fyrir hærri sjálfsábyrgð þegar tjón verður."
   },
   "sc": {
    "q": "Sölumaður hringir og býður viðbótartryggingu á símann þinn fyrir 1.490 kr. á mánuði.",
    "o": [
     [
      "Þiggja hana",
      "17.880 kr. á ári. Athugaðu fyrst hvort heimilistryggingin þín nær yfir símann, hver sjálfsábyrgðin er og hvort þú myndir ekki bara kaupa ódýrari síma ef hann brotnar."
     ],
     [
      "Hafna",
      "Ef þú átt neyðarsjóð og síminn er ekki mjög dýr er oft hagstæðara að bera áhættuna sjálf/ur."
     ],
     [
      "Biðja um skilmála skriflega",
      "Skynsamlegt. Ekki taka ákvörðun í símtali sem er hannað til að fá þig til að segja já."
     ]
    ]
   },
   "sum": [
    "Tryggðu þig gegn því sem þú hefur ekki efni á að greiða sjálf/ur.",
    "Hærri sjálfsábyrgð lækkar iðgjaldið. Gott ef þú átt neyðarsjóð.",
    "Farðu yfir tryggingarnar árlega og leitaðu að tvítryggingum."
   ],
   "practice": [
    {
     "g": "deduct"
    },
    {
     "q": "Hvaða trygging er lögbundin fyrir bíleigendur?",
     "o": [
      "Kaskótrygging",
      "Ábyrgðartrygging ökutækja",
      "Líftrygging",
      "Ferðatrygging"
     ],
     "a": 1,
     "e": "Ábyrgðartryggingin bætir tjón sem þú veldur öðrum."
    },
    {
     "q": "Hvenær skiptir líftrygging mestu máli?",
     "o": [
      "Þegar maður er ungur og einhleypur",
      "Þegar aðrir treysta á tekjurnar þínar",
      "Aldrei",
      "Bara eftir sjötugt"
     ],
     "a": 1,
     "e": "Hún verndar þá sem treysta á tekjurnar þínar."
    }
   ]
  },
  {
   "c": "violet",
   "title": "Fjárfestingar og kostnaður",
   "short": "Sjóðir, dreifing og hvernig lítill kostnaður verður stór.",
   "tool": "fees",
   "lead": "Fjárfestingar eru leið til að láta peningana vinna fyrir þig. En það sem skiptir mestu máli er ekki að velja „réttu“ hlutabréfin, heldur að dreifa áhættunni, halda kostnaði lágum og gefa þessu tíma.",
   "learn": "<p><b>Hlutabréf</b> eru eignarhlutur í fyrirtæki. <b>Skuldabréf</b> eru lán til fyrirtækis eða ríkis. <b>Sjóðir</b> safna peningum margra og fjárfesta í mörgum bréfum í einu, sem dreifir áhættunni. <b>Vísitölusjóðir</b> fylgja heilum markaði og eru yfirleitt með lágan kostnað.</p>\n  <p><b>Dreifing</b> þýðir að setja ekki öll eggin í sömu körfu. Eitt fyrirtæki getur farið á hausinn. Þúsund fyrirtæki gera það ekki öll í einu.</p>\n  <h2>Kostnaðurinn sem enginn sér</h2>\n  <p>Sjóðir taka árlegan kostnað sem prósentu af eigninni. 1,5% virðist lítið, en það er tekið á hverju ári af allri upphæðinni, líka af ávöxtun fyrri ára. Á 30 árum getur það tekið fjórðung eða meira af lokaupphæðinni.</p>\n  <div class=\"formula\">Ávöxtun til þín ≈ Ávöxtun sjóðsins − Árlegur kostnaður</div>\n  <div class=\"fact\"><b>Skattur.</b> Af vöxtum, arði og söluhagnaði greiðist fjármagnstekjuskattur, 22%. Ákveðnar undanþágur og frítekjumörk gilda. Kynntu þér reglurnar hjá Skattinum.</div>",
   "q": {
    "q": "Þú átt 1.000.000 kr. sem vaxa um 6% á ári í 30 ár. Um það bil hve mikið minna áttu í lokin ef sjóðurinn tekur 1,5% á ári?",
    "o": [
     "Um 45.000 kr.",
     "Um 450.000 kr.",
     "Um 2.000.000 kr.",
     "Um 6.000.000 kr."
    ],
    "a": 2,
    "no": "Reiknaðu 1,06³⁰ og 1,045³⁰ og berðu saman.",
    "ok": "1.000.000 × 1,06³⁰ ≈ 5.743.000 kr. 1.000.000 × 1,045³⁰ ≈ 3.745.000 kr. Munurinn er um 2 milljónir, um þriðjungur af lokaupphæðinni."
   },
   "sc": {
    "q": "Hlutabréfamarkaðurinn fellur um 25% á tveimur mánuðum. Þú átt sjóð sem þú ætlar ekki að nota næstu 20 árin.",
    "o": [
     [
      "Selja allt áður en það versnar",
      "Þú breytir tímabundnu tapi í varanlegt. Sögulega hafa markaðir náð sér, en enginn veit hvenær. Þeir sem selja eftir fall missa oft af endurreisninni."
     ],
     [
      "Gera ekkert",
      "Fyrir langtímafjárfesti er þetta oft skynsamlegast. Sveiflur eru verðið sem greitt er fyrir hærri væntanlega ávöxtun."
     ],
     [
      "Kaupa meira",
      "Ef fjárhagurinn leyfir og tímasjóndeildin er löng, kaupirðu á lægra verði. Áhættan er að markaðurinn falli enn meira."
     ]
    ]
   },
   "sum": [
    "Dreifðu áhættunni. Sjóðir gera það auðvelt.",
    "Lítill árlegur kostnaður verður stór á mörgum árum.",
    "Fjárfestu aðeins peninga sem þú þarft ekki á næstunni."
   ],
   "practice": [
    {
     "g": "feeDrag"
    },
    {
     "q": "Hvað er vísitölusjóður?",
     "o": [
      "Sjóður sem fylgir heilum markaði",
      "Sjóður sem velur bestu bréfin",
      "Bankareikningur",
      "Lífeyrissjóður"
     ],
     "a": 0,
     "e": "Hann kaupir öll bréfin í vísitölu og er yfirleitt ódýr."
    },
    {
     "q": "Hvað er dreifing?",
     "o": [
      "Að kaupa eitt gott hlutabréf",
      "Að setja ekki öll eggin í sömu körfu",
      "Að selja reglulega",
      "Að fjárfesta erlendis"
     ],
     "a": 1,
     "e": "Dreifing minnkar áhættuna af því að eitt fyrirtæki gangi illa."
    }
   ]
  },
  {
   "c": "leaf",
   "title": "Lífeyrir og séreign",
   "short": "Ókeypis peningar sem flestir nýta of seint.",
   "lead": "Lífeyrismál virðast fjarlæg þegar maður er ungur. En þau eru eina sviðið í fjármálum þar sem einhver annar bætir beint við peningana þína ef þú tekur þátt, og tíminn vinnur með þér.",
   "learn": "<p><b>Skyldulífeyrir.</b> Af öllum launum greiðirðu 4% og vinnuveitandinn minnst 11,5% í lífeyrissjóð. Það myndar réttindi til ævilangra greiðslna eftir starfslok.</p>\n <p><b>Séreignarsparnaður</b> er valfrjáls. Þú greiðir 2% eða 4% af launum og samkvæmt flestum kjarasamningum greiðir vinnuveitandinn 2% mótframlag á móti. Það er í raun launahækkun sem þú færð bara ef þú sækir hana. Séreignin er þín eign og erfist.</p>\n <div class=\"formula\">Árlegt framlag = Mánaðarlaun × (þitt % + mótframlag %) × 12<small>600.000 kr. laun með 4% + 2%: 600.000 × 6% × 12 = 432.000 kr. á ári.</small></div>\n <p>Við tiltekin skilyrði er heimilt að nýta séreign skattfrjálst inn á húsnæðislán eða til kaupa á fyrstu íbúð. Reglurnar og hámörkin breytast, svo kynntu þér þau hjá Skattinum eða lífeyrissjóðnum þínum.</p>\n <div class=\"fact\"><b>Tíminn skiptir öllu.</b> Vegna vaxtavaxta getur sá sem byrjar 25 ára endað með mun meira en sá sem byrjar 40 ára, jafnvel þó sá síðarnefndi greiði hærri upphæð á mánuði.</div>",
   "tool": "pension",
   "q": {
    "q": "Þú ert með 600.000 kr. í mánaðarlaun og greiðir 4% í séreign. Vinnuveitandinn greiðir 2% á móti. Hve mikið fer samtals í séreignina á einu ári?",
    "o": [
     "36.000 kr.",
     "144.000 kr.",
     "288.000 kr.",
     "432.000 kr."
    ],
    "a": 3,
    "no": "Leggðu saman þitt framlag og mótframlagið áður en þú margfaldar.",
    "ok": "600.000 × 6% = 36.000 kr. á mánuði, og 36.000 × 12 = 432.000 kr. á ári. Af því eru 144.000 kr. mótframlag sem þú fengir ekki annars."
   },
   "sc": {
    "q": "Þú ert 28 ára. Vinur segir að séreign skipti engu máli fyrr en maður er kominn á fertugsaldur.",
    "o": [
     [
      "Bíða í nokkur ár",
      "Þú hefur aðeins meira á milli handanna núna. En þú missir af mótframlagi vinnuveitandans á hverjum mánuði og af árum af vaxtavöxtum sem koma ekki aftur."
     ],
     [
      "Byrja strax með 2%",
      "Lítil breyting á útborguðum launum, og þú færð fullt 2% mótframlag. Góð leið til að byrja án þess að finna mikið fyrir því."
     ],
     [
      "Byrja strax með 4%",
      "Mesti ávinningurinn til lengri tíma, en lækkar útborguð laun meira. Ef fjárhagurinn leyfir er þetta yfirleitt hagstæðasta leiðin."
     ]
    ]
   },
   "sum": [
    "Skyldulífeyrir: 4% frá þér og minnst 11,5% frá vinnuveitanda.",
    "Séreign: 2–4% frá þér, oft 2% mótframlag á móti.",
    "Því fyrr sem byrjað er, því meira vinna vaxtavextirnir."
   ],
   "practice": [
    {
     "g": "pension"
    },
    {
     "q": "Hvað gerist yfirleitt ef þú greiðir ekkert í séreign?",
     "o": [
      "Þú færð samt mótframlag",
      "Þú missir af mótframlagi vinnuveitanda",
      "Lífeyririnn hækkar",
      "Ekkert breytist"
     ],
     "a": 1,
     "e": "Mótframlagið fylgir yfirleitt aðeins eigin framlagi."
    }
   ]
  },
  {
   "c": "violet",
   "title": "Svik sem beinast að fullorðnum",
   "short": "Fjárfestingasvik, falskir bankastarfsmenn og ástarsvik.",
   "tool": null,
   "lead": "Fullorðnir eru ekki síður skotmörk en ungt fólk, og upphæðirnar sem tapast eru oft mun hærri. Svikararnir eru skipulagðir og þolinmóðir.",
   "learn": "<p><b>Falskir bankastarfsmenn</b> hringja og segja að reikningurinn þinn sé í hættu. Þeir biðja þig að samþykkja aðgerð með rafrænum skilríkjum eða færa peninga á „öruggan reikning“. Bankinn gerir þetta aldrei.</p>\n  <p><b>Fjárfestingasvik</b> byrja oft á auglýsingu með þekktu andliti, stundum búnu til með gervigreind. Fyrst sérðu „hagnað“ á fallegri síðu og getur jafnvel tekið smá út. Þegar þú leggur meira inn hverfur allt.</p>\n  <p><b>„Hæ mamma“-svik</b> eru skilaboð frá óþekktu númeri: „Síminn minn brotnaði, þetta er nýja númerið mitt, geturðu millifært fyrir mig?“ <b>Ástarsvik</b> byggja upp samband á netinu yfir vikur eða mánuði áður en kemur að beiðni um peninga.</p>\n  <div class=\"formula\">Lofuð ávöxtun langt yfir markaði + Tímapressa = Svik</div>\n  <div class=\"fact\"><b>Ef þú hefur lent í svikum:</b> hafðu strax samband við bankann, því stundum er hægt að stöðva greiðslur ef brugðist er hratt við. Tilkynntu málið til lögreglunnar. Hjálpaðu líka eldri ættingjum að þekkja þessi brögð.</div>",
   "q": {
    "q": "„Fjárfestingaráðgjafi“ lofar 3% ávöxtun á mánuði, tryggt. Hve mikilli árlegri ávöxtun jafngildir það með vaxtavöxtum?",
    "o": [
     "Um 3%",
     "Um 36%",
     "Um 43%",
     "Um 300%"
    ],
    "a": 2,
    "no": "Reiknaðu 1,03¹² − 1.",
    "ok": "1,03¹² ≈ 1,426, eða um 43% á ári. Engin trygg fjárfesting skilar slíku. Loforð um háa og trygga ávöxtun er alltaf viðvörunarmerki."
   },
   "sc": {
    "q": "Þú færð símtal: „Þetta er frá öryggisdeild bankans. Það er verið að misnota kortið þitt. Samþykktu beiðnina sem birtist í símanum til að stöðva það.“",
    "o": [
     [
      "Samþykkja strax",
      "Með því samþykkir þú í raun aðgang svikarans að reikningnum þínum. Þetta er ein algengasta svikaaðferðin."
     ],
     [
      "Spyrja um nafn og starfsnúmer",
      "Svikararnir hafa svör á reiðum höndum. Það breytir engu."
     ],
     [
      "Leggja á og hringja í bankann í þekkt númer",
      "Rétt. Ef eitthvað er að getur bankinn staðfest það. Bankinn biður aldrei um að þú samþykkir eitthvað í símtali sem hann hóf."
     ]
    ]
   },
   "sum": [
    "Bankinn biður aldrei um samþykki með rafrænum skilríkjum í símtali.",
    "Há og „trygg“ ávöxtun er alltaf viðvörunarmerki.",
    "Bregstu hratt við: bankinn fyrst, svo lögreglan."
   ],
   "practice": [
    {
     "q": "Hvað gerir bankinn aldrei?",
     "o": [
      "Sendir yfirlit",
      "Biður þig í símtali að samþykkja aðgerð með rafrænum skilríkjum",
      "Lokar kortum",
      "Hringir vegna vanskila"
     ],
     "a": 1,
     "e": "Það er algengasta merki um svik."
    },
    {
     "q": "Hvað er dæmigert fyrir ástarsvik?",
     "o": [
      "Hröð beiðni um peninga strax",
      "Samband byggt upp í vikur áður en beðið er um peninga",
      "Fundur í eigin persónu",
      "Beiðni um uppskrift"
     ],
     "a": 1,
     "e": "Svikararnir eru þolinmóðir og byggja upp traust."
    }
   ]
  }
 ],
 "exam": {
  "pass": 12,
  "questions": [
   [
    "Áskrift kostar 3.990 kr. á mánuði. Hvað kostar hún á ári?",
    [
     "3.990 kr.",
     "39.900 kr.",
     "47.880 kr.",
     "59.850 kr."
    ]
   ],
   [
    "Hvert er algengt viðmið um stærð neyðarsjóðs?",
    [
     "Engin þörf ef maður er með kreditkort",
     "10% af árstekjum",
     "3–6 mánaða nauðsynleg útgjöld",
     "Ein mánaðarlaun"
    ]
   ],
   [
    "Hvenær er kreditkort vaxtalaust?",
    [
     "Alltaf",
     "Ef greidd er lágmarksgreiðsla",
     "Ef reikningurinn er greiddur að fullu á gjalddaga",
     "Aldrei"
    ]
   ],
   [
    "Hvað gerist ef lánstími er lengdur úr 25 í 40 ár, á sömu vöxtum?",
    [
     "Greiðslan hækkar og vextirnir lækka",
     "Ekkert breytist",
     "Greiðslan lækkar en heildarvextirnir hækka",
     "Bæði greiðslan og vextirnir lækka"
    ]
   ],
   [
    "Hvað einkennir verðtryggt lán?",
    [
     "Höfuðstóllinn hækkar með verðbólgu",
     "Vextirnir eru alltaf hærri en á óverðtryggðu",
     "Greiðslan er föst í krónum allan tímann",
     "Það er ekki hægt að greiða það upp"
    ]
   ],
   [
    "Samkvæmt snjóflóðsaðferðinni, hvaða skuld er greidd fyrst niður?",
    [
     "Sú minnsta",
     "Sú elsta",
     "Sú með hæstu vextina",
     "Sú stærsta"
    ]
   ],
   [
    "Þú skuldar 300.000 kr. á 12% ársvöxtum. Um það bil hve mikið greiðirðu í vexti á mánuði?",
    [
     "300 kr.",
     "3.000 kr.",
     "36.000 kr.",
     "12.000 kr."
    ]
   ],
   [
    "Hve hátt mótframlag greiðir vinnuveitandi í séreign samkvæmt flestum kjarasamningum?",
    [
     "11,5%",
     "4%",
     "0%",
     "2%"
    ]
   ],
   [
    "Hvert getur fólk í greiðsluerfiðleikum leitað eftir ókeypis ráðgjöf?",
    [
     "Til smálánafyrirtækja",
     "Til Umboðsmanns skuldara",
     "Hvergi",
     "Til Creditinfo"
    ]
   ],
   [
    "Hvað er best að bera saman þegar valið er á milli tveggja lána?",
    [
     "ÁHK og heildarupphæð sem greidd er",
     "Lántökugjaldið",
     "Nafn lánveitandans",
     "Mánaðargreiðsluna eina"
    ]
   ],
   [
    "Hvað er bakreikningur?",
    [
     "Lánstilboð",
     "Skuld sem kemur í ljós við álagningu",
     "Endurgreiðsla",
     "Kortareikningur"
    ]
   ],
   [
    "Hvað gerist ef persónuafsláttur er nýttur að fullu hjá tveimur vinnuveitendum?",
    [
     "Þú færð endurgreiðslu",
     "Ekkert",
     "Þú færð bakreikning",
     "Afslátturinn tvöfaldast löglega"
    ]
   ],
   [
    "Hver er væntur árlegur kostnaður tryggingar sem kostar 80.000 kr. með 50.000 kr. sjálfsábyrgð, ef tjón verður 0,2 sinnum á ári?",
    [
     "90.000 kr.",
     "80.000 kr.",
     "130.000 kr.",
     "100.000 kr."
    ]
   ],
   [
    "Hvaða trygging er lögbundin fyrir bíleigendur?",
    [
     "Ábyrgðartrygging ökutækja",
     "Ferðatrygging",
     "Líftrygging",
     "Kaskó"
    ]
   ],
   [
    "Hvað gerir dreifing í fjárfestingum?",
    [
     "Lækkar skatta",
     "Hækkar ávöxtun alltaf",
     "Tryggir hagnað",
     "Minnkar áhættu af einu fyrirtæki"
    ]
   ],
   [
    "Hver er fjármagnstekjuskattur á Íslandi?",
    [
     "15%",
     "10%",
     "31,49%",
     "22%"
    ]
   ],
   [
    "Hvað er skynsamlegast fyrir langtímafjárfesti þegar markaður fellur tímabundið?",
    [
     "Oft að halda ró sinni og selja ekki",
     "Kaupa eitt hlutabréf",
     "Selja allt strax",
     "Taka lán"
    ]
   ],
   [
    "3% ávöxtun á mánuði jafngildir um það bil:",
    [
     "43% á ári",
     "12% á ári",
     "36% á ári",
     "3% á ári"
    ]
   ],
   [
    "Hvað á að gera ef „bankinn“ hringir og biður þig að samþykkja aðgerð í símanum?",
    [
     "Leggja á og hringja í þekkt númer bankans",
     "Samþykkja",
     "Gefa upp PIN",
     "Biðja um tölvupóst"
    ]
   ],
   [
    "Hvað kostar 1,5% árlegur kostnaður af 1 m.kr. sem vaxa um 6% í 30 ár, um það bil?",
    [
     "6 m.kr.",
     "450.000 kr.",
     "2 m.kr.",
     "45.000 kr."
    ]
   ],
   [
    "Hvað er ábyrgðarmaður?",
    [
     "Starfsmaður bankans",
     "Endurskoðandi",
     "Sá sem ber ábyrgð á láni ef lántaki greiðir ekki",
     "Erfingi"
    ]
   ],
   [
    "Hvað þýðir sjálfsábyrgð?",
    [
     "Hámarksbætur",
     "Hluti tjóns sem þú greiðir sjálf/ur",
     "Iðgjaldið",
     "Tryggingafélagið"
    ]
   ],
   [
    "Hvenær eru flestar upplýsingar á skattframtalinu settar inn?",
    [
     "Bankinn skráir",
     "Þú slærð allt inn",
     "Endurskoðandi skráir",
     "Þær eru forskráðar"
    ]
   ],
   [
    "Hvað er vísitölusjóður?",
    [
     "Lán",
     "Sjóður sem velur fá bréf",
     "Sjóður sem fylgir markaðnum í heild",
     "Sparireikningur"
    ]
   ],
   [
    "Hvort hækkar heildarkostnað láns: að lengja lánstíma eða stytta hann?",
    [
     "Lengja",
     "Hvorugt",
     "Stytta",
     "Fer eftir bankanum"
    ]
   ]
  ],
  "ask": 15
 },
 "order": 0
});
