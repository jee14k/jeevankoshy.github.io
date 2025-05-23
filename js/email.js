document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();

  const form = event.target;
  const name = form.querySelector("input[placeholder='Your Name']").value.trim();
  const email = form.querySelector("input[placeholder='Your Email']").value.trim();
  const message = form.querySelector("textarea[placeholder='Your Message']").value.trim();

  if (!name || !email || !message) {
    showToast("⚠️ Please fill in all fields before submitting.", "danger");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showToast("⚠️ Please enter a valid email address.", "danger");
    return;
  }

  // ✅ Send to Netlify function
  fetch("/.netlify/functions/sendEmail", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        showToast("✅ Message sent successfully!", "success");
        form.reset();
      } else {
        showToast("❌ Failed to send message: " + (data.message || "Unknown error"), "danger");
      }
    })
    .catch((error) => {
      console.error(error);
      showToast("❌ An error occurred. Please try again later.", "danger");
    });
});
