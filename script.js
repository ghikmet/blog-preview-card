const toggleButton = document.getElementById('header__navbar_toggle');
const navMenu = document.getElementById('header__navbar');
const navbar = document.getElementById('header__navbar');


toggleButton.addEventListener('click', () => {
    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', String(!isExpanded));
    navMenu.classList.toggle('hidden');
    navMenu.setAttribute('aria-hidden', String(isExpanded));
  });

const navLinks = document.querySelectorAll('.header__link');


navLinks.forEach((link) => {
    if (link.href === window.location.href) {
        link.setAttribute('aria-current', 'page');
    }
});

const baseURI = document.baseURI;
const homePageLink = document.getElementById('home');

window.addEventListener('load', () => {
    if(baseURI) {
        homePageLink.setAttribute('aria-current', 'page');
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        navMenu.classList.add('hidden');
        toggleButton.setAttribute('aria-expanded', 'false');
    }
});

// const firstLink = document.getElementById('home');

// function showMenu() {
//     if (aria-expanded === 'false') {
//         navMenu.classList.remove('hidden');
//         firstLink.focus();
//     }else {
//         navMenu.classList.add('hidden');
//     }    
// }