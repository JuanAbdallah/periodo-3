import Arvore from "./Arvore.js"
import No from "./No.js";

let arvore = new Arvore('A');


let noB = new No("B");
let noC = new No("C");

arvore.raiz.adicionaFilho(noB);
arvore.raiz.adicionaFilho(noC);

console.log(arvore);
