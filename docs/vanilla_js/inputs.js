const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
// let readFileSyncs = fs.readFileSync(filepath);
// let toStinrgs = readFileSync.toString();
// let trims = toStinrg.trim();
// let splits = trim.split(" ");
// let inputs = splits.map(Number);
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

console.log(inputs[0] + inputs[1]);
