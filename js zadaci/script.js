"use strict";
/*
var count = 3;

while (count <= 20) {
  if (count % 9 === 0) {
    count++;
    continue;
  }
  console.log(count);
  count++;
}

var count = 3;

var varOne = 0;
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    varOne++;
  }
}

console.log(varOne);

*/

var firstName = "Marko";
var lastName = "Sostaric";

var fullName = firstName + " " + lastName;
console.log(fullName);

console.log("----------");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`Broj ${i} je paran.`);
  } else {
    console.log(`Broj ${i} je neparan.`);
  }
}

var names = ["John", "Jane", , "Mike"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

console.log("-----");

names.forEach(function (value) {
  console.log(value);
});
