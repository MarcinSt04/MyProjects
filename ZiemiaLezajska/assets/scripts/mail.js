const form = document.querySelector('form');
const statusTxt = form.querySelector('#status');
    form.onsubmit = (e) => {
        e.preventDefault();
        statusTxt.style.color = "rgb(18, 16, 16)";
        statusTxt.style.display = "block";
        statusTxt.innerTxt = "Trwa wysyłanie twojej wiadomości...";
        form.classList.add('disabled');

        let xhr = new XMLHttpRequest();
        xhr.open('POST','mail.php',true);
        xhr.onload = () => {
            if(xhr.readyState==4 && xhr.status==200) {
                let response = xhr.response;
                if(response.indexOf("Musisz podać swoje imię") != -1 || response.indexOf("Musisz podać swój adres e-mail") != -1 || response.indexOf("Wpisz poprawny adres e-mail") != -1 || response.indexOf("Podaj treść swojej wiadomości") != -1 || response.indexOf("Niestety nie udało się wysłać wiadomości") != -1) {
                    statusTxt.style.color = "red";
                } else {
                    form.reset();
                    statusTxt.style.color = "lightgreen";
                    setTimeout(() => {
                        statusTxt.style.display = "none";
                    }, 3000);
                }
                statusTxt.innerText = response;
                form.classList.remove('disabled');
            }
        }
        let formData = new FormData(form);
        xhr.send(formData);
    }

