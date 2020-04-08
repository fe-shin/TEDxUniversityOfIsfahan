
//sticky navbar
let navbar = document.querySelector(".stickyNavbar");
let changePoint = document.querySelector(".description").offsetTop;

// menu
let menuIcon = document.querySelector(".menuButtonIcon");
let closeIcon = document.querySelector(".openingMenu__close");
let menu = document.querySelector(".openingMenu");
let whole = document.querySelector(".mainWhole");

// let mainNav = document.querySelector(".navbar");
function myFunction() {
  if (window.pageYOffset > changePoint) {
    navbar.classList.remove("hidden");
    navbar.classList.add("sticky");
  } else {
    navbar.classList.add("hidden");
    navbar.classList.remove("sticky");
  }

  return true;
}

function menuOpen() {
  menu.style.width = "40rem";
  menu.style.padding = "3rem";
  whole.style.filter = "brightness(.8)";

  return true;
}

function menuClose() {
  menu.style.width = "0";
  menu.style.padding = "0";
  whole.style.filter = "brightness(1)";

  return true;
}

window.onscroll = function() {
  myFunction();
  return true;
};

menuIcon.onclick = function() {
  menuOpen();
  return true;
};

closeIcon.onclick = function() {
  menuClose();
  return true;
};
