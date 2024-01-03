let dateNow = new Date();
let date1 = new Date("2023-12-25 1:35:04");
let date2 = new Date("2023-12-29 15:35:4");

console.log((date2 - date1) / 1000 / 60 / 60 / 24) ;

console.log(dateNow);
console.log(date1);

console.log(dateNow.getDay() + 2); // day 0-6
console.log(dateNow.getDate() + 6); //data 1-31
console.log(dateNow.getMonth()); // mounth 0-11
console.log(dateNow.getFullYear());

console.log(dateNow.getDay() + 2); // day 0-6
console.log(dateNow.setDate(dateNow.getDate() + 6)); //data 1-31
console.log(dateNow.setMonth(dateNow.getMonth())); // mounth 0-11
console.log(dateNow.setFullYear(dateNow.getFullYear()));

console.log(dateNow.getHours());
console.log(dateNow.getMinutes());
console.log(dateNow.getSeconds());
console.log(dateNow.getMilliseconds());

console.log(dateNow.setHours(dateNow.getHours()));
console.log(dateNow.setMinutes(dateNow.getMinutes()));
console.log(dateNow.setSeconds(dateNow.getSeconds()));
console.log(dateNow.setMilliseconds(dateNow.getMilliseconds()));

let day = String(dateNow.getDate()).padStart(2, "0")
let month = String(dateNow.getMonth()).padStart(2, "0")
let year = dateNow.getFullYear()

console.log(`${day}/${month}/${year}`);

console.log(dateNow.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
}));
