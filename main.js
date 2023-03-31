let burger = document.querySelector(".burger");
let links = document.querySelector(".link");
let explore = document.querySelector(".explore");
let cross = document.querySelector(".cross");
let menu = document.querySelector(".menu");
let moon = document.querySelector(".planet");
let mars = document.querySelector(".mars");
let europa = document.querySelector(".europa");
let titan = document.querySelector(".moon");
let disc = document.querySelector(".paragraph .text");
let travel = document.querySelector(".info .dist .travel");
let planet = document.querySelector(".planet");
let time = document.querySelector(".time .days");
let photo = document.querySelector(".image");
burger.addEventListener("click", function () {
  links.classList.add("show");
});
document.addEventListener("click", function (event) {
  var isClickInsideMenu = menu.contains(event.target);
  if (!isClickInsideMenu) {
    links.classList.remove("show");
  } else if (event.target.classList.contains("cross")) {
    links.classList.remove("show");
  }
});
const xhr = new XMLHttpRequest();
xhr.open("GET", "./data.json");
xhr.onload = () => {
  if (xhr.status === 200) {
    let jsonData = JSON.parse(xhr.responseText);
    getData(jsonData);
  } else {
    console.error(`Error ${xhr.status}: ${xhr.statusText}`);
  }
};
xhr.onerror = () => {
  console.error("Request failed");
};
xhr.send();
function getData(json) {
  let a = document.querySelectorAll(".planets li a");
  a.forEach((element) => {
    element.addEventListener("click", function (e) {
      a.forEach((el) => {
        el.classList.remove("active");
      });
      e.target.classList.add("active");
      let head = document.querySelector(".paragraph .head");
      head.innerHTML = "";
      disc.innerHTML = "";
      let image = json.destinations[e.target.dataset.id].images.png;
      let jsonName = json.destinations[e.target.dataset.id].name;
      let jsonDes = json.destinations[e.target.dataset.id].description;
      let jsonDis = json.destinations[e.target.dataset.id].distance;
      let jsonTravel = json.destinations[e.target.dataset.id].travel;
      head.innerHTML = jsonName;
      disc.innerHTML = jsonDes;
      travel.innerHTML = jsonDis;
      time.innerHTML = jsonTravel;
      photo.setAttribute("src", `${image}`);
    });
  });
}

function getName(name) {
  ul.addEventListener("click", function (e) {
    name = e.target.innerHTML;
    console.log(name);
  });
}
