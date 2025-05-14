emailjs.init('cv_nP03uqYcg3bU_p'); // Replace with your actual public key

document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();

  const form = event.target;
  const name = form.querySelector("input[placeholder='Your Name']").value;
  const email = form.querySelector("input[placeholder='Your Email']").value;
  const message = form.querySelector("textarea[placeholder='Your Message']").value;

  emailjs.send("service_7q7ukyj", "template_cdaivhf", {
    from_name: name,
    from_email: email,
    message: message,
  }).then(() => {
    alert("✅ Message sent successfully!");
    form.reset();
  }).catch((error) => {
    console.error(error);
    alert("❌ Failed to send message. Please try again later.");
  });
});
