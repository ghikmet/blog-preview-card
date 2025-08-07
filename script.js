  const toggleButton = document.getElementById('header__navbar_toggle');
  const navMenu = document.getElementById('header__navbar');

  toggleButton.addEventListener('click', () => {
    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', String(!isExpanded)); // Update aria-expanded
    navMenu.classList.toggle('hidden'); // Show/hide menu
  });