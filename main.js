let burger = document.querySelector(".burger");
let links = document.querySelector(".links");
let explore = document.querySelector(".explore");
let cross = document.querySelector(".cross");
burger.onclick = function () {
  links.classList.add("rr");
  links.style.zIndex = "999";
};
document.addEventListener("click", function (e) {
  if (e.target.className === "cross") {
    links.classList.remove("rr");
    links.style.zIndex = "-1";
  }
});
