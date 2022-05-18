let profile = document.querySelector(".title-profile");

function cards() {
  let lista = document.querySelectorAll(".names-profiles a");
  lista = Array.from(lista);

  const dataSpecial = document.querySelectorAll("[data-special]");
  const dataSpecialArray = Array.from(dataSpecial);

  lista.forEach((item, index) => {
    item.addEventListener("click", () => {
      dataSpecialArray.forEach((div_item) => {
        div_item.classList.add("active-profile");
      });
      dataSpecialArray[index].classList.toggle("active-profile");
    });
  });
}

function aparecer() {
  setTimeout(() => {
    profile.classList.add("fadi-profile");
  }, 1000);
}

(window.onload = aparecer()), cards();
