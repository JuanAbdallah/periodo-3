<!DOCTYPE html>

<%@ page import="br.edu.vianna.model.Calculadora"%0>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="container">
    <div class="header">
        <h1>Calcular</h1>
    </div>
    <div class="body">
        <%
         String nome  = request.getParameter("nome");
         double calc = (Double)request.getAttribute("calc");
         Calculadora obj = (Calculadora)request.getAttribute("obj");
        %>
        <h1> <% out.print(nome); %> <br> resultado é <% out.print(obj.operacao()); %> </h1>
    </div>

    <script></script>
</div>

</body>


</html>