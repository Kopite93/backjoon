let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// let big = input.reduce((tot, cur, i) => (tot < cur ? cur : tot), 0);
// console.log(big);
// console.log(input.indexOf(big) + 1);

let big = 0;
let order = 0;
for (let i = 0; i < input.length; i++) {
  if (big < Number(input[i])) {
    big = Number(input[i]);
    order = i + 1;
  }
}
console.log(big);
console.log(order);
