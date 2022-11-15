"use strict";
// use network or read files
// state : pending -> fulfilled or rejected
// Producer
const promise = new Promise((resolve, reject) => {
  console.log("done something");
  setTimeout(() => {
    // resolve("done processing");
    reject(new Error("wrong network!"));
  }, 2000);
});

promise
  .then((value) => {
    // then() is return resolve value
    console.log(`resolve value : ${value}`);
  })
  .catch((value) => {
    // catch() is return reject value
    console.log(`reject value : ${value}`);
  })
  .finally(() => {
    console.log("finally done");
  });

// promise chainning
const chainnings = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 2000);
});

chainnings
  .then((value_first) => value_first + 1)
  .then((value_second) => value_second + 2)
  .then((value_third) => {
    return new Promise((resovle, reject) => {
      setTimeout(() => resovle(value_third - 1), 1000);
    });
  })
  .then((value_fourth) => console.log(`value:${value_fourth}`));
