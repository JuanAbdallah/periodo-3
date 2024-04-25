
// obter os dados do carro reduzindo as variaves que nos interessam
//e limpar dados vazios
async function getData(){
    const carsDataResponse = await
    fetch('https://storage.googleapis.com/tfjs-tutorials/carsData.json');
    const carsData = await carsDataResponse.json();
    const cleaned = carsData.map(car=>({
        mpg: car.Miles_per_Gallon,
        horsepower: car.Horsepower
    }))
    .filter(car=>(car.mpg != null && car.horsepower != null))

    return cleaned;
}

async function run(){
    //carrega e plota os dados de entrada originais nos quais vamos treinar
    const data = await getData();
    const  values = data.map(d =>({
        x: d.horsepower,
        y: d.mpg
    }))
    tfvis.render.scatterplot(
        {name: 'Horsepower v MPG'},
        {values},
        {
            xLabel: 'Horsepower',
            yLabel: 'MPG',
            height: 300
        }
    )
     //converte os dados em um formulário que podemos usar para treinamento
     const tensorData = convertToTensor(data);
     const{inputs,labels} = tensorData;
     //treina modelo
     await trainModel(model,inputs,labels);
     console.log("treino completo")
}
document.addEventListener('DOMContentLoaded',run)

function createModel(){
    //cria um modelo sequenial
    const model = tf.sequential();

    //adiciona uma unica camada de entrada
    model.add(tf.layers.dense({inputShape: [1], units: 1, userBias: true}))

    //adiciona uma camada de saida
    model.add(tf.layers.dense({units: 1, userBias: true}))

    return model;

}

//cria modelo
const model = createModel();


//converter os dados de entrada em tensores que podemos usar para o ML.Tambem faremos os embaralhamento e a normalização 
//dos dados MPG(Milhas por galão) no eixo y
function convertToTensor(data){

    return tf.tidy(()=>{
        //embaraçha os dados
        tf.util.shuffle(data)
        //converta os dafos em tensor
        const inputs = data.map((d) => d.horsepower)
        const labels = data.map((d) => d.mpg )

        const inputTensor = tf.tensor2d(inputs,[inputs.length,1]);
        const labelTensor = tf.tensor2d(labels,[labels.length,1]);

        //normalize os dados para o intervalo 0 - 1 usando escala min-max
        const inputMax = inputTensor.max();
        const inputMin = inputTensor.min();
        const labelMax = labelTensor.max();
        const labelMin = labelTensor.min();

        const normalizedInputs = inputTensor
        .sub(inputMin)
        .div(inputMax.sub(inputMin));

        const normalizedLabels = labelTensor
        .sub(labelMin)
        .div(labelMax.sub(labelMin));

        return{
            inputs: normalizedInputs,
            labels: normalizedLabels,
            //retorne os limites minimos e máximos para podermos usar
            inputMax:inputMax,
            inputMin: inputMin,
            labelMax: labelMax,
            labelMin: labelMin
        }

    })

}
//exibe modelo
tfvis.show.modelSummary({name: "Modelo"},model);

<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", run);

async function trainModel(model, inputs, labels){
    //prepara o modelo para o treinamento

    model.compile({
        optimizer: tf.train.adam(),
        loss: tf.losses.meanSquaredError, //ver o quão certo ou errado está
        metrics: ["mse"],//ver a porcentagem de acertos
    });
    //começar treinamento
    //cada vez que treinar vai passar 32 pontos
    const batchSize = 32;
    const epochs = 50 //50 etapas de treinamento ou seja treina 50 vezes
    //começar treino
    return await model.fit(inputs,labels,{
        batchSize,
        epochs,
        shuffle: true,//acabou de treinar embaralha
        callbacks:tfvis.show.fitCallbacks(
            {name: "performance de treinamento"},
            ["loss","mse"],
            {height: 200, callbacks:["oneEpochEnd"]}
            ),
    });
   

}
=======
document.addEventListener("DOMContentLoaded", run);
>>>>>>> d72856b6f979fddb2efe48fc3d18bd1fa0016b40
