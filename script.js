// Show RSVP form when the button is clicked
function showRsvpForm() {
    document.getElementById('rsvp-form').style.display = 'flex';
}

// Close RSVP form
function closeRsvpForm() {
    document.getElementById('rsvp-form').style.display = 'none';
}

// Handle form submission
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (name && message) {
        alert(`Thank you for your RSVP, ${name}! Your message: "${message}" has been received.`);
        closeRsvpForm();
    }
});

// Set the wedding date
const weddingDate = new Date("March 27, 2024 00:00:00").getTime();

// Update the countdown every second
const countdown = setInterval(function() {

    // Get the current date and time
    const now = new Date().getTime();

    // Find the time remaining
    const timeLeft = weddingDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result in the element with the ID "timer"
    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over, display a message
    if (timeLeft < 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "The big day has arrived!";
    }
}, 1000);
