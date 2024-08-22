document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "password123") {
        alert("Login successful!");
    } else {
        document.getElementById('errorMessage').innerText = "Invalid username or password. Please try again.";
    }

    document.getElementById('loginForm').reset();
});
