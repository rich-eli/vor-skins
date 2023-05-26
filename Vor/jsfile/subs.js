const form = document.getElementById("form");
const namaInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const preferInput = document.getElementById("preference");
const agree = document.getElementById("news");

const passInput = document.getElementById("pass1");
const passInput2 = document.getElementById("pass2");

form.addEventListener("submit",(e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
   const namaValue = namaInput.value.trim();
   const emailValue = emailInput.value.trim();
   const phoneValue = phoneInput.value.trim();
   const preferValue = preferInput.value.trim();
   const passValue = passInput.value.trim();
   const pass2Value = passInput2.value.trim();

   let numb = 0;
    // nama
    if(namaValue === ''){
        errorMessage(namaInput, "Name is required and cannot be blank");
        
    }else{
        berhasil(namaInput);
        numb += 1;
    }

    if(emailValue === ''){
        errorMessage(emailInput, "Email is required and cannot be blank");
    }else if(!checkEmail(emailValue)){
        errorMessage(emailInput, "Invalid email format");
    }else{
        berhasil(emailInput);
        numb += 1;
    }

    if(phoneValue === ''){
        errorMessage(phoneInput, "Phone number is required and cannot be empty");
    }else if(phoneValue.length < 8){
        errorMessage(phoneInput, "Invalid Phone number format must be more than 7 numbers");
    }else{
        berhasil(phoneInput);
        numb += 1;
    }

    if(preferValue === ''){
        errorMessage(preferInput, "Choose your preferences");
    }else{
        berhasil(preferInput);
        numb += 1;
    }

    if(passValue === ''){
        errorMessage(passInput,"Password is required and cannot be blank");
    }else{
        berhasil(passInput);
        numb += 1;
    }

    if(pass2Value === ''){
        errorMessage(passInput2, "Confirm your password");
    }else if(passValue !== pass2Value){
        errorMessage(passInput2,"Password does not match");
    }else{
        berhasil(passInput2);
        numb += 1;
    }

    if(agree.checked){
        berhasil(agree);
        numb += 1;
    }else{
        errorMessage(agree,"You must agree to receive newsletter");
    }
}



function errorMessage(input, msg){
    const formControl = input.parentElement;
    const errorMsg = formControl.querySelector("small");

    errorMsg.innerText = msg;

    formControl.className = 'form-cond error'
}

function berhasil(input){
    const formControl = input.parentElement;
    formControl.className = 'form-cond success';
}

function checkEmail(email){
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(email.match(pattern)){
        return true;
    }
    return false;
}

const showPass = document.querySelector(".show-pass");

const para1 = document.querySelector("#para1");

showPass.addEventListener("click",() =>{
    if(passInput.type === "password"){
        passInput.type = "text";
        showPass.classList.replace("fa-eye-slash","fa-eye");
        para1.innerHTML = "Hide Password";
    } else{
        passInput.type = "password";
        showPass.classList.replace("fa-eye","fa-eye-slash");
        para1.innerHTML = "Show Password";
    }
})

const showPass2 = document.querySelector(".show-pass2");
const para2 = document.querySelector("#para2");

showPass2.addEventListener("click",() =>{
    if(passInput2.type === "password"){
        passInput2.type = "text";
        showPass2.classList.replace("fa-eye-slash","fa-eye");
        para2.innerHTML = "Hide Password";
    } else{
        passInput2.type = "password";
        showPass2.classList.replace("fa-eye","fa-eye-slash");
        para2.innerHTML = "Show Password";
    }
})



