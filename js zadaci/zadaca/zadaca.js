var names = ["John", "Jane", "Bob", , "Mike"];

// -- #1 ispisati niz

console.log("---- 1. zadatak ----");

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// -- #2 dodati još jedno ime na kraju niza

console.log("---- 2. zadatak ----");

// prvi način

names.push("Marko");
console.log(names);

// drugi način

names[6] = "Ivan";
console.log(names);

// -- #3 ako je ime "jane" izađi iz petlje

console.log("---- 3. zadatak ----");

for (let j = 0; j < names.length; j++) {
  if (names[j] === "Jane") {
    break;
  } else {
    console.log(names[j]);
  }
}

// -- #4 naredba za ukljanjanje undefined vrijednosti iz niza

console.log("---- 4. zadatak ----");

// prvi način -> splice()

for (let z = 0; z < names.length; z++) {
  if (names[z] === undefined) {
    names.splice(z, 1);
  } else {
    console.log(names[z]);
  }
}
console.log("--------");

// drugi način -> splice()
for (let z = 0; z < names.length; z++) {
  if (names[z] === undefined) {
    delete names[z];
  } else {
    console.log(names[z]);
  }
  console.log(names[z]);
}
// drugi način -> delete -> NEPOUZDANA METODA (ova metoda ne obriše element u potpunosti)
// for (let z = 0; z < names.length; z++) {
//   if (names[z] === undefined) {
//     delete names[z];
//   } else {
//     console.log(names[z]);
//   }
// }
