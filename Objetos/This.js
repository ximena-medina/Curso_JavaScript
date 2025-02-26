/*
this --> class
this --> objeto -->class
*/

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre //el this hace referencia a todo el onjeto 
        this.edad = edad
    }
}

const persona1 = new Persona("Alex", 25)

console.log(persona1)

persona1.nuevoMetodo = function() {
    console.log(`Mi nombre es ${this.nombre}`) //Este this hace referencia al nombre de persona 1 que seria Alex. Estancia de persona1. 
}