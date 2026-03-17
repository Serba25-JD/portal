document.addEventListener('DOMContentLoaded', function() {
    const npm = document.getElementById('npm');
    const passsword = document.getElementById('password');
    const button = document.getElementById('login');
    button.addEventListener('click', function() {
        window.location.href = './home';
    })
})