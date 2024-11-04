const ham = document.querySelector(".ham-menu");
const nav = document.querySelector(".navbar");
const navBtn = document.querySelectorAll(".navbar-items");

ham.addEventListener("click", () => {
  ham.classList.toggle("active");
  nav.classList.toggle("active");
});

navBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    ham.classList.toggle("active");
    nav.classList.toggle("active");
  });
});

const loadder = document.getElementById("preloadder");

window.addEventListener("load", () => {
  loadder.style.display = "none";
});

setTimeout(() => {
  loadder.style.display = "none";
}, 5000);
