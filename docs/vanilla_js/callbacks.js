console.log(`first`);
// console.log(`second`);
// setTimeout(functionRef, delay)
// function (){
// }
setTimeout(function () {
  console.log(`setTimeout : second`);
}, 2000);
console.log(`third`);
