export function toggleMobileMenu() {
  const mobileNav = document.getElementById("nav-mobile");
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const hamburgerIcon = document.getElementById("hamburger-ic");
  const hamburgerCloseIcon = document.getElementById("hamburger-close-ic");

  if (mobileNav.classList.contains("hidden")) {
    mobileNav.classList.remove("hidden");
    mobileNav.classList.add("flex");
    hamburgerIcon.classList.add("hidden");
    hamburgerCloseIcon.classList.remove("hidden");
  } else {
    mobileNav.classList.add("hidden");
    mobileNav.classList.remove("flex");
    hamburgerIcon.classList.remove("hidden");
    hamburgerCloseIcon.classList.add("hidden");
  }
}
