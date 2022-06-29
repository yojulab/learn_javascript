// define literal way of OOP
const monkey = {
  name: "George",
  species: "gorilla",
  foodsEaten: ["bananas", "apples", "pears"],
  eatSomething: function (food) {
    this.foodsEaten.push(food);
    console.log(this); // this --> monkey obj
  },
  eatSomethingArrow: (food) => {
    console.log(this); // this --> somethimes  global
    // this.foodsEaten.push(food); // Error
  },
};

monkey.name = "John";
console.log(monkey);
console.log(monkey.foodsEaten);
// computed properties
console.log(monkey["foodsEaten"]);

function logSomethings(_object, _key) {
  console.log(_object[_key]);
}
logSomethings(monkey, "foodsEaten");

monkey.eatSomething("mangos");
monkey.eatSomethingArrow("strawberry");

monkey.isLive = true;
// delete monkey;   // 동작 안 함.
true;
// property value shorthand
console.clear();
const people_first = { name: "Tom", age: 10 };
const people_second = { name: "Jane", age: 12 };
const people_third = createPeople("Jone", 14);
console.log(`people_third : ${people_third.name}`);
function createPeople(item_1, item_2) {
  return {
    name: item_1,
    age: item_2,
  };
}

// clone object
const people_fourth = people_third;
people_fourth.name = "Han";
console.log(`people_third : ${people_third.name}`);

const people_fifth = Object.assign(new Object(), people_third);
people_fifth.name = "Kim";
console.log(`people_fifth : ${people_fifth.name}`);
console.log(`people_third : ${people_third.name}`);
