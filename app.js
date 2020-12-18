const hamburgerElement = document.querySelector('.hamburger');
const mockupImageElement = document.querySelector('.img-mockups');
const popupMenuElement = document.querySelector('.popup-menu');



hamburgerElement.addEventListener('click', () => {
    console.log("Hamburger clicked");
    console.log(getComputedStyle(mockupImageElement).display);
    console.log(popupMenuElement.style.display);

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