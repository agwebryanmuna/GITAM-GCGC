const navbar = document.getElementById("navbar");
const closeBtn = document.getElementById("close-btn");
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelectorAll(".nav_link");

closeBtn.addEventListener("click", () => {
  navbar.classList.add("hidden");
});

menuIcon.addEventListener("click", () => {
  navbar.classList.remove("hidden");
});

navLinks.forEach((item) => {
  item.addEventListener("click", () => {
    navbar.classList.add("hidden");
  });
});
