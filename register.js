let phone = "";
const phoneNumberPattern = /^(\+?\d{1,3}[-.\s]?)?(\(?[6-9]\d{2}\)?[-.\s]?\d{3}[-.\s]?\d{4})$/;
const regex = new RegExp(phoneNumberPattern);



document.getElementById("phone").addEventListener("input",(e) => {
    
    phone = e.target.value;
    console.log(regex.test(phone));
    if(!regex.test(phone)){
        document.getElementById("phone").style.color = "red";
    }else{
        document.getElementById("phone").style.color = "green";
    }
    
    console.log(phone);

});

let btn = () =>{
    console.log(phone);
};