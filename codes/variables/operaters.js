"use strict";

// String Operators
"my" + "cat";
"1" + 2;
const strConcate = `string 1+2=${1 + 2}`;

// Numeric Operators
2 + 2;
2 - 2;
2 / 2;
2 * 2;
4 % 2;
2 ** 2;

// increment and decrement operatros
let counter = 1;
counter++;
++counter;

let number = 3;
counter += number;
counter -= number;
counter *= number;
counter /= number;

// Comparison Operators
5 < 6;
5 <= 6;
counter >= number;

// logical operators : ||, &&, !
const bool_true = true;
const bool_false = false;
const val_true = 5 < 6;
const val_false = 5 >= 6;

bool_true || bool_false;
val_false || val_true;

bool_true && bool_false;
val_true && val_false;

!val_false || val_true;

// Equality Operators
const strTwo = "2";
const numberTwo = 2;

strTwo == numberTwo;
strTwo === numberTwo;
strTwo !== numberTwo;
