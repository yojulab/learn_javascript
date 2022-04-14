const monkey = {
    name: 'George',
    species: 'gorilla',
    foodsEaten: ['bananas', 'apples', 'pears'],
    eatSomething: function(food) {
        this.foodsEaten.push(food);
    },
};
monkey.name = 'John';
console.log(monkey);
console.log(monkey.foodsEaten);