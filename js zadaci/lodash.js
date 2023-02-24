// const { _ } = require("core-js");
// 1.
var dobro = 1234567890;
var lose = "1123456";
var jedinstveniZnakovi = function (password) {
  console.log(password);
  let isNum = _.isNumber(password);
  console.log("is number " + isNum);
};
jedinstveniZnakovi(dobro);
jedinstveniZnakovi(lose);
var myArray = [];
function isUniqueCharacters(password) {
  for (let i = 0; i < password.length; i++) {
    var myChar = password.charAt(i);
    if (!myArray.includes(myChar)) {
      myArray.push(myChar);
    } else {
      return false;
    }
  }
  return true;
}
console.log(isUniqueCharacters(dobro.toString()));

function isVeciOdDeset(password) {
  if (password.length > 10) {
    return password.substring(0, 10);
  }
  return password;
}

console.log(isVeciOdDeset("jedandvatricetiri"));
