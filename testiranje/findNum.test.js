const findNum = require("./findNum");

test("nađi najveći broj", () => {
  expect(findNum.findNum()).toEqual(143);
});
test("nađi najmanji broj", () => {
  expect(findNum.najmanji()).toEqual(2);
});
