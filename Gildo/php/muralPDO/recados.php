<?php

if (isset($_GET["excluir"])):
    $id = $_GET["excluir"];
    $sql = "DELETE FROM tads.recados WHERE id= :id;";
    
    $stmt = $con->prepare($sql);
    $stmt->bind_param(':id',$id);
    $stmt->execute();
?>
    <p>Registro Excluido!</p>
<?php
    endif;
endif;

require_once "RecadoDAO.php";

$sql = 'SELECT id, nome, email, cidade, texto FROM tads.recados;';

if ($result = $con->query($sql)):
    if ($result->rowCount() > 0):
?>
    <table border=1>
        <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Cidade</th>
            <th>Recado</th>
            <th>Excluir</th>
            <th>Alterar</th>
        </tr>
<?php
    $result->setFetchMode(PDO::FETCH_CLASS|PDO::FETCH_PROPS_LATE,"RecadoDAO");

    while ($recado = $result->fetch()):
        $recado->imprimeLinhaTabela();
    endwhile;
?>
    </table>
<?php
    else:
?>
    <p>Nenhum registro encontrado!</p>
<?php        
    endif;
endif;
