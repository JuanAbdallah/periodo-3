export default class FilaAbertos{
    elementos = [];

    adicionar(rastreador){
        this.elementos.push(rastreador);
        this.ordenaFila();
    }
    
    retiraPrimeiro(){
        return this.elementos.shift();
        
    }

    ordenaFila(){
        this.elementos.sort((a,b)=>{
            if(a.retornaCustoTotal() < b.retornaCustoTotal()){
                return -1;
            }else if (a.retornaCustoTotal() > b.retornaCustoTotal()){
                return 1;
            }
            return 0
        })
    
    }


    buscaRastreador(vertice){
        let RastreadorEncontrado = false;

        this.elementos.forEach( rastrador => {
            if( rastrador.vertice == vertice){
                RastreadorEncontrado = rastrador;
            }
        })
        return RastreadorEncontrado;
    }

    substituirRastreador(rastradorAntigo,rastreadorNovo){
        let indeiceAntigo = this.elementos.indexOf(rastradorAntigo);

        this.elementos[indeiceAntigo] = rastreadorNovo;

        this.ordenaFila();
    }
}