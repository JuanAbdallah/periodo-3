<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Embutido</title>
    <style>
        .blue{
            color:blue;
        }
    </style>
</head>
<body>
    <div class='principal'>
        <h1>Quadrados</h1>
        <p>
            <?php
                 $quadrado = 0;
                 $i = 1;
                 while($i <= 20){
                     $quadrado = $i * $i;
                     echo "O quadrado de $i = <b>$quadrado</b><br>\n"; 
                     $i++;
                 }
                 $nome = "Juan";
                 $sobrenome = "Oliveira";
                 
            ?>
            <h2 class = 'blue'><?php echo "$nome $sobrenome"?></h2>  
        </p>
    </div>
</body>
</html>