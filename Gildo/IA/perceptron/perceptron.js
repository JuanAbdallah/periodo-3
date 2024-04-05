class Perceptron{
    weights = [0,0];
    lr = 0.1;

    constructor(numberWeights){
        this.weights = new Array(numberWeights);
        for(let i = 0;  i < this.weights.length; i++){
            this.weights[i] = random(-1,1);
        }
    }

    train(inputs, target){
        const guess = this.guess(inputs);
        const error = target - guess;
        
        for(let i = 0;  i < this.weights.length; i++){
            this.weights[i] = error * inputs[i] * this.lr;
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


}