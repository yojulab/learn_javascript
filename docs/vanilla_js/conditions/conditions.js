// Comparison Operators
5 < 6;
5 <= 6;

let counter = 1;
let number = 3;
counter >= number;

// == vs ===
// == is a loose comparison
// === is a strict comparison

("use strict");
const number = 5;

if (number < 10) {
  console.log("Мало");
} else if (number == 10) {
  console.log("В точку");
} else {
  console.log("Много");
}

// Ternary operator
let condition = number > 10 ? console.log("Много") : console.log("Мало");
console.log(condition);

// switch
const animal = "cat";

switch (animal) {
  case "cat":
    console.log("Meow");
    break;
  case "dog":
    console.log("Woof");
    break;
  case "mouse":
  case "bird":
    console.log("Tweet");
    break;
  default:
    console.log("No sound");
}
