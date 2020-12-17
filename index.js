window.onload = ()=> {
    const menus = document.getElementById("disp")
    const hamburger = document.getElementById("hamburger")


    hamburger.addEventListener('click', ()=>{

        if(hamburger.src.indexOf('icon-close.svg') == -1){
            hamburger.src = "./images/icon-close.svg"

        }else{
            hamburger.src = "./images/icon-hamburger.svg"
        }

        if(hamburger.src.indexOf('icon-close.svg') != -1){
            menus.style.display = "flex"
        }else{
            menus.style.display = "none"
        }
       
    })

}