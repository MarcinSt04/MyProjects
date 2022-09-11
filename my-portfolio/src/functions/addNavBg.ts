const addBackgroundToNav = () => {
  const nav = document.querySelector('nav')!;
  document.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.backgroundColor = 'rgb(5,0,0)';
      nav.style.boxShadow = '0px 3px 5px black';
    } else {
      nav.style.backgroundColor = 'transparent';
      nav.style.boxShadow = 'none';
    }
  });
};

export default addBackgroundToNav;
