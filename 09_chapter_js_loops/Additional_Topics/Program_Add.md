# Additional Topics — Programming Practice (Loops)

## Easy Programs

**1. Write a program using `continue` to skip even numbers.**

```javascript
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue;
    console.log(i);   // 1, 3, 5, 7, 9
}
```

**2. Write a program using `for...of` to iterate test names.**

```javascript
const tests = ["login", "checkout", "search"];
for (const test of tests) {
    console.log(`Running: ${test}`);
}
```

**3. Write a program using `for...in` to iterate object properties.**

```javascript
const config = { url: "https://example.com", timeout: 5000 };
for (const key in config) {
    console.log(`${key}: ${config[key]}`);
}
```

**4. Write a labeled loop that breaks out of nested loops.**

```javascript
outer: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) break outer;
        console.log(`${i},${j}`);
    }
}
// 1,1 1,2 1,3 2,1
```

**5. Write a program iterating a string with `for...of`.**

```javascript
for (const ch of "Playwright") {
    console.log(ch);   // P, l, a, y, w, r, i, g, h, t
}
```

---

## Medium Programs

**6. Write a program iterating a Map with `for...of`.**

```javascript
const map = new Map([
    ["chrome", "chromium"],
    ["firefox", "firefox"]
]);
for (const [key, value] of map) {
    console.log(`${key} → ${value}`);
}
```

**7. Write a program iterating a Set.**

```javascript
const browsers = new Set(["chrome", "firefox", "chrome", "webkit"]);
for (const b of browsers) {
    console.log(b);   // chrome, firefox, webkit — no duplicates
}
```

**8. Write a sequential async loop.**

```javascript
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function processSequentially(items) {
    for (const item of items) {
        console.log(`Processing ${item}...`);
        await delay(100);   // waits for each
    }
}
processSequentially([1, 2, 3]);
```

**9. Write a parallel async loop with Promise.all.**

```javascript
async function processInParallel(items) {
    await Promise.all(items.map(async item => {
        console.log(`Processing ${item}...`);
        return item * 2;
    }));
}
processInParallel([1, 2, 3]);
```

**10. Write a program caching array length in a loop.**

```javascript
const arr = [1, 2, 3, 4, 5];
for (let i = 0, len = arr.length; i < len; i++) {
    console.log(arr[i]);
}
```

---

## Hard Programs

**11. Write a program that safely removes elements while iterating.**

```javascript
// Forward removal is buggy (skips elements):
let nums = [1, 2, 3, 4, 5];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) nums.splice(i, 1);   // skips!
}

// Correct — iterate backwards:
nums = [1, 2, 3, 4, 5];
for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] % 2 === 0) nums.splice(i, 1);
}
console.log(nums);   // [1, 3, 5]
```

**12. Write a polling/retry loop (test automation pattern).**

```javascript
async function waitFor(predicate, attempts = 5, delayMs = 500) {
    for (let i = 1; i <= attempts; i++) {
        if (predicate()) return true;
        console.log(`Attempt ${i} — retrying in ${delayMs}ms`);
        await new Promise(r => setTimeout(r, delayMs));
    }
    return false;
}
waitFor(() => false).then(result => console.log("Result:", result));
```

**13. Write a program using a flag to break nested loops (label alternative).**

```javascript
let found = false;
for (let i = 1; i <= 3 && !found; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            found = true;
            break;
        }
        console.log(`${i},${j}`);
    }
}
```

**14. Write a program comparing `for...of`, `forEach`, and `for` performance patterns.**

```javascript
const arr = [10, 20, 30, 40, 50];

// for...of — clean, breakable
for (const v of arr) {
    if (v === 30) break;
    console.log("of:", v);
}

// forEach — can't break
arr.forEach(v => console.log("each:", v));

// for — index access
for (let i = 0; i < arr.length; i++) {
    console.log("for:", arr[i]);
}
```

**15. Write a program with a labeled loop using `continue` on the outer loop.**

```javascript
outer: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) continue outer;   // skip rest of inner, next outer
        console.log(`${i},${j}`);
    }
}
// 1,1  2,1  3,1
```
