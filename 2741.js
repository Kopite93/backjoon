const N = parseInt(require("fs").readFileSync(0, "utf-8"));

let answer = "";

for (let i = 1; i <= N; i++) {
  answer += i + "\n"
}
console.log(answer);