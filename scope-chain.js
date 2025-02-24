const productName = 'Smartphone'
const price = 499
const brand  = "TechCo"

function getProductDetails () {
    const productName  = "Laptop"
    const price = 899

    return `The ${productName} costs $${price} and is from the brand ${brand}`
}

console.log(`The ${productName} costs $${price} and is from the brand ${brand}`) //Esto lo va a tomar por de fuera de la funcion

const userPoints = 150

function checkAccess() {
    if (userPoints < 100) {
        const message = "Access denied: Insufficient points!"
        return message
    } else {
        const message  = "Access granted: Enjoy the premium features!"
        return message
    }
}

console.log(checkAccess())

// const globalVariable = ":o"

// function localOne() {
//     console.log("GLOBAL 1: ", globalVariable)
//     console.log("LOCAL 1: ", localVariable)

//     function localTwo() {
//         const apple = "🍎"
//         console.log("LOCAL 2:", apple)
//     }

//     // function localThree() {
//     //     console.log("LOCAL 3:", apple)
//     // }

//     localTwo()
//     localThree()
// }

// console.log(localOne())