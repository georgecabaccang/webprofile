const navBar = document.getElementById("navBar");

let navHeight = document.querySelector(".fixed").offsetHeight;

const adjustHeight = () => {
  document.documentElement.style.setProperty(
    "--scroll-padding",
    navHeight + 40 + "px"
  );
  console.log(navHeight);
};

const reSized = () => {
  navHeight = document.querySelector(".fixed").offsetHeight;
  adjustHeight();
};

const screenCheker = (condition) => {
  if (condition) {
    navBar.classList.remove("box-shadow-in");
  } else {
    navBar.classList.add("box-shadow-in");
  }
};

const scrollHelper = () => {
  if (scrollY === 0) {
    screenCheker(true);
  } else {
    screenCheker(false);
  }
};

document.documentElement.style.setProperty(
  "--scroll-padding",
  navHeight + 40 + "px"
);
window.addEventListener("resize", () => reSized());
document.addEventListener("scroll", () => scrollHelper());
