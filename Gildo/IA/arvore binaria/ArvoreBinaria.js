import No from "./No.js";
import BuscaBProfundidade from "./BuscaBProfundidade.js";
import BuscaBLargura from "./BuscaBLargura.js";
class ArvoreBinaria{
    raiz = null;

    constructor(valor){
        this.raiz = new No(valor);
    }
    buscarPPreOrdem(){
        console.log("Busca em pré-ordem");
        BuscaBProfundidade.preOrdem(this.raiz);
    }
    buscarPInOrdem(){
        console.log("Busca em in-ordem");
        BuscaBProfundidade.inOrdem(this.raiz);
    }
    buscarPPosOrdem(){
        console.log("Busca em pos-ordem");
        BuscaBProfundidade.posOrdem(this.raiz);
    }

    buscarL(){
        console.log("Busca em largura:");
        BuscaBLargura.buscar(this.raiz);
    }
}
export default ArvoreBinaria;