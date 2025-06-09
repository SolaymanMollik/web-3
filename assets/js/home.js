// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector(".hero-left");
  const heroButtons = document.querySelector(".hero-right");

  heroText.classList.add("fade-in-left");
  heroButtons.classList.add("fade-in-right");
});

