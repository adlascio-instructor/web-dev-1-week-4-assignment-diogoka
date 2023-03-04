const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const revealPassword = document.querySelector('.revealPassword');

const changeBorder = (element, newBorder) => {
    element.style.border = newBorder
}

const changeSource = (element, newSource) => {
    element.src=newSource
}

inputEmail.addEventListener("focusin", () =>{
    changeSource(document.querySelector("#emailIcon"),"./assets/images/mail-focus.svg")
    changeBorder(document.querySelector(".email"), "1px solid #ffc632");
})

inputEmail.addEventListener("focusout", () =>{
    changeBorder(document.querySelector(".email"),"1px solid #afb6c2");
    changeSource(document.querySelector("#emailIcon"),"./assets/images/mail.svg")
})

inputPassword.addEventListener("focusin", () =>{
    changeBorder(document.querySelector(".password"),"1px solid #ffc632")
    changeSource(document.querySelector("#passwordIcon"),"./assets/images/lock-focus.svg")
})

inputPassword.addEventListener("focusout", () =>{
    const pw = inputPassword.value;
    validatePassword(pw);  
})


revealPassword.addEventListener("click", () => {
    const inputPassword = document.querySelector('#password');
    if(inputPassword.type === "password"){
        inputPassword.type = "text";
    } else {
        inputPassword.type = "password";
    }
})


const validatePassword = (input) => {
    const validation = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
    if(input.match(validation)){
        changeBorder(document.querySelector(".password"),"1px solid #afb6c2")
        changeSource(document.querySelector("#passwordIcon"),"./assets/images/lock.svg")
    } else {
        alert("The password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters")
        changeBorder(document.querySelector(".password"),"1px solid #afb6c2")
        changeSource(document.querySelector("#passwordIcon"),"./assets/images/lock.svg")
    }
}



