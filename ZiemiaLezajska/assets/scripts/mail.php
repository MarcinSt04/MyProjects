<?php
$username = htmlspecialchars($_POST['fullname']);
$useremail = htmlspecialchars($_POST['useremail']);
$message = htmlspecialchars($_POST['message']);

if (!empty($username)) {

    if (!empty($useremail)) {

        if (filter_var($useremail, FILTER_VALIDATE_EMAIL)) {

            if (!empty($message)) {

                $receiver = "ziemia.lezajska@wp.pl"; //DO KOGO WYSYŁAMY
                $subject = "Od: " . $name . " <" . $useremail . ">";
                $body = "Treść wiadomości: " . $message;
                $sender = "Od: " . $useremail;

                if (mail($receiver, $subject, $body, $sender)) {
                    echo "Wiadomość została wysłana poprawnie!";
                } else {
                    echo "Niestety nie udało się wysłać wiadomości";
                }
            } else {
                echo "Podaj treść swojej wiadomości";
            }
        } else {
            echo "Wpisz poprawny adres e-mail";
        }
    } else {
        echo "Musisz podać swój adres e-mail";
    }
} else {
    echo "Musisz podać swoje imię";
}
