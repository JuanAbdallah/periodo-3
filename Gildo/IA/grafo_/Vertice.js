import Arestas from "./Arestas.js";

export default class Vertice{
    
    valor = "";
    adjacentes = [];
    heuristica = 0;

    constructor(valor,heuristica){
        this.valor = valor;
        this.heuristica = heuristica;
    }


    addAresta(destino,peso) {
        this.adjacentes.push(new Arestas(this,destino,peso));
    }

    getOrdenados(){
        this.adjacentes.sort((a,b)=>{
            if(a.destino.heuristica < b.destino.heuristica){
                return -1;
            } else if(a.destino.heuristica > b.destino.heuristica) {
                return 1;
            }else{
                return 0;
            }
        });

        let ordenados = [];
        this.adjacentes.forEach( aresta => {
            ordenados.push(aresta.destino);
        });

        return ordenados;
    }
}