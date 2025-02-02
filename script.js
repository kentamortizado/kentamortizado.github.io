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

document.addEventListener("DOMContentLoaded", function() {
    // Add the 'visible' class after the page has loaded
    const ribbon = document.getElementById('ribbon');
    ribbon.classList.add('visible');
});
