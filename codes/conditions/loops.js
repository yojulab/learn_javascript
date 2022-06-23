const animals = ["dog", "cat", "bird", "fish", "lizard"];

for (let i = 0; i < animals.length; i++) {
  // if (i == 2) continue;
  // if (i > 3) {
  //   break;
  // }
  console.log(animals[i]);
}

for (let i = 0; i < animals.length; i = i + 2) {
  console.log(animals[i]);
}

for (let animal of animals) {
  // in array
  console.log(animal);
}

let i = 0;
while (i < animals.length) {
  console.log(animals[i]);
  i++;
}
// variables
// 무한 루프
// while (true) {
//     console.log('Hello');
// }

// learning after object
const animals_obj = [
  { name: "dog", species: "canine" },
  { name: "cat", species: "feline" },
  { name: "bird", species: "avian" },
  { name: "fish", species: "aquatic" },
  { name: "lizard", species: "reptile" },
];

for (let animals in animals_obj) {
  console.log(`${animals_obj[animals].name}`);
  // console.log(`${animals.name}, ${animals.species}`);
}

animals_obj.forEach(function (animal, index) {
  console.log(index, animal.species);
});
