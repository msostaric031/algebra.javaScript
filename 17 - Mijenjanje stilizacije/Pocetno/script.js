var lista = document.querySelector("ul");
lista.style.listStyleType = "decimal";

var div1 = document.querySelector(".info");

div1.classList.add("hide");

// drugi način
// div1.className="sakrij"
var bodyElement = document.querySelector("body");
var stilovi = window.getComputedStyle(bodyElement, null);

var pocetnaMargina = stilovi.getPropertyValue("margin");
var marginaBroj = parseInt(pocetnaMargina);

var animacija = setInterval(funcFrame, 10);
var unazad = false;

function funcFrame() {
  if (unazad == true) {
    marginaBroj--;
  } else {
    marginaBroj++;
  }
  console.log(marginaBroj);
  if (marginaBroj == 30) {
    unazad = true;
  } else if (marginaBroj == 0) {
    unazad = false;
  }

  bodyElement.style.margin = marginaBroj + "px";
}
