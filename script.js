const toggleButton = document.getElementById('header__navbar_toggle');
const navbar = document.getElementById('header__navbar');


toggleButton.addEventListener('click', () => {
  const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
  toggleButton.setAttribute('aria-expanded', String(!isExpanded));
  navbar.classList.toggle('hidden');
  navbar.setAttribute('aria-hidden', String(isExpanded)); // true when hidden, false when visible
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

const firstLink = document.getElementById('home');
const navMenu = document.getElementById('header__navbar');

function showMenu() {
    if (aria-expanded === 'false') {
        navMenu.classList.remove('hidden');
        firstLink.focus();
    }else {
        navMenu.classList.add('hidden');
    }    
}