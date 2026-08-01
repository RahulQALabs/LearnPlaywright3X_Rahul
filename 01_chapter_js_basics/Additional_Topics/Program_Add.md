# Additional Topics — Programming Practice (Basics)

## Easy Programs

**1. Write a program that uses `console.error`, `console.warn`, and `console.info`.**

```javascript
console.error("Test failed!");
console.warn("Slow response!");
console.info("Info message");
```

**2. Write a program that uses `console.table` to display an array of test results.**

```javascript
console.table([
    { test: "Login", status: "pass" },
    { test: "Checkout", status: "fail" }
]);
```

**3. Write a program using `console.time` and `console.timeEnd` to measure a loop.**

```javascript
console.time("loop");
let sum = 0;
for (let i = 0; i < 1000000; i++) sum += i;
console.timeEnd("loop");  // prints elapsed time
```

**4. Write a program demonstrating `try/catch/finally`.**

```javascript
try {
    JSON.parse("not valid json");
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Cleanup done");
}
```

**5. Write a function that throws an error for invalid input.**

```javascript
function login(user, pass) {
    if (!user || !pass) throw new Error("Missing credentials");
    return "Logged in";
}
```

---

## Medium Programs

**6. Write a program demonstrating the event loop order (sync, promise, setTimeout).**

```javascript
console.log("1");
setTimeout(() => console.log("3"), 0);
Promise.resolve().then(() => console.log("2"));
// Output: 1, 2, 3
```

**7. Write a Promise that resolves after a delay, and use it with `await`.**

```javascript
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
    console.log("waiting...");
    await delay(2000);
    console.log("done!");
}
run();
```

**8. Write an async function that fetches data with error handling.**

```javascript
async function fetchUser() {
    try {
        const response = await fetch("https://api.example.com/user");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("API failed:", error);
    }
}
```

**9. Write a function that uses `console.group` to organize logs.**

```javascript
function logTest(name) {
    console.group(name);
    console.log("Setup...");
    console.log("Execute...");
    console.log("Teardown...");
    console.groupEnd();
}
logTest("Login Test");
```

**10. Write a program showing the ASI `return` gotcha and the fix.**

```javascript
function broken() {
    return
    { ok: true };   // returns undefined
}
console.log(broken());  // undefined

function fixed() {
    return { ok: true };  // correct
}
console.log(fixed());  // { ok: true }
```

---

## Hard Programs

**11. Write an async function that runs multiple promises in parallel with `Promise.all`.**

```javascript
async function fetchAll() {
    const urls = ["https://api.example.com/a", "https://api.example.com/b"];
    const results = await Promise.all(urls.map(u => fetch(u).then(r => r.json())));
    return results;
}
```

**12. Write a function that retries an async operation with try/catch.**

```javascript
async function retry(fn, times = 3) {
    for (let i = 1; i <= times; i++) {
        try {
            return await fn();
        } catch (error) {
            console.error(`Attempt ${i} failed:`, error.message);
        }
    }
    throw new Error("All attempts failed");
}
```

**13. Write a program using `console.count` to count occurrences.**

```javascript
function retryMe() {
    console.count("retry");
}
retryMe();  // retry: 1
retryMe();  // retry: 2
```

**14. Write a program showing the difference between microtask and macrotask order.**

```javascript
Promise.resolve().then(() => console.log("microtask"));
setTimeout(() => console.log("macrotask"), 0);
// Output: microtask, macrotask
```

**15. Write an async function that processes items sequentially with await inside a for...of.**

```javascript
async function processSequentially(items) {
    for (const item of items) {
        await delay(100);   // each item waits for the previous
        console.log("Processed", item);
    }
}
processSequentially([1, 2, 3]);
```
