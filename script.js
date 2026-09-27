const menuButton = document.querySelector('.menu-button');
const mainNav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
  mainNav.classList.toggle('is-open', !isOpen);
});

mainNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Abrir menu');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
