/* menu nav hamburger event*/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");

hamburger.addEventListener('click', phoneMenu);

function phoneMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
/* to close droped menu*/
const navA = document.querySelectorAll(".nav__menu__item__a");

navA.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}