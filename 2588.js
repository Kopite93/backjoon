const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().split('\n');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

const C = B % 10;
const D = Math.floor((B % 100) / 10);
const E = Math.floor(B / 100);


console.log(A * C);
console.log(A * D);
console.log(A * E);
console.log(A * B);
