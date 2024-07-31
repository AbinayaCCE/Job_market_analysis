document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedPassword = localStorage.getItem(username);

    if (password === storedPassword) {
        alert('Login successful');
        window.location.href = 'index.html'; // Redirects to the dashboard
    } else {
        alert('Invalid username or password. If you are not registered, please sign up.');
    }
});
