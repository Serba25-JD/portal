document.addEventListener('DOMContentLoaded', function() {
    const buttonInformation = document.getElementById('btn-information');
    buttonInformation.addEventListener('click', function() {
        const buttonContainer = document.getElementById('information');
        const menuContainer = document.getElementById('menu-container');
        menuContainer.classList.remove('hidden');
        buttonContainer.classList.add('hidden');
    });
    const menuClose = document.getElementById('menu-close');
    menuClose.addEventListener('click', function() {
        const buttonContainer = document.getElementById('information');
        const menuContainer = document.getElementById('menu-container');
        buttonContainer.classList.remove('hidden');
        menuContainer.classList.add('hidden');
    });
});