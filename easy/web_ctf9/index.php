<!DOCTYPE html>
<html>
<head>
	<title>Admin Login</title>
	<style type="text/css">
		img.avator{

			position: absolute;
			width: 15%;
			left: 47%;
			border-radius: 30%;
		}
		.container{
			padding: 16px;
		}
		body{
			margin: 50px 0px; 
			padding: 1px;
			background-color: yellow;
			text-align: center;
			background-color: black;
			color: green;

		}
		form{
			top: 40%;
			left: 40%;
			position: absolute;
			margin: 2px 0px;
			padding: 12px 20;
			border: 3px solid yellow;
			border-radius: 25px;
			box-shadow: 30%;
			width: 30%;
		}
		label,input[type=text]{
			margin-bottom: 10px;
			float: left; 
			padding: 12px 20px;
			margin: 20px 2px;
			display: inline-block;
			box-sizing: border-box;
		}
		label,input[type=password]{
			margin-bottom: 10px;
			float: left;
			padding: 10px 22px;
			margin: 20px 2px;
			display: inline-block;
			box-sizing: border-box;
		}

		button{
			background-color: lightgreen;
			color: grey;
			padding: 14px 10px;
			margin: 11px 5px;
			border: 1px;
			cursor: pointer;
			width: 30%;
			border-radius: 20px;
		}
		button:hover{
			opacity: 0.10;
		}
	</style>
</head>
<body>
	<img src="../img/nasa.png" class="avator" alt="Secret Sosity">
<form action="<?php $_SERVER['PHP_SELF']; ?>" method="POST">
		
	<div class="containner">
		<label for="uname"><b>Username:</b></label>
		<input type="text" placeholder="Enter username" name="uname" >
		<?php $name=$_REQUEST['uname'];?>
		<label for="psw" ><b>Password:</b></label>
		<input type="Password" name="psw" placeholder="Enter Password">
		<?php $pass=$_REQUEST['psw'];?>
		<button type="submit">Login</button>
		<?php 
		if ($name =="mani" && $pass=="mr_pro") {
			#Mani($name, $pass);
			echo "<!--WBCOECTF{F34f_H87aKj}-->"; 
			#setcookie("admin", "2");
		}/*else{
			setcookie("admin", "no");
		}*/
		?>
		<pre style="color: white;"><?php echo $user_error;?></pre>
</div>
</form>
</body>
</html>

		<?php/* 
		$name=$_REQUEST['uname'];
		$pass=$_REQUEST['psw'];
		if ($name == "mani") {
	}if ($pass == "mr_pro") {
			
		$admin_se=session_name('admin');

	}	*/
		 ?>