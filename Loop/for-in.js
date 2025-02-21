/*
for in ----> objetos: es una estructura de datos que consta de:
propiedades = valor

array, string
solo tienen elementos dentro de la lista
item

for (variable in objeto) {
    codigo
}
*/
console.log("-------------------->")
const listaDeCompras = { 
    manzanas: 5,
    pera: 3,
    naranja: 3,
    uva: 2,
}

for (fruta in listaDeCompras){ 
    console.log(fruta); //es el indice o la lista principal
}

for (fruta in listaDeCompras){
    console.log(`${fruta} : ${listaDeCompras[fruta]}`);
}
