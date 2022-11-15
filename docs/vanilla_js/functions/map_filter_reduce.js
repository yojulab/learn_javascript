"use strict";

const computers = [
  { name: "Apple", ram: 24, price: 1000 },
  { name: "Acer", ram: 32, price: 800 },
  { name: "Asus", ram: 16, price: 400 },
  { name: "Dell", ram: 24, price: 600 },
];

// map
const computerName = computers.map((computer) => computer.name);
console.log(computerName);

const computer_obj = computers.map((computer, index) => {
  return `${index} 번째 ${computer.name}, ${computer.price}`;
});
console.log(computer_obj);

const computer_obj2 = computers.filter((computer, index) => {
  return computer.price > 500;
});
console.log(computer_obj2);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const totalNumbers = numbers.reduce((acc, number) => {
  console.log(acc, number);
  return acc + number;
});
console.log(totalNumbers);

const totalComputer = computers.reduce((acc, computer) => {
  console.log(acc, computer);
  return acc + computer.price;
}, 0);
console.log(totalComputer);

// find in array
console.clear();
const cities = [
  { name: "New York", population: 8550405 },
  { name: "Los Angeles", population: 3971883 },
  { name: "Chicago", population: 2720546 },
  { name: "Houston", population: 2296224 },
  { name: "Philadelphia", population: 1517550 },
  { name: "Phoenix", population: 1445632 },
  { name: "San Antonio", population: 1327407 },
  { name: "San Diego", population: 1307402 },
  { name: "Dallas", population: 1197816 },
  { name: "San Jose", population: 945942 },
];
{
  const result = cities.find((item, index) => {
    console.log(`index:${index}, item:${item.name}`);
    return item.population <= 2720546;
  });
  console.log(result);
}

// make an array of more 2720546 than population
{
  const result = cities.filter((item, index) => item.population <= 2720546);
  console.log(result);
}

// make transfering array with map function
{
  const result = cities.map((item, index) => item.population);
  console.log(result);
}

// check if there is something
{
  let result = cities.some((item, index) => item.population <= 2720546);
  console.log(result);

  // all
  result = cities.every((item, index) => item.population <= 2720546);
  console.log(result);
}

console.clear();
{
  const result = cities.reduce((previous, current, index) => {
    console.log(`index:${index}, previous : ${previous}, current : ${current}`);
    return previous + current.population;
  }, 0);
  console.log(result / cities.length);
}
