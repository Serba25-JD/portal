document.addEventListener('DOMContentLoaded', function() {
    const buttonInformation = document.getElementById('info-btn');
    buttonInformation.addEventListener('click', function() {
        const infoContainer = document.getElementById('info-container');
        infoContainer.classList.add('hidden');
        const loginContainer = document.getElementById('login-container');
        loginContainer.classList.remove('hidden');
    });
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('password-btn');
    togglePassword.addEventListener('click', function() {
        const icon = this.querySelector('svg');
        if(passwordInput.type === 'text') {
            passwordInput.type = 'password';
            icon.setAttribute('data-feather', 'eye');
        } else {
            passwordInput.type = 'text';
            icon.setAttribute('data-feather', 'eye-off');
        };
        feather.replace();
    });
    const buttonLogin = document.getElementById('login');
    buttonLogin.addEventListener('click', function() {
        window.location.href = 'login/';
    });
});