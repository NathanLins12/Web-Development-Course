function average (grade1, grade2) {
    const result = (grade1 + grade2) /2
    document.write(`${result} <br>`)
}

average(4, 7); // Argument
average(6, 5); // Argument
average(9, 7); // Argument
average(7, 6); // Argument
average(8, 3); // Argument
average(8, 10); // Argument

// Anonymous
const add = function (n1, n2){
    return n1 + n2
}

console.log(add(2, 3));

// Arrow    

const mult = (n1, n2) => {
    return n1 * n2
}

console.log(mult(2, 3));