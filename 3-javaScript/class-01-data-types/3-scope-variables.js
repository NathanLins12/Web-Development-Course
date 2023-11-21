let num = 10 //global
const pi = 3.14
var myName = "nathan"

{
    let num = 20 //local
    console.log(num);
    var myName = "lins" //hoisting
}

console.log(num);
console.log(pi);
console.log(myName);