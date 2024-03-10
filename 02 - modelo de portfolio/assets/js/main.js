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
const themeButton = document.querySelector('#theme_button')
const darkTheme = 'dark_theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected_theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-mooon' : 'ri-sun-line'

if(selectedTheme) {
    document.body.classList[selectedTheme == 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon == 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    
    localStorage.setItem('selected_theme', getCurrentTheme())
    localStorage.setItem('selected_icon', getCurrentIcon())
})