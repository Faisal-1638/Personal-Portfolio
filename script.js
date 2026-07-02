const response = await fetch("https://script.google.com/macros/s/AKfycbwi63Gb8Crr6krteo-Kt4yQE31A5XFt4zdUj_VAFeOwdZe-LCOeCNM0X6G5qCvle2B_gg/exec", {
    method: "POST",
    headers: {
        "Content-Type": "text/plain;charset=utf-8" 
    },
    body: JSON.stringify(data)
});

const result = await response.json();

if (result.result === "success") {
    alert("✅ Message sent successfully!");
    form.reset();
} else {
    alert("❌ Failed to send message.");
    console.error(result.error);
}