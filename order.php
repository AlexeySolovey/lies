<?php
header('Content-type: text/html; charset=utf-8');
define("EMAIL_TO", "solovey_alexey3@mail.ru");
define("EMAIL_FROM", "From: Детекция Лжи <admin@lies.in.ua>");
define("SUBJECT", "Новая заявка с сайта");

$error = false;

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["formName"]) && !empty($_POST["formName"])){

	if ($_POST["formName"] == "form"){
		if ( isset($_POST["name"]) && !empty($_POST["name"]) ){
			$name = trim( strip_tags($_POST["name"]) );
		} else {
			$error = true;
		}

		if ( isset($_POST["phone"]) && !empty($_POST["phone"]) ){
			$phone = trim( strip_tags($_POST["phone"]) );
		} else {
			$error = true;
		}

		if ( isset($_POST["email"]) && !empty($_POST["email"]) ){
			$email = trim( strip_tags($_POST["email"]) );
		} else {
			$error = true;
		}

		if ( isset($_POST["birthday"]) && !empty($_POST["birthday"]) ){
			$birthday = trim( strip_tags($_POST["birthday"]) );
		} else {
			$error = true;
		}

		if (!$error){
            //регистрация
			$messageToManager = "<p>Время отправки: ".date("d.m.Y, H:i:s")."</p>";
			$messageToManager .= "<p>Имя пользователя: $name</p>";
			$messageToManager .= "<p>Телефон пользователя: $phone</p>";
			$messageToManager .= "<p>E-mail пользователя: $email</p>";
			$messageToManager .= "<p>Дата рождения: $birthday</p>";

			$messageToFile = "Время отправки: ".date("d.m.Y, H:i:s")."\r\n";
			$messageToFile .= "Имя пользователя: $name\r\n";
			$messageToFile .= "Телефон пользователя: $phone\r\n";
			$messageToFile .= "E-mail пользователя: $email\r\n";
			$messageToFile .= "Дата рождения: $birthday\r\n";
			$messageToFile .= "==================================================\r\n\r\n";

			$messageToClient = "<p>Здравствуйте, $name!</p><br>";
			$messageToClient .= "<p>Вы оставляли заявку на Курс Детекции Лжи!</p><br>";
			$messageToClient .= "<p>Для внесения предоплаты и завершения регистрации перейдите по ссылке http://lies.in.ua/pay.php</p><br>";
			$messageToClient .= "<p>Будут вопросы - пишите!</p><br><br>";
			$messageToClient .= "<p>Время отправки: ".date("d.m.Y, H:i:s")."</p>";
			$messageToClient .= "<p>Имя пользователя: $name</p>";
			$messageToClient .= "<p>Телефон пользователя: $phone</p>";
			$messageToClient .= "<p>E-mail пользователя: $email</p>";
			$messageToClient .= "<p>Дата рождения: $birthday</p>";
			$messageToClient .= "<p>С сайта: http://lies.in.ua</p><br>";
			$messageToClient .= "<p>С уважением</p>";
			$messageToClient .= "<p>Администратор</p>";
			$messageToClient .= "<p>Михаил Бойко</p>";
			$messageToClient .= "<p>+38 (067) 730-67-83</p>";
			$messageToClient .= "<p>http://lies.in.ua</p>";
		}

	} else if ($_POST["formName"] == "form2"){
		if ( isset($_POST["t_name"]) && !empty($_POST["t_name"]) ){
			$name = trim( strip_tags($_POST["t_name"]) );
		} else {
			$error = true;
		}

		if ( isset($_POST["t_email"]) && !empty($_POST["t_email"]) ){
			$email = trim( strip_tags($_POST["t_email"]) );
		} else {
			$error = true;
		}

		if ( isset($_POST["t_mess"]) && !empty($_POST["t_mess"]) ){
			$mess = trim( strip_tags($_POST["t_mess"]) );
		} else {
			$error = true;
		}
		
		if (!$error){
            //сообщение
			$messageToManager = "<p>Время отправки: ".date("d.m.Y, H:i:s")."</p>";
			$messageToManager .= "<p>Имя пользователя: $name</p>";
			$messageToManager .= "<p>E-mail пользователя: $email</p>";
			$messageToManager .= "<p>Сообщение пользователя: $mess</p>";

			$messageToFile = "Время отправки: ".date("d.m.Y, H:i:s")."\r\n";
			$messageToFile .= "Имя пользователя: $name\r\n";
			$messageToFile .= "E-mail пользователя: $email\r\n";
			$messageToFile .= "Сообщение пользователя: $mess\r\n";
			$messageToFile .= "==================================================\r\n\r\n";

			$messageToClient = "<p>Здравствуйте, $name!</p><br>";
			$messageToClient .= "<p>Вы оставляли заявку на Курс Детекции Лжи!</p><br>";
			$messageToClient .= "<p>Для внесения предоплаты и завершения регистрации перейдите по ссылке http://lies.in.ua/pay.php</p><br>";
			$messageToClient .= "<p>Будут вопросы - пишите!</p><br><br>";
			$messageToClient .= "<p>Время отправки: ".date("d.m.Y, H:i:s")."</p>";
			$messageToClient .= "<p>Имя пользователя: $name</p>";
			$messageToClient .= "<p>E-mail пользователя: $email</p>";
			$messageToClient .= "<p>Сообщение пользователя: $mess</p>";
			$messageToClient .= "<p>С сайта: http://lies.in.ua</p><br>";
			$messageToClient .= "<p>С уважением</p>";
			$messageToClient .= "<p>Администратор</p>";
			$messageToClient .= "<p>Михаил Бойко</p>";
			$messageToClient .= "<p>+38 (067) 730-67-83</p>";
			$messageToClient .= "<p>http://lies.in.ua</p>";
		}
	} else {
		$error = true;
	}

	if (!$error){
		$headers = "Content-type: text/html; charset=utf-8 \r\n";
		$headers .= EMAIL_FROM."\r\n";

		$error = !mail(EMAIL_TO, SUBJECT, $messageToManager, $headers);

		if (!$error){
			file_put_contents("orders.txt", $messageToFile, FILE_APPEND);
			$error = !mail($email, "Re: Детекция Лжи: регистрация", $messageToClient, $headers);
		}

	}
} else {
	$error = true;
}


if (!$error){
	if($_POST["formName"] == "form") header('Location: http://lies.in.ua/pay.php');
	if($_POST["formName"] == "form2") header('Location: thank.html');
}
?>