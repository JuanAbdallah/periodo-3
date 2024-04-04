<form action="" method="post">
    Buscar:
    <input type="text" name="buscar" id="buscar">
    <input type="submit" value="Buscar">
</form>

<?php

if(isset($_POST["buscar"])):
    $id = $_POST["buscar"];
    $sql = "SELECT id, nome, email, cidade, texto FROM tads.recados WHERE id=?";

    $stmt = $con->prepare($sql);
    $stmt->bind_param('i',$id);

    $stmt->execute();

    echo $sql;

    if($result = $stmt->get_result()):
        if ($result->num_rows > 0):
            while($recado = $result->fetch_object('RecadoDAO')):
                var_dump($recado);
            endwhile;
        endif;
    endif;
endif;