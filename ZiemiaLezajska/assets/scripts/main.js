$(document).ready(function(){

    //HAMBURGER ANIMACJA
    const toggleHamburger = () => {
            document.querySelector('.navbar-toggler').addEventListener('click', () => {
            document.querySelector('.navbar-toggler').classList.toggle('toggle');
        })
    }


    //CHOWANIE MENU

    const hideMobileMenu = () => {

        //PO NACIŚNIĘCIU NA LINK

        const navbarToggler = $('.navbar-toggler');

        $('.nav-link').on('click',() => {
            navbarToggler.addClass('collapsed');
            navbarToggler.attr('aria-expanded','false');
            navbarToggler.removeClass('toggle');
            $('#navbar').removeClass('show');
        })


        //PO NACIŚNIĘCIU W JAKIEKOLWIEK MIEJSCE NA STRONIE

        $(document).on('click',() => {
            if($('#navbar').hasClass('show') && navbarToggler.hasClass('toggle')) {
                
                $('#navbar').removeClass('show');
                navbarToggler.addClass('collapsed');
                navbarToggler.removeClass('toggle');
                navbarToggler.attr('aria-expanded','false');

            }
        })


    }

    






    hideMobileMenu();
    toggleHamburger();

})