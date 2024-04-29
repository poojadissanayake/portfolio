fetch('about.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('aboutMe-placeholder').innerHTML = html;
    })
    .catch(error => console.error('Error loading the aboutme:', error));

fetch('projects.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('projects-placeholder').innerHTML = html;
    })
    .catch(error => console.error('Error loading projects', error));

fetch('contact.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('contact-placeholder').innerHTML = html;
    })
    .catch(error => console.error('Error loading projects', error));