const input = require("fs").readFileSync(0, "utf-8").toString().split("\n");

const X = parseInt(input[0]);
const Y = parseInt(input[1]);

if (X > 0 && Y > 0) {
  console.log("1");
} else {
  if (X < 0 && Y > 0) {
    console.log("2");
  } else {
    if (X < 0 && Y < 0) {
      console.log("3");
    } else {
      console.log("4");
    }
  }
}
