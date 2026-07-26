// ============= # Prefered Way — prompt-sync Package # ============= //

// Step 1: Install the package first in your terminal:
//   npm install prompt-sync

// Step 2: Import and initialize prompt-sync
const prompt = require("prompt-sync")();

// Step 3: Now prompt() works just like in the browser!
let name = prompt("Enter your name: ");
console.log("Hello, " + name + "!");

// Numbers — always returns a string, so convert explicitly
let num1 = prompt("Enter first number: ");
let num2 = prompt("Enter second number: ");

num1 = Number(num1);
num2 = Number(num2);

console.log("Sum:", num1 + num2);

// === Why prompt-sync? ===
// - Works synchronously (no callbacks needed)
// - Simple and familiar syntax (same as browser prompt())
// - Great for small CLI programs, practice, and coding challenges
// - Handles input line-by-line automatically
