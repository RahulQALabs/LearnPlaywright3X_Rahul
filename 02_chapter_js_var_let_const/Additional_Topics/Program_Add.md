# Additional Topics — Programming Practice (var/let/const)

## Easy Programs

**1. Write a program demonstrating variable shadowing.**

```javascript
let x = 10;
function test() {
    let x = 20;          // shadows the outer x
    console.log(x);      // 20
}
test();
console.log(x);          // 10
```

**2. Write a program demonstrating the scope chain.**

```javascript
const appUrl = "https://example.com";
function navigate() {
    const pageTitle = "Home";
    function logInfo() {
        console.log(pageTitle);   // found in outer scope
        console.log(appUrl);      // found in global scope
    }
    logInfo();
}
navigate();
```

**3. Write a function that returns a counter using a closure.**

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
```

**4. Write a program showing function hoisting works but const arrow doesn't.**

```javascript
sayHello();               // works — fully hoisted
function sayHello() {
    console.log("Hi");
}

// greet();               // ReferenceError
const greet = () => console.log("Hi");
```

**5. Write a program demonstrating `"use strict"` catching undeclared assignment.**

```javascript
"use strict";
try {
    undeclaredVar = 10;   // ReferenceError in strict mode
} catch (error) {
    console.log("Caught:", error.message);
}
```

---

## Medium Programs

**6. Write a program showing the `var` loop bug and both fixes (let + IIFE).**

```javascript
// Bug: var — all print 5
for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log("var:", i), 0);
}

// Fix 1: let
for (let j = 0; j < 5; j++) {
    setTimeout(() => console.log("let:", j), 0);
}

// Fix 2: IIFE (classic)
for (var k = 0; k < 5; k++) {
    (function (captured) {
        setTimeout(() => console.log("iife:", captured), 0);
    })(k);
}
```

**7. Write a program showing the TDZ shadowing error.**

```javascript
let x = 1;
try {
    {
        console.log(x);   // ReferenceError — inner x is in TDZ
        let x = 2;
    }
} catch (error) {
    console.log("TDZ error:", error.message);
}
```

**8. Write a function factory that creates independent counters.**

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
console.log(counterB());  // 1 — independent closure
```

**9. Write a program demonstrating implicit global creation and the strict-mode fix.**

```javascript
// Non-strict: silently creates a global
function leak() {
    leaked = "global";    // no declaration!
}
leak();
console.log(leaked);      // "global" — bad!

// Strict: throws
"use strict";
try {
    function leak2() {
        hidden = 1;
    }
    leak2();
} catch (error) {
    console.log("Strict caught it:", error.message);
}
```

**10. Write a program showing the difference between shadowing and redeclaration.**

```javascript
// Shadowing — inner block has its own x (legal)
let x = 10;
{
    let x = 20;
    console.log("inner:", x);   // 20
}
console.log("outer:", x);       // 10

// Redeclaration — same scope, illegal
try {
    let y = 1;
    let y = 2;                  // SyntaxError
} catch (error) {
    console.log("Redeclaration error");
}
```

---

## Hard Programs

**11. Write a module pattern using closures and IIFE — private state.**

```javascript
const config = (function () {
    let apiKey = "";              // private — not accessible outside
    return {
        setApiKey(key) {
            apiKey = key;
        },
        getApiKey() {
            return apiKey;
        }
    };
})();

config.setApiKey("secret-123");
console.log(config.getApiKey());  // "secret-123"
// console.log(config.apiKey);    // undefined — private!
```

**12. Write a debounce function using a closure.**

```javascript
function debounce(fn, delay) {
    let timer = null;              // captured state
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}
const log = () => console.log("Fired!");
const debounced = debounce(log, 500);
debounced();
debounced();   // only the last call fires
```

**13. Write a memoize function using a closure to cache results.**

```javascript
function memoize(fn) {
    const cache = {};
    return function (n) {
        if (cache[n] !== undefined) return cache[n];
        const result = fn(n);
        cache[n] = result;
        return result;
    };
}
const square = memoize(n => n * n);
console.log(square(5));  // 25
console.log(square(5));  // 25 (cached)
```

**14. Write a function that demonstrates the scope chain with three levels.**

```javascript
const global = "global";
function outer() {
    const outerVar = "outer";
    function middle() {
        const middleVar = "middle";
        function inner() {
            const innerVar = "inner";
            console.log(innerVar);   // own
            console.log(middleVar);  // outer scope
            console.log(outerVar);   // outer scope
            console.log(global);     // global scope
        }
        inner();
    }
    middle();
}
outer();
```

**15. Write a function that uses shadowing intentionally for safe config overrides.**

```javascript
const timeout = 5000;                  // default
function runTest(timeout) {            // parameter shadows the global
    console.log(`Running with timeout: ${timeout}ms`);
}
runTest(1000);    // 1000 — parameter wins
runTest();        // undefined — no default!
```
