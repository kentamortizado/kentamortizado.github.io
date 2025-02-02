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

document.addEventListener("DOMContentLoaded", function () {
    function updateCountdown() {
        const weddingDate = new Date("March 27, 2025 00:00:00").getTime();
        const now = new Date().getTime();
        const timeLeft = weddingDate - now;

        if (timeLeft < 0) {
            document.getElementById("countdown").innerHTML = "The event has started!";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `
            <div class="countdown-box">
                <div class="countdown-labels">
                    <span>Days</span>
                    <span>Hours</span>
                    <span>Minutes</span>
                    <span>Seconds</span>
                </div>
                <div class="countdown-timer">
                    <span>${days}</span>
                    <span>${hours}</span>
                    <span>${minutes}</span>
                    <span>${seconds}</span>
                </div>
            </div>
        `;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
