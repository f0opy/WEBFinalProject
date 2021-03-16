<!DOCTYPE html>
<html>
<head>
	<title>Login/Register</title>
	<link rel="stylesheet" type="text/css" href="css/Login__Styles.css">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
	<?php

$link = mysqli_connect(
            'localhost',  /* Хост, к которому мы подключаемся */
            'root',       /* Имя пользователя */
            'root',   /* Используемый пароль */
            'dbforweb');     /* База данных для запросов по умолчанию */
if(isset($_POST['submit']))
{
    $err = [];

    // проверям логин
    if(!preg_match("/^[a-zA-Z0-9]+$/",$_POST['login']))
    {
        $err[] = "Логин может состоять только из букв английского алфавита и цифр";
    }

    if(strlen($_POST['login']) < 3 or strlen($_POST['login']) > 30)
    {
        $err[] = "Логин должен быть не меньше 3-х символов и не больше 30";
    }

    // проверяем, не сущестует ли пользователя с таким именем
    $query = mysqli_query($link, "SELECT user_id FROM users WHERE user_login='".mysqli_real_escape_string($link, $_POST['login'])."'");
    if(mysqli_num_rows($query) > 0)
    {
        $err[] = "Пользователь с таким логином уже существует в базе данных";
    }

    // Если нет ошибок, то добавляем в БД нового пользователя
    if(count($err) == 0)
    {

        $login = $_POST['login'];

        // Убераем лишние пробелы и делаем двойное хеширование
        $password = md5(md5(trim($_POST['password'])));

        mysqli_query($link,"INSERT INTO users SET user_login='".$login."', user_password='".$password."'");
        header("Location: login.php"); exit();
    }
    else
    {
        print "<b>При регистрации произошли следующие ошибки:</b><br>";
        foreach($err AS $error)
        {
            print $error."<br>";
        }
    }
}
?>
	<div class="container3">
		<div class="main__image"><img src="img/imageLogin.svg" alt=""></div>
		<div class="main__header"><h1>РЕГИСТРАЦИЯ</h1></div>
		<div class="input">
			<div class="input__text1">
				<input type="text" placeholder="Введите Имя" id="input_phone" class=".input1">
				<input type="text" placeholder="Введите Ваш E-mail" id="input_phone" class=".input1">
				<input type="password" placeholder="Введите Ваш пароль" id="input_phone" class=".input1">
				<input type="password" placeholder="Подтвердите Ваш пароль" id="input_phone" class=".input1">
				
	   		</div>
		</div>
		<a href="" class="btn2"><div class="btn__text">Отправить</div></a>
	</div>
<?php
	mysqli_close($link);
?>
</body>
</html>