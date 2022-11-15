path = process.cwd();
const object_export = require(`./exports_nodejs`);
console.log(object_export);

const { first, second } = object_export;
console.log(first);
second(first + 2);
