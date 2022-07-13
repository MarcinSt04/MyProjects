$(document).ready(function() {

//FUNKCJA GENERUJĄCA PROJEKTY
    function loadAllProjects() {
        const projects = [
            {
                'title' : 'Nasza strona internetowa',
                'content' : 'Razem z ekipą stworzyliśmy stronę internetową naszej firmy. Stworzenie całej witryny zajęło nam 5 dni. Mamy nadzieję, że jest przyjazna dla oczu naszych klientów!',
                'photo' : 'projekt1.png',
                'link' : 'WeDev.html',
                'alt' : 'Zdjęcie naszej strony internetowej'
            },
            {
                'title' : 'Strona płatności firmy ###',
                'content' : 'Razem z ekipą stworzyliśmy stronę internetową płatności przy zamówieniu dla pewnej firmy.',
                'photo' : 'projekt3.png',
                'link' : '#',
                'alt' : 'Zdjęcie strony płatności firmy ###'
            },
            {
                'title' : 'Przykładowa  responsywna strona internetowa',
                'content' : 'Stworzyliśmy prostą responsywną stronę internetową.',
                'photo' : 'projekt4.png',
                'link' : '#',
                'alt' : 'Zdjęcie przykładowej responsywnej strony internetowej'
            },
            {
                'title' : 'Witryna z zastosowaniem Bootstrapa',
                'content' : 'Stworzyliśmy witrynę, która ma na celu jak największe zastosowanie w sobie Bootstrapa.',
                'photo' : 'projekt5.png',
                'link' : '#',
                'alt' : 'Zdjęcie wytryny z zastosowaniem Bootstrapa'
            },
            {
                'title' : 'Projekt #5',
                'content' : 'Opis projektu',
                'photo' : 'projekt2.png',
                'link' : '#',
                'alt' : 'Zdjęcie projektu nr 5'
            },
            {
                'title' : 'Strona internetowa COSMOS',
                'content' : 'Stworzyliśmy stronę internetową o kosmosie. Praca nad nią zajęła niecały tydzień.',
                'photo' : 'projekt6.png',
                'link' : '#',
                'alt' : 'Zdjęcie strony internetowej COSMOS'
            }
            
        ]

        for(let i=projects.length; i>0; i--) {
                    
            document.getElementById('containerForProjects').innerHTML +='<div class="col-lg-4 my-4 col-sm-6 portfolio-item itemHover"><div class="card h-100"><a href="'+projects[i-1].link+'"><img src="assets/img/'+projects[i-1].photo+'" alt="'+projects[i-1].alt+'" class="card-img-top"></a><div class="card-body"><h4 class="card-title pinkyText">'+projects[i-1].title+'</h4><p class="card-text">'+projects[i-1].content+'</p></div></div></div>';
        }


        //FUNKCJA SORTUJĄCA PROJEKTY
        function sortProjects() {
        document.getElementById('sortby').onchange=function() {


            var selectedValue = document.getElementById('sortby').value;
                
            if(selectedValue=='latest') {
                    document.getElementById('containerForProjects').innerHTML = "";
                for(let i=projects.length; i>0; i--) {
                    
                    document.getElementById('containerForProjects').innerHTML +='<div class="col-lg-4 my-4 col-sm-6 portfolio-item itemHover"><div class="card h-100"><a href="'+projects[i-1].link+'"><img src="assets/img/'+projects[i-1].photo+'" alt="'+projects[i-1].alt+'" class="card-img-top"></a><div class="card-body"><h4 class="card-title pinkyText">'+projects[i-1].title+'</h4><p class="card-text">'+projects[i-1].content+'</p></div></div></div>';
                }
            }
            else if(selectedValue=='oldest'){
                    document.getElementById('containerForProjects').innerHTML = "";
                for(let i=0; i<projects.length; i++) {
                    
                    document.getElementById('containerForProjects').innerHTML +='<div class="col-lg-4 my-4 col-sm-6 portfolio-item itemHover"><div class="card h-100"><a href="'+projects[i].link+'"><img src="assets/img/'+projects[i].photo+'" alt="'+projects[i].alt+'" class="card-img-top"></a><div class="card-body"><h4 class="card-title pinkyText">'+projects[i].title+'</h4><p class="card-text">'+projects[i].content+'</p></div></div></div>';
                }
            }
            else {
                document.getElementById('containerForProjects').innerHTML = "";

                function compare(a, b) {
                    if (a.title > b.title) return 1;
                    if (a.title < b.title) return -1;
                    return 0;
                  }

                  projects.sort(compare);

                  for(let i=0; i<projects.length; i++) {
                    document.getElementById('containerForProjects').innerHTML +='<div class="col-lg-4 my-4 col-sm-6 portfolio-item itemHover"><div class="card h-100"><a href="'+projects[i].link+'"><img src="assets/img/'+projects[i].photo+'" alt="'+projects[i].alt+'" class="card-img-top"></a><div class="card-body"><h4 class="card-title pinkyText">'+projects[i].title+'</h4><p class="card-text">'+projects[i].content+'</p></div></div></div>';
                  }
                  
            }

    }
}
       


sortProjects();
   
}
//FUNKCJA WYSZUKUJĄCA PROJEKT WG NAZWY
function searchProjects() {
    $('#searchInput').on('keyup', function() {
        const searchInputValue = $(this).val().toLowerCase();
        $('#containerForProjects div').filter(function() {

            $(this).toggle($(this).text().toLowerCase().indexOf(searchInputValue)> -1);
            
        })
       
    })
    
    
}

//FUNKCJA CHOWAJĄCA MENU NA TELEFONIE PO KLIKNIĘCIU NA LINK LUB JAKIEKOLWIEK MIEJSCE NA STRONIE
function hideMobileMenu() {
    $('.nav-link').click(function(){
        $('#mobileMenuButton').addClass('collapsed');
        $('#navbar').removeClass('show');
        $('#mobileMenuButton').attr("aria-expanded","false");
        
    })
    $(document).click(function() {
        if($('#navbar').hasClass('show') && $('#mobileMenuButton').hasClass('collapsed')==false) {
            $('#navbar').removeClass('show');
            $('#mobileMenuButton').addClass('collapsed');
            $('#mobileMenuButton').attr('aria-expanded','false');
        }
    })
}

searchProjects();
hideMobileMenu();
loadAllProjects();

})