<!DOCTYPE html>
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
        <!--JSP - Java Server Pages -->
        <%
        String v1 = request.getParameter("valor");
        String nome = request.getParameter("nome");
        %>
        <h1>Senhor <% out.print(nome); %> O RESULTADO É: <% out.print(v1); %> </h1>
    </div>

    <script></script>
</div>

</body>


</html>