const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);


if (B - 45 < 0) {
  console.log(A-1 === -1 ? 23 : A-1, 60 - Math.abs(B-45))
} else {
  console.log(A, B - 45);
}

// const A = 0;
// const B = 0;

//     let date = new Date(2021, 4, 20, A, B);

//     date.setMinutes(date.getMinutes() - 45);

//     console.log(date.getHours(), date.getMinutes());