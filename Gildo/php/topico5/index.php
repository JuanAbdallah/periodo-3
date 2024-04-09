<?php

require_once "Database.php";
require_once "Aluno.php";

$db = new Database();

$con = $db->getConnection();

$sql = "SELECT id,nome,matricula FROM tads.alunos";

$alunos = $con->query($sql);

$alunos->setFetchMode(PDO::FETCH_CLASS|PDO::FETCH_PROPS_LATE,"Aluno");

echo "Quantidade de alunos: ".$alunos->rowCount();

foreach($alunos as $aluno){
    var_dump($aluno);
}