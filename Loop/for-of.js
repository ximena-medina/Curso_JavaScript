// for of arrays, string [algo], son obetos iterables 
/*
for (variable of objeto){
    codigo
}
*/

let canasta = ["Manzana", "Platano", "Pera", "Naranjas", "Uvas"]

for (fruta of canasta){ //por cada fruta que tengas en la canasta me imprimes todos los elementos. SOLO FUNCIONA CON ELEMENTOS ITERABLES
    console.log(fruta);
}