$(document).ready(function () {
  //INICJACJA data-aos
  AOS.init({
    offset: 50,
    duration: 600,
  });

  //FUNKCJA ZMIENIAJĄCA TEKST W DIVIE contentMoreAbout
  function moreAboutUs() {
    const texts = {
      textHowWeWork:
        '<p class="pMoreAbout">Na początku kontaktujemy się z naszym klientem w celu ustalenia wyglądu witryny</p><p class="pMoreAbout">Następnie sporządzamy listę wtyczek i specyfikacji które przyśpieszą naszą pracę. </p><p class="pMoreAbout">Wdrażamy projekt w życie, po czym konsultujemy efekt końcowy z klientem.</p>',
      textOffer:
        '<p class="pMoreAbout">Oferujemy strony internetowe które będą przede wszystkim:<ul><li>W dobrej cenie</li><li>Responsywne, tzn. będą dostosowane do urządzeń każdego typu</li><li>Posiadały metodologię SEO</li></ul></p>',
      textWorkHours:
        '<p class="pMoreAbout">Godziny otwarcia:<ul><li>Pon - Pt<ul><li>10:00 - 20:00</li></ul></li><li>Sobota<ul><li>10:00 - 18:00</li></ul></li></ul></p>',
    };

    $('#divMore1').click(function () {
      $('#contentMoreAbout').html(texts.textHowWeWork);

      $('#divMore1').css({
        'background-color': 'rgb(240, 3, 252)',
        transition: 'background-color 0.6s',
      });

      $('#divMore2,#divMore3').css({
        'background-color': 'black',
        transition: 'background-color 0.6s',
      });
    });

    $('#divMore2').click(function () {
      $('#contentMoreAbout').html(texts.textOffer);

      $('#divMore2').css({
        'background-color': 'rgb(240, 3, 252)',
        transition: 'background-color 0.6s',
      });

      $('#divMore1,#divMore3').css({
        'background-color': 'black',
        transition: 'background-color 0.6s',
      });
    });

    $('#divMore3').click(function () {
      $('#contentMoreAbout').html(texts.textWorkHours);

      $('#divMore3').css({
        'background-color': 'rgb(240, 3, 252)',
        transition: 'background-color 0.6s',
      });

      $('#divMore1,#divMore2').css({
        'background-color': 'black',
        transition: 'background-color 0.6s',
      });
    });
  }
  //FUNKCJA CHOWAJĄCA MENU NA TELEFONIE PO KLIKNIĘCIU NA LINK LUB JAKIEKOLWIEK MIEJSCE NA STRONIE
  function hideMobileMenu() {
    $('.nav-link').click(function () {
      $('#mobileMenuButton').addClass('collapsed');
      $('#navbar').removeClass('show');
      $('#mobileMenuButton').attr('aria-expanded', 'false');
    });
    $(document).click(function () {
      if (
        $('#navbar').hasClass('show') &&
        $('#mobileMenuButton').hasClass('collapsed') == false
      ) {
        $('#navbar').removeClass('show');
        $('#mobileMenuButton').addClass('collapsed');
        $('#mobileMenuButton').attr('aria-expanded', 'false');
      }
    });
  }

  /*FUNKCJA WYPISUJĄCA SAMODZIELNIE TEKST W HEADERZE*/
  function autoText() {
    let typed = new Typed('.autoText', {
      strings: [
        '^500 Ty marzysz, my projektujemy i budujemy^500',
        '^500 Stwórz z nami swoją stronę internetową^500',
        '^500 Tworzenie stron internetowych to nasza pasja^500',
      ],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });
  }
  autoText();
  hideMobileMenu();
  moreAboutUs();
});
