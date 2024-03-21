<?php
    $db = new mysqli('mariadb','root','root','tads');
    $query = 'SELECT * FROM tads.alunos;';
    $result = $db->query($query);
    
    while ($linha = $result->fetch_assoc()) {
        echo"<p> {$linha["id"]} {$linha["nome"]} {$linha["matricula"]}</p>";
    }

    $db->close();