const navbar = document.getElementById("navbar");
const closeBtn = document.getElementById("close-btn");
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelectorAll(".nav_link");

const showStepsBtn = document.getElementById("show-steps");
const showLessBtn = document.getElementById("show-less");
const hiddenSteps = document.getElementById("hidden-steps");

const mainHeader = document.getElementById("main-header");

window.addEventListener("scroll", () => {
  const headerHeight = mainHeader.getBoundingClientRect().height;
  const windowScrollLevel = window.pageYOffset;
  windowScrollLevel > headerHeight
    ? mainHeader.classList.add("shadow-md")
    : mainHeader.classList.remove("shadow-md");
});

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

showStepsBtn.addEventListener("click", () => {
  hiddenSteps.classList.remove("hidden");
  showStepsBtn.classList.add("hidden");
  showLessBtn.classList.remove("hidden");
});

showLessBtn.addEventListener("click", () => {
  hiddenSteps.classList.add("hidden");
  showStepsBtn.classList.remove("hidden");
  showLessBtn.classList.add("hidden");
});
