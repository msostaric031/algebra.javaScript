"use strict";
// 1.
var a = 78;
var b = 34;
// delete a;
// delete b;
var myObject = { property1: 1, property2: 2, property3: 1 };

// 2.
const users = [
  { name: "Fabio", surname: "Biondi" },
  { name: "Mario", surname: "Rossi" },
];

const user = { name: "Lorenzo", surname: "Verdi" };

const users2 = [...users, user];
for (let i = 0; i < users2.length; i++) {
  console.log(users2[i].name);
}

users2.forEach((e) => console.log(e.name));
console.log("------------");

for (let c in users2) {
  console.log(users2[c].name);
}
// 3.
// for (let i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log("The number is " + i);
//   }, 1000);
// }
