<?php
require_once("UsuarioSessao.php");

$usul = new UsuarioSessao("Juquinha","juca");


$usul->salvar();
$usul->ler();

var_dump($usul);