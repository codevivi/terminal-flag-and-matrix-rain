import c from "chalk";

const WIDTH = process.stdout.columns;
const HEIGHT = process.stdout.rows;

process.on("SIGINT", () => {
  //to clear console on exit
  console.clear();
  process.exit();
});

class Drop {
  constructor() {
    this.delay = 2;
    this.speed = Number(Math.random().toFixed(1));
    this.startY = rand(1, HEIGHT - 1) - 1;
    this.endY = rand(this.startY, HEIGHT - 1) - 1; //not including
    this.body = Array(HEIGHT).fill(` `);
    for (let i = this.startY; i < this.endY; i++) {
      this.body[i] = randChar();
    }
  }
  move() {
    if (this.delay > 0) {
      if (this.speed === 0) {
        this.speed = Number(Math.random().toFixed(1));
      }
      this.delay = this.delay - this.speed;
      return;
    }
    //for now only repeating strings
    this.body.unshift(this.body.pop());
    this.start++;
    this.end++;
    this.delay = 2;
  }
}
function initDrops() {
  let arr = [];
  for (let i = 0; i < WIDTH; i++) {
    arr.push(new Drop());
  }
  return arr;
}
let dropsArr = initDrops();

setInterval(() => {
  let view = "";
  for (let i = 0; i < HEIGHT; i++) {
    let line = "";
    dropsArr.forEach((drop) => {
      line += drop.body[i];
      if (i === 0) {
        drop.move();
      }
    });
    view += line;
  }
  process.stdout.write(c.green(view));
  process.stdout.cursorTo(0, 0);
}, 40);

function randChar() {
  return String.fromCharCode(rand(33, 94));
}
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
