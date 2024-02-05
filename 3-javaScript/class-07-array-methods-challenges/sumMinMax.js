const numbers = [10, 4, 7, 5, 3];

function sumMinMax(numbers) {
  numbers.sort((a, b) => a - b);
  // const sumMin = numbers.slice(0, 3).reduce((a, b) => a + b);
  // const sumMax = numbers.slice(-3).reduce((a, b) => a + b);
  // console.log(sumMin);
  // console.log(sumMax);

  const sumMin = numbers.filter((value, index) => index < 3).reduce()
}
