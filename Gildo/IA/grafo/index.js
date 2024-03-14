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


s.addAresta(a,3);
s.addAresta(b,2);
a.addAresta(c,5);
c.addAresta(t,3);
t.addAresta(d,4);
b.addAresta(d,7);
b.addAresta(e,7);
d.addAresta(e,2);

console.log(s.getOrdenados());