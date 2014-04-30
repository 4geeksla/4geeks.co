<?php
	header("Content-Type: application/json; "); 

	$email = $_POST['email'];
	$title = $_POST['title'];
	$message = $_POST['message'];

	$response = new stdClass();

	if(empty($email) || empty($title) || empty($message)){
		$response->status = "validation-error";
		$response->code = 400;
		echo json_encode($response);
		return;
	}

	$head = 'From: form-contact@4geeks.co'."\r\n". 
			'Reply-To: '.$email." \r\n".
			// 'Cco: contact@4geeks.co' . "\r\n".
			'X-Mailer: PHP/'.phpversion();

	if(mail('contact@4geeks.co',$title, $message, $head)){
		$response->status = "success";
		$response->code = 200;
	}else{
		$response->status = "mail-error";
		$response->code = 400;
	}

	switch($response->code){
		case 200:{
			header('HTTP/1.0 200 OK');
			break;
		}
		case 400:{
			header('HTTP/1.0 400 Bad Request');
			break;
		}
		default:{
			header('HTTP/1.0 200 OK');
			break;
		}
	}	

	echo json_encode($response);
	return;
?>
