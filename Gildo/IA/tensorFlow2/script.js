async function getData() {
    const carsDataResponse = await
    fetch('https://storage.googleapis.com/tfjs-tutorials/carsData.json');
    const carsData = await carsDataResponse.json();
    const cleaned = carsData.map(car => ({
        mpg: car.Miles_per_Gallon,
        horsepower: car.Horsepower
    })).filter(car => (car.mpg != null && car.horsepower != null));

    return cleaned;
}

async function run(){
    const data = await getData();
    const values = data.map(d => ({
        x: d.horsepower,
        y: d.mpg
    }));

    tfvis.render.scatterplot(
        {name: 'Hoserpower v MPG'},
        {values},
        {
            xLabel: 'Horsepower',
            yLabel: 'MPG',
            height: 300
        }
    );

    const tensorData = convertToTensor(data);
    const {inputs, labels} = tensorData;

    await trainModel(model, inputs, labels);
    console.log("Treino Completo!");
    testModel(model,data,tensorData); //testando o modelo
}

function createModel(){
     //cria um modelo sequenial
    const model = tf.sequential();
    //adiciona uma unica camada de entrada
    model.add(tf.layers.dense({inputShape: [1], units: 50, userBias: true}))

    model.add(tf.layers.dense({units:50, activation:'sigmoid'}))
    //adiciona uma camada de saida
    model.add(tf.layers.dense({units:1, useBias: true}));


    return model;
}

const model =createModel();

tfvis.show.modelSummary({name: "Modelo"}, model);

document.addEventListener('DOMContentLoaded', run);

function convertToTensor(data) {
    return tf.tidy( () => {
        tf.util.shuffle(data);

        const inputs = data.map((d) => d.horsepower);
        const labels = data.map( (d) => d.mpg);
        
        const inputTensor = tf.tensor2d(inputs, [inputs.length, 1]);
        const labelsTensor = tf.tensor2d(labels, [labels.length, 1]);
        
        const inputsMax = inputTensor.max();
        const inputsMin = inputTensor.min();
        const labelsMax = labelsTensor.max();
        const labelsMin = labelsTensor.min();

        const normalizeInputs = inputTensor.sub(inputsMin).div(inputsMax.sub(inputsMin));
        const normalizeLabels = labelsTensor.sub(labelsMin).div(labelsMax.sub(labelsMin));
        
        return {
            inputs: normalizeInputs,
            labels: normalizeLabels,
            inputsMax: inputsMax,
            inputsMin: inputsMin,
            labelsMax: labelsMax,
            labelsMin: labelsMin
        }
    })
}

async function trainModel(model, inputs, labels) {
    model.compile({
        optimizer:tf.train.adam(),
        loss: tf.losses.meanSquaredError,
        metrics: ["mse"]
    });

    const batchsize = 32;
    const epochs = 100; //epocas

    return await model.fit(inputs, labels, {
        batchsize,
        epochs,
        shuffle: true,
        callbacks: tfvis.show.fitCallbacks(
            {name: "Performance do Train"},
            ["loss", "mse"],
            {height: 200, callbacks: ["onEpochEnd"]}
        ),
    });

}

function testModel(model, inputData, normalizationData){
    const{inputsMax,inputsMin,labelsMax,labelsMin} = normalizationData;
    //gera um intervalo uniforme de numeros entre 0 e 1
    //Desnormaliza os dados fazendo o inverso da escala min-max
    const[xs, preds] = tf.tidy(() => {
        const xs = tf.linspace(0,1,100);
        const preds = model.predict(xs.reshape([100,1]));
        //desnormalizar
        const unNormXs = xs.mul(inputsMax.sub(inputsMin)).add(inputsMin);
        const unNormPreds = preds.mul(labelsMax.sub(labelsMin)).add(labelsMin);

        return [unNormXs.dataSync(), unNormPreds.dataSync()];
    })
    const predictedPoints = Array.from(xs).map((val,i)=>{
        return{x:val,y:preds[i]};
    })
    
    const originalPoints = inputData.map(d=>({
        x:d.horsepower,
        y:d.mpg
    }))

    tfvis.render.scatterplot(
        {name: "Previsões vx dados originais"},
        {
            values:[originalPoints,predictedPoints],
            series:["original","predicted"]
            
        },
        {
            xLabel: "HoresePower",
            yLabel:"MPG",
            height: 300
        }
    )
}