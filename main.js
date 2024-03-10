function toggleTheme() {
  const t = document.body,
    e = document.getElementById("themeIcon");
  t.classList.contains("light")
    ? (t.classList.remove("light"),
      t.classList.add("dark"),
      (e.src = "dark-icon.svg"),
      localStorage.setItem("theme", "dark"))
    : (t.classList.remove("dark"),
      t.classList.add("light"),
      (e.src = "light-icon.svg"),
      localStorage.setItem("theme", "light"));
}
document.addEventListener("DOMContentLoaded", function () {
  "dark" === localStorage.getItem("theme")
    ? document.body.classList.add("dark")
    : document.body.classList.add("light");
});
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  function removeActive() {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
  }

  function setActiveNavLink() {
    navLinks.forEach((link) => {
      if (link.href === window.location.href) {
        removeActive();
        link.classList.add("active");
      }
    });
  }

  setActiveNavLink();
});
