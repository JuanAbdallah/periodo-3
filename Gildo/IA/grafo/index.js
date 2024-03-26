import Grafo from "./Grafo.js";
import Vertice from "./Vertice.js";



let s = new Vertice("s",null);
let t = new Vertice("t",0);
let a = new Vertice("a",7);
let b = new Vertice("b",9);
let c = new Vertice("c",2);
let d = new Vertice("d",4);
let e = new Vertice("e",5);

let gr = new Grafo(s,t);


s.adicionarAresta(a,3);
s.adicionarAresta(b,2);
a.adicionarAresta(c,5);
c.adicionarAresta(t,3);
t.adicionarAresta(d,4);
b.adicionarAresta(d,7);
b.adicionarAresta(e,7);
d.adicionarAresta(e,2);

console.log(c.BuscaAresta());