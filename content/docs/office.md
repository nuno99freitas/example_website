+++ 
date = '2024-11-25T12:03:59Z'
draft = false
title = 'Office'
weight = 11
+++

<h1 class="page-title">Office</h1>

<p>Welcome to the BackOffice. Choose an option below:</p>

<!-- Navigation Buttons -->
<div>
    <button onclick="window.location.href='/upload-pictures'">MaNaGe PiCtUrEs</button><br><br>
    <button onclick="window.location.href='/upload-events'">ManaGe EvENTS</button><br><br>
    <button onclick="window.location.href='/upload-FoodMenu'">Manage Menu</button><br>
</div>

<script>
window.onload = function() {
    // Check if the user is logged in
    const loggedIn = sessionStorage.getItem('loggedIn');
    if (!loggedIn) {
        alert('Please log in first.');
        window.location.href = '/login'; // Redirect to the login page
    }
};
</script>
