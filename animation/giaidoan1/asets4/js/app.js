const links=document.querySelectorAll('.nav-link');
const sections=document.querySelectorAll('div[id]');
window.addEventListener('scroll',()=>{
let current='';
sections.forEach(sec=>{
if(pageYOffset>=sec.offsetTop-120){current=sec.id;}
});
links.forEach(link=>{
link.classList.remove('active');
if(link.getAttribute('href').includes(current)){link.classList.add('active');}
});
});
const reveals=document.querySelectorAll('.reveal');
window.addEventListener('scroll',()=>{
reveals.forEach(el=>{
if(el.getBoundingClientRect().top<window.innerHeight-80){
el.classList.add('active');
}
});
});
document.getElementById('themeBtn').onclick=()=>{
document.body.classList.toggle('dark');
};
const cursor=document.querySelector('.cursor');
document.addEventListener('mousemove',e=>{
cursor.style.left=e.clientX+'px';
cursor.style.top=e.clientY+'px';
});
