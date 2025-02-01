document.addEventListener("DOMContentLoaded", function () {
  const quoteText =
    "My hope for the future is that every young girl realizes her worth and asks for it.";
  const words = quoteText.split(" ");
  const quoteElement = document.getElementById("quote");

  // Creating neon effect word by word
  words.forEach((word, index) => {
    let span = document.createElement("span");
    span.textContent = word + " ";
    span.classList.add("neon-word");
    span.style.animationDelay = `${index * 0.3}s`;
    quoteElement.appendChild(span);
  });

  // Lazy Load Elements
  const lazyElements = document.querySelectorAll(".lazy-load");

  function lazyLoad() {
    lazyElements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight - 50) {
        element.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", lazyLoad);
  window.addEventListener("load", () => {
    setTimeout(lazyLoad, 700);
  });
});
