export default function formatPrice(value) {
    let options = { style: 'currency', currency: 'RUB' };
    let numberFormat = new Intl.NumberFormat('ru-RU',{minimumFractionDigits: 0, useGrouping: true});
    return(numberFormat.format(value*100));
}