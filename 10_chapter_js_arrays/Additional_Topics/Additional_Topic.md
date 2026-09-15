# Additional Topics — every/some, flat, spread, destructuring, 2D arrays (Arrays)

The arrays chapter covers creation, access, mutation, search, iteration, transformation, and sorting thoroughly. These are the missing pieces — most appear only as un-demonstrated answers in the solution file.

## 1. `every()` and `some()` — Test Assertion Workhorses

```javascript
const results = ["pass", "pass", "pass"];
const mixed = ["pass", "fail", "pass"];

// every — ALL must pass the test
console.log(results.every(r => r === "pass"));   // true
console.log(mixed.every(r => r === "pass"));     // false

// some — ANY must pass the test
console.log(mixed.some(r => r === "fail"));      // true
console.log(results.some(r => r === "fail"));    // false

// Empty array quirk:
console.log([].every(x => x > 0));   // true — vacuous truth!
console.log([].some(x => x > 0));    // false
```

**Why it matters in testing:** "did all tests pass?" = `every`; "did any test fail?" = `some`.

## 2. `flat()` and `flatMap()`

```javascript
const nested = [1, [2, 3], [4, [5, 6]]];

console.log(nested.flat());     // [1, 2, 3, 4, [5, 6]] — 1 level
console.log(nested.flat(2));    // [1, 2, 3, 4, 5, 6] — 2 levels
console.log(nested.flat(Infinity));  // fully flat

// flatMap — map then flatten ONE level:
const words = ["hi there", "bye now"];
console.log(words.flatMap(w => w.split(" ")));  // ["hi", "there", "bye", "now"]
```

**Why it matters in testing:** API responses often contain nested arrays; flattening them for assertions is everyday work.

## 3. Spread Operator with Arrays

```javascript
// Copy
const original = [1, 2, 3];
const copy = [...original];          // new array, same values

// Merge
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];         // [1, 2, 3, 4]

// Insert in middle
const mid = [...a, 99, ...b];        // [1, 2, 99, 3, 4]

// Deduplicate with Set
const dupes = [1, 2, 2, 3];
const unique = [...new Set(dupes)];  // [1, 2, 3]

// Spread into function call
console.log(Math.max(...[5, 9, 2])); // 9
```

## 4. Array Destructuring

```javascript
const scores = [85, 92, 78, 95];

const [first, second] = scores;        // 85, 92
const [head, , third] = scores;        // skip: 85, 78
const [top, ...rest] = scores;         // 85, [92, 78, 95]

// Swap values (no temp variable):
let x = 1, y = 2;
[x, y] = [y, x];                       // x=2, y=1

// With entries() — index + value:
for (const [i, score] of scores.entries()) {
    console.log(i, score);
}
```

## 5. `Array.isArray()`

```javascript
console.log(Array.isArray([1, 2]));    // true
console.log(Array.isArray("hello"));   // false
console.log(Array.isArray({}));        // false
console.log(typeof [1, 2]);            // "object" — the trap!
```

The `typeof [] === "object"` trap makes `Array.isArray()` the only reliable check.

## 6. `keys()`, `values()`, `entries()` — The Iterator Trio

```javascript
const arr = ["a", "b", "c"];

for (const key of arr.keys()) console.log(key);      // 0, 1, 2
for (const value of arr.values()) console.log(value); // a, b, c
for (const entry of arr.entries()) console.log(entry); // [0,"a"], [1,"b"], [2,"c"]
```

## 7. `join()` and `toString()`

```javascript
const browsers = ["chrome", "firefox", "webkit"];
console.log(browsers.join());               // "chrome,firefox,webkit"
console.log(browsers.join(" | "));          // "chrome | firefox | webkit"
console.log(browsers.join(""));             // "chromefirefoxwebkit"
console.log(browsers.toString());           // "chrome,firefox,webkit"
```

**Why it matters in testing:** building CSV lines, comma-separated locators, and log messages.

## 8. Multidimensional Arrays

```javascript
// 2D array (matrix)
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[0][1]);   // 2 — row 0, column 1
console.log(matrix[2][2]);   // 9

// Iterate with nested loops:
for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        console.log(`[${row}][${col}] = ${matrix[row][col]}`);
    }
}
```

## 9. Sorting Arrays of Objects

```javascript
const users = [
    { name: "Rahul", score: 85 },
    { name: "Saanvi", score: 95 },
    { name: "Monu", score: 70 }
];

// By number property:
users.sort((a, b) => a.score - b.score);
console.log(users.map(u => u.name));   // ["Monu", "Rahul", "Saanvi"]

// By string property (localeCompare handles case):
users.sort((a, b) => a.name.localeCompare(b.name));
console.log(users.map(u => u.name));   // ["Monu", "Rahul", "Saanvi"]
```

## 10. `fill()` and ES2023 Non-Mutating Methods

```javascript
// fill — create fixed-size fixtures
console.log(new Array(3).fill(0));     // [0, 0, 0]
console.log(new Array(3).fill("pass")); // ["pass", "pass", "pass"]

// ES2023 — non-mutating versions:
const arr = [3, 1, 2];
console.log(arr.toSorted());          // [1, 2, 3] — new array
console.log(arr);                      // [3, 1, 2] — original unchanged!
console.log(arr.toReversed());        // [2, 1, 3]
```
