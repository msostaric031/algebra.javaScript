var dog = {};
dog.breed = "Golden retriever";
dog["other breed"] = "Chihuahua";
console.log("Pasmina je: " + dog.breed);

var osoba = {
  ime: "Ime",
  prezime: "Prezime",
  brojCipela: 45,
};

var isObrisano = delete osoba.prezime;
console.log(isObrisano);
if (osoba.brojCipela > 39) {
  console.log(`Ime i prezime: ${osoba.ime} ${osoba.prezime}`);
}
