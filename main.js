let menuArea = document.getElementById("menu-area");
let hamburgerIcon = document.getElementById("hamburger-icon");
let closeIcon = document.getElementById("close-icon");

hamburgerIcon.addEventListener("click", () => {
  menuArea.classList.toggle("hidden");
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

closeIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
  menuArea.classList.toggle("hidden");
});
