class No{
    valor = '';
    filhoDireita = null;
    filhoEsquerda = null;

    constructor(valor){
        this.valor = valor;
    }
    adicionaFilhoEsquerda(no){
        if(no instanceof No){
            this.filhoEsquerda = no;
        }else{
            throw new Error("Filho deve ser nó");
        }
    }
    adicionaFilhoDireita(no){
        if(no instanceof No){
            this.filhoDireita = no;
        }else{
            throw new Error("Filho deve ser nó");
        }
    }
}
export default No;