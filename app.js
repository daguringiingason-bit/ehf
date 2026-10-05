/* Monný – vélin: leiðsögn, innskráning, framvinda, próf og skjöl */
(function(){
const M=window.MONNY, CFG=window.MONNY_CONFIG||{}, TOOLS=M.tools, COL=M.COL;
const COURSES=[...M.courses].sort((a,b)=>a.order-b.order);
const byId=id=>COURSES.find(c=>c.id===id);
const $=id=>document.getElementById(id);
const app=$('app');
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const reduced=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
const isoDate=d=>new Date(d).toLocaleDateString('is-IS',{day:'numeric',month:'long',year:'numeric'});

/* ---------- Supabase ---------- */
const LIVE=!!(CFG.supabaseUrl&&CFG.supabaseAnonKey&&window.supabase);
const sb=LIVE?window.supabase.createClient(CFG.supabaseUrl,CFG.supabaseAnonKey,{auth:{flowType:'pkce',detectSessionInUrl:true,persistSession:true}}):null;
let user=null, profile=null, authReady=!LIVE;

/* ---------- progress ---------- */
const PKEY='monny-progress';
let prog={};
try{prog=JSON.parse(localStorage.getItem(PKEY)||'{}')||{}}catch(e){prog={}}
const saveLocal=()=>{try{localStorage.setItem(PKEY,JSON.stringify(prog))}catch(e){}};
const solved=id=>(prog[id]=Array.isArray(prog[id])?prog[id]:[]);
const unlocked=(c,i)=>i===0||solved(c.id).includes(i-1);
const allDone=c=>c.chapters.every((_,i)=>solved(c.id).includes(i));
async function pushProgress(id){
  if(!sb||!user)return;
  const {error}=await sb.from('progress').upsert({user_id:user.id,course:id,solved:solved(id),updated_at:new Date().toISOString()});
  if(error)console.warn('Framvinda vistaðist ekki:',error.message);
}
async function pullProgress(){
  if(!sb||!user)return;
  const {data,error}=await sb.from('progress').select('course,solved');
  if(error){console.warn(error.message);return}
  (data||[]).forEach(r=>{prog[r.course]=[...new Set([...solved(r.course),...(r.solved||[])])].sort((a,b)=>a-b)});
  saveLocal();
  await Promise.all(Object.keys(prog).map(pushProgress));
}
async function loadUser(u){
  user=u||null;profile=null;
  if(user){
    const {data}=await sb.from('profiles').select('full_name').eq('id',user.id).maybeSingle();
    profile=data||{full_name:''};
    await pullProgress();
  }
}

/* ---------- header ---------- */
function header(course,cur){
  const steps=course?course.chapters.map((ch,i)=>{const d=solved(course.id).includes(i);return `<button class="step ${d?'done':''} ${cur===i?'cur':''}" style="--sc:${COL[ch.c]}" type="button" data-go="#/c/${course.id}/${i+1}" ${unlocked(course,i)?'':'disabled'} aria-label="Kafli ${i+1}: ${esc(ch.title)}">${d?'✓':i+1}</button>`}).join('')
    +`<button class="step exam ${cur==='exam'?'cur':''}" type="button" data-go="#/c/${course.id}/prof" ${allDone(course)?'':'disabled'}>Lokapróf</button>`:'';
  $('steps').innerHTML=course?`<button class="step exam" type="button" data-go="#/c/${course.id}" style="font-weight:700">${esc(course.title)}</button>${steps}`:'';
  const ub=$('userBtn');
  if(!LIVE){ub.hidden=true}
  else if(user){ub.hidden=false;ub.className='userbtn';ub.textContent=(profile&&profile.full_name)||user.email;ub.dataset.go='#/profill'}
  else{ub.hidden=false;ub.className='userbtn primary';ub.textContent='Innskrá';ub.dataset.go='#/innskraning'}
  $('banner').hidden=LIVE;
}
document.addEventListener('click',e=>{const b=e.target.closest('[data-go]');if(b&&!b.disabled){e.preventDefault();location.hash=b.dataset.go}});

/* ---------- views ---------- */
function vHome(){
  header(null);
  const card=c=>{const n=solved(c.id).length,t=c.chapters.length,col=COL[c.color];
    return `<button type="button" class="ccard ${c.color==='sun'?'sun':''}" style="--cc:${col}" data-go="#/c/${c.id}">
     <span class="badge">${esc(c.audience)}</span><h3>${esc(c.title)}</h3><span class="nm">${esc(c.name)}</span><p>${esc(c.tagline)}</p>
     <span class="foot"><span>${t} kaflar og lokapróf</span>${n?`<span class="prog" aria-label="${n} af ${t} köflum lokið"><i style="width:${n/t*100}%"></i></span>`:''}</span></button>`};
  const tier=(lvl,h,sub)=>`<section class="tier"><div class="tier-h"><h2>${h}</h2><span>${sub}</span></div><div class="cards">${COURSES.filter(c=>c.level===lvl).map(card).join('')}</div></section>`;
  app.innerHTML=`<section class="mhero"><h1>Monný</h1><p>Lærðu á peninga með raunverulegum tölum. Frá fyrstu launum til verðmats fyrirtækja.</p></section>
   ${tier('Grunnur','Grunnur','Persónuleg fjármál, fyrir unga sem aldna')}
   ${tier('Fagstig','Fagstig','Fyrirtæki, greining og fjármögnun')}
   <section class="how"><div><b>Lestu og reiknaðu</b><p>Hver kafli útskýrir hugtökin og hefur reiknivél sem þú getur prófað þig áfram með.</p></div>
   <div><b>Leystu gátuna</b><p>Hver kafli endar á reikningsdæmi sem opnar næsta kafla.</p></div>
   <div><b>Taktu lokaprófið</b><p>Þegar öllum köflum er lokið bíður lokapróf. Ef þú stenst það færðu viðurkenningarskjal með staðfestingarkóða.</p></div></section>`;
}

function vCourse(c){
  header(c,null);
  const col=COL[c.color],sun=c.color==='sun'?'sun':'',done=allDone(c);
  app.innerHTML=`<div style="--c:${col}" class="${sun}"><header class="chap-head ${sun}"><div class="num">${esc(c.title)}</div><h1>${esc(c.name)}</h1><p class="lead">${esc(c.tagline)}</p></header>
   <div class="clist">${c.chapters.map((ch,i)=>{const d=solved(c.id).includes(i),u=unlocked(c,i);return `<button type="button" class="crow ${ch.c==='sun'?'sun':''}" style="--cc:${COL[ch.c]}" data-go="#/c/${c.id}/${i+1}" ${u?'':'disabled'}><span class="n">${d?'✓':i+1}</span><span><b>${esc(ch.title)}</b><span>${esc(ch.short)}</span></span><span class="st">${d?'Lokið':u?'Opið':'Læst'}</span></button>`}).join('')}
   <button type="button" class="crow sun" style="--cc:${COL.sun}" data-go="#/c/${c.id}/prof" ${done?'':'disabled'}><span class="n">★</span><span><b>Lokapróf</b><span>${c.exam.ask||c.exam.questions.length} spurningar úr ${c.exam.questions.length} spurninga banka. ${c.exam.pass} rétt þarf til að standast.</span></span><span class="st">${done?'Opið':'Ljúktu köflunum fyrst'}</span></button></div>
   <button class="cta" type="button" data-go="#/c/${c.id}/${Math.min(c.chapters.length,(c.chapters.findIndex((_,i)=>!solved(c.id).includes(i))+1)||c.chapters.length)}">${solved(c.id).length?'Halda áfram':'Byrja'}</button></div>`;
}

function toolSpec(t){return typeof t==='string'?{id:t}:t}
const GENS=M.gens||{};
function practiceCard(items){
  if(!items||!items.length)return '';
  return `<div class="card"><div class="card-h"><span class="pill">Æfing</span>${items.some(x=>x.g)?'Tölurnar breytast í hvert skipti':'Æfðu þig áður en þú leysir gátuna'}</div><div class="card-b" id="practice"></div></div>`;
}
function runPractice(items){
  const box=$('practice');if(!box)return;
  const shuf=it=>{const ix=it.o.map((_,i)=>i).sort(()=>Math.random()-.5);return Object.assign({k:'mc'},it,{o:ix.map(i=>it.o[i]),a:ix.indexOf(it.a)})};
  const qs=items.map(it=>it.g&&GENS[it.g]?Object.assign({k:'num'},GENS[it.g]()):shuf(it));
  let ok=0;
  box.innerHTML=qs.map((q,i)=>`<div class="exam-q"><div class="qq">${i+1}. ${q.q}</div>${q.k==='num'?`<div style="display:flex;gap:10px;flex-wrap:wrap"><input type="number" step="any" class="pin" aria-label="Svar við spurningu ${i+1}"><button class="btn" type="button" data-chk="${i}">Athuga</button></div>`:`<div class="opts">${q.o.map((o,j)=>`<button class="opt" type="button" data-mc="${i}" data-j="${j}">${o}</button>`).join('')}</div>`}<div class="fb" aria-live="polite"></div></div>`).join('')
   +`<div class="navrow" style="margin-top:16px"><span class="hint" id="pScore">0 af ${qs.length} rétt</span>${items.some(x=>x.g)?'<button class="btn" type="button" id="pNew">Nýjar tölur</button>':''}</div>`;
  const fin=(q,el,right)=>{const fb=el.querySelector('.fb');fb.classList.add('show');
    if(right){fb.innerHTML=`<span class="ok">Rétt.</span> ${(q.e||'').replace(/kr\.\./g,'kr.')}`;el.querySelectorAll('input,button').forEach(x=>x.disabled=true);ok++;$('pScore').textContent=`${ok} af ${qs.length} rétt`}
    else fb.innerHTML=`<span class="no">Ekki alveg.</span> ${q.k==='num'?'Reyndu aftur, eða skoðaðu formúlurnar fyrir ofan.':(q.e||'')}`;};
  box.onclick=e=>{const c=e.target.closest('[data-chk]'),m=e.target.closest('[data-mc]');
    if(c){const q=qs[+c.dataset.chk],el=c.closest('.exam-q'),v=parseFloat(String(el.querySelector('.pin').value).replace(',','.'));if(isNaN(v))return;fin(q,el,Math.abs(v-q.a)<=Math.max(q.tol||0,0.0001)+1e-9)}
    if(m&&!m.disabled){const q=qs[+m.dataset.mc],el=m.closest('.exam-q'),r=+m.dataset.j===q.a;m.classList.add(r?'right':'wrong');m.disabled=true;if(r)el.querySelectorAll('.opt').forEach(x=>x.disabled=true);fin(q,el,r)}
    if(e.target.id==='pNew')runPractice(items);};
  box.onkeydown=e=>{if(e.key==='Enter'&&e.target.classList.contains('pin'))e.target.nextElementSibling.click()};
}
function vChapter(c,i){
  if(!unlocked(c,i)){location.hash='#/c/'+c.id;return}
  header(c,i);
  const ch=c.chapters[i],col=COL[ch.c],isDone=solved(c.id).includes(i),sun=ch.c==='sun'?'sun':'',spec=ch.tool?toolSpec(ch.tool):null,T=spec&&TOOLS[spec.id],last=i===c.chapters.length-1;
  app.innerHTML=`<div style="--c:${col}" class="${sun}"><header class="chap-head ${sun}"><div class="num">${i+1}</div><h1>${ch.title}</h1><p class="lead">${ch.lead}</p></header>
  <div class="body">${ch.learn}${T?T.html(spec):''}${practiceCard(ch.practice)}
   <div class="card"><div class="card-h"><span class="pill">Gáta</span>Leystu til að opna næsta kafla</div><div class="card-b">
    <div class="qq">${ch.q.q}</div><div class="opts" id="qO">${ch.q.o.map((o,j)=>`<button class="opt ${isDone&&j===ch.q.a?'right':''}" type="button" data-j="${j}" ${isDone?'disabled':''}>${o}</button>`).join('')}</div>
    <div class="fb ${isDone?'show':''}" id="qF" aria-live="polite">${isDone?`<span class="ok">Rétt.</span> ${ch.q.ok}`:''}</div></div></div>
   ${ch.after?`<div class="after">${ch.after}</div>`:''}
   <div class="card"><div class="card-h"><span class="pill alt">Hvað myndir þú gera?</span>Ekkert eitt rétt svar</div><div class="card-b">
    <div class="qq">${ch.sc.q}</div><div class="opts" id="sO">${ch.sc.o.map((o,j)=>`<div><button class="opt" type="button" data-j="${j}">${o[0]}</button><div class="cons" id="cs${j}">${o[1]}</div></div>`).join('')}</div></div></div>
   ${ch.sum?`<h2>Þrjú atriði að muna</h2><div class="formula" style="font-weight:500">${ch.sum.map((s,k)=>`${k+1}. ${s}`).join('<br>')}</div>`:''}
   <div class="navrow"><button class="btn" type="button" data-go="${i===0?'#/c/'+c.id:'#/c/'+c.id+'/'+i}">${i===0?'Yfirlit':'Fyrri kafli'}</button>${isDone?'':'<span class="hint" id="hint">Leystu gátuna til að halda áfram</span>'}<button class="btn go" type="button" id="next" data-go="${last?'#/c/'+c.id+'/prof':'#/c/'+c.id+'/'+(i+2)}" ${isDone?'':'disabled'}>${last?'Í lokaprófið':'Næsti kafli'}</button></div>
  </div></div>`;
  if(T)T.bind(spec);
  runPractice(ch.practice);
  $('qO').addEventListener('click',e=>{const b=e.target.closest('.opt');if(!b||b.disabled)return;const j=+b.dataset.j,f=$('qF');
    if(j===ch.q.a){$('qO').querySelectorAll('.opt').forEach(x=>x.disabled=true);b.classList.add('right');f.innerHTML=`<span class="ok">Rétt.</span> ${ch.q.ok}`;f.classList.add('show');
      if(!solved(c.id).includes(i)){solved(c.id).push(i);solved(c.id).sort((a,b)=>a-b);saveLocal();pushProgress(c.id)}
      $('next').disabled=false;const h=$('hint');if(h)h.remove();header(c,i);}
    else{b.classList.add('wrong');b.disabled=true;f.innerHTML=`<span class="no">Ekki alveg.</span> ${ch.q.no}`;f.classList.add('show');}});
  $('sO').addEventListener('click',e=>{const b=e.target.closest('.opt');if(!b)return;$('sO').querySelectorAll('.opt').forEach(x=>x.classList.remove('pick'));b.classList.add('pick');$('cs'+b.dataset.j).classList.add('show')});
}

function vExam(c){
  if(!allDone(c)){location.hash='#/c/'+c.id;return}
  header(c,'exam');
  const bank=c.exam.questions,ask=Math.min(c.exam.ask||bank.length,bank.length);
  const head=`<header class="chap-head sun"><div class="num">★</div><h1>Lokapróf</h1><p class="lead">${esc(c.title)}: ${esc(c.name)}. ${ask} spurningar dregnar af handahófi úr ${bank.length} spurninga banka. ${c.exam.pass} rétt þarf til að standast. Þú mátt reikna á blaði eða nota reiknivélarnar í köflunum.</p></header>`;
  if(!LIVE){app.innerHTML=`<div style="--c:${COL.sun}" class="sun">${head}<div class="body"><div class="msg">Lokaprófið og viðurkenningarskjalið krefjast tengingar við Supabase, því farið er yfir svörin á þjóninum svo ekki sé hægt að svindla. Sjá leiðbeiningar í README.md.</div></div></div>`;return}
  const idx=[...bank.keys()].sort(()=>Math.random()-.5).slice(0,ask).sort((a,b)=>a-b);
  const ans={};
  app.innerHTML=`<div style="--c:${COL.sun}" class="sun">${head}<div class="body"><div id="eQ">${idx.map((qi,i)=>{const q=bank[qi];return `<div class="exam-q"><div class="qq">${i+1}. ${q[0]}</div><div class="opts" data-q="${i}">${q[1].map((o,j)=>`<button class="opt" type="button" data-j="${j}" aria-pressed="false">${o}</button>`).join('')}</div></div>`}).join('')}</div>
   <div class="navrow"><span class="hint" id="eHint">0 af ${ask} svarað</span><button class="btn go" type="button" id="eSub" disabled>Skila prófinu</button></div><div id="eRes" aria-live="polite"></div></div></div>`;
  $('eQ').addEventListener('click',e=>{const b=e.target.closest('.opt');if(!b||b.disabled)return;const box=b.parentElement,q=+box.dataset.q;
    box.querySelectorAll('.opt').forEach(x=>{x.classList.toggle('pick',x===b);x.setAttribute('aria-pressed',x===b)});ans[q]=+b.dataset.j;
    const n=Object.keys(ans).length;$('eHint').textContent=`${n} af ${ask} svarað`;$('eSub').disabled=n<ask;});
  $('eSub').onclick=async()=>{
    const btn=$('eSub');btn.disabled=true;btn.textContent='Fer yfir svörin…';
    const {data,error}=await sb.rpc('submit_exam',{p_course:c.id,p_questions:idx,p_answers:idx.map((_,i)=>ans[i])});
    const res=$('eRes');
    if(error){btn.disabled=false;btn.textContent='Skila prófinu';res.innerHTML=`<div class="msg err">${esc(error.message)}</div>`;return}
    if(data.already){res.innerHTML=`<div class="result"><h2>Þú hefur þegar lokið þessu prófi</h2><p>Viðurkenningarskjalið þitt bíður.</p><button class="cta" type="button" data-go="#/skjal/${esc(data.code)}">Skoða skjalið</button></div>`;btn.remove();return}
    if(data.wait_until){btn.disabled=false;btn.textContent='Skila prófinu';res.innerHTML=`<div class="msg">Þú getur reynt aftur kl. ${new Date(data.wait_until).toLocaleTimeString('is-IS',{hour:'2-digit',minute:'2-digit'})}. Notaðu tímann til að fara aftur yfir kaflana.</div>`;return}
    btn.remove();
    document.querySelectorAll('#eQ .opt').forEach(x=>x.disabled=true);
    if(data.passed&&Array.isArray(data.answers)){document.querySelectorAll('#eQ .opts').forEach((box,i)=>box.querySelectorAll('.opt').forEach(x=>{const j=+x.dataset.j;if(j===data.answers[i])x.classList.add('right');else if(j===ans[i])x.classList.add('wrong')}))}
    res.innerHTML=data.passed
      ?`<div class="result"><h2>Þú stóðst prófið</h2><p><b>${data.score} af ${data.total}</b> rétt. Viðurkenningarskjalið þitt er tilbúið.</p><button class="cta" type="button" data-go="#/skjal/${esc(data.code)}">Sækja viðurkenningarskjal</button></div>`
      :`<div class="result"><h2>Ekki alveg komið</h2><p><b>${data.score} af ${data.total}</b> rétt. Þú þarft ${c.exam.pass}. Þú getur reynt aftur eftir klukkustund og færð þá nýjar spurningar. Farðu aftur yfir kaflana á meðan.</p><button class="cta ghost" type="button" data-go="#/c/${c.id}">Aftur í kaflana</button></div>`;
    res.scrollIntoView({behavior:reduced()?'auto':'smooth'});
  };
}

async function vCert(code){
  header(null);
  if(!LIVE){app.innerHTML=`<div class="form"><h1>Viðurkenningarskjal</h1><div class="msg">Skjöl eru aðeins aðgengileg þegar vefurinn er tengdur Supabase.</div></div>`;return}
  app.innerHTML=`<div class="form"><p>Sæki skjalið…</p></div>`;
  const {data,error}=await sb.rpc('verify_certificate',{p_code:code});
  const r=data&&data[0];
  if(error||!r){app.innerHTML=`<div class="form"><h1>Skjal fannst ekki</h1><p>Enginn viðurkenningarskjal er skráð með kóðanum <b>${esc(code)}</b>. Athugaðu hvort kóðinn sé rétt sleginn inn.</p><button class="cta ghost" type="button" data-go="#/stadfesta">Reyna annan kóða</button></div>`;return}
  const c=byId(r.course)||{title:r.course,name:'',level:'',color:'sky'},col=COL[c.color],url=location.origin+location.pathname+'#/skjal/'+r.code;
  app.innerHTML=`<div class="cert-wrap"><div class="cert" style="--cc:${col}"><div class="band ${c.color==='sun'?'sun':''}"><b>Monný</b><span>${esc(c.level)}</span></div>
   <div class="main"><span class="k">Viðurkenning</span><h2>${esc(c.title)}</h2><span class="k">Þetta staðfestir að</span><div class="who">${esc(r.full_name)}</div>
   <div class="what">hefur lokið námskeiðinu <b>${esc(c.name)}</b> og staðist lokapróf með ${r.score} af ${r.total} réttum svörum.</div>
   <div class="meta"><span>Dagsetning<b>${isoDate(r.issued_at)}</b></span><span>Staðfestingarkóði<b>${esc(r.code)}</b></span><span>Staðfesta á<b>${esc(location.host+location.pathname)}#/stadfesta</b></span></div></div></div>
   <div class="cert-actions"><button class="cta" type="button" id="print">Prenta eða vista sem PDF</button><button class="cta ghost" type="button" id="copy">Afrita tengil</button></div>
   <p class="hint noprint" style="margin-top:12px">Veldu „Vista sem PDF“ í prentglugganum til að fá skjalið sem skrá.</p></div>`;
  $('print').onclick=()=>window.print();
  $('copy').onclick=async()=>{try{await navigator.clipboard.writeText(url);$('copy').textContent='Tengill afritaður'}catch(e){prompt('Afritaðu tengilinn:',url)}};
}

function vVerify(){
  header(null);
  app.innerHTML=`<div class="form"><h1>Staðfesta skjal</h1><p>Sláðu inn staðfestingarkóðann sem stendur á viðurkenningarskjalinu.</p>
   <label>Staðfestingarkóði<input id="vc" placeholder="MON-XXXX-XXXX" autocomplete="off"></label><button class="cta" type="button" id="vgo">Staðfesta</button></div>`;
  const go=()=>{const v=$('vc').value.trim().toUpperCase();if(v)location.hash='#/skjal/'+encodeURIComponent(v)};
  $('vgo').onclick=go;$('vc').addEventListener('keydown',e=>{if(e.key==='Enter')go()});
}

function vLogin(next){
  header(null);
  if(!LIVE){location.hash='#/';return}
  app.innerHTML=`<div class="form"><h1>Innskráning</h1><p>Sláðu inn netfangið þitt og við sendum þér innskráningartengil. Ekkert lykilorð þarf.</p>
   <label>Netfang<input id="em" type="email" autocomplete="email" inputmode="email" placeholder="nafn@dæmi.is"></label>
   <button class="cta" type="button" id="send">Senda tengil</button><div id="lm" aria-live="polite"></div></div>`;
  const send=async()=>{const em=$('em').value.trim(),m=$('lm');
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)){m.innerHTML='<div class="msg err">Sláðu inn gilt netfang, t.d. nafn@dæmi.is.</div>';return}
    $('send').disabled=true;
    try{sessionStorage.setItem('monny-next',next||'#/')}catch(e){}
    const {error}=await sb.auth.signInWithOtp({email:em,options:{emailRedirectTo:location.origin+location.pathname}});
    $('send').disabled=false;
    m.innerHTML=error?`<div class="msg err">${esc(error.message)}</div>`:`<div class="msg">Tengill hefur verið sendur á <b>${esc(em)}</b>. Opnaðu hann í þessum sama vafra til að skrá þig inn.</div>`;};
  $('send').onclick=send;$('em').addEventListener('keydown',e=>{if(e.key==='Enter')send()});
}

function vName(){
  header(null);
  app.innerHTML=`<div class="form"><h1>Hvað heitirðu?</h1><p>Fullt nafn birtist á viðurkenningarskjölunum þínum, svo skrifaðu það eins og þú vilt að það standi.</p>
   <label>Fullt nafn<input id="fn" autocomplete="name" value="${esc(profile&&profile.full_name||'')}"></label><button class="cta" type="button" id="sv">Vista</button><div id="nm" aria-live="polite"></div></div>`;
  const save=async()=>{const v=$('fn').value.trim().replace(/\s+/g,' ');
    if(v.length<2||!v.includes(' ')){$('nm').innerHTML='<div class="msg err">Skrifaðu bæði fornafn og eftirnafn.</div>';return}
    const {error}=await sb.from('profiles').upsert({id:user.id,full_name:v});
    if(error){$('nm').innerHTML=`<div class="msg err">${esc(error.message)}</div>`;return}
    profile={full_name:v};let n=location.hash||'#/';try{n=sessionStorage.getItem('monny-next')||n;sessionStorage.removeItem('monny-next')}catch(e){}
    if(location.hash===n)route();else location.hash=n;};
  $('sv').onclick=save;$('fn').addEventListener('keydown',e=>{if(e.key==='Enter')save()});
}

async function vProfile(){
  header(null);
  const {data}=await sb.from('certificates').select('code,course,issued_at').order('issued_at',{ascending:false});
  app.innerHTML=`<div class="form"><h1>Prófíllinn þinn</h1><p>${esc(profile.full_name)}<br>${esc(user.email)}</p>
   <h2 style="font-size:24px;margin-top:32px">Viðurkenningarskjöl</h2>
   <div class="certs">${(data||[]).length?data.map(r=>{const c=byId(r.course);return `<a href="#/skjal/${esc(r.code)}">${esc(c?c.title:r.course)}<span>${isoDate(r.issued_at)}</span></a>`}).join(''):'<p>Engin skjöl enn. Ljúktu námskeiði og lokaprófi til að fá fyrsta skjalið.</p>'}</div>
   <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:32px"><button class="cta ghost" type="button" id="ed">Breyta nafni</button><button class="cta ghost" type="button" id="lo">Skrá út</button></div>
   <p class="hint" style="margin-top:16px">Nafnabreyting hefur ekki áhrif á skjöl sem þegar hafa verið gefin út.</p></div>`;
  $('ed').onclick=vName;
  $('lo').onclick=async()=>{await sb.auth.signOut();location.hash='#/'};
}

/* ---------- router ---------- */
async function route(){
  if(!authReady){app.innerHTML='';return}
  const p=(location.hash.replace(/^#\/?/,'')||'').split('/').map(decodeURIComponent);
  window.scrollTo(0,0);
  if(p[0]==='skjal'&&p[1])return vCert(p[1]);
  if(p[0]==='stadfesta')return vVerify();
  if(p[0]==='innskraning')return vLogin();
  if(LIVE&&user&&!(profile&&profile.full_name))return vName();
  if(p[0]==='profill'){if(LIVE&&user)return vProfile();location.hash='#/innskraning';return}
  if(p[0]==='c'&&byId(p[1])){
    if(LIVE&&!user){return vLogin(location.hash)}
    const c=byId(p[1]);
    if(!p[2])return vCourse(c);
    if(p[2]==='prof')return vExam(c);
    const i=parseInt(p[2],10)-1;
    if(i>=0&&i<c.chapters.length)return vChapter(c,i);
    return vCourse(c);
  }
  vHome();
}
window.addEventListener('hashchange',route);

/* ---------- theme ---------- */
const root=document.documentElement,tb=$('themeBtn');
const dark=()=>{const t=root.getAttribute('data-theme');return t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches};
const sync=()=>tb.textContent=dark()?'Ljóst':'Dökkt';
try{const t=localStorage.getItem('monny-theme');if(t)root.setAttribute('data-theme',t)}catch(e){}
sync();tb.onclick=()=>{const n=dark()?'light':'dark';root.setAttribute('data-theme',n);try{localStorage.setItem('monny-theme',n)}catch(e){}sync()};

/* ---------- start ---------- */
if(sb){
  sb.auth.onAuthStateChange((ev,session)=>{
    setTimeout(async()=>{
      const changed=(session&&session.user&&session.user.id)!==(user&&user.id);
      if(changed||ev==='INITIAL_SESSION'){
        await loadUser(session&&session.user);
        if(location.search.includes('code=')){history.replaceState(null,'',location.pathname+location.hash)}
        if(ev==='SIGNED_IN'){let n=null;try{n=sessionStorage.getItem('monny-next')}catch(e){}if(n&&profile&&profile.full_name){try{sessionStorage.removeItem('monny-next')}catch(e){}if(location.hash!==n){authReady=true;location.hash=n;return}}}
        authReady=true;route();
      }
    },0);
  });
}else{route()}
})();
