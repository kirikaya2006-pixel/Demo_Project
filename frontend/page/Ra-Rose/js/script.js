const navbar = document.getElementById("rarose_nav");

function navbarScroll() {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", navbarScroll);
window.addEventListener("load", navbarScroll);