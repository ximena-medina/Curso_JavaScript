// La promesas nos sirven para que nuestro cidigo pueda trabajar en forma asincrona.

// Promise()

// Estados:
// pending 
// fullfilled
// Rejected //la promesa no se resolvio.

// callbacks:
// resolve //cuando se resuelve de forma satisfactoria.
// reject //cuando la promesa no se puede resolver.

// then() //Metodo cuando la promesa esta lista y se resuleve con un callback
// catch() //Obtener el error para ver lo que esta pasando con el codigo

const promise = new Promise((resolve,
     reject) => {
    setTimeout(() => {
        let operationSuccessful = true
        if(operationSuccessful){
            resolve("La operacion fue exitosa")
        } else {
            reject("La operacion a fallado")
        }
    }, 2000)
})

promise
    .then((successMessage) => {
        console.log(successMessage) //Nos va a ayudar a ejecutar nuedtro resultado desde la promesa.
    })
    .catch((errorMessage) => { //En caso de que no se resulva, el catch nos funciona para ver cual fue el error y el porque no se ejecuto la promesa.
        console.log(errorMessage)
    })

