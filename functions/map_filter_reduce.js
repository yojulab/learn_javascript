'use strict';

const computers = [
    { name: 'Apple', ram: 24, price: 1000 },
    { name: 'Acer', ram: 32, price: 800 },
    { name: 'Asus', ram: 16, price: 400 },
    { name: 'Dell', ram: 24, price: 600 },
];

// map
const computerName = computers.map(computer => computer.name);
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

