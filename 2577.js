let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

function solution(input) {
  let multi = String(input[0] * input[1] * input[2]);
  for (let i = 0; i <= 9; i++) {
    let count = 0;

    for (let j = 0; j < multi.length; j++) {
      if (Number(multi[j]) === i) {
        count++;
      }
    }
    console.log(count);
  }
}


