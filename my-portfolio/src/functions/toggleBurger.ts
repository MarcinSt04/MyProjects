const toggleBurger = () => {
  const burger = document.querySelector('.burger')!;
  const nav = document.querySelector('.nav-links')!;
  const navLinks = document.querySelectorAll('.nav-links li')!;

  nav.classList.toggle('nav-active');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-active');
      navLinks.forEach(link => {
        burger.classList.remove('toggle');
      });
    });
  });
  burger.classList.toggle('toggle');
};

export default toggleBurger;
