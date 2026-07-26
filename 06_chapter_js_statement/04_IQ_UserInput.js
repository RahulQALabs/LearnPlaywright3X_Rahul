/* ⠶ This is a simple Node.js script that reads three triangle side lengths
  from the user via the terminal.

  Key points:

  - Uses the readline module to accept terminal input
  - The ask() function wraps rl.question() in a Promise, allowing it to
  be used with await (cleaner than nested callbacks)
  - In main(), it prompts for sides a, b, and c sequentially — each
  await ask() pauses until the user types a value and hits Enter
  - After all three inputs, rl.close() closes the readline interface and
   the script logs the three values separated by -

  As of the current code, it just prints the sides back. I'm guessing
  this is a starting point — the next step would likely be triangle
  validation (checking if sides form a valid triangle — sum of any two >
   third) and/or type classification (equilateral, isosceles, scalene). */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function main() {
  console.log("Enter three sides (press Enter after each):");
  let a = await ask("Side a: ");
  let b = await ask("Side b: ");
  let c = await ask("Side c: ");
  rl.close();

  console.log(`${a} - ${b} - ${c}`);
}

main();
