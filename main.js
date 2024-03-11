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
  const e = document.getElementById("header-container"),
    t = new XMLHttpRequest();
  t.open("GET", "header.html", !0),
    (t.onload = function () {
      if (t.status >= 200 && t.status < 400) {
        e.innerHTML = t.responseText;
        if (document.getElementById("themeIcon")) {
          const e = document.getElementById("themeIcon");
          "dark" === localStorage.getItem("theme")
            ? (e.src = "dark-icon.svg")
            : "light" === localStorage.getItem("theme") &&
              (e.src = "light-icon.svg");
        }

        // Now that the header content is loaded, select the navigation links
        const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
        setActiveNavLink(navLinks); // Call setActiveNavLink with the loaded navLinks
      }
    }),
    t.send();

  const n = document.getElementById("footer-container"),
    o = new XMLHttpRequest();
  o.open("GET", "footer.html", !0),
    (o.onload = function () {
      if (o.status >= 200 && o.status < 400) {
        n.innerHTML = o.responseText;
        document.getElementById("year").innerHTML = new Date().getFullYear();
      }
    }),
    o.send();
});

function setActiveNavLink(navLinks) {
  function removeActive() {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
  }

  navLinks.forEach((link) => {
    if (link.href === window.location.href) {
      removeActive();
      link.classList.add("active");
    }
  });
}
