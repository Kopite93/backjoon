const n = parseInt(require("fs").readFileSync(0, "utf-8"));

let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

console.log(sum);