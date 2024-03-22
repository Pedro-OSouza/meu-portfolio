document.addEventListener('DOMContentLoaded', () => {
    const closeIframeBtn = document.querySelector('.close-iframe-btn');
    const iframeContainer = parent.document.querySelector('.ifr-container');
    const body = parent.document.querySelector('body');
    const header = parent.document.querySelector('header');

    closeIframeBtn.addEventListener('click', () => {
        iframeContainer.classList.remove('ifr-open');
        body.classList.remove('body-ifr-open');
        header.classList.remove('header-ifr-open');
    });
});