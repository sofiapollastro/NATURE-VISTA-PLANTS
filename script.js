//Menu Open Close
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
    menu.classList.toggle("move")
    navbar.classList.toggle("open-menu")
}
//Swiper
var swiper = new Swiper(".services-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 50000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //Header
  let header = document.querySelector("header")

  window.addEventListener("scroll" ,() =>{
    header.classList.toggle("shadow",window.scrollY > 0)
  })

 //Cookies 

 const cookieBox = document.querySelector(".wrapper"),
 buttons = document.querySelectorAll(".button");

const executeCodes = () => {
 //if cookie contains codinglab it will be returned and below of this code will not run
 if (document.cookie.includes("codinglab")) return;
 cookieBox.classList.add("show");

 buttons.forEach((button) => {
   button.addEventListener("click", () => {
     cookieBox.classList.remove("show");

     //if button has acceptBtn id
     if (button.id == "acceptBtn") {
       //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
       document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 0;
     }
   });
 });
};

//executeCodes function will be called on webpage load
window.addEventListener("load", executeCodes);
