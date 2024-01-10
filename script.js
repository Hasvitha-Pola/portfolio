const navbar = document.querySelector(".navbar");

document.addEventListener("scroll", () => {
  var scroll_pos = window.scrollY;
  if (scroll_pos > 200) {
    navbar.style.backgroundColor = "#29323c";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});
