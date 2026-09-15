# Additional Topics — continue, for...of/in, Labeled Loops, Async Loops (Loops)

The loops chapter covers `for`, `while`, `do...while`, `break`, and nested loops well. These are the missing pieces — several are the most-used loops in real Playwright code.

## 1. The `continue` Statement

`break` exits the loop; `continue` **skips to the next iteration**.

```javascript
// Print only odd numbers
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue;   // skip evens
    console.log(i);              // 1, 3, 5, 7, 9
}

// continue in while
let i = 0;
while (i < 10) {
    i++;
    if (i % 3 === 0) continue;
    console.log(i);   // 1, 2, 4, 5, 7, 8, 10
}
```

## 2. `for...of` — The Most Used Loop in Automation

Iterates **values** of arrays, strings, Maps, Sets. This is what you'll write daily in Playwright:

```javascript
const tests = ["login", "checkout", "search"];
for (const test of tests) {
    console.log(test);   // login, checkout, search
}

// Works on strings too:
for (const ch of "hi") console.log(ch);   // h, i
```

**Why it matters in testing:** `for...of` is the loop you'll use to iterate test data sets, browser lists, and locator arrays.

## 3. `for...in` — Iterates Keys (of Objects)

```javascript
const config = { url: "https://example.com", timeout: 5000 };
for (const key in config) {
    console.log(key, config[key]);   // url https://..., timeout 5000
}

// On arrays — iterates INDICES (avoid for arrays):
const arr = ["a", "b"];
for (const i in arr) {
    console.log(i);   // "0", "1" — strings, not values!
}
```

**Rule:** `for...in` for objects, `for...of` for arrays/iterables.

## 4. Labeled Loops — Breaking Out of Nested Loops

`break` only exits the innermost loop. A **label** lets you break out of an outer loop:

```javascript
outer: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            break outer;        // exits BOTH loops
        }
        console.log(`${i},${j}`);
    }
}
// 1,1  1,2  1,3  2,1 — stops at 2,2
```

Without the label, `break` would only exit the inner loop.

## 5. Async/Await Inside Loops — Sequential vs Parallel

Critical for Playwright, where actions return Promises.

```javascript
// Sequential — one at a time (default for most tests):
async function processSequentially(items) {
    for (const item of items) {
        await doTask(item);   // waits for each
    }
}

// Parallel — all at once (use when order doesn't matter):
async function processInParallel(items) {
    await Promise.all(items.map(item => doTask(item)));
}

// ⚠️ forEach does NOT await:
items.forEach(async (item) => {
    await doTask(item);   // fires all without waiting — BUG in automation
});
```

**Rule for Playwright:** use `for...of` + `await` when tests must run in order; `Promise.all` when they can run together.

## 6. Loop Performance & Best Practices

```javascript
// Cache the length — avoid re-reading it every iteration:
const arr = [1, 2, 3, 4, 5];
for (let i = 0, len = arr.length; i < len; i++) {   // faster
    // ...
}

// Avoid heavy work in the condition:
// for (let i = 0; i < getLength(); i++)  // getLength() runs every time!

// Reverse iteration when removing elements:
const nums = [1, 2, 3, 4, 5];
for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] % 2 === 0) nums.splice(i, 1);   // safe removal
}
console.log(nums);   // [1, 3, 5]
```

## 7. Iterating Strings, Maps, Sets

```javascript
const map = new Map([["a", 1], ["b", 2]]);
for (const [key, value] of map) {
    console.log(key, value);   // a 1, b 2
}

const set = new Set([10, 20, 30]);
for (const val of set) {
    console.log(val);   // 10, 20, 30
}
```
