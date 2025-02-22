window.onload = function() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("customAlert1").style.display = "block";
};

// Function to close first alert and open second alert
function showNextAlert() {
    document.getElementById("customAlert1").style.display = "none";
    document.getElementById("customAlert2").style.display = "block";
}

// Function to close all alerts
function closeAllAlerts() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("customAlert2").style.display = "none";
}