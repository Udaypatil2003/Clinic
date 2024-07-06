let menu = document.querySelector('.menu')
let sidebar = document.querySelector('.sidebar')
let mainContent = document.querySelector('.main--content')
menu.onclick = function() {
    sidebar.classList.toggle('active')
    mainContent.classList.toggle('active')
}
function handleAddPatient() {
    // Example: Redirect to another page or perform an action
    window.location.href = '../Addpatient/addpatient.html'; // Replace with your desired action
}
function searchFun() {
    let filter = document.getElementById('myInput').value.toUpperCase();
    let myTable = document.getElementById('myTable');
    let tr = myTable.getElementsByTagName('tr');
    
    for (let i = 1; i < tr.length; i++) {
        let tds = tr[i].getElementsByTagName('td');
        let found = false;
        
        for (let j = 0; j < tds.length; j++) {
            if (tds[j]) {
                let textValue = tds[j].textContent || tds[j].innerText;
                if (textValue.toUpperCase().indexOf(filter) > -1) {
                    found = true;
                    break;
                }
            }
        }
        
        if (found) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}

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