document.addEventListener('DOMContentLoaded', () => {
    const btnIfr = document.querySelector('.btn-ifr'),
    containerIfr = document.querySelector('.ifr-container'),
    bodyIfr = document.querySelector('body'),
    headerIfr = document.querySelector('header');

    btnIfr.addEventListener('click', () => {
        containerIfr.classList.toggle('ifr-open');
        bodyIfr.classList.toggle('body-ifr-open')
        headerIfr.classList.toggle('header-ifr-open')
        window.scrollTo(0, containerIfr.offsetTop)
    });
});