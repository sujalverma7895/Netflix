let editProfileBtn = document.getElementById('editProfileBtn');

function edit() {
    window.location.href = 'Edit.html'
}
document.addEventListener('DOMContentLoaded', function () {
    let displayNameSpan = document.getElementById('displayName');
    let displayEmailSpan = document.getElementById('displayEmail');

    // Load profile details from Local Storage
    if (localStorage.getItem('name')) {
        displayNameSpan.textContent = localStorage.getItem('name');
    }
    if (localStorage.getItem('email')) {
        displayEmailSpan.textContent = localStorage.getItem('email');
    }
});
