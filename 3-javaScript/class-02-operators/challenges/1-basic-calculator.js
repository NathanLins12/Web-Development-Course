// Solicite 2 números e apresente:
// As operaçôes e os resultados escrevendo no documento (função write).
// Crie constantes e atribua as operações de:
// +, -, *, /, %, ** e raiz para os números solicitados.

const number1 = Number(prompt("Digite um número."));
const number2 = Number(prompt("Agora digite um outro número."));

alert(`Os números são ${number1} e ${number2}!`)

const add = number1 + number2
const sub = number1 - number2
const mul = number1 * number2
const div = number1 / number2
const rest = number1 % number2
const pow = number1 ** number2
const sqrt = number1 **  (1 / number2)

document.write(`<strong>${number1} + ${number2} = ${add}</strong> <br/>`)
document.write(`<strong>${number1} - ${number2} = ${sub}</strong> <br/>`)
document.write(`<strong>${number1} * ${number2} = ${mul}</strong> <br/>`)
document.write(`<strong>${number1} / ${number2} = ${div.toFixed(2)}</strong> <br/>`)
document.write(`<strong>${number1} % ${number2} = ${rest}</strong> <br/>`)
document.write(`<strong>${number1} elevado a ${number2} = ${pow}</strong> <br/>`)
document.write(`<strong>A raíz ${number1} de ${number2} = ${sqrt.toFixed(2)}</strong> <br/>`)