
 <html>
 <head>
   <title>idor</title>
   <style type="text/css">
     body{
      background-color: black;
      color: lightblue;
      text-align: center;
      font-family: monospace;
      font-size: 25px;
     }
     form{
      border: grey;
     }
     input{
      background-color: lightyellow;
      margin: 4%;
     }

   </style>
 </head>
<body>

<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
  Name: <input type="text" name="name" >
  <input type="submit" value="click">
</form>

<?php
  $cookie_name = "user";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
  $name = $_POST['name'];
  if ($name == "admin") {
    echo "Welcome <strong>admin</strong> flag not here";
    $co = "WBCOECTF{C0ki_c304d}";
    setcookie($cookie_name, $co, time() + (86400 * 30), "/");
    
  } else {
    echo "<strong>$name</strong> User Level"; 
    setcookie($cookie_name, $name, time() + (86400 * 30), "/");
    
  }
}


?>

</body>
</html> 