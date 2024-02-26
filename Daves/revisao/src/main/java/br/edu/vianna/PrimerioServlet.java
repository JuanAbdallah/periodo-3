package br.edu.vianna.servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet("/primeiro")

public class PrimerioServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resposta(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resposta(req, resp);
    }

    private void resposta(HttpServletRequest req, HttpServletResponse resp) {
        try {
            String v1 = req.getParameter("cpValor1");
            String v2 = req.getParameter("cpValor2");
            String btn = req.getParameter("btn");

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
                    "<h1>O resultado é:</h1>\n"+
                    "    </div>\n" +
                    "    <div class=\"footer\">\n" +
                    "        <h2>footer</h2>\n" +
                    "    </div>\n" +
                    "</div>\n" +
                    "\n" +
                    "<!--<script src=\"js/script.js\"></script>-->\n" +
                    "</body>\n" +
                    "</html>";
            resp.getWriter().println(html);
        } catch (IOException e) {
            System.out.println("erro!");
        }
    }
}
