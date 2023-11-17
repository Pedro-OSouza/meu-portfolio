const emailInpt = document.querySelector(".email"),
      btnSendEmail = document.querySelector(".send-email");


/* função que verifica a cada momento se o email é válido */
function verifyEmail() {
    let email = emailInpt.value,
        regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        
        if(regex.test(email)){
            validEmail();
            return true;
        }
        else{
            invalidEmail();
            return false;
        }
}


/* enviar email */
function sendEmail() {
    if (verifyEmail()){
        save()
        window.location.href = "redirect.html";
    }
}

function save(){
    let email = emailInpt.value
    localStorage.setItem("email", email);
}
/* se o email for válido estas alterações são realizadas no DOM */
function validEmail() {
    let failText = document.querySelector("#email-fail");

    failText.innerHTML = ""
    
    emailInpt.classList.remove("invalid-email");
    btnSendEmail.classList.remove("invalid-button");
    btnSendEmail.classList.add("valid-button")
}

/* se o email for inválido estas alterações são realizadas no DOM */
function invalidEmail() {
    let failText = document.querySelector("#email-fail");
    
    failText.innerHTML = "Valid email required"
    btnSendEmail.classList.remove("valid-button");
    emailInpt.classList.add("invalid-email");
    btnSendEmail.classList.add("invalid-button");
}


btnSendEmail.addEventListener("click", sendEmail)
emailInpt.addEventListener("input", verifyEmail)
