<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="./processa.php?id=<?= $$_GET["usuario"] ?>" method="post">
        <input type="text" name="nome" id="nome"> <br>
        <input type="radio" name="estCivil" value="solteiro">Solteiro 
        <input type="radio" name="estCivil" value="casado" >casado
        <br>
        <select name="selMes">
            <option value="janeiro">1</option>
            <option value="fevereiro">2</option>
            <option value="março">3</option>
            <option value="abril">4</option>
            <option value="maio">5</option>
            <option value="junho">6</option>
            <option value="julho">7</option>
            <option value="agosto">8</option>
            <option value="setembro">9</option>
            <option value="outubro">10</option>
            <option value="novebro">11</option>
            <option value="dezembro">12</option>

        </select><br>
        <input type="checkbox" name="extras[]" value="garagem">Garagem<br>
        <input type="checkbox" name="extras[]" value="piscina">piscina <br>
        <input type="checkbox" name="extras[]" value="jardim">jardim <br>
        <input type="hidden" name="user" value="<?=$_REQUEST["usuario"]??""; ?>">
        <input type="submit" value="Enviar">
    </form>
</body>
</html>