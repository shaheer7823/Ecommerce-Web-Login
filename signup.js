function validateForm() {
    // Get form fields
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();

    // Error message elements
    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    let valid = true;

    // Username validation
    if (username === "") {
        usernameError.textContent = "Username is required";
        usernameError.style.display = "block";
        valid = false;
    } else {
        usernameError.style.display = "none";
    }

    // Email validation
    if (email === "") {
        emailError.textContent = "Email is required";
        emailError.style.display = "block";
        valid = false;
    } else if (!validateEmail(email)) {
        emailError.textContent = "Please enter a valid email";
        emailError.style.display = "block";
        valid = false;
    } else {
        emailError.style.display = "none";
    }

    // Password validation
    if (password === "") {
        passwordError.textContent = "Password is required";
        passwordError.style.display = "block";
        valid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        passwordError.style.display = "block";
        valid = false;
    } else {
        passwordError.style.display = "none";
    }

    // Confirm password validation
    if (confirmPassword === "") {
        confirmPasswordError.textContent = "Please confirm your password";
        confirmPasswordError.style.display = "block";
        valid = false;
    } else if (confirmPassword !== password) {
        confirmPasswordError.textContent = "Passwords do not match";
        confirmPasswordError.style.display = "block";
        valid = false;
    } else {
        confirmPasswordError.style.display = "none";
    }

    return valid;
}

// Email format validation
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
