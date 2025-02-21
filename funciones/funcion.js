// function suma (a, b) {
//     return a + b
// }
// suma(3, 5)

function calculateDiscountedPrice (price, discountPercentage) {
    const discount = (price * discountPercentage) / 100
    const priceWhitDiscount = price - discount

    return priceWhitDiscount
}

const originalPrice = 100 //le cambiamos los diferentes valores de entrada
const discountPercentage = 20
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage)

console.log('Original Price $' + originalPrice)
console.log('Discount: ' + discountPercentage + '%')
console.log('Price whit discount: $' + finalPrice)