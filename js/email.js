emailjs.init('cv_nP03uqYcg3bU_p');

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

  emailjs.send("service_7q7ukyj", "template_cdaivhf", {
    from_name: name,
    from_email: email,
    message: message,
  }).then(() => {
    showToast("✅ Message sent successfully!", "success");
    form.reset();
  }).catch((error) => {
    console.error(error);
    showToast("❌ Failed to send message. Please try again later.", "danger");
  });
});

function showToast(message, type) {
  const toastEl = document.getElementById("formToast");
  const toastBody = document.getElementById("formToastBody");

  toastBody.textContent = message;

  toastEl.classList.remove("bg-success", "bg-danger");
  toastEl.classList.add(type === "success" ? "bg-success" : "bg-danger");

  const toast = new bootstrap.Toast(toastEl);
  toast.show();
}
