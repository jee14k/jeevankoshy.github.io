document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Collect form data
  const name = document.querySelector("input[placeholder='Your Name']").value;
  const email = document.querySelector("input[placeholder='Your Email']").value;
  const message = document.querySelector("textarea[placeholder='Your Message']").value;

  // Send email using EmailJS
  emailjs.send("service_7q7ukyj", "template_cdaivhf", {
    from_name: name,
    from_email: email,
    message: message,
  }).then(
    function(response) {
      alert("Message sent successfully!");
    },
    function(error) {
      alert("Failed to send message. Please try again later.");
    }
  );
});