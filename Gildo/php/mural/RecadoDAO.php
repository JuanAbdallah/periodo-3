<?php

class RecadoDAO{
    public $id;
    public $nome;
    public $email;
    public $cidade;
    public $texto;

    function imprimelinhaTabela(){
        echo "
            <tr>
            <td> {$this->nome} </td>
            <td> {$this->email} </td>
            <td> {$this->cidade} </td>
            <td> {$this->texto} </td>
            <td> <a href=\"index.php?excluir={$this->id}\">X</td>
            <td> <a href=\"index.php?alterar={$this->id}\">X</td>
            </tr>\n
        ";
    }
}