//Metodo map()

const numbers = [1, 2, 3, 4, 5]
const cuadradoNumbers = numbers.map(num => num * num)

console.log(numbers)
console.log(cuadradoNumbers)

//Metodo forEach()

const colors = ["rojo", "rosa", "blue"]
const iterablesColors = colors.forEach(color => console.log(color))

console.log(colors)
console.log(iterablesColors)

//Convertir farenheit a celsius 

const Tempfarenheit = [32, 68, 95]
const Tempcelsius = Tempfarenheit.map(Tempfarenheit => (5/9) * (Tempfarenheit - 32))

console.log(Tempfarenheit)
console.log(Tempcelsius)

//suma de los elementos en array

const Newnumbers = [10, 20, 30, 40, 50]
let sum = 0

Newnumbers.forEach(number => {
    sum += number
})

console.log("Array de los numeros: ", Newnumbers)
console.log("Suma de los numeros de los arrays: ", sum)

