/*=============== Mostrar MENU ===============*/
const navMenu = document.querySelector('#nav_menu'),
navToggle = document.querySelector('#nav_toggle'),
navClose = document.querySelector('#nav_close');

// mostrar menu
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('mostrar_menu')
    })
}

// esconder menu
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('mostrar_menu')
    })
}