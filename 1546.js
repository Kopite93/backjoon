const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const score = input[1].split(" ");

function solution(n, score) {
  const max = Math.max(...score);
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += (score[i] / max) * 100;
  }

  console.log(sum / n);
}
solution(n, score);
