const fs = require("fs");
const N = parseInt(fs.readFileSync(0, "utf-8"));

for (let i = 1; i <= 9; i++) {
  let multi = N * i;
  console.log(`${N} * ${i} = ${multi}`);
}
