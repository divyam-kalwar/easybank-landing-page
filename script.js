var menuNav = document.querySelector(".menu-nav");
var ham = document.querySelector(".hamburger");
ham.addEventListener("click", toggleHamburger);
function toggleHamburger() {
menuNav.classList.toggle("showNav");
ham.classList.toggle("showClose");
}