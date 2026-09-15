# Interview Questions — Solutions

## Easy Questions (1–12)

**1. What is scope in JavaScript?**
Scope defines where a variable is accessible in your code. A variable declared at the top level is in **global scope** (visible everywhere); a variable declared inside a function is in **local/function scope** (visible only inside that function). Scope determines whether a given identifier refers to a valid variable at a given line.

**2. What is the difference between global scope and local (function) scope?**
Global variables are declared outside any function and are visible everywhere. Local variables are declared inside a function and are visible only inside that function. From `01_scope_fn.js`: `env` is global (accessible inside `setupConfig`), while `timeout` is local (only accessible inside `setupConfig`, `ReferenceError` outside).

**3. Can a function access a variable declared outside it?**
Yes. A function can read (and write) variables from its outer scopes, including globals. In `01_scope_fn.js`, `setupConfig()` prints `env` — a global — from inside the function.

**4. Can code outside a function access a variable declared inside that function?**
No. Local variables are private to their function. In `01_scope_fn.js`, `console.log(timeout)` outside `setupConfig` throws `ReferenceError: timeout is not defined`.

**5. What happens if you try to use a local variable outside its function?**
You get a `ReferenceError`. The variable simply doesn't exist outside its scope — the engine can't find it, so it throws `ReferenceError: timeout is not defined`.

**6. What is the scope chain?**
The chain of nested scopes from the current function up to the global scope. When a variable is used, JavaScript looks it up in the current scope, then the enclosing scope, then the next one, until it finds it or reaches the global scope (and throws `ReferenceError`). In `02_scope_fn.js`, `inner` can see `x` (from `outer`) and `g_x` (global).

**7. In a nested function, can the inner function access the outer function's variables?**
Yes. The inner function sits inside the outer function's scope, so the scope chain gives it access to all outer variables. In `02_scope_fn.js`, `inner()` prints `x` which belongs to `outer()`.

**8. Can the outer function access the inner function's variables?**
No. Lookup only goes outward, never inward. In `02_scope_fn.js`, `outer()` tries `console.log(y)` — `y` belongs to `inner` — which throws a `ReferenceError`.

**9. What is a closure?**
A closure is a function that **remembers** the variables from the scope where it was created, even after that outer function has finished running. In `03_closure.js`, `installBrowser` remembers `name` from `startBrowser` and prints it when called later via `runTC()`.

**10. When does a closure "remember" variables?**
When an inner function references variables from its enclosing (outer) function, and that inner function is returned (or otherwise escapes) from the outer function. The engine keeps the referenced variables alive in memory so the inner function can still access them later.

**11. Can a function be returned from another function?**
Yes. Functions are values in JavaScript. `03_closure.js` returns `installBrowser`, and `04_closure_remeber.js` returns an object whose methods are functions. The returned function can be stored in a variable and called later.

**12. What happens to the outer function's variables after the outer function finishes running?**
Normally they'd be garbage-collected. But if an inner function (closure) still references them, the engine **keeps them alive** — that's why `runTC()` can still print `name` long after `startBrowser()` returned.

---

## Medium Questions (13–23)

**13. What is the output of this code?**
```javascript
let env = "Staging";
function setupConfig() {
    let timeout = 2000;
    console.log(timeout);
    console.log(env);
}
setupConfig();
```
```
2000
Staging
```
`timeout` is local and accessible inside the function; `env` is global and also accessible inside the function.

**14. What is the output of this code?**
```javascript
let env = "Staging";
function setupConfig() {
    let timeout = 2000;
}
setupConfig();
console.log(timeout);
```
```
ReferenceError: timeout is not defined
```
`timeout` is local to `setupConfig` — it doesn't exist outside the function, so accessing it throws.

**15. What is the output of this code?**
```javascript
let g_x = 10;
function outer() {
    let x = 10;
    function inner() {
        let y = 20;
        console.log(x);
    }
    inner();
}
outer();
```
```
10
```
`inner` is nested inside `outer`, so the scope chain lets it access `x` (from `outer`).

**16. What is the output of this code?**
```javascript
let g_x = 10;
function outer() {
    let x = 10;
    function inner() {
        let y = 20;
        console.log(x);
    }
    inner();
    console.log(y);
}
outer();
```
```
10
ReferenceError: y is not defined
```
`inner` prints `x` (accessible outward). Then `outer` tries `y` — but `y` belongs to `inner`, and lookup never goes inward, so it throws.

**17. What is the output of this code?**
```javascript
function startBrowser() {
    let name = "Rahul";
    function installBrowser() {
        console.log(name);
    }
    return installBrowser;
}
const runTC = startBrowser();
runTC();
```
```
Rahul
```
`runTC` holds the returned `installBrowser` function, which is a closure over `name`. Even though `startBrowser()` has returned, the closure still remembers `name` and prints "Rahul".

**18. Why does `runTC()` above print "Rahul" even though `startBrowser()` has already finished?**
Because `installBrowser` is a closure. JavaScript keeps the variables it references (`name`) alive in memory after `startBrowser()` returns, so calling `runTC()` later can still access `name`.

**19. What is the output of this code?**
```javascript
function makeCounter(start = 0) {
    let count = start;
    return {
        increment() { count++; },
        decrement() { count--; },
        get() { return count; }
    };
}
let counter = makeCounter(0);
counter.increment();
counter.increment();
console.log(counter.get());
```
```
2
```
Both `increment` and `get` close over the same `count`. Two increments make it 2, and `get()` returns it.

**20. Can the `count` variable in the counter above be changed from outside? Why or why not?**
No. `count` is a local variable inside `makeCounter` — it is **private**. The only way to read or change it is through the returned methods (`increment`, `decrement`, `get`). This is the closure's "private state" pattern.

**21. What is the output of this code?**
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
let tracker = maxRetryTracker(2);
console.log(tracker("Login"));
console.log(tracker("Login"));
console.log(tracker("Login"));
```
```
Attempt 1/2 for Login
Attempt 2/2 for Login
Login exceeded max retries (2)
```
`attempts` persists across calls (closure state): 1, 2, then 3 > 2 triggers the "exceeded" message.

**22. Why does `attempts` keep its value between calls to `tryAgain`?**
Because `tryAgain` is a closure over `attempts`. The variable isn't re-created on each call — it lives in the closure's memory, so `attempts++` keeps accumulating across calls.

**23. What happens if you call `maxRetryTracker()` twice and use the two returned functions? Do they share the same `attempts`?**
No — each call to `maxRetryTracker` creates a **brand-new** closure with its own `attempts`. The two returned functions are independent; incrementing one does not affect the other.

---

## Logical / Reasoning Questions (24–30)

**24. What is the output and why?**
```javascript
let env = "Staging";
function setupConfig() {
    let timeout = 2000;
    console.log(env);    // Staging
    console.log(timeout); // 2000
}
setupConfig();
console.log(timeout);    // ReferenceError
```
Inside the function, both `env` (global, accessible) and `timeout` (local, accessible) print. Outside, `timeout` is out of scope → `ReferenceError`.

**25. What is the output and why?**
```javascript
let g_x = 10;
function outer() {
    let x = 10;
    function inner() {
        let y = 20;
        console.log(x);   // 10
        console.log(g_x); // 10
    }
    inner();
}
outer();
```
The scope chain goes inward → outward: `inner` finds `x` in `outer` (10) and `g_x` in the global scope (10).

**26. What is the output and why?**
```javascript
function startBrowser() {
    let name = "Rahul";
    return function () {
        console.log(name);
    };
}
const runTC = startBrowser();
runTC();
```
```
Rahul
```
The returned anonymous function is a closure over `name`. Even though `startBrowser()` finished, `runTC()` still prints "Rahul".

**27. What is the output and why?**
```javascript
function makeCounter(start = 0) {
    let count = start;
    return {
        increment() { count++; },
        get() { return count; }
    };
}
let counter = makeCounter(5);
counter.increment();
counter.increment();
console.log(counter.get());
```
```
7
```
`count` starts at 5 (the `start` parameter), two increments make it 7.

**28. What is the output and why?**
```javascript
function maxRetryTracker(max) {
    let attempts = 0;
    return function (testCaseName) {
        attempts++;
        if (attempts > max) {
            return `exceeded ${max}`;
        }
        return `Attempt ${attempts}/${max}`;
    };
}
let tracker = maxRetryTracker(1);
console.log(tracker("A"));  // Attempt 1/1
console.log(tracker("A"));  // exceeded 1
```
`attempts` is 1 on the first call (≤ max → normal message), 2 on the second (2 > 1 → exceeded).

**29. What is the output and why?**
```javascript
let count = 100;                       // global
function makeCounter() {
    let count = 0;                     // local — shadows the global
    return function () {
        count++;
        return count;
    };
}
let counter = makeCounter();
console.log(counter());   // 1
console.log(counter());   // 2
console.log(count);       // 100
```
The closure captures the **local** `count` (0 → 1 → 2). The global `count` is shadowed inside `makeCounter` and stays 100 — the closure never touches it.

**30. What is the output and why?**
```javascript
function outer() {
    let x = "outer";
    function inner() {
        let y = "inner";
        function deepest() {
            console.log(x);   // "outer"
            console.log(y);   // "inner"
        }
        deepest();
    }
    inner();
}
outer();
```
```
outer
inner
```
`deepest` can walk the whole chain: `y` (its own scope), `x` (from `outer`). Lookup goes outward through every enclosing scope.

---

## Programming Questions (31–36)

**31. Write a function `setupConfig()` that declares a local variable and prints both a global and a local variable.**
```javascript
let env = "Staging";   // global
function setupConfig() {
    let timeout = 2000;            // local
    console.log(env);              // "Staging"
    console.log(timeout);          // 2000
}
setupConfig();
```

**32. Write a function `startBrowser()` that returns an inner function which prints a variable from the outer function (a closure).**
```javascript
function startBrowser() {
    let name = "Rahul";
    return function () {
        console.log(name);         // "Rahul"
    };
}
const runTC = startBrowser();
runTC();
```

**33. Write a function `makeCounter(start)` that returns an object with `increment()`, `decrement()`, and `get()` methods using a closure.**
```javascript
function makeCounter(start = 0) {
    let count = start;
    return {
        increment() { count++; },
        decrement() { count--; },
        get() { return count; }
    };
}
let counter = makeCounter(5);
counter.increment();   // 6
counter.decrement();   // 5
console.log(counter.get());  // 5
```

**34. Write a function `maxRetryTracker(max)` that returns a function tracking retry attempts and stops after `max`.**
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
let runTCRetry = maxRetryTracker(3);
console.log(runTCRetry("Login"));  // Attempt 1/3 for Login
```

**35. Write a closure that generates unique test emails like `user_1000@test.com`, `user_1001@test.com`, etc.**
```javascript
function createTestDataGenerator() {
    let id = 1000;
    return function () {
        return `user_${id++}@test.com`;
    };
}
const nextEmail = createTestDataGenerator();
console.log(nextEmail());  // user_1000@test.com
console.log(nextEmail());  // user_1001@test.com
```

**36. Write a function that returns a counter — each call to the returned function increments and returns the count.**
```javascript
function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
const counter = createCounter();
console.log(counter());  // 1
console.log(counter());  // 2
console.log(counter());  // 3
```

---

## Hard Questions (37–55)

**37. What is the difference between global scope, function scope, and block scope?**
- **Global scope**: declared outside any function — visible everywhere.
- **Function scope**: declared inside a function (`var`, `let`, `const`) — visible only inside that function.
- **Block scope**: `let`/`const` inside `{}` (if, for, while) are visible only inside that block. `var` is **not** block-scoped — it leaks out to the function.

**38. Explain how the scope chain works. What determines which variable an identifier refers to?**
Every function carries a reference to its enclosing scopes. When you use a variable, the engine searches the current scope, then each enclosing scope outward until it finds the name — this is the scope chain. If the same name exists in multiple scopes, the **innermost** one wins (shadowing). If nothing is found, you get a `ReferenceError`.

**39. Explain how closures work internally. What does the inner function "remember"?**
When an inner function is created inside an outer function, it captures the outer function's **variable environment** (the variables it references). Internally, the closure keeps a reference to that environment even after the outer function returns. The engine keeps the environment alive via garbage-collection rules — as long as the closure exists, the captured variables exist.

**40. Why do closures "remember" variables even after the outer function has returned? What does the JavaScript engine keep alive?**
Because the returned inner function holds a reference to the outer function's environment (a "hidden" scope object holding the captured variables). The engine's garbage collector sees that the environment is still reachable through the closure, so it doesn't free it. The variables stay alive exactly as long as the closure does.

**41. What is the difference between closure state and global variables? Why prefer closures?**
Global variables are visible and mutable from anywhere — easy to collide with and accidentally modify. Closure state is **private** to the closure and only reachable through the returned functions. Closures avoid name collisions, prevent accidental modification, and keep related state bundled with the functions that use it.

**42. What is the difference between a closure and a plain returned function that uses no outer variables?**
A plain returned function with no outer-variable references is just a function — nothing is captured. A closure is specifically a function that **references variables from its enclosing scope**, so it carries state with it. The capturing of outer variables is what makes it a closure.

**43. How do closures help create private variables in JavaScript (which has no native `private` keyword)?**
The outer function's local variables are unreachable from outside. Only the returned functions (which close over them) can read or modify them. That's the closest JavaScript gets to `private` fields without classes — e.g. the `count` in `makeCounter` can only be changed via `increment()`/`decrement()`.

**44. What is the difference between closures and classes/objects for holding state?**
A closure stores state in captured variables and exposes functions; a class/object stores state in instance properties (`this.xxx`). Closures give true privacy (no external access at all), while object properties are typically public unless you use private fields (`#`). Closures are lighter weight for small factories; classes are better for large, structured objects with inheritance.

**45. What happens if you create a closure inside a loop? How does `let` fix the classic loop-closure bug?**
With `var`, all loop iterations share the **same** variable, so every closure captures the same final value:
```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i));  // 3, 3, 3
}
```
With `let`, each iteration creates a **new binding**, so each closure captures its own value:
```javascript
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j));  // 0, 1, 2
}
```

**46. What is the difference between `var` and `let` inside a closure in terms of captured state?**
`var` is function-scoped — all closures created in the same function share one binding of the variable. `let` is block-scoped — each block (like each loop iteration) gets its own binding, so closures capture distinct values. That's why `let` fixes the loop-closure bug.

**47. How would you create a closure that generates unique test emails?**
```javascript
function createTestDataGenerator() {
    let id = 1000;
    return function () {
        return `user_${id++}@test.com`;
    };
}
const nextEmail = createTestDataGenerator();
console.log(nextEmail());  // user_1000@test.com
console.log(nextEmail());  // user_1001@test.com
```
`id` is private closure state — each call gets the next unique email.

**48. What is a memory leak with closures? How can you avoid it?**
If a closure holds references to large objects (or a DOM element) that are no longer needed, those objects stay in memory as long as the closure lives — a memory leak. Avoid it by: not keeping closures around longer than needed, setting captured references to `null` when done, and using event listeners that can be removed (`removeEventListener`).

**49. What is the output and why?**
```javascript
let counterA = makeCounter();
let counterB = makeCounter();
function makeCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
console.log(counterA());  // 1
console.log(counterA());  // 2
console.log(counterB());  // 1
```
Each call to `makeCounter()` creates an **independent** closure. `counterA` counts 1, 2 in its own state; `counterB` starts fresh at 1.

**50. What is the output and why?**
```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i));
}
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j));
}
```
```
3 3 3 0 1 2
```
`var` is function-scoped — all three callbacks share the same `i`, which ends at 3. `let` creates a new binding per iteration, so each callback captures 0, 1, 2.

**51. How do closures relate to the scope chain? Give an example.**
A closure is created because of the scope chain: the inner function can see outer variables through the chain, and when it's returned, it keeps that chain (its environment) alive.
```javascript
function outer() {
    let x = 10;
    return function () { return x; };  // closure — keeps x alive
}
let getX = outer();
console.log(getX());  // 10
```

**52. What is the difference between a closure and a callback? Can a callback be a closure?**
A callback is a function passed to another function to be called later. A closure is a function that captures outer variables. They're different concepts, but a callback **can also be a closure** — e.g. `array.forEach(x => total += x)` is both a callback (passed to `forEach`) and a closure (captures `total`).

**53. How would you use a closure to implement retry logic for a flaky test in Playwright?**
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
The tracker remembers how many attempts have been made (closure state) and reports when the limit is hit — no global variable needed.

**54. What is a pure function, and how does it relate to closures?**
A pure function always returns the same output for the same input and has no side effects. A closure can wrap a pure function and add state around it — like memoization: the inner pure computation stays pure, while the closure caches results. Closures themselves are usually **not** pure (they read/write captured state), but they can make pure functions more efficient.

**55. How does hoisting interact with closures?**
Hoisting moves declarations to the top of their scope at compile time. Closures capture variables from the environment — hoisting affects when those variables are initialized (a `let`/`const` captured variable in its TDZ throws if accessed before its line runs). Function declarations inside a closure are fully hoisted, so they can be called before their line inside the closure body.

---

## Automation Testing — Scenario Based Questions (56–60)

**56. You need to track how many times a flaky test has been retried. How would you use a closure?**
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
let runTCRetry = maxRetryTracker(3);
```
`attempts` persists via the closure, so each retry updates the count until the max is exceeded.

**57. You need to generate unique email addresses for each test run. Write a closure-based generator.**
```javascript
function createTestDataGenerator() {
    let id = 1000;
    return function () {
        return `user_${id++}@test.com`;
    };
}
const nextEmail = createTestDataGenerator();
// user_1000@test.com, user_1001@test.com, ...
```
Each test run gets a fresh, unique email — no global counter to reset.

**58. Your test framework needs a private session token that only certain methods can access. How would you design it with closures?**
```javascript
function createSessionManager() {
    let token = null;   // private
    return {
        setToken(t) { token = t; },
        getToken() { return token; }
    };
}
const session = createSessionManager();
session.setToken("abc123");
console.log(session.getToken());  // "abc123"
// token is unreachable from outside — private by closure
```

**59. You have a Playwright helper that must remember its configuration (like a timeout) across calls. How would closures help?**
```javascript
function createWaiter(defaultTimeout) {
    return function (locator) {
        console.log(`Waiting for ${locator} up to ${defaultTimeout}ms`);
    };
}
const fastWaiter = createWaiter(2000);
const slowWaiter = createWaiter(10000);
```
The config (`defaultTimeout`) is captured — each helper remembers its own setting without globals.

**60. You need to count how many tests passed and failed across a suite. Write a closure-based counter.**
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
const counter = createTestCounter();
counter.pass();
counter.pass();
counter.fail();
console.log(counter.summary());  // Passed: 2, Failed: 1
```
The pass/fail counts are private closure state — safe from accidental modification elsewhere in the suite.
