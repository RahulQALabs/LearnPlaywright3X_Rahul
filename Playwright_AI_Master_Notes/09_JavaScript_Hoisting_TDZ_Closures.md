# Callbacks, Hoisting, TDZ, Function/Class Hoisting & Closures

> Extracted from the supplied 3x Playwright + AI Mastery notes. Content is organized by topic; the original wording/examples are retained.

## Functions Part 2

# Callbacks, Promise and Strings & 2D Array

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_oXydp-F6h8Op4fmdl7t0C.png?ixlib=js-3.8.0)

# Hoisting and TDZ

    console.log(greeting);
    var greeting = "Hello!";
    console.log(greeting);

    // Behind the scenes:
    // var greeting;              <-- hoisted with undefined
    // console.log(greeting);    <-- undefined
    // greeting = "Hello!";      <-- assignment stays in place
    // console.log(greeting);    <-- "Hello!"

**TDZ (Temporal Dead Zone)** is:

> **TDZ is the time when a variable exists but you are NOT allowed to use it yet.**

TDZ is the time between entering a block and initializing a `let` or `const` variable. During this time, the variable exists but cannot be accessed.

    {
        console.log(a);
        let a = 10;
    }

    // Enter Block
    //  ↓
    // a is created ✅
    // a has NO value yet ❌
    //     ↓
    // console.log(a)  ❌ Error (TDZ)
    //     ↓
    // let a = 10;
    //     ↓
    // a = 10 ✅

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_CDmUV1gbNW8lrrmqkrY8h.png?ixlib=js-3.8.0)

# Hoisting in JavaScript — Complete Guide

### TheTestingAcademy | var | let | const | Functions | Classes

---

## 🟢 SECTION 1: WHAT IS HOISTING?

### Definition

Hoisting is JavaScript's default behavior of moving variable and function **DECLARATIONS** to the top of their containing scope during the compilation phase, BEFORE the code is actually executed.

**Important:** Only declarations are hoisted, NOT initializations or assignments. The variable exists in memory from the start of the scope, but its value is only assigned when execution reaches that line.

### How JavaScript Engine Works (Behind the Scenes)

When JavaScript code runs, it goes through two phases:

- **Phase 1 — Memory Creation (Compilation):** The engine scans all code, finds all declarations (var, let, const, function, class), and allocates memory.
- **Phase 2 — Code Execution:** The engine runs code line by line, assigning values and executing logic.

### Visual: How JS Engine Sees Your Code

**What YOU write:**

    console.log(name);     // Line 1
    var name = "Dev";      // Line 2
    console.log(name);     // Line 3

**What JS ENGINE does internally:**

    // ---- Phase 1: Memory Creation ----
    var name = undefined;  // Declaration hoisted, initialized as undefined

    // ---- Phase 2: Execution ----
    console.log(name);     // undefined (name exists but value not assigned yet)
    name = "Dev";          // NOW the assignment happens
    console.log(name);     // "Dev"

> **NOTE:** Hoisting does NOT physically move your code. It is a mental model to understand how the JS engine handles declarations during compilation.

---

## 🟢 SECTION 2: HOISTING WITH var

### How var Hoisting Works

Variables declared with `var` are hoisted to the top of their **FUNCTION scope** (or global scope if outside any function). During hoisting, they are automatically initialized with `undefined`.

You CAN access a var variable before its declaration line without error, but its value will be `undefined`.

### Example 1: Basic var Hoisting

    console.log(greeting);   // Output: undefined
    var greeting = "Hello!";
    console.log(greeting);   // Output: "Hello!"

    // Behind the scenes:
    // var greeting;              <-- hoisted with undefined
    // console.log(greeting);    <-- undefined
    // greeting = "Hello!";      <-- assignment stays in place
    // console.log(greeting);    <-- "Hello!"

### Example 2: var Hoisting Inside a Function

    function getUserStatus() {
        console.log(status);       // undefined (hoisted within function)
        var status = "Active";
        console.log(status);       // "Active"
        return status;
    }
    getUserStatus();

    // Note: var is function-scoped, so status is hoisted to
    // the top of getUserStatus(), NOT the global scope.

### Example 3: var Hoisting with if Blocks (No Block Scope!)

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

### Example 4: var Leaks Out of for Loops

    for (var i = 0; i < 5; i++) {
        // do something
    }
    console.log(i);   // 5 (var leaks out of the for block!)

    // Compare with let:
    for (let j = 0; j < 5; j++) {
        // do something
    }
    // console.log(j);  // ReferenceError: j is not defined

### Example 5: Multiple var Declarations (Re-declaration Allowed)

    var testName = "Login Test";
    var testName = "Signup Test";    // No error! Re-declaration allowed with var
    var testName = "Search Test";    // Still no error!
    console.log(testName);           // "Search Test" (last value wins)

    // This is DANGEROUS in large codebases!
    // You can accidentally overwrite variables.

> ⚠️ **WARNING:** var allows re-declaration which can silently overwrite variables. This is one of the biggest reasons to avoid var.

### Example 6: var Hoisting with Functions (Classic Interview Question)

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

### Example 7: The Classic setTimeout + var Bug

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

    {
        // ---- TDZ for "score" starts here ----
        // console.log(score);  // ReferenceError!
        // score = 50;          // ReferenceError!
        // typeof score;        // ReferenceError!
        // ---- TDZ for "score" ends here ----
        let score = 100;        // Declaration reached, TDZ ends
        console.log(score);     // 100 (safe to access now)
    }

### Example 1: Basic let Hoisting (TDZ Error)

    // console.log(userName);  // ReferenceError: Cannot access 'userName' before initialization
    let userName = "Dev";
    console.log(userName);     // "Dev"

    // Compare with var:
    console.log(greeting);     // undefined (var is initialized with undefined)
    var greeting = "Hello";

### Example 2: let is Block-Scoped

    let x = "global";

    if (true) {
        // TDZ for block-scoped "x" starts here
        // console.log(x);   // ReferenceError (NOT "global"!)
        let x = "block";     // TDZ ends
        console.log(x);      // "block"
    }

    console.log(x);          // "global" (outer x unchanged)

> **NOTE:** Even though there is a global 'x', the block-scoped `let x` creates a NEW variable that shadows it. The TDZ applies from the start of the block.

### Example 3: let in for Loops (New Binding Per Iteration)

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

### Example 4: let Cannot Be Re-declared in Same Scope

    let testName = "Login";
    // let testName = "Signup";  // SyntaxError: Identifier 'testName' has already been declared

    // But you CAN re-declare in a nested block:
    let score = 90;
    if (true) {
        let score = 100;        // Different scope, this is fine!
        console.log(score);     // 100 (block-scoped)
    }
    console.log(score);         // 90 (original unchanged)

### Example 5: let in Switch Statement (Common Gotcha)

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

### Example 6: TDZ with typeof (Surprising Behavior)

    // typeof on an undeclared variable is safe:
    console.log(typeof randomVar);   // "undefined" (no error)

    // But typeof in TDZ throws an error!
    // console.log(typeof myLet);    // ReferenceError!
    let myLet = 42;

    // The engine KNOWS about myLet (it's hoisted)
    // but it's in the TDZ, so even typeof cannot access it.

### Example 7: TDZ with Function Default Parameters

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

🔹 **Q:** Difference between 'not defined' and 'not initialized' errors? 💡 **A:** 'x is not defined' = variable doesn't exist anywhere. 'Cannot access x before initialization' = it IS declared (let/const) but you're in the TDZ.

🔹 **Q:** In Cypress, I get 'Cannot access variable before initialization'. Why? 💡 **A:** You're using a let/const variable before its declaration. It's in the TDZ. Move the declaration above first usage.

---

## 🟢 SECTION 4: HOISTING WITH const

### How const Hoisting Works

`const` behaves EXACTLY like `let` for hoisting: hoisted but not initialized (TDZ applies). Key differences: must be assigned at declaration, cannot be reassigned.

### Example 1: const TDZ (Same as let)

    // console.log(API_KEY);  // ReferenceError: Cannot access before initialization
    const API_KEY = "abc-123-xyz";
    console.log(API_KEY);     // "abc-123-xyz"

### Example 2: const Must Be Initialized

    // const myVar;  // SyntaxError: Missing initializer in const declaration

    // You MUST assign a value:
    const MAX_RETRIES = 3;
    const BASE_URL = "https://api.example.com";

### Example 3: const Cannot Be Reassigned

    const testName = "Login Test";
    // testName = "Signup Test";   // TypeError: Assignment to constant variable

    const score = 100;
    // score++;                    // TypeError
    // score += 10;                // TypeError

### Example 4: const with Objects (VERY IMPORTANT!)

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

> **NOTE:** `const` protects the BINDING (reference), not the VALUE. Object/array contents can change, but the variable cannot point to a different object/array.

### Example 5: const with Arrays

    const testCases = ["Login", "Signup", "Search"];

    // Modifying contents is ALLOWED:
    testCases.push("Checkout");        // ✅ OK!
    testCases[0] = "OAuth Login";      // ✅ OK!
    testCases.pop();                   // ✅ OK!
    testCases.splice(1, 1);            // ✅ OK!

    // Reassigning is NOT allowed:
    // testCases = [];                 // ❌ TypeError
    // testCases = ["New", "Array"];   // ❌ TypeError

### Example 6: Making Objects Truly Immutable

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

### Example 7: const in Loops

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

🔹 **Q:** If const objects can be modified, what's the point? 💡 **A:** const prevents accidental reassignment (config = {}). Combine with Object.freeze() for deep immutability.

🔹 **Q:** Should I use const for test data objects? 💡 **A:** Yes! const for test data, config, selectors, URLs. You modify properties, not the binding. const + Object.freeze() is safest.

---

## 🟢 SECTION 5: FUNCTION HOISTING

### Function Declarations are FULLY Hoisted

Function declarations are completely hoisted — both name AND body. You can call them BEFORE they appear in code.

### Example 1: Calling Function Before Declaration

    sayHello();  // "Hello, World!" — works perfectly!

    function sayHello() {
        console.log("Hello, World!");
    }

### Example 2: Function Expression is NOT Hoisted

    // greet();  // TypeError: greet is not a function

    var greet = function() {
        console.log("Hi there!");
    };

    greet();  // "Hi there!" — works here

    // WHY? "var greet" is hoisted as undefined.
    // Calling undefined() gives TypeError.

### Example 3: Arrow Function Hoisting

    // runTest();  // ReferenceError: Cannot access 'runTest' before initialization

    const runTest = () => {
        console.log("Running test...");
    };

    runTest();  // "Running test..."

    // Arrow functions with const/let follow TDZ rules.

### Example 4: Function Declaration vs var Expression

    console.log(typeof myFunc);   // "function" (function declaration wins)

    var myFunc = "I am a string";

    function myFunc() {
        return "I am a function";
    }

    console.log(typeof myFunc);   // "string" (var assignment overwrites)

    // During hoisting:
    // 1. var myFunc; (hoisted)
    // 2. function myFunc() {...} (fully hoisted, takes priority)
    // During execution:
    // 3. myFunc = "I am a string"; (overwrites)

### Example 5: Functions Inside Blocks (DON'T DO THIS)

    // BAD (inconsistent behavior across browsers):
    if (true) {
        function test() { return "inside if"; }
    }

    // GOOD (use function expressions):
    let test;
    if (true) {
        test = function() { return "inside if"; };
    }
    console.log(test());  // "inside if"

### Example 6: Named Function Expression

    const factorial = function fact(n) {
        if (n <= 1) return 1;
        return n * fact(n - 1);  // "fact" works here (recursion)
    };

    console.log(factorial(5));  // 120
    // console.log(fact(5));    // ReferenceError: fact is not defined

### Example 7: IIFE (Immediately Invoked Function Expression)

    (function() {
        var secret = "hidden";
        console.log("IIFE executed: " + secret);
    })();

    // console.log(secret);  // ReferenceError (contained in IIFE scope)

    // Arrow IIFE:
    (() => {
        console.log("Arrow IIFE executed!");
    })();

🔹 **Q:** In test frameworks, why are setup functions callable before test blocks? 💡 **A:** Frameworks like Jest/Mocha collect all blocks during registration, then execute in order — similar to hoisting.

🔹 **Q:** Arrow function helper throws ReferenceError. Why? 💡 **A:** Arrow functions with const/let aren't hoisted like function declarations. Define them ABOVE where you call them.

---

## 🟢 SECTION 6: CLASS HOISTING

### Classes are Hoisted but Stay in TDZ

    // const user = new User("Dev");  // ReferenceError

    class User {
        constructor(name) { this.name = name; }
    }

    const user = new User("Dev");  // ✅ Works here
    console.log(user.name);        // "Dev"

### Class Expression — Same TDZ Rules

    // const t = new TestCase();  // ReferenceError

    const TestCase = class {
        constructor(name) { this.name = name; }
    };

    const t = new TestCase("Login");  // ✅

### Class vs Function — Hoisting Comparison

    // Function — fully hoisted:
    const result = add(2, 3);   // 5 ✅
    function add(a, b) { return a + b; }

    // Class — TDZ:
    // const calc = new Calculator();  // ❌ ReferenceError
    class Calculator {
        add(a, b) { return a + b; }
    }
    const calc = new Calculator();  // ✅

🔹 **Q:** Why are classes in TDZ when functions are fully hoisted? 💡 **A:** Deliberate ES6 design. Classes can have inheritance (extends), and using a class before its parent is defined could cause errors. TDZ prevents this.

---

## 🟢 SECTION 7: COMPLETE HOISTING COMPARISON TABLE

| **Feature** | **var** | **let** | **const** | **function decl** | **class decl** |
| --- | --- | --- | --- | --- | --- |
| Hoisted? | Yes | Yes | Yes | Yes (fully) | Yes |
| Initialized during hoist? | Yes (undefined) | No (TDZ) | No (TDZ) | Yes (full body) | No (TDZ) |
| Access before declaration? | undefined | ReferenceError | ReferenceError | Works normally | ReferenceError |
| Scope | Function | Block | Block | Function | Block |
| Re-declarable? | Yes | No | No | Yes | No |
| Re-assignable? | Yes | Yes | No | Yes | Yes |
| Must initialize? | No | No | Yes | N/A | N/A |
| TDZ? | No | Yes | Yes | No | Yes |

---

## 🟢 SECTION 8: COMMON INTERVIEW & QA QUESTIONS

🔹 **Q:** What will output? `console.log(a); var a = 1; console.log(a);` 💡 **A:** `undefined`, then `1`. var is hoisted with undefined.

🔹 **Q:** What will output? `console.log(a); let a = 1;` 💡 **A:** ReferenceError. let is in TDZ.

🔹 **Q:** Can you call a function before defining it? 💡 **A:** Only function declarations. Function expressions and arrow functions cannot.

🔹 **Q:** Output? `var x = 1; function foo() { console.log(x); var x = 2; } foo();` 💡 **A:** `undefined`. Local var x is hoisted inside foo, shadowing global x.

🔹 **Q:** Should helper functions be at top or bottom of test file? 💡 **A:** Function declarations work anywhere (hoisted). const/arrow functions MUST be before use. Best practice: top.

🔹 **Q:** What happens with `let x = x;`? 💡 **A:** ReferenceError! Right-hand x evaluated first, but x is still in TDZ.

🔹 **Q:** Does hoisting work differently in strict mode? 💡 **A:** var/function hoisting is same. In strict mode, functions inside blocks are block-scoped (more predictable).

🔹 **Q:** Output? `console.log(foo); var foo = function bar() { return 42; };` 💡 **A:** `undefined`. var foo hoisted as undefined. The function expression is NOT hoisted.

🔹 **Q:** Why should QA engineers care about hoisting? 💡 **A:** Causes subtle bugs: undefined variables, unavailable functions, shared loop state. Understanding hoisting helps debug flaky tests.

🔹 **Q:** Output? `function test() { return 1; } var test = 2; console.log(typeof test);` 💡 **A:** `'number'`. Function hoisted first, then var assignment overwrites it to 2.

---

## 🟢 SECTION 9: BEST PRACTICES

### The Golden Rules

1. **Use const by default** → Only switch to let when reassignment is needed. Never use var.
2. **Declare at top of scope** — Even with TDZ protection, top declarations improve readability.
3. **Never use var** — ESLint rule: `"no-var": "error"`
4. **Function declarations for hoisted utilities** → **Arrow functions with const** for everything else.
5. **Never declare functions inside blocks** — Use function expressions instead.
6. **let in for loops, const in for...of/for...in**
7. **Enable ESLint rules:**

    {
        "rules": {
            "no-var": "error",
            "prefer-const": "error",
            "no-use-before-define": "error",
            "block-scoped-var": "error"
        }
    }

### Quick Decision Flowchart

| **Question** | **Answer** | **Use** |
| --- | --- | --- |
| Will the value change? | No | const |
| Will the value change? | Yes | let |
| Need function hoisting? | Yes | function declaration |
| Need function as value? | Yes | const + arrow function |
| Old codebase with var? | Refactor! | Replace with let/const |

---

*TheTestingAcademy — JavaScript Hoisting Complete Guide*

---

## String, 2dArray, Callback, Promise, OOps

> 6th AUg 2026

# Closure

A closure is ***when an inner function remembers and can access variables from its outer function,*** even after the outer function has finished executing.

    function startBrowser() {
        let name = "edge";

        function installBrowser() {
            console.log(name);
        }

        return installBrowser;
    }

    const runTc = startBrowser();
    runTc();

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_QaS4KoAVN-q_7ajji1THa.png?ixlib=js-3.8.0)

Unicode - the universal kind of codes which are available for other languages also.

---

> 8th Aug 2026
