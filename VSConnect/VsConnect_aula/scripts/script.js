let menu = document.getElementById("hamburguer_links");
let hamburguer = document.getElementById("hamburguer");

function hamburguerOpen() {
  if (window.getComputedStyle(menu).display == "none") {
    menu.style.display = "flex";
    hamburguer.setAttribute("aria-expanded", "true");
    hamburguer.setAttribute("aria-label", "Fechar o menu");
  } else {
    menu.style.display = "none";
    hamburguer.setAttribute("aria-expanded", "false");
    hamburguer.setAttribute("aria-label", "Abrir o menu");
  }
}

addEventListener("resize", (event) => {
  if (window.innerWidth > 768) {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
});
