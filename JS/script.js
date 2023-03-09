
//! MAIN PAGE
//* ШАПКА
///////////////////////////////////////////////////////////////
const navigation = document.querySelector('#hidden');
function press_here(){
    navigation.classList.toggle('shown');
}
const blured = document.querySelector('.wrapper');
function open_blur(){
    blured.classList.toggle('body');
}
const open_drop = document.querySelector('.drop_menu_hidden');
function open_drop_menu(){
    open_drop.classList.toggle('drop_menu_shown');
}
const open_drop_mob = document.querySelector('.drop_menu_mob_hidden');
function open_drop_menu_mob(){
    open_drop_mob.classList.toggle('drop_menu_mob_shown')
}
window.onscroll = function head_scrolled(){
    if(document.documentElement.scrollTop<50){
        document.querySelector('header').style.backgroundColor = '#0E141B';
    }
    else{
        document.querySelector('header').style.backgroundColor =  'rgba(0, 5, 28, 0.8)';
    }
}
/////////////////////////////////////////////
//*СЛАЙДЕР
let slideIndex=1;
showSlides(slideIndex);
function plusSlides(n){
    showSlides(slideIndex +=n);
}
function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides(n){
    let i;
    let slides =document.querySelectorAll(".back_photo");
    if(n > slides.length){
        slideIndex=1;
    }
    else if(n < 1){
        slideIndex=slides.length;
    }
    for(i=0 ; i < slides.length ; i++){
        slides[i].style.display="none";
    }
    slides[slideIndex - 1].style.display="flex";
}
/////////////////////////////////////////
 //* ТОВАРЫ
const wearing = document.querySelectorAll(".wearing").forEach(wearing =>{
    wearing.addEventListener("click" , flip);
    function flip(){
        wearing.classList.toggle('flipCard');
    }
})
///////////////////////////////////////////////////////////////////

