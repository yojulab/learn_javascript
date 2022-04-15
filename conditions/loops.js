const animals = ['dog', 'cat', 'bird', 'fish', 'lizard'];

for (let i=0; i<animals.length; i++) {
    console.log(animals[i]);
}

for (let animal of animals) {
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
    {name: 'dog', species: 'canine'},
    {name: 'cat', species: 'feline'},
    {name: 'bird', species: 'avian'},
    {name: 'fish', species: 'aquatic'},
    {name: 'lizard', species: 'reptile'},
];

animals_obj.forEach(function(animal, index) {
    console.log(index, animal.species);
});