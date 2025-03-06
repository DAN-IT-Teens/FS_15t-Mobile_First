const menuButton = document.querySelector(".header__menu--button");
const mobileMenu = document.querySelector(".header__menu");

menuButton.addEventListener('click', function () {
    mobileMenu.classList.toggle("open");

    
})