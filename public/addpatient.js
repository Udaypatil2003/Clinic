document.addEventListener('DOMContentLoaded', function () {
    let menu = document.querySelector('.menu');
    let sidebar = document.querySelector('.sidebar');
    let mainContent = document.querySelector('.main--content');
    
    // Toggle sidebar and main content active class
    menu.onclick = function() {
        sidebar.classList.toggle('active');
        mainContent.classList.toggle('active');
    };
});
document.addEventListener('DOMContentLoaded', function () {
    var currentPath = window.location.pathname;
    
    if (currentPath.includes('dashboard.html')) {
        document.getElementById('dashboard-tab').classList.add('active');
    } else if (currentPath.includes('patients.html')) {
        document.getElementById('patients-tab').classList.add('active');
    }
     else if (currentPath.includes('Schedule.html')) {
        document.getElementById('Shedule-tab').classList.add('active');
    }
     else if (currentPath.includes('Doctor.html')) {
        document.getElementById('Doctor-tab').classList.add('active');
    }
     else if (currentPath.includes('patients.html')) {
        document.getElementById('patients-tab').classList.add('active');
    }
});
function handlePatient() {
    // Example: Redirect to another page or perform an action
    window.location.href = 'patient.html'; // Replace with your desired action
}
