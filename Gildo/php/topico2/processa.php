<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>o nome é <?= $_REQUEST["nome"]?></p>
    <p>o estado civil é  <?= $_REQUEST["estCivil"]?></p>
    <p>o nome é <?= $_REQUEST["selMes"]?></p>
    <p>os extras são:</p>
    <?php 
        foreach ($_REQUEST["extras"] as $key):  
    ?>
    <?= $key ?>
    <?php endforeach; ?>
    <p>usuario: <?= $_REQUEST["user"] ?></p>

</body>
</html>