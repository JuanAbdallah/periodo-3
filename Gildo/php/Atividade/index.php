<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post"> 
    nome:
    <input type="text" name="nome" id=""><br>
    email:
    <input type="text" name="email" id=""><br>
    endereço:
    <input type="text" name="endereco" id=""><br>
    profissão:
    <select name="profissao">
        <option value="">Engenheiro de Software</option>
        <option value="">Analista de Segurança de Informação</option>
        <option value="">Analista de Sistemas</option>
        <option value="">Administrador de Sistemas</option>
        <option value="">Administrador do banco de dados (DBA)</option>
        <option value="">Gestor de tecnologias da informação</option>
        <option value="">Arquiteto de Redes</option>
        <option value="">Desenvolvedor</option>
    </select  >
    <br>
    genero:
    <input type="radio" name="genero" id="">masculino
    <input type="radio" name="genero" id="">feminino
    <input type="radio" name="genero" id="">outro

    <br>

    area de interesse:<br>
    <input type="radio" name="areaI" id="">Banco de dados <br>
    <input type="radio" name="areaI" id="">Engenharia de software<br>
    <input type="radio" name="areaI" id="">Redes de computadores<br>
    <input type="radio" name="areaI" id="">Desenvolvimento de jogos<br>
    <input type="radio" name="areaI" id="">Programação back-end<br>
    <input type="radio" name="areaI" id="">Programação front-end<br>
    <input type="radio" name="areaI" id="">Mineração de dados<br>

    Fale conosco:
    <input type="text" name="faleC" id=""><br>
    Deseja receber nossas promoções?
    <input type="checkbox" name="promo" id="">
    <br>
    senha:
    <input type="password" name="senha" id="">
    <br>confirmar senha:
    <input type="password" name="senha" id="">
    <input type="submit" value="enviar">
    </form>
</body>
</html>