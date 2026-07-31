# JavaScript Loops — Detailed Notes

## 1. Introduction

Loops are control flow structures that allow you to execute a block of code **repeatedly** based on a condition. They are fundamental to programming — used for iterating over arrays, retrying operations, processing data, and more.

JavaScript provides several loop types, each suited for different scenarios.

## 2. Learning Objectives

- Understand what a loop is and when to use one.
- Master the `for`, `while`, and `do...while` loop syntax and execution flow.
- Differentiate between pre-increment (`++i`) and post-increment (`i++`) in loops.
- Understand the difference between `while` and `do...while`.
- Write and analyze **nested loops**.
- Use `break` to exit loops early.
- Understand scope behavior (`let` vs `var`) inside loops.
- Avoid common loop pitfalls (infinite loops, off-by-one errors).

## 3. Types of Loops in JavaScript

| Loop Type | Syntax | Condition Check | Min Executions | Best For |
|-----------|--------|-----------------|----------------|----------|
| **for** | `for (init; cond; inc) { }` | Before each iteration | 0 | Known number of iterations |
| **while** | `while (cond) { }` | Before each iteration | 0 | Unknown iterations, condition-driven |
| **do...while** | `do { } while (cond);` | After each iteration | 1 | Must execute body at least once |

---

## 4. The `for` Loop

### Syntax

```javascript
for (initialization; condition; increment/decrement) {
    // body — code to repeat
}
```

### Three Parts Explained

| Part | Purpose | When It Runs |
|------|---------|--------------|
| `initialization` | Set up the loop counter | **Once**, before the loop starts |
| `condition` | Check if loop should continue | **Before every iteration** (including first) |
| `increment/decrement` | Update the counter | **After each iteration's body** |

### Execution Flow

```
1. Initialization (runs once)
       │
       ▼
2. Condition check → false → EXIT LOOP
       │ true
       ▼
3. Execute body
       │
       ▼
4. Increment/Decrement
       │
       └──→ Back to step 2
```

### Example from `01_for_loop.js`

```javascript
for (let index = 0; index < 10; index++) {
    console.log(index);
}
```

| Iteration | index (before body) | Condition (`index < 10`) | Output | After increment |
|-----------|---------------------|--------------------------|--------|-----------------|
| 1 | 0 | true | 0 | 1 |
| 2 | 1 | true | 1 | 2 |
| 3 | 2 | true | 2 | 3 |
| ... | ... | ... | ... | ... |
| 10 | 9 | true | 9 | 10 |
| Exit | 10 | **false** | — | — |

### Pre-increment vs Post-increment in `for` Loops

From `01_for_loop.js`:

```javascript
// Post-increment — index is used, then incremented
for (let index = 0; index < 10; index++) {
    console.log(index);
}

// Pre-increment — index is incremented, then used
for (let index = 0; index < 10; ++index) {
    console.log(index);
}
```

**Key insight:** In a `for` loop, `index++` and `++index` behave the **same** because the increment expression is evaluated independently of the body. The difference only matters when the result of the increment expression is used in a larger expression.

### All Three Parts Are Optional

```javascript
// Infinite loop (all parts optional)
for (;;) {
    // runs forever unless break is used
}

// Initialization outside
let i = 0;
for (; i < 10; i++) {
    console.log(i);
}
```

---

## 5. The `while` Loop

### Syntax

```javascript
while (condition) {
    // body — runs while condition is true
}
```

### Execution Flow

```
      ┌──→ Condition → false → EXIT
      │       │ true
      │       ▼
      └─── Body
```

### Example from `05_while_loop.js`

```javascript
let j = 0;
while (j < 10) {
    console.log(j);
    j++;
}
```

### Key Characteristics

- Condition is checked **before** the body.
- The body may **never execute** if the condition is initially `false`.
- The counter/variable must be updated **inside** the body (unlike `for`).

### Breaking Out of `while(true)` — from `08_while_vs_for_loop.js`

```javascript
let i = 7;
while (true) {
    if (i > 10) {
        break;
    }
    console.log(i);
    i++;
}
// Prints: 7, 8, 9, 10
```

A `while (true)` loop runs indefinitely until a `break` statement exits it.

---

## 6. The `do...while` Loop

### Syntax

```javascript
do {
    // body — runs at least once
} while (condition);
```

### Execution Flow

```
      ┌── Body (runs first)
      │       │
      │       ▼
      └── Condition → true → back to body
              │ false
              ▼
             EXIT
```

### Example from `09_do_while_loop.js`

```javascript
let retry = 0;
do {
    console.log("Executing the code : Retrying......." + retry);
    retry++;
} while (retry < 5);
```

### Key Characteristics

- Condition is checked **after** the body.
- The body **always executes at least once**, even if the condition is `false`.
- Useful when you need an action to happen before checking a condition (e.g., retry logic, user prompts).

---

## 7. `while` vs `do...while` Comparison

From `10_dowhile_vs_while.js`:

```javascript
// while — may never run
let i = 10;
while (i < 10) {
    console.log(i);  // Never executes
    i++;
}

// do...while — always runs at least once
let j = 10;
do {
    console.log("Do While : " + j);  // Runs once: "Do While : 10"
    j++;
} while (j < 10);
```

| Aspect | `while` | `do...while` |
|--------|---------|--------------|
| Condition check | Before body | After body |
| Guaranteed execution | No (0 times) | Yes (at least 1 time) |
| Use case | Skip if condition false | Must execute at least once |

---

## 8. `for` vs `while` Comparison

From `05_while_loop.js`:

```javascript
// for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// while loop (equivalent)
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
```

| Aspect | `for` | `while` |
|--------|-------|---------|
| Initialization | Inside loop header | Outside (manually) |
| Condition | In header | In parentheses |
| Update | In header (auto) | Inside body (manual) |
| Best for | Known iteration count | Unknown iteration count, condition-driven |
| Risk of forgetting update | Low (part of syntax) | High (must remember inside body) |

---

## 9. Nested `for` Loops

From `11_nested_for_loop.js`:

```javascript
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        console.log(i, j);
    }
}
```

### Execution

| Outer i | Inner j iterations | Total `console.log` calls |
|---------|-------------------|---------------------------|
| 0 | 0, 1, 2, 3, 4 | 5 |
| 1 | 0, 1, 2, 3, 4 | 5 |
| 2 | 0, 1, 2, 3, 4 | 5 |
| 3 | 0, 1, 2, 3, 4 | 5 |
| 4 | 0, 1, 2, 3, 4 | 5 |
| **Total** | | **25** |

- For each iteration of the outer loop, the **entire inner loop runs completely**.
- Output pairs: `(0,0) (0,1) (0,2) (0,3) (0,4) (1,0) ... (4,4)`
- Nested loops are commonly used for:
  - Working with 2D arrays (matrices, grids).
  - Generating patterns (multiplication tables, star patterns).
  - Comparing elements across arrays.

---

## 10. The `break` Statement

`break` exits the loop **immediately**, regardless of the condition.

```javascript
let i = 7;
while (true) {
    if (i > 10) {
        break;  // exits the while loop
    }
    console.log(i);
    i++;
}
// Output: 7, 8, 9, 10
```

### `break` in Nested Loops

Without a label, `break` only exits the **innermost** loop.

```javascript
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) break;  // only exits inner loop
        console.log(i, j);
    }
}
```

---

## 11. Common Mistakes & Pitfalls

| Mistake | Example | Problem |
|---------|---------|---------|
| **Infinite loop** | `while (true) { }` without `break` | Blocks the thread, freezes the program |
| **Off-by-one** | `i <= 10` when `i < 10` was intended | Runs one extra iteration |
| **Forgetting increment** | `while (i < 10) { ... }` without `i++` | Infinite loop |
| **Wrong condition** | `i > 0` instead of `i < 10` | Loop may never run |
| **Using `var` in loops** | `for (var i = 0; ...)` | Hoisting issues, shared scope with async callbacks |

---

## 12. Loop Scope: `let` vs `var`

```javascript
// let — block-scoped (recommended)
for (let i = 0; i < 3; i++) {
    // i exists only inside this block
}
// console.log(i);  // ReferenceError: i is not defined

// var — function-scoped (not recommended in loops)
for (var j = 0; j < 3; j++) {
    // j is hoisted
}
console.log(j);  // 3 — j exists outside the loop!
```

---

## 13. Key Takeaways

- **`for` loop**: Use when you know the exact number of iterations. All three parts (init, condition, increment) are optional.
- **`while` loop**: Use when iterations are condition-driven. May never execute if condition is initially false.
- **`do...while` loop**: Use when the body must execute **at least once**, regardless of condition.
- **Pre/post increment**: In `for` loop headers, `i++` and `++i` behave identically.
- **`break`**: Exits the loop immediately. Useful with `while (true)` for mid-loop exits.
- **Nested loops**: Inner loop runs completely for each outer loop iteration. Total iterations = outer × inner.
- **`let` is block-scoped**: Always prefer `let` (or `const`) in loops to avoid hoisting issues.
- **Infinite loops block JavaScript**: Since JS is single-threaded, an infinite loop freezes the entire program.
- **`while (true)` + `break` pattern**: A clean way to exit from the middle of a loop.
