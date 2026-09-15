# Hoisting in JavaScript — Complete Guide

### TheTestingAcademy | var | let | const | Functions | Classes

---

## 🟢 SECTION 1: WHAT IS HOISTING?

### Definition

Hoisting is JavaScript's default behavior of moving variable and function **declarations** to the top of their containing scope during the compilation phase, BEFORE the code is actually executed.

**Important:** Only declarations are hoisted, NOT initializations or assignments. The variable exists in memory from the start of the scope, but its value is only assigned when execution reaches that line.

### How JavaScript Engine Works (Behind the Scenes)

When JavaScript code runs, it goes through two phases:

- **Phase 1 — Memory Creation (Compilation):** The engine scans all code, finds all declarations (var, let, const, function, class), and allocates memory.
- **Phase 2 — Code Execution:** The engine runs code line by line, assigning values and executing logic.

### Visual: How JS Engine Sees Your Code

**What YOU write:**

```
console.log(name);     // Line 1
var name = "Dev";      // Line 2
console.log(name);     // Line 3
```

**What JS ENGINE does internally:**

```
// ---- Phase 1: Memory Creation ----
var name = undefined;  // Declaration hoisted, initialized as undefined

// ---- Phase 2: Execution ----
console.log(name);     // undefined (name exists but value not assigned yet)
name = "Dev";          // NOW the assignment happens
console.log(name);     // "Dev"
```

> **NOTE:** Hoisting does NOT physically move your code. It is a mental model to understand how the JS engine handles declarations during compilation. 

---

## 🟢 SECTION 2: HOISTING WITH var

### How var Hoisting Works

Variables declared with `var` are hoisted to the top of their **FUNCTION scope** (or global scope if outside any function). During hoisting, they are automatically initialized with `undefined`.

You CAN access a var variable before its declaration line without error, but its value will be `undefined`.

### Example 1: Basic var Hoisting

```
console.log(greeting);   // Output: undefined
var greeting = "Hello!";
console.log(greeting);   // Output: "Hello!"

// Behind the scenes:
// var greeting;              <-- hoisted with undefined
// console.log(greeting);    <-- undefined
// greeting = "Hello!";      <-- assignment stays in place
// console.log(greeting);    <-- "Hello!"
```

### Example 2: var Hoisting Inside a Function

```
function getUserStatus() {
    console.log(status);       // undefined (hoisted within function)
    var status = "Active";
    console.log(status);       // "Active"
    return status;
}
getUserStatus();

// Note: var is function-scoped, so status is hoisted to
// the top of getUserStatus(), NOT the global scope.
```

### Example 3: var Hoisting with if Blocks (No Block Scope!)

```
function checkAccess(isAdmin) {
    if (isAdmin) {
        var accessLevel = "Full";
    } else {
        var accessLevel = "Limited";
    }
    console.log(accessLevel);  // Works! var ignores block scope
}
checkAccess(true);   // "Full"
checkAccess(false);  // "Limited"

// Both var declarations are hoisted to function scope.
// This is a common source of bugs!
```

### Example 4: var Leaks Out of for Loops

```
for (var i = 0; i < 5; i++) {
    // do something
}
console.log(i);   // 5 (var leaks out of the for block!)

// Compare with let:
for (let j = 0; j < 5; j++) {
    // do something
}
// console.log(j);  // ReferenceError: j is not defined
```

### Example 5: Multiple var Declarations (Re-declaration Allowed)

```
var testName = "Login Test";
var testName = "Signup Test";    // No error! Re-declaration allowed with var
var testName = "Search Test";    // Still no error!
console.log(testName);           // "Search Test" (last value wins)

// This is DANGEROUS in large codebases!
// You can accidentally overwrite variables.
```

>  ⚠️ **WARNING:** var allows re-declaration which can silently overwrite variables. This is one of the biggest reasons to avoid var. 

### Example 6: var Hoisting with Functions (Classic Interview Question)

```
var x = 10;

function printX() {
    console.log(x);   // undefined (NOT 10!)
    var x = 20;
    console.log(x);   // 20
}
printX();

// WHY? Inside printX, the local "var x" is hoisted to the
// top of the function. So the function has its own "x" that
// shadows the global "x". At the first console.log, the local
// "x" exists but has not been assigned yet = undefined.
```

### Example 7: The Classic setTimeout + var Bug

```
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log("var loop: " + i);
    }, 100);
}
// Output: 3, 3, 3  (NOT 0, 1, 2!)

// WHY? var is function-scoped. There is only ONE "i" variable.
// By the time setTimeout callbacks execute, the loop has finished
// and i = 3 for all three callbacks.

// FIX with IIFE (old way):
for (var i = 0; i < 3; i++) {
    (function(j) {
        setTimeout(function() {
            console.log("IIFE fix: " + j);
        }, 100);
    })(i);
}
// Output: 0, 1, 2
```

🔹 **Q:** In automation script, a variable declared with var inside a loop is accessible outside. Bug? 💡 **A:** No, expected behavior. var is function-scoped, not block-scoped. It leaks out of for/if/while blocks. Use let/const instead.

🔹 **Q:** Why does console.log(x) show undefined instead of ReferenceError with var? 💡 **A:** var declarations are hoisted and initialized with undefined. The variable exists from the start of scope, just without its value.

---

## 🟢 SECTION 3: HOISTING WITH let

### How let Hoisting Works

Variables declared with `let` ARE hoisted, but are **NOT initialized**. They enter the **Temporal Dead Zone (TDZ)** from the start of their block until the declaration line.

Accessing a let variable in the TDZ throws: `ReferenceError: Cannot access variable before initialization` 

### What is the Temporal Dead Zone (TDZ)?

The TDZ is the period between when a scope starts and when the let/const declaration is encountered. During this zone, the variable EXISTS in memory but is marked as "uninitialized."

### Visual: Temporal Dead Zone

```
{
    // ---- TDZ for "score" starts here ----
    // console.log(score);  // ReferenceError!
    // score = 50;          // ReferenceError!
    // typeof score;        // ReferenceError!
    // ---- TDZ for "score" ends here ----
    let score = 100;        // Declaration reached, TDZ ends
    console.log(score);     // 100 (safe to access now)
}
```

### Example 1: Basic let Hoisting (TDZ Error)

```
// console.log(userName);  // ReferenceError: Cannot access 'userName' before initialization
let userName = "Dev";
console.log(userName);     // "Dev"

// Compare with var:
console.log(greeting);     // undefined (var is initialized with undefined)
var greeting = "Hello";
```

### Example 2: let is Block-Scoped

```
let x = "global";

if (true) {
    // TDZ for block-scoped "x" starts here
    // console.log(x);   // ReferenceError (NOT "global"!)
    let x = "block";     // TDZ ends
    console.log(x);      // "block"
}

console.log(x);          // "global" (outer x unchanged)
```

> **NOTE:** Even though there is a global 'x', the block-scoped `let x` creates a NEW variable that shadows it. The TDZ applies from the start of the block. 

### Example 3: let in for Loops (New Binding Per Iteration)

```
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// Output: 0, 1, 2

// Each iteration creates a NEW "i" binding.
// Each setTimeout callback captures its own "i".

// Compare with var (prints 3, 3, 3):
for (var j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 100);
}
// Output: 3, 3, 3 (all share same "j")
```

### Example 4: let Cannot Be Re-declared in Same Scope

```
let testName = "Login";
// let testName = "Signup";  // SyntaxError: Identifier 'testName' has already been declared

// But you CAN re-declare in a nested block:
let score = 90;
if (true) {
    let score = 100;        // Different scope, this is fine!
    console.log(score);     // 100 (block-scoped)
}
console.log(score);         // 90 (original unchanged)
```

### Example 5: let in Switch Statement (Common Gotcha)

```
// This FAILS:
// switch (action) {
//     case "a": let x = 1; break;
//     case "b": let x = 2; break;  // SyntaxError: x already declared
// }

// FIX: Use blocks inside cases
let action = "b";
switch (action) {
    case "a": {
        let x = 1;
        console.log(x);
        break;
    }
    case "b": {
        let x = 2;         // OK! Different block scope
        console.log(x);    // 2
        break;
    }
}
```

### Example 6: TDZ with typeof (Surprising Behavior)

```
// typeof on an undeclared variable is safe:
console.log(typeof randomVar);   // "undefined" (no error)

// But typeof in TDZ throws an error!
// console.log(typeof myLet);    // ReferenceError!
let myLet = 42;

// The engine KNOWS about myLet (it's hoisted)
// but it's in the TDZ, so even typeof cannot access it.
```

### Example 7: TDZ with Function Default Parameters

```
// This works:
function greet(name, greeting = "Hello " + name) {
    console.log(greeting);
}
greet("Dev");  // "Hello Dev"

// This FAILS (TDZ):
// function broken(a = b, b = 10) {
//     console.log(a, b);
// }
// broken();  // ReferenceError: Cannot access 'b' before initialization
// "b" is in TDZ when "a = b" is evaluated!
```

🔹 **Q:** Difference between 'not defined' and 'not initialized' errors? 💡 **A:** 'x is not defined' = variable doesn't exist anywhere. 'Cannot access x before initialization' = it IS declared (let/const) but you're in the TDZ.

🔹 **Q:** In Cypress, I get 'Cannot access variable before initialization'. Why? 💡 **A:** You're using a let/const variable before its declaration. It's in the TDZ. Move the declaration above first usage.

---

## 🟢 SECTION 4: HOISTING WITH const

### How const Hoisting Works

`const` behaves EXACTLY like `let` for hoisting: hoisted but not initialized (TDZ applies). Key differences: must be assigned at declaration, cannot be reassigned.

### Example 1: const TDZ (Same as let)

```
// console.log(API_KEY);  // ReferenceError: Cannot access before initialization
const API_KEY = "abc-123-xyz";
console.log(API_KEY);     // "abc-123-xyz"
```

### Example 2: const Must Be Initialized

```
// const myVar;  // SyntaxError: Missing initializer in const declaration

// You MUST assign a value:
const MAX_RETRIES = 3;
const BASE_URL = "https://api.example.com";
```

### Example 3: const Cannot Be Reassigned

```
const testName = "Login Test";
// testName = "Signup Test";   // TypeError: Assignment to constant variable

const score = 100;
// score++;                    // TypeError
// score += 10;                // TypeError
```

### Example 4: const with Objects (VERY IMPORTANT!)

```
const config = {
    browser: "Chrome",
    headless: true,
    timeout: 3000
};

// Modifying properties is ALLOWED:
config.timeout = 5000;       // ✅ OK!
config.retries = 3;          // ✅ OK! (adding new property)
delete config.headless;      // ✅ OK! (removing property)

// Reassigning the variable is NOT ALLOWED:
// config = {};               // ❌ TypeError: Assignment to constant variable
// config = { new: "obj" };   // ❌ TypeError
```

> **NOTE:** `const` protects the BINDING (reference), not the VALUE. Object/array contents can change, but the variable cannot point to a different object/array. 

### Example 5: const with Arrays

```
const testCases = ["Login", "Signup", "Search"];

// Modifying contents is ALLOWED:
testCases.push("Checkout");        // ✅ OK!
testCases[0] = "OAuth Login";      // ✅ OK!
testCases.pop();                   // ✅ OK!
testCases.splice(1, 1);            // ✅ OK!

// Reassigning is NOT allowed:
// testCases = [];                 // ❌ TypeError
// testCases = ["New", "Array"];   // ❌ TypeError
```

### Example 6: Making Objects Truly Immutable

```
// Object.freeze() makes properties read-only (SHALLOW):
const frozenConfig = Object.freeze({
    browser: "Chrome",
    timeout: 3000,
    nested: { retries: 3 }
});

frozenConfig.timeout = 5000;       // Silently fails
console.log(frozenConfig.timeout);  // 3000 (unchanged!)

// WARNING: freeze is SHALLOW!
frozenConfig.nested.retries = 10;  // This WORKS!
console.log(frozenConfig.nested.retries);  // 10

// For deep freeze, you need a recursive function or library.
```

### Example 7: const in Loops

```
// const in for loop — ERROR:
// for (const i = 0; i < 5; i++) {  // TypeError at i++
//     console.log(i);
// }

// const in for...of — WORKS (new binding each iteration):
const browsers = ["Chrome", "Firefox", "Safari"];
for (const browser of browsers) {
    console.log(browser);  // Chrome, Firefox, Safari ✅
}

// const in for...in — WORKS:
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);  // ✅
}
```

🔹 **Q:** If const objects can be modified, what's the point? 💡 **A:** const prevents accidental reassignment (config = {}). Combine with Object.freeze() for deep immutability.

🔹 **Q:** Should I use const for test data objects? 💡 **A:** Yes! const for test data, config, selectors, URLs. You modify properties, not the binding. const + Object.freeze() is safest.

---

## Section 5: Function Hoisting

### Function Declarations Are Fully Hoisted

Function declarations are completely hoisted — both the function name and its body are available before the declaration appears in the source code.

### Example 1: Calling a Function Before Declaration

```javascript
sayHello();  // "Hello, World!" — works perfectly!

function sayHello() {
    console.log("Hello, World!");
}
```

### Example 2: Function Expression Is Not Hoisted

```javascript
// greet();  // TypeError: greet is not a function

var greet = function() {
    console.log("Hi there!");
};

greet();  // "Hi there!" — works here
```

**Why?**

`var greet` is hoisted and initialized with `undefined`. The function expression is assigned only when execution reaches that line. Calling `undefined()` causes a `TypeError`.

### Example 3: Arrow Function Hoisting

```javascript
// runTest();  // ReferenceError: Cannot access 'runTest' before initialization

const runTest = () => {
    console.log("Running test...");
};

runTest();  // "Running test..."
```

Arrow functions assigned to `const` or `let` follow TDZ rules. Define them before using them.

### Example 4: Function Declaration vs `var` Expression

```javascript
console.log(typeof myFunc);   // "function"

var myFunc = "I am a string";

function myFunc() {
    return "I am a function";
}

console.log(typeof myFunc);   // "string"
```

**Hoisting and execution:**

1. `var myFunc` is hoisted.
2. The function declaration is also hoisted with its complete body.
3. During execution, `myFunc = "I am a string"` overwrites the function value.

### Example 5: Functions Inside Blocks

Avoid relying on function declarations inside blocks because behavior can be confusing and historically differed across environments.

**Prefer:**

```javascript
let test;

if (true) {
    test = function() {
        return "inside if";
    };
}

console.log(test());  // "inside if"
```

### Example 6: Named Function Expression

```javascript
const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
};

console.log(factorial(5));  // 120
// console.log(fact(5));    // ReferenceError: fact is not defined
```

The name `fact` is available inside the function expression, which makes it useful for recursion. It is not available in the surrounding scope.

### Example 7: IIFE — Immediately Invoked Function Expression

```javascript
(function() {
    var secret = "hidden";
    console.log("IIFE executed: " + secret);
})();

// console.log(secret);  // ReferenceError
```

**Arrow IIFE:**

```javascript
(() => {
    console.log("Arrow IIFE executed!");
})();
```

### Interview Questions

**Q: In test frameworks, why are setup functions callable before test blocks?**

**A:** Frameworks such as Jest and Mocha collect test and setup blocks during a registration phase and then execute them according to the framework's lifecycle. This can look similar to hoisting, but it is more accurately explained by the framework's registration/execution model.

**Q: Why does an arrow-function helper throw a ReferenceError before its declaration?**

**A:** When an arrow function is assigned to a `const` or `let`, the variable is in the TDZ until initialization. Calling it before initialization causes a `ReferenceError`.

---

## Section 6: Class Hoisting

### Classes Are Hoisted but Stay in the TDZ

Class declarations are hoisted in the sense that their binding exists, but the class is not initialized until execution reaches the declaration.

```javascript
// const user = new User("Dev");  // ReferenceError

class User {
    constructor(name) {
        this.name = name;
    }
}

const user = new User("Dev");  // Works
console.log(user.name);        // "Dev"
```

### Class Expression — Same TDZ Rules

```javascript
// const t = new TestCase();  // ReferenceError

const TestCase = class {
    constructor(name) {
        this.name = name;
    }
};

const t = new TestCase("Login");  // Works
```

### Class vs Function — Hoisting Comparison

```javascript
// Function — fully hoisted
const result = add(2, 3);   // 5
function add(a, b) {
    return a + b;
}

// Class — TDZ
// const calc = new Calculator();  // ReferenceError

class Calculator {
    add(a, b) {
        return a + b;
    }
}

const calc = new Calculator();  // Works
```

### Interview Question

**Q: Why are classes in TDZ when functions are fully hoisted?**

**A:** This is a deliberate language design choice in ES6. Classes require initialization before they can be used, and TDZ behavior helps prevent access before initialization. The inheritance explanation is useful context, but TDZ should primarily be understood as the language's initialization rule for class bindings.

---

## Section 7: Complete Hoisting Comparison

| Feature | `var` | `let` | `const` | Function Declaration | Class Declaration |
|---|---|---|---|---|---|
| Hoisted? | Yes | Yes | Yes | Yes (fully) | Yes |
| Initialized during hoisting? | Yes (`undefined`) | No (TDZ) | No (TDZ) | Yes (function body available) | No (TDZ) |
| Access before declaration | `undefined` | `ReferenceError` | `ReferenceError` | Works normally | `ReferenceError` |
| Scope | Function | Block | Block | Function* | Block |
| Re-declarable? | Yes | No | No | Yes** | No |
| Re-assignable? | Yes | Yes | No | Yes*** | N/A |
| Must initialize? | No | No | Yes | N/A | N/A |
| TDZ? | No | Yes | Yes | No | Yes |

\* A function declaration at top level of a script/module has additional environment-specific details; for interview purposes, function scope is the common simplified rule.

\** Function redeclaration rules can vary by scope and script/module context.

\*** The binding for a function declaration can be reassigned like a normal variable binding in many contexts.

### Key Takeaway

- `var` is hoisted and initialized to `undefined`.
- `let` and `const` are hoisted but remain in the TDZ until initialization.
- Function declarations are available before their declaration.
- Classes are hoisted but remain in the TDZ.
- Function expressions and arrow functions do not get the same callable hoisting behavior as function declarations.

---

## Section 8: Common Interview & QA Questions

### Q1: What will be the output?

```javascript
console.log(a);
var a = 1;
console.log(a);
```

**Answer:**

```text
undefined
1
```

`var` is hoisted and initialized with `undefined`.

### Q2: What will be the output?

```javascript
console.log(a);
let a = 1;
```

**Answer:** `ReferenceError`

`let` is in the TDZ until its declaration is initialized.

### Q3: Can you call a function before defining it?

**Answer:** Yes, when it is a **function declaration**.

```javascript
sayHello();

function sayHello() {
    console.log("Hello");
}
```

Function expressions and arrow functions assigned to variables cannot be called before their variable is initialized.

### Q4: What is the output?

```javascript
var x = 1;

function foo() {
    console.log(x);
    var x = 2;
}

foo();
```

**Answer:** `undefined`

Inside `foo`, the local `var x` is hoisted to the top of the function scope:

```javascript
function foo() {
    var x;
    console.log(x);  // undefined
    x = 2;
}
```

The local variable shadows the global `x`.

### Q5: Should helper functions be at the top or bottom of a test file?

Function declarations can technically be placed anywhere because they are hoisted. However, for readability and predictable code organization, keeping helpers above their usage is generally preferable.

For `const`/arrow-function helpers, they **must** be initialized before use.

### Q6: What happens with `let x = x;`?

```javascript
let x = x;
```

**Answer:** `ReferenceError`

The right-hand-side `x` is evaluated while the local `x` is still in the TDZ.

### Q7: Does hoisting work differently in strict mode?

The basic hoisting behavior of `var`, `let`, `const`, and function declarations remains. Strict mode also makes several language behaviors more predictable and restrictive. Function declarations inside blocks should not be relied upon for cross-environment behavior.

### Q8: What is the output?

```javascript
console.log(foo);

var foo = function bar() {
    return 42;
};
```

**Answer:**

```text
undefined
```

`var foo` is hoisted as `undefined`. The function expression is created only when execution reaches the assignment.

### Q9: Why should QA engineers care about hoisting?

Hoisting can cause subtle bugs in automation and test code, including:

- Unexpected `undefined` values.
- `ReferenceError` or `TypeError` before helper initialization.
- Variable shadowing.
- Confusing function/variable behavior.
- Bugs caused by shared loop state or scope.
- Difficult-to-debug test setup and execution behavior.

Understanding hoisting helps QA engineers debug JavaScript/TypeScript automation code more effectively.

### Q10: What is the output?

```javascript
function test() {
    return 1;
}

var test = 2;

console.log(typeof test);
```

**Answer:**

```text
number
```

The function declaration is available during hoisting, but the later assignment `test = 2` overwrites the binding during execution.

---

## Section 9: Best Practices

### Golden Rules

1. **Use `const` by default.** Switch to `let` only when reassignment is required.
2. **Avoid `var` in modern JavaScript.**
3. **Prefer declarations close to where they are first needed**, while still keeping code readable.
4. **Use function declarations when function hoisting is intentionally useful.**
5. **Use `const` + arrow functions for function values/helpers when that style fits the project.**
6. **Avoid relying on function declarations inside blocks.**
7. Use `let` for loop variables that need reassignment.
8. Use `const` for `for...of` and `for...in` variables when the binding itself does not need reassignment.
9. Use ESLint to prevent common hoisting and declaration mistakes.

### Recommended ESLint Rules

```json
{
    "rules": {
        "no-var": "error",
        "prefer-const": "error",
        "no-use-before-define": "error",
        "block-scoped-var": "error"
    }
}
```

### Quick Decision Flow

| Question | Answer | Use |
|---|---|---|
| Will the value change? | No | `const` |
| Will the value change? | Yes | `let` |
| Need function hoisting? | Yes | Function declaration |
| Need a function as a value? | Yes | `const` + arrow function |
| Working with old code containing `var`? | Yes | Refactor carefully to `let`/`const` |

---

## Quick Revision Cheat Sheet

| Declaration / Syntax | Hoisted | Initialized Before Declaration | TDZ | Can Reassign |
|---|---:|---:|---:|---:|
| `var` | Yes | Yes (`undefined`) | No | Yes |
| `let` | Yes | No | Yes | Yes |
| `const` | Yes | No | Yes | No |
| Function declaration | Yes | Yes | No | Yes* |
| Class declaration | Yes | No | Yes | N/A |
| Function expression with `var` | Variable only | `undefined` | No | Yes |
| Arrow function with `const` | Variable only | No | Yes | No |

\* Function declaration reassignment depends on the surrounding scope/context.

## One-Line Interview Summary

> **Hoisting means JavaScript processes declarations before executing the code. `var` is initialized to `undefined`, `let` and `const` remain in the TDZ, function declarations are callable before their declaration, and classes remain in the TDZ until initialized.**
