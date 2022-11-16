// loops_min_max.js(object type 적용)
// from https://www.acmicpc.net/problem/10818

const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split("\n");
let a = parseInt(inputs[0]);
let b = inputs[1].split(" ").map(Number);

let num = { min: b[0], max: b[0] };

for (let i = 0; i < a; i++) {
  if (num["min"] > b[i]) {
    num["min"] = b[i];
  }

  if (num["max"] < b[i]) {
    num["max"] = b[i];
  }
}

console.log(`${num["min"]} ${num["max"]}`);
