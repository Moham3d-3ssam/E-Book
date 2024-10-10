/* Start Elements */
let mode = document.querySelector("header .buttons-action li .mode");
let goUp = document.querySelector(".go-up");
let header = document.querySelector("header");
let headerLinks = document.querySelectorAll("header .links li");
let sections = document.querySelectorAll(".main > div");
let sectionSearch = document.querySelector(".search");
let buttonSearch = document.querySelector("header .searchButton");
let closeSearch = document.querySelector(".search .close");
let sectionLog = document.querySelector(".log");
let buttonLog = document.querySelector("header .logButton");
let closeLog = document.querySelector(".log .close");
/* End Elements */
/*----------------------------------------------------*/
/* Start Mode */
let localMode = localStorage.getItem("mode");

if(localMode !== null){
  if(localMode === "dark"){
    document.body.classList.add("dark");
    mode.className = "sun fa-solid fa-sun";
  }else{
    document.body.classList.remove("dark");
    mode.className = "mode fa-solid fa-moon";
  }
}

mode.onclick = function (){
  if(!document.body.classList.contains("dark")){
    document.body.classList.add("dark");
    mode.className = "sun fa-solid fa-sun";
    localStorage.setItem("mode", "dark");
  }else{
    document.body.classList.remove("dark");
    mode.className = "mode fa-solid fa-moon";
    localStorage.setItem("mode", "light");
  }
}
/* End Mode */
/*----------------------------------------------------*/
/* Start Go Up */
let goUpShow = () => goUp.style.cssText = (window.scrollY >= 70) ? "opacity: 1; pointer-events: fill;" : goUp.style.cssText = "opacity: 0; pointer-events: none;";
window.addEventListener("scroll", goUpShow);
/* End Go Up */
/*----------------------------------------------------*/
/* Start Sections */
  /* Section Active On Click */
    headerLinks.forEach((link) => {
      link.addEventListener("click", () => {
      headerLinks.forEach((lin) => {
        lin.querySelector("a").classList.remove("active");
      })
      link.querySelector("a").classList.add("active");
    })
  })
  /* Section Active On Click */

  /* Start Section Active On Scroll */
  window.addEventListener("scroll", () => {
    let currentSection;

    sections.forEach((section) => {
      let beforeSection = section.offsetTop;
      let nowSection = section.offsetHeight;
      let windowHeight = window.innerHeight;
      let beforeWindow = window.scrollY;

      if((beforeWindow - 60) > (beforeSection + nowSection - windowHeight)){
        currentSection = section.id;
        headerLinks.forEach((link) => {
          (link.querySelector("a").dataset.section === currentSection) ? link.querySelector("a").classList.add("active") : link.querySelector("a").classList.remove("active");
        })
        console.log(currentSection)
      }
    })
  })
  /* End Section Active On Scroll */
/* End Sections */
/*----------------------------------------------------*/
/* Start Nav Shadow */
let sahdowNavBar = () => (window.scrollY >= 70) ? header.classList.add("shadow") : header.classList.remove("shadow");
window.addEventListener("scroll", sahdowNavBar);
/* End Nav Shadow */
/*----------------------------------------------------*/
/* Start Search */
buttonSearch.onclick = function (){
  sectionSearch.classList.add("show");
  document.body.style.overflow = "hidden";
}
closeSearch.onclick = function (){
  sectionSearch.classList.remove("show");
  document.body.style.overflow = "auto";
}
/* End Search */
/*----------------------------------------------------*/
/* Start Log In */
buttonLog.onclick = function (){
  sectionLog.classList.add("show");
  document.body.style.overflow = "hidden";
}
closeLog.onclick = function (){
  sectionLog.classList.remove("show");
  document.body.style.overflow = "auto";
}
/* End Log In */
/*----------------------------------------------------*/
/* Start Home Swiper */
let swiperHome = new Swiper(".home__swiper", {
  loop: true,
  spaceBetween: -24,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    1220: {
      spaceBetween: -32,
    }
  }
})
/* End Home Swiper */
/*----------------------------------------------------*/
/* Start Features Swiper */
let swiperFeatures = new Swiper(".features__swiper", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',

  navigation: {
    nextEl: '.next-element',
    prevEl: '.previous-element',
  },

  breakpoints: {
    900: {
      slidesPerView: 3,
      centeredSlides: false,
    },
    500: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    0: {
      slidesPerView: 1,
      centeredSlides: false,
    },
  }
})
/* End Features Swiper */
/*----------------------------------------------------*/
/* Start New Books Swiper */
let swiperbooks = new Swiper(".books__swiper", {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',
  grabCursor: true,

  breakpoints: {
    900: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  }
})
/* End New Books Swiper */
/*----------------------------------------------------*/
/* Start Testimonials Swiper */
let swipertestimonials = new Swiper(".testimonials__swiper", {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',
  grabCursor: true,

  breakpoints: {
    900: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  }
})
/* End Testimonials Swiper */
/*----------------------------------------------------*/
/* Start Scroll Padding */
let scrollPadding = function (){
  if(window.scrollY >= 70){
    document.documentElement.style.cssText = "scroll-padding : 66px";
  }else{
    document.documentElement.style.cssText = "scroll-padding : 0";
  }
}
window.addEventListener("scroll", scrollPadding);
/* End Scroll Pading */
/*----------------------------------------------------*/
/* Start Scroll Reveal */
let scrollreveal = ScrollReveal({
  origun: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});
scrollreveal.reveal(`.home__container, .services .container, .features .container,
  .discount .container, .join, .testimonials .container, .footer`)
  scrollreveal.reveal(`.home__images`, {delay: 600});
  scrollreveal.reveal(`.service`, {interval: 100});
  scrollreveal.reveal(`.discount`, {origin: 'left'});
  scrollreveal.reveal(`.discount .image`, {origin: 'right'});
/* End Scroll Reveal */