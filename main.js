// Navigation
const dropdownToggle = document.querySelector(".profile");
const mainNav = document.querySelector(".main-nav");

if (dropdownToggle && mainNav) {
  dropdownToggle.addEventListener("click", () => {
    mainNav.classList.toggle("visible");
  });
}
