let menu = () => {
  if (window.innerWidth > 600) return;
  let disp = document.getElementsByTagName("header")[0];

  if (disp.style.display === "none" || disp.style.display === "") {
    disp.style.display = "block";
    document.getElementById("menu-icon").style.display = "none";
    document.getElementsByClassName("close-button")[0].style.display =
      "inline-block";
  } else {
    disp.style.display = "none";
    document.getElementById("menu-icon").style.display = "block";
    document.getElementsByClassName("close-button")[0].style.display = "none";
  }
};

let scroll_to_top = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});
