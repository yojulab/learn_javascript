"use strick";

// Object to JSON
{
  const jsonType = JSON.stringify(["meat", "meat", "meat"]);
  console.log(jsonType);
}
{
  const jsonType = JSON.stringify({ species: "lion" });
  console.log(jsonType);
}

const lion = {
  name: "Lion",
  species: "lion",
  foodsEaten: ["meat", "meat", "meat"],
  eatSomething: function (food) {
    this.foodsEaten.push(food);
  },
};

const lionJSON = JSON.stringify(lion);
console.log(lionJSON); // Except Function, Symbol()
{
  let lionJSONReplacer = JSON.stringify(lion, ["name", "foodsEaten"]);
  console.log(lionJSONReplacer);
  lionJSONReplacer = JSON.stringify(lion, (key, value) => {
    console.log(`key:${key}, value:${value}`);
    return key === "species" ? "cats" : value;
  });
}

// JSON to Object
console.clear();
const jsonType = JSON.stringify(lion);

const lionJSONParsed = JSON.parse(jsonType);
console.log(lionJSONParsed); // data serialailzation
{
  const lionJSONParsed = JSON.parse(lionJSON, (key, value) => {
    console.log(`key:${key}, value:${value}`);
    return key === "species" ? "cats" : value;
  });
  console.log(lionJSONParsed); // data serialailzation
}
