<?php
    $quadrado = 0;
    for($i = 1; $i <= 20 ;$i++){
        $quadrado = $i * $i;
        echo "O quadrado de $i = <b>$quadrado</b><br>"; 
    }
    echo "<br><br>";
    $quadrado = 0;
    $i = 1;
    while($i <= 20){
        $quadrado = $i * $i;
        echo "O quadrado de $i = <b>$quadrado</b><br>"; 
        $i++;
    }
?>