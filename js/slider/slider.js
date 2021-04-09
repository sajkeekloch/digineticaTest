import './nouislider.js'
import priceChanger from '../priceChanger.js'

let slider = document.getElementById('slider');
noUiSlider.create(slider, {
    start: [10, 10000],
    connect: false,
    step: 10,
    range: {
        'min': 0,
        'max': 10000
    }
});

let sliderValue = slider.noUiSlider.options.start
priceChanger(sliderValue)

slider.noUiSlider.on('slide', () => {
    sliderValue = slider.noUiSlider.get()
    priceChanger(sliderValue)
})