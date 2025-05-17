document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("terminal-splash");
  const mainContent = document.body;

  // Hide content initially
  mainContent.style.overflow = "hidden";

  // Typing logic here...
  const phrases = [
    "Post-Graduate in Data Science",
    ", Ex-Deloitte",
    " | Currently seeking opportunities"
  ];
  let currentPhrase = 0;
  let currentLetter = 0;
  let typedText = document.getElementById("typed-text");

  function typePhrase() {
    if (currentPhrase < phrases.length) {
      if (currentLetter < phrases[currentPhrase].length) {
        typedText.textContent += phrases[currentPhrase].charAt(currentLetter);
        currentLetter++;
        setTimeout(typePhrase, 40); // Typing speed
      } else {
        currentPhrase++;
        currentLetter = 0;
        setTimeout(typePhrase, 500); // Pause before next
      }
    } else {
      // Finished typing, fade out splash
      setTimeout(() => {
        splash.style.transition = "opacity 1s ease";
        splash.style.opacity = 0;
        setTimeout(() => {
          splash.style.display = "none";
          mainContent.style.overflow = "auto";
        }, 1000);
      }, 200);
    }
  }

  typePhrase();
});



AOS.init({
    duration: 500,
    once: true,
  });

  window.addEventListener("load", () => {
  document.body.classList.add("fade-in");
});
