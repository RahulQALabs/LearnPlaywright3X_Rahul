# Additional Topics — Programs (HackerRank Style, Objects)

Each program follows the HackerRank format: **Problem Statement → Input Format → Output Format → Sample Input → Sample Output → Solution**.

Topics covered: **`this`, prototypes, getters/setters, computed keys, destructuring, optional chaining, cloning, and object utility methods**.

---

## Easy Programs

### 1. Build a Test-Case Object

**Problem Statement:** Write a function `makeTest(id, name)` that returns an object `{ id, name, status: "pending" }` using property shorthand.

**Input Format:** An integer `id` and a string `name`.

**Output Format:** Print the object.

**Sample Input:**
```
makeTest(1, "Login")
```

**Sample Output:**
```
{ id: 1, name: 'Login', status: 'pending' }
```

**Solution:**
```javascript
function makeTest(id, name) {
    return { id, name, status: "pending" };
}
```

---

### 2. Safe Deep Read

**Problem Statement:** Write a function `getCity(user)` that returns `user.address.city` if it exists, otherwise `"unknown"`, using optional chaining.

**Input Format:** A user object.

**Output Format:** Print the city or `"unknown"`.

**Sample Input:**
```
getCity({ name: "rahul", address: { city: "Bengaluru" } })
getCity({ name: "rahul" })
```

**Sample Output:**
```
Bengaluru
unknown
```

**Solution:**
```javascript
function getCity(user) {
    return user?.address?.city ?? "unknown";
}
```

---

### 3. Destructure Test Data

**Problem Statement:** Write a function `login({ username, password = "secret" })` that returns a `"user:pass"` string.

**Input Format:** An object with `username` and an optional `password`.

**Output Format:** Print `username:password` (default password `secret`).

**Sample Input:**
```
login({ username: "rahul" })
login({ username: "rahul", password: "1234" })
```

**Sample Output:**
```
rahul:secret
rahul:1234
```

**Solution:**
```javascript
function login({ username, password = "secret" }) {
    return `${username}:${password}`;
}
```

---

### 4. Count Properties

**Problem Statement:** Write a function `size(obj)` that returns the number of own properties.

**Input Format:** An object.

**Output Format:** Print the count.

**Sample Input:**
```
size({ a: 1, b: 2, c: 3 })
```

**Sample Output:**
```
3
```

**Solution:**
```javascript
function size(obj) {
    return Object.keys(obj).length;
}
```

---

### 5. Computed Key Payload

**Problem Statement:** Write a function `field(key, value)` that returns a single-property object with a computed key.

**Input Format:** A string `key` and any `value`.

**Output Format:** Print the object.

**Sample Input:**
```
field("status", "pass")
```

**Sample Output:**
```
{ status: 'pass' }
```

**Solution:**
```javascript
function field(key, value) {
    return { [key]: value };
}
```

---

### 6. Object to Entries

**Problem Statement:** Write a function `toPairs(obj)` that converts an object into an array of `[key, value]` pairs.

**Input Format:** An object.

**Output Format:** Print the array of pairs.

**Sample Input:**
```
toPairs({ name: "rahul", age: 30 })
```

**Sample Output:**
```
[ [ 'name', 'rahul' ], [ 'age', 30 ] ]
```

**Solution:**
```javascript
function toPairs(obj) {
    return Object.entries(obj);
}
```

---

## Medium Programs

### 7. Merge Config with Overrides

**Problem Statement:** Write a function `merge(base, over)` that returns a new object where `over` wins on conflicts.

**Input Format:** Two objects, `base` and `over`.

**Output Format:** Print the merged object.

**Sample Input:**
```
merge({ browser: "chrome", timeout: 3000 }, { timeout: 5000 })
```

**Sample Output:**
```
{ browser: 'chrome', timeout: 5000 }
```

**Solution:**
```javascript
function merge(base, over) {
    return { ...base, ...over };
}
```

---

### 8. Pick Fields

**Problem Statement:** Write a function `pick(obj, keys)` that returns a new object containing only the given keys.

**Input Format:** An object and an array of key names.

**Output Format:** Print the filtered object.

**Sample Input:**
```
pick({ id: 1, name: "rahul", password: "x" }, ["id", "name"])
```

**Sample Output:**
```
{ id: 1, name: 'rahul' }
```

**Solution:**
```javascript
function pick(obj, keys) {
    return Object.fromEntries(keys.filter(k => k in obj).map(k => [k, obj[k]]));
}
```

---

### 9. Omit Fields

**Problem Statement:** Write a function `omit(obj, keys)` that returns a copy without the given keys.

**Input Format:** An object and an array of key names to remove.

**Output Format:** Print the resulting object.

**Sample Input:**
```
omit({ user: "rahul", password: "x" }, ["password"])
```

**Sample Output:**
```
{ user: 'rahul' }
```

**Solution:**
```javascript
function omit(obj, keys) {
    return Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
}
```

---

### 10. Count Results by Status

**Problem Statement:** Write a function `countBy(results)` that counts occurrences of each status in an array.

**Input Format:** An array of strings.

**Output Format:** Print an object of counts.

**Sample Input:**
```
countBy(["pass", "fail", "pass", "pass"])
```

**Sample Output:**
```
{ pass: 3, fail: 1 }
```

**Solution:**
```javascript
function countBy(results) {
    return results.reduce((acc, r) => {
        acc[r] = (acc[r] || 0) + 1;
        return acc;
    }, {});
}
```

---

### 11. Group Objects by Property

**Problem Statement:** Write a function `groupBy(items, key)` that groups an array of objects by a property.

**Input Format:** An array of objects and a string `key`.

**Output Format:** Print the grouped object with arrays as values.

**Sample Input:**
```
groupBy([{ g: "A", n: "x" }, { g: "B", n: "y" }, { g: "A", n: "z" }], "g")
```

**Sample Output:**
```
{ A: [ { g: 'A', n: 'x' }, { g: 'A', n: 'z' } ], B: [ { g: 'B', n: 'y' } ] }
```

**Solution:**
```javascript
function groupBy(items, key) {
    return items.reduce((acc, item) => {
        (acc[item[key]] = acc[item[key]] || []).push(item);
        return acc;
    }, {});
}
```

---

### 12. Invert an Object

**Problem Statement:** Write a function `invert(obj)` that swaps keys and values.

**Input Format:** An object.

**Output Format:** Print the inverted object.

**Sample Input:**
```
invert({ pass: 1, fail: 0 })
```

**Sample Output:**
```
{ '0': 'fail', '1': 'pass' }
```

**Solution:**
```javascript
function invert(obj) {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
}
```

---

### 13. Full Name Getter

**Problem Statement:** Write a function `makePerson(first, last)` that returns an object with a `fullName` **getter** joining the two parts.

**Input Format:** Two strings `first` and `last`.

**Output Format:** Print `person.fullName`.

**Sample Input:**
```
makePerson("rahul", "gupta").fullName
```

**Sample Output:**
```
rahul gupta
```

**Solution:**
```javascript
function makePerson(first, last) {
    return {
        first,
        last,
        get fullName() {
            return `${this.first} ${this.last}`;
        }
    };
}
```

---

## Hard Programs

### 14. Deep Clone Fixture

**Problem Statement:** Write a function `cloneFixture(fixture)` that returns a deep, independent copy, then demonstrate that changing the clone does not affect the original.

**Input Format:** A nested object.

**Output Format:** Print the original's nested value after mutating the clone.

**Sample Input:**
```
cloneFixture({ name: "rahul", address: { city: "NYC" } })
```

**Sample Output:**
```
NYC
```

**Solution:**
```javascript
function cloneFixture(fixture) {
    const clone = structuredClone(fixture);
    clone.address.city = "Delhi";
    return fixture.address.city;   // still "NYC"
}
```

---

### 15. Bind a Helper Method

**Problem Statement:** Write an object `logger` with a `prefix` and a `log(msg)` method that uses `this.prefix`. Export a **bound** function `logWithPrefix` so it still works when called standalone.

**Input Format:** No input.

**Output Format:** Print the prefixed message.

**Sample Input:**
```
logWithPrefix("test failed")
```

**Sample Output:**
```
[QA] test failed
```

**Solution:**
```javascript
const logger = {
    prefix: "[QA]",
    log(msg) {
        return `${this.prefix} ${msg}`;
    }
};

const logWithPrefix = logger.log.bind(logger);
```

---

### 16. Prototype Inheritance

**Problem Statement:** Write a function that creates a `baseReport` object with a `type` property, then creates a `smokeReport` via `Object.create(baseReport)` with its own `name`, and prints both an own and an inherited property.

**Input Format:** No input.

**Output Format:** Print the own property and the inherited property.

**Sample Input:**
```
run()
```

**Sample Output:**
```
Login
smoke
```

**Solution:**
```javascript
function run() {
    const baseReport = { type: "smoke" };
    const smokeReport = Object.create(baseReport);
    smokeReport.name = "Login";

    console.log(smokeReport.name);          // own
    console.log(smokeReport.type);          // inherited
}
```

---

### 17. Deep Merge

**Problem Statement:** Write a function `deepMerge(a, b)` that recursively merges two objects. On conflicting keys where both values are plain objects, merge them; otherwise `b` wins.

**Input Format:** Two nested objects `a` and `b`.

**Output Format:** Print the merged object.

**Sample Input:**
```
deepMerge(
  { timeout: 3000, retry: { count: 1, delay: 100 } },
  { retry: { count: 3 } }
)
```

**Sample Output:**
```
{ timeout: 3000, retry: { count: 3, delay: 100 } }
```

**Solution:**
```javascript
function deepMerge(a, b) {
    const out = { ...a };
    for (const [key, value] of Object.entries(b)) {
        const bothObjects =
            value && typeof value === "object" && !Array.isArray(value) &&
            out[key] && typeof out[key] === "object" && !Array.isArray(out[key]);
        out[key] = bothObjects ? deepMerge(out[key], value) : value;
    }
    return out;
}
```

---

### 18. Immutable Config Snapshot

**Problem Statement:** Write a function `snapshot(config)` that freezes the config deeply so that no property — including nested ones — can be changed, and demonstrate that a write attempt is ignored.

**Input Format:** A nested config object.

**Output Format:** Print the nested value after attempting to change it.

**Sample Input:**
```
snapshot({ server: { port: 8080 } })
```

**Sample Output:**
```
8080
```

**Solution:**
```javascript
function deepFreeze(obj) {
    for (const value of Object.values(obj)) {
        if (value && typeof value === "object") deepFreeze(value);
    }
    return Object.freeze(obj);
}

function snapshot(config) {
    const frozen = deepFreeze(config);
    frozen.server.port = 9999;   // silently ignored
    return frozen.server.port;   // 8080
}
```

---

## Bonus Practice Tips

- Prefer **optional chaining + `??`** for reading possibly-missing data.
- **Destructure function params** so callers pass an object and you read only what you need.
- **`Object.entries` / `Object.fromEntries`** are the bridge between objects and arrays.
- **`structuredClone`** for deep copies; **spread** for shallow merges.
- **`bind`** object methods when passing them as callbacks (Playwright event handlers).
- **`Object.create`** models prototype inheritance; `hasOwnProperty` separates own vs inherited.
- **`deepFreeze`** protects shared config — freeze is shallow unless you recurse.
