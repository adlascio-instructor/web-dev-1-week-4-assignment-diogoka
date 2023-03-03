const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const revealPassword = document.querySelector('.revealPassword');


inputEmail.addEventListener("focusin", () =>{
    document.querySelector(".email").style.border = "1px solid #ffc632";
    document.querySelector("#emailIcon").src="./assets/images/mail-focus.svg";
})

inputEmail.addEventListener("focusout", () =>{
    document.querySelector(".email").style.border = "1px solid #afb6c2";
    document.querySelector("#emailIcon").src="./assets/images/mail.svg";
})

inputPassword.addEventListener("focusin", () =>{
    document.querySelector(".password").style.border = "1px solid #ffc632";
    document.querySelector("#passwordIcon").src="./assets/images/lock-focus.svg";
})

inputPassword.addEventListener("focusout", () =>{
    document.querySelector(".password").style.border = "1px solid #afb6c2";
    document.querySelector("#passwordIcon").src="./assets/images/lock.svg";
})

revealPassword.addEventListener("click", () => {
    const inputPassword = document.querySelector('#password');
    
    if(inputPassword.type === "password"){
        inputPassword.type = "text";
    } else {
        inputPassword.type = "password";
    }
})



