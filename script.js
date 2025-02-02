// Image Slider
let currentIndex = 0;

function showSlide(index) {
    const slider = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slider img').length;
    
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    
    slider.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

setInterval(nextSlide, 3000);

// Countdown Timer
const weddingDate = new Date('March 27, 2024 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    document.getElementById('countdown').innerHTML = `<h3>${days} days to go!</h3>`;

    if (timeLeft < 0) {
        document.getElementById('countdown').innerHTML = "<h3>We're Married! 🎉</h3>";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// RSVP Form
function openRsvpForm() {
    document.getElementById('rsvp-form').style.display = 'block';
}

function closeRsvpForm() {
    document.getElementById('rsvp-form').style.display = 'none';
}

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    fetch('https://script.google.com/macros/s/AKfycbz6_YRQIGHR44cGT8xjbkeM18GMswVR7cY2X5AZRJRteNE85n8DNkZtbVoHBJSfnMDibA/exec', {
        method: 'POST',
        body: JSON.stringify({ name, message }),
        headers: { "Content-Type": "application/json" }
    }).then(response => response.text())
      .then(data => {
          alert("RSVP Sent! Thank you!");
          closeRsvpForm();
      }).catch(error => alert("Error: " + error));
});
