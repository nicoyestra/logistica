document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });

    const links = menu.querySelectorAll("a");
    links.forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
      });
    });
  }
});
