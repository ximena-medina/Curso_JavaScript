// Funciones puras
//Vamos a tener la misma entrada y salida

//Side Effects (Efectos Secundarios)
// 1. Modificar variables globales
// 2. Modificar parametros
// 3. Solicitudes HHTP
// 4. imprimir la pantalla con consola
// 5. manipulacion del DOM
// 6. oBTENER LA HORA ACTUAL

function sum (a, b) { //recibimos los mismos parametros entonces es una funcion pura
    return a + b
}

function sum (a, b) {  //Ya no es pura porque tiene un console.log, que es impresion en la pantalla
    console.log('A', a)
    return a + b
}

let total = 0
function sum (a) { //Es una funcion impura
    total += a
    return total
}

function cuadrado(x) { //Es una funcion pura
    return x * x
}

function addTen (y) {
    return y + 10
}
const number = 5
const resultado = addTen(cuadrado(number)) //Funcion Pura por el efecto de arriba
console.log(resultado)
