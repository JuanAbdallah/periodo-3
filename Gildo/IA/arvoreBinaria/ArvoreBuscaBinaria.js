import No from "./No.js";

class ArvoreBuscaBinaria{
    raiz = null;

    constructor(valor){
        this.inserir(valor);
    }

    buscar(valor){
        let noAtual = this.raiz;

        while(noAtual !== null){
            if(valor == noAtual.valor){
                return true;
            } else if ( valor < noAtual.valor){
                noAtual = noAtual.filhoEsquerda;
            } else{
                noAtual = noAtual.filhoDireita;
            }
        }
        return false;
    }

    inserir(valor){
        const novoNo = new No(valor);
        if(this.raiz === null){
            this.raiz = novoNo;
            return this.raiz;
        }else{
            let noAtual = this.raiz;
            
            while(true){
                if(noAtual === novoNo){
                    return "Valor já existente";
                }
                else if(valor < noAtual.valor){
                    if(noAtual.filhoEsquerda === null){
                        noAtual.filhoEsquerda = novoNo;
                        return novoNo;
                    }
                noAtual = noAtual.filhoEsquerda;
                }
                else {
                    if(noAtual.filhoDireita === null){
                        noAtual.filhoDireita = novoNo;
                        return novoNo;
                    }
                    noAtual = noAtual.filhoDireita;
                }
                }

            }
        }
    }


export default ArvoreBuscaBinaria;