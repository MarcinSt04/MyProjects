document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.navbar');
  const burger = document.querySelector('.burger');
  const links = nav.querySelectorAll('a');

  /*BURGER ICON CLICK EVENT*/
  burger.addEventListener('click', () => {
    burger.classList.toggle('toggle');
  });

  /*NAVLINK CLICK EVENT*/
  links.forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('toggle');
      document.querySelector('.collapse').classList.remove('show');
      setTimeout(() => {
        removeHash();
      }, 1);
      // removeActive();
      // link.classList.add('active'); SCROLLSPY ALTERNATIVE
    });
  });

  /*POZNAJ NAS BUTTON FUNCTION*/
  // document.querySelector('#explore').addEventListener('click', () => {
  //   removeActive();
  //   document.querySelector('a:nth-child(2)').classList.add('active');
  // }); SCROLLSPY ALTERNATIVE

  document.querySelector('#explore').addEventListener('click', () => {
    setTimeout(() => {
      removeHash();
    }, 1);
  }); //button "POZNAJ NAS"

  /*PASTING FOOTER YEAR FUNCTION*/
  const footerDate = () => {
    const year = new Date().getFullYear();
    document.querySelector('#date').innerHTML = year;
  };

  /*NAV BACKGROUND ON SCROLL FUNCTION*/
  const addBg = () => {
    if (window.scrollY >= 50) {
      nav.classList.add('shadow-bg');
    } else {
      nav.classList.remove('shadow-bg');
    }
  };

  /*NAV BACKGROUND ON PAGE LOAD FUNCTION*/
  if (window.scrollY >= 50) {
    nav.classList.add('shadow-bg');
  } else {
    nav.classList.remove('shadow-bg');
  }

  /*NAVLINK ACTIVE CLASS REMOVE FUNCTION*/

  const removeActive = () => {
    links.forEach(link => {
      link.classList.remove('active');
    });
  };

  const removeHash = () => {
    //remove # from url
    window.history.replaceState({}, document.title, '/');
  };

  /*CALLING FUNCTIONS*/
  window.addEventListener('scroll', addBg);
  footerDate();

  // window.addEventListener('scroll', () => {
  //   console.log(window.scrollY);
  //   if (window.scrollY < 662) {
  //     removeActive();
  //     document.querySelector('.nav-link').classList.add('link-active');
  //   } else if (window.scrollY > 662 && window.scrollY < 1958) {
  //     removeActive();
  //     document.querySelector('a:nth-child(2)').classList.add('link-active');
  //   } else if (window.scrollY > 1958) {
  //     removeActive();
  //     document.querySelector('a:nth-child(3)').classList.add('link-active');
  //   }
  // }); SCROLLSPY ALTERNATIVE
});
