// const persona = {
//     nombre: "ximena",
//     apellido: "Medina"
// }

function Persona (nombre, apellido, edad) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
}
const persona1 = new Persona("Juan", "Perez", 30)
console.log(persona1)

const persona2 = new Persona("Lalo", "Mendez", 35)
console.log(persona2)

Persona.prototype.telefono = "555-699-8701" //agregar una nueva proppiedad

persona1.nacionalidad = "Mexicano"
console.log(persona1.nacionalidad)

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

persona1.saludar()
persona2.saludar()
persona1.telefono()
persona2.telefono()