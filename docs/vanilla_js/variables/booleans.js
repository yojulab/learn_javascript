"use strict";

// false : 0, null, undefined, NaN, ''
// true : any other value
const bool_false = 20 > 5;
const bool_true = 20 < 5;
console.log(`value : ${bool_false}, type: ${typeof bool_false}`);

let flag = true; // 1
flag = false; // 0

let condition = 20 > 5;
condition = 20 <= 5;

let condition_first = 15 > 5;
let condition_second = 15 < 7;

// ||(or), &&(and), !(not)
let result = condition_first || condition_second;
result = condition_first && condition_second;
!result;

// logical operators : ||, &&, !
bool_true = true;
bool_false = false;
const val_true = 5 < 6;
const val_false = 5 >= 6;

bool_true || bool_false;
val_false || val_true;

bool_true && bool_false;
val_true && val_false;

!val_false || val_true;

// Equality Operators
let string_first = "2";
let number_first = 2;

string_first == number_first;
string_first != number_first;
string_first === number_first;
string_first !== number_first;
