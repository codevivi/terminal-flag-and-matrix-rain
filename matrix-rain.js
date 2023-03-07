import c from "chalk";
//new line character constant same as \n for linux  or  \r\n fro Windows
// import { EOL } from "os";
//works without new line character

const columns = process.stdout.columns;
const rows = process.stdout.rows;
console.log(rows, columns);
function randChar() {
  return String.fromCharCode(rand(33, 94));
}
let colStringLen = [];
for (let i = 0; i < columns; i++) {
  let random = rand(0, 1);
  if (random) {
    colStringLen.push(rand(0, rows));
  } else {
    colStringLen.push(0);
  }
}
console.log(colStringLen);

rain();
async function rain() {
  for (let i = 0; i < rows; i++) {
    let str = "";
    for (let j = 0; j < columns; j++) {
      if (i < colStringLen[j]) {
        str += randChar();
      } else {
        str += " ";
      }
    }
    await wait(200);
    console.log(str);
  }
}
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
