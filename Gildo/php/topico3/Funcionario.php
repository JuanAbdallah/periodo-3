<?php
require_once("Pessoa.php");
require_once "web.php";
class Funcionario extends Pessoa implements Web{
    private int $matricula;

    public function __construct($nome,$salario,$matricula){
        parent::__construct($nome,$salario);
        $this->matricula = $matricula; 
    }

    public function __destruct(){
        echo "Destruindo o objeto ".$this->nome;
    }

    public function getSalario(){
        return $this->salario;
    }

    public function setSalario(float $valor){
        if($valor >= 1000){
        $this->salario = $salario;
        }
    }

    function imprime(){
        echo "<p>".$this->nome."</p>";
        echo "<p>".$this->salario."</p>";
        echo "<p>".$this->matricula."</p>";
    }

    function __get($nome){
        var_dump($nome);
        die();
    }

     function __set($nome, $valor){
        if($nome == "identidade"){
        $this->matricula = $valor;
        }
    }

    function __call($nome, $parametros){
        if($nome == "Identidade"){
            $this->matricula = $parametros[0];
       }
        
        
    }
}