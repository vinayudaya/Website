// main.js
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById("themeIcon");

  // Toggle between light and dark themes
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    themeIcon.src = "dark-icon.svg";
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    themeIcon.src = "light-icon.svg";
    localStorage.setItem("theme", "light");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Load theme from localStorage
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.add("light");
  }
});
