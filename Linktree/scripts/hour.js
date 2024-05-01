 function saudar() {
    let currentHour = new Date().getHours(),
     saudacoes = {
        "manha": "bom dia",
        "tarde": "boa tarde",
        "noite": "boa noite"
    };
    
    if (currentHour >= 5 && currentHour < 12 ) {
        return saudacoes.manha
    }
    if (currentHour >= 12 && currentHour < 18 ) {
        return saudacoes.tarde
    }
    return saudacoes.noite

}

window.onload = () => {
    let sayHour = document.querySelector(".hour")
    sayHour.innerText = saudar();
}


