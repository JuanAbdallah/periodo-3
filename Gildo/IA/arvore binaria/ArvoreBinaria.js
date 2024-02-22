import No from "./No.js";
import BuscaBProfundidade from "./BuscaBProfundidade.js";
class ArvoreBinaria{
    raiz = null;

    constructor(valor){
        this.raiz = new No(valor);
    }
    buscarPPreOrdem(){
        console.log("Busca em pré-ordem");
        BuscaBProfundidade.preOrdem(this.raiz);
    }
    buscarIInOrdem(){
        console.log("Busca em in-ordem");
        BuscaBProfundidade.inOrdem(this.raiz);
    }
    buscarPPosOrdem(){
        console.log("Busca em pos-ordem");
        BuscaBProfundidade.posOrdem(this.raiz);
    }
}
export default ArvoreBinaria;