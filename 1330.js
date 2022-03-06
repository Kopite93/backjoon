const input = require("fs").readFileSync(0, "utf-8").toString().split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);

if (A > B) {
  console.log('>');
} else {
  if (A < B) {
    console.log('<');
  } else {
    console.log('==');
  }
}