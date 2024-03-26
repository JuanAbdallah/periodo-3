export default class FilaAbertos{
    elementos = [];

    adicionar(rastreador){
        this.elementos.push(rastreador);
        this.adjacentes.sort((a,b)=>{
            if (a.custo < b.custo){
                return -1;
            }else if (a.custo > b.custo) {
                return 1;
            }

            return 0;
        });
    }
    
    retiraPrimeiro(){
        return this.elementos.shift();
    }


    contem(vertice){
        let verticeEncontrado = false;

        this.elementos.forEach( rastrador => {
            if( rastrador.vertice == vertice){
                verticeEncontrado = true;
            }
        })
        return verticeEncontrado;
    }
}