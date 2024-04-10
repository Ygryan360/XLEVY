let button = document.querySelector(".button");
let menu = document.querySelector(".menu");

button.onclick = function () {
  button.classList.toggle("active");
  menu.classList.toggle("active");
};
