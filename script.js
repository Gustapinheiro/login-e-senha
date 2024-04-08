document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check credentials
    if (username === 'japa010' && password === 'senha123') {
        // Redirect to welcome page
        window.location.href = 'welcome.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
