function submiit() {
    var moreText = document.getElementById("more");
    moreText.style.display = "block"; // Show the hidden content
    let hidden = document.getElementById("hide");
    hidden.style.display ="none";
}

function login() {
    let val = document.getElementById('email').value;
    let pas = document.getElementById('passs').value;
    let errorMessage = document.getElementById('error-message');
    if (val == '' || pas == '') {
        errorMessage.textContent = "Please enter both Email and Password.";
        return;
    }
    if (val == 'sujalsoni7895@gmail.com' && pas == 'sujal@123') {
        // alert("Login successful!");
        // Redirect to another page
        window.location.href = "profile.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
    document.getElementById('email').value="";
    document.getElementById('passs').value="";


}
function set() {
    let value = document.getElementById('passs');
    let eye=document.getElementById('eye');
    eye.style.display="block"

    if (value.getAttribute('type') == 'password') {
        value.setAttribute('type', 'type');
        eye.setAttribute('class','fa fa-eye')

    } else {
        value.setAttribute('type', 'password');
        eye.setAttribute('class','fa fa-eye-slash')

    }
}
function start(){
    let value = document.getElementById('sub').value;
    if (value == '' ) {
        alert("Please enter both Email and Password.") ;
        return;
    }
    else if (value == 'singhalvansh74@gmail.com') {
        // alert("Login successful!");
        // Redirect to another page
        window.location.href = "profile.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
    document.getElementById('sub').value = "";
}

function sign() {
    window.location.href = 'NetflixLogin.html'
}


// Function to handle sending OTP request
function sendOTP() {
    const email = document.getElementById('email').value; // Get the user's email from the input field
  
    fetch('/send-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'OTP sent successfully') {
        alert('An OTP has been sent to your email. Please check your email for the OTP.');
      } else {
        alert('Failed to send OTP. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to send OTP. Please try again.');
    });
  }
  