// code by Abinesh

let alertDiv = document.getElementById('alertMessage');
let validEmail = validpwd = validPhone = true;


let validateEmail = email => {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
let validatePhone = phone=> {
    let phonePattern = /^(\+?\d{1,3}[-.\s]?)?(\(?[6-9]\d{2}\)?[-.\s]?\d{3}[-.\s]?\d{4})$/;
    return phonePattern.test(phone);
}


// altert message css
let showAlert = (message, type = 'error') => {
    alertDiv.textContent = message;
    alertDiv.style.display = 'block';
    alertDiv.style.backgroundColor = type === 'success' ? '#d4edda' : '#f8d7da';
    alertDiv.style.color = type === 'success' ? '#155724' : '#721c24';
    alertDiv.style.borderColor = type === 'success' ? '#c3e6cb' : '#f5c6cb';
}

let pwdChecker = e=>{
    if (document.getElementById('password').value.trim() == document.getElementById('confirmPassword').value.trim()&&!validpwd) 
        alertDiv.style.display = 'none';
}
document.getElementById('password').addEventListener('input',pwdChecker);
document.getElementById('confirmPassword').addEventListener('input',pwdChecker);

document.getElementById('email').addEventListener('input',e=>{
    console.log(e.target.value);
    console.log(validateEmail(String(e.target.value)) && !validEmail);
    if (validateEmail(e.target.value) && !validEmail)
        alertDiv.style.display = 'none';
});

document.getElementById('phone').addEventListener('input',e=>{
    if (validatePhone(e.target.value) && !validPhone)
        alertDiv.style.display = 'none';
});


document.getElementById('register-form').addEventListener('submit',  e=> {
    e.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let confirmPassword = document.getElementById('confirmPassword').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let genderMale = document.getElementById('male').checked;
    let genderFemale = document.getElementById('female').checked;

    if (!name || !email || !password || !confirmPassword || !phone || (!genderMale && !genderFemale)) {
        showAlert('All fields are required');
        return;
    }

    if (!validateEmail(email)) {
        showAlert('Invalid email');
        validEmail = false;
        return;
    }

    if (password !== confirmPassword) {
        showAlert('Passwords do not match');
        validpwd = false
        return;
    }

    if (!validatePhone(phone)) {
        showAlert('Invalid phone number format please use numbers only');
        validPhone = false;
        return;
    }
    showAlert('Registration successful!', 'success');
});
// ^^^^     code by Abinesh   ^^^^





