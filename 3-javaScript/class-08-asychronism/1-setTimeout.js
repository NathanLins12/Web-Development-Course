const setTimeoutID = setTimeout(() => {
    console.log("Time Out!");
}, 3500)

console.log("depois");

let count = 10
const intervalID = setInterval(() => {
  console.log(count);
  count--;

  if (count <= 0) {
      console.log("aêê");
      clearInterval(intervalID);
    }
}, 1000);

console.log("interval", intervalID);
