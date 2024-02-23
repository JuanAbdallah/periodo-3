<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        for($i = 99; $i >= 0; $i--):?>
            <?= $i ?> patinhos foram passear Além das montanhas Para brincar A mamãe gritou:
            <?php for($j = 99 ; $j >= 0; $j--): ?>
                <?php if($j == 1): ?>
                    Quá!
                    <?php break; ?>

                    <?php endif;?>
                Quá,
                
                <?php endfor; ?>
            <br>Mas só quatro patinhos voltaram de lá
            <br>
            <?php endfor; ?>
    
    
</body>
</html>