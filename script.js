const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbwk4lbL3Z_LJ7BDwtJZ4eh9wbQM6v6x6cEhwwCh1Nt_n-6NkkaZy0dkCr9gj6tkFEVuyA/exec", 
            {
            method: "POST", mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)
        });

        alert("✅ Message sent successfully!");

        form.reset();

    } catch (error) {
        alert("❌ Failed to send message.");
        console.error(error);
    }
});