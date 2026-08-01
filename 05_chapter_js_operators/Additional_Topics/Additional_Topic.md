# Additional Topics — Optional Chaining, Spread, in, instanceof, delete (Operators)

Practical operators missing from the operators chapter that matter for interviews and Playwright framework creation.

## 1. Optional Chaining `?.`

Safely access nested properties without checking each level — returns `undefined` instead of throwing.

```javascript
const config = {
    browser: {
        name: "chromium"
    }
    // no "timeout" key, no "retries"
};

console.log(config.browser.name);       // "chromium"
console.log(config.timeout?.ms);        // undefined — no error!
console.log(config.browser?.name);      // "chromium"
// console.log(config.browser.name.length.xxx);  // TypeError without ?.

// Works with calls too:
const result = config.getToken?.();     // undefined if method missing
```

**Why it matters in testing:** API responses, config objects, and page objects often have optional nested data. `?.` prevents "Cannot read properties of undefined" crashes.

## 2. Spread Operator `...`

Expands an array/object into individual elements.

```javascript
// Arrays — copy, merge
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4];        // [1, 2, 3, 4] — copy + add
const merged = [...arr1, ...[5, 6]];  // [1, 2, 3, 5, 6]

// Objects — copy, merge (config overrides)
const baseConfig = { timeout: 5000, retries: 2 };
const testConfig = { ...baseConfig, retries: 5 };   // overrides retries
console.log(testConfig);  // { timeout: 5000, retries: 5 }

// Spread into function args
const nums = [3, 1, 4];
console.log(Math.max(...nums));   // 4
```

**Why it matters in testing:** Playwright config overrides, cloning test data, merging objects — all everyday framework work.

## 3. Rest Operator `...` (in parameters)

Collects remaining arguments into an array — the inverse of spread.

```javascript
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3));   // 6

function logTest(name, ...tags) {
    console.log(name, tags);   // "Login", ["smoke", "regression"]
}
logTest("Login", "smoke", "regression");
```

## 4. The `in` Operator

Checks if a property exists on an object (including inherited ones).

```javascript
const response = { status: 200, body: { user: "Rahul" } };
console.log("status" in response);    // true
console.log("token" in response);     // false
console.log("body" in response);      // true
```

**Why it matters in testing:** API-testing assertions — "does this response contain a token?"

## 5. The `instanceof` Operator

Checks if an object is an instance of a class/constructor.

```javascript
class ApiError extends Error {}
const err = new ApiError("failed");

console.log(err instanceof ApiError);  // true
console.log(err instanceof Error);     // true — inherits
console.log([] instanceof Array);      // true
console.log([] instanceof Object);     // true
```

**Why it matters in testing:** error handling — distinguishing custom error types in try/catch.

## 6. The `delete` Operator

Removes a property from an object.

```javascript
const user = { name: "Rahul", token: "secret" };
delete user.token;
console.log(user);   // { name: "Rahul" }
```

Note: `delete` does NOT work on array elements to shrink length — it leaves a hole.

## 7. Unary Operators `+` `-` `!` `typeof`

```javascript
// Unary plus/minus — convert to number
console.log(+"10");        // 10
console.log(-"5");         // -5
console.log(+true);        // 1
console.log(+"abc");       // NaN

// Double negation — convert to boolean
console.log(!!"hello");    // true
console.log(!!0);          // false

// typeof — returns type string
console.log(typeof "hi");  // "string"
console.log(typeof 5);     // "number"
```

## 8. Logical Assignment Operators

Modern shortcuts for "default the value if empty":

```javascript
let timeout = null;
timeout ??= 5000;       // sets 5000 because null
console.log(timeout);   // 5000

let retries = 2;
retries ||= 3;          // keeps 2 (truthy)
console.log(retries);   // 2

let config = {};
config.enabled &&= true;  // only if already truthy
```

**Why it matters in testing:** setting config defaults (`timeout ??= DEFAULT_TIMEOUT`).

## 9. Comma Operator & Chained Comparisons (Gotchas)

```javascript
// Comma operator — evaluates left, returns right
let x = (1, 2, 3);
console.log(x);   // 3

// Chained comparison — WRONG (this is a famous trap)
console.log(1 < 2 < 3);   // true — (1<2)=true, true<3 → 1<3 → true (accident)
console.log(3 > 2 > 1);   // false — (3>2)=true, true>1 → 1>1 → false!
```

**Rule:** never chain comparisons. Use `1 < 2 && 2 < 3`.
