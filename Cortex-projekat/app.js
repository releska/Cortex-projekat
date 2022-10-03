// Hamburger menu
let hamburger = document.querySelector(".hamburger");
let navigacija = document.querySelector(".navigacija");
let main = document.querySelector(".main");

hamburger.addEventListener("click", () => {
  navigacija.classList.toggle("active");
  main.classList.toggle("active");
});


// hovered class in selected list item
let list = document.querySelectorAll(".navigacija li");
function aktivanLink() {
  list.forEach((item) => item.classList.remove("hovered"));
  this.classList.add("hovered");
}
list.forEach((item) => item.addEventListener("mouseover", aktivanLink));
