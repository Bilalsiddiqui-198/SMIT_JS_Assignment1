window.onload = function() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("customAlert1").style.display = "block";
};

function showNextAlert() {
    document.getElementById("customAlert1").style.display = "none";
    document.getElementById("customAlert2").style.display = "block";
}

function closeAllAlerts() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("customAlert2").style.display = "none";
}