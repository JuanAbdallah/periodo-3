<?php
  if(isset($_GET["alterar"])){
    $id = $_GET["alterar"];
    require_once "RecadoDAO.php";
$sql = "SELECT id, nome, email, cidade, texto FROM tads.recados WHERE ID = $id;";

if($result = $con->query($sql)):
    if($result->num_rows > 0):
      $recado = $result->fetch_object('RecadoDAO');
endif;
    endif;
  }
?>
<form action="<?= isset($recado->id)?"?atualizar=$recado->id":""?>" method="post">  
    Nome:
    <input type="text" name="nome" id="nome" value ="<?= $recado->nome??'' ?>"><br>
    E-mail:
    <input type="text" name="email" id="email" value ="<?= $recado->email??'' ?>"><br>
    Cidade:
    <input type="text" name="cidade" id="cidade" value ="<?= $recado->cidade??'' ?>"><br>
    Recado:
  <textarea name="recado" id="recado" cols="30" rows="10"><?= $recado->nome??'' ?></textarea><br>
  <input type="submit" value="<?= isset($recado->id)?"Atualizar":"Cadastrar"?>" name="enviar">
</form>

<?php

if (isset($_POST["enviar"])){
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $cidade = $_POST["cidade"];
    $texto = $_POST["recado"];



if ($_POST["enviar"] == "Cadastrar"){
  
  $sql = "INSERT INTO tads.recados(nome, email, cidade, texto) VALUES('{$nome}', '{$email}', '{$cidade}', '{$texto}');";

     

}else if($_POST["enviar"] == "Atualizar"){
    $id = $_GET["atualizar"];
    $sql = "UPDATE tads.recados
    SET nome='{$nome}', email='{$email}', cidade='{$cidade}', texto='{$texto}'
    WHERE id='{$id}';";
  }
  $con->query($sql);
}

?>