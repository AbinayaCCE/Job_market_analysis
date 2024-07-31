document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;

    // Simple client-side storage with localStorage (not secure for real applications)
    localStorage.setItem(username, password);
    alert('Registered successfully! You can now log in.');
    window.location.href = 'login.html';
});
