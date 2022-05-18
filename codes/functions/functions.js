const item_1 = 1000;
const item_2 = 2000;
const item_3 = 3000;

// 호이스팅(hoisting), 
// function to calculate the total price
console.log(calculateSum1(item_1, item_2, item_3));
function calculateSum1(item_1, item_2, item_3) {
  return item_1 + item_2 + item_3;
}

// console.log(calculateSum2(item_1, item_2, item_3)); // Error
const calculateSum2 = (item_1, item_2, item_3) => {
  return item_1 + item_2 + item_3;
}
console.log(calculateSum2(item_1, item_2, item_3));

// 렉시컬 스코프(Lexical Scope)
const lexical_scope = {
    name: 'Lexical Scope',
    sayName1: function() {
        // console.log(this.name);
        console.log(this);
    },
    sayName2: () => {
        // console.log(this.name);
        console.log(this);
    }
};

// console.log(lexical_scope.sayName1());
// console.log(lexical_scope.sayName2());
console.log(lexical_scope.sayName1());
console.log(lexical_scope.sayName2());

const lexical_scope_2 = lexical_scope.sayName1;
lexical_scope_2();
