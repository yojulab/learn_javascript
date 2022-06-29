"use strick";

const number_1 = 1000;
const number_2 = 2000;

function sum(item_1, item_2) {
  return item_1 + item_2;
}

const substract = function debugDisplay(item_1) {
  return item_1 - 30;
};

function operateNumbers(first, second, func_first, func_second) {
  let result;
  if (first <= second) {
    result = func_first(first, second);
  } else {
    result = func_second(first);
  }
  return result;
}

const return_val_1 = operateNumbers(number_1, number_2, sum, substract);
const return_val_2 = operateNumbers(number_2, number_1, sum, substract);

console.log(`return_val_1:${return_val_1}, return_val_2:${return_val_2}`);
