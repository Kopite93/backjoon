const input = require("fs").readFileSync(0, "utf-8");

const A = parseInt(input);
 
if (A % 4 == 0 && A % 100 != 0) {
  console.log('1');
} else {
  if (A % 400 == 0) {
    console.log('1');
  } else {
    console.log('0');
  }
}