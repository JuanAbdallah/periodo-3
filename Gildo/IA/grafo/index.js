import Vertice from "./Vertice";

u = new Vertice("u");
v = new Vertice("v");
w = new Vertice("w");
x = new Vertice("x");
y = new Vertice("y");
z = new Vertice("z");

v.adicionaAresta(u,0);
v.adicionaAresta(w,0);
v.adicionaAresta(x,0);
u.adicionaAresta(u,0);
u.adicionaAresta(x,0);
w.adicionaAresta(x,0);
w.adicionaAresta(x,0);
x.adicionaAresta(y,0);
