
function responsive() {
    let img = document.querySelector(".responsive");
    let tela = window.innerWidth;

    if (tela < 500) {
        img.src = "../assets/images/illustration-sign-up-mobile.svg"
    } else {
        img.src = "./assets/images/illustration-sign-up-desktop.svg";
    }
}

document.addEventListener("DOMContentLoaded", responsive);
window.addEventListener("resize", responsive);