const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);

const arr1 = [A, B, C];
const arr2 = arr1.sort(function (a, b) {
  return a - b;
});

if (A === B && B === C) {
  let win = 10000 + A * 1000;
  console.log(win);
} else {
  if (A === B || B === C || A === C) {
    let draw = 1000 + arr2[1] * 100;
    console.log(draw);
  } else {
    if (A !== B && B !== C && A !== C) {
      let lose = arr2[2] * 100;
      console.log(lose);
    }
  }
}
