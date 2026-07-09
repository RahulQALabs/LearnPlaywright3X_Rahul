# JavaScript Loops — IQ Notes

> **Topic:** How JavaScript loops work — covering `for`, `while`, `do...while`, `for...of`, `for...in` — their execution flow, performance differences, use cases, and common interview questions. Loops are one of the most fundamental concepts tested in JavaScript interviews, from basic syntax to advanced performance considerations.

---

## Table of Contents

1. [Interview Questions](#-interview-questions)
2. [Concept: JavaScript Loop Types](#-concept-javascript-loop-types)
3. [Loop Comparison Table](#-loop-comparison-table)
4. [The for Loop Execution Flow](#-the-for-loop-execution-flow)
5. [Pipeline Diagram](#-pipeline-diagram)
6. [Real-World Examples & Edge Cases](#-real-world-examples--edge-cases)
7. [Language-Specific Behavior](#-language-specific-behavior)
8. [Interview Tips & Common Mistakes](#-interview-tips--common-mistakes)
9. [Key Takeaways](#-key-takeaways)

---

## 🎯 Interview Questions

### Basic Level

**Q1. What are the different types of loops available in JavaScript?**

**Answer:** JavaScript provides 5 main looping constructs:

| Loop Type | Syntax | Use Case |
|---|---|---|
| **for** | `for (init; condition; update) { }` | When you know the exact number of iterations |
| **while** | `while (condition) { }` | When you don't know the count, loop until condition is false |
| **do...while** | `do { } while (condition);` | When you need at least one execution guaranteed |
| **for...of** | `for (const item of iterable) { }` | Iterating over iterable objects (arrays, strings, maps, sets) |
| **for...in** | `for (const key in object) { }` | Iterating over enumerable properties of an object |

---

**Q2. What is the difference between `for...of` and `for...in`?**

**Answer:**

| Feature | `for...of` | `for...in` |
|---|---|---|
| **Iterates over** | **Values** of an iterable | **Keys/property names** of an object |
| **Works with** | Arrays, strings, Maps, Sets, NodeLists, generators | Plain objects, arrays (not recommended) |
| **Includes prototype?** | No — only own iterable values | Yes — includes inherited enumerable properties |
| **Use case** | "Give me each value" | "Give me each key" |
| **ES version** | ES6 (2015) | ES1 (original) |

```javascript
const arr = ['a', 'b', 'c'];

for (const val of arr) {
    console.log(val);  // 'a', 'b', 'c' — VALUES
}

for (const key in arr) {
    console.log(key);  // '0', '1', '2' — INDICES (as strings!)
}
```

---

**Q3. What are the three parts of a `for` loop and what does each do?**

**Answer:**

```javascript
for (initialization; condition; increment/decrement) {
    // body
}
```

| Part | Purpose | When It Runs | Example |
|---|---|---|---|
| **Initialization** | Set up the loop counter | Once, before the loop starts | `let i = 0` |
| **Condition** | Check if loop should continue | Before every iteration (including the first) | `i < 10` |
| **Increment/Decrement** | Update the counter | After each iteration's body | `i++` |

All three parts are **optional** — `for (;;) { }` is an infinite loop.

---

### Intermediate Level

**Q4. What happens during each iteration of a `for` loop? Walk through the execution.**

**Answer:** For `for (let i = 0; i < 3; i++) { console.log(i); }`:

| Step | Action | i value | Output |
|---|---|---|---|
| 1 | Initialization: `let i = 0` | 0 | — |
| 2 | Condition check: `0 < 3` → true | 0 | — |
| 3 | Execute body: `console.log(i)` | 0 | **0** |
| 4 | Increment: `i++` | 1 | — |
| 5 | Condition check: `1 < 3` → true | 1 | — |
| 6 | Execute body: `console.log(i)` | 1 | **1** |
| 7 | Increment: `i++` | 2 | — |
| 8 | Condition check: `2 < 3` → true | 2 | — |
| 9 | Execute body: `console.log(i)` | 2 | **2** |
| 10 | Increment: `i++` | 3 | — |
| 11 | Condition check: `3 < 3` → false | 3 | **Loop ends** |

> **Key:** Condition is checked BEFORE the body. Increment runs AFTER the body. If condition is false from the start, the body never executes.

---

**Q5. When should you use `while` vs `for`?**

**Answer:**

| Use `for` when... | Use `while` when... |
|---|---|
| You know the number of iterations | The number of iterations is unknown |
| Iterating over a range (0 to N) | Waiting for a condition (e.g., "keep retrying until success") |
| You need a counter variable | You're polling, reading streams, or processing user input |
| The loop has clear start, end, step | The exit condition depends on external state |

```javascript
// for — known iterations
for (let i = 0; i < items.length; i++) { process(items[i]); }

// while — unknown iterations (retry logic)
let attempts = 0;
while (!connected && attempts < 5) {
    tryConnect();
    attempts++;
}
```

---

**Q6. What is the difference between `do...while` and `while`?**

**Answer:** The only difference is **when the condition is checked:**

| Loop | Condition Check | Minimum Executions |
|---|---|---|
| `while` | **Before** the body | 0 (may never run) |
| `do...while` | **After** the body | 1 (always runs at least once) |

```javascript
// while — may never run
let x = 10;
while (x < 5) {
    console.log("Never printed");  // condition false at start
}

// do...while — runs at least once
let y = 10;
do {
    console.log("Prints once");    // body runs, then condition fails
} while (y < 5);
```

---

### Advanced Level

**Q7. What is the performance difference between `for`, `for...of`, and `forEach`?**

**Answer:**

| Loop | Relative Speed | Why |
|---|---|---|
| `for` (traditional) | ⚡ **Fastest** | Direct index access, no function calls, no iterator overhead |
| `for...of` | 🐢 Moderate | Uses iterator protocol — creates iterator object, calls `.next()` each iteration |
| `forEach` | 🐢 Slowest | Invokes a callback function per element — function call overhead |

```javascript
const arr = new Array(10000).fill(0);

// Fastest — no function calls, direct access
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 1;
}

// Moderate — iterator protocol overhead
for (const val of arr) {
    // val is a copy, can't modify original array in-place
}

// Slowest — callback function per element
arr.forEach((val, i) => {
    arr[i] = val + 1;
});
```

> **Note:** In modern V8, the difference is often negligible for typical workloads. Prioritize readability unless you're in a hot loop.

---

**Q8. What is the "Infinite Loop" problem and how does the event loop handle it?**

**Answer:** An infinite loop is a loop whose exit condition **never becomes false**. Since JavaScript is **single-threaded**, an infinite loop **blocks the entire thread** — no other code, no UI updates, no event handling occurs.

```javascript
// ❌ Infinite loop — blocks the thread forever
while (true) {
    console.log("stuck");
}
// Nothing after this will ever run — browser/Node.js becomes unresponsive
```

**How the event loop is affected:**

| Normal Execution | With Infinite Loop |
|---|---|
| Event loop processes tasks, renders UI, handles I/O | Event loop is **stuck** in the loop body |
| `setTimeout` callbacks execute on time | `setTimeout` callbacks **never** fire |
| Browser stays responsive | Browser tab freezes, needs to be killed |

```javascript
// Even this won't help — setTimeout callback never fires!
setTimeout(() => console.log("Never runs"), 0);
while (true) { /* infinite */ }
```

> **Tip:** Use `setTimeout`/`setInterval`/`requestAnimationFrame` for repeated work instead of blocking loops in the browser.

---

**Q9. How does `break`, `continue`, and labeled statements work in loops?**

**Answer:**

| Statement | Behavior | Example |
|---|---|---|
| `break` | Exits the **entire loop** immediately | `if (found) break;` |
| `continue` | Skips the **current iteration** and moves to the next | `if (skip) continue;` |
| `label:` | Names a loop so `break`/`continue` can target outer loops | `outer: for (...) { break outer; }` |

```javascript
// break — exit loop
for (let i = 0; i < 10; i++) {
    if (i === 5) break;    // exits at i=5, loop stops
    console.log(i);        // prints: 0, 1, 2, 3, 4
}

// continue — skip iteration
for (let i = 0; i < 5; i++) {
    if (i === 2) continue; // skips i=2
    console.log(i);        // prints: 0, 1, 3, 4
}

// Labeled break — exit nested loops
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) break outer; // exits BOTH loops
        console.log(i, j);
    }
}
```

---

**Q10. How does V8 optimize loop performance internally?**

**Answer:** V8 applies several optimizations to loops:

| Optimization | How It Works |
|---|---|
| **Inline Caching** | Caches property lookups (like `arr.length`) so they're not re-evaluated each iteration |
| **Loop-Invariant Code Motion** | Moves calculations that don't change per iteration outside the loop |
| **Bounds Check Elimination** | If V8 can prove array access is always in bounds, it removes range checks |
| **Type Feedback** | V8 tracks what types flow through the loop and TurboFan optimizes for those types |
| **On-Stack Replacement (OSR)** | If a long-running loop is detected as hot, TurboFan compiles it mid-execution |

```javascript
// Bad: recalculates arr.length every iteration
for (let i = 0; i < arr.length; i++) { }

// Good: cache length — helps older engines, modern V8 does this automatically
const len = arr.length;
for (let i = 0; i < len; i++) { }

// Best for readability and performance:
for (const item of arr) { }  // V8 optimizes this heavily now
```

---

## 📘 Concept: JavaScript Loop Types

### The 5 Loop Constructs

| # | Loop | Syntax | When Condition Is Checked | Min Iterations | Typical Use |
|---|---|---|---|---|---|
| 1 | **for** | `for (init; cond; inc) { }` | Before each iteration | 0 | Known iteration count |
| 2 | **while** | `while (cond) { }` | Before each iteration | 0 | Unknown count, condition-driven |
| 3 | **do...while** | `do { } while (cond);` | After each iteration | 1 | Must execute at least once |
| 4 | **for...of** | `for (const v of iter) { }` | Iterator `done` check | 0 | Array/iterable values |
| 5 | **for...in** | `for (const k in obj) { }` | Enumeration check | 0 | Object property keys |

---

## 📊 Loop Comparison Table

| Feature | `for` | `while` | `do...while` | `for...of` | `for...in` | `forEach` |
|---|---|---|---|---|---|---|
| **Iterates over** | Index/counter | Condition | Condition | Values | Keys/props | Array elements |
| **Break/continue** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ❌ No (can't break) |
| **return from outer fn** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes (in callback) |
| **async/await** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ❌ No (doesn't await) |
| **Speed** | ⚡ Fastest | ⚡ Fast | ⚡ Fast | 🐢 Moderate | 🐢 Slow | 🐢 Slowest |
| **Guaranteed 1 run** | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Works on objects** | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |
| **Works on arrays** | ✅ | ❌ | ❌ | ✅ | ⚠️ (not recommended) | ✅ |
| **ES version** | ES1 | ES1 | ES1 | ES6 | ES1 | ES5 |

---

## 🔬 The `for` Loop Execution Flow

### Walkthrough using the example from `02_loop.js`

```javascript
let x = "Rahul";

for (let index = 0; index < 10000; index++) {
    printFn(index);
}

function printFn(i) {
    console.log(x + i);
}
```

#### Step-by-Step Execution

```
═══════════════════════════════════════════
STEP 0 — SETUP
═══════════════════════════════════════════
    │
    ▼
 let x = "Rahul";         ← Hoisted, value "Rahul"
                             → Stored in memory

 function printFn(i) {...}  ← Hoisted (function declaration)
                             → Entire function body stored in memory

═══════════════════════════════════════════
STEP 1 — INITIALIZATION (runs ONCE)
═══════════════════════════════════════════
    │
    ▼
 let index = 0;           ← Counter created
                             → Memory: index = 0

═══════════════════════════════════════════
STEP 2 — CONDITION CHECK (before EVERY iteration)
═══════════════════════════════════════════
    │
    ▼
 index < 10000 → true     ← 0 < 10000 = true
                             → Enter loop body

═══════════════════════════════════════════
STEP 3 — EXECUTE BODY
═══════════════════════════════════════════
    │
    ▼
 printFn(index);          ← Call printFn(0)
    │                        → Inside printFn:
    │                        → console.log("Rahul" + 0)
    │                        → Output: "Rahul0"
    ▼
 Output: "Rahul0"

═══════════════════════════════════════════
STEP 4 — INCREMENT (after body completes)
═══════════════════════════════════════════
    │
    ▼
 index++                  ← index becomes 1

═══════════════════════════════════════════
REPEAT STEPS 2-4 for index = 1, 2, 3, ...
═══════════════════════════════════════════

    ... 9998 more iterations ...

═══════════════════════════════════════════
FINAL ITERATION (index = 9999)
═══════════════════════════════════════════
    │
    ▼
 Condition: 9999 < 10000 → true
 Body: printFn(9999) → output: "Rahul9999"
 Increment: index++ → index becomes 10000

═══════════════════════════════════════════
LOOP EXIT
═══════════════════════════════════════════
    │
    ▼
 Condition: 10000 < 10000 → false
 → Loop terminates
 → Program continues (nothing after loop here, so it ends)
```

### Visual Table of First 3 and Last Iteration

| Iteration | Before Body (index) | Condition (`0 < 10000`) | Body Output | After Increment |
|---|---|---|---|---|
| 1 | 0 | ✅ true | `"Rahul0"` | 1 |
| 2 | 1 | ✅ true | `"Rahul1"` | 2 |
| 3 | 2 | ✅ true | `"Rahul2"` | 3 |
| ... | ... | ... | ... | ... |
| 10000 | 9999 | ✅ true | `"Rahul9999"` | 10000 |
| Exit check | 10000 | ❌ false | — | — |

---

## 🔄 Pipeline Diagram

### Flowchart: `for` Loop Execution

```
 ┌──────────────────────────┐
 │     INITIALIZATION        │
 │     let index = 0;        │   Runs only ONCE
 └────────────┬─────────────┘
              │
              ▼
      ┌───────────────────┐
 ┌───▶│  CONDITION CHECK   │   Runs BEFORE each iteration
 │    │  index < 10000 ?   │   (including the first)
 │    └────────┬──────────┘
 │             │
 │        ┌────┴────┐
 │        │         │
 │      TRUE       FALSE
 │        │         │
 │        ▼         ▼
 │   ┌─────────┐  ┌──────────┐
 │   │  BODY   │  │   EXIT   │   Loop ends
 │   │printFn()│  │  LOOP    │
 │   └────┬────┘  └──────────┘
 │        │
 │        ▼
 │   ┌─────────┐
 │   │INCREMENT│   Runs AFTER each body execution
 │   │index++  │
 │   └────┬────┘
 │        │
 └────────┘
```

### Detailed Pipeline: `02_loop.js` Complete Execution

```
┌─────────────────────────────────────────────────────────┐
│                     MEMORY SETUP                         │
│  ┌───────────────┐    ┌─────────────────────────────┐   │
│  │  x = "Rahul"  │    │  printFn = function(i) {    │   │
│  │               │    │    console.log(x + i);      │   │
│  │               │    │  }                          │   │
│  └───────────────┘    └─────────────────────────────┘   │
└──────────────────────────┬──────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                    LOOP 0 → 9999                         │
│                                                         │
│  ┌──────────┐     ┌──────────┐     ┌──────────┐        │
│  │ index=0  │────▶│ 0<10000  │────▶│printFn(0)│────▶... │
│  │          │     │  TRUE    │     │"Rahul0"  │        │
│  └──────────┘     └──────────┘     └──────────┘        │
│                                                         │
│  ┌──────────┐     ┌──────────┐     ┌──────────┐        │
│  │ index=1  │────▶│ 1<10000  │────▶│printFn(1)│────▶... │
│  │          │     │  TRUE    │     │"Rahul1"  │        │
│  └──────────┘     └──────────┘     └──────────┘        │
│                                                         │
│           ... (9996 more iterations) ...                 │
│                                                         │
│  ┌──────────┐     ┌──────────┐     ┌──────────────┐    │
│  │index=9999│────▶│9999<10000│────▶│printFn(9999) │    │
│  │          │     │  TRUE    │     │"Rahul9999"   │    │
│  └──────────┘     └──────────┘     └──────────────┘    │
│                                                         │
│  ┌──────────┐     ┌──────────┐                          │
│  │idx=10000 │────▶│10000<10K │────▶  FALSE ──▶  EXIT   │
│  │          │     │  FALSE   │                          │
│  └──────────┘     └──────────┘                          │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                    OUTPUT                                │
│                                                         │
│  Rahul0                                                  │
│  Rahul1                                                  │
│  Rahul2                                                  │
│  ...                                                     │
│  Rahul9999                                               │
│                                                         │
│  Total: 10,000 lines printed to console                 │
└─────────────────────────────────────────────────────────┘
```

### Memory & Scope Diagram

```
┌───────────────────────────────────────────┐
│            GLOBAL SCOPE                   │
│                                           │
│  ┌─────────┐    ┌──────────────────────┐  │
│  │ x       │    │ printFn              │  │
│  │ "Rahul" │    │ function(i) { ... }  │  │
│  └─────────┘    └──────────────────────┘  │
│                                           │
│  FOR LOOP SCOPE (let — block-scoped):     │
│  ┌─────────┐                              │
│  │ index   │ ← lives only inside for     │
│  │ 0→9999  │   block, destroyed after    │
│  └─────────┘                              │
│                                           │
│  FUNCTION SCOPE (each call):              │
│  ┌─────────┐                              │
│  │ i       │ ← parameter, different      │
│  │ 0→9999  │   value each call           │
│  └─────────┘                              │
└───────────────────────────────────────────┘
```

> **Key insight:** With `let index`, the variable is **block-scoped** to the `for` loop — each iteration gets its own binding. With `var`, it would be function/global-scoped and hoisted.

---

## 💻 Real-World Examples & Edge Cases

### Example 1: `let` vs `var` in Loops (Classic Interview Question)

```javascript
// ❌ var — all closures share the SAME variable
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// Output after 100ms: 3, 3, 3  (NOT 0, 1, 2!)

// ✅ let — each iteration gets its OWN binding
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// Output after 100ms: 0, 1, 2  (as expected!)
```

> **Why?** `var` is function-scoped — all 3 callbacks share one `i` (which is 3 when they run). `let` is block-scoped — each iteration creates a **fresh binding** of `i`.

---

### Example 2: Modifying an Array While Looping

```javascript
const arr = [1, 2, 3, 4, 5];

// ❌ BAD: Modifying array while iterating with for loop
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 3) {
        arr.splice(i, 1);  // Removes element, shifts indices!
        i--;               // Must adjust index to compensate
    }
}
console.log(arr);  // [1, 2, 4, 5]

// ✅ BETTER: Use filter for immutable approach
const filtered = arr.filter(n => n !== 3);
console.log(filtered);  // [1, 2, 4, 5]

// ✅ BETTER: Iterate backwards when removing
for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 3) arr.splice(i, 1);
}
```

---

### Example 3: `forEach` Cannot Be Broken

```javascript
const arr = [1, 2, 3, 4, 5];

// ❌ break doesn't work in forEach
arr.forEach(n => {
    if (n === 3) break;  // SyntaxError!
});

// ❌ return just exits the callback, not the loop
arr.forEach(n => {
    if (n === 3) return;  // Still runs for 4 and 5!
    console.log(n);       // prints: 1, 2, 4, 5
});

// ✅ Use for...of if you need to break early
for (const n of arr) {
    if (n === 3) break;
    console.log(n);       // prints: 1, 2
}
```

---

### Example 4: Async/Await in Loops

```javascript
// ❌ forEach does NOT work with async/await
[1, 2, 3].forEach(async (n) => {
    await delay(100);
    console.log(n);  // All fire nearly simultaneously — NOT sequential!
});

// ✅ for...of works with async/await (sequential)
for (const n of [1, 2, 3]) {
    await delay(100);
    console.log(n);  // Prints 1, 2, 3 with 100ms delay each
}
```

> **Why?** `forEach` invokes the callback synchronously but doesn't `await` the returned promise. `for...of` properly awaits each iteration.

---

### Example 5: Performance — Cache the Length (Legacy Pattern)

```javascript
const arr = new Array(100000);

// Slower — .length checked every iteration
for (let i = 0; i < arr.length; i++) {
    arr[i] = i;
}

// Faster (especially in older engines) — .length cached once
for (let i = 0, len = arr.length; i < len; i++) {
    arr[i] = i;
}

// Modern V8 note: The engine now optimizes the first form automatically.
// Still, caching shows understanding of the concept.
```

---

## 🌍 Language-Specific Behavior

### JavaScript vs Other Languages: Loop Comparison

| Language | Default `for` | For-Each Equivalent | Key Difference |
|---|---|---|---|
| **JavaScript** | `for (let i = 0; i < n; i++)` | `for...of` | `for...in` iterates keys, `for...of` iterates values |
| **Java** | `for (int i = 0; i < n; i++)` | `for (Type item : collection)` | Java's enhanced for is like JS `for...of` |
| **Python** | No C-style `for` | `for item in iterable:` | Python's `for` IS a for-each — no index unless using `enumerate()` |
| **C/C++** | `for (int i = 0; i < n; i++)` | Range-based `for (auto x : arr)` (C++11+) | C has no for-each; C++11 added range-based loops |
| **Go** | `for i := 0; i < n; i++` | `for i, val := range slice` | Go's `range` returns both index and value |
| **Rust** | `for i in 0..n` | `for item in iter` | All loops are iterator-based; no C-style `for` syntax |

### JavaScript-Specific Loop Quirks

| Quirk | Explanation |
|---|---|
| **`var` hoisting in loops** | `var i` is hoisted to function scope — all iterations share the same `i` |
| **`let` per-iteration binding** | `let i` creates a fresh binding per iteration — critical for closures in loops |
| **`for...in` includes prototype** | Iterates inherited enumerable properties too — use `hasOwnProperty()` or `Object.keys()` for own-only |
| **`for...of` needs `Symbol.iterator`** | Only works on iterables — plain objects are NOT iterable by default |
| **No `goto` in JavaScript** | You cannot jump to arbitrary labels — only `break`/`continue` with labels |
| **Dead code after `return`** | `for(;;) { return; }` — code after the loop is unreachable but syntactically valid |
| **Infinite `for(;;)`** | All three `for` parts are optional — `for(;;) {}` is a valid infinite loop |

---

## 💡 Interview Tips & Common Mistakes

### 🎯 Interview Tips

| Tip | Why It Matters |
|---|---|
| **Always mention `let` vs `var` in loop closures** | This is THE most asked loop question. Know that `let` creates per-iteration bindings, `var` shares one binding. |
| **Know when to use which loop** | `for` for known counts, `while` for unknown conditions, `for...of` for arrays/iterables, `for...in` for object keys. |
| **Explain the three parts of `for`** | Initialization (once), condition (before each iteration), increment (after each iteration). Show you understand the order. |
| **Mention `break`/`continue` limitations** | `forEach` doesn't support them. This shows practical experience. |
| **Compare with other languages** | Mentioning Python's for-each-only or Java's enhanced for shows breadth of knowledge. |
| **Know performance trade-offs** | `for` is fastest, `forEach` slowest, but readability often matters more. V8 optimizes aggressively. |

### ❌ Common Mistakes

| Mistake | Correction |
|---|---|
| Using `var` in `for` loops with async callbacks | Use `let` to get per-iteration bindings — avoids the classic `3, 3, 3` bug. |
| Using `for...in` on arrays | `for...in` iterates keys (as strings), includes prototype properties — use `for...of` or `forEach` for arrays. |
| Using `for...of` on plain objects | Plain objects are not iterable. Use `Object.keys()`, `Object.values()`, `Object.entries()` + `for...of`, or `for...in`. |
| Trying to `break`/`continue` in `forEach` | It's impossible — use `for...of` if you need early exit. |
| Assuming `forEach` works with `async/await` | It doesn't await the callback — use `for...of` for sequential async. |
| Modifying array in-place while looping forward | Elements shift — either loop backwards or use `filter`/`map`. |
| Forgetting that `do...while` always runs once | Even if the condition is false, the body executes at least once. |
| Confusing `=` and `<`/`<=` in conditions | `i < 10` runs 10 times (0-9), `i <= 10` runs 11 times (0-10). Off-by-one errors are common. |

---

## 🔑 Key Takeaways

| # | Takeaway |
|---|---|
| 1 | JavaScript has **5 loop types**: `for`, `while`, `do...while`, `for...of`, `for...in`. Each has a distinct use case. |
| 2 | The `for` loop executes **Initialization (once) → Condition (before each) → Body → Increment (after each)** — in that exact order. |
| 3 | **`let` creates per-iteration bindings** in `for` loops — this is why `setTimeout` inside a loop works correctly with `let` but not `var`. |
| 4 | **`for...of` iterates VALUES** (arrays, strings, Maps, Sets, iterables). **`for...in` iterates KEYS** (object properties, including inherited). |
| 5 | **`forEach` cannot be broken** with `break`/`continue`, and doesn't work with `async/await`. Use `for...of` for those cases. |
| 6 | **`do...while` guarantees at least one execution** — condition is checked after the body. `while` may never execute. |
| 7 | For raw speed: **`for` > `for...of` > `forEach`** — but readability usually matters more in real-world code. |
| 8 | **Modifying an array while looping forward** shifts indices — loop backwards or use `filter`/`map` for immutable patterns. |
| 9 | An **infinite loop blocks the single JavaScript thread** — no events fire, no UI updates, no async callbacks execute. |
| 10 | **`for(;;){}` is a valid infinite loop** — all three `for` parts are optional in JavaScript. |

---

> **Bottom line:** Loops are the backbone of iteration in JavaScript. Understanding their execution order, scope behavior (`let` vs `var`), and the right tool for each situation (indexed `for` for speed, `for...of` for readability, `while` for condition-driven logic) separates strong candidates from average ones in interviews. The `02_loop.js` example demonstrates how a simple `for` loop calling a function 10,000 times exercises scope, execution order, and the call stack — concepts that appear in nearly every JavaScript interview.
