import Aresta from "./Aresta.js";

export default class Vertice{
    valor = "";
    heuristica = null;
    adjacentes = [];

    constructor(valor, heuristica){
        this.valor = valor;
        this.heuristica = heuristica;
    }

    buscarAresta(vertice){
        let arestaEncontrada = null;
        this.adjacentes.forEach(aresta=>{
            if(aresta.destino == vertice){
                arestaEncontrada = aresta;
            }
        });
        return arestaEncontrada;
    }

    adicionarAresta(destino,peso){
        this.adjacentes.push(new Aresta(this, destino,peso))
    }

    getOrdenados(){
        this.adjacentes.sort((a,b)=>{
            if (a.destino.heuristica < b.destino.heuristica){
                return -1;
            }else if (a.destino.heuristica > b.destino.heuristica) {
                return 1;
            }

            return 0;
        });

        let ordenados = [];
        this.adjacentes.forEach( aresta=>{
            ordenados.push(aresta.destino);
        })

        return ordenados; //vertices adjacentes ordenados pela heuristica
    }
}