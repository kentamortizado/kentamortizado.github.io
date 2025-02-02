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


  document.getElementById('rsvpForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Show spinner
    document.getElementById('loadingSpinner').style.display = 'block';
  
    // Get form data
    const formData = new FormData(this);
  
    // Add a timestamp
    const now = new Date();
    formData.append('timestamp', now.toISOString());
  
    // Send data to Google Apps Script endpoint
    fetch('https://script.google.com/macros/s/AKfycbybpiOc_Im2B8NLHFo2eb6EQPvki9CRKqHTkMdCQe5VsYuw-ndRdU5f5dqDIPVnbE_eRw/exec', {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    })
      .then(() => {
        // Display success message
        document.getElementById('responseMessage').textContent = 'Thank you for your RSVP!';
        document.getElementById('rsvpForm').reset();
      })
      .catch(() => {
        // Display error message
        document.getElementById('responseMessage').textContent = 'Oops! Something went wrong. Please try again.';
      })
      .finally(() => {
        // Hide spinner
        document.getElementById('loadingSpinner').style.display = 'none';
      });
  });