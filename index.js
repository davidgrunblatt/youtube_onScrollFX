
const body = document.querySelector('body');
body.onload = () => {
    body.classList.toggle('bodyOpacityBefore');
    body.classList.add('bodyOpacityAfter');
}

const one = document.querySelector('#one'); 
const two = document.querySelector('#two');
const three = document.querySelector('#three');

const scrollFunk = () => {
    console.log(window.scrollY); 
    if(document.documentElement.scrollTop >= 200){
        one.classList.toggle('opacityBefore');
        one.classList.add('opacityAfter'); 
    }
    if(document.documentElement.scrollTop >= 730){
        two.classList.toggle('slideLeftBefore');
        two.classList.add('slideLeftAfter'); 
        three.classList.toggle('slideRightBefore');
        three.classList.add('slideRightAfter'); 
    }
}

window.addEventListener('scroll', scrollFunk);







