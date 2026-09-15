# Additional Topics — Programming Practice (User Inputs)

## Easy Programs

**1. Write a program demonstrating the conversion family.**

```javascript
console.log(Number("42px"));        // NaN
console.log(parseInt("42px", 10));  // 42
console.log(parseFloat("3.14rad")); // 3.14
console.log(+"42");                 // 42
console.log(Number(""));            // 0 — surprise!
console.log(Number("  10  "));      // 10
```

**2. Write a program reading input with the async/await readline pattern.**

```javascript
const readline = require("readline");

function ask(question) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
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

**3. Write a program reading all input at once from stdin.**

```javascript
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();
const nums = input.split(" ").map(Number);
console.log(nums);   // e.g. "3 4 5" → [3, 4, 5]
```

**4. Write a program using process.env with defaults.**

```javascript
const baseUrl = process.env.BASE_URL || "https://dev.example.com";
const timeout = Number(process.env.TIMEOUT) || 5000;
console.log(`URL: ${baseUrl}, Timeout: ${timeout}ms`);
```

**5. Write a program demonstrating trim and empty checks.**

```javascript
const raw = "   Rahul Gupta  ";
console.log(raw.trim());          // "Rahul Gupta"
console.log(raw.trim().length);   // 11
console.log(raw.trim() === "");   // false
```

---

## Medium Programs

**6. Write a re-prompt-until-valid number function.**

```javascript
const promptSync = require("prompt-sync")();

function getValidNumber(question) {
    while (true) {
        const input = promptSync(question);
        const num = Number(input);
        if (input.trim() !== "" && !isNaN(num)) return num;
        console.log("Invalid — enter a number.");
    }
}
const age = getValidNumber("Enter age: ");
console.log(`Age: ${age}`);
```

**7. Write a re-prompt-until-non-empty function.**

```javascript
const promptSync = require("prompt-sync")();

function getNonEmpty(question) {
    while (true) {
        const value = promptSync(question);
        if (value.trim() !== "") return value.trim();
        console.log("Input cannot be empty.");
    }
}
const name = getNonEmpty("Enter name: ");
console.log(`Hello ${name}`);
```

**8. Write a program reading two numbers from one line and summing them.**

```javascript
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();
const [a, b] = input.split(" ").map(Number);
console.log(`Sum: ${a + b}`);   // "3 5" → 8
```

**9. Write a correct boolean env parser.**

```javascript
// Wrong: Boolean("false") === true
console.log(Boolean("false"));   // true — bug!

// Correct:
const debug = process.env.DEBUG === "true";
console.log("Debug mode:", debug);
```

**10. Write a program validating age input with a loop.**

```javascript
const promptSync = require("prompt-sync")();

function getValidAge() {
    while (true) {
        const input = promptSync("Enter age: ");
        const age = Number(input);
        if (Number.isInteger(age) && age > 0 && age < 120) return age;
        console.log("Age must be a whole number between 1 and 119.");
    }
}
const age = getValidAge();
console.log(`Eligible to vote: ${age >= 18}`);
```

---

## Hard Programs

**11. Write a config loader that reads and validates required env vars.**

```javascript
function requireEnv(name) {
    const value = process.env[name];
    if (!value) throw new Error(`Missing required env var: ${name}`);
    return value;
}

function loadConfig() {
    return {
        baseUrl: process.env.BASE_URL || "https://dev.example.com",
        timeout: Number(process.env.TIMEOUT) || 5000,
        retries: Number(process.env.RETRIES) || 2,
        headless: process.env.HEADLESS !== "false",
        apiKey: requireEnv("API_KEY")   // throws if missing
    };
}

try {
    const config = loadConfig();
    console.log(config);
} catch (error) {
    console.error(error.message);
}
```

**12. Write an async multi-question flow without callback hell.**

```javascript
const readline = require("readline");

function ask(question) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    return new Promise(resolve => {
        rl.question(question, answer => {
            rl.close();
            resolve(answer);
        });
    });
}

async function collectTestData() {
    const name = await ask("Test name: ");
    const browser = await ask("Browser: ");
    const timeout = Number(await ask("Timeout: ")) || 5000;
    return { name, browser, timeout };
}

collectTestData().then(data => console.log("Config:", data));
```

**13. Write a menu-driven loop reading choices until exit.**

```javascript
const promptSync = require("prompt-sync")();

function menu() {
    while (true) {
        console.log("\n1. Run tests\n2. Show report\n3. Exit");
        const choice = promptSync("Choose: ").trim();
        switch (choice) {
            case "1": console.log("Running tests..."); break;
            case "2": console.log("Showing report..."); break;
            case "3": console.log("Bye!"); return;
            default: console.log("Invalid choice.");
        }
    }
}
menu();
```

**14. Write a function that parses a single line of test data.**

```javascript
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();
// Format: "name:browser:timeout"
const [name, browser, timeoutStr] = input.split(":");
const timeout = Number(timeoutStr) || 5000;
const testConfig = { name, browser, timeout };
console.log(testConfig);
```

**15. Write a validation helper for numeric test data.**

```javascript
function parsePositiveInt(value, fieldName) {
    const num = Number(value);
    if (!Number.isInteger(num) || num <= 0) {
        throw new Error(`${fieldName} must be a positive integer, got "${value}"`);
    }
    return num;
}

try {
    console.log(parsePositiveInt("5", "timeout"));   // 5
    console.log(parsePositiveInt("-3", "retries"));  // throws
} catch (error) {
    console.error(error.message);
}
```
