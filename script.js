    const content = document.querySelector('.content');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.btnLogin'); 
    const iconClose = document.querySelector('.icon-close'); 


    registerLink.addEventListener('click', () => {
        content.classList.add('active');
    });

    loginLink.addEventListener('click', () => {
        content.classList.remove('active');
    });

    btnPopup.addEventListener('click', () => {
        content.classList.add('active-popup');
    });
    iconClose.addEventListener('click', () => {
        content.classList.remove('active-popup');
    });

