'use strict'
const number = 5;

if (number < 10) {
    console.log('Мало');
} else if (number == 10) {
    console.log('В точку');
} else {
    console.log('Много');
}

// == vs ===
// == is a loose comparison
// === is a strict comparison

const animal = 'cat';

switch (animal) {
    case 'cat':
        console.log('Meow');
        break;
    case 'dog':
        console.log('Woof');
        break;
    case 'mouse':
    case 'bird':
        console.log('Tweet');
        break;
    default:
        console.log('No sound');
}