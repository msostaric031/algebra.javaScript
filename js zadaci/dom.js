// let windowHeight = window.innerHeight;
// let windowWidth = window.innerWidth;
// console.log(windowHeight, windowWidth);
// console.log(window.location.hostname);

// window.location = "https://www.google.com";
// window.confirm("We use cookies");
// window.setTimeout(function () {
//     console.log("I am late");
//   }, 20000);

var div = document.getElementsByClassName("description")[0];
var foot = document.getElementById("footer");
var lista = foot.getElementsByTagName("ul")[0];

const y = document.createElement("h1");
y.innerHTML = "Test";
div.parentNode.insertBefore(y, div);

const div2 = document.createElement("div");
div2.innerHTML = "Test 2";
div2.classList.add("info");

foot.parentNode.insertBefore(div2, foot);

for (i = 3; i < 6; i++) {
  const listItem = document.createElement("li");
  listItem.innerHTML = i;
  lista.appendChild(listItem);
}
