let profile = document.querySelector(".title-profile");

function aparecer() {
  setTimeout(() => {
    profile.classList.add("fadi-profile");
  }, 1000);
}

window.onload = aparecer();
