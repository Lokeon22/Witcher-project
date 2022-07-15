import initModal from "./js/modal.js";

const menu = document.querySelector(".menu-icon");
let title = document.querySelector(".title-content");

function sumir() {
  setTimeout(() => {
    title.classList.add("fadi");
  }, 1000);
}

menu.addEventListener("click", () => {
  let show = document.querySelector(".showcase");
  let social = document.querySelector(".social-mobile");
  menu.classList.toggle("active");
  show.classList.toggle("active");
  social.classList.toggle("active");
});

sumir();
initModal();
