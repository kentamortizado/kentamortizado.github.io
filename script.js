// Countdown Timer
const weddingDate = new Date("2025-03-27 00:00:00").getTime();
const timerElement = document.getElementById("timer");

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    if (timeLeft < 0) {
        timerElement.innerHTML = "The wedding has started! 🎉";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    timerElement.innerHTML = `${days} Days ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);

// Mobile Menu Toggle
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});

document.getElementById("rsvp-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const attendance = document.getElementById("attendance").value;
    const responseMessage = document.getElementById("response-message");

    fetch("https://script.google.com/macros/s/AKfycbynZeOOwxldXkSTFbJH-VV2eNkXyMonZpZ0KR3YPkFlsfqTCiUk8An0PZ-1ivcJK_XyuA/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, attendance }),
        mode: 'cors'  // Enable CORS mode
    })
    .then(response => response.json())
    .then(data => {
        responseMessage.style.display = "block";
        responseMessage.textContent = "Thank you for your response!";
        document.getElementById("rsvp-form").reset();
    })
    .catch(error => {
        console.error("Error:", error);
        responseMessage.style.display = "block";
        responseMessage.textContent = "Something went wrong. Please try again!";
    });
});
