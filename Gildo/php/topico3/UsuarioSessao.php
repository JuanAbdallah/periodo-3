<?php

class UsuarioSessao{
    public $login;
    public $nome;

    public function salvar(?string $nome = null){
        $this->nome = $nome;
        echo "<p> salvar </p>";
    }

    public function ler():string{
        echo "<p> Usuario Sessao </p>";
        return  $this->nome;
    }

    public function __construct($login,$nome) {
        $this->login = $login;
        $this->nome = $nome;
        echo "<p> Novo objeto </>";
    }
}