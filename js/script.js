const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");
let scrollStarted = false;

btn.addEventListener("click", navToggle);
document.addEventListener("scroll", scrollPage);

function navToggle() {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  menu.classList.toggle("show-menu");
}

function scrollPage(btn) {
  switch (btn.id) {
    case "arrow-a":
      document
        .getElementById("section-b")
        .scrollIntoView({ behavior: "smooth" });
      break;
    case "arrow-b":
      document
        .getElementById("section-c")
        .scrollIntoView({ behavior: "smooth" });
      break;
    case "arrow-c":
      document
        .getElementById("section-d")
        .scrollIntoView({ behavior: "smooth" });
      break;
    case "arrow-d":
      document
        .getElementById("section-e")
        .scrollIntoView({ behavior: "smooth" });
      break;
    case "arrow-e":
      document
        .getElementById("section-f")
        .scrollIntoView({ behavior: "smooth" });
      break;
    case "arrow-f":
      document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
      break;
  }
}
