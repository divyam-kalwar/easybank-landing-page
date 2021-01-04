const ham = document.getElementById('ham');

const menuNav = document.getElementById('menu-nav-mobile');

document.getElementById('ham').addEventListener('click',()=>{
    menuNav.classList.toggle("make-menu-visible");
})