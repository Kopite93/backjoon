const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().split("\n");
const current = input[0].split(" ");

const A = parseInt(current[0]);
const B = parseInt(current[1]);
const C = parseInt(input[1]);
const D = parseInt((B + C) / 60);
const E = parseInt((B + C) % 60);

if (A + D >= 24) {
  console.log(((A + D) % 24 == 0 ? 0 : (A + D) % 24) + " " + E);
} else {
  console.log(A + D + " " + E);
}
