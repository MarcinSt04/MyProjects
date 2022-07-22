document.addEventListener('DOMContentLoaded', () => {
  const burgerAnimation = () => {
    const burger = document.querySelector('.burger');
    const links = nav.querySelectorAll('a');

    burger.addEventListener('click', () => {
      burger.classList.toggle('toggle');
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.toggle('toggle');
      });
    });
  };

  const navBgChanger = () => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 25) {
        document.querySelector('nav').classList.add('shadow-bg');
      } else {
        document.querySelector('nav').classList.remove('shadow-bg');
      }
    });
  };

  const app = () => {
    burgerAnimation();
    navBgChanger();
  };

  app();
});
