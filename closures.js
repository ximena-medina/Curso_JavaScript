//Un closure es cuando una función "recuerda" el entorno o contexto en el que fue creada,
//incluso después de que la función haya terminado de ejecutarse.

/* Ambito Lexico
Cada vez que se declare una funcion, crea su propio lexico, y puede
acceder a las variables dentro de ese ambito y a las variables en 
ambitos superiores.
*/

function outerFuction () {
    let outerVariable = "i am from outer fuction"
    
    function interFuction () {
        console.log(outerVariable)
    }

    return interFuction
}

const closureExample = outerFuction()
closureExample()

function createCounter () {
    let count = 0

    return function() {
        count++
        console.log(count)
    }
}

console.log("------------------->")

const counterA = createCounter()
counterA()
counterA()

const counterB = createCounter()
counterB()

console.log("--------------------->")

function outer () {
    let message = "Hello, "

    function inner (name) {
        console.log(message + name)
    }

    return inner
}

const clouserA = outer()
const closurerB = outer()

clouserA("Alicia")
closurerB("Rogelio")