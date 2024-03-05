import Aresta from "./Arestas";
export default class Vertice{
    valor = "";
    adjacentes = [];

    constructor(valor){
        this.valor = valor
    }
    
    adicionarAresta(destino,peso){
        this.arestas.push(new Aresta(this,destino,peso))
    }
}