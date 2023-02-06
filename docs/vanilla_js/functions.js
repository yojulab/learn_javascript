// rest parameters
function printRestParams(...args) {
  let restParam = (arg) => {
    if (typeof arg == "object") {
    }
    console.log(`arg : ${arg}`);
  };

  args.forEach(restParam);
}

{
  printRestParams(2, 4, 5);
  printRestParams(2, [4, 3, 2], 5, 6, 7);
}
