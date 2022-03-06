// const N = require("fs").readFileSync(0, "utf-8").toString().split(" ");
const N = 5
for (let i = 0; i < N; i++) {
  let star = "";

  for (let j = N - 1; j >= 0; j--) {
    star += j <= i ? "*" : " ";
  }

  console.log(star);
}
