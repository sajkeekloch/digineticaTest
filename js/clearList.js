export default function clearList() {
    let list = document.getElementById('list')
    while (list.firstChild) {
        list.firstChild.remove()
    }
}