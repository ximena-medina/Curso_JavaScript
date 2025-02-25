// // Methods the iterate over an array

// // filter()

// const numbers = [1, 2, 3, 4, 5, 7, 8, 9, 10]
// const evenNumbers = numbers.filter(number => number % 2 === 0)

// console.log(numbers)
// comsole.log(evenNumbers)

// // reduce()

// const numberReduce = [1, 2, 3, 4, 5]
// const sum = numberReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

// console.log(numberReduce)
// console.log(sum)

// reduce( case 2
const words = ["apple", "banana", "Hello", "adidas", "adidas"]

const guardaVariable = words.reduce((accumulator, currentValue) => { //conteo y frecuencoa de los elementos dentro del array
    if (accumulator[currentValue]) {
        accumulator[currentValue]++
    } else {
        accumulator[currentValue] = 1
    }
    return accumulator
}, {})

console.log(guardaVariable)