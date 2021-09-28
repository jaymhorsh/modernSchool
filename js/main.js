// Slide Show

$(window).on("load", function () {
  // console.log("hi")

  // home section slideshow
  let slideIndex = $(".slide.active").index();
      // console.log(slideIndex)
  const slideLen = $(".slide").length;
      // console.log(slideLen)
  
  function slideShow() {
      console.log(slideIndex);
      $(".slide").removeClass("active").eq(slideIndex).addClass("active");
      if (slideIndex == slideLen - 1) {
          slideIndex = 0;
      } else {
          slideIndex++;
      }
      setTimeout(slideShow, 5000);
  }
  slideShow()
})



/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav-menu class
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll("nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((e) => e.addEventListener("click", linkAction));

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);


/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollTop.classList.add("scroll-top");
  else scrollTop.classList.remove("scroll-top");
}
window.addEventListener("scroll", scrollTop);


/*==================== SCROLL REVEAL ANIMATION ====================*/
// you need internet for the ScrollReveal to work
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(
  `.home__data, .home__img,.alumni,.aside__list,.medal__item,
    .services__content, .menu__content,
    .facilities__content,.footer__content`,
  {
    interval: 100,
  }
);
