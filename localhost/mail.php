<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';


$phone = $_POST['phone_number'];



$mail->isSMTP();                                     
$mail->Host = 'smtp.mail.ru';  																							
$mail->SMTPAuth = true;                              
$mail->Username = 'english.cards@bk.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'Astana2021'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('english.cards@bk.ru'); // от кого будет уходить письмо?
$mail->addAddress('meirambaiuliadil2002@gmail.com');     // Кому будет уходить письмо 

$mail->isHTML(true);                                  

$mail->Subject = 'Новый пользователь';
$mail->Body    =  ' Номер телефонa: ' .$phone ;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: index.html');
}
?>