//Pasar funciones como agrumentos -> callback

function a () {}
function b (a) {}
b(a)

function a (){
    function b () {}
    return b            // returna la misma variable, se le conoce como Declaracion de funciones
}

//Asignar funciones a variables

const a = function() {} //solo se pone la variable creada, tambien se le conoce como Expresion de funciones

//Tener propiedades y metodos 

function a () {}
const obj = {}
a.call(obj)

//Anidar funciones -> Nested functions

function a () {
    function b () {
        function c (){

        }
        c()
    }
    b()
}
a()

//Almacenar funciones en objetos

const rocket = {
    name: 'Falcon 9',
    launchMessage: function launchMessage () {
        console.log(":o")
    }
}