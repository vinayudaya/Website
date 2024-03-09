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
      }
    }),
    t.send();
  const n = document.getElementById("footer-container"),
    o = new XMLHttpRequest();
  o.open("GET", "footer.html", !0),
    (o.onload = function () {
      o.status >= 200 &&
        o.status < 400 &&
        ((n.innerHTML = o.responseText),
        (document.getElementById("year").innerHTML = new Date().getFullYear()));
    }),
    o.send();
});
