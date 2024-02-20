import Arvore from "./Arvore.js"
import No from "./No.js";

let arvore = new Arvore('A');


let noB = new No("B");
let noC = new No("C");
let noD = new No("D");
let noE = new No("E");
let noF = new No("F");


arvore.raiz.adicionaFilho(noB);
arvore.raiz.adicionaFilho(noC);
noC.adicionaFilho(noD);
noC.adicionaFilho(noE);
noB.adicionaFilho(noF);
console.log(arvore);
