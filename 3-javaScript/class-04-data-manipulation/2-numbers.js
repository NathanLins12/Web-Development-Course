console.log(Number(""));
console.log(Number(" "));
console.log(Number("Nathan"));
console.log(typeof Number("Nathan"));

console.log(isNaN(Number("Nathan")));

console.log(typeof Number(null));
console.log(typeof Number(true));
console.log(typeof Number(false));
console.log(typeof Number(undefined));

let num1 = 6.64698464651
let num2 = 486684643213132486846848

console.log(parseInt(num1));
console.log(parseFloat(num2));

console.log(String(num1).replace(".", "").length);

console.log(num1.toLocaleString("pt-br", { style: "currency", currency: "brl" }));

console.log(num1.toLocaleString("pt-br", { style: "currency", currency: "usd" }));

// Math Functions

console.log(Math.PI);
console.log(Math.E);
console.log(Math.sqrt(9));
console.log(Math.abs(num1));

const numbers = [3, 4, 5, 56, 6, 7, 85, 4, 345, 5, 4, 3, 78]
console.log(...numbers); // Spread
console.log(Math.max(...numbers)); // Spread
console.log(Math.min(...numbers)); 

// 0-4 => para baixo : 5-9 => para cima
console.log(Math.round(2.4)); 
console.log(Math.round(2.5));
console.log(Math.ceil(2.999999));
console.log(Math.floor(2.99999));

