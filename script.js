// Show RSVP form when the button is clicked
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const webhookURL = "https://script.google.com/macros/s/AKfycbybpiOc_Im2B8NLHFo2eb6EQPvki9CRKqHTkMdCQe5VsYuw-ndRdU5f5dqDIPVnbE_eRw/exec";

    fetch(webhookURL, {
        method: "POST",
        body: JSON.stringify({ name, message }),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        alert("Thank you for your RSVP!");
        document.getElementById("form").reset();
        closeRsvpForm();
    })
    .catch(error => {
        alert("Something went wrong. Please try again.");
    });
});

function closeRsvpForm() {
    document.getElementById("rsvp-form").style.display = "none";
}


// Set the wedding date
const weddingDate = new Date("March 27, 2025 00:00:00").getTime();

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
