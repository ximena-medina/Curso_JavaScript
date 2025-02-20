//Explicit Type Casting 

const string = "42" //convertir de string a numero. 
const integer = parseInt(string)
console.log(integer)
console.log(typeof integer) 

const stringDecimal = "3.14"
const float = parseFloat(stringDecimal) //son conicidos como tipo de dtao number.
console.log(float)
console.log(typeof float)

const binario = "1010" //nos convierte en binario 
const decimal = parseInt(binario, 2)
console.log(decimal)
console.log(typeof decimal)

//Implicit Type casting
const suma = 5 + 3
console.log(suma)

const sumWhitBoolean = "3" + true
console.log(sumWhitBoolean)

const stringValue = "10"
const numberValue = 10
const booleanValue = true

console.log("-----------------------")
console.log(stringValue + stringValue) //Contatena si tiene un string 
console.log( stringValue + numberValue) //Concatena
console.log(stringValue + booleanValue) //Contatena
console.log(numberValue + stringValue) //Contatena
console.log(numberValue + numberValue) // Suma
console.log(numberValue + booleanValue) // Suma
console.log(booleanValue + stringValue) // Contatena
console.log(booleanValue + numberValue) //Suma
console.log(booleanValue + booleanValue) //No contatena si no tiene un string funcional.