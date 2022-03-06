const input = require("fs").readFileSync(0, "utf-8").toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  const num = input[i].split(" ");
  console.log(
    `Case #${i}: ${Number(num[0])} + ${Number(num[1])} = ${
      Number(num[0]) + Number(num[1])
    }`
  );
}
