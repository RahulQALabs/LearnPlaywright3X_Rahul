# Missing Topics — Programs (HackerRank Style)

Each program follows the HackerRank format: **Problem Statement → Input Format → Output Format → Sample Input → Sample Output → Solution**.

Topics covered: **block scope, closure internals, IIFE + closures (module pattern), the loop-closure bug, memoization, debounce, and run-once wrappers**.

---

## Easy Programs

### 1. Check Block Scope

**Problem Statement:** Write a function `checkScope()` that demonstrates the difference between `var` (leaks out) and `let` (stays inside) in an `if` block.

**Input Format:** No input.

**Output Format:** Print the `var` value. The `let` value stays inside the block.

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

### 2. Simple Counter (Closure)

**Problem Statement:** Write a function `createCounter()` that returns a function which counts up from 0 each time it's called.

**Input Format:** No input.

**Output Format:** Returns a function. Each call returns the incremented count.

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

### 3. Greet with Private Name

**Problem Statement:** Write a function `createGreeter(name)` that returns a function which greets using the captured `name` (a closure).

**Input Format:** A string `name`.

**Output Format:** Returns a function. Each call prints `Hello <name>!`.

**Sample Input:**
```
const greet = createGreeter("Rahul");
greet()
greet()
```

**Sample Output:**
```
Hello Rahul!
Hello Rahul!
```

**Solution:**
```javascript
function createGreeter(name) {
    return function () {
        console.log(`Hello ${name}!`);
    };
}
```

---

## Medium Programs

### 4. Wait For Locator

**Problem Statement:** Write a function `createWaiter(defaultTimeout)` that returns a function which prints a wait message using the captured timeout.

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

### 5. Counter with Methods

**Problem Statement:** Write a function `makeCounter(start)` that returns an object with `increment()`, `decrement()`, and `get()` methods using a closure.

**Input Format:** An integer `start` (initial count).

**Output Format:** Returns an object `{ increment() -> void, decrement() -> void, get() -> number }`.

**Sample Input:**
```
const counter = makeCounter(5);
counter.increment();
counter.increment();
counter.decrement();
counter.get()
```

**Sample Output:**
```
6
```

**Solution:**
```javascript
function makeCounter(start = 0) {
    let count = start;
    return {
        increment() { count++; },
        decrement() { count--; },
        get() { return count; }
    };
}
```

---

### 6. Test Data Generator

**Problem Statement:** Write a function `createTestDataGenerator()` that returns a function generating unique emails like `user_1000@test.com`, `user_1001@test.com`, etc.

**Input Format:** No input.

**Output Format:** Returns a function. Each call returns the next unique email.

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

### 7. Max Retry Tracker

**Problem Statement:** Write a function `maxRetryTracker(max)` that returns a function tracking retry attempts per test and reporting when the limit is exceeded.

**Input Format:** An integer `max` (max retries). The returned function takes a string `testCaseName`.

**Output Format:** Print `Attempt <n>/<max> for <name>` while under the limit, then `<name> exceeded max retries (<max>)`.

**Sample Input:**
```
const tracker = maxRetryTracker(2);
tracker("Login")
tracker("Login")
tracker("Login")
```

**Sample Output:**
```
Attempt 1/2 for Login
Attempt 2/2 for Login
Login exceeded max retries (2)
```

**Solution:**
```javascript
function maxRetryTracker(max) {
    let attempts = 0;
    return function (testCaseName) {
        attempts++;
        if (attempts > max) {
            return `${testCaseName} exceeded max retries (${max})`;
        }
        return `Attempt ${attempts}/${max} for ${testCaseName}`;
    };
}
```

---

### 8. Session Manager (Module Pattern)

**Problem Statement:** Write an IIFE-based module `createSessionManager()` that exposes `setToken(token)` and `getToken()` with a private `token` variable.

**Input Format:** No input. The returned object has `setToken(string)` and `getToken()`.

**Output Format:** Returns an object `{ setToken(string) -> void, getToken() -> string | null }`.

**Sample Input:**
```
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
        setToken(t) { token = t; },
        getToken() { return token; }
    };
}
```

---

### 9. Loop Closures (var vs let)

**Problem Statement:** Write a program that demonstrates the loop-closure bug with `var` and the fix with `let`, using `setTimeout`.

**Input Format:** No input.

**Output Format:** Print the three `var` values, then the three `let` values.

**Sample Input:**
```
loopClosureDemo()
```

**Sample Output:**
```
3 3 3
0 1 2
```

**Solution:**
```javascript
function loopClosureDemo() {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(i));   // 3, 3, 3 — shared binding
    }
    for (let j = 0; j < 3; j++) {
        setTimeout(() => console.log(j));   // 0, 1, 2 — fresh binding per iteration
    }
}
```

---

### 10. Private Config (IIFE)

**Problem Statement:** Write an IIFE that creates a private `baseUrl` and exposes `getBaseUrl()` / `setBaseUrl(url)`.

**Input Format:** No input. The returned object has `setBaseUrl(string)` and `getBaseUrl()`.

**Output Format:** Print the current `baseUrl`.

**Sample Input:**
```
const config = createConfig();
config.getBaseUrl()
config.setBaseUrl("https://prod.example.com")
config.getBaseUrl()
```

**Sample Output:**
```
https://staging.example.com
https://prod.example.com
```

**Solution:**
```javascript
function createConfig() {
    let baseUrl = "https://staging.example.com";   // private
    return {
        getBaseUrl() { return baseUrl; },
        setBaseUrl(url) { baseUrl = url; }
    };
}
```

---

## Hard Programs

### 11. Memoize

**Problem Statement:** Write a function `memoize(fn)` that caches results of a function call using a closure.

**Input Format:** A function `fn` that takes one argument (e.g. a number).

**Output Format:** Returns a memoized wrapper. The wrapper returns the same type as `fn` and skips recomputation on repeated inputs.

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

### 12. Memoized Fibonacci

**Problem Statement:** Write a recursive `fibonacci(n)` and a memoized version `fibMemo(n)` that is fast for large inputs.

**Input Format:** A non-negative integer `n`.

**Output Format:** Return the nth Fibonacci value.

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

### 13. Debounce

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

### 14. Run Once

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

### 15. Create Logger

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

### 16. Test Counter (Pass/Fail)

**Problem Statement:** Write a closure-based `createTestCounter()` that tracks passed and failed tests.

**Input Format:** No input. The returned object has `pass()`, `fail()`, and `summary()`.

**Output Format:** Returns an object; `summary()` prints `Passed: <p>, Failed: <f>`.

**Sample Input:**
```javascript
const counter = createTestCounter();
counter.pass();
counter.pass();
counter.fail();
counter.summary()
```

**Sample Output:**
```
Passed: 2, Failed: 1
```

**Solution:**
```javascript
function createTestCounter() {
    let passed = 0;
    let failed = 0;
    return {
        pass() { passed++; },
        fail() { failed++; },
        summary() { return `Passed: ${passed}, Failed: ${failed}`; }
    };
}
```

---

### 17. Create Bank Account (Private Balance)

**Problem Statement:** Write a function `createAccount(initialBalance)` that exposes `deposit(amount)`, `withdraw(amount)`, and `getBalance()` with private balance state.

**Input Format:** A number `initialBalance`. Methods take a number `amount`.

**Output Format:** Returns an object; `getBalance()` returns the current balance.

**Sample Input:**
```javascript
const account = createAccount(100);
account.deposit(50);
account.withdraw(30);
account.getBalance()
```

**Sample Output:**
```
120
```

**Solution:**
```javascript
function createAccount(initialBalance) {
    let balance = initialBalance;          // private state
    return {
        deposit(amount) { balance += amount; },
        withdraw(amount) { balance -= amount; },
        getBalance() { return balance; }
    };
}
```

---

### 18. Unique ID Generator

**Problem Statement:** Write a closure-based function `createIdGenerator(prefix)` that returns sequential IDs like `TC_1`, `TC_2`, etc.

**Input Format:** A string `prefix`.

**Output Format:** Returns a function. Each call returns the next ID.

**Sample Input:**
```javascript
const nextId = createIdGenerator("TC");
nextId()
nextId()
nextId()
```

**Sample Output:**
```
TC_1
TC_2
TC_3
```

**Solution:**
```javascript
function createIdGenerator(prefix) {
    let id = 0;                          // private state
    return function () {
        id++;
        return `${prefix}_${id}`;
    };
}
```

---

### 19. Rate Limiter

**Problem Statement:** Write a function `createRateLimiter(limit)` that returns a function allowing at most `limit` calls before rejecting the rest — using a closure counter.

**Input Format:** An integer `limit` (max allowed calls).

**Output Format:** Returns a function. It prints `Allowed` for the first `limit` calls, then `Blocked` afterwards.

**Sample Input:**
```javascript
const call = createRateLimiter(2);
call()
call()
call()
```

**Sample Output:**
```
Allowed
Allowed
Blocked
```

**Solution:**
```javascript
function createRateLimiter(limit) {
    let calls = 0;                       // private state
    return function () {
        calls++;
        if (calls > limit) {
            console.log("Blocked");
            return;
        }
        console.log("Allowed");
    };
}
```

---

### 20. Throttle

**Problem Statement:** Write a function `throttle(fn, delay)` that ensures `fn` runs at most once every `delay` milliseconds, ignoring calls in between.

**Input Format:** A function `fn`, and an integer `delay` (milliseconds).

**Output Format:** Returns a throttled wrapper. The first call fires immediately; calls within `delay` are ignored.

**Sample Input:**
```javascript
const throttledLog = throttle(() => console.log("Fired!"), 1000);
throttledLog();
throttledLog();
```

**Sample Output:**
```
Fired!
Ignored — throttled
```

**Solution:**
```javascript
function throttle(fn, delay) {
    let lastRun = 0;                     // private state
    return function (...args) {
        const now = Date.now();
        if (now - lastRun >= delay) {
            lastRun = now;
            fn(...args);
        } else {
            console.log("Ignored — throttled");
        }
    };
}
```

---

## Bonus Practice Tips

- **Block scope**: prefer `let`/`const` so block-local values never leak.
- **Closures** are the go-to for state that must persist (counters, unique IDs, tokens) without globals.
- **IIFE + closure** = module pattern — private data, controlled public API.
- **Loop closures**: `let` gives a fresh binding per iteration; `var` shares one.
- **Memoization** (caching via closures) turns slow recursive functions into fast ones — a favorite interview topic.
- **Debounce** collapses a burst of calls into one; **throttle** caps how often a function can run.
- **Once** guarantees one-time setup runs exactly once.
