const navbar = document.querySelector(".navbar");
const toggleButton = document.querySelector(".toggle-button");

toggleButton.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
