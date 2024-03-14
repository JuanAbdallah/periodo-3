
export default class Rastreador{
    vertice = null;
    anterior = null;

    constructor(vertice, anterior){
        this.vertice = vertice;
        this.anterior = anterior;
    }
    
    imprimeCaminho(){
        let atual = this;
        let saida;
        saida += atual.vertice.valor;
        
        while(atual.anterior != null){
            atual = atual.anterior;
            saida += "-->" + atual.vertice.valor;
        }
    }
        
    
}