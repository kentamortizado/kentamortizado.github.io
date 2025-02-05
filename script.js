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


document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('rsvpModal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('rsvpModal').style.display = 'none';
});

document.getElementById('rsvpForm').addEventListener('submit', function (e) {
    e.preventDefault();

    document.getElementById('loadingSpinner').style.display = 'block';

    const formData = new FormData(this);
    const now = new Date();
    formData.append('timestamp', now.toISOString());

    fetch('https://script.google.com/macros/s/AKfycbz62YjF85HeJLx4bvD8XvcufS5h5LMrVLarWOepCjkmVKWgnZucknYBiTmt9lmm-vc1Qw/exec', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
    })
    .then(() => {
        document.getElementById('responseMessage').textContent = 'Thank you for your RSVP!';
        document.getElementById('rsvpForm').reset();
    })
    .catch(() => {
        document.getElementById('responseMessage').textContent = 'Oops! Something went wrong. Please try again.';
    })
    .finally(() => {
        document.getElementById('loadingSpinner').style.display = 'none';
    });
});

/// HASHTAGWALL
const hashtag = '#YourWeddingHashtag';

function submitMessage() {
  const message = document.getElementById('guest-message').value;
  if (message.trim()) {
    const postContainer = document.getElementById('wall-container');
    const newPost = document.createElement('div');
    newPost.classList.add('post');
    newPost.innerHTML = `<p>${message}</p>`;
    postContainer.appendChild(newPost);
    document.getElementById('guest-message').value = ''; // Clear the input
  }
}

// This is a placeholder for integrating API calls to display hashtagged posts from social media
function fetchHashtagPosts() {
  // Example post objects (could be fetched dynamically from Instagram, Twitter, etc.)
  const posts = [
    
  ];

  const postContainer = document.getElementById('wall-container');
  
  posts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.innerHTML = `<img src="${post.image}" alt="Wedding Moment"><p>${post.caption}</p>`;
    postContainer.appendChild(postDiv);
  });
}

// Call the function to load posts when the page loads
window.onload = fetchHashtagPosts;
