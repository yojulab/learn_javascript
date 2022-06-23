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
    console.log(this); // this --> global
    this.foodsEaten.push(food); // Error
  },
};
monkey.name = "John";
console.log(monkey);
console.log(monkey.foodsEaten);
monkey.eatSomething("mangos");
monkey.eatSomethingArrow("strawberry");
