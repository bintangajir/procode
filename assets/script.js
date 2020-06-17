// Navbar
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector("nav ul");
const navbarLinks = document.querySelectorAll("nav a");


navbarToggler.addEventListener('click', navbarTogglerClick);

function navbarTogglerClick() {
    navbarToggler.classList.toggle("open-navbar-toggler");
    navbarMenu.classList.toggle("open");
}

navbarLinks.forEach(element => element.addEventListener("click", navbarLinksClick));

function navbarLinksClick(){
    if(navbarMenu.classList.contains("open")){
        navbarToggler.click();
    }
}