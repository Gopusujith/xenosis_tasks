document.addEventListener('DOMContentLoaded', function() {
    let count = 0;// initially  counter will be 0

    const display = document.getElementById('display');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    const resetButton = document.getElementById('reset');

    function updateDisplay() {
        display.textContent = count;
    }// display the counter value

    incrementButton.addEventListener('click', function() {
        count++;
        updateDisplay();
    });

    decrementButton.addEventListener('click', function() {
        count--;
        updateDisplay();
    });

    resetButton.addEventListener('click', function() {
        count = 0;
        updateDisplay();
    });

    updateDisplay();
});