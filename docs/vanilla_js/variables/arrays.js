const init_array = new Array(); // or []
const mixins = ["apple", "banana", 4, "orange", { name: "Tom", age: 4 }];

const fruits = ["apple", "banana", "orange", "mellon"];
console.log(fruits, fruits.length);
console.clear();
const pick_fruits = [];
fruits.forEach((fruit, index) => {
  //   console.log(index % 2);
  if (index % 2) {
    pick_fruits.push(fruit);
  }
});
console.log(`pick_fruits : ${pick_fruits}`);
fruits.push("grape");
fruits.pop(); // remove from end
fruits.shift(); // remove from beginner
console.log(fruits);
fruits.splice(1, 1); // remove an item by index postion
fruits.slice(1, 2);

const fruits_second = ["berry", "strawberry"];
const fruits_concat = fruits.concat(fruits_second);
console.log(`fruits_concat : ${fruits_concat}`);

// Searching
console.clear();
console.log(`indexOf : ${fruits_concat.indexOf("banana")}`);
console.log(`indexOf : ${fruits_concat.indexOf("yellow")}`);

console.log(`lastIndexOf : ${fruits_concat.lastIndexOf("banana")}`);
fruits_concat.push("banana");
console.log(`lastIndexOf : ${fruits_concat.lastIndexOf("banana")}`);

console.log(`includes : ${fruits_concat.includes("banana")}`);
console.log(`includes : ${fruits_concat.includes("yellow")}`);

console.clear();
// string out of an array
console.log(fruits_concat.join(" and "));
// array to string
const str_fruits = fruits_concat.join();
console.log(str_fruits);
console.log(str_fruits.split(",", 4));

// in order of reverse
console.log(fruits_concat.reverse());

const mixins_array = [
  ["apple", "banana"],
  ["orange", "mellon"],
  ["berry", "strawberry"],
];

// for (item of mixins_array) {
// }
