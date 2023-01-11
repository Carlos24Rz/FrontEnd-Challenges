const navButton = document.querySelector(".nav-button");

navButton.addEventListener('click', () => document.body.classList.toggle("nav-open"));

const closeButton = document.querySelectorAll(".list-item");

closeButton.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.remove("nav-open");
  })});