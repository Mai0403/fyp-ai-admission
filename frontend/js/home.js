// Function to handle file upload (either via input or drag-and-drop)
function uploadFile(file) {
    var fileNameDisplay = document.getElementById('fileName');
    var cancelButton = document.getElementById('cancelButton');

    if (file) {
        // Display the name of the selected file
        fileNameDisplay.textContent = "✅ File:  " + file.name;
        console.log("File selected: ", file.name);

        // Show the cancel button when a file is selected
        cancelButton.style.display = 'inline';
    } else {
        fileNameDisplay.textContent = "No file chosen";
        cancelButton.style.display = 'none'; // Hide cancel button if no file is selected
    }
}

// Function to handle file input change
document.getElementById('fileInput').addEventListener('change', function() {
    if (this.files.length > 0) {
        uploadFile(this.files[0]);
    }
});

// Function to cancel the selected file
document.getElementById('cancelButton').addEventListener('click', function() {
    var fileInput = document.getElementById('fileInput');
    var fileNameDisplay = document.getElementById('fileName');
    var cancelButton = document.getElementById('cancelButton');

    // Reset the file input value (clear the file)
    fileInput.value = '';

    // Reset the display text and hide the cancel button
    fileNameDisplay.textContent = "No file chosen";
    cancelButton.style.display = 'none';
});


// Drag-and-drop functionality
var dropZone = document.getElementById('dropZone');

// When a file is dragged over the drop zone
dropZone.addEventListener('dragover', function(e) {
    e.preventDefault();
    e.stopPropagation();
    dropZone.classList.add('dragover');
    dropZone.textContent = "Drop the file here!";
    dropZone.classList.add('flex', 'items-center', 'justify-center');
});

// When the dragged file leaves the drop zone
dropZone.addEventListener('dragleave', function(e) {
    e.preventDefault();
    e.stopPropagation();
    dropZone.classList.remove('dragover');
    dropZone.textContent = "Drag a file here or click below";
    dropZone.classList.add('flex', 'items-center', 'justify-center');
});

// When the file is dropped into the drop zone
dropZone.addEventListener('drop', function(e) {
    e.preventDefault();
    e.stopPropagation();
    dropZone.classList.remove('dragover');
    dropZone.textContent = "Drag a file here or click below";
    dropZone.classList.add('flex', 'items-center', 'justify-center');

    if (e.dataTransfer.files.length > 0) {
        // Upload the dropped file
        uploadFile(e.dataTransfer.files[0]);
    }
});

// Expand drop zone
function expandDropZone() {
    document.getElementById('dropZone').classList.add('h-64', 'bg-gray-100');
}

function shrinkDropZone() {
    document.getElementById('dropZone').classList.remove('h-64', 'bg-gray-100');
}

// Logout button
function confirmLogout() {
    let confirmation = confirm("Are you sure you want to log out?");
    if (confirmation) {
        // Redirect to another page, e.g., login page
        window.location.href = "login.html"; // Change this to your actual login page
    }
}

// Analyze Button
document.getElementById('analyzeButton').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    
    // Check if a file is selected
    if (!fileInput.files.length) {
        // Show the modal if no file is uploaded
        document.getElementById('warningModal').classList.remove('hidden');
    } else {
        // Navigate to another page (e.g., result.html) if file is uploaded
        window.location.href = 'scan.html';
    }
});

function closeModal() {
    document.getElementById('warningModal').classList.add('hidden');
}


