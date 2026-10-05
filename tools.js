/* Monný – reiknivélar og gagnvirk verkfæri */
window.MONNY=window.MONNY||{courses:[]};
(function(){
const $=id=>document.getElementById(id);
const kr=v=>(v<0?'−':'')+Math.round(Math.abs(v)).toLocaleString('is-IS')+' kr.';
const nf=(v,d=0)=>(v<0?'−':'')+Math.abs(v).toLocaleString('is-IS',{minimumFractionDigits:d,maximumFractionDigits:d});
const pc=(v,d=1)=>isFinite(v)?nf(v*100,d)+'%':'–';
const val=id=>parseFloat(($(id)||{}).value)||0;

/* ---------- tax rules 2026 ---------- */
const TAX={t1:498122,t2:1398450,r1:.3149,r2:.3799,r3:.4629,pa:72492,pension:.04,employer:.115,kidRate:.06,kidFree:300000};
function payslip(gross,union){
  const pen=gross*TAX.pension, uni=gross*union, base=gross-pen;
  const raw=Math.min(base,TAX.t1)*TAX.r1+Math.max(0,Math.min(base,TAX.t2)-TAX.t1)*TAX.r2+Math.max(0,base-TAX.t2)*TAX.r3;
  const tax=Math.max(0,Math.round(raw)-TAX.pa);
  return {gross,pen,uni,base,raw:Math.round(raw),tax,net:gross-pen-uni-tax};
}
const COL={coral:'#FF5B49',sun:'#FFC233',lagoon:'#00A6A6',sky:'#4C7DFF',violet:'#8E5CFF',leaf:'#22B573'};

/* ---------- government data (ríkisreikningsgögn 2025, ma.kr.) ---------- */
const SPEND=[
 ['Heilbrigðismál',449.8],['Velferð og bætur',387.3],['Vextir, ábyrgðir og lífeyrisskuldbindingar',262.8],['Menntun og rannsóknir',159.7],
 ['Löggæsla og réttarkerfi',89.3],['Samgöngur og fjarskipti',59.6],['Atvinnuvegir og orka',58.8],['Stjórnsýsla og rekstur ríkisins',53.4],
 ['Umhverfismál',38.6],['Sveitarfélög og byggðamál',38.5],['Utanríkismál og þróunarsamvinna',36.3],['Menning, íþróttir og fjölmiðlar',30.4]];
const SPEND_T=SPEND.reduce((a,x)=>a+x[1],0);
const INC=[['Skattar á vörur og þjónustu',481.9],['Skattar á tekjur og hagnað',470.9],['Tryggingagjald',127.7],['Aðrir skattar',53.8]];

/* ---------- tools ---------- */
const TOOLS={
pay:{html:()=>`<div class="tool" style="--c:${COL.coral}"><div class="tool-h">Reiknaðu launaseðilinn þinn<span>Reglur ársins 2026</span></div>
  <div class="seg" role="group" aria-label="Aldur"><button type="button" data-age="adult" class="on">16 ára og eldri</button><button type="button" data-age="kid">Yngri en 16</button></div>
  <div class="ins" id="payIns"></div><div id="payOut"></div></div>`,
  bind(){let age='adult';
   const draw=()=>{
    if(age==='adult'){
     if(!$('p_g')){$('payIns').innerHTML=`<label>Heildarlaun á mánuði<input type="number" id="p_g" value="350000" step="10000" min="0"></label><label>Stéttarfélagsgjald (%)<input type="number" id="p_u" value="1" step="0.1" min="0"></label>`;['p_g','p_u'].forEach(i=>$(i).addEventListener('input',draw));}
     const r=payslip(val('p_g'),val('p_u')/100);
     $('payOut').innerHTML=`<div class="slip-rows">
      <div class="srow"><span>Heildarlaun</span><span class="v">${kr(r.gross)}</span></div>
      <div class="srow minus"><span>Lífeyrissjóður 4%</span><span class="v">${kr(-r.pen)}</span></div>
      <div class="srow"><span>Skattur af ${kr(r.base)}<small>áður en persónuafsláttur dregst frá</small></span><span class="v">${kr(r.raw)}</span></div>
      <div class="srow"><span>Persónuafsláttur</span><span class="v">${kr(-Math.min(TAX.pa,r.raw))}</span></div>
      <div class="srow minus"><span>Staðgreiðsla</span><span class="v">${kr(-r.tax)}</span></div>
      <div class="srow minus"><span>Stéttarfélagsgjald</span><span class="v">${kr(-r.uni)}</span></div></div>
      <div class="outs"><div class="out hl"><span>Útborgað</span><b>${kr(r.net)}</b></div><div class="out"><span>Raunverulegt skatthlutfall</span><b>${pc(r.gross?r.tax/r.gross:0)}</b></div><div class="out"><span>Mótframlag vinnuveitanda</span><b>${kr(r.gross*TAX.employer)}</b></div></div>
      <p class="note">Mótframlagið fer í lífeyrissjóðinn þinn ofan á launin og sést yfirleitt á launaseðlinum, en dregst ekki frá þínum launum.</p>`;
    }else{
     if(!$('k_y')){$('payIns').innerHTML=`<label>Heildartekjur á árinu<input type="number" id="k_y" value="420000" step="10000" min="0"></label>`;$('k_y').addEventListener('input',draw);}
     const y=val('k_y'),t=Math.max(0,y-TAX.kidFree)*TAX.kidRate;
     $('payOut').innerHTML=`<div class="slip-rows"><div class="srow"><span>Tekjur á árinu</span><span class="v">${kr(y)}</span></div>
      <div class="srow"><span>Frítekjumark</span><span class="v">${kr(-Math.min(y,TAX.kidFree))}</span></div>
      <div class="srow"><span>Skattskyldar tekjur</span><span class="v">${kr(Math.max(0,y-TAX.kidFree))}</span></div>
      <div class="srow minus"><span>Skattur 6%</span><span class="v">${kr(-t)}</span></div></div>
      <div class="outs"><div class="out hl"><span>Þú heldur eftir</span><b>${kr(y-t)}</b></div><div class="out"><span>Raunverulegt skatthlutfall</span><b>${pc(y?t/y:0)}</b></div></div>
      <p class="note">Lífeyrisiðgjald er greitt frá 16 ára aldri. Stéttarfélagsgjald getur samt verið dregið af.</p>`;
    }};
   $('payIns').closest('.tool').querySelectorAll('[data-age]').forEach(b=>b.onclick=()=>{age=b.dataset.age;$('payIns').innerHTML='';b.parentElement.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));draw();});
   draw();}},
budget:{html:()=>`<div class="tool sun" style="--c:${COL.sun}"><div class="tool-h">Settu upp fjárhagsáætlun<span>Á mánuði</span></div>
  <div class="ins"><label>Tekjur<input type="number" id="b_in" value="60000" step="1000"></label><label>Þarfir<input type="number" id="b_need" value="15000" step="1000"></label><label>Langanir<input type="number" id="b_want" value="25000" step="1000"></label><label>Sparnaður<input type="number" id="b_save" value="12000" step="1000"></label><label>Sparnaðarmarkmið<input type="number" id="b_goal" value="90000" step="5000"></label></div>
  <div id="bOut"></div></div>`,
  bind(){const ids=['b_in','b_need','b_want','b_save','b_goal'];const draw=()=>{
   const inc=val('b_in'),n=val('b_need'),w=val('b_want'),s=val('b_save'),g=val('b_goal'),left=inc-n-w-s,tot=Math.max(inc,n+w+s,1);
   $('bOut').innerHTML=`<div class="bar100" style="margin-top:4px" aria-hidden="true"><i style="width:${n/tot*100}%;background:${COL.sky}"></i><i style="width:${w/tot*100}%;background:${COL.coral}"></i><i style="width:${s/tot*100}%;background:${COL.lagoon}"></i><i style="width:${Math.max(left,0)/tot*100}%;background:var(--line)"></i></div>
   <div class="legend" style="padding-top:10px"><span><i style="background:${COL.sky}"></i>Þarfir ${pc(inc?n/inc:0,0)}</span><span><i style="background:${COL.coral}"></i>Langanir ${pc(inc?w/inc:0,0)}</span><span><i style="background:${COL.lagoon}"></i>Sparnaður ${pc(inc?s/inc:0,0)}</span><span><i style="background:var(--line)"></i>Óráðstafað</span></div>
   <div class="outs"><div class="out ${left<0?'':'hl'}"><span>${left<0?'Vantar':'Óráðstafað'}</span><b style="${left<0?'color:var(--bad)':''}">${kr(Math.abs(left))}</b></div><div class="out"><span>Sparnaður á ári</span><b>${kr(s*12)}</b></div><div class="out"><span>Mánuðir að markmiði</span><b>${s>0?nf(Math.ceil(g/s)):'–'}</b></div></div>
   ${left<0?'<p class="note" style="padding-top:12px">Útgjöldin eru hærri en tekjurnar. Lækkaðu langanir eða sparnað þar til dæmið gengur upp.</p>':''}`;};
   ids.forEach(i=>$(i).addEventListener('input',draw));draw();}},
save:{html:()=>`<div class="tool" style="--c:${COL.lagoon}"><div class="tool-h">Sjáðu peningana vaxa<span>Mánaðarlegur sparnaður</span></div>
  <div class="ins"><label>Upphafsupphæð<input type="number" id="s_p" value="50000" step="10000"></label><label>Lagt inn á mánuði<input type="number" id="s_m" value="10000" step="1000"></label><label>Ár<input type="number" id="s_y" value="10" min="1" max="50"></label><label>Ársvextir (%)<input type="number" id="s_r" value="6" step="0.5"></label><label>Verðbólga (%)<input type="number" id="s_i" value="3" step="0.5"></label></div>
  <div class="chart" id="sChart"></div><div class="legend"><span><i style="background:${COL.lagoon}"></i>Með vöxtum</span><span><i style="background:${COL.violet}"></i>Kaupmáttur í dag</span><span><i style="background:var(--muted)"></i>Það sem þú lagðir inn</span></div><div id="sOut"></div></div>`,
  bind(){const ids=['s_p','s_m','s_y','s_r','s_i'];const draw=()=>{
   const P=val('s_p'),M=val('s_m'),Y=Math.min(50,Math.max(1,Math.round(val('s_y')))),r=val('s_r')/100/12,inf=val('s_i')/100;
   let b=P,dep=P;const pts=[[0,P,P,P]];
   for(let m=1;m<=Y*12;m++){b=b*(1+r)+M;dep+=M;if(m%12===0){const y=m/12;pts.push([y,b,dep,b/Math.pow(1+inf,y)])}}
   const W=640,H=230,pl=10,pr=10,pt=14,pb=26,mx=Math.max(...pts.map(p=>p[1]),1);
   const x=y=>pl+(W-pl-pr)*y/Y,yy=v=>pt+(H-pt-pb)*(1-v/mx);
   const path=i=>pts.map((p,k)=>(k?'L':'M')+x(p[0]).toFixed(1)+' '+yy(p[i]).toFixed(1)).join(' ');
   let ticks='';for(let k=0;k<=Y;k+=Math.max(1,Math.round(Y/5)))ticks+=`<text x="${x(k)}" y="${H-6}" text-anchor="middle" font-size="12" fill="currentColor" opacity=".6">${k} ár</text>`;
   $('sChart').innerHTML=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Línurit af sparnaði yfir ${Y} ár"><line x1="${pl}" x2="${W-pr}" y1="${H-pb}" y2="${H-pb}" stroke="currentColor" opacity=".2"/>
    <path d="${path(2)}" fill="none" stroke="currentColor" stroke-opacity=".55" stroke-width="2.5" stroke-dasharray="5 5"/>
    <path d="${path(3)}" fill="none" stroke="${COL.violet}" stroke-width="3"/>
    <path d="${path(1)}" fill="none" stroke="${COL.lagoon}" stroke-width="4"/>${ticks}</svg>`;
   const last=pts[pts.length-1];
   $('sOut').innerHTML=`<div class="outs"><div class="out hl"><span>Eftir ${Y} ár</span><b>${kr(last[1])}</b></div><div class="out"><span>Þar af vextir</span><b>${kr(last[1]-last[2])}</b></div><div class="out"><span>Kaupmáttur í dag</span><b>${kr(last[3])}</b></div></div>`;};
   ids.forEach(i=>$(i).addEventListener('input',draw));draw();}},
credit:{html:()=>`<div class="tool" style="--c:${COL.sky}"><div class="tool-h">Hvað kostar að borga seinna?<span>Mánaðarlegar greiðslur</span></div>
  <div class="ins"><label>Verð vörunnar<input type="number" id="c_p" value="60000" step="1000"></label><label>Fjöldi greiðslna<input type="number" id="c_n" value="6" min="1" max="60"></label><label>Lántökugjald<input type="number" id="c_f" value="3900" step="100"></label><label>Gjald á hverja greiðslu<input type="number" id="c_g" value="495" step="5"></label><label>Ársvextir (%)<input type="number" id="c_r" value="0" step="0.5"></label></div><div id="cOut"></div></div>`,
  bind(){const ids=['c_p','c_n','c_f','c_g','c_r'];
   const draw=()=>{
    const P=val('c_p'),n=Math.max(1,Math.round(val('c_n'))),f=val('c_f'),g=val('c_g'),r=val('c_r')/100/12;
    const base=r>0?P*r/(1-Math.pow(1+r,-n)):P/n,pay=base+g,total=pay*n+f,extra=total-P,net=P-f;
    const pv=i=>{let s=0;for(let k=1;k<=n;k++)s+=pay/Math.pow(1+i,k);return s-net};
    let lo=0,hi=1,apr=NaN;
    if(net>0&&pv(0)>0){for(let k=0;k<100;k++){const m=(lo+hi)/2;pv(m)>0?lo=m:hi=m}apr=Math.pow(1+lo,12)-1}else if(extra<=0)apr=0;
    $('cOut').innerHTML=`<div class="outs"><div class="out"><span>Mánaðargreiðsla</span><b>${kr(pay)}</b></div><div class="out"><span>Samtals greitt</span><b>${kr(total)}</b></div><div class="out"><span>Aukalega</span><b>${kr(extra)}</b></div><div class="out hl"><span>ÁHK (nálgun)</span><b>${pc(apr,0)}</b></div></div>
    <p class="note" style="padding-top:12px">ÁHK er reiknuð með því að finna þá árlegu vexti sem gera allar greiðslurnar jafngildar því sem þú fékkst að láni. Raunveruleg ÁHK lánveitanda getur vikið aðeins frá vegna dagsetninga og annarra gjalda.</p>`;};
   ids.forEach(i=>$(i).addEventListener('input',draw));draw();}},
tax:{html:()=>`<div class="tool" style="--c:${COL.violet}"><div class="tool-h">Hvert fer skatturinn þinn?<span>Skipting útgjalda ríkisins 2025</span></div>
  <div class="ins"><label>Skatturinn þinn á ári<input type="number" id="t_a" value="100000" step="5000" min="0"></label></div>
  <div class="hbars" id="tBars"></div><p class="note">Hlutföllin byggja á útgjöldum eftir málefnasviðum í ríkisreikningsgögnum 2025, áður en millifærslur milli stofnana eru jafnaðar út. Þau gefa góða mynd af skiptingunni, en eru ekki opinbert uppgjör.</p></div>
  <div class="tool" style="--c:${COL.violet}"><div class="tool-h">Tekjur ríkisins<span>Skattar 2025, milljarðar króna</span></div><div class="hbars" id="iBars"></div></div>
  <div class="tool" style="--c:${COL.violet}"><div class="tool-h">Finndu VSK-inn í verðinu</div>
  <div class="seg" role="group" aria-label="VSK-þrep"><button type="button" class="on" data-v="24">24%</button><button type="button" data-v="11">11%</button></div>
  <div class="ins"><label>Verð með VSK<input type="number" id="v_p" value="1240" step="10" min="0"></label></div><div id="vOut"></div></div>`,
  bind(){let rate=24;
   const draw=()=>{const a=val('t_a'),mx=SPEND[0][1];
    $('tBars').innerHTML=SPEND.map(([n,v])=>`<div class="hb"><span>${n}</span><div class="track"><div class="fill" style="width:${v/mx*100}%"></div></div><span class="val">${a>0?kr(a*v/SPEND_T):pc(v/SPEND_T)}</span></div>`).join('');
    const im=INC[0][1];$('iBars').innerHTML=INC.map(([n,v])=>`<div class="hb"><span>${n}</span><div class="track"><div class="fill" style="width:${v/im*100}%"></div></div><span class="val">${nf(v,0)} ma.</span></div>`).join('');
    const p=val('v_p'),vsk=p*rate/(100+rate);
    $('vOut').innerHTML=`<div class="outs"><div class="out hl"><span>VSK</span><b>${kr(vsk)}</b></div><div class="out"><span>Verð án VSK</span><b>${kr(p-vsk)}</b></div><div class="out"><span>Hlutfall VSK af verði</span><b>${pc(rate/(100+rate))}</b></div></div>`;};
   ['t_a','v_p'].forEach(i=>$(i).addEventListener('input',draw));
   document.querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>{rate=+b.dataset.v;b.parentElement.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));draw();});
   draw();}},
biz:{html:()=>`<div class="tool" style="--c:${COL.leaf}"><div class="tool-h">Borgar þetta sig?<span>Lítill rekstur</span></div>
  <div class="ins"><label>Verð á einingu<input type="number" id="z_p" value="2500" step="100"></label><label>Kostnaður á einingu<input type="number" id="z_c" value="900" step="50"></label><label>Fjöldi seldra<input type="number" id="z_n" value="8" min="0"></label><label>Klukkustundir<input type="number" id="z_h" value="4" step="0.5" min="0"></label><label>Fastur kostnaður<input type="number" id="z_f" value="0" step="500" min="0"></label></div><div id="zOut"></div></div>`,
  bind(){const ids=['z_p','z_c','z_n','z_h','z_f'];const draw=()=>{
   const p=val('z_p'),c=val('z_c'),n=val('z_n'),h=val('z_h'),f=val('z_f'),m=p-c,pr=m*n-f;
   $('zOut').innerHTML=`<div class="outs"><div class="out"><span>Framlegð á einingu</span><b>${kr(m)}</b></div><div class="out"><span>Hagnaður</span><b style="${pr<0?'color:var(--bad)':''}">${kr(pr)}</b></div><div class="out hl"><span>Tímakaup</span><b>${h>0?kr(pr/h):'–'}</b></div><div class="out"><span>Núllpunktur</span><b>${m>0?nf(Math.ceil(f/m))+' stk.':'–'}</b></div></div>
   ${m<=0?'<p class="note" style="padding-top:12px">Kostnaðurinn er jafnhár eða hærri en verðið. Þú tapar á hverri sölu, sama hve mikið þú selur.</p>':''}`;};
   ids.forEach(i=>$(i).addEventListener('input',draw));draw();}}
};

/* ===== Grunnur (fullorðnir) ===== */
Object.assign(TOOLS,{
subs:{html:()=>`<div class="tool" style="--c:${COL.coral}"><div class="tool-h">Hvað kosta föstu greiðslurnar?<span>Á mánuði</span></div>
  <div class="ins"><label>Streymisveitur<input type="number" id="u1" value="7270" step="100"></label><label>Tónlist og hljóðbækur<input type="number" id="u2" value="2490" step="100"></label><label>Líkamsrækt<input type="number" id="u3" value="12900" step="100"></label><label>Öpp og skýjaþjónusta<input type="number" id="u4" value="1990" step="100"></label><label>Símar og net<input type="number" id="u5" value="11990" step="100"></label><label>Annað<input type="number" id="u6" value="0" step="100"></label><label>Ávöxtun ef þessu væri sparað (%)<input type="number" id="u7" value="5" step="0.5"></label></div><div id="uOut"></div></div>`,
  bind(){const ids=['u1','u2','u3','u4','u5','u6','u7'];const draw=()=>{
   const m=ids.slice(0,6).reduce((a,i)=>a+val(i),0),r=val('u7')/100/12,n=120;
   const fv=r>0?m*((Math.pow(1+r,n)-1)/r):m*n;
   $('uOut').innerHTML=`<div class="outs"><div class="out"><span>Á mánuði</span><b>${kr(m)}</b></div><div class="out hl"><span>Á ári</span><b>${kr(m*12)}</b></div><div class="out"><span>Á 10 árum</span><b>${kr(m*120)}</b></div><div class="out"><span>Sparað í 10 ár með ávöxtun</span><b>${kr(fv)}</b></div></div>`;};
   ids.forEach(i=>$(i).addEventListener('input',draw));draw();}},
emerg:{html:()=>`<div class="tool sun" style="--c:${COL.sun}"><div class="tool-h">Byggðu neyðarsjóð<span>Á mánuði</span></div>
  <div class="ins"><label>Nauðsynleg útgjöld<input type="number" id="e1" value="380000" step="10000"></label><label>Mánuðir í sjóði<input type="number" id="e2" value="4" min="1" max="12"></label><label>Átt í dag<input type="number" id="e3" value="320000" step="10000"></label><label>Getur sparað á mánuði<input type="number" id="e4" value="60000" step="5000"></label></div><div id="eOut"></div></div>`,
  bind(){const ids=['e1','e2','e3','e4'];const draw=()=>{
   const goal=val('e1')*val('e2'),miss=Math.max(0,goal-val('e3')),s=val('e4');
   $('eOut').innerHTML=`<div class="outs"><div class="out"><span>Markmið</span><b>${kr(goal)}</b></div><div class="out"><span>Vantar</span><b>${kr(miss)}</b></div><div class="out hl"><span>Mánuðir að markmiði</span><b>${miss===0?'Komið':s>0?nf(Math.ceil(miss/s)):'–'}</b></div></div>`;};
   ids.forEach(i=>$(i).addEventListener('input',draw));draw();}},
card:{html:()=>`<div class="tool" style="--c:${COL.sky}"><div class="tool-h">Hvað tekur langan tíma að greiða skuldina?<span>Kort eða yfirdráttur</span></div>
  <div class="ins"><label>Skuld<input type="number" id="k1" value="500000" step="10000"></label><label>Ársvextir (%)<input type="number" id="k2" value="16" step="0.5"></label><label>Greitt á mánuði<input type="number" id="k3" value="25000" step="1000"></label><label>Mánaðargjald<input type="number" id="k4" value="0" step="100"></label></div><div id="kOut"></div></div>`,
  bind(){const ids=['k1','k2','k3','k4'];const draw=()=>{
   let b=val('k1');const r=val('k2')/100/12,p=val('k3'),f=val('k4');let m=0,int=0;
   const first=b*r+f;
   if(p<=first&&b>0){$('kOut').innerHTML=`<div class="outs"><div class="out"><span>Vextir og gjöld fyrsta mánuðinn</span><b>${kr(first)}</b></div><div class="out hl"><span>Mánuðir</span><b style="color:var(--bad)">Aldrei</b></div></div><p class="note" style="padding-top:12px">Greiðslan dugar ekki einu sinni fyrir vöxtunum. Skuldin stendur í stað eða hækkar.</p>`;return}
   while(b>0.5&&m<600){const i=b*r+f;int+=i;b=b+i-p;m++}
   $('kOut').innerHTML=`<div class="outs"><div class="out"><span>Vextir fyrsta mánuðinn</span><b>${kr(val('k1')*r)}</b></div><div class="out hl"><span>Mánuðir að greiða</span><b>${nf(m)}</b></div><div class="out"><span>Vextir og gjöld samtals</span><b>${kr(int)}</b></div></div>`;};
   ids.forEach(i=>$(i).addEventListener('input',draw));draw();}},
loan:{html:()=>`<div class="tool" style="--c:${COL.lagoon}"><div class="tool-h">Lánareiknivél<span>Jafnar greiðslur, óverðtryggt</span></div>
  <div class="ins"><label>Lánsupphæð<input type="number" id="l1" value="40000000" step="500000"></label><label>Ársvextir (%)<input type="number" id="l2" value="9" step="0.1"></label><label>Lánstími (ár)<input type="number" id="l3" value="25" min="1" max="40"></label></div><div id="lOut"></div></div>`,
  bind(){const ids=['l1','l2','l3'];const pay=(L,r,n)=>r>0?L*r/(1-Math.pow(1+r,-n)):L/n;const draw=()=>{
   const L=val('l1'),r=val('l2')/100/12,y=Math.max(1,Math.round(val('l3'))),n=y*12,g=pay(L,r,n),alt=y===40?25:40,g2=pay(L,r,alt*12);
   $('lOut').innerHTML=`<div class="outs"><div class="out hl"><span>Mánaðargreiðsla</span><b>${kr(g)}</b></div><div class="out"><span>Vextir samtals</span><b>${kr(g*n-L)}</b></div><div class="out"><span>Fyrsta greiðsla: vextir</span><b>${kr(L*r)}</b></div></div>
   <p class="note" style="padding-top:12px">Til samanburðar: á ${alt} árum yrði greiðslan ${kr(g2)} á mánuði og vextir samtals ${kr(g2*alt*12-L)}.</p>`;};
   ids.forEach(i=>$(i).addEventListener('input',draw));draw();}},
debts:{html:()=>`<div class="tool" style="--c:${COL.violet}"><div class="tool-h">Snjóbolti eða snjóflóð?<span>Þrjár skuldir</span></div>
  <div class="ins">${[['A',150000,25,6000],['B',600000,12,15000],['C',50000,8,3000]].map(([n,b,r,m])=>`<label>Skuld ${n}: staða<input type="number" id="d${n}b" value="${b}" step="10000"></label><label>${n}: ársvextir (%)<input type="number" id="d${n}r" value="${r}" step="0.5"></label><label>${n}: lágmarksgreiðsla<input type="number" id="d${n}m" value="${m}" step="500"></label>`).join('')}<label>Aukalega á mánuði<input type="number" id="dX" value="20000" step="1000"></label></div><div id="dOut"></div></div>`,
  bind(){const ids=['A','B','C'].flatMap(n=>['d'+n+'b','d'+n+'r','d'+n+'m']).concat('dX');
   const sim=order=>{let ds=['A','B','C'].map(n=>({n,b:val('d'+n+'b'),r:val('d'+n+'r')/100/12,m:val('d'+n+'m')}));let int=0,mo=0;const x=val('dX');
    while(ds.some(d=>d.b>0.5)&&mo<600){mo++;let pool=x;
     ds.forEach(d=>{if(d.b>0){const i=d.b*d.r;int+=i;d.b+=i}});
     ds.forEach(d=>{if(d.b>0){const p=Math.min(d.m,d.b);d.b-=p}else pool+=d.m});
     order(ds.filter(d=>d.b>0.5)).forEach(d=>{const p=Math.min(pool,d.b);d.b-=p;pool-=p});}
    return {mo,int};};
   const draw=()=>{const a=sim(ds=>ds.sort((p,q)=>q.r-p.r)),s=sim(ds=>ds.sort((p,q)=>p.b-q.b));
    $('dOut').innerHTML=`<div class="outs"><div class="out hl"><span>Snjóflóð: hæstu vextir fyrst</span><b>${nf(a.mo)} mán.</b><span>Vextir ${kr(a.int)}</span></div><div class="out"><span>Snjóbolti: minnsta skuld fyrst</span><b>${nf(s.mo)} mán.</b><span>Vextir ${kr(s.int)}</span></div></div><p class="note" style="padding-top:12px">Munurinn: ${kr(Math.abs(s.int-a.int))} í vöxtum. Snjóboltinn kostar oft aðeins meira en gefur fyrr tilfinningu fyrir árangri.</p>`;};
   ids.forEach(i=>$(i).addEventListener('input',draw));draw();}},
pension:{html:()=>`<div class="tool" style="--c:${COL.leaf}"><div class="tool-h">Séreignarsparnaður<span>Raunávöxtun, á föstu verðlagi</span></div>
  <div class="seg" role="group" aria-label="Framlag"><button type="button" data-s="0">0%</button><button type="button" data-s="2">2%</button><button type="button" class="on" data-s="4">4%</button></div>
  <div class="ins"><label>Mánaðarlaun<input type="number" id="r1" value="600000" step="10000"></label><label>Ár til starfsloka<input type="number" id="r2" value="35" min="1" max="50"></label><label>Raunávöxtun (%)<input type="number" id="r3" value="3.5" step="0.5"></label></div><div id="rOut"></div></div>`,
  bind(){let s=4;const draw=()=>{const w=val('r1'),y=Math.round(val('r2')),r=val('r3')/100/12,emp=s>=2?2:0,m=w*(s+emp)/100,n=y*12;
   const fv=r>0?m*((Math.pow(1+r,n)-1)/r):m*n;
   $('rOut').innerHTML=`<div class="outs"><div class="out"><span>Á mánuði (þú + vinnuveitandi)</span><b>${kr(m)}</b></div><div class="out"><span>Á ári</span><b>${kr(m*12)}</b></div><div class="out hl"><span>Eftir ${y} ár</span><b>${kr(fv)}</b></div><div class="out"><span>Þar af mótframlag</span><b>${kr(w*emp/100*n)}</b></div></div>
   ${s===0?'<p class="note" style="padding-top:12px">Án eigin framlags færðu yfirleitt ekki mótframlag vinnuveitanda heldur.</p>':''}`;};
   ['r1','r2','r3'].forEach(i=>$(i).addEventListener('input',draw));
   document.querySelectorAll('[data-s]').forEach(b=>b.onclick=()=>{s=+b.dataset.s;b.parentElement.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));draw();});draw();}}
});

/* ===== Fagstig framhald ===== */
const mk=v=>(v<0?'−':'')+nf(Math.abs(v),1)+' m';
Object.assign(TOOLS,{
dupont:{html:()=>`<div class="tool" style="--c:${COL.sky}"><div class="tool-h">DuPont-greining<span>Dæmi: Fjöður ehf. 2025, m.kr.</span></div>
  <div class="ins"><label>Hagnaður<input type="number" id="p1" value="15.73" step="0.1"></label><label>Tekjur<input type="number" id="p2" value="236.41" step="1"></label><label>Eignir<input type="number" id="p3" value="88.25" step="1"></label><label>Eigið fé<input type="number" id="p4" value="37.9" step="1"></label></div><div id="pOut"></div></div>`,
  bind(){const ids=['p1','p2','p3','p4'];const draw=()=>{const ni=val('p1'),r=val('p2'),a=val('p3'),e=val('p4');const m=ni/r,t=r/a,l=a/e;
   $('pOut').innerHTML=`<div class="outs"><div class="out"><span>Hagnaðarhlutfall</span><b>${pc(m)}</b></div><div class="out"><span>× Eignavelta</span><b>${nf(t,2)}×</b></div><div class="out"><span>× Skuldsetningarmargfaldari</span><b>${nf(l,2)}×</b></div><div class="out hl"><span>= Arðsemi eigin fjár</span><b>${pc(m*t*l)}</b></div></div>`;};
   ids.forEach(i=>$(i).addEventListener('input',draw));draw();}},
ccc:{html:()=>`<div class="tool" style="--c:${COL.lagoon}"><div class="tool-h">Veltufjárhringrás<span>Dæmi: Fjöður ehf. 2025, þús. kr.</span></div>
  <div class="ins"><label>Tekjur<input type="number" id="w1" value="236412"></label><label>Vörunotkun<input type="number" id="w2" value="97140"></label><label>Viðskiptakröfur<input type="number" id="w3" value="17880"></label><label>Birgðir<input type="number" id="w4" value="34110"></label><label>Viðskiptaskuldir<input type="number" id="w5" value="12000"></label></div><div id="wOut"></div></div>`,
  bind(){const ids=['w1','w2','w3','w4','w5'];const draw=()=>{const r=val('w1'),c=val('w2'),dso=val('w3')/r*365,dio=val('w4')/c*365,dpo=val('w5')/c*365;
   $('wOut').innerHTML=`<div class="outs"><div class="out"><span>Útistandandi (DSO)</span><b>${nf(dso,0)} d.</b></div><div class="out"><span>Á lager (DIO)</span><b>${nf(dio,0)} d.</b></div><div class="out"><span>Greiðslufrestur (DPO)</span><b>${nf(dpo,0)} d.</b></div><div class="out hl"><span>Hringrás (CCC)</span><b>${nf(dso+dio-dpo,0)} d.</b></div></div>
   <p class="note" style="padding-top:12px">Fé bundið í rekstri: ${kr((val('w3')+val('w4')-val('w5'))*1000)}. Hver dagur sem hringrásin styttist losar um ${kr(c*1000/365)} miðað við vörunotkun.</p>`;};
   ids.forEach(i=>$(i).addEventListener('input',draw));draw();}},
dcf:{html:()=>`<div class="tool" style="--c:${COL.violet}"><div class="tool-h">Sjóðstreymisverðmat (DCF)<span>m.kr.</span></div>
  <div class="ins"><label>Frjálst sjóðstreymi, ár 1<input type="number" id="f1" value="12" step="0.5"></label><label>Vöxtur ár 2–5 (%)<input type="number" id="f2" value="12" step="0.5"></label><label>Ávöxtunarkrafa (%)<input type="number" id="f3" value="12" step="0.5"></label><label>Langtímavöxtur g (%)<input type="number" id="f4" value="2.5" step="0.5"></label><label>Nettóskuldir<input type="number" id="f5" value="20" step="1"></label></div><div id="fOut"></div></div>`,
  bind(){const ids=['f1','f2','f3','f4','f5'];const draw=()=>{const f=val('f1'),g=val('f2')/100,r=val('f3')/100,gl=val('f4')/100,nd=val('f5');
   if(r<=gl){$('fOut').innerHTML='<p class="note" style="padding-top:12px">Ávöxtunarkrafan verður að vera hærri en langtímavöxturinn, annars verður lokavirðið óendanlegt.</p>';return}
   let pv=0,cf=f;for(let t=1;t<=5;t++){if(t>1)cf*=1+g;pv+=cf/Math.pow(1+r,t)}
   const tv=cf*(1+gl)/(r-gl),ptv=tv/Math.pow(1+r,5),ev=pv+ptv;
   $('fOut').innerHTML=`<div class="outs"><div class="out"><span>Núvirði ára 1–5</span><b>${mk(pv)}</b></div><div class="out"><span>Núvirði lokavirðis</span><b>${mk(ptv)}</b></div><div class="out"><span>Heildarvirði (EV)</span><b>${mk(ev)}</b></div><div class="out hl"><span>Virði hlutafjár</span><b>${mk(ev-nd)}</b></div></div>
   <p class="note" style="padding-top:12px">${pc(ptv/ev,0)} af heildarvirðinu kemur úr lokavirðinu, þ.e. árum sem enginn getur spáð nákvæmlega fyrir um.</p>`;};
   ids.forEach(i=>$(i).addEventListener('input',draw));draw();}},
wacc:{html:()=>`<div class="tool" style="--c:${COL.coral}"><div class="tool-h">Vegin fjármagnskostnaður (WACC)<span>CAPM</span></div>
  <div class="ins"><label>Áhættulausir vextir (%)<input type="number" id="c1" value="6" step="0.1"></label><label>Beta<input type="number" id="c2" value="1.2" step="0.1"></label><label>Markaðsálag (%)<input type="number" id="c3" value="6" step="0.5"></label><label>Smáfélagsálag (%)<input type="number" id="c4" value="2" step="0.5"></label><label>Vextir á skuldum (%)<input type="number" id="c5" value="9" step="0.1"></label><label>Skatthlutfall (%)<input type="number" id="c6" value="20" step="1"></label><label>Eigið fé (markaðsvirði)<input type="number" id="c7" value="60"></label><label>Skuldir<input type="number" id="c8" value="40"></label></div><div id="cOut"></div></div>`,
  bind(){const ids=['c1','c2','c3','c4','c5','c6','c7','c8'];const draw=()=>{const re=(val('c1')+val('c2')*val('c3')+val('c4'))/100,rd=val('c5')/100*(1-val('c6')/100),E=val('c7'),D=val('c8'),V=E+D||1;
   $('cOut').innerHTML=`<div class="outs"><div class="out"><span>Krafa á eigið fé</span><b>${pc(re)}</b></div><div class="out"><span>Vextir eftir skatt</span><b>${pc(rd)}</b></div><div class="out"><span>Hlutfall eigin fjár</span><b>${pc(E/V,0)}</b></div><div class="out hl"><span>WACC</span><b>${pc(E/V*re+D/V*rd,2)}</b></div></div>`;};
   ids.forEach(i=>$(i).addEventListener('input',draw));draw();}},
cap:{html:()=>`<div class="tool sun" style="--c:${COL.sun}"><div class="tool-h">Hluthafaskrá og forgangur<span>m.kr.</span></div>
  <div class="ins"><label>Virði fyrir fjárfestingu (pre-money)<input type="number" id="h1" value="400" step="10"></label><label>Fjárfesting<input type="number" id="h2" value="100" step="5"></label><label>Valréttarpottur (% eftir)<input type="number" id="h3" value="10" step="1"></label><label>Forgangur (×)<input type="number" id="h4" value="1" step="0.5" min="0"></label><label>Söluverð félagsins<input type="number" id="h5" value="300" step="10"></label></div><div id="hOut"></div></div>`,
  bind(){const ids=['h1','h2','h3','h4','h5'];const draw=()=>{const P=val('h1'),I=val('h2'),pool=val('h3')/100,x=val('h4'),exit=val('h5');const post=P+I,inv=I/post,fnd=Math.max(0,1-inv-pool);
   const pref=Math.min(exit,I*x),conv=inv*exit,invGets=Math.max(pref,conv),rest=exit-invGets,fGets=rest*fnd/(fnd+pool||1);
   $('hOut').innerHTML=`<div class="outs"><div class="out"><span>Virði eftir (post-money)</span><b>${nf(post,0)} m</b></div><div class="out"><span>Hlutur fjárfestis</span><b>${pc(inv)}</b></div><div class="out"><span>Hlutur stofnenda</span><b>${pc(fnd)}</b></div></div>
   <div class="outs"><div class="out hl"><span>Fjárfestir fær við sölu</span><b>${mk(invGets)}</b></div><div class="out"><span>Stofnendur fá</span><b>${mk(fGets)}</b></div><div class="out"><span>Fjárfestir velur</span><b style="font-size:20px">${pref>=conv?'Forganginn':'Að breyta í hluti'}</b></div></div>
   <p class="note" style="padding-top:12px">Forgangurinn er án þátttöku (non-participating): fjárfestirinn fær annaðhvort forgangsupphæðina eða sinn hlutfallslega hlut, hvort sem er hærra.</p>`;};
   ids.forEach(i=>$(i).addEventListener('input',draw));draw();}},
adj:{html:()=>`<div class="tool" style="--c:${COL.leaf}"><div class="tool-h">Leiðrétt EBITDA<span>m.kr.</span></div>
  <div class="ins"><label>Uppgefin EBITDA<input type="number" id="a1" value="50" step="1"></label><label>Einskiptiskostnaður (+)<input type="number" id="a2" value="6" step="0.5"></label><label>Laun eiganda<input type="number" id="a3" value="6" step="0.5"></label><label>Markaðslaun fyrir starfið<input type="number" id="a4" value="18" step="0.5"></label><label>Leiga undir markaðsverði (−)<input type="number" id="a5" value="0" step="0.5"></label><label>Margfeldi<input type="number" id="a6" value="6" step="0.5"></label></div><div id="aOut"></div></div>`,
  bind(){const ids=['a1','a2','a3','a4','a5','a6'];const draw=()=>{const e=val('a1'),adj=e+val('a2')-(val('a4')-val('a3'))-val('a5'),m=val('a6');
   $('aOut').innerHTML=`<div class="outs"><div class="out"><span>Leiðrétt EBITDA</span><b>${mk(adj)}</b></div><div class="out"><span>Virði á uppgefinni</span><b>${mk(e*m)}</b></div><div class="out hl"><span>Virði á leiðréttri</span><b>${mk(adj*m)}</b></div><div class="out"><span>Munur</span><b>${mk(adj*m-e*m)}</b></div></div>`;};
   ids.forEach(i=>$(i).addEventListener('input',draw));draw();}}
});

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

TOOLS.fjodur={
 html:o=>{const k=o.sec;return `<div class="tool co" style="--c:${COL[o.c]||COL.lagoon}"><div class="tool-h">Fjöður ehf.<span>Tilbúið félag til æfinga</span></div><div class="defbar" aria-live="polite">Smelltu á undirstrikað heiti til að sjá hvað það þýðir.</div>${SECS.slice(0,k+1).map((s,i)=>i===k?`<section class="sec">${s.title?`<h3>${s.title}</h3>`:''}${s.html()}</section>`:`<details class="sec"><summary>${s.title||'Haus fyrirtækisins'}</summary>${s.html()}</details>`).reverse().join('')}</div>`},
 bind:()=>{const box=document.querySelector('.tool.co');
  box.addEventListener('click',e=>{const b=e.target.closest('.term');if(!b)return;box.querySelectorAll('.term.on').forEach(x=>x.classList.remove('on'));b.classList.add('on');const t=T[b.dataset.t];box.querySelector('.defbar').innerHTML=`<b>${t[0]}.</b> ${t[1]}`});
  const m=document.getElementById('mult');if(m)m.addEventListener('input',e=>{mult=parseFloat(e.target.value);document.getElementById('multv').textContent=nf(mult,1)+'×';document.getElementById('valOut').innerHTML=valOut();});}
};
})();

/* ===== Ný verkfæri ===== */
const simple=(id,col,title,sub,fields,calc)=>({html:()=>`<div class="tool ${col==='sun'?'sun':''}" style="--c:${COL[col]}"><div class="tool-h">${title}<span>${sub}</span></div><div class="ins">${fields.map(([k,l,v,st])=>`<label>${l}<input type="number" id="${id}_${k}" value="${v}" step="${st||'any'}"></label>`).join('')}</div><div id="${id}_out"></div></div>`,
 bind(){const g=k=>val(id+'_'+k);const draw=()=>{const r=calc(g);$(id+'_out').innerHTML=`<div class="outs">${r.o.map(([l,v,h])=>`<div class="out ${h?'hl':''}"><span>${l}</span><b>${v}</b></div>`).join('')}</div>${r.n?`<p class="note" style="padding-top:12px">${r.n}</p>`:''}`};fields.forEach(([k])=>$(id+'_'+k).addEventListener('input',draw));draw();}});
Object.assign(TOOLS,{
unit:simple('un','sun','Hvort er ódýrara í raun?','Einingaverð',[['p1','Verð A (kr.)',459],['g1','Magn A (g)',500],['p2','Verð B (kr.)',789],['g2','Magn B (g)',1000]],g=>{const a=g('p1')/g('g1')*1000,b=g('p2')/g('g2')*1000;return{o:[['A: kr. á kg',kr(a),a<=b],['B: kr. á kg',kr(b),b<a],['Munur á kg',kr(Math.abs(a-b))]],n:`${a<=b?'A':'B'} er ódýrara miðað við magn, um ${pc(Math.abs(a-b)/Math.max(a,b),0)}.`}}),
fx:simple('fx','lagoon','Hvað kostar þetta í krónum?','Gengi og kortaálag',[['p','Verð í evrum',45,'0.5'],['r','Gengi (kr. á evru)',145,'0.5'],['f','Álag kortafyrirtækis (%)',2,'0.1'],['d','Álag ef greitt er í krónum úti (%)',5,'0.5']],g=>{const b=g('p')*g('r'),c=b*(1+g('f')/100),d=b*(1+g('d')/100);return{o:[['Án álags',kr(b)],['Greitt í evrum',kr(c),true],['Valið að greiða í krónum',kr(d)]],n:`Ef posinn býður þér að greiða í krónum kostar það oft meira. Hér munar ${kr(d-c)}.`}}),
deduct:simple('dd','coral','Há eða lág sjálfsábyrgð?','Væntur árlegur kostnaður',[['a','Iðgjald A á ári',96000,'1000'],['sa','Sjálfsábyrgð A',25000,'1000'],['b','Iðgjald B á ári',78000,'1000'],['sb','Sjálfsábyrgð B',75000,'1000'],['n','Tjón á ári að meðaltali',0.3,'0.1']],g=>{const A=g('a')+g('n')*g('sa'),B=g('b')+g('n')*g('sb');return{o:[['Væntur kostnaður A',kr(A),A<=B],['Væntur kostnaður B',kr(B),B<A],['Munur',kr(Math.abs(A-B))]],n:`Jafnvægi næst við ${nf((g('a')-g('b'))/Math.max(1,g('sb')-g('sa')),2)} tjón á ári. Færri tjón en það gera hærri sjálfsábyrgðina hagstæðari, ef þú átt fyrir henni.`}}),
fees:simple('fe','violet','Hvað kostar kostnaðurinn?','Áhrif árlegs kostnaðar',[['p','Upphæð',1000000,'50000'],['m','Lagt inn á mánuði',20000,'1000'],['y','Ár',30,'1'],['r','Ávöxtun fyrir kostnað (%)',6,'0.5'],['f','Árlegur kostnaður (%)',1.5,'0.1']],g=>{const run=fee=>{let b=g('p');const rm=(g('r')-fee)/100/12;for(let i=0;i<g('y')*12;i++)b=b*(1+rm)+g('m');return b};const a=run(0),b=run(g('f'));return{o:[['Án kostnaðar',kr(a)],['Með kostnaði',kr(b),true],['Kostnaðurinn tók',kr(a-b)]],n:`${pc((a-b)/a,0)} af lokaupphæðinni hverfur í kostnað, þó hann virðist lítill á hverju ári.`}}),
vat:simple('va','sky','VSK-uppgjör tímabilsins','Tveir mánuðir',[['s','Sala með 24% VSK',3100000,'10000'],['s2','Sala með 11% VSK',0,'10000'],['k','Innkaup með 24% VSK',1240000,'10000'],['k2','Innkaup með 11% VSK',0,'10000']],g=>{const ut=g('s')*24/124+g('s2')*11/111,inn=g('k')*24/124+g('k2')*11/111;return{o:[['Útskattur',kr(ut)],['Innskattur',kr(inn)],[ut>=inn?'Til greiðslu':'Til endurgreiðslu',kr(Math.abs(ut-inn)),true]],n:'Upphæðirnar eru með VSK. Skatturinn er reiknaður út úr verðinu, ekki ofan á það.'}}),
ltv:simple('lt','leaf','Borgar viðskiptavinurinn sig?','Áskriftarrekstur',[['a','Tekjur á viðskiptavin á mánuði',4990,'10'],['m','Framlegð (%)',70,'1'],['c','Brottfall á mánuði (%)',4,'0.5'],['cac','Kostnaður við nýjan viðskiptavin',30000,'1000']],g=>{const gm=g('a')*g('m')/100,l=gm/(g('c')/100);return{o:[['Ævivirði (LTV)',kr(l),true],['LTV ÷ CAC',nf(l/g('cac'),1)+'×'],['Mánuðir að borga CAC',nf(g('cac')/gm,1)]],n:'Algengt viðmið er að LTV sé minnst þrefalt hærra en CAC og að CAC borgi sig á innan við ári.'}}),
comps:simple('cp','coral','Verðmat út frá sambærilegum','m.kr.',[['e','EBITDA félagsins',28.8,'0.1'],['a','EV/EBITDA félag 1',6.5,'0.1'],['b','EV/EBITDA félag 2',8.0,'0.1'],['c','EV/EBITDA félag 3',5.2,'0.1'],['d','Afsláttur vegna stærðar (%)',20,'1'],['nd','Nettóskuldir',20,'1']],g=>{const ms=[g('a'),g('b'),g('c')].sort((x,y)=>x-y),med=ms[1],m=med*(1-g('d')/100),ev=g('e')*m;return{o:[['Miðgildi margfeldis',nf(med,1)+'×'],['Eftir afslátt',nf(m,1)+'×'],['Heildarvirði',nf(ev,1)+' m'],['Virði hlutafjár',nf(ev-g('nd'),1)+' m',true]],n:'Miðgildið er notað frekar en meðaltal svo eitt óvenjulegt félag skekki ekki niðurstöðuna.'}}),
fxrisk:simple('fr','lagoon','Hvað gerir gengið hagnaðinum?','m.kr.',[['r','Tekjur í evrum (umreiknað)',200,'5'],['ri','Tekjur í krónum',50,'5'],['c','Kostnaður í evrum (umreiknað)',40,'5'],['ci','Kostnaður í krónum',180,'5'],['x','Styrking krónunnar (%)',10,'1']],g=>{const k=1-g('x')/100,p0=g('r')+g('ri')-g('c')-g('ci'),p1=g('r')*k+g('ri')-g('c')*k-g('ci');return{o:[['Hagnaður í dag',nf(p0,1)+' m'],['Eftir gengisbreytingu',nf(p1,1)+' m',true],['Breyting',pc(p0?p1/p0-1:0,0)]],n:'Því meira ójafnvægi sem er milli tekna og kostnaðar í sömu mynt, því meiri áhrif hefur gengið.'}})
});
TOOLS.sens={html:()=>`<div class="tool" style="--c:${COL.violet}"><div class="tool-h">Næmnigreining<span>Virði hlutafjár, m.kr.</span></div><div class="ins"><label>Frjálst sjóðstreymi, ár 1<input type="number" id="se_f" value="12" step="0.5"></label><label>Vöxtur ár 2–5 (%)<input type="number" id="se_g" value="12" step="0.5"></label><label>Nettóskuldir<input type="number" id="se_n" value="20"></label></div><div class="scroll" style="overflow-x:auto;padding:0 20px 18px" id="se_out"></div></div>`,
 bind(){const draw=()=>{const f=val('se_f'),g=val('se_g')/100,nd=val('se_n'),rs=[10,11,12,13,14],gs=[1.5,2,2.5,3,3.5];
  const v=(r,gl)=>{let pv=0,cf=f;for(let t=1;t<=5;t++){if(t>1)cf*=1+g;pv+=cf/Math.pow(1+r,t)}return pv+cf*(1+gl)/(r-gl)/Math.pow(1+r,5)-nd};
  $('se_out').innerHTML=`<table style="width:100%;border-collapse:collapse;font-size:14.5px;text-align:right"><tr><th style="text-align:left;padding:6px;color:var(--muted);font-size:13px">Krafa ↓ / g →</th>${gs.map(x=>`<th style="padding:6px;color:var(--muted);font-size:13px">${nf(x,1)}%</th>`).join('')}</tr>${rs.map(r=>`<tr><td style="text-align:left;padding:6px;font-weight:600">${r}%</td>${gs.map(x=>{const c=r===12&&x===2.5;return `<td style="padding:6px;${c?'background:color-mix(in srgb,var(--c) 18%,transparent);font-weight:700;border-radius:6px':''}">${nf(v(r/100,x/100),0)}</td>`}).join('')}</tr>`).join('')}</table>`};
  ['se_f','se_g','se_n'].forEach(i=>$(i).addEventListener('input',draw));draw();}};

/* ===== Æfingaframleiðendur: nýjar tölur í hvert skipti ===== */
const R=(a,b,s=1)=>a+s*Math.floor(Math.random()*((b-a)/s+1));
const GENS={
 pay16:()=>{const g=R(300,480,5)*1000,r=payslip(g,0);return{q:`Þú ert 17 ára með ${kr(g)} í heildarlaun á mánuði. Hver eru útborguð laun, án stéttarfélagsgjalds?`,a:r.net,tol:2,e:`Lífeyrir ${kr(r.pen)}. Skattur ${kr(r.raw)} − ${kr(TAX.pa)} = ${kr(r.tax)}. Útborgað ${kr(r.net)}.`}},
 kidtax:()=>{const y=R(32,70)*10000;return{q:`Þú ert 14 ára og vinnur þér inn ${kr(y)} á árinu. Hve mikinn skatt greiðirðu?`,a:Math.max(0,y-300000)*.06,tol:1,e:`6% × (${kr(y)} − 300.000 kr.) = ${kr(Math.max(0,y-300000)*.06)}.`}},
 yearSave:()=>{const i=R(4,12)*10000,p=[10,15,20,25][R(0,3)];return{q:`Þú færð ${kr(i)} á mánuði og leggur ${p}% til hliðar. Hve mikið sparar þú á ári?`,a:i*p/100*12,tol:1,e:`${kr(i)} × ${p}% × 12 = ${kr(i*p/100*12)}.`}},
 goal:()=>{const g=R(6,30)*5000,s=R(5,15)*1000;return{q:`Þig langar í hlut sem kostar ${kr(g)} og getur sparað ${kr(s)} á mánuði. Hve marga mánuði tekur það? (Hækkaðu upp í heila mánuði.)`,a:Math.ceil(g/s),tol:0,e:`${kr(g)} ÷ ${kr(s)} = ${nf(g/s,2)}, eða ${Math.ceil(g/s)} mánuðir.`}},
 compound:()=>{const p=R(5,50)*10000,r=R(3,8),n=R(3,10);const a=p*Math.pow(1+r/100,n);return{q:`${kr(p)} á ${r}% ársvöxtum í ${n} ár. Hver er lokaupphæðin?`,a,tol:Math.max(2,a*0.0005),e:`${kr(p)} × ${nf(1+r/100,2)}^${n} ≈ ${kr(a)}.`}},
 rule72:()=>{const r=[3,4,6,8,9,12][R(0,5)];return{q:`Samkvæmt 72-reglunni, um hve mörg ár tekur að tvöfalda peninga á ${r}% vöxtum?`,a:72/r,tol:0.05,e:`72 ÷ ${r} = ${nf(72/r,0)} ár.`}},
 real:()=>{const i=R(2,9),f=R(2,9);return{q:`Vextir eru ${i}% og verðbólga ${f}%. Hverjir eru raunvextirnir um það bil (í %)?`,a:i-f,tol:0,e:`${i}% − ${f}% = ${i-f}%.`}},
 vatin:()=>{const p=R(20,400)*50-10;return{q:`Vara kostar ${kr(p)} með 24% VSK. Hve mikið af verðinu er VSK?`,a:p*24/124,tol:1,e:`${kr(p)} × 24 ÷ 124 ≈ ${kr(p*24/124)}.`}},
 bnpl:()=>{const p=R(3,12)*10000,n=[3,4,6,12][R(0,3)],f=R(10,40)*100,g=R(3,7)*100-5;const t=p+n*g+f;return{q:`Vara kostar ${kr(p)}. Þú greiðir í ${n} greiðslum með ${kr(g)} gjaldi á hverja og ${kr(f)} lántökugjaldi. Hve mikið greiðir þú umfram verðið?`,a:t-p,tol:0,e:`${n} × ${kr(g)} + ${kr(f)} = ${kr(t-p)}.`}},
 unitp:()=>{const g=[250,400,500,750][R(0,3)],p=R(20,90)*10-1;return{q:`${g} g kosta ${kr(p)}. Hvert er kílóverðið?`,a:p/g*1000,tol:1,e:`${kr(p)} ÷ ${g} × 1.000 = ${kr(p/g*1000)} á kg.`}},
 fxp:()=>{const e=R(10,120),r=R(138,152),f=[1,1.5,2,2.5][R(0,3)];return{q:`Þú kaupir fyrir ${e} evrur. Gengið er ${r} kr. og kortaálagið ${nf(f,1)}%. Hvað kostar þetta í krónum?`,a:e*r*(1+f/100),tol:1,e:`${e} × ${r} × ${nf(1+f/100,3)} ≈ ${kr(e*r*(1+f/100))}.`}},
 hourly:()=>{const p=R(10,40)*100,c=R(2,8)*100,n=R(5,20),h=R(2,8);const m=p-c;return{q:`Þú selur ${n} stykki á ${kr(p)}. Efni í hvert kostar ${kr(c)} og þetta tekur ${h} klst. Hvert er tímakaupið?`,a:m*n/h,tol:1,e:`(${kr(p)} − ${kr(c)}) × ${n} ÷ ${h} = ${kr(m*n/h)}.`}},
 annual:()=>{const a=[1490,2290,2990,3490][R(0,3)],b=[990,1890,2490][R(0,2)];return{q:`Þú ert með tvær áskriftir á ${kr(a)} og ${kr(b)} á mánuði. Hvað kosta þær á ári?`,a:(a+b)*12,tol:0,e:`(${kr(a)} + ${kr(b)}) × 12 = ${kr((a+b)*12)}.`}},
 emerg:()=>{const e=R(25,45)*10000,m=[3,4,5,6][R(0,3)],h=R(0,8)*50000,s=R(4,12)*10000;const miss=Math.max(0,e*m-h);return{q:`Nauðsynleg útgjöld eru ${kr(e)} á mánuði og markmiðið ${m} mánaða neyðarsjóður. Þú átt ${kr(h)} og sparar ${kr(s)} á mánuði. Hve marga mánuði tekur að ná markmiðinu? (Hækkaðu upp.)`,a:Math.ceil(miss/s),tol:0,e:`(${kr(e)} × ${m} − ${kr(h)}) ÷ ${kr(s)} = ${nf(miss/s,2)}, eða ${Math.ceil(miss/s)} mánuðir.`}},
 odint:()=>{const d=R(10,80)*10000,r=R(10,20);return{q:`Þú skuldar ${kr(d)} á ${r}% ársvöxtum. Um það bil hvað greiðir þú í vexti á mánuði?`,a:d*r/100/12,tol:2,e:`${kr(d)} × ${r}% ÷ 12 ≈ ${kr(d*r/100/12)}.`}},
 loanpay:()=>{const L=R(20,60)*1000000,r=[7.5,8,8.5,9,9.5][R(0,4)],y=[25,30,40][R(0,2)];const i=r/100/12,n=y*12,a=L*i/(1-Math.pow(1+i,-n));return{q:`Lán upp á ${kr(L)} á ${nf(r,1)}% vöxtum til ${y} ára með jöfnum greiðslum. Hver er mánaðargreiðslan?`,a,tol:Math.max(5,a*0.001),e:`L × r ÷ (1 − (1 + r)^−n) með r = ${nf(i,5)} og n = ${n} gefur ${kr(a)}.`}},
 pension:()=>{const w=R(40,90)*10000,s=[2,4][R(0,1)];return{q:`Mánaðarlaun eru ${kr(w)}. Þú greiðir ${s}% í séreign og vinnuveitandinn 2% á móti. Hve mikið fer í séreignina á ári?`,a:w*(s+2)/100*12,tol:0,e:`${kr(w)} × ${s+2}% × 12 = ${kr(w*(s+2)/100*12)}.`}},
 feeDrag:()=>{const p=R(5,20)*100000,y=[20,25,30][R(0,2)],r=6,f=[0.5,1,1.5,2][R(0,3)];const a=p*Math.pow(1+r/100,y),b=p*Math.pow(1+(r-f)/100,y);return{q:`${kr(p)} vaxa um ${r}% á ári í ${y} ár. Hve mikið minna áttu í lokin ef árlegur kostnaður er ${nf(f,1)}%?`,a:a-b,tol:Math.max(5,(a-b)*0.002),e:`${kr(a)} − ${kr(b)} = ${kr(a-b)}.`}},
 deduct:()=>{const a=R(80,120)*1000,sa=R(2,4)*10000,b=a-R(10,30)*1000,sb=sa+R(3,8)*10000,n=[0.1,0.2,0.3,0.5][R(0,3)];return{q:`Trygging A kostar ${kr(a)} á ári með ${kr(sa)} sjálfsábyrgð. B kostar ${kr(b)} með ${kr(sb)}. Þú lendir í ${nf(n,1)} tjónum á ári að meðaltali. Hver er væntur árlegur kostnaður við B?`,a:b+n*sb,tol:1,e:`${kr(b)} + ${nf(n,1)} × ${kr(sb)} = ${kr(b+n*sb)}.`}},
 ktday:()=>{const d=R(1,28),m=R(1,12),y=R(10,25);const s=String(d+40).padStart(2,'0')+String(m).padStart(2,'0')+String(y).padStart(2,'0');return{q:`Kennitala fyrirtækis byrjar á ${s}. Á hvaða degi mánaðarins var það stofnað?`,a:d,tol:0,e:`${d+40} − 40 = ${d}.`}},
 gm:()=>{const r=R(50,300)*1000,c=Math.round(r*R(30,70)/100);return{q:`Tekjur eru ${nf(r)} þús. kr. og vörunotkun ${nf(c)} þús. kr. Hvert er framlegðarhlutfallið (í %, einn aukastafur)?`,a:(r-c)/r*100,tol:0.06,e:`(${nf(r)} − ${nf(c)}) ÷ ${nf(r)} = ${pc((r-c)/r)}.`}},
 eqr:()=>{const a=R(50,500),d=Math.round(a*R(30,85)/100);return{q:`Eignir eru ${a} m.kr. og skuldir ${d} m.kr. Hvert er eiginfjárhlutfallið (í %, einn aukastafur)?`,a:(a-d)/a*100,tol:0.06,e:`(${a} − ${d}) ÷ ${a} = ${pc((a-d)/a)}.`}},
 cfo:()=>{const n=R(5,40),dp=R(1,10),iv=R(-8,12),rc=R(-5,10);return{q:`Hagnaður er ${n}, afskriftir ${dp}, birgðir ${iv>=0?'aukast':'minnka'} um ${Math.abs(iv)} og viðskiptakröfur ${rc>=0?'aukast':'minnka'} um ${Math.abs(rc)}. Hvert er handbært fé frá rekstri?`,a:n+dp-iv-rc,tol:0,e:`${n} + ${dp} ${iv>=0?'−':'+'} ${Math.abs(iv)} ${rc>=0?'−':'+'} ${Math.abs(rc)} = ${n+dp-iv-rc}.`}},
 cr:()=>{const c=R(20,200),s=R(15,150);return{q:`Veltufjármunir eru ${c} og skammtímaskuldir ${s}. Hvert er veltufjárhlutfallið (tveir aukastafir)?`,a:c/s,tol:0.006,e:`${c} ÷ ${s} = ${nf(c/s,2)}.`}},
 empcost:()=>{const w=R(45,95)*10000;return{q:`Starfsmaður er á ${kr(w)} á mánuði. Launatengd gjöld eru 22% ofan á. Hver er árlegur kostnaður?`,a:w*1.22*12,tol:1,e:`${kr(w)} × 1,22 × 12 = ${kr(w*1.22*12)}.`}},
 breakeven:()=>{const f=R(10,60)*100000,m=R(5,40)*100;return{q:`Fastur kostnaður er ${kr(f)} á mánuði og framlegð á einingu ${kr(m)}. Hve margar einingar þarf að selja til að ná núllpunkti? (Hækkaðu upp.)`,a:Math.ceil(f/m),tol:0,e:`${kr(f)} ÷ ${kr(m)} = ${nf(f/m,1)}, eða ${Math.ceil(f/m)} einingar.`}},
 ev:()=>{const e=R(10,80),m=[4,5,6,7,8][R(0,4)],nd=R(-10,60);return{q:`EBITDA er ${e} m.kr., margfeldi ${m} og nettóskuldir ${nd} m.kr. Hvert er virði hlutafjár (m.kr.)?`,a:e*m-nd,tol:0,e:`${e} × ${m} − ${nd} = ${e*m-nd} m.kr.`}},
 dupont:()=>{const m=R(2,15),t=R(5,30)/10,l=R(12,35)/10;return{q:`Hagnaðarhlutfall ${m}%, eignavelta ${nf(t,1)} og skuldsetningarmargfaldari ${nf(l,1)}. Hver er arðsemi eigin fjár (í %)?`,a:m*t*l,tol:0.06,e:`${m}% × ${nf(t,1)} × ${nf(l,1)} = ${nf(m*t*l,2)}%.`}},
 ccc:()=>{const a=R(10,70),b=R(10,120),c=R(10,60);return{q:`DSO er ${a} dagar, DIO ${b} og DPO ${c}. Hver er veltufjárhringrásin (dagar)?`,a:a+b-c,tol:0,e:`${a} + ${b} − ${c} = ${a+b-c} dagar.`}},
 pv:()=>{const f=R(1,20)*100000,r=R(5,15),t=R(1,6);const a=f/Math.pow(1+r/100,t);return{q:`Hvert er núvirði ${kr(f)} sem greiðast eftir ${t} ár, með ${r}% ávöxtunarkröfu?`,a,tol:Math.max(2,a*0.0005),e:`${kr(f)} ÷ ${nf(1+r/100,2)}^${t} ≈ ${kr(a)}.`}},
 gordon:()=>{const f=R(5,40),r=R(8,14),g=[1,1.5,2,2.5,3][R(0,4)];return{q:`Frjálst sjóðstreymi næsta árs er ${f}, ávöxtunarkrafa ${r}% og langtímavöxtur ${nf(g,1)}%. Hvert er lokavirðið?`,a:f/((r-g)/100),tol:0.06,e:`${f} ÷ (${r}% − ${nf(g,1)}%) = ${nf(f/((r-g)/100),1)}.`}},
 wacc:()=>{const e=R(40,80),re=R(10,18),rd=R(5,10);const w=e/100*re+(100-e)/100*rd*0.8;return{q:`Eigið fé er ${e}% af fjármögnun og skuldir ${100-e}%. Krafa á eigið fé ${re}%, vextir ${rd}%, skatthlutfall 20%. Hver er WACC (í %)?`,a:w,tol:0.006,e:`${e}% × ${re}% + ${100-e}% × ${rd}% × 0,8 = ${nf(w,2)}%.`}},
 pref:()=>{const I=R(2,20)*10,pre=R(4,12)*I,x=R(2,15)*I;const s=I/(pre+I),g=Math.max(Math.min(x,I),s*x);return{q:`Fjárfestir setur ${I} m.kr. inn á ${pre} m.kr. pre-money með 1× forgangi án þátttöku. Félagið selst á ${x} m.kr. Hve mikið fær hann (m.kr., einn aukastafur)?`,a:g,tol:0.06,e:`Hlutur ${pc(s)}: ${nf(s*x,1)} m.kr. Forgangur: ${nf(Math.min(x,I),1)} m.kr. Hann fær hærri töluna, ${nf(g,1)} m.kr.`}},
 adj:()=>{const e=R(20,90),o=R(1,10),w=R(4,10),m=w+R(4,12);return{q:`Uppgefin EBITDA er ${e} m.kr. með ${o} m.kr. einskiptiskostnaði. Eigandinn tekur ${w} m.kr. í laun en markaðslaun eru ${m} m.kr. Hver er leiðrétt EBITDA (m.kr.)?`,a:e+o-(m-w),tol:0,e:`${e} + ${o} − (${m} − ${w}) = ${e+o-(m-w)} m.kr.`}},
 vatnet:()=>{const s=R(10,60)*124000,k=R(2,40)*124000;return{q:`Sala tímabilsins er ${kr(s)} og innkaup ${kr(k)}, bæði með 24% VSK. Hve mikinn VSK þarf að greiða (neikvæð tala ef endurgreitt)?`,a:(s-k)*24/124,tol:1,e:`(${kr(s)} − ${kr(k)}) × 24 ÷ 124 = ${kr((s-k)*24/124)}.`}},
 ltv:()=>{const a=R(20,100)*100-10,m=R(50,85),c=R(2,8);const l=a*m/100/(c/100);return{q:`Viðskiptavinur greiðir ${kr(a)} á mánuði, framlegð er ${m}% og brottfall ${c}% á mánuði. Hvert er ævivirði hans (LTV)?`,a:l,tol:2,e:`${kr(a)} × ${m}% ÷ ${c}% = ${kr(l)}.`}},
 comps:()=>{const e=R(10,60),m=[[5,6,8],[4,7,9],[6,6.5,10],[5.5,7,12]][R(0,3)];return{q:`EBITDA er ${e} m.kr. Sambærileg félög eru á ${m.map(x=>nf(x,1)).join(', ')}× EV/EBITDA. Hvert er heildarvirðið miðað við miðgildið (m.kr.)?`,a:e*m[1],tol:0.06,e:`Miðgildið er ${nf(m[1],1)}×, og ${e} × ${nf(m[1],1)} = ${nf(e*m[1],1)} m.kr.`}},
 fxr:()=>{const r=R(50,200),c=R(10,60),x=R(5,20);return{q:`Tekjur í evrum jafngilda ${r} m.kr. og kostnaður í evrum ${c} m.kr. Krónan styrkist um ${x}%. Um hve mikið lækkar hagnaðurinn (m.kr.)?`,a:(r-c)*x/100,tol:0.06,e:`(${r} − ${c}) × ${x}% = ${nf((r-c)*x/100,1)} m.kr.`}}
};
window.MONNY.gens=GENS;

window.MONNY.tools=TOOLS;window.MONNY.COL=COL;window.MONNY.fmt={kr,nf,pc};
})();
