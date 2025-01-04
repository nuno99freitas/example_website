+++ 
date = '2024-11-25T12:03:59Z'
draft = false
title = 'Login'
weight = 10
+++

<h1 class="page-title">Login</h1>

<p>Please log in to access the BackOffice.</p>

<!-- Login Form -->
<form id="loginForm" onsubmit="handleLogin(event)">
    <label for="username">Username:</label><br>
    <input type="text" id="username" name="username" required><br><br>
    <label for="password">Password:</label><br>
    <input type="password" id="password" name="password" required><br><br>
    <button type="submit">Login</button>
</form>

<script>
function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace this with your backend login API call
    if (username === 'admin' && password === 'password123') {
        sessionStorage.setItem('loggedIn', 'true');
        alert('Login successful!');
        window.location.href = '/docs/office2'; // Redirect to the upload page
    } else {
        alert('Invalid username or password');
    }
}
</script>
