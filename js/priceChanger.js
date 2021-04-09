import formatPrice from './formatPrice.js'

let minPrice = document.getElementById('min')
let maxPrice = document.getElementById('max')

export default function priceChanger(value) {
    minPrice.value = formatPrice(value[0])
    maxPrice.value = formatPrice(value[1])
}