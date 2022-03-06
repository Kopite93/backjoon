const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0].split(" ")[0]);
const X = Number(input[0].split(" ")[1]);
const A = input[1].split(" ");
let answer = "";

for (let i = 0; i < N; i++) {
  if (A[i] < X) {
    answer += A[i] + " ";
  }
}
console.log(answer);
