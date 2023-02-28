const isNum = (password) => {
  for (let i = 0; i < password.length; i++) {
    if (isNaN(parseInt(password[i]))) {
      return false;
    }
  }
  return true;
};

const isUnique = (password) => {
  var myArray = [];

  for (let i = 0; i < password.length; i++) {
    var myChar = password.charAt(i);
    if (!myArray.includes(myChar)) {
      myArray.push(myChar);
    } else {
      return false;
    }
  }
  return true;
};

const isShort = (password) => {
  if (password.length > 10) {
    return password.substring(0, 10);
  }
  return password;
};

const checkPass = (pass) => {
  let shortPass = isShort(pass);
  if (isNum(shortPass) === true) {
    if (isUnique(shortPass) === true) {
      console.log(`Password "${shortPass}" is valid!`);
      return shortPass;
    }
    return console.log(`Password "${shortPass}" is not unique!`);
  }

  console.log(`Password "${shortPass}" is not valid!`);
};

checkPass("1234567890");
