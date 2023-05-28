const counter = document.querySelector('#counter');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');

start.addEventListener('click', () => {
    const timer = setInterval(() => counter.innerHTML++, 1000);
    stop.addEventListener('click', () => {clearInterval(timer);});
    reset.addEventListener('click', () => {counter.innerHTML = 0;});
});

