const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link, .nav-link-special").forEach((event) =>
  event.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

const showMore = document.querySelector(".show-hide");
const text = document.querySelector(".foo");
showMore.addEventListener("click", (ev) => {
  text.classList.toggle("see-more");
});