import Aresta from "./Arestas";
export default class Vertice{
    valor = "";
    adjacentes = [];
    heuristica = null

    constructor(valor, heuristica){
        this.valor = valor
        this.heuristica = heuristica;
    }
    
    adicionarAresta(destino,peso){
        this.arestas.push(new Aresta(this,destino,peso))
    }

    getOrdernados(){
        this.adjacentes.sort((a,b)=>{
            if(a.destino.heuristica < b.destino.heuristica){
                return -1;
            }else if(a.destino.heuristica > b.destino.heuristica){
                return -1;
            }
            return 0;
        });
        let ordernados = [];
        this.adjacentes.forEach(aresta =>{
            ordernados.push(aresta.destino);
        });
        return ordernados;
    }
}