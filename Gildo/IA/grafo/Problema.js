import Grafo from "./Grafo";
import Vertice from "./Vertice";



let s = new Vertice("s");
let a = new Vertice("a");
let b = new Vertice("b");
let c = new Vertice("c");
let d = new Vertice("d");
let e = new Vertice("e");
let f = new Vertice("f");
let g = new Vertice("g");
let t = new Vertice("t");

let gr = new Grafo(s,t);

s.adicionarAresta(a,3.1);
s.adicionarAresta(d,4.9);
a.adicionarAresta(b,3.1);
d.adicionarAresta(e,2.2);
f.adicionarAresta(b,5.1);
b.adicionarAresta(f,5.1);
b.adicionarAresta(c,3.5);
c.adicionarAresta(t,4.8)
e.adicionarAresta(f,2.2);
g.adicionarAresta(t,2.5);



