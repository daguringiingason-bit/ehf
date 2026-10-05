/* Monný – Grunnur krakkar: Peningarnir þínir */
window.MONNY=window.MONNY||{courses:[]};
window.MONNY.courses.push({
 "id": "grunnur-krakkar",
 "level": "Grunnur",
 "title": "Grunnur krakkar",
 "name": "Peningarnir þínir",
 "audience": "13–16 ára",
 "color": "coral",
 "tagline": "Fyrstu launin, skattar, sparnaður, lán og hvert skattarnir fara. Raunverulegar tölur og raunveruleg stærðfræði.",
 "chapters": [
  {
   "c": "coral",
   "title": "Fyrstu launin",
   "short": "Hvert fer munurinn á heildarlaunum og útborguðum launum?",
   "lead": "Þú vinnur 100 tíma og reiknar út hvað þú átt að fá. Svo kemur útborgun og upphæðin er lægri. Hér sérðu nákvæmlega hvert mismunurinn fer.",
   "learn": "<p><b>Heildarlaun</b> eru allt sem þú vannst þér inn. <b>Útborguð laun</b> eru það sem lendir á reikningnum. Á milli eru frádrættir sem allir launþegar á Íslandi greiða.</p>\n <h2>Ef þú ert yngri en 16 ára</h2>\n <p>Börn fædd 2011 eða síðar greiða 6% skatt af tekjum yfir 300.000 kr. á ári. Það er kallað frítekjumark. Ef þú vinnur þér inn 250.000 kr. í sumar greiðirðu engan skatt.</p>\n <div class=\"formula\">Skattur = 6% × (árstekjur − 300.000)<small>Dæmi: 420.000 kr. á árinu gefur 6% × 120.000 = 7.200 kr.</small></div>\n <h2>Ef þú ert 16 ára eða eldri</h2>\n <p>Þá tekur venjulega staðgreiðslan við. Hún er reiknuð í þremur skrefum:</p>\n <div class=\"formula\">1. Lífeyrir = 4% af launum<br>2. Skattstofn = Laun − Lífeyrir<br>3. Skattur = Skattstofn × 31,49% − 72.492 kr.<small>31,49% gildir um mánaðartekjur upp að 498.122 kr. Hærri tekjur lenda í hærri þrepum.</small></div>\n <p><b>Persónuafsláttur</b> er 72.492 kr. á mánuði árið 2026. Allir 16 ára og eldri fá hann. Hann dregst frá skattinum, ekki laununum, og þess vegna greiðir fólk með lág laun hlutfallslega mun minni skatt en fólk með há laun.</p>\n <p><b>Lífeyrissjóður.</b> Þú greiðir 4% af laununum og vinnuveitandinn greiðir minnst 11,5% ofan á það. Þetta eru peningar sem þú átt og færð seinna á ævinni. <b>Stéttarfélagsgjald</b> er oft um 1% og fer til félagsins sem semur um launin þín.</p>\n <div class=\"fact\"><b>Biddu alltaf um launaseðil.</b> Hann sýnir hverja krónu og er sönnun þess að réttur skattur og lífeyrir hafi verið greiddur.</div>",
   "tool": "pay",
   "q": {
    "q": "Þú ert 17 ára og færð 400.000 kr. í heildarlaun á mánuði. Hver eru útborguð laun, án stéttarfélagsgjalds?",
    "o": [
     "274.040 kr.",
     "263.078 kr.",
     "335.570 kr.",
     "384.000 kr."
    ],
    "a": 2,
    "no": "Farðu í gegnum skrefin þrjú og mundu að draga persónuafsláttinn frá skattinum.",
    "ok": "Lífeyrir: 16.000. Skattstofn: 384.000. Skattur: 384.000 × 31,49% ≈ 120.922, mínus 72.492 = 48.430. Útborgað: 400.000 − 16.000 − 48.430 = 335.570 kr. Þú greiðir í raun um 12% í skatt, ekki 31,49%."
   },
   "sc": {
    "q": "Vinur þinn segist fá borgað „svart“, án launaseðils, og fá meira í hendi. Honum býðst að redda þér sama starfi.",
    "o": [
     [
      "Þiggja það",
      "Þú færð kannski meira í vasann núna. En enginn lífeyrir safnast, þú ert ekki tryggð/ur ef þú slasast í vinnunni og þú átt engan rétt ef þú færð ekki greitt. Þetta er líka ólöglegt, og ábyrgðin getur lent á þér líka."
     ],
     [
      "Biðja um að fá að vera á launaskrá",
      "Örlítið minna í vasann, en þú færð launaseðil, lífeyri, tryggingar og rétt til atvinnuleysisbóta síðar. Ef vinnuveitandi neitar að skrá þig segir það margt um hann."
     ],
     [
      "Leita að öðru starfi",
      "Tekur lengri tíma, en þú byrjar ferilinn á réttum stað. Fyrsta starfið verður líka oft fyrsta meðmælin þín."
     ]
    ]
   },
   "sum": [
    "Útborguð laun eru heildarlaun mínus lífeyrir, skattur og stéttarfélagsgjald.",
    "Yngri en 16 greiða 6% skatt af tekjum yfir 300.000 kr. á ári.",
    "Persónuafslátturinn gerir það að verkum að fólk með lág laun greiðir hlutfallslega lítinn skatt."
   ],
   "practice": [
    {
     "g": "pay16"
    },
    {
     "g": "kidtax"
    },
    {
     "q": "Hvenær byrjar þú að greiða 4% í lífeyrissjóð?",
     "o": [
      "Við fyrstu laun",
      "Frá 16 ára aldri",
      "Frá 18 ára aldri",
      "Þegar þú klárar skóla"
     ],
     "a": 1,
     "e": "Lífeyrisiðgjald er greitt frá 16 ára aldri."
    },
    {
     "q": "Hvað dregst persónuafsláttur frá?",
     "o": [
      "Heildarlaununum",
      "Skattinum",
      "Lífeyrinum",
      "Útborguðu laununum"
     ],
     "a": 1,
     "e": "Hann dregst frá reiknuðum skatti, ekki laununum."
    }
   ]
  },
  {
   "c": "sun",
   "title": "Fjárhagsáætlun",
   "short": "Áætlun fyrir peningana áður en þeir hverfa.",
   "lead": "Peningar sem enginn hefur skipulagt eiga það til að gufa upp. Fjárhagsáætlun er einföld áætlun um hvert hver króna á að fara, áður en þú eyðir henni.",
   "learn": "<div class=\"formula\">Tekjur − Útgjöld = Afgangur</div>\n <p>Útgjöld skiptast í tvennt. <b>Þarfir</b> eru það sem þú kemst ekki hjá: símareikningur, strætókort, hádegismatur. <b>Langanir</b> eru allt hitt: föt sem þig langar í, bíó, skyndibiti. Hvorugt er slæmt, en það er gott að vita hvort er hvað.</p>\n <p>Ein vinsæl viðmiðunarregla er <b>50/30/20</b>: helmingur í þarfir, 30% í langanir og 20% í sparnað. Hún er hugsuð fyrir fullorðna. Ef þú býrð heima og þarfirnar eru fáar geturðu sparað mun meira.</p>\n <div class=\"formula\">Mánuðir að markmiði = Markmið ÷ Sparnaður á mánuði<small>Ef þú vilt eignast 90.000 kr. hjól og sparar 15.000 kr. á mánuði tekur það 6 mánuði.</small></div>\n <div class=\"fact\"><b>Borgaðu þér fyrst.</b> Settu sparnaðinn til hliðar sama dag og þú færð útborgað. Það sem er eftir máttu eyða. Ef þú bíður til mánaðamóta verður yfirleitt ekkert eftir.</div>",
   "tool": "budget",
   "q": {
    "q": "Þú færð 60.000 kr. á mánuði og fylgir reglunni 50/30/20. Hve mikið sparar þú á einu ári?",
    "o": [
     "12.000 kr.",
     "72.000 kr.",
     "144.000 kr.",
     "216.000 kr."
    ],
    "a": 2,
    "no": "Finndu fyrst sparnaðinn á mánuði og margfaldaðu svo með fjölda mánaða.",
    "ok": "20% af 60.000 eru 12.000 kr. á mánuði, og 12.000 × 12 = 144.000 kr. á ári. Það er meira en tveggja mánaða tekjur."
   },
   "sc": {
    "q": "Vinahópurinn ætlar til útlanda eftir fimm mánuði. Ferðin kostar 150.000 kr. og þú átt 40.000 kr.",
    "o": [
     [
      "Spara fyrir henni",
      "Þú þarft 110.000 kr. í viðbót, eða 22.000 kr. á mánuði í fimm mánuði. Það er hægt, en kallar á að skera niður langanir eða bæta við vöktum. Ferðin verður líka skemmtilegri þegar hún er skuldlaus."
     ],
     [
      "Fá lánað og borga eftir á",
      "Þú kemst með, en kemur heim með skuld. Ef lánið er frá fjölskyldu þarf að semja skýrt um hvenær það verður greitt. Ef það er frá fjármálafyrirtæki bætast vextir og gjöld við."
     ],
     [
      "Sleppa ferðinni",
      "Enginn kostnaður og engin skuld, en þú missir af upplifun. Stundum er það rétt ákvörðun. Þú gætir líka byrjað að spara núna fyrir næstu ferð."
     ]
    ]
   },
   "sum": [
    "Tekjur − útgjöld = afgangur. Ef afgangurinn er neikvæður gengur dæmið ekki upp.",
    "Greindu á milli þarfa og langana.",
    "Borgaðu þér fyrst: settu sparnaðinn til hliðar á útborgunardegi."
   ],
   "practice": [
    {
     "g": "yearSave"
    },
    {
     "g": "goal"
    },
    {
     "q": "Hvað af þessu er þörf frekar en löngun, fyrir flesta?",
     "o": [
      "Nýjasti síminn",
      "Strætókort í skólann",
      "Skyndibiti",
      "Áskrift að leik"
     ],
     "a": 1,
     "e": "Samgöngur í skólann eru nauðsynlegar. Hitt eru langanir, þó þær séu eðlilegar."
    }
   ]
  },
  {
   "c": "sky",
   "title": "Bankinn þinn",
   "short": "Reikningar, kort, heimabanki og öryggi.",
   "tool": null,
   "lead": "Bankinn er staðurinn þar sem peningarnir þínir búa. Að kunna á hann er jafn mikilvægt og að kunna á peningana sjálfa.",
   "learn": "<p><b>Veltureikningur</b> er reikningurinn sem launin fara inn á og kortið þitt er tengt við. <b>Sparireikningur</b> gefur hærri vexti en er ekki ætlaður til daglegra greiðslna. Það er góð regla að hafa sparnaðinn á öðrum reikningi en eyðslupeningana, svo hann fari ekki óvart í eyðslu.</p>\n  <p>Í <b>heimabanka</b> eða bankaappi sérðu stöðu, færslur og ógreidda reikninga. Á Íslandi birtast margir reikningar sem kröfur í heimabankanum, til dæmis frá íþróttafélagi eða símafyrirtæki. Kröfu sem er ekki greidd á gjalddaga fylgja oft vanskilagjöld.</p>\n  <h2>Rafræn skilríki og PIN</h2>\n  <p><b>Rafræn skilríki</b> í símanum eru eins og undirskriftin þín. Með þeim er hægt að skrá sig inn í banka, samþykkja lán og skrifa undir samninga. Enginn, hvorki bankinn, lögreglan né vinur, þarf nokkurn tímann að biðja þig að samþykkja innskráningu sem þú baðst ekki um sjálf/ur.</p>\n  <div class=\"formula\">Staða í lok mánaðar = Staða í byrjun + Innlagnir − Úttektir<small>Ef þú ferð yfir færslurnar mánaðarlega sérðu fljótt ef eitthvað er skrýtið, t.d. áskrift sem þú gleymdir.</small></div>\n  <div class=\"fact\"><b>Kort í símanum eða á úrinu</b> er jafn raunveruleg greiðsla og reiðufé. Það er auðveldara að eyða þegar maður sér ekki peningana fara, svo það borgar sig að skoða yfirlitið reglulega.</div>",
   "q": {
    "q": "Í byrjun mánaðar áttu 18.500 kr. Þú færð 42.000 kr. í laun og greiðir 6.990 kr. fyrir síma, 12.400 kr. í búð og 3.500 kr. fyrir bíó. Hver er staðan í lok mánaðar?",
    "o": [
     "37.610 kr.",
     "42.000 kr.",
     "56.110 kr.",
     "60.500 kr."
    ],
    "a": 0,
    "no": "Bættu laununum við upphafsstöðuna og dragðu svo allar úttektir frá.",
    "ok": "18.500 + 42.000 − 6.990 − 12.400 − 3.500 = 37.610 kr."
   },
   "sc": {
    "q": "Þú færð SMS sem lítur út fyrir að vera frá bankanum: „Kortinu þínu hefur verið lokað. Smelltu hér til að opna það.“",
    "o": [
     [
      "Smella á tengilinn",
      "Svikasíður líta oft nákvæmlega út eins og síða bankans. Ef þú skráir þig inn þar geta svikararnir náð stjórn á reikningnum."
     ],
     [
      "Opna bankaappið sjálf/ur og athuga",
      "Rétt. Ef eitthvað er að kortinu sést það í appinu. Aldrei nota tengil úr skilaboðum til að skrá þig inn."
     ],
     [
      "Hringja í bankann í númerið á heimasíðunni",
      "Líka rétt. Notaðu númer sem þú finnur sjálf/ur, ekki númer úr skilaboðunum."
     ]
    ]
   },
   "sum": [
    "Hafðu sparnaðinn á öðrum reikningi en eyðslupeningana.",
    "Rafræn skilríki eru undirskriftin þín. Samþykktu aldrei innskráningu sem þú baðst ekki um.",
    "Farðu yfir færslurnar mánaðarlega."
   ],
   "practice": [
    {
     "q": "Hvaða reikningur hentar best fyrir daglegar greiðslur?",
     "o": [
      "Bundinn sparireikningur",
      "Veltureikningur",
      "Lífeyrissjóður",
      "Hlutabréfasjóður"
     ],
     "a": 1,
     "e": "Veltureikningurinn er tengdur kortinu og ætlaður til daglegra greiðslna."
    },
    {
     "q": "Einhver hringir, segist vera frá bankanum og biður þig að samþykkja innskráningu með rafrænum skilríkjum. Hvað gerirðu?",
     "o": [
      "Samþykki, þetta er bankinn",
      "Spyr um nafn og samþykki svo",
      "Samþykki aldrei og legg á",
      "Gef upp PIN í staðinn"
     ],
     "a": 2,
     "e": "Bankinn biður aldrei um þetta. Þetta er algeng svikaaðferð."
    },
    {
     "q": "Hvað gerist oft ef krafa í heimabanka er ekki greidd á gjalddaga?",
     "o": [
      "Ekkert",
      "Hún hverfur",
      "Vanskilagjöld bætast við",
      "Hún lækkar"
     ],
     "a": 2,
     "e": "Vanskilagjöld og dráttarvextir bætast oft við."
    }
   ]
  },
  {
   "c": "sun",
   "title": "Snjöll innkaup",
   "short": "Einingaverð, tilboð og réttindi neytenda.",
   "tool": "unit",
   "lead": "Verslanir eru sérfræðingar í að fá þig til að kaupa. Með smá stærðfræði og þekkingu á réttindum þínum ertu skrefi á undan.",
   "learn": "<p>Stærri pakkning er ekki alltaf ódýrari. Til að bera saman vörur í mismunandi stærðum notarðu <b>einingaverð</b>: verð á kíló, lítra eða stykki. Það á að koma fram á verðmerkingum í verslunum.</p>\n  <div class=\"formula\">Kílóverð = Verð ÷ Grömm × 1.000<small>459 kr. fyrir 500 g = 918 kr. á kg. 789 kr. fyrir 1.000 g = 789 kr. á kg.</small></div>\n  <h2>Tilboð sem eru ekki tilboð</h2>\n  <p>„3 fyrir 2“ sparar bara ef þú hefðir hvort sem er keypt þrjú. „Áður 9.990 kr.“ segir ekkert ef varan var aldrei seld á því verði í raun. Og „aðeins í dag“ er hannað til að þú hugsir ekki málið.</p>\n  <h2>Réttindi þín</h2>\n  <p>Þegar þú kaupir á netinu hefurðu almennt <b>14 daga</b> til að hætta við kaupin. Í verslun er enginn almennur skilaréttur, nema verslunin bjóði hann sjálf. En ef vara er <b>gölluð</b> áttu rétt á viðgerð, nýrri vöru eða endurgreiðslu, og hefur almennt tvö ár til að kvarta, lengur fyrir vörur sem eiga að endast lengi.</p>\n  <div class=\"fact\"><b>Geymdu kvittunina.</b> Rafræn kvittun í tölvupósti dugar. Án hennar getur verið erfitt að sanna hvar og hvenær varan var keypt.</div>",
   "q": {
    "q": "Sjampó A kostar 699 kr. fyrir 250 ml. Sjampó B kostar 1.249 kr. fyrir 500 ml. Hve mikið sparar þú á hvern lítra með því að kaupa B?",
    "o": [
     "148 kr.",
     "298 kr.",
     "550 kr.",
     "2.796 kr."
    ],
    "a": 1,
    "no": "Reiknaðu lítraverð beggja: verð ÷ ml × 1.000.",
    "ok": "A: 699 ÷ 250 × 1.000 = 2.796 kr. á lítra. B: 1.249 ÷ 500 × 1.000 = 2.498 kr. á lítra. Munurinn er 298 kr. á hvern lítra, um 11%."
   },
   "sc": {
    "q": "Netverslun býður 30% afslátt af jakka „bara í dag“. Þú varst ekki að leita að jakka.",
    "o": [
     [
      "Kaupa strax",
      "Afslátturinn er raunverulegur, en ef þú þurftir ekki jakka sparaðirðu ekki 30%. Þú eyddir 70%."
     ],
     [
      "Setja í körfu og hugsa málið til morguns",
      "Góð regla. Ef þig langar enn í hann á morgun og afslátturinn er horfinn, var hann líklega ekki eins einstakur og sagt var."
     ],
     [
      "Loka síðunni",
      "Ekkert eytt. Margar verslanir senda svo „sérstakt tilboð“ nokkrum dögum síðar, sem segir sitt um „bara í dag“."
     ]
    ]
   },
   "sum": [
    "Berðu saman einingaverð, ekki pakkningaverð.",
    "Afsláttur af einhverju sem þú þurftir ekki er ekki sparnaður.",
    "14 dagar til að hætta við netkaup, og rétt á úrbótum ef vara er gölluð."
   ],
   "practice": [
    {
     "g": "unitp"
    },
    {
     "q": "Þú kaupir peysu á netinu. Hve marga daga hefurðu almennt til að hætta við?",
     "o": [
      "Engan",
      "7",
      "14",
      "30"
     ],
     "a": 2,
     "e": "Við netkaup er almennur 14 daga réttur til að falla frá samningi."
    },
    {
     "q": "Síminn þinn bilar eftir 8 mánuði án þess að þú hafir gert neitt. Hvað áttu rétt á?",
     "o": [
      "Engu",
      "Úrbótum, t.d. viðgerð eða nýjum síma",
      "Bara afslætti",
      "Bara ef þú keyptir aukatryggingu"
     ],
     "a": 1,
     "e": "Gölluð vara veitir rétt á úrbótum, óháð aukatryggingu."
    }
   ]
  },
  {
   "c": "lagoon",
   "title": "Sparnaður og vextir",
   "short": "Hvernig peningar vaxa, og hvað verðbólga gerir þeim.",
   "lead": "Þegar þú leggur peninga inn í banka greiðir bankinn þér vexti fyrir að fá að nota þá. Yfir mörg ár getur það orðið ótrúlega mikið, af ástæðu sem kallast vaxtavextir.",
   "learn": "<p><b>Vaxtavextir</b> þýða að þú færð vexti ofan á vextina sem þú hefur þegar fengið. Fyrsta árið vex upphæðin lítið. Eftir tíu ár vex hún hratt.</p>\n <div class=\"formula\">Lokaupphæð = Upphæð × (1 + vextir)<sup>ár</sup><small>100.000 kr. á 6% í 10 ár: 100.000 × 1,06<sup>10</sup> ≈ 179.085 kr.</small></div>\n <p><b>72-reglan</b> er flýtileið: deildu vöxtunum upp í 72 og þá færðu hve mörg ár tekur að tvöfalda peningana. Á 6% vöxtum tekur það um 12 ár.</p>\n <h2>Verðbólga</h2>\n <p>Verðbólga þýðir að verð hækkar. Ef ís kostar 1.000 kr. í dag og verðbólgan er 4% kostar hann 1.040 kr. eftir ár. Ef bankinn greiðir þér 3% vexti áttu fleiri krónur en getur keypt minna.</p>\n <div class=\"formula\">Raunvextir ≈ Vextir − Verðbólga<small>3% vextir − 4% verðbólga ≈ −1%. Peningarnir rýrna í raun.</small></div>\n <p>Bankareikningar eru öruggir en gefa hóflega vexti. <b>Bundnir reikningar</b> gefa oft hærri vexti, en þú kemst ekki í peningana í ákveðinn tíma. <b>Hlutabréfasjóðir</b> hafa yfir langan tíma gjarnan gefið hærri ávöxtun, en þeir sveiflast og geta lækkað, stundum mikið.</p>",
   "tool": "save",
   "q": {
    "q": "Þú leggur 100.000 kr. inn á reikning með 8% ársvöxtum og lætur þá standa í 9 ár. Um hvað verður upphæðin?",
    "o": [
     "108.000 kr.",
     "172.000 kr.",
     "200.000 kr.",
     "900.000 kr."
    ],
    "a": 2,
    "no": "Prófaðu 72-regluna: hve langan tíma tekur að tvöfalda á 8%?",
    "ok": "72 ÷ 8 = 9 ár til að tvöfalda. Nákvæmt: 100.000 × 1,08⁹ ≈ 199.900 kr. Ef þú svaraðir 172.000 reiknaðirðu vexti bara af upphaflegu upphæðinni og gleymdir vaxtavöxtunum."
   },
   "sc": {
    "q": "Afi þinn gefur þér 200.000 kr. í fermingargjöf og segir þér að gera eitthvað skynsamlegt við þær.",
    "o": [
     [
      "Venjulegur sparireikningur",
      "Öruggt og þú getur tekið út hvenær sem er. En vextirnir eru oft lágir, og ef verðbólgan er hærri rýrnar kaupmátturinn."
     ],
     [
      "Bundinn reikningur í nokkur ár",
      "Hærri vextir og þú freistast ekki til að eyða þeim. En ef þú þarft á peningunum að halda kemstu ekki í þá án kostnaðar."
     ],
     [
      "Hlutabréfasjóður",
      "Hefur sögulega gefið bestu ávöxtunina yfir langan tíma. En verðmætið getur lækkað um tugi prósenta á einu ári. Hentar bara ef þú ætlar ekki að nota peningana í mörg ár og þolir sveiflur. Margir velja að dreifa á fleiri en eina leið."
     ]
    ]
   },
   "sum": [
    "Vaxtavextir: vextir á vexti, sem vaxa hraðar eftir því sem tíminn líður.",
    "72 ÷ vextir ≈ ár til að tvöfalda.",
    "Raunvextir ≈ vextir − verðbólga."
   ],
   "practice": [
    {
     "g": "compound"
    },
    {
     "g": "rule72"
    },
    {
     "g": "real"
    }
   ]
  },
  {
   "c": "sky",
   "title": "Kort, lán og „borgaðu seinna“",
   "short": "Hvað kostar að eignast eitthvað núna og borga seinna?",
   "lead": "Það er auðveldara en nokkru sinni að kaupa eitthvað núna og borga seinna. En að borga seinna er alltaf lán, og lán kosta.",
   "learn": "<p>Með <b>debetkorti</b> borgarðu með þínum eigin peningum, beint af reikningnum. Með <b>kreditkorti</b> lánar fyrirtækið þér þar til reikningurinn kemur. <b>Yfirdráttur</b> er lán sem leyfir þér að fara undir núll á reikningnum, yfirleitt með háum vöxtum.</p>\n <p><b>„Kauptu núna, borgaðu seinna“</b> er líka lán. Kostnaðurinn felst oft í gjöldum frekar en vöxtum: lántökugjaldi og gjaldi fyrir hverja greiðslu. Þau virðast lítil, en geta orðið há á ársgrundvelli.</p>\n <h2>ÁHK: talan sem segir sannleikann</h2>\n <p><b>Árleg hlutfallstala kostnaðar</b> tekur saman alla vexti og öll gjöld og sýnir þau sem árlegt hlutfall. Þannig er hægt að bera saman ólík lán. Lánveitendur eiga að birta ÁHK.</p>\n <div class=\"formula\">Sími á 60.000 kr. í 6 greiðslum<br>6 × 10.495 kr. + 3.900 kr. lántökugjald = 66.870 kr.<small>6.870 kr. aukalega hljómar eins og 11,5%. En þar sem lánið er bara í hálft ár og upphæðin lækkar með hverri greiðslu er ÁHK um 49%.</small></div>\n <div class=\"fact\"><b>Spurðu alltaf:</b> hver er heildarupphæðin sem ég borga, og hver er ÁHK? Ef sá sem býður lánið getur ekki svarað er það viðvörunarmerki.</div>",
   "tool": "credit",
   "q": {
    "q": "Sími kostar 60.000 kr. Þú greiðir 6 greiðslur af 10.495 kr. og 3.900 kr. lántökugjald. Hve mikið greiðir þú umfram verð símans?",
    "o": [
     "495 kr.",
     "3.900 kr.",
     "6.870 kr.",
     "10.495 kr."
    ],
    "a": 2,
    "no": "Leggðu saman allar greiðslurnar og gjaldið og dragðu verð símans frá.",
    "ok": "6 × 10.495 = 62.970, auk 3.900 = 66.870 kr. Það er 6.870 kr. umfram verðið. Prófaðu reiknivélina fyrir ofan til að sjá hvað ÁHK verður."
   },
   "sc": {
    "q": "Strigaskórnir sem þig langar í kosta 35.000 kr. Verslunin býður „kauptu núna, borgaðu seinna“ í fjórum greiðslum.",
    "o": [
     [
      "Nota tilboðið",
      "Þú færð skóna strax. Athugaðu hvort gjöld fylgja og hvað gerist ef greiðsla gleymist, því þá bætast oft við dráttarvextir og innheimtukostnaður. Það er líka auðvelt að safna mörgum svona greiðslum án þess að taka eftir því."
     ],
     [
      "Spara í tvo mánuði",
      "17.500 kr. á mánuði og skórnir eru þínir, án nokkurs aukakostnaðar. Oft kemur líka í ljós að löngunin var minni en þú hélst."
     ],
     [
      "Kaupa ódýrari skó",
      "Minni kostnaður og engin skuld. Þú gætir líka skoðað notaða skó, sem eru oft nánast nýir."
     ]
    ]
   },
   "sum": [
    "„Borgaðu seinna“ er alltaf lán.",
    "ÁHK tekur saman alla vexti og öll gjöld sem árlegt hlutfall.",
    "Spurðu alltaf um heildarupphæðina sem þú greiðir."
   ],
   "practice": [
    {
     "g": "bnpl"
    },
    {
     "q": "Hvað er yfirdráttur?",
     "o": [
      "Sparnaður",
      "Lán sem leyfir þér að fara undir núll",
      "Gjafakort",
      "Afsláttur"
     ],
     "a": 1,
     "e": "Yfirdráttur er lán, yfirleitt með háum vöxtum."
    },
    {
     "q": "Hvort er dýrara á ársgrundvelli: 6.000 kr. gjald á 3 mánaða láni eða sama gjald á 12 mánaða láni af sömu upphæð?",
     "o": [
      "3 mánaða lánið",
      "12 mánaða lánið",
      "Jafn dýrt",
      "Ekki hægt að segja"
     ],
     "a": 0,
     "e": "Sama gjald á styttri tíma þýðir hærri árlegan kostnað."
    }
   ]
  },
  {
   "c": "violet",
   "title": "Svik á netinu",
   "short": "Hvernig svikarar vinna og hvernig þú verst.",
   "tool": null,
   "lead": "Svik á netinu beinast í auknum mæli að ungu fólki. Svikararnir eru færir, en þeir nota alltaf sömu fáu brögðin. Ef þú þekkir þau ertu mun öruggari.",
   "learn": "<p>Nær öll svik byggja á þremur atriðum: <b>tímapressu</b> („bregstu við núna“), <b>tilfinningum</b> (ótta, spennu eða samúð) og <b>beiðni um eitthvað sem enginn heiðarlegur aðili biður um</b>: lykilorð, kóða, samþykki með rafrænum skilríkjum eða greiðslu fyrirfram.</p>\n  <h2>Algengustu brögðin</h2>\n  <p><b>Vefveiðar:</b> skilaboð sem líkja eftir banka, pósti eða streymisveitu með tengli á falska síðu. <b>Of gott til að vera satt:</b> ódýr sími, auðveld vinna eða „tvöfaldaðu peningana“. <b>Falskar áhrifavaldaauglýsingar:</b> þekkt andlit sem mælir með fjárfestingu eða appi, oft búið til með gervigreind. <b>Peningaburðardýr:</b> einhver býðst til að borga þér fyrir að taka við peningum á reikninginn þinn og senda þá áfram. Það er peningaþvætti og getur verið refsivert fyrir þig.</p>\n  <div class=\"formula\">Svik ≈ Tímapressa + Tilfinning + Óvenjuleg beiðni<small>Ef öll þrjú eru til staðar, stoppaðu og talaðu við einhvern sem þú treystir.</small></div>\n  <div class=\"fact\"><b>Ef þú hefur lent í svikum:</b> hafðu strax samband við bankann til að stöðva greiðslur og loka kortum, og tilkynntu málið til lögreglunnar. Það er ekkert til að skammast sín fyrir. Svikararnir eru atvinnumenn.</div>",
   "q": {
    "q": "Hvert af þessu er öruggt merki um svik?",
    "o": [
     "Skilaboð með stafsetningarvillum",
     "Beiðni um að samþykkja innskráningu sem þú baðst ekki um",
     "Tölvupóstur frá óþekktu netfangi",
     "Auglýsing á samfélagsmiðli"
    ],
    "a": 1,
    "no": "Hin geta verið grunsamleg, en eitt þeirra er alltaf svik.",
    "ok": "Enginn heiðarlegur aðili biður þig að samþykkja innskráningu sem þú baðst ekki um. Það er alltaf svik. Hin atriðin geta bent til svika en þurfa ekki að gera það."
   },
   "sc": {
    "q": "Einhver á samfélagsmiðli býður þér 20.000 kr. fyrir að taka við millifærslu á reikninginn þinn og senda hana áfram.",
    "o": [
     [
      "Þiggja það, þetta eru auðveldir peningar",
      "Þú verður hluti af peningaþvætti. Reikningnum þínum getur verið lokað, þú getur þurft að endurgreiða alla upphæðina og málið getur orðið lögreglumál."
     ],
     [
      "Spyrja hvaðan peningarnir koma",
      "Svarið verður trúverðugt, því svikararnir hafa æft það. Engin útskýring gerir þetta í lagi."
     ],
     [
      "Hafna og tilkynna aðganginn",
      "Rétt. Tilkynntu aðganginn til miðilsins og segðu fullorðnum frá. Aðrir í kringum þig gætu fengið sama boð."
     ]
    ]
   },
   "sum": [
    "Svik nota tímapressu, tilfinningar og óvenjulegar beiðnir.",
    "Aldrei gefa upp kóða eða samþykkja innskráningu sem þú baðst ekki um.",
    "Ef illa fer: hafðu strax samband við bankann og lögregluna."
   ],
   "practice": [
    {
     "q": "Hvað er „peningaburðardýr“?",
     "o": [
      "Sá sem ber reiðufé",
      "Sá sem lætur nota reikninginn sinn til að færa illa fengið fé",
      "Bankastarfsmaður",
      "Áhrifavaldur"
     ],
     "a": 1,
     "e": "Það er þátttaka í peningaþvætti, jafnvel þó maður viti ekki hvaðan peningarnir koma."
    },
    {
     "q": "Þekktur áhrifavaldur mælir með appi sem lofar 10% ávöxtun á viku. Hvað er líklegast?",
     "o": [
      "Frábært tækifæri",
      "Svik eða mjög mikil áhætta",
      "Örugg fjárfesting",
      "Ríkisskuldabréf"
     ],
     "a": 1,
     "e": "10% á viku jafngildir yfir 14.000% á ári. Engin raunveruleg fjárfesting skilar því."
    },
    {
     "q": "Hvað á að gera fyrst ef þú gafst upp kortanúmer á falskri síðu?",
     "o": [
      "Bíða og sjá",
      "Hafa strax samband við bankann",
      "Skipta um lykilorð á samfélagsmiðlum",
      "Ekkert"
     ],
     "a": 1,
     "e": "Bankinn getur lokað kortinu og stöðvað greiðslur ef haft er samband fljótt."
    }
   ]
  },
  {
   "c": "lagoon",
   "title": "Gjaldmiðlar og ferðalög",
   "short": "Gengi, kortaálag og hvað hlutir kosta í raun erlendis.",
   "tool": "fx",
   "lead": "Þegar þú kaupir eitthvað í útlöndum eða á erlendri netverslun þarf að breyta krónum í annan gjaldmiðil. Það kostar meira en flestir halda.",
   "learn": "<p><b>Gengi</b> segir hve margar krónur þarf fyrir eina einingu af öðrum gjaldmiðli. Ef evran kostar 145 kr. kostar 40 evru máltíð um 5.800 kr. Gengið breytist á hverjum degi. Þegar krónan <b>styrkist</b> þarf færri krónur fyrir hverja evru og útlönd verða ódýrari. Þegar hún <b>veikist</b> verða þau dýrari.</p>\n  <div class=\"formula\">Verð í krónum = Verð í erlendri mynt × Gengi × (1 + álag)</div>\n  <p>Þegar þú greiðir með korti erlendis bætir kortafyrirtækið oft við <b>álagi</b> ofan á gengið. Auk þess bjóða sumir posar og hraðbankar erlendis að greiða „í krónum“. Það hljómar þægilegt, en gengið sem þá er notað er yfirleitt mun óhagstæðara.</p>\n  <div class=\"fact\"><b>Regla fyrir ferðalagið:</b> greiddu alltaf í gjaldmiðli landsins sem þú ert í, ekki í krónum. Og athugaðu hvaða álag kortið þitt tekur áður en þú ferð.</div>",
   "q": {
    "q": "Þú kaupir skó á 80 evrur. Gengið er 145 kr. og kortaálagið 2%. Hvað kosta skórnir í krónum?",
    "o": [
     "11.600 kr.",
     "11.832 kr.",
     "12.180 kr.",
     "8.160 kr."
    ],
    "a": 1,
    "no": "Margfaldaðu evrurnar með genginu og svo með 1,02.",
    "ok": "80 × 145 = 11.600 kr., og 11.600 × 1,02 = 11.832 kr. Álagið kostaði 232 kr."
   },
   "sc": {
    "q": "Á veitingastað á Spáni spyr posinn hvort þú viljir greiða í evrum eða krónum.",
    "o": [
     [
      "Krónum, þá veit ég nákvæmlega verðið",
      "Þú sérð upphæðina í krónum, en gengið sem posinn notar er yfirleitt nokkrum prósentum verra. Þú borgar fyrir þægindin."
     ],
     [
      "Evrum",
      "Rétt val í langflestum tilvikum. Bankinn þinn umreiknar á eigin gengi, sem er yfirleitt hagstæðara."
     ],
     [
      "Skiptir ekki máli",
      "Það skiptir máli. Á heilli ferð getur munurinn orðið nokkur þúsund krónur."
     ]
    ]
   },
   "sum": [
    "Verð í krónum = verð × gengi × (1 + álag).",
    "Þegar krónan styrkist verða útlönd ódýrari.",
    "Greiddu alltaf í gjaldmiðli landsins sem þú ert í."
   ],
   "practice": [
    {
     "g": "fxp"
    },
    {
     "q": "Krónan veikist. Hvað gerist við verð á erlendum netverslunum í krónum?",
     "o": [
      "Það lækkar",
      "Það hækkar",
      "Það breytist ekki",
      "Það fer eftir versluninni"
     ],
     "a": 1,
     "e": "Þegar krónan veikist þarf fleiri krónur fyrir hverja evru eða hvern dollar."
    },
    {
     "q": "Hraðbanki erlendis býðst til að umreikna í krónur fyrir þig. Hvað er yfirleitt best?",
     "o": [
      "Þiggja það",
      "Hafna og taka út í gjaldmiðli landsins",
      "Taka meira út",
      "Nota ekki kort erlendis"
     ],
     "a": 1,
     "e": "Umreikningur á staðnum notar yfirleitt óhagstæðara gengi."
    }
   ]
  },
  {
   "c": "violet",
   "title": "Hvert fara skattarnir?",
   "short": "Raunveruleg gögn úr ríkisreikningi.",
   "lead": "Í hvert skipti sem þú færð laun eða kaupir eitthvað greiðirðu skatt. Hér sérðu hvaðan ríkið fær peningana og í hvað þeir fara, samkvæmt ríkisreikningsgögnum 2025.",
   "learn": "<p>Ríkið rekur sig svipað og heimili eða fyrirtæki: það hefur tekjur, útgjöld og fjárhagsáætlun sem Alþingi samþykkir á hverju ári, svokölluð fjárlög.</p>\n <h2>Hvaðan koma peningarnir?</h2>\n <p>Tvær stærstu tekjulindir ríkisins eru nánast jafnstórar. <b>Skattar á vörur og þjónustu</b>, að mestu virðisaukaskattur, skiluðu um 482 milljörðum króna. <b>Skattar á tekjur og hagnað</b> skiluðu um 471 milljarði. Næst kom <b>tryggingagjald</b>, sem fyrirtæki greiða af launum, með um 128 milljarða.</p>\n <p><b>Virðisaukaskattur (VSK)</b> er innifalinn í næstum öllu sem þú kaupir. Almenna þrepið er 24% og neðra þrepið, sem gildir meðal annars um matvæli og bækur, er 11%.</p>\n <div class=\"formula\">VSK sem er falinn í verði = Verð × 24 ÷ 124<small>Í 1.240 kr. samloku eru 240 kr. VSK. Algeng villa er að reikna 24% af verðinu, sem gefur of háa tölu.</small></div>\n <div class=\"fact\"><b>Hver borgar skólann þinn?</b> Grunnskólar eru reknir af sveitarfélögunum, að mestu fyrir útsvarið sem er hluti af staðgreiðslunni. Þess vegna sjást þeir ekki á myndinni hér að neðan, sem sýnir bara útgjöld ríkisins.</div>",
   "tool": "tax",
   "q": {
    "q": "Leikjatölva kostar 99.990 kr. með 24% virðisaukaskatti. Hve mikið af verðinu er VSK?",
    "o": [
     "23.998 kr.",
     "19.353 kr.",
     "24.000 kr.",
     "80.637 kr."
    ],
    "a": 1,
    "no": "Verðið inniheldur nú þegar skattinn. Notaðu 24 ÷ 124, ekki 24%.",
    "ok": "99.990 × 24 ÷ 124 ≈ 19.353 kr. Verð án VSK er því um 80.637 kr. Ef þú reiknaðir 24% af 99.990 fékkstu 23.998, sem er of hátt, því þá reiknarðu skatt ofan á skattinn."
   },
   "sc": {
    "q": "Ímyndaðu þér að þú sért fjármálaráðherra og ríkið þurfi að ná 10 milljörðum betri afkomu á næsta ári. Hvað gerirðu?",
    "o": [
     [
      "Skera niður í stærsta útgjaldaflokknum",
      "Heilbrigðismál eru stærsti flokkurinn, svo 10 milljarðar eru þar hlutfallslega lítill hluti. En niðurskurður getur þýtt lengri biðlista eða færra starfsfólk, og það bitnar á fólki sem er veikt."
     ],
     [
      "Dreifa niðurskurði jafnt yfir alla flokka",
      "Enginn einn málaflokkur fær stórt högg. En sumir litlir flokkar, eins og menning eða rannsóknir, finna meira fyrir sama hlutfalli, og það er erfitt að skera niður vexti af skuldum sem ríkið þarf að greiða."
     ],
     [
      "Hækka skatta",
      "Þjónustan helst óbreytt, en heimili og fyrirtæki hafa minna á milli handanna. Spurningin er líka hvaða skatt: hærri VSK snertir alla jafnt, hærri tekjuskattur fyrst og fremst þá sem hafa hærri tekjur. Hér er ekkert eitt rétt svar, og um þetta er tekist á í stjórnmálum."
     ]
    ]
   },
   "sum": [
    "Stærstu tekjulindir ríkisins eru VSK og tekjuskattur.",
    "Stærsti útgjaldaflokkurinn er heilbrigðismál.",
    "VSK í verði = verð × 24 ÷ 124 (eða × 11 ÷ 111)."
   ],
   "practice": [
    {
     "g": "vatin"
    },
    {
     "q": "Hver rekur grunnskólana?",
     "o": [
      "Ríkið",
      "Sveitarfélögin",
      "Lífeyrissjóðirnir",
      "Bankarnir"
     ],
     "a": 1,
     "e": "Grunnskólar eru reknir af sveitarfélögum, að mestu fyrir útsvar."
    },
    {
     "q": "Hvaða VSK-þrep gildir um matvæli?",
     "o": [
      "0%",
      "11%",
      "24%",
      "31,49%"
     ],
     "a": 1,
     "e": "Matvæli eru í neðra þrepinu, 11%."
    }
   ]
  },
  {
   "c": "leaf",
   "title": "Að afla tekna sjálf/ur",
   "short": "Fyrsta litla fyrirtækið þitt.",
   "lead": "Þú þarft ekki að bíða eftir að einhver ráði þig. Að baka og selja, passa gæludýr, laga hjól eða hanna fyrir aðra eru allt leiðir til að afla tekna. En til að vita hvort það borgar sig þarftu að reikna.",
   "learn": "<p>Fyrsta spurningin er ekki „hvað get ég selt þetta á?“ heldur „hvað fæ ég í raun fyrir hvern klukkutíma?“.</p>\n <div class=\"formula\">Framlegð á einingu = Verð − Kostnaður á einingu<br>Hagnaður = Framlegð × Fjöldi − Fastur kostnaður<br>Tímakaup = Hagnaður ÷ Klukkustundir</div>\n <p><b>Fastur kostnaður</b> er það sem þú greiðir hvort sem þú selur eða ekki, t.d. auglýsing eða tæki. <b>Núllpunktur</b> segir hve mikið þú þarft að selja til að ná upp í fasta kostnaðinn.</p>\n <div class=\"formula\">Núllpunktur = Fastur kostnaður ÷ Framlegð á einingu</div>\n <p>Mundu að tekjur af eigin starfsemi eru líka skattskyldar og eiga heima á skattframtalinu. Þegar reksturinn stækkar er þetta nákvæmlega efnið í námskeiðinu <b>Fagstig</b>.</p>",
   "tool": "biz",
   "q": {
    "q": "Þú selur kökur á 2.500 kr. stykkið. Hráefnið í hverja köku kostar 900 kr. Þú bakar 8 kökur á 4 klukkustundum. Hvert er tímakaupið þitt?",
    "o": [
     "5.000 kr.",
     "3.200 kr.",
     "1.600 kr.",
     "12.800 kr."
    ],
    "a": 1,
    "no": "Dragðu hráefniskostnaðinn frá verðinu áður en þú deilir með tímanum.",
    "ok": "Framlegð á köku er 2.500 − 900 = 1.600 kr. Átta kökur gefa 12.800 kr. og 12.800 ÷ 4 = 3.200 kr. á klukkustund. 5.000 kr. fæst ef kostnaðurinn gleymist."
   },
   "sc": {
    "q": "Kökurnar slá í gegn og pantanir streyma inn. En þú átt próf í næstu viku.",
    "o": [
     [
      "Taka við öllum pöntunum",
      "Meiri tekjur núna, en svefninn og prófið líða fyrir það. Ef gæðin minnka gætirðu líka misst viðskiptavinina sem þú varst að eignast."
     ],
     [
      "Hækka verðið",
      "Færri pantanir en hærri framlegð á hverja köku. Ef eftirspurnin er mikil er það oft merki um að verðið sé of lágt. Þú vinnur minna fyrir sömu eða meiri tekjur."
     ],
     [
      "Fá vin með og skipta hagnaðinum",
      "Þú annar fleiri pöntunum og lærir að vinna með öðrum. Semjið fyrirfram um skiptinguna, því það er auðveldara en að rífast um hana eftir á."
     ]
    ]
   },
   "sum": [
    "Tímakaup = (verð − kostnaður) × fjöldi ÷ klukkustundir.",
    "Núllpunktur = fastur kostnaður ÷ framlegð á einingu.",
    "Tekjur af eigin starfsemi eru líka skattskyldar."
   ],
   "practice": [
    {
     "g": "hourly"
    },
    {
     "q": "Hvað er núllpunktur?",
     "o": [
      "Þegar engin sala er",
      "Þegar tekjur ná upp í kostnað",
      "Þegar verðið er núll",
      "Þegar hagnaður er hámarkaður"
     ],
     "a": 1,
     "e": "Á núllpunkti er hvorki hagnaður né tap."
    }
   ]
  }
 ],
 "exam": {
  "pass": 12,
  "questions": [
   [
    "Hve hár er persónuafsláttur á mánuði árið 2026?",
    [
     "72.492 kr.",
     "11,5% af launum",
     "300.000 kr.",
     "31,49%"
    ]
   ],
   [
    "Þú ert 14 ára og vinnur þér inn 420.000 kr. á árinu. Hve mikinn skatt greiðirðu?",
    [
     "0 kr.",
     "7.200 kr.",
     "25.200 kr.",
     "132.258 kr."
    ]
   ],
   [
    "Hve stórt hlutfall launa greiðir launþegi í lífeyrissjóð?",
    [
     "1%",
     "11,5%",
     "31,49%",
     "4%"
    ]
   ],
   [
    "Samkvæmt 72-reglunni, um hve langan tíma tekur að tvöfalda peninga á 6% ársvöxtum?",
    [
     "12 ár",
     "18 ár",
     "72 ár",
     "6 ár"
    ]
   ],
   [
    "Vextir á reikningnum þínum eru 5% og verðbólgan er 4%. Hverjir eru raunvextirnir um það bil?",
    [
     "5%",
     "9%",
     "−1%",
     "1%"
    ]
   ],
   [
    "Hvað sýnir ÁHK?",
    [
     "Vexti á sparireikningi",
     "Mánaðargreiðslu af láni",
     "Allan kostnað láns sem árlegt hlutfall",
     "Hve mikið þú mátt taka að láni"
    ]
   ],
   [
    "Matvara kostar 1.110 kr. með 11% VSK. Hve mikið af verðinu er VSK?",
    [
     "11 kr.",
     "111 kr.",
     "110 kr.",
     "122 kr."
    ]
   ],
   [
    "Samkvæmt ríkisreikningsgögnum 2025, í hvaða flokk fer stærsti hluti útgjalda ríkisins?",
    [
     "Samgöngur",
     "Utanríkismál",
     "Heilbrigðismál",
     "Menntun"
    ]
   ],
   [
    "Hver rekur grunnskólana á Íslandi?",
    [
     "Ríkið",
     "Lífeyrissjóðirnir",
     "Skatturinn",
     "Sveitarfélögin"
    ]
   ],
   [
    "Þú selur vöru á 1.500 kr. Hún kostar 600 kr. að búa til og fastur kostnaður er 9.000 kr. Hve margar þarftu að selja til að ná núllpunkti?",
    [
     "6",
     "15",
     "9.000",
     "10"
    ]
   ],
   [
    "Hvað er öruggt merki um svik?",
    [
     "Óþekkt símanúmer",
     "Stafsetningarvillur",
     "Auglýsing",
     "Beiðni um að samþykkja innskráningu sem þú baðst ekki um"
    ]
   ],
   [
    "Hve marga daga hefurðu almennt til að hætta við netkaup?",
    [
     "14",
     "7",
     "3",
     "30"
    ]
   ],
   [
    "Vara A kostar 600 kr. fyrir 400 g og vara B 1.000 kr. fyrir 800 g. Hvor er ódýrari á kíló?",
    [
     "Ekki hægt að segja",
     "B",
     "A",
     "Jafndýrar"
    ]
   ],
   [
    "Þú kaupir fyrir 50 evrur á genginu 140 kr. með 2% álagi. Hvað kostar það?",
    [
     "7.140 kr.",
     "7.280 kr.",
     "7.500 kr.",
     "7.000 kr."
    ]
   ],
   [
    "Á hvaða gjaldmiðli er best að greiða þegar posi erlendis býður val?",
    [
     "Dollurum",
     "Skiptir ekki máli",
     "Krónum",
     "Gjaldmiðli landsins"
    ]
   ],
   [
    "Hvað er peningaburðardýr?",
    [
     "Bankastarfsmaður",
     "Sá sem lætur nota reikninginn sinn til að færa illa fengið fé",
     "Sá sem sparar í reiðufé",
     "Öryggisvörður"
    ]
   ],
   [
    "Hver er staðan í lok mánaðar ef þú byrjar með 10.000 kr., færð 30.000 kr. og eyðir 25.000 kr.?",
    [
     "5.000 kr.",
     "25.000 kr.",
     "65.000 kr.",
     "15.000 kr."
    ]
   ],
   [
    "Hvað þýðir að krónan styrkist?",
    [
     "Útlönd verða ódýrari",
     "Verð á Íslandi hækkar",
     "Vextir hækka",
     "Útlönd verða dýrari"
    ]
   ],
   [
    "Hver er besta fyrsta viðbrögðin ef þú hefur gefið upp kortanúmer á falskri síðu?",
    [
     "Hafa strax samband við bankann",
     "Skipta um síma",
     "Eyða appinu",
     "Bíða"
    ]
   ],
   [
    "„3 fyrir 2“ sparar peninga ef:",
    [
     "Varan er dýr",
     "Þú hefðir hvort sem er keypt þrjú",
     "Alltaf",
     "Það er síðasti dagur tilboðsins"
    ]
   ],
   [
    "Þú ert 15 ára og vinnur þér inn 250.000 kr. á árinu. Hve mikinn skatt greiðirðu?",
    [
     "6.000 kr.",
     "0 kr.",
     "78.725 kr.",
     "15.000 kr."
    ]
   ],
   [
    "Hvaða reikningur er ætlaður til daglegra greiðslna?",
    [
     "Bundinn reikningur",
     "Veltureikningur",
     "Séreign",
     "Lífeyrissjóður"
    ]
   ],
   [
    "Sími bilar eftir 10 mánuði vegna galla. Hvað áttu almennt rétt á?",
    [
     "Bara afslætti",
     "Bara ef þú keyptir aukatryggingu",
     "Úrbótum",
     "Engu"
    ]
   ],
   [
    "Þú leggur 100.000 kr. inn á 5% vexti í 2 ár. Hver er lokaupphæðin?",
    [
     "110.000 kr.",
     "110.250 kr.",
     "125.000 kr.",
     "105.000 kr."
    ]
   ],
   [
    "Hvað er ÁHK?",
    [
     "Ávöxtun hlutabréfa",
     "Árlegur hámarksskattur",
     "Afsláttur hjá kortafyrirtæki",
     "Árleg hlutfallstala kostnaðar"
    ]
   ]
  ],
  "ask": 15
 },
 "order": 1
});
