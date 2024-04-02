<form action="" method="post">
    Nome:
    <input type="text" name="nome" id="nome"><br>
    E-mail:
    <input type="text" name="email" id="email"><br>
    Cidade:
    <input type="text" name="cidade" id="cidade"><br>
    Recado:
  <textarea name="recado" id="recado" cols="30" rows="10"></textarea><br>
  <input type="submit" value="Cadastrar" name="cadastrar">
</form>

<?php

if (isset($_POST["cadastrar"])){
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $cidade = $_POST["cidade"];
    $texto = $_POST["recado"];
    $sql = "INSERT INTO tads.recados(nome, email, cidade, texto) VALUES('{$nome}', '{$email}', '{$cidade}', '{$texto}');";

        $con->query($sql);

}
?>