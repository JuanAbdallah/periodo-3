package br.edu.vianna.servlet;
import br.edu.vianna.model.Calculadora;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet(urlPatterns = {"/primeiro"})  // "primeiro" chamado retorna a resposta (response), nome pelo que é reconhecido
public class PrimeiroServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //super.doGet(req, resp);
        resposta(req,resp);
    }

    private void resposta(HttpServletRequest req, HttpServletResponse resp) {
        try{

            String v1 = req.getParameter("cpValor1");
            String v2 = req.getParameter("cpValor2");
            String v3 = req.getParameter("btn");

            Calculadora c = new Calculadora();
            c.setValor1(Integer.parseInt(v1));
            c.setValor2(Integer.parseInt(v2));
            c.setOperador(v3);
            // 1° forma de resposta, nada prático
            String html = "<!DOCTYPE html>\n" +
                    "<html lang=\"en\">\n" +
                    "<head>\n" +
                    "    <meta charset=\"UTF-8\">\n" +
                    "    <title>Title</title>\n" +
                    "    <link rel=\"stylesheet\" href=\"css/style.css\">\n" +
                    "</head>\n" +
                    "<body>\n" +
                    "<div class=\"container\">\n" +
                    "    <div class=\"header\">\n" +
                    "        <h1>Calcular</h1>\n" +
                    "    </div>\n" +
                    "    <div class=\"body\">\n" +

                    " <h1>O resultado é "+c.operacao()+"</h1> " +

                    "    </div>\n" +
                    "\n" +
                    "    <div class=\"footer\">\n" +
                    "        <h2>footer</h2>\n" +
                    "    </div>\n" +
                    "</div>\n" +
                    "    <script src= \"./script.js\"></script>\n" +
                    "</body>\n" +
                    "\n" +
                    "\n" +
                    "</html>\n";
            resp.getWriter().println(html);
        }catch (IOException e){
            System.out.println("Deu ruim");
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //super.doPost(req, resp);
        resposta(req,resp);
    }
}
