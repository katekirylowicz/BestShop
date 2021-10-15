/* menu nav hamburger event*/
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

function toggleMenu() {
  nav.classList.toggle("active");
}

function closeMenu() {
  nav.classList.remove("active");
}

hamburger.addEventListener('click', toggleMenu);

/* to close droped menu*/
const navA = document.querySelectorAll(".nav__menu__item__a");
navA.forEach(n => n.addEventListener("click", closeMenu));