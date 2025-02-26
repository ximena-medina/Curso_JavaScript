/*
Requerimientos del reto:

1. El usuario  debe de ingresar su usuario y contraseña. *
2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de datos.
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timline del usuario.
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un menaje de error y no mostrar ningun timeline.
*/

//Base de datos
const userDatabase = [
    {
        username: "Emiliano",
        password: "123",
    },
    {
        username: "caro",
        password: "456",
    },
    {
        username: "Alan",
        password: "789",
    },
];

const userTimeLine = [
    {
        username: "Fatima",
        timeline: "Me encanta JavaScript",
    },
    {
        username: "Gerardo",
        timeline: "Looperfriend es el mejor!",
    },
    {
        username: "Ivan",
        timeline: "A mi me gusta mas la horchata que la jamica",
    },
    {
        username: "Andres",
        timrline: "Me gustaria tomar un descanso",
    },
];


//solo te pide tu usuario y tu contraseña deacuerdo a los datos de la base de datos 
const username = prompt("Cual es tu usuario");
const password = prompt("Cual es tu contraseña");

function timeline () {
console.log(userTimeLine)
}

function usuarioExistente (usuario, password) {
    for (i = 0; i < userDatabase.length; i++) {
        if(
            userDatabase[i].username === username &&
            userDatabase[i].password === password
        ) {
            return true
        } 
    }
    return false
}

function signIn (username, password) {
    if(usuarioExistente (username, password)) {
        alert(`Bienvenido a tu cuenta ${username}`)
        console.log(userTimeLine)
    } else {
        alert("la contraseña o usuario estan incorrectas")
    }
}

signIn(username, password);


















// class Usuario {
//     constructor(nombre, contraseña) {
//         this.nombre = nombre
//         this.contraseña = contraseña
//     }
//     validacion() {

//     }

// }