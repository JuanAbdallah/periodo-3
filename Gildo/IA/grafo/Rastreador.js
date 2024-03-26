export default class Rastreador{
    vertice = null;
    anterior = null;

    constructor(vertice,anterior, heuristica){
        this.vertice = vertice;
        this.anterior = anterior;
        this.custo = heuristica;
        if(anterior != null){
            this.custo = this.anterior.vertice.buscarAresta(this.vertice).peso;
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

    retornaCusto(){
        let atual = this;
        let custo = 0;
        while(atual.anterior != null){
            custo += atual.custo;
            atual = atual.anterior;
        }
    }
}