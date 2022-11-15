// "use strict";

// first way
// exports.first = 1;
// exports.second = function (param) {
//   console.log(`exports.second function param - ${param}`);
// };

// second way
const first = 1;
const second = function (param) {
  console.log(`exports.second function param - ${param}`);
};

module.exports = {
  first: first,
  second: second,
};
