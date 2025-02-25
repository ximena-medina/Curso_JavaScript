const fruits = Array("manzana", "platano", "naranja")
console.log(fruits) //Array significa una lista con varios elementos

const justOneNumber =  Array(12)
console.log(justOneNumber) //no se puede

const number = Array(1, 2, 3, 4, 5)
console.log(number) //se declara como number y se pone mas de un elemento dentro del arreglo

// Array literal syntax

const oneNumber = [4]
console.log(oneNumber) //una sola posicion con un solo valor

const emptyArray = []
console.log(emptyArray) // este es un array vacio , funciona cuando queremos inicializar un programa

const sports = ["futbol", "natacion", "basquet", "karate"]
console.log(sports)

const ingredientes = ["ingredientes para el pastel =", "huevo", "leche", "Harina"]
console.log(ingredientes)

const baulIngredientes = [
    "harina",
    true,
    2,
    {
        ingredient: "Milk", cantidad: "1 taza"
    },
    false
]
console.log(baulIngredientes)

//Acceder a otro array elemento

const firstFruit = fruits[1]
console.log(firstFruit)

//Como sabemos el tamaño de un array o cuantos elementos tenemos 
const numberFruits = fruits.length
console.log(numberFruits)

//Mutabilidad

fruits.push("sandia") //el push es agregar un valor 
console.log(fruits)

//inmutabilidad

const newFruits = fruits.concat(["uvas", "kiwi", "Melon"])
console.log(fruits)
console.log(newFruits) //se junta la nueva lista con la antigua lista de frutas

//Array.isArray()

const isArray = Array.isArray(fruits)
console.log(isArray)

// Practica de ejercicios: la suma de todos los elementos de un array

const numbersArray = [1, 2, 3, 4, 5]
let sum = 0

for (let i = 0; i < numbersArray.length; i++){
    sum += numbersArray[i]
}
console.log(sum)