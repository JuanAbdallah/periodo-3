import Rastreador from "./Rastreador.js";

export default class Grafo{
    inicio = null;
    meta = null;

    constructor(inicio, meta){
        this.inicio = inicio;
        this.meta = meta;
    }

    buscarMelhorEscolha(){
      let fila = []; //Array de rastreadores que vão indicar o caminho
      let ordenados = []; //Array de verticies adjacentes ordenados pela heuristica getOrdenados()
      let atual;//Rastreador atual

      fila.push(new Rastreador(this.inicio,null));

      while(fila.length >0){
        
        atual = fila.shift();
        if(atual.vertice == this.meta){
            return atual;
        }else{
            ordenados = atual.vertice.getOrdenados();
            ordenados.forEach(adjacente => {
              fila.push(new Rastreador(adjacente,atual));
            });
        }
      }
      return null;
    }
}