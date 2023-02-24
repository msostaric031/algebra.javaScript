/*var dog = {};
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
*/

var auto = {
  marka: "VW",
  tip: {
    naziv: "nesto",
  },
  gorivo: "benzin",
  model: "Golf",
  godina: 2022,
  boja: "crvena",
  maxBrzina: 100,
  trenutnaBrzina: 0,
  ubrzaj: function (ubrzanje) {
    this.trenutnaBrzina += ubrzanje;
    return this.trenutnaBrzina;
  },
  zakoci: function (brojSekundi) {
    while (this.trenutnaBrzina > 0 && brojSekundi >= 0) {
      this.trenutnaBrzina -= 2;
      console.log("Trenutna brzina pri kočenju je: " + this.trenutnaBrzina);
      brojSekundi--;
    }
    return this.trenutnaBrzina;
  },
};

// console.log(`Vozim auto marke ${auto.marka}`);
// console.log(`Auto vozi trenutnom brzinom od ${auto.trenutnaBrzina}`);
// console.log(`Auto nakon ubrzanja vozi brzinom ${auto.ubrzaj(20)}`);
// console.log(`Auto nakon kočenja vozi brzinom ${auto.zakoci(2)}`);

// console.log(Object.keys(auto).length);

// for (let key in auto) {
//   if (auto.propertyIsEnumerable(key)) {
//     console.log(`${key}: ${auto[key]}`);
//   }
// }

// console.log(
//   `Vozim auto marke ${auto.marka}, model: ${auto.model}, iz godine: ${auto.godina}`
// );
// var json = JSON.stringify(auto);
// console.log(json);
// console.log(auto.tip.naziv);
