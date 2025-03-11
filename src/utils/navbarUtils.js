export function toggleMobileMenu() {
  const mobileNav = document.getElementById("nav-mobile");
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const hamburgerIcon = document.getElementById("hamburger-ic");
  const hamburgerCloseIcon = document.getElementById("hamburger-close-ic");

  if (mobileNav.classList.contains("hidden")) {
    mobileNav.classList.remove("hidden");
    hamburgerIcon.classList.add("hidden");
    hamburgerCloseIcon.classList.remove("hidden");
    hamburgerBtn.setAttribute("aria-expanded", "true");
  } else {
    mobileNav.classList.add("hidden");
    hamburgerIcon.classList.remove("hidden");
    hamburgerCloseIcon.classList.add("hidden");
    hamburgerBtn.setAttribute("aria-expanded", "false");
  }
}
