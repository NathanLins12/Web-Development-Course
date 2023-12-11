// String Manipulation

// Prototype (Chain)

let myName = "Nathan";
console.log(myName.__proto__);

console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
console.log(myName.slice(4, -2)); // accept negative values
console.log(myName.substring(2, 4));

console.log(myName[1]);

myName[1] = "L";
console.log(myName); // string immutable

myName = "test";
console.log(myName);

let phrase = "  I'm a autist";

console.log(phrase.replace("autist", "help"));
console.log(phrase.indexOf("a"));
console.log(phrase.trim());

console.log(phrase.split(" ")[2]);
console.log(phrase.split(" ").join("-"));
console.log(phrase.split("").reverse().join(""));

console.log(phrase.includes("autist")); //case-sensitive
console.log("Autist" == "autist");
console.log(phrase.toLocaleLowerCase().includes("autist"));

function log() {
  return "print";
}
