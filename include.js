document.addEventListener("DOMContentLoaded", function () {
  // Include the header
  const headerContainer = document.getElementById("header-container");
  const headerRequest = new XMLHttpRequest();
  headerRequest.open("GET", "header.html", true);
  headerRequest.onload = function () {
    if (headerRequest.status >= 200 && headerRequest.status < 400) {
      headerContainer.innerHTML = headerRequest.responseText;

      // Now that header content is loaded, access elements within it
      const themeIcon = document.getElementById("themeIcon");
      if (themeIcon) {
        const themeIcon = document.getElementById("themeIcon");
        if (localStorage.getItem("theme") === "dark") {
          themeIcon.src = "dark-icon.svg";
        } else if (localStorage.getItem("theme") === "light") {
          themeIcon.src = "light-icon.svg";
        }
      }
    }
  };
  headerRequest.send();

  // Include the footer
  const footerContainer = document.getElementById("footer-container");
  const footerRequest = new XMLHttpRequest();
  footerRequest.open("GET", "footer.html", true);
  footerRequest.onload = function () {
    if (footerRequest.status >= 200 && footerRequest.status < 400) {
      footerContainer.innerHTML = footerRequest.responseText;
      document.getElementById("year").innerHTML = new Date().getFullYear();
    }
  };
  footerRequest.send();
});
