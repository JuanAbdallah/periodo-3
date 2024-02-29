package br.edu.vianna.model;

public class Calculadora {

    private int valor1, valor2;
    private ETipoOperador operador;

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

    public ETipoOperador getOperador() {
        return operador;
    }

    public void setOperador(String operador) {
        if(operador.equals("+")){
            this.operador = ETipoOperador.Mais;
        }
        else if(operador.equals("-")){
            this.operador = ETipoOperador.Menos;
        }
        else if(operador.equals("*")){
            this.operador = ETipoOperador.Multiplicacao;
        }
        else if(operador.equals("/")){
            this.operador = ETipoOperador.Divisao;
        }
        else {
            this.operador = ETipoOperador.Mais;
        }
    }

    public double operacao(){
        if (operador == ETipoOperador.Mais){
            return valor1 + valor2;
        }
        else if (operador == ETipoOperador.Menos){
            return valor1 - valor2;
        }
        else if(operador == ETipoOperador.Divisao){
            return (double) valor1/valor2;
        }
        else if(operador == ETipoOperador.Multiplicacao){
            return valor1 * valor2;
        }
        else {
            return 0;
        }
    }
}
