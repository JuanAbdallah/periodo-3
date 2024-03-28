export default class Rastreador{
    vertice = null;
    anterior = null;
    heuristica = null;
    custo = 0;

    constructor(vertice,anterior, heuristica){
        this.vertice = vertice;
        this.anterior = anterior;
        this.heuristica = heuristica;
        
        if(anterior != null){
            this.custo = this.anterior.custo + this.anterior.vertice.buscarAresta(this.vertice).peso;
        }
    }

    imprimeCaminho(){
        let atual = this;
        let saida = atual.vertice.valor;

        while (atual.anterior != null) {
            atual = atual.anterior;
            saida += "-->"+atual.vertice.valor;
        }
        console.log(saida+"\n");
    }

    retornaCustoTotal(){
        this.custo + this.heuristica;
    }
}