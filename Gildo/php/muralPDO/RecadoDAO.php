<?php
require_once "Recado.php";
require_once "interfaceDAO.php";

class RecadoDAO extends Recado implements interfaceDAO{
    
    public static function criar($dados){
        
        $con = DataBase::getConnection();

        $sql = "INSERT INTO tads.recados
        (nome, email, cidade, texto)
        VALUES(:nome, :email, :cidade, :texto);";
        $stmt = $con->preprare($sql);
        $stmt->bindValue(":nome",$nome);
        $stmt->bindValue(":email",$email);
        $stmt->bindValue(":cidade",$cidade);
        $stmt->bindValue(":texto",$texto);
        $stmt->execute();
    }
    public static function deletar($id){
        
    }
    public static function buscar($id){
        
    }
    public static function buscarTodos(){
        
    }
    public static function atualizar($id,$dados){
        
    }

    function imprimeLinhaTabela(){
        echo "
            <tr>\n
                <td> {$this->nome} </td>\n
                <td> {$this->email} </td>\n
                <td> {$this->cidade} </td>\n
                <td> {$this->texto} </td>\n
                <td> <a href=\"index.php?excluir={$this->id}\">X</a></td>
                <td> <a href=\"index.php?alterar={$this->id}\">X</a></td>
            </tr>\n
        ";        
    }
}