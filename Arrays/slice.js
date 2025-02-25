/*
.slice() nos permite trabajar con arrays, sin mutarlos, generando una copia del array original. Este método tiene la siguiente sintaxis:
.slice(start, end)
Donde start se refiere a desde que posición va a hacer el corte y end hasta donde va. Si omitimos pasar el argumento end, el método nos devuelve el array desde start hasta que se acabe todo el array.

El método slice() permite obtener partes específicas de un array en JavaScript. Puedes especificar un índice de inicio y un índice de fin, y slice() devolverá un nuevo array con los elementos en ese rango. Si solo proporcionas un índice de inicio, devolverá todos los elementos desde ese índice hasta el final del array. Además, puedes usar índices negativos para contar desde el final.
*/

const animals = ["hormiga", "ballena", "pato", "elefante","tigre"]

console.log(animals.slice(2)) //Nos indica un porcion especificada
console.log(animals.slice(2, 4)) //solo la posicion 2 y 3
console.log(animals.slice(1, 6)) //nos icluye desde ballena, pato, elefante y al final el tigre
console.log(animals.slice(-2)) //empieza desde atras
console.log(animals.slice(2, -1)) // desde la posicion 2 a la -1
console.log(animals.slice()) //nos arroga el metodo original

//No cambia el array solo especifica algun valor del array 