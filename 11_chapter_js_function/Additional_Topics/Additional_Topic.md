# Missing Topics — Detailed Notes (Default Parameters, Rest, Callbacks, Scope, Closures, Hoisting, this, Recursion)

## 1. Introduction

Your main chapter covered the 4 function types, arrow functions, function expressions, and IIFEs. These missing topics are the ones interviewers ask about next — and the ones you'll actually use in Playwright test automation every single day. This file is written in a practical, test-automation style: each concept comes with a real testing example you can relate to.

## 2. Learning Objectives

- Use default parameters so missing arguments don't break your functions.
- Collect any number of arguments with rest parameters.
- Pass functions as callbacks — the backbone of Playwright waits and event handlers.
- Understand scope — why some variables are visible and others aren't.
- Use closures to "remember" state across function calls.
- Understand hoisting — why you can call a declaration before it's defined, but not an arrow function.
- Master `this` — and why arrow functions behave differently.
- Write recursive functions for problems like counting down or flattening data.

---

## 3. Default Parameters

### Concept

A default parameter gives a parameter a fallback value **if no argument (or `undefined`) is passed**. This stops your functions from producing `undefined` or `NaN` when the caller forgets an argument.

### Practical Example — Test Configuration

```javascript
function launchBrowser(browserName = "chrome") {
    console.log(`Launching ${browserName}...`);
}

launchBrowser("firefox");  // Launching firefox...
launchBrowser();           // Launching chrome...  (no arg → default kicks in)
launchBrowser(undefined);  // Launching chrome...  (undefined also triggers default)
```

### Why it matters in testing

A common testing problem: `launchBrowser()` with no argument used to print "Launching undefined...". Defaults fix that — your function always has a sensible value.

### Defaults with earlier parameters

```javascript
function waitForElement(locator, timeout = 5000, message = `Element ${locator} not found`) {
    console.log(`Waiting up to ${timeout}ms for ${locator}`);
    console.log(`Timeout message: ${message}`);
}
waitForElement("#login-btn");  // uses 5000 and the default message
```

### Multiple defaults

```javascript
function retry(fn, times = 3, delay = 1000) {
    console.log(`Will retry ${fn.name || "callback"} ${times} times with ${delay}ms delay`);
}
retry(loginTest);          // Will retry loginTest 3 times with 1000ms delay
retry(loginTest, 5);       // Will retry loginTest 5 times with 1000ms delay
retry(loginTest, 5, 500);  // Will retry loginTest 5 times with 500ms delay
```

---

## 4. Rest Parameters

### Concept

Rest parameters (`...args`) collect **all remaining arguments** into a real array. Unlike `arguments` (an array-like object), rest is a true array — you can use `.map`, `.filter`, `.reduce` directly. It must be the last parameter.

### Practical Example — Sum Any Number of Scores

```javascript
function totalScore(...scores) {
    return scores.reduce((sum, s) => sum + s, 0);
}

console.log(totalScore(85));            // 85
console.log(totalScore(85, 92, 78));    // 255
console.log(totalScore(10, 20, 30, 40)); // 100
```

### Rest with normal parameters

```javascript
function logTestCase(testName, ...steps) {
    console.log(`Test: ${testName}`);
    console.log(`Steps: ${steps.join(" -> ")}`);
}
logTestCase("Login Test", "open page", "enter email", "click login");
// Test: Login Test
// Steps: open page -> enter email -> click login
```

### Why it matters in testing

Test frameworks often need functions that accept a flexible number of values — a list of browsers, a list of test data rows, a list of URLs. Rest parameters make that clean.

```javascript
function runInBrowsers(...browsers) {
    browsers.forEach(b => console.log(`Running tests in ${b}`));
}
runInBrowsers("chrome", "firefox", "webkit");
// Running tests in chrome
// Running tests in firefox
// Running tests in webkit
```

### Rest vs `arguments`

```javascript
function normalFn() {
    console.log(Array.isArray(arguments));  // false — array-like, not a real array
}
function restFn(...args) {
    console.log(Array.isArray(args));       // true — real array
}
normalFn(1, 2, 3);
restFn(1, 2, 3);
```

**Key point:** arrow functions don't have `arguments`, so rest parameters are the way to go there.

---

## 5. Callbacks

### Concept

A callback is a function **passed as an argument to another function**, which calls it later. This is how JavaScript handles "do this after that happens" — and it's everywhere in Playwright.

### Practical Example — Simulating a Playwright Wait

```javascript
function waitFor(callback, timeout = 5000) {
    console.log(`Waiting up to ${timeout}ms...`);
    const result = callback();   // the passed function runs here
    if (result) {
        console.log("Condition met!");
    } else {
        console.log("Timeout — condition not met");
    }
}

waitFor(() => true);   // Waiting up to 5000ms... Condition met!
waitFor(() => false);  // Waiting up to 5000ms... Timeout — condition not met
```

### Why it matters in testing

Every `page.waitForSelector`, `page.click`, `expect(...).toBeVisible()` accepts callbacks or uses them internally. `page.evaluate()` takes a function and runs it in the browser:

```javascript
// Real Playwright pattern
// await page.evaluate(() => document.title);   // arrow function as a callback
```

### Callback with parameters

```javascript
function runTest(testName, callback) {
    console.log(`Starting: ${testName}`);
    callback(testName);           // pass data into the callback
    console.log(`Finished: ${testName}`);
}

runTest("Login", (name) => {
    console.log(`  Executing steps for ${name}...`);
});
// Starting: Login
//   Executing steps for Login...
// Finished: Login
```

### Callback for retries (flaky test handling)

```javascript
function retryTest(testFn, attempts = 3) {
    for (let i = 1; i <= attempts; i++) {
        console.log(`Attempt ${i} of ${attempts}`);
        if (testFn()) {
            console.log("Test passed!");
            return true;
        }
    }
    console.log("Test failed after all attempts");
    return false;
}

retryTest(() => false);  // Attempt 1..3, then "Test failed after all attempts"
retryTest(() => true);   // Attempt 1, then "Test passed!"
```

---

## 6. Scope

### Concept

Scope defines **where a variable is accessible**.

- **Global scope** — declared outside any function, visible everywhere.
- **Function (local) scope** — declared inside a function with `var`, `let`, or `const`, visible only inside that function.
- **Block scope** — `let`/`const` inside `{}` blocks are only visible inside the block. `var` is NOT block-scoped.

### Practical Example

```javascript
let globalEnv = "staging";            // global — visible everywhere

function getEnv() {
    let localEnv = "production";      // local — only inside this function
    console.log(globalEnv);           // "staging" — global is visible
    return localEnv;
}

console.log(getEnv());                // "production"
// console.log(localEnv);             // ReferenceError — not visible here!
```

### Block scope — let vs var

```javascript
function checkScope() {
    if (true) {
        var withVar = "I escape the block";   // var leaks out
        let withLet = "I stay inside";        // let stays in the block
    }
    console.log(withVar);   // "I escape the block" — var is function-scoped
    // console.log(withLet);  // ReferenceError — let is block-scoped
}
```

### Why it matters in testing

Scope prevents name collisions in large test files. Helper variables should live inside functions, not pollute the global scope. In Playwright, your `page`, `browser`, and `context` are typically created inside a `beforeEach` (function scope) and passed where needed.

### Scope chain (inner can see outer)

```javascript
const appUrl = "https://example.com";   // global

function navigate() {
    const pageTitle = "Home";           // function scope
    function logBoth() {                // nested function
        console.log(appUrl);            // sees global
        console.log(pageTitle);         // sees its parent's scope
    }
    logBoth();
}
navigate();  // https://example.com / Home
```

---

## 7. Closures

### Concept

A closure is a function that **remembers the variables from the scope where it was created**, even after that outer function has finished running. It's like the inner function carries a backpack of the outer variables.

### Practical Example — Test Counter

```javascript
function createCounter() {
    let count = 0;              // this variable is "closed over"
    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter());  // 1
console.log(counter());  // 2
console.log(counter());  // 3
// count is NOT reset — the inner function remembers it
```

### Why it matters in testing

**Counting failed tests, generating unique test data, or tracking retries** — closures keep state between calls without polluting globals.

```javascript
function createTestDataGenerator() {
    let id = 1000;                                  // start value
    return function () {
        return `user_${id++}@test.com`;             // each call gets a fresh email
    };
}

const nextEmail = createTestDataGenerator();
console.log(nextEmail());  // user_1000@test.com
console.log(nextEmail());  // user_1001@test.com
console.log(nextEmail());  // user_1002@test.com
```

### A second counter — independent state

```javascript
function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const counterA = createCounter();
const counterB = createCounter();
console.log(counterA());  // 1
console.log(counterA());  // 2
console.log(counterB());  // 1  ← fresh, independent closure
```

Each call to `createCounter()` creates a brand-new backpack with its own `count`.

### Closure with configuration (factory pattern)

```javascript
function createWaiter(defaultTimeout) {
    return function (locator) {
        console.log(`Waiting for ${locator} up to ${defaultTimeout}ms`);
    };
}

const fastWaiter = createWaiter(2000);
const slowWaiter = createWaiter(10000);

fastWaiter("#login");  // Waiting for #login up to 2000ms
slowWaiter("#login");  // Waiting for #login up to 10000ms
```

---

## 8. Hoisting

### Concept

Hoisting means JavaScript moves **declarations** to the top of their scope before the code runs.

- **Function declarations** are fully hoisted — you can call them **before** the line where they're defined.
- **`var`** is hoisted as `undefined`.
- **`let`/`const`** are hoisted but stay in a "temporal dead zone" — accessing them before the line throws a `ReferenceError`.
- **Function expressions & arrow functions** stored in `const` are NOT usable before their line.

### Practical Example

```javascript
console.log(greet("Rahul"));  // "Hello Rahul" — works! declaration is hoisted

function greet(name) {
    return `Hello ${name}`;
}
```

```javascript
// console.log(greet2("Rahul"));
// ReferenceError: Cannot access 'greet2' before initialization
const greet2 = (name) => `Hello ${name}`;
```

### Why it matters in testing

This is a frequent interview question, and it explains weird bugs. If you see a `ReferenceError: Cannot access 'X' before initialization`, it's usually an arrow function or `const` being used too early.

### var hoisting gotcha

```javascript
console.log(score);  // undefined — var is hoisted but not the value
var score = 85;
```

The declaration `var score` is hoisted, the assignment `= 85` is not. With `let` you'd get a `ReferenceError` instead of `undefined`.

---

## 9. The `this` Keyword

### Concept

`this` refers to **the object that a function belongs to** (its execution context).

- In a **normal function**, `this` is dynamic — it depends on how the function is called.
- In an **arrow function**, `this` is lexical — it inherits `this` from the surrounding scope and never changes.

### Practical Example — the classic gotcha

```javascript
const testRunner = {
    name: "Regression Suite",
    run: function () {
        console.log(this.name);            // "Regression Suite" — this = testRunner
    }
};
testRunner.run();
```

### Arrow functions don't have their own `this`

```javascript
const testRunner2 = {
    name: "Smoke Suite",
    run: () => {
        console.log(this.name);            // undefined (or the outer scope)
    }
};
testRunner2.run();
```

The arrow function ignores `testRunner2` and takes `this` from where it was created (the outer scope — often the global object or `undefined` in strict mode).

### Why it matters in testing

In Playwright, you'll write event handlers and callbacks:

```javascript
// page.on("console", (msg) => ...)  — arrow keeps outer this, so you can
// still access your test data or runner object inside the callback
```

If you used a normal function there, `this` would change inside the handler and break your access.

### this inside a method vs standalone call

```javascript
function showThis() {
    console.log(this);
}
const obj = { name: "test", showThis };
obj.showThis();    // this = obj
showThis();        // this = global object (or undefined in strict mode)
```

---

## 10. Recursion

### Concept

Recursion is when a function **calls itself** to solve a smaller version of the same problem. Every recursive function needs:

1. A **base case** — the condition that stops the recursion.
2. A **recursive case** — the call to itself with smaller input.

### Practical Example — Countdown

```javascript
function countdown(n) {
    if (n <= 0) {            // base case — stop
        console.log("Done!");
        return;
    }
    console.log(n);
    countdown(n - 1);        // recursive case — call with smaller n
}

countdown(3);
// 3
// 2
// 1
// Done!
```

### Factorial — the classic interview example

```javascript
function factorial(n) {
    if (n <= 1) return 1;    // base case: factorial(1) = 1
    return n * factorial(n - 1);  // recursive case
}

console.log(factorial(5));  // 5 * 4 * 3 * 2 * 1 = 120
```

### Why it matters in testing

**Traversing nested structures** — like test suites containing suites, or JSON with nested objects:

```javascript
function printTestNames(testObj) {
    if (testObj.name && !testObj.children) {
        console.log(`Test: ${testObj.name}`);   // leaf — base case
        return;
    }
    testObj.children.forEach(child => printTestNames(child));  // recurse
}

const suite = {
    name: "Suite",
    children: [
        { name: "Login Test" },
        { name: "Checkout Test", children: [{ name: "Payment Test" }] }
    ]
};
printTestNames(suite);
// Test: Login Test
// Test: Payment Test
```

### Recursion vs loops

Anything you do with a loop you can do with recursion, and vice versa. Use a loop when it's simple (`for`, `while`); use recursion when the structure is naturally nested (trees, folders, JSON). Be careful — deep recursion can hit the call stack limit.

---

## 11. Key Takeaways

- **Default parameters**: `function launchBrowser(name = "chrome")` — missing or `undefined` arguments fall back to a default.
- **Rest parameters**: `function totalScore(...scores)` — collect any number of args into a real array; the only way arrow functions handle variable args cleanly.
- **Callbacks**: functions passed as arguments, called later — `page.waitFor`, `page.evaluate`, retries all use them.
- **Scope**: global vs function vs block. `let`/`const` are block-scoped; `var` is function-scoped.
- **Closures**: an inner function remembers outer variables after the outer function finishes — perfect for counters and data generators.
- **Hoisting**: function declarations can be called before their line; `const` arrows can't.
- **`this`**: normal functions get dynamic `this`; arrows inherit `this` from where they're defined.
- **Recursion**: a function calling itself with a base case and a recursive case — great for nested structures.
