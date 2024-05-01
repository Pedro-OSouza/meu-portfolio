const btns = document.querySelectorAll('button'),
        sobreBtn = document.querySelector("#sobre-btn"),
        linksBtn = document.querySelector("#links-btn"),
        text = document.querySelector(".text"),
        links = document.querySelector(".links");

btns.forEach(button => {
    button.addEventListener('click', () => {
        btns.forEach(btn => {
            btn.classList.toggle('active')
            console.log("evento disparado")
        })
    })
})

sobreBtn.addEventListener('click', () => {
    text.style.left = "0"
    links.style.left = "100%"
})

linksBtn.addEventListener('click', () => {
    text.style.left = "-100%"
    links.style.left = "0"
})