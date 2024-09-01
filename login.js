let alertDiv = document.getElementById('alertMessage');
let validEmail = true;

let validateEmail = email => {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

let showAlert = (message, type = 'error') => {
    const alertDiv = document.getElementById('alertMessage');
    alertDiv.textContent = message;
    alertDiv.style.display = 'block';
    alertDiv.style.backgroundColor = type === 'success' ? '#d4edda' : '#f8d7da';
    alertDiv.style.color = type === 'success' ? '#155724' : '#721c24';
    alertDiv.style.borderColor = type === 'success' ? '#c3e6cb' : '#f5c6cb';
}

document.getElementById('email').addEventListener('input',e=>{
    if (validateEmail(e.target.value) && !validEmail)
        alertDiv.style.display = 'none';
});

document.getElementById('login-form').addEventListener('submit',e=>{
    e.preventDefault();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    if(!email||!password){
        showAlert("All fields are required");
        return;
    }


    if(!validateEmail(email)){
        showAlert("Invalid email");
        validEmail = false;
        return ;
    }
});