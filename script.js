const openMenu = document.getElementById("menu-open");
const menu = document.getElementById("menu-modal");
const closeMenu = document.getElementById("menu-close");
openMenu.addEventListener("click", () => {
  menu.classList.remove("hidden");
});
closeMenu.addEventListener("click", () => {
  menu.classList.add("hidden");
});