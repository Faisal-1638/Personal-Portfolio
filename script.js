const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzrHWX0INFfaH5xJNkZ7RB1x49zJPdPXvQWFZ2GEvvyWc4Kz6_4_yCKC5ZV1zFQHIfylQ/exec";

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value.trim()
    };

    const button = form.querySelector("button[type='submit']");
    const originalText = button.innerHTML;

    button.disabled = true;
    button.innerHTML = "Sending...";

    try {
        await fetch(SCRIPT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        alert("✅ Message sent successfully!");

        form.reset();

    } catch (error) {
        console.error(error);
        alert("❌ Failed to send message.");
    }

    button.disabled = false;
    button.innerHTML = originalText;
});
