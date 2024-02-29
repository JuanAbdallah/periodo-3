
import ArvoreBuscaBinaria from "./ArvoreBuscaBinaria.js";
import BuscaBLargura from "./BuscaBLargura.js"

let arvoreBST = new ArvoreBuscaBinaria(100);

arvoreBST.inserir(50);
arvoreBST.inserir(200);
arvoreBST.inserir(30);
arvoreBST.inserir(30);
arvoreBST.inserir(70);
arvoreBST.inserir(140);
arvoreBST.inserir(400);
arvoreBST.inserir(42);
arvoreBST.inserir(65);
arvoreBST.inserir(80);
arvoreBST.inserir(105);
arvoreBST.inserir(107);
arvoreBST.inserir(350);

BuscaBLargura.buscar(arvoreBST.raiz);


