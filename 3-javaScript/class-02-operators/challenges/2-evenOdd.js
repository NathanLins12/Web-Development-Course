// Construa uma lógica para dizer se um número é par ou é ímpar
// Receba o número desejado do usuário via prompt
// Escreve na tela o número e se ele é par ou é ímpar

const numUser = Number(prompt("digite qualquer número para ver se ele é par ou ímpar"));

const result = numUser % 2 == 0 ? "par" : numUser % 2 == 1 ? "ímpar" : "inválido";
window.alert(`O número que você escolheu é ${result}!`)