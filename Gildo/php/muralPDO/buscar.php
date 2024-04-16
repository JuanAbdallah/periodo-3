<form action="" method="post">
    <input type="text" name="buscar" id="buscar">
    <input type="submit" value="Buscar">
</form>

<?php

if (isset($_POST["buscar"])):
    $id = $_POST["buscar"];
    $sql = "SELECT id, nome, email, cidade, texto FROM tads.recados WHERE id=:id;";

    $stmt = $con->prepare($sql);
    $stmt->bind_param(':id',$id);
    $stmt->execute();
    
    $stmt->setFetchMode(PDO::FETCH_CLASS|PDO::FETCH_PROPS_LATE,"Aluno");
    if($stmt->execute()):
        while($recado = $stmt->fetch()):
            var_dump($recado);
        endwhile;
    endif;
   
                
endif;

