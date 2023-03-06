// 1

var h1 = document.querySelector("h1");

h1.innerText = "Karlovac";

// 2

var div1 = document.querySelector(".description");
div1.innerHTML = "Grad na <h3>5 rijeka</h3>";

// 3

var div2 = document.querySelector(".info");

div2.innerText = "Peta rijeka je piva.";

// 4
var footer = document.getElementById("footer");

var listItems = footer.getElementsByTagName("li");

var rijeke = ["Kupa", "Korana", "Mrežnica", "Dobra", "Piva"];

for (i = 0; i < listItems.length; i++) {
  listItems[i].innerText = rijeke[i];
}
