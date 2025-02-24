//  Estructura basica de un switch case 
// switch(expresion) {
//     case valor1:
//         // codigo a ejecutar
//         break;
//     case valor2:
//         //codigo 
//         break;
//     case valor3:
//         //codigo
//         break;
//     default: //cuando ninguno es verdad se usa el default. 
//         //codigo
// }

let producto = "Fresas"

switch(producto){
    case "Naranjas":
        console.log("la naranja  vale $20 el kilo")
        break;
    case "Manzanas":
        console.log("La manzana cuesta $35 el kilo")
        break;
    case "Platanos":
        console.log("Los platanos cuestan $30 el kilo")
        break;
    case "Mangos":
    case "Fresas":
        console.log("Los mangos y las fresas cuestan $50 el kilo")
        break;
    default:
        console.log(`Lo siento no contamos con el ${producto}`)

}

console.log("Hay algo mas que requieras?")
console.log("agregar producto")