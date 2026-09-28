const menuButton = document.querySelector('.menu-button');
const mainNav = document.querySelector('.main-nav');

function setMenuOpen(isOpen) {
  menuButton?.setAttribute('aria-expanded', String(isOpen));
  menuButton?.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  mainNav?.classList.toggle('is-open', isOpen);
}

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  setMenuOpen(!isOpen);
});

mainNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenuOpen(false);
});

document.addEventListener('click', (event) => {
  if (!document.querySelector('.site-header')?.contains(event.target)) setMenuOpen(false);
});

document.getElementById('year').textContent = new Date().getFullYear();
