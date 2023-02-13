var burgerButton = document.querySelector(".burger__container");
var burgerSlide = document.querySelector(".burger-slide");
var burgerLine1 = document.querySelector(".burger-line1");
var burgerLine2 = document.querySelector(".burger-line2");
var slider = function () {
    burgerLine1.classList.add("burger1X");
    burgerLine2.classList.add("burger2X");
    burgerSlide.classList.add("burger-animation");
};
burgerButton.addEventListener("click", slider);
// const closeSlider = function(){
// if (burgerLine1.classList.contains("burger1X")) {
//     burgerLine1.classList.remove("burger1X");
//     burgerLine2.classList.remove("burger2X");
//     burgerSlide.classList.remove("burger-animation");
// } else{return;}
// }
// burgerButton.addEventListener("click" , closeSlider);
