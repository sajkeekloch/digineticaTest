let clear = document.getElementById('clear')
let checkboxes = document.querySelectorAll('.brand__item_checkbox')

clear.addEventListener('click',()=> {
    checkboxes.forEach((el)=> {
        unCheck(el)
    })
})

function unCheck(el) {
    el.checked = false
}