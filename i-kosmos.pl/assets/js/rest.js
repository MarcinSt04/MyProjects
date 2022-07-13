$(document).ready(function () {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  function toggleHamburger() {
    document.querySelector('#hamburger').addEventListener('click', () => {
      document.querySelector('#hamburger').classList.toggle('toggle');
    });
  }

  function hideMobileMenu() {
    $('.nav-item').click(function () {
      $('#hamburger').addClass('collapsed');
      $('#nav-links').removeClass('show');
      $('#hamburger').attr('aria-expanded', 'false');
      $('#hamburger').removeClass('toggle');
    });

    $(document).click(function () {
      if (
        $('#nav-links').hasClass('show') &&
        $('#hamburger').hasClass('collapsed') == false
      ) {
        $('#nav-links').removeClass('show');
        $('#hamburger').addClass('collapsed');
        $('#hamburger').attr('aria-expanded', 'false');
        $('#hamburger').removeClass('toggle');
      }
    });
  }

  const facts = [
    'W centrum Drogi Mlecznej znajduje się ogromna czarna dziura, która może mieć masę 4 miliony razy większą od Słońca.',
    'Obecnie największą znaną czarną dziurą jest TON 618, który znajduje się 10,4 mld lat świetlnych od Ziemi.',
    'Księżyc jest ciągle skierowany do Ziemi tą samą stroną, nie wiadomo co znajduje się na jego drugiej połowie.',
    'Jowisz ma masę 2,5 razy większą od masy wszystkich planet Układu Słonecznego.',
    'Największą górą w Układzie Słonecznym jest Olimp. Znajduje się on na Marsie.',
    'Człowiek stanął na księżycu po raz pierwszy 20 lipca 1969 roku.',
    'Niektóre planety mają dość specyficzne opady, np. na Wenus występuje deszcz kwasu siarkowego, a na Uranie i Neptunie jest to deszcz diamentów.',
    "Naukowcy niedawno odkryli nową największą gwiazdę - Stephenson'a 2-18.",
    'Za około 4 miliardy lat Słońce powiększy się pochłaniając Merkury, Wenus i Ziemię.',
    'W roku 2027 ma powstać pierwszy hotel znajdujący się na orbicie Ziemi.',
    'Naukowcy wyhodowali roślinę na glebie z Marsa.',
    'Obecnie wiemy o istnieniu około 5000 egzoplanet.',
    'Space Surveillance Networks monitoruje śmieci kosmiczne. Obejmuje ona około 292 tys. obiektów.',
    'Gdybyśmy lecieli statkiem z prędkością światła, to opuszczenie naszej galaktyki zajęłoby nam 25 tys. lat.',
    'Mars był kiedyś bardzo podobny do Ziemi.',
    'Na nocnym niebie możemy zauważyć gołym okiem Jowisz, Saturn, Wenus i Mars.',
    'J1407b to planeta mająca o wiele większe pierścienie niż Saturn.',
  ];

  function generator() {
    let isActive = false;
    let wasClicked = false;
    $('#generate-fact-btn').on('click', function () {
      if (!isActive) {
        isActive = true;
        let fact = Math.floor(Math.random() * facts.length);
        if (!wasClicked) {
          wasClicked = true;
          $('#generate-fact-btn').text('Kolejna!');
          $('#fact-area').animate({ opacity: 1 }, 1500);
          $('#fact-area p').text(facts[fact]);
        } else {
          $('#fact-area p').animate({ opacity: 0 }, 1500);
          $('#fact-area').animate({ opacity: 0 }, 1500);
          setTimeout(function () {
            $('#fact-area p').text(facts[fact]);
          }, 1600);
          $('#fact-area p').animate({ opacity: 1 }, 1500);
          $('#fact-area').animate({ opacity: 1 }, 1500);
        }
        setTimeout(() => {
          isActive = false;
        }, 5000);
      }
    });
  }

  generator();
  hideMobileMenu();
  toggleHamburger();
});
