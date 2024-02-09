const appTitle = document.querySelector("h1#titleHome");
const paragrafh = document.querySelectorAll("p");

appTitle.innerHTML = "Num é um prefeito não, é um pai!";
appTitle.style.color = "green";

console.log(appTitle.innerHTML);

paragrafh[0].innerHTML = "Já ganhou tan tan tan...";

paragrafh[1].innerHTML = "novo paragrafo";

console.log(paragrafh);

const num1 = document.querySelector("input.num1");
const num2 = document.querySelector("input.num2");
const sumButton = document.querySelector(".sumButton");
const result = document.querySelector(".result");

function sumNumbers() {
  result.innerHTML = Number(num1.value) + Number(num2.value);
}

sumButton.addEventListener("click", sumNumbers);

num1.addEventListener("keyup", () => {
  XPathResult.innerHTML = num1.value;
});
