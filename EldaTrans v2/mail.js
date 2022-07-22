const form = document.querySelector('form');
const statusTxt = form.querySelector('#status');

form.onsubmit = e => {
  e.preventDefault();
  statusTxt.style.color = 'rgb(250, 175, 64)';
  statusTxt.style.display = 'block';
  statusTxt.innerText = 'Wysyłanie wiadomości...';
  form.classList.add('disabled');

  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'mail.php', true);

  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = xhr.response;
      if (
        response.indexOf('Prosimy podać swoje imię') != -1 ||
        response.indexOf('Prosimy podać swój adres email') != -1 ||
        response.indexOf('Adres email jest nieprawidłowy') != -1 ||
        response.indexOf('Prosimy podać treść wiadomości') != -1 ||
        response.indexOf('Nie udało się wysłać wiadomości') != -1
      ) {
        statusTxt.style.color = 'red';
      } else {
        form.reset();
        statusTxt.style.color = 'green';
        setTimeout(() => {
          statusTxt.style.display = 'none';
        }, 3000);
      }
      statusTxt.innerText = response;
      form.classList.remove('disabled');
    }
  };
  let formData = new FormData(form);
  xhr.send(formData);
};
