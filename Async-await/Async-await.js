//Async and await
// La Asinc and await a diferencia con las promesas, pueden ser mas legibles sus pasos.
// -------------------------------------------------------------------------------------
// function fetchData() {
//     fetchData("https://swapi.dev/api/species/1/")
//     .then((response) => response.json
//     ())
//     .then((data) => console.log(data))
//     .catch((error) => console.log
//     (error));
// }

/*
try ----- Nos pemrite hacer el manejo de los errores
catch --- Manejamos el error
*/
async function fetchData() {
    try {
        let response = fetch("https://rickandmortyapi.com/api/character")
        let data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

//for a way
const urls = [
    "https://rickandmortyapi.com/api/character", //urls de las API
    "https://rickandmortyapi.com/api/location",
    "https://rickandmortyapi.com/api/episode",
]

async function fetchNewData() {
    try {
        for await (let url of urls) {
            let response = await fetch(url)
            let data = await response.json 
            ();
            console.log(data)


        }
    } catch (error) {
        console.log("Hubo un error", error)
    }   
}