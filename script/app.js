
document.addEventListener('DOMContentLoaded', () => {
    const menuHamburguer = document.querySelector('#check-icon');
    const menuNav = document.querySelector('.menu-nav');

    menuHamburguer.addEventListener('click', () => {
        menuNav.classList.toggle('oppen');
    });
});

