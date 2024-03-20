<?php

abstract class Pessoa{
    protected float $salario;
    protected string $nome;

    public function __construct($nome,$salario){
        $this->nome = $nome;
        $this->salario = $salario;
    }

    abstract public function getSalario();
    abstract public function setSalario(float $valor);
    

    public function imprimeNome(){
        echo "<p>".$this->nome."</p>";
    }
}
