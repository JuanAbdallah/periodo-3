<?php

    class Aluno{
        
        public $id;
        public $nome;
        public $matricula;

     
        function construct__($id = null, $nome = null, $matricula = null){
            $this->id = $id;
            $this->nome = $nome; 
            $this->matricula = $matricula;
        }
        
    }