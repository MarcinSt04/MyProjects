<?php 

$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$message = htmlspecialchars($_POST['msg']);

if(!empty($name)) {
    if(!empty($email)) {
        if(filter_var($email, FILTER_VALIDATE_EMAIL)) {

            if(!empty($message)) {
                $receiver = "test@test-domena.pl";
                $subject = "Nowa wiadomość od: $name <$email>";
                $body = "$message";
                $sender = "Od: $email";

                if(mail($receiver,$subject,$body,$sender)) {
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