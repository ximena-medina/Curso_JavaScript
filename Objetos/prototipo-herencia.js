// classes --------------------- genera un prototipo
// funciones constructoras-------- genenran u prototipo

// const { prototype } = require("postcss/lib/previous-map");

// prototype

class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre
        this.tipo = tipo
    }
    emititSonido() {
        console.log("Emite un sonido el Animal")
    }
}

class Perro extends Animal {
    constructor(nombre, tipo, raza) {
        super(nombre, tipo) //Va utilizar la variable de nombre y tipo que se esta utilizando en la classe Animal
        this.raza = raza
    }
    emitirSonido () {
        console.log("El perro ladra") //es especifo
    }
    correr(){
        console.log(`${this.nombre} corre alegremente`)
    }
}

const perro1 = new Perro("kenay", "Perro", "Shitzu")
console.log(perro1)
perro1.correr()
perro1.emitirSonido()


Perro.prototype.segundoMetodo = function (){ //los prototipos SOLO SE CREA CON LAS CLASES CONSTRUCTORAS.
    console.log("Es otro metodo")
}