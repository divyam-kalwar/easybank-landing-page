const hamburgerElement = document.querySelector('.hamburger');
const mockupImageElement = document.querySelector('.img-mockups');
const popupMenuElement = document.querySelector('.popup-menu');

window.addEventListener('resize', () => {
    if(window.innerWidth > 400) {
        popupMenuElement.style.display = "none";
    }
});

hamburgerElement.addEventListener('click', () => {
    console.log(window.innerWidth);
    console.log(getComputedStyle(mockupImageElement).display);

    if(getComputedStyle(mockupImageElement).display === "none") {
        mockupImageElement.style.display = "block";
    } else {
        mockupImageElement.style.display = "none";
    }

    if(getComputedStyle(popupMenuElement).display === "none") {
        popupMenuElement.style.display = "block";
    } else {
        popupMenuElement.style.display = "none";
    }
});