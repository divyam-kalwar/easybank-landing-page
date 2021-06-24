const menuHamburger = document.getElementById("menu-hamburger");
const menuClose = document.getElementById("menu-close");
const navbar = document.getElementsByClassName("navbar");
const mockUp = document.getElementById("mock-up");

function shift() {
  navbar[0].style.display = "block";
  menuHamburger.style.display = "none";
  menuClose.style.display = "block";
  mockUp.style.display = "none";
}
function shift1() {
  navbar[0].style.display = "none";
  menuHamburger.style.display = "block";
  menuClose.style.display = "none";
  mockUp.style.display = "block";
}
