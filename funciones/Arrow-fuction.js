// // Arrow function

// const almuerzo = (huevo, pollo) => {
//     return `${huevo} ${pollo}`
// }

// almuerzo( ":p", ":o")

const greeting = function (name) {
    return `Hello, ${name}`
}

//Arrow fuction - implicit return

const Newgreeting = (name) => {
    return `Hello, ${name}`
}

const newGreetingImpliciti = (name, lastName) => `Hola, yo soy ${name} ${lastName}` ///con dos parametros

//Lexical Binding

const functionalCharacter = { //tenemos un metodo
    name: 'abulea topson', //tomamos el nombre dentro del
    messageTraditionalFuction: function (message) {
        console.log(`${this.name} says: ${mensage}`)
    },
    messageArrowFuction: function (message) {
        console.log(`${this.name} says: ${mensage}`)
    }
}

functionalCharacter.messageTraditionalFuction("Hola a todos, me docen la abuela topson")
functionalCharacter.messageArrowFuction("Hola a todos, me docen la abuela topson")

