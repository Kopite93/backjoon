const N = require("fs").readFileSync(0, "utf-8").toString().split(" ");

let answer = "";
for (let i = 1; i <= N; i++) {
  answer += "*";
  console.log(answer);
}
