var text = "Lorem ipsum dolor sit amet";

var length = text.length;

console.log("duljina teksta je " + text.length);

var wordSit = text.substr(18, 3);
console.log(wordSit);
text = text.replace("amet", "elit");

var newText = text + ", consectetur adispicing elit";
console.log(newText);

text = text.toUpperCase();
text = text.trim();
console.log(text);

var aa = text.charAt(11);
console.log(aa);
