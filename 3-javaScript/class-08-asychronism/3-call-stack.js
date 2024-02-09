function sayHi() {
    throw new Error("error in sayHi!")
  return "hi!";
}

function greeting() {
    return sayHi()
}

function action() {
    action()
    return greeting()
}

const value = action()

console.log(value);

