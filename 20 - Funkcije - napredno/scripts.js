// 1.
function vratiNesto() {
  var x = "name";
  function f() {
    return x;
  }
  return f;
}
var y = vratiNesto("Jane Doe");
var z = vratiNesto()();
console.log(z);

var ime = "Moje ime";
(function (name) {
  var x = name;
  function f() {
    return x;
  }
  return f;
})(ime);

var x = "John Doe";

function vrati() {
  function f() {
    return x;
  }
  return f;
}

var v = vrati()();
console.log(v);

var person = {
  name: "John",
  surname: "Doe",
};
console.log(person);
