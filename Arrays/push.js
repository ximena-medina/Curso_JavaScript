// metodos que modifican el array original (se llama mutabilidad)

const countris = ["USA", "Canada", "UK"]
const newCountries = countris.push("Germany", "Australia")

console.log(countris)
console.log(newCountries)

//pop()
const removeCountry = countris.pop()

console.log(countris)
console.log(removeCountry)