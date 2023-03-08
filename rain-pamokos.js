/// pagal pamoka
import c from "chalk";
const width = process.stdout.columns;
const height = process.stdout.rows;
let spaces = [];
let row = 0;

makeSpaces();

setInterval(() => {
  let str = "";
  if (!row) {
    makeSpaces();
  }

  for (let i = 0; i < width; i++) {
    if (spaces.includes(i)) {
      str += ` `;
    } else {
      str += randChar();
    }
  }
  console.log(c.green(str));
  if (row > rand(0, height)) {
    row = 0;
  } else {
    row++;
  }
}, 400);

function makeSpaces() {
  spaces = [];
  for (let i = 0; i < width * 0.9; i++) {
    spaces.push(rand(0, width - 1));
  }
}
function randChar() {
  return String.fromCharCode(rand(33, 94));
}
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
