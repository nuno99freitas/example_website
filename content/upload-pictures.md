+++ 
date = '2024-11-25T12:03:59Z'
draft = false
title = 'Office2'
weight = 11
+++

<h1 class="page-title">Office2</h1>

<p>Welcome to the BackOffice. Choose an option below:</p>

<!-- Form for uploading a picture -->
<form onsubmit="uploadPicture(event)">
    <label for="picture">Upload a picture:</label><br>
    <input type="file" id="picture" name="picture" accept="image/*"><br><br>
    <button type="submit">Upload</button>
</form>

<!-- Form for writing to JSON -->
<form onsubmit="writeToJson(event)">
    <label for="jsonData">Enter JSON data:</label><br>
    <textarea id="jsonData" name="jsonData" rows="4" cols="50" placeholder='image_name.jpg'></textarea><br><br>
    <button type="submit">Write to JSON</button>
</form>
<button type="button" onclick="window.location.href='/docs/office'">Go Back to Main Office</button>


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
<script>

// Function to handle writing to JSON
// Function to handle writing to JSON
async function writeToJson(event) {
    event.preventDefault();
    const jsonData = document.getElementById('jsonData').value;

    if (!jsonData) {
        alert('Please enter JSON data.');
        return;
    }

    try {
        const parsedData = jsonData;  // Parse the JSON to validate it

        // Prepare the form data for sending both file and JSON
        const formData = new FormData();
        formData.append('image_name', parsedData); // Make sure json_data is included

        const response = await fetch('http://127.0.0.1:5000/upload', {
            method: 'POST',
            body: formData  // Send as FormData, which allows sending both file and JSON
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.json_data);
        } else {
            alert(result.error || 'Failed to write to JSON');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Invalid JSON format or error writing to file');
    }
}
</script>

<script>
// Function to handle picture upload
async function uploadPicture(event) {
    event.preventDefault();
    const fileInput = document.getElementById('picture');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please select a picture to upload.');
        return;
    }

    const formData = new FormData();
    formData.append('picture', file);

    try {
        const response = await fetch('http://127.0.0.1:5000/upload', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.file_upload);
        } else {
            alert(result.error || 'Failed to upload picture');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error uploading picture');
    }
}

</script>
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
