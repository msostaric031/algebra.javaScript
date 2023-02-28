// const { _ } = require("../core");

var dobro = "1234567890";
var lose = "1123456";

// var jedinstveniZnakovi = function (password) {
//   console.log(password);
//   let convertedPassword = _.parseInt(password);
//   let isNum = _.isNumber(convertedPassword);
//   console.log("is number " + isNum);
// };
// jedinstveniZnakovi(dobro);
// jedinstveniZnakovi(lose);
// var myArray = [];
// function isUniqueCharacters(password) {
//   for (let i = 0; i < password.length; i++) {
//     var myChar = password.charAt(i);
//     if (!myArray.includes(myChar)) {
//       myArray.push(myChar);
//     } else {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isUniqueCharacters(dobro.toString()));

// function isVeciOdDeset(password) {
//   if (password.length > 10) {
//     return password.substring(0, 10);
//   }
//   return password;
// }

// console.log(isVeciOdDeset("jedandvatricetiri"));

const isPasswordValid = (password) => {
  // Check if the password contains numbers only
  console.log(password);
  for (let i = 0; i < password.length; i++) {
    if (isNaN(parseInt(password[i]))) {
      console.log("Password is not a number ✖");
      return false;
    }
  }
  console.log("Password is a number ✔");
  // Check if password is unique
  var myArray = [];

  for (let i = 0; i < password.length; i++) {
    var myChar = password.charAt(i);
    if (!myArray.includes(myChar)) {
      myArray.push(myChar);
    } else {
      console.log("Password is not unique ✖");
      return false;
    }
  }
  console.log("Password is unique ✔");

  // Check if length of password is 10 or less
  if (password.length > 10) {
    console.log(
      "Password is shortened but valid --> " + password.substring(0, 10)
    );
    return password.substring(0, 10);
  }
  console.log("Password is valid --> " + password);
  return password;
};

console.log("-- Valid password-- ");
isPasswordValid(dobro);

console.log("-- Invalid password-- ");
isPasswordValid("12345a");

console.log("-- Invalid password-- ");
isPasswordValid(lose);
