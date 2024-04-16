
class Perceptron{
    weights = [];
    lr = 0.1;
    consecutiveHints = 0;//quantidade de acertos

    constructor(numberWeigths){
        this.weights = new Array(numberWeigths)
        for(let i = 0;  i < this.weights.length; i++){
            this.weights[i] = random(-1,1);
        }
    }

    train(input, target){
        const guess = this.guess(input);
        const error = target - guess;
        for(let i = 0;  i < this.weights.length; i++){
            this.weights[i] += error * input[i]*this.lr;
        }
        if(error == 0){//se acertar ele adicionará um acerto, mas se errar ele irá zerar a contagem
            this.consecutiveHints++;    
            console.log(this.consecutiveHints);
        }else{
            this.consecutiveHints = 0;
        }
    }

    guess(inputs){
        let sum = 0;

        for(let i = 0; i < this.weights.length; i++){
            sum += inputs[i] * this.weights[i];
        }
        const output = this.sign(sum);
        
        return output;
    }

    sign(num){
        return num >= 0 ? 1 : -1;
    }

    guessY(x){
        let w0 = this.weights[0];
        let w1 = this.weights[1];
        let w2 = this.weights[2];

        return -(w2/w1) - (w0/w1) * x;
    }

}