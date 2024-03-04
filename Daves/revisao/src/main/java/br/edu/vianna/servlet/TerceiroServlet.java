package br.edu.vianna.servlet;

import br.edu.vianna.model.Calculadora;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
@WebServlet("terceiro")
public class TerceiroServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resposta(req, resp);
    }

    private void resposta(HttpServletRequest req, HttpServletResponse resp) {
        try {
            String v1 = req.getParameter("cpValor1");
            String v2 = req.getParameter("cpValor2");
            String v3 = req.getParameter("btn");

            Calculadora c = new Calculadora();
            c.setValor1(Integer.parseInt(v1));
            c.setValor2(Integer.parseInt(v2));
            c.setOperador(v3);


            resp.sendRedirect("respostaRedirect.jsp?valor="+c.operacao()+"&nome=zezin");
        } catch (IOException e) {
            System.out.println("DEU RUIM");
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resposta(req, resp);
    }
}
