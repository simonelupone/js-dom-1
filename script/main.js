const light = document.querySelector('.light');
const switcher = document.querySelector('.btn');

const body = document.querySelector('body');

let isOn = false;
switcher.addEventListener('click', () => {
    isOn = !isOn;
    if (isOn) {
        light.src = './img/yellow_lamp.png';
        switcher.innerHTML = 'Spegni';
        body.classList.remove('bg-dark');
    } else {
        light.src = './img/white_lamp.png';
        switcher.innerHTML = 'Accendi';
        body.classList.add('bg-dark');
    }
});