import cardsHandler from './cardsHandler.js'
let count = document.getElementById('selector')
cardsHandler(count.value)
count.addEventListener('change',()=> cardsHandler(count.value))
    