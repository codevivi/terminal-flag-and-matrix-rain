import c from "chalk";
//new line character constant same as \n for linux  or  \r\n fro Windows
// import { EOL } from "os";
//works without new line character

const columns = process.stdout.columns;
const rows = process.stdout.rows;

function flag() {
  let line = "*".repeat(columns);
  let colorChunk = line.repeat(Math.floor(rows / 3));
  const flagLt = c.bgHex("#FDB913")(colorChunk) + c.bgHex("#006A44")(colorChunk) + c.bgHex("#c1272d")(colorChunk);
  console.log(flagLt);
}
flag();
