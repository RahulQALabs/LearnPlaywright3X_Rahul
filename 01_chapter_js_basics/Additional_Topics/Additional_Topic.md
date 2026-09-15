# Additional Topics — Console, Strict Mode, Errors, Async (Basics)

Practical topics missing from the basics chapter that matter for interviews and Playwright framework creation.

## 1. Console Methods Beyond `log`

Playwright tests and frameworks use these constantly for debugging and reporting.

```javascript
console.error("Test failed!");          // red error output
console.warn("Element took long");      // warning output
console.info("Info message");           // info output
console.table([{ name: "Rahul", pass: true }, { name: "Saanvi", pass: false }]);
// prints a neat table of objects

console.time("test");                   // start timer
// ... some code ...
console.timeEnd("test");                // prints elapsed time

console.group("Login Tests");           // indented group
console.log("Test 1");
console.log("Test 2");
console.groupEnd();

console.assert(2 + 2 === 5, "Math is broken!");  // logs error only if condition is false
console.count("retry");                 // 1
console.count("retry");                 // 2
console.trace();                        // prints the call stack
```

Format specifiers:
```javascript
console.log("User: %s, Age: %d", "Rahul", 25);   // %s string, %d number
console.log("%cSuccess!", "color: green; font-weight: bold");  // %c styles
```

## 2. Strict Mode

A modern best practice — `"use strict"` at the top of a file or function changes error behavior.

```javascript
"use strict";

// x = 10;               // ReferenceError — undeclared assignment is banned
let y = 10;              // fine
```

Without strict mode, assigning to an undeclared variable silently creates a global — a classic bug source in frameworks.

## 3. Statements vs Expressions + ASI

- **Expression**: produces a value — `5 + 5`, `greet()`, `x > 3`.
- **Statement**: performs an action — `let x = 5;`, `if (x) {}`, `for (...) {}`.

**ASI (Automatic Semicolon Insertion)**: JavaScript inserts semicolons for you at line breaks. This can bite:

```javascript
let a = 5
let b = 6       // works — ASI inserts semicolons

// Dangerous case:
function getValue() {
    return
    { ok: true };   // returns undefined! ASI inserts ; after return
}
console.log(getValue());  // undefined
```

## 4. Error Handling — try/catch/finally

Essential for robust test code — "why did my test fail" handling.

```javascript
try {
    // risky operation
    JSON.parse("not json");
} catch (error) {
    console.error("Parsing failed:", error.message);
} finally {
    console.log("Always runs — cleanup here");
}
```

```javascript
function checkLogin(user, pass) {
    if (!user || !pass) {
        throw new Error("Username and password are required");
    }
    return "Login OK";
}
```

## 5. Call Stack & Event Loop (Runtime Model)

Playwright is entirely async — this model explains why `await` matters.

- **Call stack**: functions run one at a time (single-threaded).
- **Callback queue / microtask queue**: async work (timers, promises) waits here.
- **Event loop**: moves work from queues onto the stack when it's empty.
- **Microtasks (promises) run before macrotasks (setTimeout)**.

```javascript
console.log("1");                       // sync — runs first
setTimeout(() => console.log("3"), 0);  // macrotask — runs last
Promise.resolve().then(() => console.log("2"));  // microtask — runs before setTimeout
// Output: 1, 2, 3
```

## 6. Promises & async/await — The Playwright Core

```javascript
// Promise — an operation that will complete later
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data ready"), 1000);
});
promise.then(data => console.log(data)).catch(err => console.error(err));

// async/await — cleaner syntax for the same thing
async function fetchUser() {
    try {
        const response = await fetch("https://api.example.com/user");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("API call failed:", error);
    }
}
```

This is literally how Playwright works: `await page.goto(...)`, `await page.click(...)`, `await expect(locator).toBeVisible()` — every action returns a Promise.
