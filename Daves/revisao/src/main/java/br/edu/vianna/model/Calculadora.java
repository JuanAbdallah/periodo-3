package br.edu.vianna.model;

public class Calculadora {
    private int valor1, valor2;
    private ETipoOperador operador;

    public Calculadora() {
    }

    public Calculadora(int valor1, int valor2, ETipoOperador operador) {
        this.valor1 = valor1;
        this.valor2 = valor2;
        this.operador = operador;
    }

    public int getValor1() {
        return valor1;
    }

    public void setValor1(int valor1) {
        this.valor1 = valor1;
    }

    public int getValor2() {
        return valor2;
    }

    public void setValor2(int valor2) {
        this.valor2 = valor2;
    }

    public void setOperador(ETipoOperador operador) {
        this.operador = operador;
    }
    public void setOperador(String operador) {
        if(operador.equals("+")){
            this.operador = ETipoOperador.Mais;
        } else if (operador.equals("-")) {
            this.operador = ETipoOperador.Menos;
        }else if (operador.equals("*")) {
            this.operador = ETipoOperador.Multiplicacao;
        }else if (operador.equals("/")) {
            this.operador = ETipoOperador.Divisao;
        }
    }

    public double operacao(){
        if(operador.equals("+")){
            return valor1 + valor2;
        } else if (operador.equals("-")) {
            return valor1 - valor2;
        }else if (operador.equals("*")) {
            return valor1 * valor2;
        }else if (operador.equals("/")) {
            return valor1 / valor2;
        }else{
            return 0;
        }
    }
}
