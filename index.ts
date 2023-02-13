const burgerButton = (<HTMLInputElement>document.querySelector(".burger__container"));
const burgerSlide = (<HTMLInputElement>document.querySelector(".burger-slide"));
const burgerLine1 = (<HTMLInputElement>document.querySelector(".burger-line1"));
const burgerLine2 = (<HTMLInputElement>document.querySelector(".burger-line2"));

const slider = function(){
burgerLine1.classList.add("burger1X");
burgerLine2.classList.add("burger2X");
burgerSlide.classList.add("burger-animation");

}

burgerButton.addEventListener("click" , slider);

// const closeSlider = function(){
// if (burgerLine1.classList.contains("burger1X")) {
//     burgerLine1.classList.remove("burger1X");
//     burgerLine2.classList.remove("burger2X");
//     burgerSlide.classList.remove("burger-animation");
// } 

// }

// burgerButton.addEventListener("click" , closeSlider);