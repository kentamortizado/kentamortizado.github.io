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
