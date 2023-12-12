// Crie uma função que retorne quantas palavras tem em uma frase

function textWordCount(text) {
  return text.trim().split(" ").length;
}

const text = prompt("Digite o texto")
const numberWordText = textWordCount(text);

alert(`O texto tem ${textWordCount(text)} palavras!`)