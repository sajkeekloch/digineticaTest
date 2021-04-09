import clearList from './clearList.js'
export default function cardsHandler(count) {
    clearList()
    let cardTemplate = document.getElementById('card')
    for(let i = 0; i < count; i++) {
        let card = document.createElement('div')
        card.append(cardTemplate.content.cloneNode(true))
        card.classList.add('list__card')
        list.append(card)
    }
}