<?php

require_once "Database.php";


$db = new Database();

$con = $db->getConnection();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="formulario">
<?php 
    require "formulario.php";
?>
    </div>
    <div class="recados">
<?php 
    require "recados.php";
    require "buscar.php";
?>        
    </div>
</body>
</html>

<?php

$db->closeConnection();