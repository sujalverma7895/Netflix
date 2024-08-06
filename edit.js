document.addEventListener('DOMContentLoaded', function () {
    let nameInput = document.getElementById('nameInput');
    let emailInput = document.getElementById('emailInput');
    let editProfileForm = document.getElementById('editProfileForm');
    let saveChangesBtn = document.getElementById('saveChangesBtn');
    let cancelBtn = document.getElementById('cancelBtn');

    if (localStorage.getItem('name')) {
        nameInput.value = localStorage.getItem('name');
    }
    if (localStorage.getItem('email')) {
        emailInput.value = localStorage.getItem('email');
    }

    saveChangesBtn.addEventListener('click', function (event) {
        event.preventDefault();

        localStorage.setItem('name', nameInput.value);
        localStorage.setItem('email', emailInput.value);
        window.location.href = 'profile.html'; 
    });

    cancelBtn.addEventListener('click', function (event) {
        event.preventDefault();

        nameInput.value = localStorage.getItem('name');
        emailInput.value = localStorage.getItem('email');
    });
});

 function can(){
    window.location.href="profile.html"
 }