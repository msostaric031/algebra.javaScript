var num = [2, 86, 143, 3, 11, 90];

const findNum = () => {
  let najveci;
  for (let i = 0; i < num.length; i++) {
    let x = num[i];
    if (najveci === undefined) {
      najveci = x;
    }
    if (x > najveci) {
      najveci = x;
    }
  }
  return najveci;
};

const najmanji = () => {
  let najmanji;
  for (let i = 0; i < num.length; i++) {
    let x = num[i];
    if (najmanji === undefined) {
      najmanji = x;
    }
    if (x < najmanji) {
      najmanji = x;
    }
  }
  return najmanji;
};
module.exports = { findNum, najmanji };
