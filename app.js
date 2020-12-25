const addHamburgerMenu = () => {
    const mobileNav = document.getElementsByClassName("mobile-nav")[0];
    const hamburger = document.getElementsByClassName("hamburger")[0];
    let open = false;
  
    hamburger.addEventListener("click", () => {
      if (!open) {
        mobileNav.style.display = "flex";
        open = true;
      } else {
        mobileNav.style.display = "none";
        open = false;
      }
    });
  };
  