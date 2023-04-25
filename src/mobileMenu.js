const megaMenu = document.querySelector(".mega-menu-container");
const openMenu = document.getElementById("openmenu");
const closeMenu = document.getElementById("close-menu");
const actions = document.getElementById("menu-action");
const topNavbar = document.getElementById("top-navbar");
const activeMegaLink = document.querySelector(".mega-menu-link");
const megaMenuTwoColumnTwo = document.querySelector(".mega-menu2 .column-two");

openMenu.addEventListener("click", () => {
  megaMenu.style.display = "block";
  megaMenu.classList.add("mobile-menu");
  // document.body.style.overflow = "hidden";

  actions.style.display = "block";
  actions.classList.add("menu-action");
  topNavbar.style.height = "85px";
  topNavbar.style.backgroundColor = "white";
  openMenu.style.display = "none";
  closeMenu.style.display = "inline-block";
});
closeMenu.addEventListener("click", () => {
  megaMenu.style.display = "none";
  megaMenu.classList.remove("mobile-menu");
  actions.style.display = "none";
  actions.classList.remove("menu-action");
  topNavbar.style.height = "0";
  topNavbar.style.backgroundColor = "transparent";
  openMenu.style.display = "inline-block";
  closeMenu.style.display = "none";
  megaMenuOne.style.display = "none";
  megaMenuTwo.style.display = "none";
  columnTwo.classList.remove("activate");
  columnThree.classList.remove("activate");
  megaMenuTwoColumnTwo.classList.remove("activate");
});
// activeMegaLink.addEventListener("click", () => {
//   columnTwo.classList.add("activate");
// });
