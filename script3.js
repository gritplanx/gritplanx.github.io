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
