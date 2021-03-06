<?php

$to      = 'info.geminus@gmail.com';
$subject = $_POST['subject'];
$message = $_POST['message'].'Feladó: '.$_POST['name'];
$message2 = 'Köszönjük. hogy emailt küldött. Az ön emailjének a szövege: '.$_POST['message'];
$headers = 'From:'.$_POST['email'] . "\r\n" .
    'Reply-To: '.$_POST['email'] . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
$headers2 = 'From:'.$to . "\r\n" .
    'Reply-To: '.$to . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
mail($_POST['email'], $subject, $message2, $headers2);

echo $_POST['name'].'<br>';
echo $_POST['email'].'<br>';
echo $_POST['subject'].'<br>';
echo $_POST['message'];

?>