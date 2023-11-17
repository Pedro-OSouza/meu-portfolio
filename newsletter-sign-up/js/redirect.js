const backBtn = document.querySelector(".back-btn");

function getEmail() {
    let userEmail = localStorage.getItem("email");
    let span = document.querySelector(".emailSpan");

    span.innerHTML = userEmail;
}

function back() {
    window.location.href = "./index.html";
}

backBtn.addEventListener("click", back)
document.addEventListener("DOMContentLoaded", getEmail)