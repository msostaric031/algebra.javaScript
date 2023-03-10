function Dog(name) {
  this.name = name ? name : "Rex";
  this.getName = function () {
    return this.name;
  };
}

var dog = new Dog("Pero");

console.log(dog.name);

var dog2 = new Dog("Duško");
console.log(dog2.getName());

function Pas(ime) {
  this.name = ime ? ime : "Rex";
  this.getName = function () {
    return this.name;
  };
  this.setName = function (ime) {
    this.name = ime;
  };
}

var pas = new Pas();
console.log(pas.name);
pas.setName("Ime");
console.log(pas.name);
