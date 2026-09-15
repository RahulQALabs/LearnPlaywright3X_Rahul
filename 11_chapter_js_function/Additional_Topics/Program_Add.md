# Missing Topics — Programs (HackerRank Style)

Each program follows the HackerRank format: **Problem Statement → Input Format → Output Format → Sample Input → Sample Output → Solution**.

Topics covered: **default parameters, rest parameters, callbacks, scope, closures, hoisting, `this`, and recursion**.

---

## Easy Programs

### 1. Launch Browser

**Problem Statement:** Write a function `launchBrowser(name = "chrome")` that prints the browser name. Test it with and without an argument.

**Input Format:** A string `name` representing the browser name. Optional — if not provided, it defaults to `"chrome"`.

**Output Format:** Print `Launching <name>...` to the console.

**Sample Input:**
```
launchBrowser("firefox")
launchBrowser()
```

**Sample Output:**
```
Launching firefox...
Launching chrome...
```

**Solution:**
```javascript
function launchBrowser(name = "chrome") {
    console.log(`Launching ${name}...`);
}
```

---

### 2. Greet User

**Problem Statement:** Write a function `greet(name = "Guest")` that returns a greeting using a template literal.

**Input Format:** A string `name`. Optional — defaults to `"Guest"`.

**Output Format:** Return the string `Hello <name>!`.

**Sample Input:**
```
greet("Rahul")
greet()
```

**Sample Output:**
```
Hello Rahul!
Hello Guest!
```

**Solution:**
```javascript
function greet(name = "Guest") {
    return `Hello ${name}!`;
}
```

---

### 3. Sum of Numbers

**Problem Statement:** Write a function `sum(...nums)` that adds any number of arguments and returns the total.

**Input Format:** One or more integers, passed as a rest parameter `nums`.

**Output Format:** Return a number — the sum of all inputs.

**Sample Input:**
```
sum(1, 2)
sum(1, 2, 3, 4, 5)
```

**Sample Output:**
```
3
15
```

**Solution:**
```javascript
function sum(...nums) {
    return nums.reduce((total, n) => total + n, 0);
}
```

---

### 4. Total Score

**Problem Statement:** Write a function `totalScore(...scores)` that returns the total of all scores passed.

**Input Format:** One or more numbers (test scores), passed as a rest parameter.

**Output Format:** Return a number — the sum of all scores.

**Sample Input:**
```
totalScore(85, 92, 78)
```

**Sample Output:**
```
255
```

**Solution:**
```javascript
function totalScore(...scores) {
    return scores.reduce((sum, s) => sum + s, 0);
}
```

---

### 5. Run In Browsers

**Problem Statement:** Write a function `runBrowsers(...browsers)` that prints each browser name passed to it.

**Input Format:** One or more strings (browser names), passed as a rest parameter.

**Output Format:** Print `Running tests in <browser>` for each browser.

**Sample Input:**
```
runBrowsers("chrome", "firefox", "webkit")
```

**Sample Output:**
```
Running tests in chrome
Running tests in firefox
Running tests in webkit
```

**Solution:**
```javascript
function runBrowsers(...browsers) {
    browsers.forEach(b => console.log(`Running tests in ${b}`));
}
```

---

### 6. Do Action

**Problem Statement:** Write a function `doAction(action)` that calls a callback passed to it.

**Input Format:** A function `action` (callback).

**Output Format:** Executes the callback. No return value (`undefined`).

**Sample Input:**
```
doAction(() => console.log("Performing login..."))
```

**Sample Output:**
```
Performing login...
```

**Solution:**
```javascript
function doAction(action) {
    action();
}
```

---

### 7. Show Global and Local

**Problem Statement:** Write a function `showGlobal()` that prints a global variable, and a function `showLocal()` that prints a local variable.

**Input Format:** No input for either function.

**Output Format:** `showGlobal()` prints the global value; `showLocal()` prints the local value.

**Sample Input:**
```
showGlobal()
showLocal()
```

**Sample Output:**
```
staging
production
```

**Solution:**
```javascript
let globalEnv = "staging";   // global scope

function showGlobal() {
    console.log(globalEnv);  // sees the global
}

function showLocal() {
    let localEnv = "production";  // local scope
    console.log(localEnv);
}
```

---

### 8. Create Counter

**Problem Statement:** Write a function `createCounter()` that returns a function which counts up from 0 each time it's called.

**Input Format:** No input.

**Output Format:** Returns a function. Each call to that function returns a number — the incremented count.

**Sample Input:**
```
const counter = createCounter();
counter()
counter()
counter()
```

**Sample Output:**
```
1
2
3
```

**Solution:**
```javascript
function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
```

---

### 9. Countdown

**Problem Statement:** Write a recursive function `countdown(n)` that prints numbers from `n` down to `"Done!"`.

**Input Format:** An integer `n` (positive).

**Output Format:** Print `n, n-1, ..., 1`, then `Done!`.

**Sample Input:**
```
countdown(3)
```

**Sample Output:**
```
3
2
1
Done!
```

**Solution:**
```javascript
function countdown(n) {
    if (n <= 0) {
        console.log("Done!");
        return;
    }
    console.log(n);
    countdown(n - 1);
}
```

---

### 10. Factorial

**Problem Statement:** Write a recursive function `factorial(n)` that returns `n!`.

**Input Format:** A non-negative integer `n`.

**Output Format:** Return a number — `n!`.

**Sample Input:**
```
factorial(5)
```

**Sample Output:**
```
120
```

**Solution:**
```javascript
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
```

---

## Medium Programs

### 11. Wait For Element

**Problem Statement:** Write a function `waitForElement(locator, timeout = 5000)` that prints a wait message. Test it with and without the timeout.

**Input Format:** A string `locator` (CSS selector), and an optional integer `timeout` in milliseconds (default `5000`).

**Output Format:** Print `Waiting up to <timeout>ms for <locator>`.

**Sample Input:**
```
waitForElement("#login-btn")
waitForElement("#login-btn", 2000)
```

**Sample Output:**
```
Waiting up to 5000ms for #login-btn
Waiting up to 2000ms for #login-btn
```

**Solution:**
```javascript
function waitForElement(locator, timeout = 5000) {
    console.log(`Waiting up to ${timeout}ms for ${locator}`);
}
```

---

### 12. Retry

**Problem Statement:** Write a function `retry(fn, times = 3)` that calls a callback up to `times` times until it returns `true`.

**Input Format:** A function `fn` (must return a boolean), and an optional integer `times` (default `3`).

**Output Format:** Return `true` if the callback succeeds, otherwise `false`. Prints attempt progress.

**Sample Input:**
```
retry(() => true)
retry(() => false)
```

**Sample Output:**
```
Attempt 1
Success!
Attempt 1
Attempt 2
Attempt 3
Failed after all attempts
```

**Solution:**
```javascript
function retry(fn, times = 3) {
    for (let i = 1; i <= times; i++) {
        console.log(`Attempt ${i}`);
        if (fn()) {
            console.log("Success!");
            return true;
        }
    }
    console.log("Failed after all attempts");
    return false;
}
```

---

### 13. Log Test Case

**Problem Statement:** Write a function `logTestCase(name, ...steps)` that prints a test name and its steps joined by `" -> "`.

**Input Format:** A string `name` (test name), followed by one or more strings `steps`.

**Output Format:** Print `<name>: <step1> -> <step2> -> ...`.

**Sample Input:**
```
logTestCase("Login", "open page", "enter email", "click login")
```

**Sample Output:**
```
Login: open page -> enter email -> click login
```

**Solution:**
```javascript
function logTestCase(name, ...steps) {
    console.log(`${name}: ${steps.join(" -> ")}`);
}
```

---

### 14. Test Data Generator

**Problem Statement:** Write a function `createTestDataGenerator()` that returns a function generating unique emails like `user_1000@test.com`, `user_1001@test.com`, etc.

**Input Format:** No input.

**Output Format:** Returns a function. Each call returns a string — the next unique email.

**Sample Input:**
```
const nextEmail = createTestDataGenerator();
nextEmail()
nextEmail()
nextEmail()
```

**Sample Output:**
```
user_1000@test.com
user_1001@test.com
user_1002@test.com
```

**Solution:**
```javascript
function createTestDataGenerator() {
    let id = 1000;
    return function () {
        return `user_${id++}@test.com`;
    };
}
```

---

### 15. Create Waiter

**Problem Statement:** Write a function `createWaiter(defaultTimeout)` that returns a function which waits for a locator using that timeout. Create a fast (2000ms) and slow (10000ms) waiter.

**Input Format:** An integer `defaultTimeout` (milliseconds). The returned function takes a string `locator`.

**Output Format:** Print `Waiting for <locator> up to <defaultTimeout>ms`.

**Sample Input:**
```
const fastWaiter = createWaiter(2000);
const slowWaiter = createWaiter(10000);
fastWaiter("#login")
slowWaiter("#login")
```

**Sample Output:**
```
Waiting for #login up to 2000ms
Waiting for #login up to 10000ms
```

**Solution:**
```javascript
function createWaiter(defaultTimeout) {
    return function (locator) {
        console.log(`Waiting for ${locator} up to ${defaultTimeout}ms`);
    };
}
```

---

### 16. Block Scope

**Problem Statement:** Write a program that demonstrates the difference between block scope with `let` and `var`.

**Input Format:** No input.

**Output Format:** Print the `var` value (visible outside the block). The `let` value stays inside the block.

**Sample Input:**
```
checkScope()
```

**Sample Output:**
```
I escape the block
```

**Solution:**
```javascript
function checkScope() {
    if (true) {
        var withVar = "I escape the block";   // function-scoped
        let withLet = "I stay inside";        // block-scoped
    }
    console.log(withVar);
    // console.log(withLet);  // ReferenceError: withLet is not defined
}
```

---

### 17. Sum To N

**Problem Statement:** Write a recursive function `sumTo(n)` that returns the sum of numbers from 1 to `n`.

**Input Format:** A non-negative integer `n`.

**Output Format:** Return a number — `1 + 2 + ... + n`.

**Sample Input:**
```
sumTo(5)
```

**Sample Output:**
```
15
```

**Solution:**
```javascript
function sumTo(n) {
    if (n <= 1) return n;            // base case
    return n + sumTo(n - 1);         // recursive case
}
```

---

### 18. Print Nested Tests

**Problem Statement:** Write a function `printNestedTests(testObj)` that recursively prints all leaf test names in a nested test suite.

**Input Format:** An object `testObj` shaped like `{ name: string, children?: TestObj[] }`.

**Output Format:** Print `Test: <name>` for each leaf (no `children`).

**Sample Input:**
```javascript
const suite = {
    name: "Suite",
    children: [
        { name: "Login Test" },
        { name: "Checkout Test", children: [{ name: "Payment Test" }] }
    ]
};
printNestedTests(suite);
```

**Sample Output:**
```
Test: Login Test
Test: Payment Test
```

**Solution:**
```javascript
function printNestedTests(testObj) {
    if (testObj.name && !testObj.children) {
        console.log(`Test: ${testObj.name}`);
        return;
    }
    testObj.children.forEach(child => printNestedTests(child));
}
```

---

### 19. Run Test

**Problem Statement:** Write a function `runTest(testName, callback)` that calls the callback with the test name and prints start/finish messages.

**Input Format:** A string `testName`, and a function `callback` that receives a string.

**Output Format:** Print `Starting: <name>`, run the callback, then print `Finished: <name>`.

**Sample Input:**
```javascript
runTest("Login", (name) => {
    console.log(`  Executing steps for ${name}...`);
});
```

**Sample Output:**
```
Starting: Login
  Executing steps for Login...
Finished: Login
```

**Solution:**
```javascript
function runTest(testName, callback) {
    console.log(`Starting: ${testName}`);
    callback(testName);
    console.log(`Finished: ${testName}`);
}
```

---

### 20. Validate Status

**Problem Statement:** Write a function `validate(status, callback)` that checks if a status code is 200–300 and calls the callback with the result.

**Input Format:** An integer `status` (HTTP status code), and a function `callback` that receives a boolean.

**Output Format:** No return value — the callback receives `true` or `false`.

**Sample Input:**
```
validate(200, (ok) => console.log(ok ? "Request is fine!" : "Request failed"))
validate(404, (ok) => console.log(ok ? "Request is fine!" : "Request failed"))
```

**Sample Output:**
```
Request is fine!
Request failed
```

**Solution:**
```javascript
function validate(status, callback) {
    const isSuccess = status >= 200 && status <= 300;
    callback(isSuccess);
}
```

---

## Hard Programs

### 21. Memoize

**Problem Statement:** Write a function `memoize(fn)` that caches results of a function call using a closure.

**Input Format:** A function `fn` that takes one argument (e.g. a number).

**Output Format:** Returns a memoized wrapper. The wrapper returns the same type as `fn` (e.g. a number) and skips recomputation on repeated inputs.

**Sample Input:**
```javascript
const memoSquare = memoize(expensiveSquare);
memoSquare(5)
memoSquare(5)
memoSquare(6)
```

**Sample Output:**
```
Computing 5...
25
Cache hit for 5
25
Computing 6...
36
```

**Solution:**
```javascript
function memoize(fn) {
    const cache = {};              // closure state
    return function (n) {
        if (cache[n] !== undefined) {
            console.log(`Cache hit for ${n}`);
            return cache[n];
        }
        console.log(`Computing ${n}...`);
        const result = fn(n);
        cache[n] = result;
        return result;
    };
}
```

---

### 22. Fibonacci

**Problem Statement:** Write a recursive function `fibonacci(n)` that returns the nth Fibonacci number, and one using memoization for performance.

**Input Format:** A non-negative integer `n`.

**Output Format:** Return a number — the nth Fibonacci value.

**Sample Input:**
```
fibonacci(7)
fibMemo(40)
```

**Sample Output:**
```
13
102334155
```

**Solution:**
```javascript
// Plain recursion — fine for small n
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Memoized version — much faster for larger n
function fibMemo(n, cache = {}) {
    if (n <= 1) return n;
    if (cache[n] !== undefined) return cache[n];
    cache[n] = fibMemo(n - 1, cache) + fibMemo(n - 2, cache);
    return cache[n];
}
```

---

### 23. Session Manager

**Problem Statement:** Write a closure-based function `createSessionManager()` that lets you set a token and get it back.

**Input Format:** No input. The returned object has `setToken(token)` and `getToken()`.

**Output Format:** Returns an object `{ setToken(string) -> void, getToken() -> string | null }`.

**Sample Input:**
```javascript
const session = createSessionManager();
session.setToken("abc123");
session.getToken()
```

**Sample Output:**
```
abc123
```

**Solution:**
```javascript
function createSessionManager() {
    let token = null;                    // private state
    return {
        setToken(t) {
            token = t;
        },
        getToken() {
            return token;
        }
    };
}
```

---

### 24. Counter with Methods

**Problem Statement:** Write a function `createCounter` that supports `increment`, `decrement`, and `getValue` using closures.

**Input Format:** No input. The returned object exposes three methods.

**Output Format:** Returns an object `{ increment() -> void, decrement() -> void, getValue() -> number }`.

**Sample Input:**
```javascript
const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
counter.getValue()
```

**Sample Output:**
```
1
```

**Solution:**
```javascript
function createCounter() {
    let count = 0;
    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        getValue() {
            return count;
        }
    };
}
```

---

### 25. Debounce

**Problem Statement:** Write a function `debounce(fn, delay)` that ensures a callback only runs after a quiet period (using a closure).

**Input Format:** A function `fn`, and an integer `delay` (milliseconds).

**Output Format:** Returns a debounced wrapper. Only the last call within the delay window actually fires `fn`.

**Sample Input:**
```javascript
const debouncedLog = debounce(log, 500);
debouncedLog();
debouncedLog();
```

**Sample Output:**
```
Scheduled, will run in 500ms
Scheduled, will run in 500ms
Logged!        // only fires once, after the quiet period
```

**Solution:**
```javascript
function debounce(fn, delay) {
    let timer = null;                    // closure state
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
        console.log(`Scheduled, will run in ${delay}ms`);
    };
}
```

---

### 26. Flatten Array

**Problem Statement:** Write a recursive function `flatten(arr)` that flattens a nested array.

**Input Format:** An array that may contain nested arrays of mixed values.

**Output Format:** Return an array — fully flattened.

**Sample Input:**
```
flatten([1, [2, 3], [4, [5, 6]]])
```

**Sample Output:**
```
[1, 2, 3, 4, 5, 6]
```

**Solution:**
```javascript
function flatten(arr) {
    let result = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item));   // recurse into arrays
        } else {
            result.push(item);
        }
    });
    return result;
}
```

---

### 27. Group By

**Problem Statement:** Write a function `groupBy(array, keyFn)` that groups test cases by a key using reduce + a callback.

**Input Format:** An array of objects, and a function `keyFn` that extracts a string key from each object.

**Output Format:** Return an object mapping each key to an array of matching items.

**Sample Input:**
```javascript
const testCases = [
    { name: "Login", status: "pass" },
    { name: "Checkout", status: "fail" },
    { name: "Signup", status: "pass" }
];
groupBy(testCases, tc => tc.status)
```

**Sample Output:**
```javascript
{ pass: [{ name: "Login", status: "pass" }, { name: "Signup", status: "pass" }],
  fail: [{ name: "Checkout", status: "fail" }] }
```

**Solution:**
```javascript
function groupBy(array, keyFn) {
    return array.reduce((acc, item) => {
        const key = keyFn(item);
        (acc[key] = acc[key] || []).push(item);
        return acc;
    }, {});
}
```

---

### 28. Create Logger

**Problem Statement:** Write a function `createLogger(prefix)` that returns a logging function which always prefixes messages — demonstrating closures.

**Input Format:** A string `prefix`.

**Output Format:** Returns a function that takes a string `message` and prints `[<prefix>] <message>`.

**Sample Input:**
```javascript
const infoLogger = createLogger("INFO");
const errorLogger = createLogger("ERROR");
infoLogger("Test started")
errorLogger("Test failed")
```

**Sample Output:**
```
[INFO] Test started
[ERROR] Test failed
```

**Solution:**
```javascript
function createLogger(prefix) {
    return function (message) {
        console.log(`[${prefix}] ${message}`);
    };
}
```

---

### 29. Deep Equal

**Problem Statement:** Write a recursive function `deepEqual(a, b)` that compares two arrays or objects deeply.

**Input Format:** Any two values `a` and `b` — primitives, arrays, or objects.

**Output Format:** Return a boolean — `true` if deeply equal, `false` otherwise.

**Sample Input:**
```javascript
deepEqual({ name: "test", scores: [1, 2] }, { name: "test", scores: [1, 2] })
deepEqual({ name: "test" }, { name: "other" })
```

**Sample Output:**
```
true
false
```

**Solution:**
```javascript
function deepEqual(a, b) {
    if (a === b) return true;
    if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) return false;

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;

    return keysA.every(key => deepEqual(a[key], b[key]));  // recurse
}
```

---

### 30. Run Once

**Problem Statement:** Write a function `once(fn)` that uses a closure to make a callback run only once.

**Input Format:** A function `fn`.

**Output Format:** Returns a wrapper. The first call runs `fn`; subsequent calls are skipped.

**Sample Input:**
```javascript
const setup = once(() => console.log("Initializing test environment..."));
setup()
setup()
setup()
```

**Sample Output:**
```
Initializing test environment...
Already executed — skipping
Already executed — skipping
```

**Solution:**
```javascript
function once(fn) {
    let called = false;              // closure state
    return function (...args) {
        if (called) {
            console.log("Already executed — skipping");
            return;
        }
        called = true;
        return fn(...args);
    };
}
```

---

## Bonus Practice Tips

- **Default parameters** are your safety net — always give config values a sensible default.
- **Rest parameters** turn "however many arguments" into a real array you can `.reduce` or `.forEach`.
- **Callbacks** are everywhere in Playwright — `page.evaluate(() => ...)`, `page.waitForSelector`, retries.
- **Closures** are the go-to for state that must persist (counters, unique IDs, tokens) without globals.
- **Recursion** shines with nested data — suites inside suites, nested JSON, nested arrays.
- **Memoization** (caching via closures) turns slow recursive functions into fast ones — a favorite interview topic.
