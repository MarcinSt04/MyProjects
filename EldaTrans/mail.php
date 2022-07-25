<?php 

$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$message = htmlspecialchars($_POST['msg']);

if(!empty($name)) {
    if(!empty($email)) {
        if(filter_var($email, FILTER_VALIDATE_EMAIL)) {

            if(!empty($message)) {
                $receiver = "kaniadamian634@gmail.com";
                $subject = "[Elda-Trans] Nowa wiadomość od: $name";
                $body = "$message";
                $header = "From: $email \nContent-Type:".
                ' text/plain;charset="UTF-8"'.
                "\nContent-Transfer-Encoding: 8bit";

                if(mail($receiver,$subject,$body,$header)) {
                    echo "Wiadomość została wysłana poprawnie";
                } else {
                    echo "Nie udało się wysłać wiadomości";
                }

            } else {
                echo "Prosimy podać treść wiadomości";
            }

        } else {
            echo "Adres email jest nieprawidłowy";
        }

    } else {
        echo "Prosimy podać swój adres email";
    }

} else {
    echo "Prosimy podać swoje imię";
}


?>