const hamburgerButton = document.querySelector(".nav-toggler");
const navToggler = document.getElementById("nav-toggler");
const navigation = document.querySelector("nav");

hamburgerButton.addEventListener("click", toggleNav);
hamburgerButton.addEventListener("click", changeColor);

function toggleNav(){
    hamburgerButton.classList.toggle("active")
    navigation.classList.toggle("active")
}

function changeColor() {
    const navToggler = document.querySelector(".nav-toggler");
    if (hamburgerButton.classList.contains("active")) {
      navToggler.style.backgroundColor = "var(--nav-toggler-bg-active)";
    } else {
      navToggler.style.backgroundColor = "var(--nav-toggler-bg)";
    }
  }