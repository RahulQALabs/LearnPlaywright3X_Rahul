# JavaScript Scope & Closures — Detailed Notes

## 1. Introduction

**Scope** defines where a variable is accessible in your code, and a **closure** is a function that "remembers" the variables from the scope where it was created — even after that outer function has finished running.

These two concepts are everywhere in real development: keeping test configuration isolated, tracking retries, generating unique test data, and building reusable test helpers in Playwright.

## 2. Learning Objectives

- Understand the difference between global scope and local (function) scope.
- Understand the scope chain — inner functions can see outer variables, but not the other way around.
- Learn what a closure is and why inner functions "remember" outer variables.
- Use closures to keep state across function calls (counters, retry trackers).
- Build closures that return objects with methods (increment, decrement, get).
- Apply closures to real testing scenarios (max retry tracking, test data generation).

## 3. Global vs Local Scope

From `01_scope_fn.js`:

```javascript
let env = "Staging";   // Global Scope — visible everywhere

function setupConfig() {
    let timeout = 2000;                    // Local Scope — only inside this function
    console.log(timeout);                  // Can access local
    console.log(env);                      // Can access global
}

setupConfig();
console.log(timeout);                      // ReferenceError: timeout is not defined
console.log(env);
```

Key points:

- **Global scope**: declared outside any function — visible everywhere.
- **Local (function) scope**: declared inside a function — visible only inside that function.
- A function **can** access global variables (`env`), but the outside world **cannot** access local variables (`timeout` → `ReferenceError`).

### Why it matters in testing

Scope prevents name collisions in large test files. Your `page`, `browser`, and `context` are typically created inside a `beforeEach` (function scope) and passed where needed — they shouldn't leak into the global scope.

## 4. The Scope Chain — Inner Can See Outer

From `02_scope_fn.js`:

```javascript
let g_x = 10;

function outer() {
    let x = 10;

    function inner() {
        let y = 20;
        console.log(x);  // Inner can access the outer's var
    }

    inner();
    console.log(y);     // Outer can't access the inner's var → ReferenceError
}
```

Key points:

- **Nested functions** create a chain: `inner` → `outer` → global.
- Lookup goes **outward**: when `inner` uses `x`, JavaScript first checks `inner`, then `outer`, then global.
- Lookup never goes **inward**: `outer` cannot see `y` because `y` belongs to `inner`.

### Why it matters in testing

The scope chain is how helper functions inside your test file can use variables from the outer test function. It's also the foundation of closures — the inner function keeps access to the outer function's variables.

## 5. What is a Closure?

From `03_closure.js`:

```javascript
function startBrowser() {
    let name = "Rahul";

    function installBrowser() {
        console.log(name);   // When inner fn remembers the outer variables, this is called closure
    }

    return installBrowser;
}

const runTC = startBrowser();
runTC();          // "Rahul"
// installBrowser();  // inner function is not allowed outside
```

Key points:

- `startBrowser()` finishes running, but the returned `installBrowser` function **still remembers** `name`.
- That "remembering" is the closure — the inner function carries a **backpack** of the outer function's variables.
- The inner function can't be called from outside directly — only through the returned reference.

### Why it matters in testing

Closures let you create functions with **private state** — data that persists between calls without polluting globals.

## 6. Closure with Methods — Counter

From `04_closure_remeber.js`:

```javascript
function makeCounter(start = 0) {
    let count = start;

    return {
        increment() { count++; },
        decrement() { count--; },
        get() { count; }
    };
}

let counter = makeCounter(0);
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get());
```

Key points:

- The returned **object** closes over `count` — each method can read and change it.
- `count` is **private**: nobody outside can touch it directly, only through `increment`/`decrement`/`get`.
- This is the classic **factory pattern** — a function that returns an object with behavior.

### Why it matters in testing

Counting passed/failed tests, tracking iterations, or managing a session token — closures keep the state private and safe.

## 7. Closure in Action — Max Retry Tracker

From `05_closure_fn.js`:

```javascript
function maxRetryTracker(max) {
    let attempts = 0;

    function tryAgain(testCaseName) {
        attempts++;
        if (attempts > max) {
            return `${testCaseName} exceeded max retries (${max})`;
        }
        return `Attempt ${attempts}/${max} for ${testCaseName}`;
    }

    return tryAgain;
}

let runTCRetry = maxRetryTracker(3);
console.log(runTCRetry("Login"));   // Attempt 1/3 for Login
console.log(runTCRetry("Login"));   // Attempt 2/3 for Login
console.log(runTCRetry("Login"));   // Attempt 3/3 for Login
console.log(runTCRetry("Login"));   // Login exceeded max retries (3)
```

Key points:

- `attempts` starts at 0 and **persists** across every call to `tryAgain` — that's the closure state.
- The function tracks retries per tracker instance — this is exactly how a flaky-test retry helper works in Playwright.
- Each call to `maxRetryTracker(3)` creates a **brand-new, independent** closure with its own `attempts`.

### Why it matters in testing

Retry logic for flaky tests is a perfect closure use case: the tracker needs to remember how many times a test has already been retried without using a global variable.

## 8. Key Takeaways

- **Scope** = where a variable is accessible. Global vs local (function) scope.
- **Local variables are private**: outside code gets a `ReferenceError` when it tries to use them.
- **Scope chain**: inner functions can see outer variables; outer functions cannot see inner variables.
- **Closure** = an inner function that remembers the outer function's variables after the outer function has finished.
- **Private state**: closures let you keep state without polluting the global scope.
- **Factory pattern**: functions that return objects or functions with closed-over state — counters, retry trackers, data generators.
- **Independent closures**: every call to the outer function creates a fresh backpack with its own state.
- **Real testing use**: retry tracking, test counters, unique test data, and Playwright helper functions.
