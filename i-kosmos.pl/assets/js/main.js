$(document).ready(function () {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  function hideMobileMenu() {
    $('.link--on, .dropdown-item').click(function () {
      $('#hamburger').addClass('collapsed');
      $('#nav-links').removeClass('show');
      $('#hamburger').attr('aria-expanded', 'false');
      $('#hamburger').removeClass('toggle');
    });

    $(document).click(function () {
      if (
        $('.link--on, #nav-links').hasClass('show') &&
        $('#hamburger').hasClass('collapsed') == false
      ) {
        $('#nav-links').removeClass('show');
        $('#hamburger').addClass('collapsed');
        $('#hamburger').attr('aria-expanded', 'false');
        $('#hamburger').removeClass('toggle');
      }
    });
  }

  function toggleHamburger() {
    document.querySelector('#hamburger').addEventListener('click', () => {
      document.querySelector('#hamburger').classList.toggle('toggle');
    });
  }

  function fallingMoon() {
    //FUNKCJA SPADAJĄCEGO KSIĘŻYCA
    let moon = $('#big-moon');
    moon.animate({ marginTop: '-40px' }, 1000);
    moon.animate({ marginTop: '-80px' }, 600);
    moon.animate({ marginTop: '-40px' }, 700);
    moon.animate({ marginTop: '-60px' }, 800);
    moon.animate({ marginTop: '-40px' }, 900);
  }

  function scroll() {
    const scrollItems = document.querySelectorAll(
      '.dropdown-item, .scroll-item'
    );
    for (const i of scrollItems) {
      i.onclick = function (e) {
        e.preventDefault();
        let hrefto = this.getAttribute('href');
        if (hrefto && hrefto.includes('#')) {
          document.getElementById(hrefto.replace(/#/g, ''));
          $('html,body ').animate(
            {
              scrollTop: $(hrefto).offset().top - 90,
            },
            1500
          );
        }
      };
    }

    document.querySelector('.navbar-brand img').onclick = function () {
      $('html, body').animate({ scrollTop: 0 }, 1000);
    };
  }

  scroll();
  fallingMoon();
  toggleHamburger();
  hideMobileMenu();
});
