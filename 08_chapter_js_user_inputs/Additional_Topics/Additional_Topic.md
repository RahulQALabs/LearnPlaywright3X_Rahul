# Additional Topics — Input Validation, Conversions, process.env (User Inputs)

The user-inputs chapter covers the mechanics of prompt/readline/prompt-sync. These are the missing pieces: **validation loops**, the **conversion family**, **async readline**, and **process.env** — all critical for test framework config.

## 1. Input Validation — Re-Prompt Until Valid

The single biggest gap: "validate before processing" was a question, but never shown as code. This is exactly what a test-data helper needs:

```javascript
const promptSync = require("prompt-sync")();

function getValidNumber(question) {
    while (true) {
        const input = promptSync(question);
        const num = Number(input);
        if (input.trim() !== "" && !isNaN(num)) {
            return num;
        }
        console.log("Invalid input — please enter a number.");
    }
}

const age = getValidNumber("Enter your age: ");
console.log(`Age: ${age}`);
```

Key checks: `input.trim() !== ""` (rejects empty/whitespace) and `!isNaN(num)` (rejects non-numeric).

## 2. The Conversion Family — parseInt, parseFloat, Number, unary +

Your chapter only demonstrated `Number()`. The others behave differently:

```javascript
Number("42px");        // NaN — fails on non-numeric content
parseInt("42px", 10);  // 42 — reads until non-numeric
parseFloat("3.14rad"); // 3.14
+"42";                 // 42 — unary plus, same as Number
Number("");            // 0 — empty string converts to 0 (surprise!)
parseInt("");          // NaN
Number("  10  ");      // 10 — trims whitespace
parseInt("010", 10);   // 10 — radix 10 avoids octal confusion
```

**Framework rule:** use `Number()` for strict numeric input, `parseInt(x, 10)` when input has units (like "50px"), always pass the radix.

## 3. Async readline with async/await (Modern Pattern)

The chapter's readline demo was callback-only. The cleaner modern pattern wraps readline in a Promise:

```javascript
const readline = require("readline");

function ask(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise(resolve => {
        rl.question(question, answer => {
            rl.close();
            resolve(answer);
        });
    });
}

async function main() {
    const name = await ask("Enter name: ");
    const age = await ask("Enter age: ");
    console.log(`${name} is ${age} years old`);
}
main();
```

## 4. process.env — The Framework Config Input

The most important "input" source for test frameworks — environment variables. Not mentioned anywhere in your chapter.

```javascript
// Setting (in terminal): set BASE_URL=https://staging.example.com
// or: cross-env BASE_URL=... node app.js

const baseUrl = process.env.BASE_URL || "https://dev.example.com";
const timeout = Number(process.env.TIMEOUT) || 5000;
const headless = process.env.HEADLESS !== "false";   // default true

console.log(`Running against ${baseUrl} with timeout ${timeout}ms`);
```

**Why it matters:** Playwright configs read `process.env` for base URLs, retries, headed mode, and credentials — never hardcode.

### Common env patterns

```javascript
// Boolean parsing — "false" is a string, not false!
console.log(Boolean("false"));   // true — the classic bug!
// Correct:
const flag = process.env.DEBUG === "true";   // real boolean

// Required vs optional with validation:
function requireEnv(name) {
    const value = process.env[name];
    if (!value) throw new Error(`Missing required env var: ${name}`);
    return value;
}
const apiKey = requireEnv("API_KEY");
```

## 5. Reading From process.stdin Directly

The one-liner used in chapter 06 (`fs.readFileSync(0)`) explained:

```javascript
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();  // 0 = stdin
const sides = input.split(" ").map(Number);        // ["3","4","5"] → [3,4,5]
console.log(sides);   // [3, 4, 5]
```

This is the pattern for online judges (HackerRank-style) where all input arrives at once.

## 6. Trim / Empty / Whitespace Handling

```javascript
const input = "   Rahul Gupta  ";
input.trim();          // "Rahul Gupta" — removes both ends
input.trim().length;   // 11

// Guard against blank Enter:
function getNonEmpty(promptText) {
    while (true) {
        const value = promptSync(promptText);
        if (value.trim() !== "") return value.trim();
        console.log("Input cannot be empty.");
    }
}
```
