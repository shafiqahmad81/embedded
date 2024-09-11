let menuArea = document.getElementById("menu-area");
let hamburgerIcon = document.getElementById("hamburger-icon");
let closeIcon = document.getElementById("close-icon");
// build
let listBtn1 = document.getElementById("btn-1");
let listBtn2 = document.getElementById("btn-2");
let listBtn3 = document.getElementById("btn-3");
let listItem1 = document.getElementById("list-1");
let listItem2 = document.getElementById("list-2");
let listItem3 = document.getElementById("list-3");
let imgItem1 = document.getElementById("sales-1");
let imgItem2 = document.getElementById("sales-2");

hamburgerIcon.addEventListener("click", () => {
  menuArea.classList.toggle("hidden");
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

closeIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
  menuArea.classList.toggle("hidden");
});

// build

listBtn2.addEventListener("click", () => {
  listItem2.classList.toggle("hidden");
  listItem1.classList.toggle("hidden");
  imgItem2.classList.toggle("hidden");
  imgItem1.classList.toggle("hidden");
});
listBtn3.addEventListener("click", () => {
  listItem3.classList.toggle("hidden");
  listBtn2.classList.toggle("block");
});
