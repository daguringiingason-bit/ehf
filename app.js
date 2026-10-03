(function(){
const $=id=>document.getElementById(id);
const nf=(v,d=0)=>(v<0?'−':'')+Math.abs(v).toLocaleString('is-IS',{minimumFractionDigits:d,maximumFractionDigits:d});
const pc=(v,d=1)=>nf(v*100,d)+'%';

/* ---------- data (þús. kr.) ---------- */
const Y=[2021,2022,2023,2024,2025];
const D={
  rev:[48210,85374,142118,198455,236412],
  cogs:[20105,35012,58260,81390,97140],
  wage:[14020,26110,44230,63180,72315],
  oth:[8950,15240,23870,33010,38120],
  dep:[980,1840,3120,4870,6050],
  fin:[460,1010,1980,2940,3120],
  fte:[3,6,9,12,13]
};
D.gross=D.rev.map((v,i)=>v-D.cogs[i]);
D.ebitda=D.gross.map((v,i)=>v-D.wage[i]-D.oth[i]);
D.ebit=D.ebitda.map((v,i)=>v-D.dep[i]);
D.ebt=D.ebit.map((v,i)=>v-D.fin[i]);
D.tax=D.ebt.map(v=>Math.round(Math.max(v,0)*0.2));
D.ni=D.ebt.map((v,i)=>v-D.tax[i]);
const B={fix:30240,inv:34110,rec:17880,cash:6020,ltd:22400,std:27950,ibd:26020};
B.cur=B.inv+B.rec+B.cash; B.assets=B.fix+B.cur; B.debt=B.ltd+B.std; B.eq=B.assets-B.debt;

/* ---------- glossary ---------- */
const T={
 kt:['Kennitala','Fyrstu sex stafirnir eru stofndagur. Hjá fyrirtækjum er 40 bætt við daginn, svo 54 þýðir 14. Níundi stafurinn er vartala og sá tíundi segir til um öld.'],
 isat:['ÍSAT','Íslensk atvinnugreinaflokkun. 47.71 þýðir smásala á fatnaði í sérverslunum.'],
 forr:['Forráðamaður','Sá sem er skráður í forsvari fyrir félagið, oftast framkvæmdastjóri eða stjórnarformaður.'],
 skrad:['Skráð','Dagurinn sem félagið var skráð í fyrirtækjaskrá. Á að passa við kennitöluna.'],
 form:['ehf.','Einkahlutafélag. Eigendur bera takmarkaða ábyrgð og tapa í versta falli hlutafénu.'],
 rev:['Rekstrartekjur','Allar tekjur af sölu. Kallað velta eða top line. Segir ekkert um hagnað.'],
 cogs:['Vörunotkun','Beinn kostnaður við vörurnar sem seldust: efni, framleiðsla og flutningur.'],
 gross:['Framlegð','Tekjur mínus vörunotkun. Það sem eftir er til að greiða allan annan kostnað.'],
 wage:['Laun og launatengd gjöld','Laun auk þess sem launagreiðandi greiðir ofan á, t.d. tryggingagjald og lífeyrisframlag.'],
 oth:['Annar rekstrarkostnaður','Húsaleiga, markaðssetning, hugbúnaður, bókhald og annað sem fylgir rekstrinum.'],
 ebitda:['EBITDA','Hagnaður fyrir vexti, skatta og afskriftir. Sýnir hvort kjarnastarfsemin skilar peningum.'],
 dep:['Afskriftir','Kaupverð tækja og innréttinga dreift yfir líftíma þeirra. Kostnaður í bókhaldi, en engir peningar fara út á árinu.'],
 ebit:['EBIT','Rekstrarhagnaður. EBITDA mínus afskriftir.'],
 fin:['Fjármagnsgjöld','Vextir af lánum, að frádregnum vaxtatekjum.'],
 tax:['Tekjuskattur','Lögaðilar á Íslandi greiða 20% tekjuskatt af hagnaði.'],
 ni:['Hagnaður ársins','Bottom line. Það sem eftir stendur þegar allt hefur verið greitt.'],
 fte:['Ársverk','Fjöldi starfa umreiknaður í fullt starf. Tveir í hálfu starfi eru eitt ársverk.'],
 fix:['Fastafjármunir','Eignir sem nýtast lengur en eitt ár: innréttingar, tæki, vefverslun.'],
 inv:['Birgðir','Vörur á lager sem eru ekki seldar enn. Peningar sem sitja á hillu.'],
 rec:['Viðskiptakröfur','Reikningar sem viðskiptavinir eiga eftir að greiða.'],
 cash:['Handbært fé','Peningar á bankareikningi.'],
 eq:['Eigið fé','Eignir mínus skuldir. Hlutur eigendanna.'],
 ltd:['Langtímaskuldir','Skuldir sem greiðast eftir meira en eitt ár, aðallega bankalán.'],
 std:['Skammtímaskuldir','Skuldir á gjalddaga innan árs: birgjar, ógreidd laun, VSK og næsta afborgun lána.'],
 cfo:['Handbært fé frá rekstri','Peningarnir sem reksturinn sjálfur skilaði, eftir að leiðrétt er fyrir afskriftum og breytingum á birgðum, kröfum og skuldum.'],
 cfi:['Fjárfestingarhreyfingar','Peningar sem fóru í tæki, innréttingar og aðrar langtímaeignir.'],
 cff:['Fjármögnunarhreyfingar','Ný lán, afborganir og arður til eigenda.'],
 gm:['Framlegðarhlutfall','Framlegð ÷ tekjur.'],
 em:['EBITDA-hlutfall','EBITDA ÷ tekjur.'],
 nm:['Hagnaðarhlutfall','Hagnaður ÷ tekjur.'],
 eqr:['Eiginfjárhlutfall','Eigið fé ÷ eignir. Hve stór hluti eigna er fjármagnaður af eigendum.'],
 cr:['Veltufjárhlutfall','Veltufjármunir ÷ skammtímaskuldir. Yfir 1 þýðir að skammtímaeignir duga fyrir skammtímaskuldum.'],
 roe:['Arðsemi eigin fjár','Hagnaður ÷ eigið fé. Ávöxtun eigendanna.'],
 gr:['Tekjuvöxtur','(Tekjur í ár − tekjur í fyrra) ÷ tekjur í fyrra.'],
 wpf:['Laun á ársverk','Launakostnaður ÷ ársverk. Hvað hvert stöðugildi kostar að meðaltali.'],
 rpf:['Tekjur á ársverk','Tekjur ÷ ársverk. Mælikvarði á framleiðni.'],
 ibd:['Vaxtaberandi skuldir','Skuldir sem bera vexti, t.d. bankalán. Birgjaskuldir teljast ekki með.'],
 nd:['Nettóskuldir','Vaxtaberandi skuldir mínus handbært fé.'],
 ev:['Heildarvirði (EV)','Virði rekstrarins í heild, óháð fjármögnun. EBITDA × margfeldi.'],
 eqv:['Virði hlutafjár','Heildarvirði mínus nettóskuldir. Það sem eigendur fá í raun.'],
 mult:['Margfeldi','Hve oft EBITDA kaupandi er tilbúinn að greiða. Ræðst af atvinnugrein, vexti og áhættu.']
};
const tm=(k,label)=>`<button class="term" type="button" data-t="${k}">${label||T[k][0]}</button>`;

/* ---------- company page sections ---------- */
let mult=5;
function row(k,arr,cls,fmt){return `<tr class="${cls||''}"><td>${tm(k)}</td>${arr.map(v=>`<td class="${v<0?'n':''}">${fmt?fmt(v):nf(v)}</td>`).join('')}</tr>`}
const yh=`<tr><th></th>${Y.map(y=>`<th>${y}</th>`).join('')}</tr>`;
function valOut(){
  const ev=D.ebitda[4]*mult,nd=B.ibd-B.cash,eqv=ev-nd;
  return `<div><span>${tm('ev')}</span><b>${nf(ev/1000,1)} m</b></div><div><span>${tm('nd')}</span><b>${nf(nd/1000,1)} m</b></div><div><span>${tm('eqv')}</span><b>${nf(eqv/1000,1)} m</b></div>`;
}
function valHTML(){
  const nd=B.ibd-B.cash;
  return `<div class="slider"><span>${tm('mult')}</span><input type="range" id="mult" min="3" max="12" step="0.5" value="${mult}" aria-label="Margfeldi"><b id="multv">${nf(mult,1)}×</b></div>
  <div class="tbl-wrap" style="margin-top:12px"><table class="t">
   <tr><td>${tm('ebitda','EBITDA 2025')}</td><td>${nf(D.ebitda[4])}</td></tr>
   <tr><td>${tm('ibd')}</td><td>${nf(B.ibd)}</td></tr>
   <tr><td>− ${tm('cash')}</td><td class="n">${nf(-B.cash)}</td></tr>
   <tr class="s"><td>${tm('nd')}</td><td>${nf(nd)}</td></tr></table></div>
  <div class="val-row" id="valOut">${valOut()}</div><div class="unit" style="margin-top:8px">Í milljónum króna</div>`;
}
const SECS=[
 {id:'s0',title:'',html:()=>`<div class="head-name">Fjöður ehf.</div><div class="facts">
   <div class="fact"><span class="t">${tm('kt')}</span><span class="v">540319-1380</span></div>
   <div class="fact"><span class="t">${tm('form','Rekstrarform')}</span><span class="v">ehf.</span></div>
   <div class="fact"><span class="t">${tm('skrad')}</span><span class="v">14.03.2019</span></div>
   <div class="fact"><span class="t">${tm('isat')}</span><span class="v">47.71.0</span></div>
   <div class="fact"><span class="t">ÍSAT flokkur</span><span class="v">Smásala á fatnaði</span></div>
   <div class="fact"><span class="t">${tm('forr')}</span><span class="v">Embla Rós Jónsdóttir</span></div></div>`},
 {id:'s1',title:'Rekstrarreikningur',html:()=>`<div class="unit">Í þúsundum króna</div><div class="tbl-wrap"><table class="t">${yh}
   ${row('rev',D.rev)}${row('cogs',D.cogs.map(v=>-v))}${row('gross',D.gross,'s')}
   ${row('wage',D.wage.map(v=>-v))}${row('oth',D.oth.map(v=>-v))}${row('ebitda',D.ebitda,'s')}
   ${row('dep',D.dep.map(v=>-v))}${row('ebit',D.ebit,'s')}${row('fin',D.fin.map(v=>-v))}
   ${row('tax',D.tax.map(v=>-v))}${row('ni',D.ni,'f')}</table></div>`},
 {id:'s2',title:'Efnahagsreikningur 31.12.2025',html:()=>`<div class="unit">Í þúsundum króna</div><div class="tbl-wrap"><table class="t">
   <tr><td>${tm('fix')}</td><td>${nf(B.fix)}</td></tr>
   <tr><td>${tm('inv')}</td><td>${nf(B.inv)}</td></tr>
   <tr><td>${tm('rec')}</td><td>${nf(B.rec)}</td></tr>
   <tr><td>${tm('cash')}</td><td>${nf(B.cash)}</td></tr>
   <tr class="s"><td>Eignir samtals</td><td>${nf(B.assets)}</td></tr>
   <tr><td>${tm('eq')}</td><td>${nf(B.eq)}</td></tr>
   <tr><td>${tm('ltd')}</td><td>${nf(B.ltd)}</td></tr>
   <tr><td>${tm('std')}</td><td>${nf(B.std)}</td></tr>
   <tr class="s"><td>Eigið fé og skuldir samtals</td><td>${nf(B.eq+B.debt)}</td></tr></table></div>`},
 {id:'s3',title:'Sjóðstreymi 2025',html:()=>`<div class="unit">Í þúsundum króna</div><div class="tbl-wrap"><table class="t">
   <tr><td>${tm('ni')}</td><td>${nf(D.ni[4])}</td></tr>
   <tr><td>+ ${tm('dep')}</td><td>${nf(D.dep[4])}</td></tr>
   <tr><td>Breyting á ${tm('inv','birgðum')}</td><td class="n">${nf(-12300)}</td></tr>
   <tr><td>Breyting á ${tm('rec','viðskiptakröfum')}</td><td class="n">${nf(-5900)}</td></tr>
   <tr><td>Breyting á ${tm('std','skammtímaskuldum')}</td><td>${nf(3180)}</td></tr>
   <tr class="s"><td>${tm('cfo')}</td><td>${nf(6764)}</td></tr>
   <tr><td>Innréttingar og tæki</td><td class="n">${nf(-9850)}</td></tr>
   <tr class="s"><td>${tm('cfi')}</td><td class="n">${nf(-9850)}</td></tr>
   <tr><td>Nýtt lán</td><td>${nf(5000)}</td></tr>
   <tr><td>Afborganir lána</td><td class="n">${nf(-2100)}</td></tr>
   <tr><td>Greiddur arður</td><td class="n">${nf(-3000)}</td></tr>
   <tr class="s"><td>${tm('cff')}</td><td class="n">${nf(-100)}</td></tr>
   <tr class="f"><td>Breyting á handbæru fé</td><td class="n">${nf(-3186)}</td></tr>
   <tr><td>Handbært fé í upphafi árs</td><td>${nf(9206)}</td></tr>
   <tr><td>Handbært fé í lok árs</td><td>${nf(B.cash)}</td></tr></table></div>`},
 {id:'s4',title:'Kennitölur',html:()=>`<div class="tbl-wrap"><table class="t">${yh}
   ${row('gr',D.rev.map((v,i)=>i?v/D.rev[i-1]-1:NaN),'',v=>isNaN(v)?'–':pc(v))}
   ${row('gm',D.gross.map((v,i)=>v/D.rev[i]),'',v=>pc(v))}
   ${row('em',D.ebitda.map((v,i)=>v/D.rev[i]),'',v=>pc(v))}
   ${row('nm',D.ni.map((v,i)=>v/D.rev[i]),'',v=>pc(v))}</table></div>
   <div class="tbl-wrap" style="margin-top:14px"><table class="t"><tr><th>31.12.2025</th><th></th></tr>
   <tr><td>${tm('eqr')}</td><td>${pc(B.eq/B.assets)}</td></tr>
   <tr><td>${tm('cr')}</td><td>${nf(B.cur/B.std,2)}</td></tr>
   <tr><td>${tm('roe')}</td><td>${pc(D.ni[4]/B.eq)}</td></tr></table></div>`},
 {id:'s5',title:'Starfsfólk',html:()=>`<div class="unit">Laun og tekjur í þúsundum króna</div><div class="tbl-wrap"><table class="t">${yh}
   ${row('fte',D.fte)}
   ${row('wpf',D.wage.map((v,i)=>Math.round(v/D.fte[i])))}
   ${row('rpf',D.rev.map((v,i)=>Math.round(v/D.fte[i])))}
   ${row('wage','x'.repeat(5).split('').map((_,i)=>D.wage[i]/D.rev[i]),'',v=>pc(v))}</table></div>
   <div class="unit" style="margin-top:8px">Neðsta línan sýnir launakostnað sem hlutfall af tekjum.</div>`},
 {id:'s6',title:'Verðmat',html:valHTML}
];
function renderSecs(){
  $('secs').innerHTML=SECS.map((s,i)=>`<section class="sec" id="${s.id}"><div class="inner" ${i>state.max?'aria-hidden="true"':''}>${s.title?`<h3>${s.title}</h3>`:''}${s.html()}</div><div class="lockmsg"><span>Opnast í kafla ${i+1}</span></div></section>`).join('');
  SECS.forEach((s,i)=>$(s.id).classList.toggle('locked',i>state.max));
  $(SECS[state.cur].id).classList.add('focus');
  const m=$('mult');
  if(m)m.addEventListener('input',e=>{mult=parseFloat(e.target.value);$('multv').textContent=nf(mult,1)+'×';$('valOut').innerHTML=valOut();});
}
$('secs').addEventListener('click',e=>{
  const b=e.target.closest('.term');if(!b)return;
  document.querySelectorAll('.term.on').forEach(x=>x.classList.remove('on'));
  b.classList.add('on');const t=T[b.dataset.t];
  $('def').innerHTML=`<b>${t[0]}.</b> ${t[1]}`;
});

/* ---------- chapters ---------- */
const C=[
{name:'Hver er þetta?',title:'Hver er þetta?',
 lead:'Allt byrjar á hausnum: hver félagið er, hvenær það varð til og hvað það gerir. Fjöður ehf. selur íslenskar hettupeysur og annan fatnað í eigin verslun og á netinu.',
 read:`<p>Kennitala fyrirtækis er ekki tilviljanakennd. Fyrstu sex stafirnir eru stofndagurinn á forminu DDMMÁÁ, nema hvað 40 er bætt við daginn. Þannig er hægt að sjá strax hvort kennitala tilheyrir einstaklingi eða félagi: dagur yfir 40 þýðir fyrirtæki.</p>
 <p>Níundi stafurinn er vartala. Hver af fyrstu átta tölunum er margfölduð með föstu vægi (3, 2, 7, 6, 5, 4, 3, 2), summan er deild með 11 og afgangurinn dreginn frá 11. Ef útkoman passar ekki er kennitalan röng. Svona grípur kerfið innsláttarvillur.</p>
 <div class="formula">5·3 + 4·2 + 0·7 + 3·6 + 1·5 + 9·4 + 1·3 + 3·2 = 91<br>91 mod 11 = 3, og 11 − 3 = 8<small>Vartala Fjaðrar er 8, og það passar við níunda stafinn í 540319-1380.</small></div>
 <p>ÍSAT-kóðinn segir hvað félagið gerir og forráðamaður hver er í forsvari. Smelltu á reitina á fyrirtækjasíðunni til að sjá skýringar.</p>`,
 q:{q:'Hvenær var Fjöður ehf. stofnað? Lestu það úr kennitölunni 540319-1380.',o:['54. mars 2019','14. mars 2019','5. apríl 2003','19. mars 2054'],a:1,
   no:'Mundu að 40 er bætt við daginn hjá fyrirtækjum.',ok:'54 − 40 = 14. Mánuður 03 og ár 19. Félagið var stofnað 14. mars 2019, sem passar við reitinn „Skráð“.'},
 run:`<p>Áður en þú stofnar félag þarftu að velja rekstrarform. Algengast er að velja á milli þess að reka starfsemina á eigin kennitölu eða stofna einkahlutafélag.</p>
 <p><b>Á eigin kennitölu</b> er einfaldast og ódýrast að byrja, en þú berð persónulega ábyrgð á öllum skuldum. Ef reksturinn fer illa getur það náð til íbúðarinnar þinnar. <b>Einkahlutafélag</b> kostar meiri pappírsvinnu og ársreikningurinn verður opinber, en ábyrgðin takmarkast við hlutaféð.</p>
 <p>Í ehf. eru tvö hlutverk. <b>Stjórnin</b> setur stefnuna og hefur eftirlit fyrir hönd eigenda. <b>Framkvæmdastjórinn</b> sér um daglegan rekstur. Í litlum félögum er þetta oft sama manneskjan, en það er gott að vita hvaða hatt maður er með hverju sinni.</p>`,
 sc:{q:'Þú og besti vinur þinn stofnið Fjöður saman. Hvernig skiptið þið eignarhlutnum?',o:[
   ['50/50 og ekkert meira','Sanngjarnt og einfalt. En ef þið verðið ósammála um eitthvað stórt getur hvorugt ráðið úrslitum og félagið festist. Ef annað ykkar hættir á það samt helminginn.'],
   ['51/49','Skýrt hver ræður á endanum. En sá sem á 49% getur upplifað sig sem undirmann frekar en meðstofnanda, og það getur skemmt samstarfið.'],
   ['50/50 með hluthafasamkomulagi','Mest vinna fyrirfram. Þið skrifið niður hvernig ágreiningur er leystur, hvað gerist ef annað hættir, og látið hlutina ávinnast yfir tíma. Flestir ráðgjafar mæla með þessari leið, einmitt af því að það er auðveldast að semja meðan allt gengur vel.']]}},
{name:'Græðir félagið?',title:'Græðir félagið?',
 lead:'Rekstrarreikningurinn er eins og kvikmynd af árinu. Hann byrjar á öllu sem kom inn og dregur frá, lið fyrir lið, þar til hagnaðurinn stendur eftir.',
 read:`<p>Efsta línan, rekstrartekjur, er það sem flestir horfa á. En velta segir ekkert um hvort félagið græðir. Fjöður velti 236 milljónum árið 2025, en hagnaðurinn var bara brot af því.</p>
 <div class="formula">Hagnaður = Tekjur − Kostnaður<small>Allur rekstrarreikningurinn er þessi jafna, brotin niður í skref.</small></div>
 <p>Hvert millistig svarar sinni spurningu. <b>Framlegð</b> segir hvort varan sjálf borgar sig. <b>EBITDA</b> segir hvort reksturinn í heild skilar peningum. <b>Hagnaður ársins</b> er það sem eftir er þegar búið er að greiða fyrir tæki, lán og skatt.</p>
 <p>Til að bera saman ár eða félög er hver lína skoðuð sem hlutfall af tekjum.</p>
 <div class="formula">Hagnaðarhlutfall = Hagnaður ÷ Tekjur</div>`,
 q:{q:'Hvert var hagnaðarhlutfall Fjaðrar árið 2025? Notaðu tölurnar á fyrirtækjasíðunni.',o:['58,9%','12,2%','6,7%','15,7%'],a:2,
   no:'Notaðu neðstu línuna, hagnað ársins, og deildu með tekjunum.',ok:'15.734 ÷ 236.412 ≈ 6,7%. Af hverjum 100 krónum í sölu urðu tæpar 7 krónur að hagnaði. Hinir valkostirnir eru framlegðarhlutfallið (58,9%) og EBITDA-hlutfallið (12,2%).'},
 run:`<p>Tvennt ræður hagnaðinum sem þú stjórnar beint: verðið og kostnaðurinn. Tökum eina hettupeysu. Hún kostar 4.000 kr. í framleiðslu og er seld á 12.990 kr. En af því verði er virðisaukaskattur, 24%, sem fer til ríkisins.</p>
 <div class="formula">Verð án VSK = 12.990 ÷ 1,24 ≈ 10.476 kr.<br>Framlegð á peysu = 10.476 − 4.000 = 6.476 kr.</div>
 <p>Kostnaður skiptist í <b>breytilegan</b>, sem hreyfist með sölu (efni, framleiðsla), og <b>fastan</b>, sem þarf að greiða hvort sem þú selur eða ekki (leiga, laun). Spurningin er: hve mikið þarftu að selja til að fastur kostnaður sé greiddur?</p>
 <div class="formula">Núllpunktur = Fastur kostnaður ÷ Framlegð á einingu<small>Ef fastur kostnaður er 9 m.kr. á mánuði: 9.000.000 ÷ 6.476 ≈ 1.390 peysur á mánuði áður en fyrsta krónan í hagnað kemur.</small></div>`,
 sc:{q:'Samkeppnisaðili lækkar verðið á sínum peysum um 20%. Hvað gerirðu?',o:[
   ['Lækka verðið líka um 20%','Verð án VSK fer í um 8.381 kr. og framlegðin í 4.381 kr. á peysu. Þú þarft þá að selja um 48% fleiri peysur bara til að standa í stað. Verðstríð vinnur sá sem hefur lægstan kostnað, ekki sá sem er hugrakkastur.'],
   ['Halda verðinu og byggja á vörumerkinu','Verndar framlegðina. Þú tapar sennilega verðnæmustu kaupendunum, en ef fólk kaupir Fjöður vegna hönnunar og gæða gæti tapið orðið minna en þú óttast.'],
   ['Bæta við ódýrari línu','Þú heldur aðalvörunni á sínu verði en mætir þeim sem leita að lægra verði. Á móti kemur meira flækjustig, fleiri vörur á lager og hætta á að ódýra línan éti söluna á dýrari línunni.']]}},
{name:'Hver á félagið?',title:'Hver á félagið?',
 lead:'Ef rekstrarreikningurinn er kvikmynd er efnahagsreikningurinn ljósmynd. Hann sýnir hvað félagið á og hvað það skuldar á einum degi.',
 read:`<div class="formula">Eignir = Skuldir + Eigið fé<small>Þessi jafna gengur alltaf upp. Fjöður: 88.250 = 50.350 + 37.900.</small></div>
 <p>Vinstri hliðin er <i>hvað er til</i>. Hægri hliðin er <i>hver á tilkall til þess</i>. Allt sem félagið á hefur annaðhvort verið greitt með lánsfé eða peningum eigendanna, þar með talið hagnaði sem var ekki greiddur út.</p>
 <p>Eignir skiptast í <b>fastafjármuni</b>, sem nýtast í mörg ár, og <b>veltufjármuni</b>, sem breytast í peninga innan árs. Skuldir skiptast eins í langtíma og skammtíma.</p>
 <div class="formula">Eiginfjárhlutfall = Eigið fé ÷ Eignir</div>
 <p>Þetta hlutfall segir hve stór hluti félagsins tilheyrir í raun eigendunum. Því hærra, því meira þolir félagið áföll áður en það kemst í vanda.</p>`,
 q:{q:'Hvert er eiginfjárhlutfall Fjaðrar í lok árs 2025?',o:['75,3%','57,1%','42,9%','2,08'],a:2,
   no:'Deildu eigin fé með eignum samtals, ekki með skuldum.',ok:'37.900 ÷ 88.250 ≈ 42,9%. Eigendurnir eiga tæp 43% af eignunum og lánveitendur afganginn. 75,3% fæst ef deilt er með skuldum, sem er algeng villa.'},
 run:`<p>Þegar félag þarf peninga til að vaxa eru þrjár leiðir: að safna úr rekstrinum, að taka lán eða að fá fjárfesta. Hver leið kostar sitt, en kostnaðurinn er misaugljós.</p>
 <p><b>Lán</b> hefur augljósan kostnað. 20 m.kr. á 10% vöxtum kostar 2 m.kr. á ári. En þú heldur öllu félaginu.</p>
 <p><b>Fjárfestir</b> virðist ókeypis því ekkert þarf að endurgreiða. En hann fær hlut í félaginu að eilífu.</p>
 <div class="formula">Fjárfestir greiðir 20 m.kr. fyrir 20% hlut<br>Virði eftir fjárfestingu = 20 ÷ 0,20 = 100 m.kr.<small>Ef félagið verður 300 m.kr. virði eftir fimm ár á hann 60 m.kr. Sá hlutur „kostaði“ þig 60 m.kr.</small></div>
 <p>Þegar ný hlutabréf eru gefin út minnkar hlutur þeirra sem fyrir eru. Það kallast þynning (dilution).</p>`,
 sc:{q:'Þú vilt opna aðra verslun á Akureyri og þarft 20 m.kr. Hvernig fjármagnarðu það?',o:[
   ['Bankalán','Þú heldur 100% af félaginu og vextirnir eru um 2 m.kr. á ári. En lánið þarf að greiða þótt nýja verslunin gangi illa, og eiginfjárhlutfallið lækkar.'],
   ['Fjárfestir fyrir 20% hlut','Engin endurgreiðsla og áhættunni er deilt. Góður fjárfestir getur líka fært reynslu og tengsl. En ef Fjöður verður verðmæt verður þessi hlutur dýrasta fjármögnunin sem þú fékkst.'],
   ['Bíða og safna úr rekstrinum','Engin ný áhætta og enginn missir hlut. En það tekur tíma, og samkeppnisaðili gæti orðið fyrri til. Að gera ekkert er líka ákvörðun með kostnaði.']]}},
{name:'Hvert fóru peningarnir?',title:'Hvert fóru peningarnir?',
 lead:'Hagnaður og peningar eru ekki það sama. Sjóðstreymið sýnir hvert raunverulegu krónurnar fóru, og það er hér sem mörg félög sem virðast ganga vel lenda í vanda.',
 read:`<p>Af hverju munar? Afskriftir eru kostnaður í bókhaldinu, en engir peningar fóru út á árinu. Vörur sem eru framleiddar en óseldar kosta peninga strax, en birtast ekki sem kostnaður fyrr en þær seljast. Sala á reikning telst sem tekjur þótt viðskiptavinurinn hafi ekki borgað.</p>
 <p>Sjóðstreymið skiptist í þrennt:</p>
 <div class="formula">Rekstur + Fjárfesting + Fjármögnun = Breyting á handbæru fé<small>Fjöður 2025: 6.764 − 9.850 − 100 = −3.186</small></div>
 <p>Fjárfestar horfa mikið á <b>frjálst sjóðstreymi</b>: peningana sem reksturinn skilar umfram það sem þarf að fjárfesta.</p>
 <div class="formula">Frjálst sjóðstreymi = Frá rekstri − Fjárfesting</div>`,
 q:{q:'Fjöður græddi 15,7 m.kr. árið 2025, en handbært fé lækkaði um 3,2 m.kr. Hvað skýrir þetta helst?',o:['Skatturinn tók hagnaðinn','Birgðir jukust um 12,3 m.kr.','Afskriftirnar voru of háar','Félagið tapaði í raun peningum'],a:1,
   no:'Skoðaðu leiðréttingarnar fyrir ofan „Handbært fé frá rekstri“. Hver er stærst?',ok:'Félagið lét framleiða mikið af peysum sem voru enn á lager í árslok. Þær kostuðu 12,3 m.kr. í peningum en birtast ekki sem kostnaður fyrr en þær seljast. Þetta er ekki endilega slæmt, en ef birgðir vaxa hraðar en salan ár eftir ár er það viðvörunarmerki.'},
 run:`<p>Að stýra sjóðstreymi snýst um tímasetningu: hvenær peningar koma inn og hvenær þeir fara út.</p>
 <p><b>Virðisaukaskattur.</b> Þegar þú selur peysu á 12.990 kr. eru um 2.514 kr. VSK sem þú innheimtir fyrir ríkið. Peningarnir liggja á reikningnum þínum í nokkrar vikur, en þú átt þá ekki. Margir nýir rekstraraðilar lenda í vanda af því þeir eyða VSK-inum.</p>
 <p><b>Greiðslufrestir.</b> Ef viðskiptavinir greiða 60 dögum eftir sölu en þú greiðir birgjum eftir 30 daga ertu í raun að lána viðskiptavinunum peninga.</p>
 <div class="formula">Runway = Handbært fé ÷ Mánaðarlegt tap<small>Hve marga mánuði þú lifir af áður en peningarnir klárast, ef ekkert breytist.</small></div>`,
 sc:{q:'Stór verslunarkeðja vill selja Fjöður í öllum sínum búðum. Fyrsta pöntun er 10 m.kr., en hún vill 90 daga greiðslufrest. Þú átt 6 m.kr. í banka.',o:[
   ['Samþykkja strax','Frábær sala og mikil auglýsing. En þú þarft að láta framleiða peysurnar núna, um 4 m.kr., og færð ekki greitt fyrr en eftir þrjá mánuði. Það skilur eftir 2 m.kr. til að greiða laun og leigu á meðan. Eitt óvænt áfall og þú ert í vanda.'],
   ['Semja um styttri frest eða innborgun','Til dæmis 30 daga, eða að keðjan greiði helminginn við pöntun. Margar keðjur segja nei, en það er alltaf þess virði að spyrja. Ef ekki, er hægt að skoða að fjármagna pöntunina sérstaklega hjá banka.'],
   ['Hafna','Engin áhætta, en þú missir stærsta tækifæri ársins. Stundum er rétta svarið að vaxa hægar. Stundum er það að finna leið til að segja já.']]}},
{name:'Myndirðu lána?',title:'Myndirðu lána?',
 lead:'Hráar tölur segja lítið einar og sér. Kennitölur eru hlutföll sem gera fyrirtæki af ólíkri stærð samanburðarhæf. Þetta eru tölurnar sem bankar og fjárfestar skoða fyrst.',
 read:`<p>Ekki rugla þessu saman við kennitölu félagsins. Á fyrirtækjasíðum merkir flipinn „Kennitölur“ fjárhagslegar lykiltölur.</p>
 <p>Kennitölur svara í grófum dráttum fjórum spurningum. <b>Vex félagið?</b> Tekjuvöxtur. <b>Er það arðbært?</b> Framlegðar-, EBITDA- og hagnaðarhlutfall. <b>Er það traust?</b> Eiginfjárhlutfall. <b>Getur það greitt reikningana sína?</b> Veltufjárhlutfall.</p>
 <div class="formula">Veltufjárhlutfall = Veltufjármunir ÷ Skammtímaskuldir</div>
 <p>Mikilvægast er að skoða þróunina. Ein kennitala á einu ári segir lítið. Fimm ár í röð segja sögu. Skoðaðu hvernig hagnaðarhlutfall Fjaðrar hefur breyst frá 2021.</p>`,
 q:{q:'Bankinn skoðar veltufjárhlutfall Fjaðrar. Veltufjármunir eru 58.010 og skammtímaskuldir 27.950. Hvað er hlutfallið og hvað þýðir það?',o:['0,48. Félagið getur ekki greitt reikningana sína','2,08. Skammtímaeignir duga tvisvar fyrir skammtímaskuldum','2,08. Félagið er of skuldsett','30.060. Félagið á 30 milljónir umfram skuldir'],a:1,
   no:'Deildu veltufjármunum með skammtímaskuldum og hugsaðu hvort hærri tala sé betri eða verri.',ok:'58.010 ÷ 27.950 ≈ 2,08. Það sem breytist í peninga innan árs dugar rúmlega tvisvar fyrir því sem þarf að greiða innan árs. Bankinn yrði sáttur. En athugaðu að stór hluti veltufjármunanna eru birgðir, sem þarf fyrst að selja.'},
 run:`<p>Ársreikningur er baksýnisspegill. Hann segir þér hvað gerðist fyrir mörgum mánuðum. Til að stýra félagi þarftu líka framrúðu: tölur sem þú skoðar vikulega og sýna hvert stefnir.</p>
 <p>Góð regla er að velja þrjár til fimm tölur og fylgjast með þeim reglulega. Fyrir Fjöður gætu það verið sala vikunnar, framlegðarhlutfall, handbært fé og birgðir í dögum.</p>
 <div class="formula">Birgðir í dögum = Birgðir ÷ Vörunotkun × 365<small>Fjöður: 34.110 ÷ 97.140 × 365 ≈ 128 dagar. Það tæki rúma fjóra mánuði að selja lagerinn.</small></div>
 <p>Markmið virka best þegar þau eru mælanleg og með tímamörk. „Auka sölu“ er ósk. „Selja 1.500 peysur á mánuði fyrir lok júní“ er markmið.</p>`,
 sc:{q:'Þú hefur tíma til að skoða eina tölu á hverjum mánudagsmorgni. Hverja velurðu?',o:[
   ['Handbært fé','Kemur í veg fyrir versta mögulega áfallið: að peningarnir klárist án þess að þú sjáir það koma. Margir reyndir rekstraraðilar segja að þetta sé talan sem skipti mestu.'],
   ['Sölu vikunnar','Sýnir stefnuna fyrst. Ef salan dettur niður sérðu það áður en það birtist annars staðar. En sala án framlegðar getur blekkt.'],
   ['Framlegðarhlutfall','Segir hvort vöxturinn sé arðbær. Félag sem selur meira og meira með minnkandi framlegð getur vaxið sig í þrot.']]}},
{name:'Hvað kostar starfsmaður?',title:'Hvað kostar starfsmaður?',
 lead:'Laun eru oftast stærsti kostnaðarliðurinn. Hjá Fjöður eru þau um 31% af tekjum. Að ráða, leiða og halda í gott fólk er því bæði stærðfræði og stjórnun.',
 read:`<p>Á fyrirtækjasíðum sést meðalfjöldi ársverka. Með honum er hægt að reikna tvær gagnlegar tölur.</p>
 <div class="formula">Laun á ársverk = Launakostnaður ÷ Ársverk<br>Tekjur á ársverk = Tekjur ÷ Ársverk</div>
 <p>Fjöður 2025: 72.315 ÷ 13 ≈ 5,6 m.kr. á ársverk, og 236.412 ÷ 13 ≈ 18,2 m.kr. í tekjur á ársverk. Tekjur á ársverk eru mælikvarði á framleiðni: hvort fólkið skilar meiru eftir því sem félagið stækkar.</p>
 <p>Launakostnaður er meira en útborguð laun. Ofan á heildarlaun greiðir launagreiðandi meðal annars tryggingagjald og mótframlag í lífeyrissjóð. Samanlagt er það gróflega fimmtungur til fjórðungur ofan á launin, en nákvæm hlutföll breytast og fara eftir kjarasamningum.</p>`,
 q:{q:'Þú ætlar að ráða starfsmann á 700.000 kr. heildarlaun á mánuði. Gerðu ráð fyrir að launatengd gjöld séu 22% ofan á. Hver er árlegur kostnaður?',o:['8,4 m.kr.','10,2 m.kr.','8,5 m.kr.','15,4 m.kr.'],a:1,
   no:'Margfaldaðu mánaðarlaunin með 1,22 og svo með 12.',ok:'700.000 × 1,22 × 12 = 10.248.000 kr. Og með 58,9% framlegð þarf Fjöður að selja um 17,4 m.kr. meira á ári (10,25 ÷ 0,589) bara til að starfsmaðurinn borgi sig. 8,4 m.kr. fæst ef launatengdu gjöldin gleymast.'},
 run:`<p><b>Að framselja.</b> Algengasta gildra stofnenda er að gera allt sjálf. Það virkar með þrjá starfsmenn en ekki þrettán. Spurðu: hvað er það sem aðeins ég get gert? Allt annað ætti einhvern tímann að fara á aðra.</p>
 <p><b>Að leiða.</b> Fólk þarf þrennt: að vita hvað er ætlast til af því, að fá heiðarlega endurgjöf og að finna traust til að taka ákvarðanir sjálft.</p>
 <p><b>Að taka ákvarðanir.</b> Gott er að greina á milli afturkræfra ákvarðana, sem hægt er að breyta ef þær reynast rangar (nýr litur á peysu), og óafturkræfra (tíu ára leigusamningur). Fyrri gerðina á að taka hratt. Þá seinni hægt.</p>`,
 sc:{q:'Besti starfsmaðurinn þinn biður um 30% launahækkun. Annað fyrirtæki hefur boðið henni starf. Þú átt þriggja mánaða sjóð.',o:[
   ['Samþykkja','Þú heldur lykilmanneskju og sýnir að þú metur hana. En kostnaðurinn er varanlegur, og aðrir starfsmenn gætu frétt af því og viljað það sama.'],
   ['Hafna','Sparar peninga til skamms tíma. En að finna og þjálfa arftaka tekur oft marga mánuði og kostar meira en hækkunin, fyrir utan þekkinguna sem fer með henni.'],
   ['Semja','Til dæmis minni hækkun núna og skýr markmið sem gefa meira eftir sex mánuði, eða hlutdeild í hagnaði. Tengir hennar hag við hag félagsins. Krefst þess að þú standir við það sem þú lofar.']]}},
{name:'Hvað myndirðu borga?',title:'Hvað myndirðu borga?',
 lead:'Hvað er fyrirtæki virði? Algengasta aðferðin í raunheimum er margfeldi: þú skoðar hvað sambærileg félög seldust á og yfirfærir hlutfallið.',
 read:`<div class="formula">Heildarvirði = EBITDA × Margfeldi<br>Virði hlutafjár = Heildarvirði − Nettóskuldir</div>
 <p><b>Heildarvirði</b> er virði rekstrarins í heild. En kaupandinn tekur líka yfir skuldirnar, svo þær eru dregnar frá. Handbært fé fylgir líka með, svo það er dregið frá skuldunum. Útkoman, <b>virði hlutafjár</b>, er það sem eigendurnir fá í raun.</p>
 <p>Margfeldið er í raun spá markaðarins um framtíðina, þjappað í eina tölu. Félag sem vex hratt og stöðugt fær hátt margfeldi. Lítið félag sem stendur og fellur með stofnandanum fær lágt. Prófaðu sleðann á fyrirtækjasíðunni.</p>
 <p>Verðmat er mat, ekki staðreynd. Tveir hæfir greinendur geta komist að ólíkri niðurstöðu um sama félagið.</p>`,
 q:{q:'EBITDA Fjaðrar er 28,8 m.kr. Sambærileg félög seljast á 5× EBITDA. Nettóskuldir eru 20 m.kr. Hvert er virði hlutafjár?',o:['144 m.kr.','124 m.kr.','164 m.kr.','49 m.kr.'],a:1,
   no:'Reiknaðu fyrst heildarvirði og mundu svo eftir skuldunum.',ok:'28,8 × 5 = 144 m.kr. í heildarvirði. Nettóskuldir eru 20 m.kr., svo virði hlutafjár er um 124 m.kr. Ef skuldunum er bætt við í stað þess að draga þær frá fæst 164.'},
 run:`<p>Ef markmiðið er að byggja verðmætt félag skiptir máli hvað hækkar margfeldið, ekki bara hagnaðurinn. Kaupendur greiða meira fyrir:</p>
 <p><b>Endurteknar tekjur</b>, sem eru fyrirsjáanlegar. Áskrift eða fastir viðskiptavinir eru meira virði en stakar sölur. <b>Dreifðan viðskiptavinahóp</b>, svo enginn einn getur fellt félagið. <b>Kerfi sem virka án stofnandans.</b> Ef allt veltur á þér ertu að selja starf, ekki fyrirtæki. <b>Hreint bókhald</b>, því óreiða vekur tortryggni og lækkar verðið.</p>
 <div class="formula">Samsettur árlegur vöxtur = (Lokagildi ÷ Upphafsgildi)<sup>1/n</sup> − 1<small>Ef 150 m.kr. verða 300 m.kr. á 5 árum: 2<sup>1/5</sup> − 1 ≈ 14,9% á ári.</small></div>`,
 sc:{q:'Fjárfestir býður 150 m.kr. í allt félagið. Þú telur að Fjöður gæti orðið 300 m.kr. virði eftir fimm ár.',o:[
   ['Selja','Þú færð 150 m.kr. núna og örugglega. Að hafna þýðir að þú veðjar á að ná um 14,9% árlegri ávöxtun á félaginu, með allri áhættunni sem fylgir. Það er ekkert rangt við að taka öruggan sigur.'],
   ['Hafna','Ef þú hefur rétt fyrir þér tvöfaldarðu verðmætið. En spár stofnenda eru yfirleitt bjartsýnar, og í fimm ár getur margt gerst. Spurðu: myndi ég kaupa félagið á 150 ef ég ætti það ekki?'],
   ['Selja hluta','Til dæmis 40% fyrir 60 m.kr. Þú tryggir hluta af verðmætinu, heldur áfram að stýra og nýtur vaxtar ef hann verður. Fjárfestirinn þarf þó að vilja minnihlutahlut.']]}}
];

/* ---------- state ---------- */
let state={cur:0,max:0,solved:[]};
try{const s=JSON.parse(localStorage.getItem('lesa-reka')||'null');if(s&&typeof s.max==='number')state=Object.assign(state,s)}catch(e){}
const save=()=>{try{localStorage.setItem('lesa-reka',JSON.stringify(state))}catch(e){}};

function renderSteps(){
  $('steps').innerHTML=C.map((c,i)=>`<button class="step ${i===state.cur?'cur':''} ${state.solved.includes(i)?'done':''}" type="button" data-i="${i}" ${i>state.max?'disabled':''} role="tab" aria-selected="${i===state.cur}"><span class="d">${state.solved.includes(i)?'✓':i+1}</span><span class="nm">${c.name}</span></button>`).join('')
   +(state.solved.length===C.length?`<button class="step ${state.cur===C.length?'cur':''}" type="button" data-i="${C.length}"><span class="d">★</span><span class="nm">Lokið</span></button>`:'');
}
$('steps').addEventListener('click',e=>{const b=e.target.closest('.step');if(b&&!b.disabled)go(+b.dataset.i)});

function renderLesson(){
  const L=$('lesson');
  if(state.cur>=C.length){
    L.innerHTML=`<div class="kicker">Námskeiði lokið</div><h1>Þú getur lesið fyrirtæki</h1>
    <p class="lead">Öll fyrirtækjasíðan er nú opin og þú þekkir hvern reit á henni. Næst þegar þú flettir upp félagi veistu hvað er verið að segja.</p>
    <ul class="done-list">${C.map((c,i)=>`<li><b>${i+1}</b><span>${c.name}</span></li>`).join('')}</ul>
    <div class="part"><h2>Næsta skref</h2><p class="sub">Rektu þitt eigið fyrirtæki</p>
    <p>Í leiknum stofnarðu eigið félag og rekur það í fimm ár. Allar ákvarðanirnar sem þú kynntist hér verða að stjórntækjum: verð, fjármögnun, greiðslufrestir og ráðningar. Í lokin fær félagið þitt sína eigin fyrirtækjasíðu. Leikurinn er í smíðum.</p></div>
    <div class="nav-row"><button class="btn" type="button" id="reset">Byrja upp á nýtt</button><button class="btn primary" type="button" id="back">Fara yfir kafla 1</button></div>`;
    $('reset').onclick=()=>{state={cur:0,max:0,solved:[]};save();go(0)};
    $('back').onclick=()=>go(0);
    return;
  }
  const c=C[state.cur],i=state.cur,solved=state.solved.includes(i);
  L.innerHTML=`<div class="kicker">Kafli ${i+1} af ${C.length}</div><h1>${c.title}</h1><p class="lead">${c.lead}</p>
  <div class="part"><h2>Að lesa</h2><p class="sub">Hvað stendur á síðunni og hvernig er það reiknað</p>
   <button class="jump" type="button" data-s="${SECS[i].id}">Sjá á fyrirtækjasíðunni</button>${c.read}</div>
  <div class="box"><div class="box-h"><span class="tag">Gáta</span><b>Leystu til að halda áfram</b></div><div class="box-b">
   <div class="qq">${c.q.q}</div><div class="opts" id="qOpts">${c.q.o.map((o,j)=>`<button class="opt ${solved&&j===c.q.a?'right':''}" type="button" data-j="${j}" ${solved?'disabled':''}>${o}</button>`).join('')}</div>
   <div class="fb ${solved?'show':''}" id="qFb">${solved?`<span class="ok">Rétt.</span> ${c.q.ok}`:''}</div></div></div>
  <div class="part"><h2>Að reka</h2><p class="sub">Hvernig þú hefur áhrif á tölurnar</p>${c.run}</div>
  <div class="box"><div class="box-h"><span class="tag sc">Aðstæður</span><b>Ekkert eitt rétt svar</b></div><div class="box-b">
   <div class="qq">${c.sc.q}</div><div class="opts" id="sOpts">${c.sc.o.map((o,j)=>`<div><button class="opt" type="button" data-j="${j}">${o[0]}</button><div class="cons" id="cons${j}">${o[1]}</div></div>`).join('')}</div>
   <div class="fb" id="sFb" style="color:var(--muted)">Skoðaðu líka hina valkostina. Hver leið hefur sína kosti og galla.</div></div></div>
  <div class="nav-row"><button class="btn" type="button" id="prev" ${i===0?'disabled':''}>Fyrri kafli</button>
   ${solved?'':`<span class="hint">Leystu gátuna til að opna næsta kafla</span>`}
   <button class="btn primary" type="button" id="next" ${solved?'':'disabled'}>${i===C.length-1?'Ljúka námskeiði':'Næsti kafli'}</button></div>`;

  $('qOpts').addEventListener('click',e=>{
    const b=e.target.closest('.opt');if(!b||b.disabled)return;
    const j=+b.dataset.j,fb=$('qFb');
    if(j===c.q.a){
      $('qOpts').querySelectorAll('.opt').forEach(x=>x.disabled=true);
      b.classList.add('right');fb.innerHTML=`<span class="ok">Rétt.</span> ${c.q.ok}`;fb.classList.add('show');
      if(!state.solved.includes(i))state.solved.push(i);
      state.max=Math.max(state.max,Math.min(i+1,C.length-1));save();
      $('next').disabled=false;const h=L.querySelector('.hint');if(h)h.remove();
      renderSteps();renderSecs();
    }else{
      b.classList.add('wrong');b.disabled=true;fb.innerHTML=`<span class="no">Ekki alveg.</span> ${c.q.no}`;fb.classList.add('show');
    }
  });
  $('sOpts').addEventListener('click',e=>{
    const b=e.target.closest('.opt');if(!b)return;
    $('sOpts').querySelectorAll('.opt').forEach(x=>x.classList.remove('pick'));
    b.classList.add('pick');$('cons'+b.dataset.j).classList.add('show');$('sFb').classList.add('show');
  });
  $('prev').onclick=()=>go(i-1);
  $('next').onclick=()=>go(i+1);
  L.querySelector('.jump').onclick=e=>{$(e.target.dataset.s).scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'})};
}

function go(i){
  state.cur=i;save();renderSteps();renderLesson();renderSecs();
  window.scrollTo(0,0);
  const p=$('page');
  if(i<C.length&&getComputedStyle(p).position==='sticky'){
    const s=$(SECS[i].id);p.scrollTo({top:Math.max(0,s.offsetTop-50),behavior:'smooth'});
  }
}

/* theme */
const root=document.documentElement,tb=$('themeBtn');
const isDark=()=>{const t=root.getAttribute('data-theme');return t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches};
const sync=()=>tb.textContent=isDark()?'Ljóst':'Dökkt';
try{const t=localStorage.getItem('lesa-theme');if(t)root.setAttribute('data-theme',t)}catch(e){}
sync();
tb.onclick=()=>{const n=isDark()?'light':'dark';root.setAttribute('data-theme',n);try{localStorage.setItem('lesa-theme',n)}catch(e){}sync()};

if(state.cur>C.length||state.cur>state.max&&state.cur<C.length)state.cur=0;
if(state.cur===C.length&&state.solved.length<C.length)state.cur=0;
go(state.cur);
})();
