<?php

$email = htmlspecialchars($_POST['useremail']);
$message = htmlspecialchars($_POST['userquestion']);

if(!empty($email)) {
    if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
        if(!empty($message)) {
            if(isset($_POST['privacy-policy'])) {
                $receiver = "kontakt@i-kosmos.pl";
                $subject = "Od: <$email>";
                $body = "E-mail: $email\n\nWiadomosc: $message";
                $sender = "Od: $email";
                if(mail($receiver,$subject,$body,$sender)) {
                    echo "Dziękujemy za kontakt z nami.";
                } else {
                    echo "Przykro nam, ale coś poszło nie tak...";
                }
            } else {
                echo "Musisz zapoznać się z naszą polityką prywatności!";
            }
        } else {
            echo "Wymagane jest podanie treści wiadomości!";
        }
    } else {
        echo "Wpisz poprawny adres e-mail!";
    }
} else {
    echo "Wymagane jest podanie adresu e-mail!";
}

?>