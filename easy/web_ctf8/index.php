<html>
<head>
  <title>broken auth</title>
</head>
<style type="text/css">
body{
  background-color: black ;
  color: lightseagreen;
  text-align: center;
}
      input{
      width: 10%;
      padding: 10px 18px;
        margin: 8px 0;
        box-sizing: border-box;
    }
    button{
       background-color: darkcyan; /* Green */
        border: none;
       color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
    }
</style>
<body>

<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
  <label type="text" name="fname">Name:</label>
   <input type="text" name="fname">
  <input type="hidden" name="id" value="2">
  <button>submit</button>
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // collect value of input field
  $name = $_POST['fname'];
  $id = $_POST['id'];
  if ($id == 1) {
    echo "WBCOECTF{Br034n_a45K0N}";
  } else {
    echo $name;
  }
}
?>

</body>
</html>