window.onload = function () {
  const parts = [
    "Post-Graduate in Data Science",
    ", Ex-Deloitte",
    ". Currently seeking opportunities"
  ];

  let fullText = "";
  let partIndex = 0;
  let charIndex = 0;

  function type() {
    const typingElement = document.querySelector(".typing-text");
    if (!typingElement || partIndex >= parts.length) return;

    const currentPart = parts[partIndex];
    fullText += currentPart[charIndex++];
    typingElement.textContent = fullText;

    if (charIndex < currentPart.length) {
      setTimeout(type, 50); // typing speed
    } else {
      // Move to next part
      partIndex++;
      charIndex = 0;
      setTimeout(type, 700); // slight pause before next part
    }
  }

  type(); // start typing
};
