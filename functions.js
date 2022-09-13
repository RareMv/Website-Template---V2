function toggleMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");

  if (mobileMenu.classList.contains("active")) {
    mobileMenu.classList.remove("active");
  } else {
    mobileMenu.classList.add("active");
  }
}
