// List of order objects
const orders = [
    {
        name: "Men's T-Shirt",
        image: "https://via.placeholder.com/100",
        description: "A stylish men's t-shirt made from organic cotton.",
        price: "$25",
        discount: "$20",
        category: "Mens",
        size: "L"
    },
    {
        name: "Women's Dress",
        image: "https://via.placeholder.com/100",
        description: "A beautiful summer dress for women.",
        price: "$50",
        discount: "$40",
        category: "Womens",
        size: "M"
    },
    {
        name: "Kids' Sneakers",
        image: "https://via.placeholder.com/100",
        description: "Comfortable and trendy sneakers for kids.",
        price: "$35",
        discount: "$30",
        category: "Kids",
        size: "5"
    }
];

// Function to dynamically load order details
function loadOrderHistory() {
    const orderHistory = document.getElementById('order-history');
    
    orders.forEach(order => {
        const orderItem = document.createElement('div');
        orderItem.classList.add('order-item');
        
        orderItem.innerHTML = `
            <div class="order-image">
                <img src="${order.image}" alt="${order.name}">
            </div>
            <div class="order-details">
                <h3>${order.name}</h3>
                <p>${order.description}</p>
                <p class="category">Category: ${order.category}</p>
                <p class="size">Size: ${order.size}</p>
            </div>
            <div class="order-price">
                <p class="price">Price: ${order.price}</p>
                <p class="discount">Discounted: ${order.discount}</p>
            </div>
        `;
        
        orderHistory.appendChild(orderItem);
    });
}

// Load order history on page load
document.addEventListener('DOMContentLoaded', loadOrderHistory);
