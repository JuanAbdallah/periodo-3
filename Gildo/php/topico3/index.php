<?php

// require_once("Pessoa.php");
// require_once("Funcionario.php");
// require_once "Departamento.php";

// require_once "./Financas/Conta.php";
// require_once "./Seguranca/Conta.php";

use Financa\Conta as ContaF;
use Seguranca\Conta as ContaS;

spl_autoload_register(function ($classe){
    
    echo "fez o require do {$classe}.php";
    require_once str_replace('\\','/',$classe.'.php');
});

$func1 = new Funcionario("juca",2000,123);
$func2 = new Funcionario("maria",2000,1234);

$dep = new Departamento();

$dep->addFuncionario($func1);
$dep->addFuncionario($func2);

$fin = new ContaF();
$seg = new ContaS();

