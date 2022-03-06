const input = require("fs").readFileSync(0, "utf-8").toString().split("\n");
let answer = ""

for (let i = 1; i <= input[0]; i++) {
  const num = input[i].split(" ");
  answer+= Number(num[0]) + Number(num[1]) +"\n";
}
console.log(answer);
