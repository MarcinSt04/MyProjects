const addActiveClass = () => {
  const nav = document.querySelector('.nav-links')!;
  const navlinks = nav.querySelectorAll('.link');
  navlinks.forEach(link => {
    link.addEventListener('click', () => {
      navlinks.forEach(link => {
        link.classList.remove('active');
      });

      link.classList.add('active');
    });
  });
};

export default addActiveClass;
