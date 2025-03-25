const light = document.querySelector('.light');
const switcher = document.querySelector('.btn');

const body = document.querySelector('body');

let isOn = false;
switcher.addEventListener('click', () => {
    isOn = !isOn;
    isOn ? light.src = './img/yellow_lamp.png' : light.src = './img/white_lamp.png';
});