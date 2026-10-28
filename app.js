const stageData=[
 {title:'Silencio<br>de mañana',desc:'Blancos rotos, verdes pálidos y pétalos con aire. Para casas que piden calma.',img:'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=1600&q=90'},
 {title:'Deseo<br>sin exceso',desc:'Granates, rosas profundas y formas abiertas. Intensidad sin caer en el cliché.',img:'https://images.unsplash.com/photo-1495231916356-a86217efff12?auto=format&fit=crop&w=1600&q=90'},
 {title:'Una mesa<br>que celebra',desc:'Color, volumen y gesto. Composiciones que hacen que una cena empiece antes de sentarse.',img:'https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?auto=format&fit=crop&w=1600&q=90'},
 {title:'La casa<br>respira',desc:'Ramas, verdes y flores imperfectas. Para vivir con algo que cambia cada día.',img:'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1600&q=90'}
];
const stage=document.querySelector('.flower-stage');
const stageImg=document.querySelector('[data-stage-image]');
const stageTitle=document.querySelector('[data-stage-title]');
const stageDesc=document.querySelector('[data-stage-desc]');
document.querySelectorAll('.stage-tab').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('.stage-tab').forEach(x=>x.classList.remove('is-active'));btn.classList.add('is-active');
 const d=stageData[+btn.dataset.index];stage?.classList.add('changing');
 setTimeout(()=>{stageImg.src=d.img;stageTitle.innerHTML=d.title;stageDesc.textContent=d.desc;stage?.classList.remove('changing')},240);
}));

const dlg=document.getElementById('concierge');
const panel=dlg.querySelector('.concierge-panel');const options=dlg.querySelector('.concierge-options');const success=dlg.querySelector('.concierge-success');const progress=dlg.querySelector('.concierge-progress span');
let intention='';
function openConcierge(intent){intention=intent||'';dlg.showModal();document.body.style.overflow='hidden';if(intent){options.querySelector(`[data-value="${intent}"]`)?.click()}}
function closeConcierge(){dlg.close();document.body.style.overflow='';}
document.querySelectorAll('[data-open-concierge]').forEach(b=>b.addEventListener('click',()=>openConcierge(b.dataset.intent)));
dlg.querySelector('.concierge-close').addEventListener('click',closeConcierge);dlg.querySelector('.concierge-done').addEventListener('click',closeConcierge);
dlg.addEventListener('click',e=>{if(e.target===dlg)closeConcierge()});
options.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{intention=b.dataset.value;options.hidden=true;panel.hidden=false;progress.style.width='62%';document.getElementById('dateField').focus()}));
dlg.querySelectorAll('[data-tone]').forEach(b=>b.addEventListener('click',()=>{dlg.querySelectorAll('[data-tone]').forEach(x=>x.classList.remove('selected'));b.classList.add('selected')}));
dlg.querySelector('.concierge-submit').addEventListener('click',()=>{panel.hidden=true;success.hidden=false;progress.style.width='100%'});

const cursor=document.querySelector('.cursor-flower');
if(matchMedia('(pointer:fine)').matches){document.addEventListener('mousemove',e=>{cursor.style.opacity=1;cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'});}

document.querySelectorAll('.tilt-card').forEach(card=>{card.addEventListener('mousemove',e=>{const r=card.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(800px) rotateY(${x*5}deg) rotateX(${-y*5}deg)`});card.addEventListener('mouseleave',()=>card.style.transform='')});

if(window.gsap&&window.ScrollTrigger&&!matchMedia('(prefers-reduced-motion: reduce)').matches){gsap.registerPlugin(ScrollTrigger);
 gsap.from('.hero .reveal',{y:50,opacity:0,duration:1.1,stagger:.12,ease:'power3.out',delay:.15});
 gsap.to('.hero-media',{scale:1.16,yPercent:8,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
 gsap.to('.petal-a',{x:-130,y:180,rotation:180,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
 gsap.utils.toArray('.scene').forEach(s=>gsap.from(s.querySelectorAll('h2,.eyebrow,.manifesto-index,.kicker'),{y:38,opacity:0,stagger:.08,duration:.9,scrollTrigger:{trigger:s,start:'top 74%'}}));
 gsap.to('.bloom-1',{scale:1.2,rotation:35,scrollTrigger:{trigger:'.wow',start:'top top',end:'55% top',scrub:true}});
 gsap.to('.bloom-2',{scale:1.35,rotation:-28,scrollTrigger:{trigger:'.wow',start:'12% top',end:'68% top',scrub:true}});
 gsap.to('.bloom-3',{scale:1.1,rotation:22,scrollTrigger:{trigger:'.wow',start:'25% top',end:'80% top',scrub:true}});
 gsap.from('.stem',{scaleY:.05,scrollTrigger:{trigger:'.wow',start:'top top',end:'60% top',scrub:true}});
 gsap.fromTo('.wow-copy h2 span',{opacity:.18,y:25},{opacity:1,y:0,stagger:.1,scrollTrigger:{trigger:'.wow',start:'20% top',end:'78% top',scrub:true}});
}
