<?php
$cookie_name = "flag";
$cookie_value = "WBCOECTF{You_g0t_c00kiE}";
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");
?>
<html>
<body>

<?php
if(!isset($_COOKIE[$cookie_name])) {
  echo " '" . $cookie_name . "' is not here!";
} else {
  echo "You can check <br><img src='cookie.jpeg'> <br>";
}
?>

</body>
</html>
