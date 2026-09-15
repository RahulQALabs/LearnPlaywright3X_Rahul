# JavaScript Functions — Detailed Notes

## 1. Introduction

A **function** is a reusable block of code that performs a specific task. Instead of writing the same logic again and again, you define it once and call it whenever you need it.

Functions are everywhere in real development: validating test scores, greeting users, validating HTTP status codes, reusing setup logic, and more.

## 2. Learning Objectives

- Understand why functions exist (reusability).
- Learn the difference between defining and calling a function.
- Understand the `return` keyword and what a function returns by default.
- Master the 4 types of functions based on parameters and return type.
- Use template literals inside functions.
- Understand function expressions (functions stored in variables).
- Write arrow functions — single-line and multiline.
- Understand IIFEs (Immediately Invoked Function Expressions) and arrow IIFEs.
- Apply functions to real testing scenarios (API status validation).

## 3. Why Functions?

From `01_function.js`:

```javascript
// Without Function — repeated code
let score1 = 90;
let result1 = score1 > 70 ? "pass" : "fail";
console.log("Score1: " + result1);

let score2 = 50;
let result2 = score2 > 70 ? "pass" : "fail";
console.log("Score2: " + result2);

// With Function — write once, reuse many times
function result(scr) {
    return scr > 70 ? "pass" : "fail";
}

console.log(result(80));  // "pass"
console.log(result(50));  // "fail"
console.log(result(70));  // "fail"
console.log(result(40));  // "fail"
console.log(result(90));  // "pass"
```

Without a function, every new score needs the same lines repeated. With a function, you just call `result(score)` — the logic lives in one place.

## 4. Defining vs Calling

From `02_function.js`:

```javascript
// Define — this only creates the function, nothing runs
function test() {
    console.log("Hello!");
}

// Call — this actually executes the body
function sayHello() {
    console.log("Hello Rahul");
}

sayHello();              // prints "Hello Rahul"
console.log(sayHello()); // prints "Hello Rahul" then "undefined"
```

Key insight: **defining** a function does nothing by itself. The code inside only runs when you **call** it with `()`. And if a function has no `return`, calling it produces `undefined` — which is why `console.log(sayHello())` prints `undefined` after the greeting.

## 5. The 4 Types of Functions

Based on whether a function takes parameters and whether it returns a value, there are 4 types.

### Type 1 — No Parameter, No Return

From `03_type_1_basic_fn.js`:

```javascript
function greet() {
    console.log("Hi........");
}

greet();  // prints "Hi........"

let output = greet();   // prints "Hi........"
console.log(output);    // undefined — nothing was returned
```

Takes nothing, returns nothing. It just does its job (usually printing).

### Type 2 — With Parameter, No Return

From `04_type_2_basic_fn.js`:

```javascript
function greetByName(name) {
    console.log("Hi.." + name);
}

greetByName("Rahul");    // "Hi..Rahul"
greetByName("Monu");     // "Hi..Monu"
greetByName("Archana");  // "Hi..Archana"
greetByName("Lucky");    // "Hi..Lucky"
greetByName("Saanvi");   // "Hi..Saanvi"

let result = greetByName("Rahul");
console.log(result);     // undefined — no return
```

Takes an input (`name`) but returns nothing. Great for logging or side effects, but you can't capture its output.

### Type 3 — No Parameter, With Return

From `05_type_3_basic_fn.js`:

```javascript
function sayHello() {
    console.log("Hi");
    return "Hello";
}

console.log(sayHello());  // prints "Hi" then "Hello"
let result = sayHello();  // prints "Hi"
console.log(result);      // "Hello"

function greetByHi() {
    return "Hi";
}

let res = greetByHi();
console.log(res);  // "Hi"
```

Returns a value the caller can use. Note that `console.log` inside still runs — `return` gives back the value, it doesn't stop the logging that already happened.

### Type 4 — With Parameter, With Return

From `06_type_4_basic_fn.js`:

```javascript
function sumOfTwoNumbers(a, b) {
    return a + b;
}

let result = sumOfTwoNumbers(4, 3);
console.log(result);  // 7
```

The most complete type — takes inputs, processes them, and returns a result.

| Type | Parameters | Return | Example |
|------|-----------|--------|---------|
| 1 | ❌ No | ❌ No | `function greet() { console.log("Hi"); }` |
| 2 | ✅ Yes | ❌ No | `function greetByName(name) { console.log("Hi " + name); }` |
| 3 | ❌ No | ✅ Yes | `function greetByHi() { return "Hi"; }` |
| 4 | ✅ Yes | ✅ Yes | `function sum(a, b) { return a + b; }` |

## 6. Template Literals

From `07_template_literal.js`:

```javascript
function greetByName(name) {
    return `Hello! ${name}`;
}

console.log(greetByName("Saanvi"));   // "Hello! Saanvi"
console.log(greetByName("Rahul"));    // "Hello! Rahul"

let result = greetByName("Saanvi");
console.log(result);  // "Hello! Saanvi"
```

Template literals use **backticks** `` ` `` and `${}` for interpolation. Cleaner than `"Hi.." + name` concatenation — no `+` signs needed.

## 7. Function as Expression

From `08_function_as_expression.js`:

```javascript
function greet1(name) {
    return `Hello! ${name}`;
}

// Function as Expression — a function stored in a variable
const greet2 = function(name) {
    return `Hello! ${name}`;
}

console.log(greet1("Rahul"));  // "Hello! Rahul"
console.log(greet2("Lucky"));  // "Hello! Lucky"
```

Both functions work the same way. The difference: `greet1` is a **function declaration** (named, hoisted), while `greet2` is a **function expression** — an anonymous function assigned to a `const` variable.

## 8. Arrow Functions

From `09_arrow_function.js` and `10_arrow_function.js`:

```javascript
function greet1(name) {
    return `Hello! ${name}`;
}

// Arrow Function — remove: function keyword, function name,
// return keyword, and curly braces (for single expressions)
const greet2 = (name) => `Hello ${name}!`;

console.log(greet1("Rahul"));  // "Hello! Rahul"
console.log(greet2("Lucky"));  // "Hello Lucky!"
```

### How to convert a normal function to an arrow function

1. Remove the `function` keyword.
2. Remove the function name (store it in a `const` instead).
3. Remove the `return` keyword (single-expression arrows return implicitly).
4. Remove the curly braces (only for single expressions).

### Single Parameter Arrow

```javascript
const doubleA = (a) => a * 2;
console.log(doubleA(10));  // 20
```

### No Parameter Arrow

```javascript
const doubleB = () => "Staging";
console.log(doubleB());  // "Staging"
```

⚠️ If you reference a variable that doesn't exist, you get a `ReferenceError`:

```javascript
const doubleB = () => b * 2;  // ReferenceError: b is not defined
```

### Multiline Arrow Function

When the logic has multiple statements, you need curly braces **and** an explicit `return`:

```javascript
const getResult = (score) => {
    if (score > 70) return "pass";
    return "fail";
}

console.log(getResult(98));  // "pass"
console.log(getResult(50));  // "fail"
```

⚠️ You can't declare the same name twice:

```javascript
function doubleMe(a) {
    return a * 2;
}
const doubleMe = (a) => a * 2;  // SyntaxError: Identifier 'doubleMe' has already been declared
```

## 9. Real-World Example — API Status Validation

From `11_api_real.js` — the same logic written 3 ways:

```javascript
// Way 1 - Normal Function
function validateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}

// Way 2 - Function as Expression
const validateStatusCode_Exp = function (status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}

// Way 3 - Arrow Function
const validateStatusCode_Exp1 = (status) => {
    if (status >= 200 && status <= 300)
        console.log("Request is fine!");
}
```

All three do the same thing. This is a very common testing pattern — checking whether an API response is successful. The arrow version is the shortest and most readable for this kind of quick validation.

## 10. IIFE — Immediately Invoked Function Expression

From `12_function.js`:

```javascript
// Normal function — must be called
function name1() {
    console.log("Hi I am Rahul Gupta!");
}
name1();  // "Hi I am Rahul Gupta!"

// IIFE — Anonymous function that calls itself
(function () {
    console.log("Anonymous Function");
})();  // "Anonymous Function"

// Arrow IIFE ("Arrow Crazy" / "Empty Arrow")
(() => {
    console.log("Setup Complete");
})();  // "Setup Complete"
```

### Why IIFEs?

- They **don't need to be called** — they execute immediately when defined.
- The function is **anonymous** (no name).
- The `()` at the end invokes it right away.
- Useful for **one-time initialization** — like setting up test data or configuration at the start of a test suite.

## 11. Key Takeaways

- **Functions = reusability**: write logic once, call it many times.
- **Define vs call**: defining creates the function, calling with `()` executes it.
- **4 types**: no param/no return, param/no return, no param/return, param/return.
- **No `return` → `undefined`**: a function without `return` returns `undefined`.
- **`return` vs `console.log`**: `return` hands a value to the caller; `console.log` only prints.
- **Template literals**: `` `Hello! ${name}` `` is cleaner than `"Hello! " + name`.
- **Function expression**: `const greet2 = function(name) {...}` — stored in a variable.
- **Arrow functions**: `(name) => \`Hello ${name}\`` — short, implicit return for single expressions.
- **Multiline arrows**: need `{}` and explicit `return`.
- **Arrow with no params**: `() => "Staging"`.
- **IIFE**: `(function(){...})()` runs immediately; `(() => {...})()` is the arrow version.
- **Real testing use**: arrow functions are perfect for status-code and score validations.
