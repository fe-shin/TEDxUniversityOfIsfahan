window.onscroll = function() {
  myFunction();
};

let navbar = document.querySelector(".stickyNavbar");
let changePoint = document.querySelector(".description").offsetTop;

// let mainNav = document.querySelector(".navbar");
function myFunction() {
  if (window.pageYOffset > changePoint) {
    navbar.classList.remove("hidden");
    navbar.classList.add("sticky");
  } else {
    navbar.classList.add("hidden");
    navbar.classList.remove("sticky");
  }
}

// let rellax = new Rellax(".rellax");
// window.onscroll = () => {
//   console.clear();
//   console.log(window.pageYOffset);
// };
