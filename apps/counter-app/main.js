const DEFAULT = 0;
let counter = DEFAULT;

window.addEventListener('DOMContentLoaded', function() {

    document.querySelector('#btnDecr').addEventListener('click', () => onDecreaseClicked());

    document.querySelector('#btnReset').addEventListener('click', () => onResetClicked());

    document.querySelector('#btnIncr').addEventListener('click', () => onIncreaseClicked());
})

//Controllers

function onDecreaseClicked() {
    //Validation
    decreaseCounter()
}

function onResetClicked() {
    //Validation
    resetCounter()
}

function onIncreaseClicked() {
    //Validation
    increaseCounter()
}

//Model

function decreaseCounter() {
    counter--;
}

function resetCounter() {
    counter == DEFAULT;
}

function increaseCounter() {
    counter++;
}

// View
function render() {
    const counterEl = document.querySelector('#counter')
    counterEl.textContent = counter
    styleCounter(counterEl)
}

function styleCounter(counterEl) {
    counterEl.classList.remove('color-green', 'color-red', 'color-black')
    counterEl.add(counter > 0 ? 'color-green' : counter < 0 ? 'color-red' : 'color-black')
}