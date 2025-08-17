const toggleButton = document.getElementById('header__navbar_toggle');
const navMenu = document.getElementById('header__navbar');
const navLinks = document.querySelectorAll('.header__link');
const firstLink = document.getElementById('home');

toggleButton.addEventListener('click', () => {
    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', String(!isExpanded)); // Update ARIA state
    navMenu.classList.toggle('hidden'); // Show/hide menu visually
  });

// toggleButton.addEventListener('click', () => {
//     const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
//     toggleButton.setAttribute('aria-expanded', String(!isExpanded));
//     navMenu.classList.toggle('hidden');

//     if (navMenu.classList.contains('hidden')) {
//         toggleButton.setAttribute('aria-expanded', 'false');
//     }else {
//         toggleButton.setAttribute('aria-expanded', 'true');
//     }
// });

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

function showMenu() {
    if (aria-expanded === 'false') {
        navMenu.classList.remove('hidden');
        firstLink.focus();
    }else {
        navMenu.classList.add('hidden');
    }    
}