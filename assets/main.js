(function(){
var de=document.documentElement;
var burger=document.getElementById('hamburger'),drawer=document.getElementById('mobDrawer'),overlay=document.getElementById('mobOverlay'),closeBtn=document.getElementById('drawerClose');
function openD(){drawer.hidden=false;void drawer.offsetWidth;overlay.classList.add('visible');burger.setAttribute('aria-expanded','true');de.style.overflow='hidden';closeBtn.focus();}
function closeD(){drawer.hidden=true;overlay.classList.remove('visible');burger.setAttribute('aria-expanded','false');de.style.overflow='';burger.focus();}
if(burger&&drawer){
burger.addEventListener('click',function(){drawer.hidden?openD():closeD();});
closeBtn.addEventListener('click',closeD);overlay.addEventListener('click',closeD);
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!drawer.hidden)closeD();});
drawer.addEventListener('click',function(e){if(e.target.tagName==='A')closeD();});
window.addEventListener('resize',function(){if(window.innerWidth>768&&!drawer.hidden){drawer.hidden=true;overlay.classList.remove('visible');burger.setAttribute('aria-expanded','false');de.style.overflow='';}});
}
document.querySelectorAll('.faq-q').forEach(function(q){
q.addEventListener('click',function(){
var item=q.parentElement,ans=item.querySelector('.faq-answer'),open=item.classList.toggle('open');
q.setAttribute('aria-expanded',open?'true':'false');
});
});
})();
