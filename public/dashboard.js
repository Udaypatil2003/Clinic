document.addEventListener('DOMContentLoaded', () => {
    const doctorFilter = document.getElementById('doctor-filter');
    doctorFilter.addEventListener('change', filterDoctors);

    function filterDoctors() {
        const filterValue = doctorFilter.value.toLowerCase();
        const doctorCards = document.querySelectorAll('.doctor--card');

        doctorCards.forEach(card => {
            const status = card.getAttribute('data-status').toLowerCase();
            if (filterValue === 'all' || filterValue === status) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
});

let menu = document.querySelector('.menu');
let sidebar = document.querySelector('.sidebar');
let mainContent = document.querySelector('.main--content');

menu.onclick = function() {
    sidebar.classList.toggle('active');
    mainContent.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
    var currentPath = window.location.pathname;
    
    if (currentPath.includes('dashboard.html')) {
        document.getElementById('dashboard-tab').classList.add('active');
    } else if (currentPath.includes('patients.html')) {
        document.getElementById('patient-tab').classList.add('active');
    } else if (currentPath.includes('schedule.html')) {
        document.getElementById('schedule-tab').classList.add('active');
    } else if (currentPath.includes('doctor.html')) {
        document.getElementById('doctor-tab').classList.add('active');
    }
});

function handleAddPatient() {
    window.location.href = '../Addpatient/addpatient.html'; 
}

function handleAddDoctor() {
    window.location.href = 'add-doctor.html'; 
}

function handlePatient() {
    window.location.href = 'patient.html';
}
