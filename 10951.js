const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");
let i = 0;
let answer = "";

while (i <= input.length - 1) {
  let a = parseInt(input[i].split(" ")[0]);
  let b = parseInt(input[i].split(" ")[1]);

  answer += a+b + '\n'
  i += 1;
}
console.log(answer);
