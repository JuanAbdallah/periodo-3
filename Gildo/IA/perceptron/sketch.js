
let perceptron;

let points = new Array(100);
<<<<<<< HEAD
let points2 = new Array(100);
=======

>>>>>>> 3c98977bf48b6dd42600760f41ca5c4ed99232df

let trainning = true;

let accuracy = 0.1;

function setup(){
    createCanvas(550,550);
    perceptron = new Perceptron(3);
    for (let i = 0; i < points.length; i++) {
        points[i] = new Point(random(-1,1),random(-1,1));
    }
}

function draw(){
    background(250);
    points.forEach(point =>{
        point.show();
    });
    
    noStroke();

    points.forEach( pt =>{
        const inputs = [pt.x, pt.y, pt.bias];
        const target = pt.label;
        const guess = perceptron.guess(inputs);
        if (guess == target){
            fill(0, 255, 0);
        }else{
            fill(255,0,0);
        }

        ellipse(pt.getPixelX(), pt.getPixelY(), 15,15)
    });

    drawLine();
    if(trainning){
        trainSinglePoint();
<<<<<<< HEAD
        
=======
>>>>>>> 3c98977bf48b6dd42600760f41ca5c4ed99232df
    }
    
    

}


function drawLine(){
    stroke(0,0,255)
    let p1 = new Point(-1, f(-1));
    let p2 = new Point(1,f(1));
    line(p1.getPixelX(), p1.getPixelY(), p2.getPixelX(), p2.getPixelY());

    let guessP1 = new Point(-1, perceptron.guessY(-1));
    let guessP2 = new Point(1, perceptron.guessY(1));
    line(guessP1.getPixelX(), guessP1.getPixelY(), guessP2.getPixelX(), guessP2.getPixelY());
    
}

let trainningIndex = 0;

function trainSinglePoint(){
    const pt = points[trainningIndex];
    const inputs = [pt.x, pt.y, pt.bias];
    perceptron.train(inputs, pt.label);
    trainningIndex++;
    if(trainningIndex == points.length){
        trainningIndex = 0;
        
    }
    if(perceptron.consecutiveHints >= (points.length * accuracy)){//coloca a precisao desejada
        trainning = false
<<<<<<< HEAD
        for (let i = 0; i < points2.length; i++) {
            points2[i] = new Point(random(-1,1),random(-1,1));
        }
       
            points2.forEach(point =>{
                point.show();
            });
            
=======
        let points2 = new Array(100)
        for (let i = 0; i < points.length; i++) {
            points2[i] = new Point(random(-1,1),random(-1,1));
        }
        points2.forEach( pt =>{
            const inputs = [pt.x, pt.y, pt.bias];
            const target = pt.label;
            const guess = perceptron.guess(inputs);
        });
>>>>>>> 3c98977bf48b6dd42600760f41ca5c4ed99232df
    }
}