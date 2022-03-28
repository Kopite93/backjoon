let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => parseInt(el));

function solution(input) {
  answer = [];
  for (let i = 0; i < input.length; i++) {
    answer.push(input[i] % 42);
  }
  const set = Array.from(new Set(answer));
  console.log(set.length);
}

// function solution(input) {
//   const rest = input.map((x) => x % 42);
//   const set = Array.from(new Set(rest));
//   console.log(set.length);
// }

// 다른 사람의 풀이
// const userNum = [];

// input.forEach((x) => {
//   const num = x % 42;

//   if (userNum.indexOf(num) === -1) {
//     userNum.push(num);
//   }
// });

// console.log(userNum.length);
