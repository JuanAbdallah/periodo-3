<?php
require_once("UsuarioSessao.php");
class UsuarioSessaoPermissao extends UsuarioSessao{
    public $permissao;
    public function __construct($nome,$login,$permissao){
        parent::__construct($nome,$login);
        $this->nome = $nome;
        
        echo "<p>Nova Permissão</p>";
    }

    public function ler():string{
        echo "<p> ler UsuarioSessaoPermissao </p>";
        return  $this->nome;
    }
}