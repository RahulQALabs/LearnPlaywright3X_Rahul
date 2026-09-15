# Additional Topics — Programming Practice (Operators)

## Easy Programs

**1. Write a program using optional chaining to safely access nested config.**

```javascript
const config = { browser: { name: "chromium" } };
console.log(config.browser?.name);       // "chromium"
console.log(config.timeout?.ms);         // undefined
console.log(config?.retries?.max);       // undefined
```

**2. Write a program demonstrating spread for arrays.**

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4];         // [1, 2, 3, 4]
const merged = [...arr1, ...[5, 6]]; // [1, 2, 3, 5, 6]
console.log(arr2, merged);
```

**3. Write a program demonstrating spread for object config overrides.**

```javascript
const baseConfig = { timeout: 5000, retries: 2, headless: true };
const testConfig = { ...baseConfig, retries: 5 };
console.log(testConfig);   // { timeout: 5000, retries: 2, headless: true, retries: 5 }
```

**4. Write a program using the rest operator to sum variable arguments.**

```javascript
function sum(...nums) {
    return nums.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2));          // 3
console.log(sum(1, 2, 3, 4, 5)); // 15
```

**5. Write a program using `in` to check API response properties.**

```javascript
const response = { status: 200, body: { user: "Rahul" } };
console.log("status" in response);   // true
console.log("token" in response);    // false
```

---

## Medium Programs

**6. Write a program using `instanceof` for error handling.**

```javascript
class ApiError extends Error {}
const error = new ApiError("failed");
console.log(error instanceof ApiError);  // true
console.log(error instanceof Error);     // true
console.log(error instanceof TypeError); // false
```

**7. Write a program using `delete` to remove properties.**

```javascript
const user = { name: "Rahul", token: "secret", role: "admin" };
delete user.token;
console.log(user);   // { name: "Rahul", role: "admin" }
```

**8. Write a program demonstrating unary conversion operators.**

```javascript
console.log(+"10");      // 10
console.log(-"5");       // -5
console.log(+true);      // 1
console.log(!!"hello");  // true
console.log(!!0);        // false
console.log(typeof 42);  // "number"
```

**9. Write a program using logical assignment operators for defaults.**

```javascript
let timeout = null;
timeout ??= 5000;        // default when null/undefined
console.log(timeout);    // 5000

let retries = 2;
retries ||= 3;           // keeps 2 (truthy)
console.log(retries);    // 2
```

**10. Write a program demonstrating the spread into Math.max.**

```javascript
const nums = [3, 1, 4, 1, 5];
console.log(Math.max(...nums));   // 5
console.log(Math.min(...nums));   // 1
```

---

## Hard Programs

**11. Write a safe config accessor using optional chaining + default.**

```javascript
function getTimeout(config) {
    return config?.browser?.timeout ?? 5000;
}
console.log(getTimeout({ browser: { timeout: 1000 } }));  // 1000
console.log(getTimeout({}));                               // 5000
console.log(getTimeout(null));                             // 5000
```

**12. Write a function that merges browser options with defaults.**

```javascript
const DEFAULT_OPTIONS = { headless: true, slowMo: 0, viewport: { width: 1280, height: 720 } };

function launchOptions(overrides) {
    return { ...DEFAULT_OPTIONS, ...overrides };
}
console.log(launchOptions({ slowMo: 100 }));
// { headless: true, slowMo: 100, viewport: {...} }
```

**13. Write a program demonstrating the chained comparison bug and the fix.**

```javascript
// Bug:
console.log(3 > 2 > 1);   // false! (true > 1 → 1 > 1 → false)

// Fix:
console.log(3 > 2 && 2 > 1);  // true
```

**14. Write a function that removes sensitive keys from an object.**

```javascript
function sanitize(obj, keys) {
    const copy = { ...obj };
    keys.forEach(key => delete copy[key]);
    return copy;
}
const user = { name: "Rahul", password: "abc", token: "xyz" };
console.log(sanitize(user, ["password", "token"]));  // { name: "Rahul" }
```

**15. Write a program using rest + spread together (framework pattern).**

```javascript
function createTestConfig(name, ...overrides) {
    const defaults = { timeout: 5000, retries: 2 };
    return {
        name,
        ...defaults,
        ...overrides.reduce((acc, o) => ({ ...acc, ...o }), {})
    };
}
console.log(createTestConfig("Login", { retries: 5 }, { timeout: 2000 }));
// { name: "Login", timeout: 2000, retries: 5 }
```
