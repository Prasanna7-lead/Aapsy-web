let phone = "";
const phoneNumberPattern = /^(\+?\d{1,3}[-.\s]?)?(\(?[6-9]\d{2}\)?[-.\s]?\d{3}[-.\s]?\d{4})$/;
const regex = new RegExp(phoneNumberPattern);
let validName = false;
let phoneFlag = false;


let form = document.getElementById("register-form");
let response = document.getElementById("responseMessage")
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let validNumber = regex.test(document.getElementById("phone").value);
    let samePwd = document.getElementById("password").value == document.getElementById("confirmPassword").value;
    let validGender = e.target.gender.value != "";
    if (!validNumber){
        document.getElementById("responseMessage").innerHTML += "Invalid Number";
        phoneFlag = true;
    }
    if (!document.getElementById("password").value == document.getElementById("confirmPassword").value){

    }

});

document.getElementById("name").addEventListener("input",e=>{
    if (String(e.target.value).includes(" ") ){
        document.getElementById("responseMessage").innerHTML += "No spaces allowd in name";
        validName = false;
    }
    else{
        document.getElementById("responseMessage").innerHTML = document.getElementById("responseMessage").innerHTML.replace("No spaces allowd in name","");
        validName = true;
    }
});


document.getElementById("phone").addEventListener("input",(e) => {
    
    phone = e.target.value;

    console.log(regex.test(phone));
    if(!regex.test(phone)){
        document.getElementById("phone").style.color = "red";
    }else{
        document.getElementById("phone").style.color = "green";
        document.getElementById("responseMessage").innerHTML = document.getElementById("responseMessage").innerHTML.replace("Invalid Number","")
    }
    
    console.log(phone);

});

let btn = () =>{
    console.log(phone);
};