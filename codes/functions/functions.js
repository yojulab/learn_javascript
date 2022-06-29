const number_1 = 1000;
const number_2 = 2000;
const number_3 = 3000;

// basic function, 호이스팅(hoisting) is support,
// function to calculate the total price
// early return or exit
console.log(calculateSum1(number_1, number_2, number_3));
function calculateSum1(item_1, item_2, item_3) {
  return item_1 + item_2 + item_3;
}
// console.log(calculateSum1(number_1, number_2, number_3));

// anonymous function, hoisting not support,
// console.log(calculateSum2(number_1, number_2, number_3)); // Error
const calculateSum2 = function (item_1, item_2, item_3) {
  return item_1 + item_2 + item_3;
};
console.log(calculateSum2(number_1, number_2, number_3));

// arrow function, hoisting not support, from EC6
// console.log(calculateSum3(number_1, number_2, number_3)); // Error
const calculateSum3 = (item_1, item_2, item_3) => {
  return item_1 + item_2 + item_3;
};
console.log(calculateSum3(number_1, number_2, number_3));

// 렉시컬 스코프(Lexical Scope)
const lexical_scope = {
  name: "Lexical Scope",
  sayName1: function () {
    // console.log(this.name);
    console.log(this);
  },
  sayName2: () => {
    // console.log(this.name);
    console.log(this);
  },
};

// console.log(lexical_scope.sayName1());
// console.log(lexical_scope.sayName2());
console.log(lexical_scope.sayName1());
console.log(lexical_scope.sayName2());

const lexical_scope_2 = lexical_scope.sayName1;
lexical_scope_2();

// rest parameters ( ES6)
function printRestparam(...args) {
  args.forEach((arg, index) => {
    console.log(`index : ${index}, value : ${arg}`);
  });
}

printRestparam(number_1, number_2, number_3);

// ? return values
// function returnValues(item_1) {
//   const val_sum = item_1 + item_1;
//   const val_substract = item_1 - item_1;
//   const val_multipy = item_1 - item_1;
//   return val_sum, val_substract, val_multipy;
// }
// console.log(returnValues(number_1));
