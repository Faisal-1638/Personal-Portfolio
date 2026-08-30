
  /* Navigation pages js code */
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.classList.remove('active');
    });

    this.classList.add('active');
  });
});

/* Form  Submission codes*/

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Stop the page from reloading

  // Get the submit button to show loading status
  const submitBtn = this.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = "Sending.......";

  // Gather data from the form fields
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  };

  const webAppUrl = 'https://script.google.com/macros/s/AKfycbwCBQNPehIhWy-hseFTNu8dGr2vMUDvcuv9i1nbG6OJFl28Kq8qVT3Zh47flkQ-9IWkUQ/exec'; 

  // Send the data as JSON
  fetch(webAppUrl, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(() => {
    alert('✅ Message sent successfully!');
    this.reset(); // Clear the form
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Failed to sent. Please try again.');
  })
  .finally(() => {
    // Reset button state
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Stagger appearance slightly based on item index
      setTimeout(() => {
        entry.target.classList.add('show');
      }, (index % 4) * 100); 
    } else {
      // Remove class so it re-animates when scrolling back up/down
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.30 // Triggers when 15% of the card is visible
});

// Observe all skill cards
document.querySelectorAll('.skill-card').forEach((card) => {
  observer.observe(card);
});