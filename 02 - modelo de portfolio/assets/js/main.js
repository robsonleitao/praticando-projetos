/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector('#nav_menu'),
navToggle = document.querySelector('#nav_toggle'),
navClose = document.querySelector('#nav_close');

// mostrar menu
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show_menu')
    })
}

// esconder menu
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show_menu')
    })
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
    const header = document.querySelector('#header')
    this.scrollY >= 50 ? header.classList.add('bg_header') : header.classList.remove('bg_header')
}

window.addEventListener('scroll', bgHeader)

/*=============== DARK LIGHT THEME ===============*/ 
