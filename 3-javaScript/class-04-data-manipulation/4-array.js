const myArray = Array("A", 1, () => "a");

console.log(myArray);
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]());
console.log(myArray.join("_"));

const myName = "Nathan";
console.log(myName.split("").reverse().join("-"));

const arrayTechs = ["HTML", "CSS", "Git"]
arrayTechs.push("JavaScript");

const removeItemEND = arrayTechs.pop() // LIFO
console.log(removeItemEND + " Foi removido com sucesso!");

const removeItemSTART = arrayTechs.shift()
console.log(removeItemSTART + " foi removido com sucesso!");

arrayTechs.unshift("React");
arrayTechs.unshift("SQL");

console.log(arrayTechs);

console.log(arrayTechs.includes("React"));
console.log("A" == "a");

console.log(arrayTechs.indexOf("HTML"));  //-1 not exist

console.log(arrayTechs.keys());

console.log(arrayTechs.slice(1, 3));
console.log(arrayTechs.slice(-3, -1));

console.log(arrayTechs.splice(1, 3));
console.log(arrayTechs.splice(1, 4));

console.log(myArray.concat(arrayTechs));



function callback(func) {
    return func()
}
console.log(callback(() => "retorno"))
