document.getElementById('rsvpForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const attendance = document.getElementById('attendance').value;
  
    let message = '';
    if (attendance === 'yes') {
      message = `Thank you, ${name}! We can't wait to see you!`;
    } else if (attendance === 'no') {
      message = `We'll miss you, ${name}. Thank you for letting us know!`;
    } else {
      message = 'Please fill out the form completely.';
    }
  
    document.getElementById('responseMessage').textContent = message;
  });