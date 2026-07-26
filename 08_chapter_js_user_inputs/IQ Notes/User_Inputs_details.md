# JavaScript User Inputs – Detailed Notes

## 1. Why User Input Matters

Programs are boring without user interaction. Taking input from the user allows dynamic behavior — your program reacts to what the user types rather than just producing fixed output.

---

## 2. `prompt()` — Browser-Only Input (GUI)

### Syntax

```javascript
let userInput = prompt("Enter something: ");
```

### How it works

- Opens a **dialog box** in the browser with a text field.
- The user types a value and clicks **OK** or **Cancel**.
- **OK** → returns the typed value as a **string**.
- **Cancel** → returns `null`.

### Important — Always Returns a String

```javascript
let num = prompt("Enter a number: ");
console.log(typeof num); // "string"

// Even if the user types 42, it's "42" (string)
// Must convert to number before math operations
let value = Number(prompt("Enter a number: "));
```

### Example

```javascript
let name = prompt("What is your name?");
console.log("Hello, " + name + "!");
```

### Limitation — Node.js

❌ `prompt()` is a **Web API** (part of the `window` object) — it does NOT exist in Node.js.
Running `prompt()` in Node.js throws: `ReferenceError: prompt is not defined`.

---

## 3. Node.js Input Method 1 — `readline` (Built-in)

The `readline` module is a built-in Node.js module for reading input from the terminal.

### Basic Setup

```javascript
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,   // keyboard input
    output: process.stdout  // console output
});

rl.question("Enter your name: ", (answer) => {
    console.log("Hello, " + answer + "!");
    rl.close();             // must close to exit the program
});
```

### Key Points

| Aspect | Detail |
|--------|--------|
| Module | Built-in (no install needed) |
| Style | **Asynchronous** (callback-based) |
| Method | `rl.question(prompt, callback)` |
| Cleanup | Must call `rl.close()` to exit |

### Example — Even or Odd

```javascript
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {
    let num = Number(input);
    if (num % 2 === 0) {
        console.log(num + " is even");
    } else {
        console.log(num + " is odd");
    }
    rl.close();
});
```

### Multiple Questions (Callback Nesting)

```javascript
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter name: ", (name) => {
    rl.question("Enter age: ", (age) => {
        console.log(name + " is " + age + " years old.");
        rl.close();
    });
});
```

⚠️ Nesting many questions leads to **callback hell**. Use `prompt-sync` or `readline-sync` for sequential inputs.

---

## 4. Node.js Input Method 2 — `prompt-sync` (Third-party, Preferred)

A third-party npm package that makes input synchronous and simple.

### Installation

```bash
npm install prompt-sync
```

### Usage

```javascript
const prompt = require("prompt-sync")();

let name = prompt("Enter your name: ");
let age = Number(prompt("Enter your age: "));

console.log(name + " is " + age + " years old.");
```

### Why prompt-sync is Preferred

| Feature | `readline` | `prompt-sync` |
|---------|------------|---------------|
| Async/Sync | Async (callbacks) | **Sync** (blocks until input) |
| Code style | Nested callbacks | **Linear, easy to read** |
| Installation | Built-in | `npm install prompt-sync` |
| Multiple inputs | Messy nesting | Clean sequential lines |
| Best for | Complex I/O, event-driven | Simple scripts, practice, CLI tools |

### Example — Simple Calculator

```javascript
const prompt = require("prompt-sync")();

let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
```

---

## 5. Node.js Input Method 3 — `readline-sync` (Alternative Third-party)

Similar to `prompt-sync` — synchronous, easy to use.

```javascript
const ps = require("readline-sync");
let name = ps.question("Enter your name: ");
console.log("Hello, " + name);
```

Both `prompt-sync` and `readline-sync` solve the same problem. `prompt-sync` has a slightly more familiar syntax because it mimics the browser's `prompt()`.

---

## 6. Node.js Input Method 4 — Raw `process.stdin`

The lowest-level approach — reading from standard input directly.

```javascript
process.stdin.on("data", (data) => {
    let input = data.toString().trim();
    console.log("You typed:", input);
    process.exit();
});
```

❌ Not recommended for simple input — too low-level, requires manual parsing.

---

## 7. Comparison Table — All Input Methods

| Method | Environment | Sync/Async | Syntax | Use Case |
|--------|-------------|------------|--------|----------|
| `prompt()` | Browser only | Sync | `let x = prompt("?");` | Browser dialogs |
| `readline` | Node.js (built-in) | Async | Callback-based | Event-driven apps |
| `prompt-sync` | Node.js (npm) | Sync | `let x = prompt("?");` | Simple scripts, practice ✅ |
| `readline-sync` | Node.js (npm) | Sync | `let x = ps.question("?");` | Alternative to prompt-sync |
| `process.stdin` | Node.js (built-in) | Async | Event listener | Low-level I/O |

---

## 8. Important — Converting Input to Number

Every input method returns a **string**. Convert it explicitly:

```javascript
// Prompt-sync (browser or npm)
let input = prompt("Enter a number: ");
let num = Number(input);

// Alternative conversions
let n1 = Number(input);        // best — clear intent
let n2 = parseInt(input, 10);  // integer only
let n3 = parseFloat(input);    // decimal only
let n4 = +input;               // unary plus (short but less readable)
```

### Common Pitfall

```javascript
let a = prompt("First: ");  // "5"
let b = prompt("Second: "); // "3"
console.log(a + b);         // "53" — string concatenation, not addition!
```

✅ Always convert:

```javascript
console.log(Number(a) + Number(b)); // 8
```

---

## 9. Handling Empty Input and Cancel

### Browser `prompt()`

```javascript
let input = prompt("Enter something:");

if (input === null) {
    console.log("User cancelled");
} else if (input === "") {
    console.log("User entered empty string");
} else {
    console.log("User entered:", input);
}
```

### `prompt-sync`

```javascript
const prompt = require("prompt-sync")();
let input = prompt("Enter something: ");

if (input === null || input === "") {
    console.log("No input provided");
} else {
    console.log("You entered:", input);
}
```

---

## 10. Common Mistakes

| Mistake | Wrong Code | Correct Code |
|---------|------------|--------------|
| Forgetting to convert string to number | `let sum = a + b;` (string concat) | `let sum = Number(a) + Number(b);` |
| Using prompt() in Node.js | `let x = prompt("?");` ❌ | Use `prompt-sync` or `readline` |
| Not closing readline | `rl.question(...)` w/o `rl.close()` | Always call `rl.close()` in callback |
| Assuming input is always provided | `let x = prompt("?");` | Check for `null` / empty string |

---

## 11. Real-World Usage Tips

- **Quick practice & coding challenges** → Use `prompt-sync` (simple, synchronous, familiar).
- **Building CLI tools** → Use `readline` (event-driven, async-friendly) or `readline-sync`.
- **Browser apps** → Use `prompt()` only for quick demos. Real browser apps use HTML forms and event listeners.
- **Games & interactive programs** → `prompt-sync` is great for turn-based interaction.
- **Production Node.js apps** → `readline` or use a CLI framework like `commander` + `inquirer`.

---

## 12. Key Takeaways

- `prompt()` works **only in browsers**, not in Node.js.
- Node.js needs `readline` (built-in, async) or `prompt-sync` (npm, sync).
- **All user input is a string** — convert with `Number()` before math.
- `prompt-sync` is the closest to browser `prompt()` and preferred for learning/practice.
- Always handle edge cases: cancelled input, empty input, invalid number.
