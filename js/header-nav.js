const body = document.querySelector("body");
const nav = document.querySelector(".navigation-menu-block");
const btnSub = document.querySelector(".nav-menu-btn");
const btnSubTwo = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".navigation-menu");

btnSub.addEventListener("click", () => {
  body.classList.toggle("overflow-hidden");
  nav.classList.toggle("nav-visible");
});

btnSubTwo.addEventListener("click", () => {
  body.classList.toggle("overflow-hidden");
  nav.classList.toggle("nav-visible");
});

navLinks.addEventListener("click", () => {
  body.classList.remove("overflow-hidden");
  nav.classList.remove("nav-visible");
});
