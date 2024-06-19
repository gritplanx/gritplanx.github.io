document.getElementById('home-link').addEventListener('click', function() {
    showSection('home-section');
});

document.getElementById('problems-link').addEventListener('click', function() {
    showSection('problems-section');
});

document.getElementById('about-link').addEventListener('click', function() {
    showSection('about-section');
});

document.getElementById('login-link').addEventListener('click', function() {
    loginUser();
});

document.getElementById('logout-link').addEventListener('click', function() {
    logoutUser();
});

document.getElementById('problem-form').addEventListener('submit', function(e) {
    e.preventDefault();
    addProblem();
});

function showSection(sectionId) {
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('problems-section').style.display = 'none';
    document.getElementById('about-section').style.display = 'none';
    
    document.getElementById(sectionId).style.display = 'block';
}

function loginUser() {
    // Dummy login function
    alert('Logged in!');
    document.getElementById('login-link').style.display = 'none';
    document.getElementById('logout-link').style.display = 'block';
}

function logoutUser() {
    // Dummy logout function
    alert('Logged out!');
    document.getElementById('login-link').style.display = 'block';
    document.getElementById('logout-link').style.display = 'none';
}

function addProblem() {
    const title = document.getElementById('problem-title').value;
    const description = document.getElementById('problem-description').value;
    
    const problemItem = document.createElement('li');
    problemItem.innerHTML = `<strong>${title}</strong><p>${description}</p>`;
    
    document.getElementById('problems-container').appendChild(problemItem);
    
    document.getElementById('problem-title').value = '';
    document.getElementById('problem-description').value = '';
}
document.addEventListener('DOMContentLoaded', function() {
    fetch('/content')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching the content:', error);
        });
});
document.addEventListener('DOMContentLoaded', function() {
    fetch('/txt-files/owners_case_please-help.txt')
        .then(response => response.text())
        .then(data => {
            const contentDiv = document.getElementById('owners_case_please-help');
            contentDiv.textContent = data;
        })
        .catch(error => {
            console.error('Error fetching the text file:', error);
        });
});
// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo");
    const websiteName = document.querySelector(".website-name");

    // Example of changing the logo and website name after 5 seconds
    setTimeout(() => {
        logo.src = "/logos/GP-GO.png";
        websiteName.textContent = "Problems?";
    }, 5000);
});