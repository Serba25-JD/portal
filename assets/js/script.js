document.addEventListener('DOMContentLoaded', function() {
    const buttonInformation = document.getElementById('btn-information');
    buttonInformation.addEventListener('click', function() {
        const buttonContainer = document.getElementById('information');
        const loginContainer = document.getElementById('login-container');
        loginContainer.classList.remove('hidden');
        buttonContainer.classList.add('hidden');
    });
    const buttonLogin = document.getElementById('login');
    buttonLogin.addEventListener('click', function() {
        const loginContainer = document.getElementById('login-container');
        const menuContainer = document.getElementById('menu-container');
        loginContainer.classList.add('hidden');
        menuContainer.classList.remove('hidden');
    });
    const menuClose = document.getElementById('menu-close');
    menuClose.addEventListener('click', function() {
        const loginContainer = document.getElementById('login-container');
        const menuContainer = document.getElementById('menu-container');
        loginContainer.classList.remove('hidden');
        menuContainer.classList.add('hidden');
    })
});