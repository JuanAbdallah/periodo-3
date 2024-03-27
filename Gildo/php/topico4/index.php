<?php

require_once "DataBase.php";

$db = new Database();

$con = $db->getConnection();


$sql =  'SELECT matricula, id, nome  FROM tads.alunos;';

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado</title>
</head>
<body>
    <table border=1 >
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>matricula</th>
        </tr>
<?php
if ($result = $con->query($sql)): 
    while ($row = $result->fetch_row()):
?>
    <tr>
        <td><?= $row[0]?></td>
        <td><?= $row[1]?></td>
        <td><?= $row[2]?></td>
    </tr>
<?php
    endwhile;
endif;
?>
    </table>
</body>
</html>



<?php

$db->closeConnection();

?>