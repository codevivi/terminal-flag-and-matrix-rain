import c from "chalk";
import { EOL } from "os";

const width = process.stdout.columns;
const height = process.stdout.rows;
function makeDrop() {
  let drop = Array(height).fill(` `);
  let dropStart = rand(0, height - 1);
  let dropEnd = rand(dropStart, height);
  let len = dropEnd - dropStart;
  let dropChars = []; //one string going down
  for (let i = 0; i < len; i++) {
    dropChars.push(randChar());
  }
  let start = drop.slice(0, dropStart);
  let end = drop.slice(dropEnd, height);
  drop = [...start, ...dropChars, ...end];
  return drop;
}
function moveDrop(drop) {
  drop.unshift(drop.pop());
  return drop;
}

function generateDrops() {
  let dropsArr = [];
  for (let i = 0; i < width; i++) {
    dropsArr.push(makeDrop());
  }
  return dropsArr;
}

let drops = generateDrops();

function frozenRain() {
  let chunk = "";
  for (let i = 0; i <= height; i++) {
    let line = [];
    drops.forEach((drop) => {
      line.push(drop[i]);
    });

    // console.log(c.green(line.join("")));
    chunk += line.join("");
  }
  console.log(c.green(chunk));
}
setInterval(() => {
  let str = "";
  for (let i = 0; i < width; i++) {
    str += randChar();
  }
  console.log(str);
}, 200);

function randChar() {
  return String.fromCharCode(rand(33, 255));
}
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
