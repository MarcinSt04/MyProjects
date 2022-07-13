const form = document.querySelector('form');
const statusTxt = form.querySelector('#status');
        form.onsubmit = (e) =>{
            e.preventDefault();
            statusTxt.style.color = "#0D6EFD";
            statusTxt.style.display = "block";
            statusTxt.innerText = "Wysyłanie wiadomości...";
            form.classList.add('disabled');

            let xhr = new XMLHttpRequest();
            xhr.open("POST", "mail.php", true);
            xhr.onload=()=> {
                if(xhr.readyState==4 && xhr.status==200) {
                    let response = xhr.response;
                    if(response.indexOf("Wymagane jest podanie adresu e-mail!") != -1 || response.indexOf("Wpisz poprawny adres e-mail!") != -1 || response.indexOf("Wymagane jest podanie treści wiadomości!") != -1 || response.indexOf("Musisz zapoznać się z naszą polityką prywatności!") !=-1 || response.indexOf("Przykro nam, ale coś poszło nie tak...") != -1) {
                        statusTxt.style.color = "red";
                    } else {
                        form.reset();
                        statusTxt.style.color="lightgreen";
                        setTimeout(()=> {
                            statusTxt.style.display = "none";
                        },3000);
                    }
                    statusTxt.innerText = response;
                    form.classList.remove('disabled');
                }
            }
            let formData = new FormData(form);
            xhr.send(formData);
        }