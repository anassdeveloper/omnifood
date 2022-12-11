const header = document.querySelector('.header');
const btnMobileNav = document.querySelector('.btn-mobile-nav');

btnMobileNav.addEventListener('click', () => {
  header.classList.toggle('nav-open');
});
