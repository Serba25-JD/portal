document.addEventListener('DOMContentLoaded', function() {
    showChart();
    initsButton();
});

function showChart() {
    const canvasChart = document.getElementById('chart')?.getContext('2d');;
    if(canvasChart) {
        new Chart(canvasChart, {
            type: 'bar',
            data: {
                labels: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6'],
                datasets: [
                    {
                        label: 'Jumlah Mahasiswa',
                        data: [1800, 1600, 1400, 1200, 800, 400],
                        backgroundColor: [
                            'rgba(254, 217, 0, 1)',
                            'rgba(0, 162, 233, 1)',
                            'rgba(13, 10, 10, 1)',
                            'rgba(254, 217, 0, 0.1)',
                            'rgba(254, 217, 0, 0.6)',
                            'rgba(0, 162, 233, 0.6)'
                        ],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    };
};

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