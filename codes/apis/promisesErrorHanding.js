"use strict";
// ??? Promise Chainning Error Handling
const errorPromise = new Promise((resolve, reject) => {
  console.log("error Promiseg");
  setTimeout(() => {
    reject(new Error("error network!"));
  }, 2000);
});

chainnings
  .then((value_first) => value_first + 1)
  .then((value_second) => errorPromise(value_second)) // Error Handling
  .catch((error) => {
    // console.log(error);
    return 10;
  })
  .then((value_third) => {
    return new Promise((resovle, reject) => {
      setTimeout(() => resovle(value_third - 1), 1000);
    });
  })
  .then((value_fourth) => console.log(`value:${value_fourth}`));
