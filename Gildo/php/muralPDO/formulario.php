<?php
require_once "RecadoDAO.php";

    if (isset($_GET["alterar"])):
        $id = $_GET["alterar"];
        $sql = "SELECT id, nome, email, cidade, texto FROM tads.recados WHERE id=:id;";

        $stmt = $con->prepare($sql);
        $stmt->bind_param('i',$id);
        
        if ($stmt->execute();):
            $result = $stmt->fetch();
        endif;

    endif;
?>
<form action="<?= isset($recado->id)?"?atualizar=$recado->id":""?>" method="post">
    Nome: 
    <input type="text" name="nome" id="nome" value="<?= $recado->nome??'' ?>"><br>
    E-mail: 
    <input type="text" name="email" id="email" value="<?= $recado->email??'' ?>"><br>
    Cidade: 
    <input type="text" name="cidade" id="cidade" value="<?= $recado->cidade??'' ?>"><br>
    Recado:
    <textarea name="recado" id="recado" cols="30" rows="10"><?= $recado->texto??'' ?></textarea><br>
    <input type="submit" value="<?= isset($recado->id)?"Atualizar":"Cadastrar"?>" name="enviar">
</form>

<?php

    if (isset($_POST["enviar"])):
        $nome = $_POST["nome"];
        $email = $_POST["email"];
        $cidade = $_POST["cidade"];
        $texto = $_POST["recado"];
        

        if ($_POST["enviar"] == "Cadastrar"):

            $sql = "INSERT INTO tads.recados
            (nome, email, cidade, texto)
            VALUES(:nome, :email, :cidade, :texto);";
            $stmt = $con->preprare($sql);
            $stmt->bindValue(":nome",$nome);
            $stmt->bindValue(":email",$email);
            $stmt->bindValue(":cidade",$cidade);
            $stmt->bindValue(":texto",$texto);
            $stmt->execute();


            
        elseif ($_POST["enviar"] == "Atualizar"):

            $id = $_GET["atualizar"];
            $sql = "UPDATE tads.recados SET nome=:nome, email=:$email, cidade=':$cidade, texto=:$texto WHERE id=:$id:;";
            $stmt = $con->preprare($sql);
            $stmt->bindvalueI(':id',$id);
        endif;
            
        $stmt->bindValue(":nome",$nome);
        $stmt->bindValue(":email",$email);
        $stmt->bindValue(":cidade",$cidade);
        $stmt->bindValue(":texto",$texto);
        $stmt->execute();
    endif;

?>