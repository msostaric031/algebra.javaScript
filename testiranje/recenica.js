const recenica = "Ovo je rečenica.";

const kolikoSlova = () => {
  let brojSlova = 0;
  for (let i = 0; i < recenica.length; i++) {
    let x = recenica.trim().charAt(i);
    if (x !== "e") {
      continue;
    } else {
      brojSlova += 1;
    }
  }
  return brojSlova;
};
module.exports = kolikoSlova;
