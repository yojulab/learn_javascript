"use strick";
// with setTimeout() for API

// Synchronous callback
console.log("first");
// console.log("- second - ");
setTimeout(function () {
  console.log(`setTimeout : second`);
}, 2000); // 2 second
console.log("third"); // check debuging pause

// Asynchronous callback
function printWithDelay(_function, timesecond) {
  const result = "+fourth+";
  setTimeout(_function, timesecond); // Delay
  return result;
}

const returnVal = printWithDelay(() => console.log("printWithDelay"), 1000);
console.log(`returnVal : ${returnVal}`);
