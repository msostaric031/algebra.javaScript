var character = {
  name: "Eleven",
  show: "Stranger Things",
  portrayedBy: "Millie Bobby Brown",
};

const quotes = [
  "I'm going to my friends. I'm going home.",
  "Pure fuel! PURE FUEL! WOO!",
  "See? Zoomer.",
  "Bitchin.",
];

// 1

var proto1 = Object.getPrototypeOf(character);

var proto2 = Object.getPrototypeOf(proto1);
console.log(proto1);
console.log("-----------");
console.log(proto2);

character.prototype = function () {
  var rndValue = quotes[Math.floor(Math.random() * quotes.length)];
  console.log(rndValue);
  return rndValue;
};
