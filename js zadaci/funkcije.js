// function traziNajduzuRijec(zadaniNiz) {
//   var najduzaRijecUFunkciji = "";
//   lenBroj = 0;

//   for (let i = 0; i < zadaniNiz.length; i++) {
//     if (zadaniNiz[i].length >= lenBroj) {
//       lenBroj = zadaniNiz[i].length;
//     }
//   }
//   for (let i = 0; i < zadaniNiz.length; i++) {
//     if (zadaniNiz[i].length === lenBroj.length) {
//       najduzaRijecUFunkciji = najduzaRijecUFunkciji + " " + zadaniNiz[i];
//     }
//   }

//   return najduzaRijecUFunkciji;
// }

var niz = [
  "Riječ",
  "Špatula",
  "Otorinolaringologija",
  "Računalo",
  "Btorinolaringologija",
  "Ctorinolaringologija",
];

// var najduzaRijec = traziNajduzuRijec(niz);

// console.log(najduzaRijec);

function checkEmail(email) {
  var i = email.indexOf("@");
  console.log("search index i = " + i);
  if (i > 0) {
    var tmpEmailDomain = email.substring(i + 1, email.length);
    console.log(tmpEmailDomain);
    var z = tmpEmailDomain.indexOf(".");
    if (z > 0) {
      return true;
    }
    return false;
  } else {
    return false;
  }
}

var isEmailOk = checkEmail("mojeime@email.com");
console.log("email ok -> " + isEmailOk);
