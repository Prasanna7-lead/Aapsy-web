document.getElementById('edit-btn').addEventListener('click', function() {
    toggleEditMode(true);
});

document.getElementById('save-btn').addEventListener('click', function() {
    toggleEditMode(false);
    // You can add save logic here
});

document.getElementById('add-address-btn').addEventListener('click', function() {
    const addressContainer = document.getElementById('addresses');
    const newAddress = document.createElement('div');
    newAddress.classList.add('address');
    
    newAddress.innerHTML = `
        <div class="row">
            <label>Street:</label>
            <input type="text" placeholder="Enter street">
        </div>
        <div class="row">
            <label>City:</label>
            <input type="text" placeholder="Enter city">
        </div>
        <div class="row">
            <label>State:</label>
            <input type="text" placeholder="Enter state">
        </div>
        <div class="row">
            <label>Postal Code:</label>
            <input type="text" placeholder="Enter postal code">
        </div>
        <div class="row">
            <label>Country:</label>
            <input type="text" placeholder="Enter country">
        </div>
        <div class="row">
            <label>Address Type:</label>
            <input type="text" placeholder="Enter address type">
        </div>
    `;
    addressContainer.appendChild(newAddress);
});

function toggleEditMode(editMode) {
    const elementsToToggle = ['name', 'email', 'phone', 'gender'];
    
    elementsToToggle.forEach((element) => {
        document.getElementById(`${element}-static`).style.display = editMode ? 'none' : 'inline';
        document.getElementById(`${element}-edit`).style.display = editMode ? 'inline' : 'none';
    });

    document.querySelectorAll('.address input').forEach(input => {
        input.style.display = editMode ? 'inline' : 'none';
    });

    document.getElementById('edit-btn').style.display = editMode ? 'none' : 'inline';
    document.getElementById('save-btn').style.display = editMode ? 'inline' : 'none';


    document.getElementById('edit-profile').addEventListener('click', function() {
        let inputs = document.querySelectorAll('.profile-form input');
        inputs.forEach(input => input.disabled = !input.disabled);
    });
    
    document.getElementById('logout').addEventListener('click', function() {
        alert('Logged out successfully!');
        // Redirect to login page or perform logout actions here
    });
}


