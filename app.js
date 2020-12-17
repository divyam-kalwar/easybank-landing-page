function showMenu() {

 const menu=document.getElementById('menu')

 if(menu.style.display=='flex') {
    menu.style.display='none'
    
 } else {
    menu.style.display='flex'
 }
 console.log(menu.style.display)
}

