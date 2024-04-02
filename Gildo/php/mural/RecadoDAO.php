<?php

class RecadoDAO{
    private $id;
    private $nome;
    private $email;
    private $cidade;
    private $texto;

    function imprimelinhaTabela(){
        echo "
            <tr>
            <td> {$this->nome} </td>
            <td> {$this->email} </td>
            <td> {$this->cidade} </td>
            <td> {$this->texto} </td>
            <td> <a href=\"index.php?excluir={$this->id}\">X</td>
            </tr>\n
        ";
    }
}