const toggleButton = document.getElementById('header__navbar_toggle');
const navMenu = document.getElementById('header__navbar');

// Toggle menu open/close
toggleButton.addEventListener('click', () => {
    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';

    //Update button state
    toggleButton.setAttribute('aria-expanded', String(!isExpanded));
    
    // Toggle menu visibility
    navMenu.classList.toggle('hidden', isExpanded);
    navMenu.setAttribute('aria-hidden', String(isExpanded));

    // Manage focusability of links inside menu
    const links = navMenu.querySelectorAll('a, button, input, select, textarea');
    links.forEach(link => {
        if (isExpanded) {
            link.setAttribute('tabindex', '-1'); // make unfocusable
        }else {
            link.removeAttribute('tabindex'); // restore focusability
        }
    });

    // Focus first item when opening
    if (!isExpanded && links.length) {
        links[0].focus();
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        navMenu.classList.add('hidden');
        toggleButton.setAttribute('aria-expanded', 'false');
        navMenu.setAttribute('aria-hidden', 'true');
    }
});