class Perceptron{
    weights = [0,0];
    constructor(){
        for (let i = 0; i < array.length; i++) {
            this.weights[i] = random(-1,1);
            
        }
    }

    guess(inputs){
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            this.weights[i] = random(-1,1);
            sum += inputs[i] * this.weights[i];
        }
        const output = sing(sum);
        return output;
    }
}