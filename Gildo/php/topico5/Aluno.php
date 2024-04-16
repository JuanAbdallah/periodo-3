<?php

    class Aluno{
        
        public $id;
        public $nome;
        public $matricula;
        public $ativo;

     
        function construct__($id = null, $nome = null, $matricula = null, $ativo = true){
            $this->id = $id;
            $this->nome = $nome; 
            $this->matricula = $matricula;
            $this->ativo = $ativo;
        }
        
        function imprimeDados(){
            echo "<p> ID: {$this->id}<br> nome: {$this->nome}<br> matricula: {$this->matricula}<br> ";
        }
    }