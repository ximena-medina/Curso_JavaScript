class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    saludar() {
        console.log(`Hola, mi nimbre es ${this.nombre} y tengo ${this.edad} años`)
    }
}

const persona1 = new Persona("Ximena", 25)
persona1.saludar()