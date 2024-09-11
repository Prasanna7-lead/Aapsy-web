let minusButton = document.getElementById('minus');
let plusButton = document.getElementById('plus');
let spanElement = document.querySelector('.item-actions span');  


function increment() {
    let currentValue = parseInt(spanElement.textContent);
    spanElement.textContent = currentValue + 1;            
}

function decrement() {
    let currentValue = parseInt(spanElement.textContent);  
    if (currentValue > 0) {                                
        spanElement.textContent = currentValue - 1;        // Decrement by 1
    }
}

// Attach the functions to the buttons
minusButton.addEventListener('click', decrement);
plusButton.addEventListener('click', increment);