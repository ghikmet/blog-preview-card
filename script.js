const toggleButton = document.getElementById('header__navbar_toggle');
  const navMenu = document.getElementById('header__navbar');

  toggleButton.addEventListener('click', () => {
      navMenu.classList.toggle('hidden');
  });