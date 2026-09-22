const body = document.body;
const themeSwitch = document.querySelector("#theme-switch");
const savedTheme = localStorage.getItem("theme");
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

if (savedTheme === "light" || (!savedTheme && prefersLight)) {
  body.classList.add("light");
}

themeSwitch.checked = body.classList.contains("light");
themeSwitch.addEventListener("change", () => {
  body.classList.toggle("light", themeSwitch.checked);
  localStorage.setItem("theme", themeSwitch.checked ? "light" : "dark");
});

const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector("#site-nav");

menuButton.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "Close" : "Menu";
});

siteNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    siteNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "Menu";
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    siteNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "Menu";
  }
});

document.querySelectorAll("details.project").forEach((project) => {
  project.addEventListener("toggle", () => {
    if (project.open) {
      project.querySelectorAll("img[loading='lazy']").forEach((image) => {
        image.loading = "eager";
      });
    }
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
