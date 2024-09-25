// Toggle between dashboard and products view
const productsLink = document.getElementById('products-link');
const dashboardContent = document.getElementById('dashboard-content');
const productsContent = document.getElementById('products-content');

productsLink.addEventListener('click', () => {
    dashboardContent.style.display = 'none';
    productsContent.style.display = 'block';
});

// Handle modal for adding products
const addProductBtn = document.getElementById('add-product-btn');
const productModal = document.getElementById('productModal');
const closeBtn = document.querySelector('.close-btn');

addProductBtn.addEventListener('click', () => {
    productModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    productModal.style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == productModal) {
        productModal.style.display = 'none';
    }
};

// Add more image upload fields dynamically with a maximum limit of 4 images
const imageUploadContainer = document.getElementById('image-upload-container');
let imageCount = 1; // Starting with one image field already present

imageUploadContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-image-btn') && imageCount < 4) {
        const imageFieldContainer = document.createElement('div');
        imageFieldContainer.classList.add('image-upload-field');

        const newImageField = document.createElement('input');
        newImageField.type = 'file';
        newImageField.name = 'productImages[]';
        newImageField.accept = 'image/*';

        const removeImageBtn = document.createElement('button');
        removeImageBtn.type = 'button';
        removeImageBtn.classList.add('remove-image-btn');
        removeImageBtn.textContent = 'x';

        removeImageBtn.addEventListener('click', () => {
            imageUploadContainer.removeChild(imageFieldContainer);
            imageCount--; // Decrease the count when an image is removed
            // Restore plus button if this was the last field and now it's below 4
            if (imageCount < 4) {
                const plusBtn = document.querySelector('.add-image-btn');
                if (plusBtn) {
                    plusBtn.style.display = 'inline-block';
                }
            }
        });

        imageFieldContainer.appendChild(newImageField);
        imageFieldContainer.appendChild(removeImageBtn);
        imageUploadContainer.appendChild(imageFieldContainer);

        imageCount++; // Increase the count after adding a new image

        // If the max count (4 images) is reached, hide the plus button
        if (imageCount >= 4) {
            event.target.style.display = 'none'; // Hide the plus button
        }
    }
});
