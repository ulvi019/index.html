const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const btnpopup=document.querySelector('.btnLogin-popup');
const close=document.querySelector('.icon-close');
const slides=document.querySelectorAll('.slide-container');
let index=0;
let btnVideo=document.querySelector('.btn-video');
btnVideo.onclick=function(){
    btnVideo.classList.add('active')
}
function next(){
    slides[index].classList.remove('active');
    index=(index+1)%slides.length;
    slides[index].classList.add('active');

}
function prew(){
    slides[index].classList.remove('active');
    index=(index-1+slides.length) % slides.length;
    slides[index].classList.add('active');

}


registerLink.addEventListener('click',()=>{
wrapper.classList.add('active');
});
loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
    });

    btnpopup.addEventListener('click',()=>{
        wrapper.style.display='block'
        });
        close.addEventListener('click',()=>{
            wrapper.style.display='none'
            });