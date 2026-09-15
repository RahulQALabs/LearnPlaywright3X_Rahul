# Additional Topics — Shadowing, Closures, Hoisting, Scope Chain (var/let/const)

Practical topics missing from the var/let/const chapter that matter for interviews and Playwright framework creation.

## 1. Variable Shadowing

**Shadowing** is when an inner variable has the same name as an outer variable — the inner one "shadows" (hides) the outer one inside its scope.

```javascript
let x = 10;           // outer x

function test() {
    let x = 20;       // inner x shadows outer x inside this function
    console.log(x);   // 20 — inner wins
}

test();
console.log(x);       // 10 — outer is untouched
```

Block-level shadowing with the TDZ trap:

```javascript
let x = 1;
{
    console.log(x);   // ReferenceError! inner x is in TDZ
    let x = 2;        // shadows outer x
}
```

**Why it matters in testing:** nested helper functions, fixtures, and page objects routinely reuse names like `page`, `config`, `data` — understanding which one wins is essential.

## 2. Closures (The Concept)

A **closure** is a function that "remembers" the variables from the scope where it was created, even after that scope has finished running.

```javascript
function createCounter() {
    let count = 0;               // captured by the inner function
    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter());  // 1
console.log(counter());  // 2 — count is remembered between calls
```

**Why it matters in testing:** closures power callbacks, test-data generators, retry counters, and fixture factories.

## 3. The IIFE Workaround for the `var` Loop Problem

You learned that `let` fixes the setTimeout-in-loop closure bug. The classic **pre-ES6** fix was an IIFE:

```javascript
// Problem: all callbacks see the final i value (5)
for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0);   // 5, 5, 5, 5, 5
}

// Fix 1: let (modern)
for (let j = 0; j < 5; j++) {
    setTimeout(() => console.log(j), 0);   // 0, 1, 2, 3, 4
}

// Fix 2: IIFE (classic interview answer)
for (var k = 0; k < 5; k++) {
    (function (captured) {
        setTimeout(() => console.log(captured), 0);  // 0, 1, 2, 3, 4
    })(k);
}
```

## 4. Function Hoisting vs Variable Hoisting

Both are hoisted, but differently:

```javascript
// Function declaration — FULLY hoisted (callable before its line)
sayHello();                  // works!

function sayHello() {
    console.log("Hi");
}

// Function expression / arrow in const — NOT usable before its line
// greet();                  // ReferenceError: Cannot access 'greet' before initialization
const greet = () => console.log("Hi");
```

The rule: `function` declarations hoist completely (name + body). `var` hoists as `undefined`. `let`/`const` hoist into the TDZ — accessible only after the declaration line.

## 5. Scope Chain / Lexical Environment

When code uses a variable, JS looks it up in the **current scope**, then the **outer scope**, then the **global scope** — this chain of lookups is the scope chain.

```javascript
const appUrl = "https://example.com";        // global scope

function navigate() {
    const pageTitle = "Home";                // function scope
    function logInfo() {                     // nested function
        const step = "click";                // innermost scope
        console.log(step);                   // found here
        console.log(pageTitle);              // not here → found in outer scope
        console.log(appUrl);                 // not here → found in global scope
    }
    logInfo();
}
navigate();
```

**Why it matters in testing:** fixtures and hooks (beforeEach/afterEach) nest scopes; knowing how variables resolve prevents "variable is not defined" surprises.

## 6. Implicit Globals (Assignment Without Declaration)

```javascript
// Without strict mode:
function setConfig() {
    apiKey = "secret";        // NO let/var/const — creates a global implicitly!
}
setConfig();
console.log(apiKey);          // "secret" — leaked to global scope

// With strict mode this throws a ReferenceError instead.
```

This is a classic bug source — always declare variables. `"use strict"` catches it automatically.
