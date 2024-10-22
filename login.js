document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Sample hardcoded credentials
    const correctEmail = "test@example.com";
    const correctPassword = "123456";

    // Get the input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate the credentials
    if (email === correctEmail && password === correctPassword) {
        window.location.href = "index.html"; // Redirect to new website
    } else {
        document.getElementById('errorMessage').textContent = "Invalid email or password.";
    }
});
