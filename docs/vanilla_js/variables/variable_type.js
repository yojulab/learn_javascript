"use strict";
// var, let, const

console.log(`var_first : ${var_first}`);
// console.log(`let_first : ${let_first}`)      // Error
var var_first = 1; // No Block Scope, be Hosting
let let_first = 10;
console.log(`let_first : ${let_first}`);
{
  var var_second = 2;
  let let_second = 20;
  console.log(`let_second : ${let_second}`);
}
console.log(`var_second : ${var_second}`);
// console.log(`let_second : ${let_second}`);      // Error

const third = 30; // immutable
true;
// third = 50; // Error

// primitive types(single item) : string, number, boolean, null, undefined, symbol
console.log(typeof "hello"); // string
console.log(typeof 30); // number

const bigInt = 1234567890n; // new
console.log(typeof bigInt); // bigInt

// null vs undefined
let nothing = null;
let notYet;
console.log(`null - value : ${nothing}, type: ${typeof nothing}`);
console.log(`undefined - value : ${notYet}, type: ${typeof notYet}`);

// Dynamic Typing lang
let unKownType = "good";
// unKownType.charAt(3);
// unKownType = 7;
// unKownType = '7' / unKownType;
// unKownType.charAt(0)  // Error

// symbol : create unique identifiers for objects
const symbol_first = Symbol("id"); // Symbol.for("id")
const symbol_second = Symbol("id");
console.log(
  `symbol_first - value : ${
    symbol_first.description
  }, type: ${typeof symbol_first}`
);
console.log(
  `symbol_second - value : ${
    symbol_second.description
  }, type: ${typeof symbol_second}`
);
console.log(`compared ${symbol_first === symbol_second}`);

// objective types(box container) : list(?), first-class function
