$(document).ready(function() {
    
    
    //FUNKCJA GENERUJĄCA ZDJĘCIA W GALERII
    const galeryPhotosGenerator = () => {

         


        for(let i = 1; i <= 6; i++) {
          document.querySelector('#gallery-container').innerHTML+=
            "<div class='col-lg-4 col-md-6 col-12 mt-4'> <a href='../assets/img/galeria/"+[i]+".jpg' target='_blank'> <img src='../assets/img/galeria/"+[i]+".jpg' alt='Zespół Pieśni i Tańca Ziemia Leżajska zdjęcie' class='img-fluid'> </a> </div>"
        }
    }

    //FUNKCJA GENERUJĄCA WIĘCEJ ZDJĘĆ W GALERII

    $('#show-more-photos').on('click',()=> {

        //LICZBA ZDJĘĆ W FOLDERZE GALERIA
        let photos = 129;

        $('#show-more-photos').css('display','none');

        for(let i = 6; i <=photos ; i++) {
            document.querySelector('#gallery-container').innerHTML+=
              "<div class='col-lg-4 col-md-6 col-12 mt-4'> <a href='../assets/img/galeria/"+[i]+".jpg' target='_blank'> <img src='../assets/img/galeria/"+[i]+".jpg' alt='Zespół Pieśni i Tańca Ziemia Leżajska zdjęcie' class='img-fluid'> </a> </div>"
          }
        
          $('#hide-photos').css('display','block');
    })

    //FUNKCJA CHOWAJĄCA ZDJĘCIA

    // $('#hide-photos').on('click', ()=> {

    //     $('#hide-photos').css('display','none');
        
    //     document.querySelector('#gallery-container').innerHTML='';

    //     for(let i = 1; i <= 6 ; i++) {
    //         document.querySelector('#gallery-container').innerHTML+=
    //           "<div class='col-lg-4 col-md-6 col-12 mt-4'> <a href='../assets/img/galeria/"+[i]+".jpg'> <img src='../assets/img/galeria/"+[i]+".jpg' alt='Zespół Pieśni i Tańca Ziemia Leżajska zdjęcie' class='img-fluid'> </a> </div>"
    //       }

    //     $('#show-more-photos').css('display','block');
    // })





    
    galeryPhotosGenerator();




})