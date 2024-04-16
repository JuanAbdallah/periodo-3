<?php

require_once "Database.php";
require_once "Aluno.php";

$db = new Database();

$con = $db->getConnection();

$nome = 'Docinho';
$matricula = 9875;

$insertSql = "INSERT INTO tads.alunos (nome, matricula) VALUES( :nome, :matricula);";  
$stmt = $con->prepare($insertSql);
$stmt->bindValue(':nome',$nome);
$stmt->bindValue(':matricula',$matricula);

if($stmt->execute()){
    echo "Registo incluido!";
}
$nome = 'lindinha';
$matricula = 19875;

$sql = "SELECT id, nome, matricula from tads.alunos";


$alunos = $con->query($sql);

$alunos->setFetchMode(PDO::FETCH_CLASS|PDO::FETCH_PROPS_LATE,"Aluno");

echo "Quantidade de alunos: ".$alunos->rowCount();

foreach($alunos as $aluno){
    $aluno->imprimeDados();
}