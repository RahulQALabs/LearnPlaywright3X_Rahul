# Additional Topics — FizzBuzz, Guard Clauses, Triangle Fix, Truthy/Falsy Code (Statements)

The statements chapter notes are comprehensive, but the runnable code is thin — and two files are broken. This adds the missing executable patterns.

## 1. FizzBuzz — The #1 Interview Screening Question

The classic trap: check "divisible by both" **first**, otherwise 15 prints "Fizz" instead of "FizzBuzz".

```javascript
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {            // divisible by 3 AND 5 — check FIRST
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz(15);
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
```

## 2. Guard Clauses / Early Return

Instead of deep nesting, return early when a condition fails. This is the modern framework style.

```javascript
// Nested version (hard to read):
function login(user, pass) {
    if (user) {
        if (pass) {
            if (pass.length >= 6) {
                return "Login OK";
            }
            return "Password too short";
        }
        return "Password required";
    }
    return "Username required";
}

// Guard clause version (flat, readable):
function login(user, pass) {
    if (!user) return "Username required";
    if (!pass) return "Password required";
    if (pass.length < 6) return "Password too short";
    return "Login OK";
}
```

**Why it matters in testing:** validation helpers, config loaders, and assertion utilities use guard clauses everywhere.

## 3. The Triangle Classifier — Fixed

Your `05_IQ_Triangles.js` had 3 bugs: split into characters instead of spaces, `==` chaining, and no valid-triangle check. Here's the correct version:

```javascript
function classifyTriangle(a, b, c) {
    // Guard clauses: validate input
    if (a <= 0 || b <= 0 || c <= 0) return "Invalid — sides must be positive";
    if (a + b <= c || b + c <= a || a + c <= b) return "Invalid — not a triangle";

    // Classification
    if (a === b && b === c) return "Equilateral";
    if (a === b || b === c || a === c) return "Isosceles";
    return "Scalene";
}

console.log(classifyTriangle(5, 5, 5));    // Equilateral
console.log(classifyTriangle(5, 5, 7));    // Isosceles
console.log(classifyTriangle(3, 4, 5));    // Scalene
console.log(classifyTriangle(1, 1, 5));    // Invalid — not a triangle
```

**The bug explained:** `a == b == c` evaluates as `(a == b) == c` — a boolean compared to a number. Always use `a === b && b === c`.

## 4. Truthy/Falsy in Runnable Conditions

The notes list falsy values; here's what they actually do in conditions:

```javascript
const falsyValues = [false, 0, "", null, undefined, NaN];

falsyValues.forEach(value => {
    if (value) console.log(value, "→ truthy");
    else console.log(String(value), "→ falsy");
});

// Surprises:
if ("0") console.log('"0" is truthy');      // runs!
if ("false") console.log('"false" is truthy');  // runs!
if ([]) console.log("[] is truthy");        // runs!
if ({}) console.log("{} is truthy");        // runs!
```

## 5. `===` vs `==` Inside Real Conditions

```javascript
function checkResult(value) {
    if (value == 0) console.log("loose: matched 0");    // 0, "0", false all match
    if (value === 0) console.log("strict: matched 0");  // only real 0
}
checkResult("0");   // loose only
checkResult(0);     // both

// The classic bug — checking for "not empty":
let name = "0";    // a valid non-empty value!
if (name != "") console.log("has name");   // works
if (name) console.log("has name (truthy)"); // also works
```

**Framework rule:** always `===`/`!==` in test assertions to avoid coercion surprises.

## 6. Chained Comparison — The `a == b == c` Trap

```javascript
console.log(1 == 1 == true);   // true — (1==1)=true, true==true → true (accident)
console.log(1 == 2 == false);  // true — (1==2)=false, false==false → true (accident!)
console.log(2 == 2 == 1);      // false — (2==2)=true, true==1 → false

// Correct way:
console.log(1 === 1 && 1 === 1);  // true
```

**Rule:** never chain comparisons — chain with `&&` instead.

## 7. Assignment Inside Condition (The Trap)

```javascript
let x = 0;
// if (x = 5) { ... }   // assigns 5 (truthy) — always true, BUG!
if (x === 0) console.log("x is 0");  // correct — comparison

// Guard pattern that uses assignment intentionally:
const value = document?.querySelector("#input")?.value;
if (value) console.log("has value");
```
