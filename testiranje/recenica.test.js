const kolikoSlova = require("./recenica");

test("provjeri koliko slova e ima", () => {
  expect(kolikoSlova()).toEqual(3);
});
