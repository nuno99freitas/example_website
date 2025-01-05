+++
title = 'Upload Long Event'
url = '/upload-long-event'
+++

{{< print_upload_images >}}

<div id="eventDetails"></div>
<form id="eventForm" onsubmit="saveEvents(event)">
    <!-- Title with a larger font size -->
    <h2 class="title">Upload Long Event</h2>
    <!-- Description with a smaller font size -->
    <h2 class="description">Here you can Add to some of the values (ex: Title, Description, Add Photos)</h2>
    <!-- Predefined Title -->
    <label for="eventTitle">Event Title*:</label><br>
    <input type="text" id="eventTitle" name="eventTitle" value=""><br><br>
    <label for="eventDescr">Event Desc*:</label><br>
    <textarea id="eventDescr" name="eventDescr" rows="10" cols="50"></textarea><br><br>
    <label for="eventPlace">Event Place*:</label><br>
    <input type="text" id="eventPlace" name="eventPlace" value="" required><br><br>
    <label for="eventTicket">Entrada*:</label><br>
    <input type="text" id="eventTicket" name="eventTicket" value="" required><br><br>
    <select id="imageName1" name="imageName">
        <option value="">Select an image</option>
            {{ range $index, $item := $data }}
        <option value="{{ $item.name }}">{{ $item.name }}</option>
            {{ end }}
    </select>
    <select id="imageName2" name="imageName">
        <option value="">Select an image</option>
            {{ range $index, $item := $data }}
        <option value="{{ $item.name }}">{{ $item.name }}</option>
            {{ end }}
    </select>
    <select id="imageName3" name="imageName">
        <option value="">Select an image</option>
            {{ range $index, $item := $data }}
        <option value="{{ $item.name }}">{{ $item.name }}</option>
            {{ end }}
    </select>
    <select id="imageName4" name="imageName">
        <option value="">Select an image</option>
            {{ range $index, $item := $data }}
        <option value="{{ $item.name }}">{{ $item.name }}</option>
            {{ end }}
    </select>
    <select id="imageName5"  name="imageName">
        <option value="">Select an image</option>
            {{ range $index, $item := $data }}
        <option value="{{ $item.name }}">{{ $item.name }}</option>
            {{ end }}
    </select>
    <select id="imageName6" name="imageName">
        <option value="">Select an image</option>
            {{ range $index, $item := $data }}
        <option value="{{ $item.name }}">{{ $item.name }}</option>
            {{ end }}
    </select>
    <!-- <h1 class="page-title"> {{ .Get "title" }}</h1> -->
    <!-- <h1 class="page-title"> {{ .Get "title" }}</h1> -->
    <!-- <h1 class="page-title"> {{ .Get "title" }}</h1> -->
    <button type="button" onclick="refreshImageList()">Refresh List</button><br><br>
    <!-- <h1 class="page-title"> {{ .Get "title" }}</h1> -->
    <div class = "full_border">
        <div class="ALL_Event">
            <div class="prog_break"></div>
            <div class="prog_break"></div>
            <div class="prog_break"></div>
            <div class="event_title" id="displayedTitle"> </div>
            <div class="prog_break"></div>
            <div class="prog_break"></div>
            <div class="prog_break"></div>
            <div class="Event_info">
                <div class="third_box">
                    <div id="displayed_type"></div>
                    <div id="displayed_place"></div>
                </div>
                <div class="two_third_box">
                    <div class="Event_info">
                        <div class="half_box" style="background-color:rgb(255, 255, 255); text-align:right;">
                            <div id="displayed_date"></div>
                            <div id="displayed_hour"></div>
                        </div>
                        <div class="half_box" id="displayed_price" style="background-color:rgb(255, 255, 255); text-align:right;"> </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sliding_images_container" id="imageSliderContainer">
                <img id="selectedImage1" alt=" " class="image_sl">
                <img id="selectedImage2" alt=" " class="image_sl">
                <img id="selectedImage3" alt=" " class="image_sl">
                <img id="selectedImage4" alt=" " class="image_sl">
                <img id="selectedImage5" alt=" " class="image_sl">
                <img id="selectedImage6" alt=" " class="image_sl">
        </div>
        <div class="ALL_Event">
            <div class="prog_break"></div>
            <div class="prog_break"></div>
            <div class="event_descripiton" id="displayedDesc"></div>
        </div>
    </div>            
    <div class="prog_break"></div>
    <div class="prog_break"></div>
    <div class="prog_break"></div>
    <button type="submit">Submit EVENT</button>
</form>



<script>
    // Parse the URL parameters
    const params = new URLSearchParams(window.location.search);
    const eventTitle = params.get('eventTitle'); // Capture the eventTitle from the URL
    const eventDescr = params.get('eventDescription')
    const eventType = params.get('eventType')
    const eventDate = params.get('eventDate')
    const eventHour = params.get('eventHour')
    const eventMinute = params.get('eventMinute')
    document.getElementById('displayed_price').textContent = 'entrada:';

    // If eventTitle is found in the URL, set it as the value of the eventTitle input field
    if (eventTitle) {
        document.getElementById('eventTitle').value = eventTitle;
        document.getElementById('displayedTitle').textContent = eventTitle;

    }
    if (eventDescr) {
        document.getElementById('eventDescr').value = eventDescr;
        document.getElementById('displayedDesc').textContent = eventDescr;

    }
    
    if (eventType) {
        document.getElementById('displayed_type').textContent = eventType;

    }

    if(eventDate) {
        const date = new Date(eventDate);
        const weekdays = ['dom.', 'seg.', 'ter.', 'qua.', 'qui.', 'sex.', 'sáb.'];
        const months = ['/01', '/02', '/03', '/04', '/05', '/06', '/07', '/08', '/09', '/10', '/11', '/12'];
        const dayOfWeek = weekdays[date.getDay()];
        const day = date.getDate().toString().padStart(2, '0');
        const month = months[date.getMonth()];       
        const formattedDate = `${dayOfWeek} ${day}${month}`;
        document.getElementById('displayed_date').textContent = formattedDate;
    }

    if(eventHour && eventMinute) {
        const hours = `${eventHour}h${eventMinute}`;
        document.getElementById('displayed_hour').textContent = hours;
    }


    // Add an event listener to the event title input field
    document.getElementById('eventTicket').addEventListener('input', function () {
        const enteredTicket = this.value; // Get the entered value
        const displayedPrice = document.getElementById('displayed_price');

        if (displayedPrice) {
            displayedPrice.style.display = 'block'; // Show the title
            displayedPrice.textContent = `entrada: ${enteredTicket}`; // Update the title content
        } else {
            displayedPrice.style.display = 'block'; // Show the title
            displayedPrice.textContent =  `entrada:`; // Hide the title if input is empty
        }
    });
    
    // Add an event listener to the event title input field
    document.getElementById('eventPlace').addEventListener('input', function () {
        const enteredPlace = this.value; // Get the entered value
        const titleContainer = document.getElementById('displayed_place');
        const displayedPlace = document.getElementById('displayed_place');

        if (displayedPlace) {
            displayedPlace.style.display = 'block'; // Show the title
            displayedPlace.textContent = `${enteredPlace}`; // Update the title content
        } else {
            displayedPlace.style.display = 'block'; // Show the title
            displayedPlace.textContent =  ``; // Hide the title if input is empty
        }
    });


    // Add an event listener to the event title input field
    document.getElementById('eventTitle').addEventListener('input', function () {
        const enteredTitle = this.value; // Get the entered value
        const titleContainer = document.getElementById('titleContainer');
        const displayedTitle = document.getElementById('displayedTitle');

        if (enteredTitle) {
            displayedTitle.style.display = 'block'; // Show the title
            displayedTitle.textContent = `${enteredTitle}`; // Update the title content
        } else {
            displayedTitle.style.display = 'block'; // Show the title
            displayedTitle.textContent =  `${eventTitle}`; // Hide the title if input is empty
        }
    });


        // Add an event listener to the event title input field
    document.getElementById('eventDescr').addEventListener('input', function () {
        const enteredDesc = this.value; // Get the entered value
        const displayedDesc = document.getElementById('displayedDesc');
        // Convert text into HTML paragraphs

        if (enteredDesc) {
            const parsedText = enteredDesc
                ? enteredDesc
                    .split('\n\n') // Split by double line breaks for paragraphs
                    .map(paragraph => paragraph.split('\n').join('<br>')) // Replace single line breaks with <br>
                    .map(paragraph => `<p>${paragraph}</p>`) // Wrap each paragraph in <p> tags
                    .join('') // Combine everything into one string
                : enteredDesc.split('\n').join('<br>'); // Replace single line breaks with <br> if no paragraphs

            displayedDesc.textContent =  ``; // Hide the title if input is empty
            displayedDesc.innerHTML = parsedText; // Update the title content

        } else {
            displayedDesc.textContent =  `${eventDescr}`; // Hide the title if input is empty
        }
    });
async function refreshImageList() {
    try {
        // Fetch updated image list from the server
        const response = await fetch('http://127.0.0.1:5000/upload');
        if (!response.ok) {
            throw new Error('Failed to fetch image list');
        }

        const data = await response.json(); // Parse the JSON response

        // Array of the dropdowns by ID
        const dropdownIds = ['imageName1', 'imageName2', 'imageName3', 'imageName4', 'imageName5', 'imageName6'];

        // Check if `images` exists in the response
        if (data.images && Array.isArray(data.images)) {
            dropdownIds.forEach((dropdownId) => {
                const dropdown = document.getElementById(dropdownId);

                // Clear existing options in the dropdown
                dropdown.innerHTML = '<option value="">Select an image</option>';

                // Populate the dropdown with new options
                data.images.forEach((image) => {
                    const option = document.createElement('option');
                    option.value = image.name;
                    option.textContent = image.name;
                    dropdown.appendChild(option);
                });
            });

            alert('Image List Refreshed!');
        } else {
            throw new Error('Invalid response structure');
        }
    } catch (error) {
        console.error('Error refreshing image list:', error);
        alert('Failed to refresh image list.');
    }
}
    // Loop over all the dropdowns and their corresponding image containers
    for (let i = 1; i <= 6; i++) {
        // Add event listener to the dropdown
        document.getElementById(`imageName${i}`).addEventListener('change', function () {
            const selectedImageName = this.value; // Get the selected value (image name)
            const selectedImage = document.getElementById(`selectedImage${i}`); // Get the corresponding image element

            if (selectedImageName) {
                // Assuming the images are served from a static folder like `/images/`
                const imageUrl = `/images/${selectedImageName}`;
                selectedImage.src = imageUrl; // Set the image source
                selectedImage.style.display = 'block'; // Make the image visible
            } else {
                // Hide the image if no selection is made
                selectedImage.style.display = 'none';
            }
        });
    }



</script>
<style>
        /* Style for the title */
        h2.title {
            font-size: 3em; /* Larger font size for the title */
            font-weight: bold;
            color: #333; /* Optional: Change the color */
        }

        /* Style for the description */
        h2.description {
            font-size: 1.5em; /* Smaller font size for the description */
            color: #666; /* Optional: Lighter color for description */
        }
.sliding_images_container {
    display: flex; /* Arrange images in a row */
    justify-content: flex-start; /* Align images to the left */
    align-items: center; /* Center images vertically */
    overflow-x: auto; /* Enable horizontal scrolling for extra content */
    white-space: nowrap; /* Prevent wrapping of images */
    gap: 3px; /* Add space between images */
    padding: 3px; /* Optional: Add padding inside the container */
    user-select: none; /* Disable text selection */
    -webkit-user-select: none; /* Safari support */
    -ms-user-select: none; /* Internet Explorer/Edge support */
}

.image_sl {
    user-select: none; /* Disable text selection for images */
    -webkit-user-select: none; /* Safari support */
    -ms-user-select: none; /* Internet Explorer/Edge support */
    pointer-events: none; /* Prevent images from interfering with dragging */
    flex-shrink: 0; /* Prevent images from shrinking */
    height: 600px !important; /* Set consistent height */
    width: auto; /* Adjust width automatically to maintain aspect ratio */
    object-fit: cover; /* Ensure the image fills its area without distortion */
    border: 3px solid #fff; /* Add 10px solid white border */
    box-sizing: border-box; /* Ensure the border is included in the total width/height */
}


/* Center the second image */
.sliding_images_container .image_sl:nth-child(1) {
    z-index: 1; /* Bring the second image to the front */
}




.image_container{
    padding-left: 10px;
    padding-right: 10px;
}

.half_box {
    width: 50%;
    font-size: 40px; /* Change this value to your desired font size */
    background-color: rgb(255, 255, 255);
    line-height: 1; /* Adjust this value for line spacing */

}

.event_descripiton{
    line-height: 1.2; /* Adjust this value for line spacing */
    font-size: 35px; /* Change this value to your desired font size */  
}

.third_box {
    width: 30%;
    font-size: 40px; /* Change this value to your desired font size */
    background-color: rgb(255, 255, 255);
    line-height: 1; /* Adjust this value for line spacing */

}
.two_third_box {
    width: 70%;
    font-size: 40px; /* Change this value to your desired font size */
    background-color: rgb(255, 255, 255);
    line-height: 1; /* Adjust this value for line spacing */

}


.event_title {
    font-size: 100px; /* Change this value to your desired font size */
    background-color: rgb(255, 255, 255);
    line-height: 0.8; /* Adjust this value for line spacing */
}

.ALL_Event{
    padding-left:100px;
    padding-right:100px;
}

.Event_info{
    display: flex; /* Enables Flexbox for the container */
    justify-content: space-between; /* Distributes the items with space between them */
}
.full_border{
    border-left: 10px;
    border-right: 10px;
    border-color: white;
}

.image_container{
    display: flex; /* Arrange images in a row */
    gap: 5px; /* Space between images */
	align-items: center;      /* Vertically centers the image */
    justify-content: center; /* Center the images (optional) */
}
.image-slider-container {
    position: relative;
    max-width: 100%; /* Adjust as needed */
    margin: auto;
    overflow: hidden; /* Hide overflowing images */
    border-radius: 10px; /* Optional: Rounded corners */
}

.image-slider {
    display: flex;
    transition: transform 0.5s ease; /* Smooth sliding effect */
    justify-content: center; /* Center images horizontally */
    align-items: center;    /* Center images vertically */
}

.slider-image {
    flex-shrink: 0;
    max-width: 100%; /* Ensure images take full container width */
    height: 600px; /* Adjust height as needed */
    object-fit: cover; /* Ensure the image fits properly */
}

.slider-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 1000;
    font-size: 20px;
    border-radius: 50%;
}

.slider-button.prev {
    left: 10px;
}

.slider-button.next {
    right: 10px;
}

.slider-button:hover {
    background-color: rgba(0, 0, 0, 0.8);
}   
</style>

<script>
let isMouseDown = false;
let startX;
let scrollLeft;

const slider = document.getElementById('imageSliderContainer');

// Mouse Down event (when user clicks the mouse on the image container)
slider.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - slider.getBoundingClientRect().left; // Use getBoundingClientRect() for more accurate calculation
    scrollLeft = slider.scrollLeft; // Get the current scroll position of the container
    slider.style.cursor = 'grabbing'; // Change the cursor to indicate dragging
});

// Mouse Move event (when the mouse is moving while clicked)
slider.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return; // If the mouse is not pressed, do nothing
    const x = e.pageX - slider.getBoundingClientRect().left; // Calculate mouse position relative to the container
    const walk = (x - startX) * 2; // Calculate the distance the mouse has moved
    slider.scrollLeft = scrollLeft - walk; // Scroll the container accordingly
});

// Mouse Up event (when the user releases the mouse button)
slider.addEventListener('mouseup', () => {
    isMouseDown = false;
    slider.style.cursor = 'grab'; // Reset the cursor to the default
});

// Mouse Leave event (if the mouse leaves the container while being pressed)
slider.addEventListener('mouseleave', () => {
    isMouseDown = false;
    slider.style.cursor = 'grab'; // Reset the cursor to the default
});

async function saveEvents(event) {
    alert('Trying to save the event...');
    const params = new URLSearchParams(window.location.search);

    // Capture form data
    const eventTitle = document.getElementById('eventTitle').value;
    const eventDescr = document.getElementById('eventDescr').value;
    const parsedText = eventDescr
                ? eventDescr
                    .split('\n\n') // Split by double line breaks for paragraphs
                    .map(paragraph => paragraph.split('\n').join('<br>')) // Replace single line breaks with <br>
                    .map(paragraph => `<p>${paragraph}</p>`) // Wrap each paragraph in <p> tags
                    .join('') // Combine everything into one string
                : eventDescr.split('\n').join('<br>'); // Replace single line breaks with <br> if no paragraphs
    const eventTicket = document.getElementById('eventTicket').value;
    const eventPlace = document.getElementById('eventPlace').value;    
    const eventDate = params.get('eventDate')
    const eventType = params.get('eventType')
    const shortTitle = params.get('eventTitle')
    const shortDesc = params.get('eventDescription')
    const AGRA = params.get('AGRA') || 'No';
    const RCA = params.get('RCA') || 'No';
    const ED = params.get('ED') || 'No';
    const NZ = params.get('NZ') || 'No';
    const imageName = params.get('imageName')

    //Correct Format Date
    const date = new Date(eventDate);
    const weekdays = ['dom.', 'seg.', 'ter.', 'qua.', 'qui.', 'sex.', 'sáb.'];
    const months = ['/01', '/02', '/03', '/04', '/05', '/06', '/07', '/08', '/09', '/10', '/11', '/12'];
    const dayOfWeek = weekdays[date.getDay()];
    const day = date.getDate().toString().padStart(2, '0');
    const month = months[date.getMonth()];       
    const formattedDate = `${dayOfWeek} ${day}${month}`;
    //Correct Format Hour
    const eventHour = params.get('eventHour')
    const eventMinute = params.get('eventMinute')
    const hours = `${eventHour}h${eventMinute}`;
    // Gather selected photos
    const photos = [];
    for (let i = 1; i <= 6; i++) {
        const photoValue = document.getElementById(`imageName${i}`).value;
        if (photoValue) {
            photos.push(photoValue); // Add non-empty selections
        }
    }

    // Prepare the form data for sending both file and JSON
    const formData_send = new FormData();
    formData_send.append('eventTitle', eventTitle); 
    formData_send.append('shortTitle', shortTitle); 
    formData_send.append('eventDescr', parsedText); 
    formData_send.append('shortDesc', shortDesc); 
    formData_send.append('eventDate', eventDate); 
    formData_send.append('formattedDate', formattedDate); 
    formData_send.append('eventHours', hours); 
    formData_send.append('eventTicket', eventTicket); 
    formData_send.append('eventPlace', eventPlace); 
    formData_send.append('eventType', eventType);
    formData_send.append('photos', JSON.stringify(photos));
    formData_send.append('AGRA', AGRA);
    formData_send.append('RCA', RCA);
    formData_send.append('ED', ED);
    formData_send.append('NZ', NZ);
    formData_send.append('imageName', imageName);

    try {
        alert('Sending event to the backend');
        // Send a POST request to the server to save the event
        const response = await fetch('http://127.0.0.1:5000/upload', {
            method: 'POST',
            body: formData_send // Send form data as JSON
        });

        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Failed to save the event');
        }

        // Optional: Alert to show that the event was successfully saved
        alert('Event saved successfully!');

        // Redirect to the main menu (e.g., homepage or events list)
        window.location.href = '/docs/office/';  // Replace '/' with your main menu URL if it's different

    } catch (error) {
        alert(error)
        alert('Failed to save the event.');
    }
}

</script>

