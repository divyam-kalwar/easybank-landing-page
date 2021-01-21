const toggleButton= document.getElementsByClassName("toggle-button")[0]
const navbar = document.getElementsByClassName("navbar")[0];
const closebtn= document.getElementsByClassName("closebtn")[0];
const section1 = document.getElementsByClassName("section1")[0];
toggleButton.addEventListener("click",()=>{
      navbar.classList.toggle("active");
      closebtn.classList.toggle("active");
      toggleButton.classList.toggle("active");
      section1.classList.toggle("active");
})


closebtn.addEventListener("click",()=>{
      toggleButton.classList.toggle("active");
      navbar.classList.toggle("active");
      closebtn.classList.toggle("active");
      section1.classList.toggle("active");
})