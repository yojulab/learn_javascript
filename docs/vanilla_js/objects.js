// let animal = {key:value, key:value, key:value}
let answers = {
  1: "전혀 아니다.",
  2: "아니다.",
  3: "그렇다",
  4: "매우 그렇다",
};

let animal = { name: "juju", species: "cat" };

console.log(animal.name);

let animal_keys = Object.keys(animal);
for (let key of animal_keys) {
  console.log(`${key} : ${animal[key]}`); // animal['name'], animal['species']
}

console.log();

const animals_obj = [
  animal,
  { name: "cat", species: "feline" },
  { name: "bird", species: "avian" },
  { name: "fish", species: "aquatic" },
  { name: "lizard", species: "reptile" },
];
