let let_first = 10;

{
  console.log(`In let_first ${let_first}`);
  let let_second = 20;
  console.log(`In let_second ${let_second}`);
}
console.log(`Out let_first ${let_first}`);
// console.log(`Out let_second ${let_second}`);    // Error

// check typeof
console.log(`typeof let_first : ${typeof let_first}`);
let_first = "good";
console.log(`typeof let_first : ${typeof let_first}`);

console.log();

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
