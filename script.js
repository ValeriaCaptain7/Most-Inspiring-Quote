// script.js
document.addEventListener("DOMContentLoaded", function () {
  console.log("Landing page loaded successfully!");

  // Motivation button click event
  const motivationButton = document.getElementById("motivationButton");

  motivationButton.addEventListener("click", function () {
    alert(
      "Remember, you are capable of achieving great things! Believe in yourself!"
    );
  });

  // Smooth scroll functionality (optional)
  const scrollToInfo = document.querySelector(".additional-info");

  motivationButton.addEventListener("click", function () {
    scrollToInfo.scrollIntoView({ behavior: "smooth" });
  });
});
