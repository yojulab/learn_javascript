let count;
count = 20;
console.log(count);
count = "count:50";
console.log(count);

let name = "cocolab";
// undefined
console.log(name);
// VM177:1 cocolab
let welcome = 'Hello World !';
// undefined
welcome;
// 'Hello World !'
let numbers = 55;
// undefined
numbers;
// 55

welcome;
// 'Hello World !'
'String :' + 'Hello world !';
// 'String :Hello world !'
"String : " + welcome;
// 'String : Hello World !'
let concats = "String : " + welcome;
// undefined
concats;
// 'String : Hello World !'

numbers;
// 55
concats = concats + ", Number:" + numbers;
// 'String : Hello World !, Number:55'
concats;
// 'String : Hello World !, Number:55'
alert(concats);
// undefined
concats;
// 'String : Hello World !, Number:55'
`String : ${welcome}, Number:${numbers}`;
// 'String : Hello World !, Number:55'
let concats_tilt = `String : ${welcome}, Number:${numbers}`;
// undefined
concats_tilt;
// 'String : Hello World !, Number:55'
console.log(concats_tilt);
// VM1235:1 String : Hello World !, Number:55