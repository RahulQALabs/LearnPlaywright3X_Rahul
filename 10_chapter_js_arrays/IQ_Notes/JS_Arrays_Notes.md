# JavaScript Arrays — Detailed Notes

## 1. Introduction

An **array** is a special variable that can hold **multiple values** in a single container, stored at numbered positions (indexes). In JavaScript, arrays are dynamic — they grow and shrink automatically, and can hold mixed data types.

Arrays are everywhere in real development: test data sets, browser lists, API responses, user records, and more.

## 2. Learning Objectives

- Create arrays using literals, constructors, `Array.of()`, and `Array.from()`.
- Access and modify elements by index, including negative index with `.at()`.
- Add and remove elements using `push`, `pop`, `unshift`, `shift`, and `splice`.
- Search elements with `indexOf`, `lastIndexOf`, `includes`, `find`, `findIndex`, `findLast`, `findLastIndex`.
- Iterate arrays using `for`, `for...of`, `forEach`, and `entries()`.
- Transform arrays with `map`, `filter`, `reduce`.
- Sort arrays and understand sorting quirks with numbers.
- Use `slice` to extract portions without modifying the original.

## 3. Creating Arrays

### Array Literal (Preferred Way)

From `01_arrays.js`:

```javascript
let fruit = [];
let browsers = ["chrome", "firefox", "ie"];
```

The literal syntax `[]` is the simplest and most performant way.

### Array Constructor

From `03_array_creation.js`:

```javascript
let score1 = new Array(3);      // creates array of length 3 (empty slots)
let score2 = new Array(1, 2, 3); // creates [1, 2, 3]
```

⚠️ **Gotcha:** `new Array(3)` creates 3 empty slots, not `[3]`. Use literals to avoid confusion.

### Array.of() and Array.from()

```javascript
let test = Array.of(10, 20, 30, 40);   // [10, 20, 30, 40]
let chars = Array.from("Hello");       // ['H', 'e', 'l', 'l', 'o']
```

- `Array.of()` — creates array from arguments (unlike constructor, no length quirk).
- `Array.from()` — converts iterables (strings, Sets, Maps) into arrays.

## 4. Accessing Elements

### By Index

From `04_array_access_modify.js` and `05_array_access_modify.js`:

```javascript
let statuses = ["pass", "fail", "skip"];

console.log(statuses[0]);   // "pass"
console.log(statuses[2]);   // "skip"
console.log(statuses[-1]);  // undefined — bracket notation doesn't support negative
```

### The `.at()` Method (ES2022)

```javascript
console.log(statuses.at(-1));  // "skip"
console.log(statuses.at(-2));  // "fail"
console.log(statuses.at(-4));  // undefined — out of bounds
```

`.at()` supports **negative indexing**, which counts from the end. `-1` gives the last element, `-2` the second-to-last, etc. Bracket notation `[-1]` doesn't work — it treats it as a property lookup.

### Length Property

From `01_arrays.js`:

```javascript
let browsers = ["chrome", "firefox", "ie"];
console.log(browsers.length);  // 3

let fruit = [];
console.log(fruit.length);     // 0
```

## 5. Modifying Elements

From `05_array_access_modify.js`:

```javascript
let statuses = ["pass", "fail", "skip"];
statuses[0] = "blocked";
console.log(statuses);  // ["blocked", "fail", "skip"]
```

You can overwrite any index directly. If you assign to an index beyond the length, the array grows automatically (with empty slots in between).

## 6. Adding and Removing Elements

From `06_array_adding_removing.js`:

### Add to End — `push()`

```javascript
let a = [1, 2, 3, 4, 5];
a.push(6);           // [1, 2, 3, 4, 5, 6]
a.push(7, 8, 9);     // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

`push` adds one or more elements to the **end** and returns the new length.

### Remove from End — `pop()`

```javascript
a.pop();  // removes 9, returns 9
```

`pop` removes the **last** element and returns it.

### Add to Beginning — `unshift()`

```javascript
a.unshift(0);  // [0, 1, 2, 3, 4, 5, 6, 7, 8]
a.unshift(3);  // [3, 0, 1, 2, 3, 4, 5, 6, 7, 8]
```

`unshift` adds element(s) to the **beginning** and shifts everything right.

### Remove from Beginning — `shift()`

```javascript
a.shift();  // removes first element, returns it
```

`shift` removes the **first** element and shifts everything left.

### Splice — The Swiss Army Knife

From `06_array_adding_removing.js`:

```javascript
// Remove at index: splice(start, deleteCount)
a.splice(2, 1);       // removes 1 element at index 2

// Insert at index: splice(start, 0, newItem)
a.splice(2, 0, 99);   // inserts 99 at index 2, shifts rest right

// Replace: splice(start, deleteCount, newItem)
a.splice(5, 2, 199);  // removes 2 at index 5, inserts 199

// Works with negative indices too
a.splice(-1, 1, 1);   // replaces last element with 1
```

| Use Case | Code | Behavior |
|----------|------|----------|
| Remove | `splice(i, n)` | Removes `n` items starting at index `i` |
| Insert | `splice(i, 0, item)` | Inserts `item` at index `i` (deleteCount = 0) |
| Replace | `splice(i, n, item)` | Removes `n`, inserts `item` |
| Negative | `splice(-1, 1)` | Removes last element |

### Real Example — Browser List Management

From `07_array_real.js`:

```javascript
let browsers = ["chrome", "safari", "ie", "firefox", "chromium"];

browsers.pop();                          // remove "chromium" from end
let removed = browsers.shift();          // remove "chrome" from start, store it
// browsers is now: ["safari", "ie", "firefox"]
```

| Method | Action | Returns | Modifies Original? |
|--------|--------|---------|-------------------|
| `push(item)` | Add to end | New length | ✅ Yes |
| `pop()` | Remove from end | Removed item | ✅ Yes |
| `unshift(item)` | Add to front | New length | ✅ Yes |
| `shift()` | Remove from front | Removed item | ✅ Yes |
| `splice(i, n, ...)` | Remove/insert/replace | Removed items array | ✅ Yes |

## 7. Searching Elements

From `08_array_searching.js`:

### indexOf / lastIndexOf / includes

```javascript
let results = ["pass", "fail", "pass", "error", "pass", "fail"];

console.log(results.indexOf("pass"));       // 0 — first occurrence
console.log(results.indexOf("fail"));       // 1
console.log(results.indexOf("skip"));       // -1 — not found
console.log(results.lastIndexOf("pass"));   // 4 — last occurrence
console.log(results.includes("error"));     // true
console.log(results.includes("skip"));      // false
```

| Method | Returns | Use Case |
|--------|---------|----------|
| `indexOf(value)` | First index or `-1` | Find position of an item |
| `lastIndexOf(value)` | Last index or `-1` | Find last position |
| `includes(value)` | `true`/`false` | Check if item exists (cleaner) |

### find / findIndex / findLast / findLastIndex

From `09_IQ.js`:

```javascript
let num = [10, 20, 30, 40, 50];

let result = num.find(x => x > 20);           // 30 — first element > 20
let index = num.findIndex(x => x > 20);       // 2 — index of 30
let last = num.findLast(x => x > 20);         // 50 — last element > 20
let lastIndex = num.findLastIndex(x => x > 20); // 4 — index of 50
```

| Method | Returns | Searches From |
|--------|---------|---------------|
| `find(callback)` | First matching element (or `undefined`) | Start → End |
| `findIndex(callback)` | Index of first match (or `-1`) | Start → End |
| `findLast(callback)` | Last matching element (or `undefined`) | End → Start |
| `findLastIndex(callback)` | Index of last match (or `-1`) | End → Start |

These take a **callback function** (an arrow function like `x => x > 20`) that returns `true`/`false`.

## 8. Iterating Arrays

From `10_array_iterate.js`:

### Traditional for Loop

```javascript
let tests = ["login", "checkout", "search", "logout"];
for (let index = 0; index < tests.length; index++) {
    console.log(index, tests[index]);
}
// 0 "login", 1 "checkout", 2 "search", 3 "logout"
```

Gives you both index and value. Fastest but most verbose.

### for...of (Cleanest for Values)

```javascript
for (let test of tests) {
    console.log(test);
}
// "login", "checkout", "search", "logout"
```

Gives you just the **values**. Cleanest and most readable when you don't need the index.

### forEach (Method Chaining Style)

```javascript
tests.forEach((test, index) => {
    console.log(`${index} ------ ${test}`);
});
// 0 ------ login, 1 ------ checkout, etc.
```

Takes a callback. Gives value and index. But can't `break` or `await`.

### entries() — Index + Value

```javascript
for (let [i, test] of tests.entries()) {
    console.log(i, test);
}
```

`entries()` returns an iterator of `[index, value]` pairs. Destructure with `[i, test]`.

### Gotcha with `for...in` on Arrays

```javascript
let students = ["mathis", "james", "john"];
for (let student of students) {
    console.log(student, "---->>>>", students[student]);
}
// mathis ---->>>> undefined — because student is "mathis", not an index
```

⚠️ `for...of` gives **values**, so using `students[student]` treats the value as an index, which doesn't work. Use `for` or `entries()` when you need the index.

## 9. Transforming Arrays

From `11_arrays_transformation.js`:

### map — Transform Each Element

```javascript
let scores = [45, 70, 85, 93, 99];
let grades = scores.map(item_score => item_score > 70 ? "Pass" : "Fail");
// ["Fail", "Fail", "Pass", "Pass", "Pass"]
```

`map` creates a **new array** with the same length, applying a function to each element. Perfect for converting one format to another.

### filter — Keep Matching Elements

```javascript
let passing = scores.filter(s => s >= 70);
// [70, 85, 93, 99]
```

`filter` creates a **new array** with only elements that pass the test. The resulting array may be smaller than the original.

### reduce — Combine to Single Value

```javascript
let total = scores.reduce((sum, s) => sum + s, 0);
// 392
```

`reduce` processes each element and accumulates them into a single value (a sum, average, object, etc.).

| Method | Returns | Length | Use Case |
|--------|---------|--------|----------|
| `map(fn)` | New array | Same as original | Convert every element |
| `filter(fn)` | New array | Same or smaller | Select matching elements |
| `reduce(fn, init)` | Single value | N/A | Total, average, group |

## 10. Sorting Arrays

From `12_sorting.js`:

### String Sort

```javascript
let fruits = ["banana", "apple", "grapes"];
fruits.sort();
console.log(fruits);  // ["apple", "banana", "grapes"]
```

Strings sort alphabetically by default. Works as expected.

### Number Sort — The Gotcha

```javascript
let num = [4, 2, 6, 5, 7, 8, 1, 0];
console.log(num.sort());  // [0, 1, 2, 4, 5, 6, 7, 8] — works fine here

let num1 = [10, 1, 21, 3];
console.log(num1.sort());  // [1, 10, 21, 3] — WRONG!
```

**Default sort converts numbers to strings**, so `"10"` comes before `"3"`. Always use a compare function for numbers.

### Compare Function — Ascending & Descending

```javascript
// Ascending
num1.sort((a, b) => a - b);   // [1, 3, 10, 21]

// Descending
num1.sort((a, b) => b - a);   // [21, 10, 3, 1]
```

The compare function returns:
- **Negative**: `a` comes before `b`
- **Zero**: equal, no change
- **Positive**: `b` comes before `a`

### Reverse

```javascript
num1.reverse();  // reverses the array order
```

### Slice — Extract Without Modifying

```javascript
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(arr.slice(1, 3));   // [2, 3] — from index 1 up to (not including) 3
console.log(arr.slice(2));      // [3, 4, 5, 6, 7, 8] — from index 2 to end
console.log(arr.slice(-2));     // [7, 8] — last 2 elements
console.log(arr.slice(-3, -1)); // [6, 7] — from -3 up to (not including) -1
console.log(arr.slice(-3, -3)); // [] — start equals end = empty
console.log(arr);               // [1, 2, 3, 4, 5, 6, 7, 8] — original unchanged!
```

`slice(start, end)` returns a **shallow copy** from `start` (inclusive) to `end` (exclusive). Negative indices count from the end. Original array is **not modified**.

| Aspect | `splice` | `slice` |
|--------|----------|---------|
| Modifies original? | ✅ Yes | ❌ No |
| Purpose | Add/remove/replace | Extract/copy |
| Returns | Removed items | New array |

## 11. Key Takeaways

- **Array literal `[]`** is preferred over `new Array()` — simpler and avoids the length gotcha.
- **`.at()` supports negative indexing**, bracket notation does not.
- **`push`/`pop`** work on the **end** (fast), `unshift`/`shift` work on the **front** (slower — shifts all elements).
- **`splice`** is the all-in-one tool: remove, insert, or replace at any position.
- **`indexOf`** returns the first match position, **`lastIndexOf`** returns the last. Use **`includes`** for a simple true/false check.
- **`find`** returns the first matching element using a callback — powerful for searching objects in arrays.
- **`map`** transforms every element, **`filter`** selects matching elements, **`reduce`** combines into one value.
- **`sort()` with numbers needs a compare function** — default converts to strings.
- **`slice`** extracts without modifying the original; **`splice`** modifies the original in place.
- **`for...of`** gives values cleanly; **`for`** gives index + value; **`forEach`** is method-style but can't break.
