let navHeight = document.querySelector(".fixed").offsetHeight;

const adjustHeight = () => {
  document.documentElement.style.setProperty(
    "--scroll-padding",
    navHeight + 47 + "px"
  );
  console.log(navHeight);
};

const reSized = () => {
  navHeight = document.querySelector(".fixed").offsetHeight;
  adjustHeight();
};

document.documentElement.style.setProperty(
  "--scroll-padding",
  navHeight + 47 + "px"
);
window.addEventListener("resize", () => reSized());
