import ArvoreBinaria from "./ArvoreBinaria";
import No from "./No";

let arvoreB = new ArvoreBinaria("A");

let noA = arvoreB.raiz;
let noB = new No("B");
let noC = new No("C");
let noD = new No("D");
let noE = new No("E");
let noF = new No("F");

noA.adicionaFilhoEsquerda(noB);
noB.adicionaFilhoEsquerda(noF);
noA.adicionaFilhoDireita(noC);
noC.adicionaFilhoEsquerda(noD);
noC.adicionaFilhoDireita(noE);






