// copia una array

const originalArray = [1, 2, 3, 4, 5]
const copyOdAnArray = [...originalArray]

console.log(originalArray)
console.log(copyOdAnArray) //generalmente usamamos para no "mutar" cieros valores, sin modoficar ciertos valores del array original

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const combinedArray = [...array1,...array2]

console.log(array1)
console.log(array2)
console.log(combinedArray)

// crear un array con elementos adicionales

const baseArray = [1, 2, 3]
const arrayAditionalElements = [...baseArray, 4, 5, 6]

console.log(baseArray)
console.log(arrayAditionalElements)

function sum (a, b, c) {
    return a + b + c
}

const numbers  = [1, 2, 3]
const result = sum(...numbers)

console.log(result)
