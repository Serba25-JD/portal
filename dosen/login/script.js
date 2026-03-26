document.addEventListener('DOMContentLoaded', function() {
    initsButton();
});

function initsButton() {
    showStudents();
    showStudentsKRS();
};

function clearHidden(targetId) {
    const elements = document.querySelectorAll('.container');
    elements.forEach(element => {
        element.classList.add('hidden');
    });
    document.getElementById(targetId).classList.remove('hidden');
}

function showStudents() {
    const buttonStudents = document.getElementById('btn-students');
    buttonStudents.addEventListener('click', function(event) {
        clearHidden('students');
    });
};

function showStudentsKRS() {
    const buttonStudentsKRS = document.getElementById('btn-students-krs');
    buttonStudentsKRS.addEventListener('click', function(event) {
        clearHidden('students-krs');
    });
};