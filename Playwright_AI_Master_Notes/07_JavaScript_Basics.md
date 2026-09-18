# Variables, Data Types, Operators, Statements, Input & Loops

> Extracted from the supplied 3x Playwright + AI Mastery notes. Content is organized by topic; the original wording/examples are retained.

# Javascript Basics

1. Keywords
2. Identifiers
3. Literals
4. Operators

let x= 10;

let x= 10;

let - Keyword

x → Identifier / Variable Name

= → Operator

10 → Literal / Variable Value

## Keyword

These are nothing but a reserved word in the particular programming language.

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_5LqWjqxVOhxSiYdofuYnp.png?ixlib=js-3.8.0)

break, case, catch, class, const, continue, debugger, default, delete, do, else, export, extends, finally, for, function, if, import, in, instanceof, new, return, super, switch, this, throw, try, typeof, var, void, while, with, yield, implements, interface, let, package, private, protected, public, static, enum, await, as, async, from, get, of, set, target, true, false, null, undefined

# Identifier / Variable name.

- identifier is the name given to the variable. It's a **variable name.**
- Identifier has certain rules that you need to follow

Rules that you have to follow for the identifier.

let **x** = 10;

# Operator

(=) → is the one of the type of operator. Operators work with the operands to perform a particular task. This time, the normal equal to operator is just used to assign the literal value to identifier.

let x **=** 10;

# Variable

a variable is something which will store some value, it is like a container which can store some value, variables are used so that we can change their value later.

var v = 10;

v → identifier ->variable name

= → operator

10 → Literal

; → end of the statement or line terminator ( it is optional but advisable to add)

---

## const

const c = 10;

const PI = 3.14;

~~PI = 10; not possible~~

const → once the value is assigned, it cannot be changed , it has a fixed value in this case

---

## var vs let vs const

---

## Rules for the Identifier for the Javascript

    • Must begin with a letter (a–z, A–Z), underscore (_), or dollar sign ($).
    • Subsequent characters may also include digits (0–9).
    • Cannot start with a digit.
    • Cannot be a reserved keyword.
    • Are case-sensitive.
    • May contain Unicode letters and Unicode escape sequences.
    • Cannot contain spaces, hyphens, or special characters (except _ and $).

    let age = "pramod"; //  String Lietal
    let isStudent = true; // This is a boolean literal assigned to the variable 'isStudent'.
    let pi = 3.14; // This is a numeric literal assigned to the variable 'pi'.
    let name = 'Alice'; // This is a string literal assigned to the variable 'name'.
    let nullValue = null; // This is a null literal assigned to the variable 'nullValue'.
    let undefinedValue; // This variable is declared but not assigned, so it has the value 'undefined'.
    let pi2 = 3; // numeric literal

    // Numric Literal - Numeric
    // 1. int
    // 2. float

    // typeof - operatr - It will tell you what is a data type that it has.
    console.log(typeof age);
    console.log(typeof pi);
    console.log(typeof pi2);
    console.log(typeof isStudent);
    console.log(typeof nullValue);
    console.log(typeof undefinedValue);

---

> 14th July 2026

## How Create a variable in JavaScript ?

1. var
2. let
3. const

Operator, Functions → Hoisting, TDZ

### `var` → the old way, `var` was the original keyword in JavaScript.

> It is **function-scoped**, can be **redeclared**, can be **reassigned**, and gets **hoisted** to the top of its scope with an initial value of `undefined`.

- Function
- Hoisted
- TDZ

    var v = 10;
    var browser = "chrome";
    browser = "edge"; // reassignment allowed

---

### `let` → the modern way for changing values

`let` is **block-scoped** (lives only inside `{ }`), can be **reassigned**, but **cannot be redeclared** in the same scope. It is **hoisted** but not initialized, so accessing it before declaration throws a `ReferenceError`.

- Block Scoped
- **hoisted**

> let x = 10;

> let retryCount = 0;

> retryCount = retryCount + 1;

---

### `const` → for values that should not change

const pi = 3.14;

pi = 5; ❌

---

## Primitive Data Type

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_6DRdG0_JPKCSFh-ixEhuw.png?ixlib=js-3.8.0)

**Non** Primitive **Data**

1. Array, Functions and Objects.
2.

string -. collection of characters (h,e,l,l,o ) → helllo

---

# Operator

> let result **=** 5+3;

## Assignment Operators

- =
- to assign the right hand side value to the left side.
- let x = 10;
- x = 30;
-

## Arithmetic Operators

    // Arithmetic Operators

    let sum = a + b;
    let sub = a - b;
    let mul = a * b;
    let div = a / b;

    console.log(sum);
    console.log(sub);
    console.log(mul);
    console.log(div);

OR GATE

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_qIHmaASwg6TAOFo5h1HDG.png?ixlib=js-3.8.0)

And Gate

[image.png](https://eraser.imgix.net/workspaces/aGf8WeO8HWibzTxOSvQn/WWS31TdyovhjTB1TVo9v2jWpPei1/image_tDVFHqfk1LReqLX1D6BVp.png?ixlib=js-3.8.0)

## 3. Comparison Operators

    5 == "5"    // true  (loose equality - compares value only)
    5 === "5"   // false (strict equality - compares value + type)
    5 != "5"    // false
    5 !== "5"   // true
    5 > 3       // true
    5 < 3       // false
    5 >= 5      // true
    5 <= 4      // false

## 4. Logical Operators

[image.png](https://eraser.imgix.net/workspaces/Tz63v1Pz52oXHd70LdyM/WWS31TdyovhjTB1TVo9v2jWpPei1/image_GBnhn5CiFqZozG5ajQQJX.png?ixlib=js-3.8.0)

    true && false   // false (AND - both must be true)
    true || false   // true  (OR - at least one true)
    !true           // false (NOT - flips the value)

#### The Core Difference

- === **(strict equality)** — checks **both value AND datatype**. No conversion.
- **`==`** **(loose equality)** — checks **value only**, after converting both sides to the same type (type coercion).

---

> 16th July 2026

# Operators - Part 2

## 5. String Operators

"Hello" + " World"

## 6. Ternary (Conditional) Operator

    // ## Ternary (Conditional) Operator
    // condition, either this or either that.
    let age = 20;
    let is_pramod_will_go_to_goa = age > 18 ? "Yes" : "No";
    console.log(is_pramod_will_go_to_goa);

    // condition ?  value(if true)  : value (if false)

    let responseTime = 850;  // ms
    let sla = 1000;          // ms
    let slaStatus = responseTime <= sla ? "Within SLA ✅" : "SLA breached ❌";
    console.log(`Response: ${responseTime}ms — ${slaStatus}`);
    // Template Literal
    console.log(`What is the SLA time ? - ${sla}`);

## Nested Ternary (Conditional) Operator

    let temp = 35;
    let feel = (temp >= 40) ? "Very Hot" :
        (temp >= 30) ? "Hot" :
            (temp >= 20) ? "Warm" :
                (temp >= 10) ? "Cool" : "Cold";
    console.log("7. Temperature:", temp, "| Feel:", feel);

# Task Given to Student for Practice

[app.thetestingacademy.com/student/coding-practice](https://app.thetestingacademy.com/student/coding-practice)

## 7. Type Operators

console.log(typeof "hello"); console.log(typeof 123); // int → number console.log(typeof 31.4); // float → number // typeof true // typeof undefined → undefined // typeof null → object // typeof [] -> object console.log(typeof []); // → object

---

## 8. Bitwise Operators

these operators are mostly used in electronics, if you have remembered. Anyone from electronics and communication

    5 & 1    // 1  (AND)
    5 | 1    // 5  (OR)
    5 ^ 1    // 4  (XOR)
    ~5       // -6 (NOT)
    5 << 1   // 10 (Left shift)
    5 >> 1   // 2  (Right shift)
    www.rapidtables.com/

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_Mg2alJtgZBr0N-uPVG5zJ.png?ixlib=js-3.8.0)

**To run the JS Test**

> **node** 23_test.js

**&& - || , Logical Operato**r

&&, || - Logical And gate,

true && true → true

    0 && "hello"     // 0        (left is falsy, short-circuits, returns left)
    1 && "hello"     // "hello"  (left is truthy, returns right)
    true && false    // false

    false && sideEffect()   // sideEffect() never runs — right side is skipped

**&,| → Bitwise And, Or**

5 & 3 // 1

---

# Operators

1. Assignment
2. Logical
3. Arithemtic
4. Comparsion
5. String Concat
6. Type
7. Bitwise
8. Ternary
9. **Increment and Decrement - Cover**

> If-Else, Switch, User INPUT, Loops, Arrays, Funtions, TDZ, Hoisting.

> 18th July 2026

# Increment and Decrement - Cover

**Increment**

1. Pre Increment → ++a;
2. Post Increment → a++;

**Decrement**

1. Pre Decrement → --a;
2. Post Decrement → a--;

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_zqBC3GeqWwyo7wghf0u3Z.png?ixlib=js-3.8.0)

---

# Statement

if and else

- The `if/else` statement is JavaScript's most fundamental decision-making tool.
- It executes a block of code if a condition evaluates to `true`, and optionally runs a different block if the condition is `false`.
- You can chain multiple conditions using `else if`.
- if (condition) { // runs if condition is true } else if (anotherCondition) { // runs if anotherCondition is true } else { // runs if ALL conditions are false }

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_tvVmKiu33K6JWhgzbL3sU.png?ixlib=js-3.8.0)

[www.hackerrank.com/contests/7days-javascript/challenges](https://www.hackerrank.com/contests/7days-javascript/challenges)

---

> 21th July 2026

## Switch Statement in JavaScript

The `switch` statement evaluates an expression once and then compares **it against multiple** **`case`** **values.**

expression → case 1, case 2, case 4..... default....

- When a match is found, the code for that case runs.
- It is cleaner than long if/else if chains when comparing a SINGLE value against many options.
- Switch uses **strict comparison (===)**.

**Q:** What is the difference between `if(x == 5)` and `if(x === 5)` in testing?

Always use **`===`** (strict equality) in tests. `==` does type coercion: `"5" == 5` is true but `"5" === 5` is false. In QA, strict equality catches type bugs.

    switch (expression) {
        case value1:
            // code block
            break;       // IMPORTANT: stops fall-through
        case value2:
            // code block
            break;
        default:
            // runs if no case matches (optional)
    }

**Q:** What happens if you forget the `break` statement?

**A:** The code "falls through" and executes ALL subsequent cases until it hits a `break` or the switch ends. This is the #1 switch bug. Always include break unless fall-through is intentional (and add a `// fall-through` comment).

---

## Concepts covered

- **`switch (expr)`** — evaluates `expr` once, then matches against each `case` .
- **`case`** **matching** — comparison is **strict (`===`** **)**, no type coercion.
- **`break`** — exits the switch. Without it, execution **falls through** to the next case.
- **`default`** — runs when no `case` matches. Position doesn't matter, but conventionally last.
- **Grouped cases** — stacking `case` labels with no body in between shares one block of code.
- **`switch (true)`** — idiom for range/boolean checks (each `case` becomes a condition).
- **Duplicate** **`case`** **values** — legal syntactically; the **first** match wins, the rest are dead code.
- **Block scoping in cases** — `let` / `const` inside a `case` need braces `{ }` if reused across cases.

---

# How to take the User Input?

1. Normal JS -
  1. prompt

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_fuAbVyql573exmAdvgJdP.png?ixlib=js-3.8.0)

2. JS in Browser or outside?
  1. **Node JS - Most used**
  1. **`const data`**`= require('fs').readFileSync(0, 'utf8');`
  2. HackerRank
  3.

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_XpbKNtfg0mLep8KghJpYy.png?ixlib=js-3.8.0)

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_6N_1Zv1DeyPQcBHL1pJKV.png?ixlib=js-3.8.0)

---

> 23th July 2026

## Loops

Loop basically means a task that you want to do multiple times, or a simple task that you want to have repeated in.

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_5bTrj23DZsBKlR9zjXZAv.png?ixlib=js-3.8.0)

---

# For Loop

## For ( I, C, U)

I - Init / - initialization

C - Condition

U - Updation - You can use whichever you want pre or post, (we are using the the variable in the next) , // i++,++i

`for(let i=0; i<10; i++){`

console.log(i)

}

---

# WHILE LOOP

while is generally used when you want to have a condition as the main

// While Loop - Sister (For) // I,C,U

    let attempt = 0; // Init - 1

    while(attempt < 3){ // Condition - 2
    console.log(attempt);
    attempt++; // UPDATION - 3

    }

---

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_UnFGw5j0mJaJZpwAW0XaK.png?ixlib=js-3.8.0)

---

Big Sister

# do while loop

> retrying a flaky action at least once

will always execute at least one time

---

> For ,

> For of, For in, ForEach → They will come when we use the Array!

---

> For loop, with the For loop- Matrix

---

**Q1. [Easy]** Which loop is guaranteed to execute its body **at least once**, even when its condition is initially false?

- A) `for`
- B) `while`
- C) `do…while`
- D) All three

**Q2. [Easy]** What is the output?

    for (let i = 0; i < 3; i++) {
      console.log(i);
    }

- A) 0 1 2
- B) 1 2 3
- C) 0 1 2 3
- D) 1 2

**Q3. [Easy]** What is the output?

    let i = 0;
    while (i < 5) {
      i++;
    }
    console.log(i);

- A) 4
- B) 5
- C) 0
- D) Infinite loop

---

**Q4. [Easy]** What is the output?

    let i = 10;
    do {
      console.log(i);
    } while (i < 5);

- **A) Prints 10**
- B) Prints nothing
- C) Prints 10 five times
- D) Infinite loop

**Q5. [Easy]** What is the output?

    let count = 0;
    for (let i = 5; i < 5; i++) {
      count++;
    }
    console.log(count);

- A) 0
- B) 5
- C) 1
- D) Infinite loop

---

> 25th July 2026

> Agent Skill Master 1, 2 - Playwright - SKILL.md
