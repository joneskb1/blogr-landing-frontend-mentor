const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const navArrows = document.querySelectorAll(".nav-arrow");
const navPopDown = document.querySelectorAll(".popdown-ul");

// open nav popup
hamburger.addEventListener("click", function (e) {
  hamburger.classList.toggle("hamburger-close");
  mobileNav.classList.toggle("hide");
});

// show nav nested ul
function showUl(e) {
  const item = e.target.dataset.item;
  const ul = [...navPopDown].filter((el) =>
    el.classList.contains(`${item}-mobile-nav`)
  );
  ul[0].classList.toggle("hide");

  // change open li color
  e.target.parentNode.classList.toggle("nav-li-open");

  console.log(e.target.parentNode.classList);

  // change arrow direction
  e.target.classList.toggle("arrow-up");
}

navArrows.forEach((el) => el.addEventListener("click", showUl));
