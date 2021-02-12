function togglemenu() {
  let menu = document.getElementById("nav");

  menu.style.display === "block"
    ? (menu.style.display = "none")
    : (menu.style.display = "block");
}
