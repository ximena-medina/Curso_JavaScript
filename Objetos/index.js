/*
Es una estructura de datos que me ayudan guardar valores de una propiedad

key / value

objeto = {
    propiedad: valor,
    propiedad: valor
    Metodos
}

Los objetos son base para poder llevarlos a la programacion

*/

const persona = {
    nombre: "Jhon",
    edad: 30,
    direccion: {
        calle: "Av independencia 200",
        ciudad: "Aguascalientes"
    },
    saludar() {
        console.log(`hola, mi nombre es ${persona.nombre}`) //este es un metodo
    }
};

console.log(persona)
persona.saludar()

persona.telefono = "Tel: 5545211047"
console.log(persona.telefono)

persona.despedir = () => {
    console.log("Adios")
}

persona.despedir()

delete persona.telefono;
delete persona.despedir;
