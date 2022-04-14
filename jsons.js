
const lion = {
    name: 'Lion',
    species: 'lion',
    foodsEaten: ['meat', 'meat', 'meat'],
    eatSomething: function(food) {
        this.foodsEaten.push(food);
    },
};

const lionJSON = JSON.stringify(lion);
console.log(lionJSON);  

const lionJSONParsed = JSON.parse(lionJSON);
console.log(lionJSONParsed);