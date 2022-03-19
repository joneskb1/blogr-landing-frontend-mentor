const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const navArrowsMobile = document.querySelectorAll(".nav-arrow");
const navPopDownMobile = document.querySelectorAll(".popdown-ul");
const navParaMobile = document.querySelectorAll(".nav-p");
const navPopdownDesktop = document.querySelectorAll(".popdown-ul-desktop");
const navDesktopCategory = document.querySelectorAll(".nav-desktop-category");
const navDesktopArrow = document.querySelectorAll(".nav-desktop-arrow");
const mobileBtns = document.querySelectorAll(".mobile-btn");
const mobileLinks = document.querySelectorAll(".mobile-link");
// open mobile nav popup
hamburger.addEventListener("click", function (e) {
  hamburger.classList.toggle("hamburger-close");
  mobileNav.classList.toggle("hide");

  // reset mobile nav when closed
  if (mobileNav.classList.contains("hide")) {
    navPopDownMobile.forEach((el) => el.classList.add("hide"));
    navParaMobile.forEach((el) => el.classList.remove("nav-li-open"));
    navArrowsMobile.forEach((el) => el.classList.remove("arrow-up"));
  }
});

// show mobile nav nested ul
function showUlMobile(e) {
  const item = e.target.dataset.item;
  const ul = [...navPopDownMobile].filter((el) =>
    el.classList.contains(`${item}-mobile-nav`)
  );
  ul[0].classList.toggle("hide");

  // change open li color
  e.target.parentNode.classList.toggle("nav-li-open");

  // change arrow direction
  e.target.classList.toggle("arrow-up");
}

navArrowsMobile.forEach((el) => el.addEventListener("click", showUlMobile));

// show desktop nested ul
function showUlDesktop(e) {
  const category = e.currentTarget.dataset.item;
  const popdownUl = [...navPopdownDesktop].filter((el) => {
    return el.classList.contains(`nav-desktop-${category}-ul`);
  });
  popdownUl[0].classList.toggle("hide");
  // change category color/underline
  e.currentTarget.classList.toggle("nav-desktop-p-active");
  // change arrow direction & color
  const arrow = e.currentTarget.querySelector(".nav-desktop-arrow");
  arrow.classList.toggle("nav-desktop-arrow-active");
}

navDesktopCategory.forEach((el) => el.addEventListener("click", showUlDesktop));

// touch btns mobile
function addActiveBtns(e) {
  const btn = e.currentTarget.dataset.btn;
  e.currentTarget.classList.add(`${btn}-active`);
}
function removeActiveBtns(e) {
  const btn = e.currentTarget.dataset.btn;
  e.currentTarget.classList.remove(`${btn}-active`);
}

mobileBtns.forEach((el) => el.addEventListener("touchstart", addActiveBtns));
mobileBtns.forEach((el) => el.addEventListener("touchend", removeActiveBtns));

//  touch links mobile
function addActiveLink(e) {
  e.currentTarget.classList.add("link-active");
}

function removeActiveLink(e) {
  e.currentTarget.classList.remove("link-active");
}
mobileLinks.forEach((el) => el.addEventListener("touchstart", addActiveLink));
mobileLinks.forEach((el) => el.addEventListener("touchend", removeActiveLink));
