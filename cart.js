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


// // Function to add product to the cart
// function addToCart(id, name, price) {
//     // Get the existing cart from localStorage, or initialize as empty array if not present
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];

//     // Check if the product is already in the cart
//     const existingProductIndex = cart.findIndex(item => item.id === id);
    
//     if (existingProductIndex >= 0) {
//         // If product already exists, increase the quantity
//         cart[existingProductIndex].quantity += 1;
//     } else {
//         // If product doesn't exist, add new product to cart
//         const product = { id, name, price, quantity: 1 };
//         cart.push(product);
//     }

//     // Save the updated cart back to localStorage
//     localStorage.setItem('cart', JSON.stringify(cart));

//     alert(`${name} added to the cart!`);
// }

// Function to get the cart data
function getCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(cart); // For debugging or use this data to display in cart page
    return cart;
}

// Function to remove a product from the cart
// function removeFromCart(id) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
//     // Filter out the product to be removed
//     cart = cart.filter(item => item.id !== id);

//     // Save the updated cart back to localStorage
//     localStorage.setItem('cart', JSON.stringify(cart));

//     alert(`Product removed from the cart!`);
// }

// // Function to clear the cart
// function clearCart() {
//     localStorage.removeItem('cart');
//     alert('Cart cleared!');
// }
