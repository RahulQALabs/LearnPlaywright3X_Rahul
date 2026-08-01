# Additional Topics — Programming Practice (Arrays)

## Easy Programs

**1. Write a program using `every` and `some` for test results.**

```javascript
const results = ["pass", "fail", "pass"];
console.log(results.every(r => r === "pass"));  // false
console.log(results.some(r => r === "fail"));   // true
console.log(results.some(r => r === "error"));  // false
```

**2. Write a program flattening a nested array.**

```javascript
const nested = [1, [2, 3], [4, [5, 6]]];
console.log(nested.flat());    // [1, 2, 3, 4, [5, 6]]
console.log(nested.flat(2));   // [1, 2, 3, 4, 5, 6]
```

**3. Write a program using `flatMap` to split phrases.**

```javascript
const phrases = ["hello world", "goodbye moon"];
console.log(phrases.flatMap(p => p.split(" ")));
// ["hello", "world", "goodbye", "moon"]
```

**4. Write a program demonstrating array spread.**

```javascript
const a = [1, 2];
const b = [3, 4];
console.log([...a, ...b]);      // [1, 2, 3, 4]
console.log([...a, 99, ...b]);  // [1, 2, 99, 3, 4]
console.log([...a].reverse());  // [2, 1] — copy first!
```

**5. Write a program with array destructuring.**

```javascript
const scores = [85, 92, 78, 95];
const [first, second] = scores;
const [head, , third] = scores;
const [top, ...rest] = scores;
console.log(first, second);  // 85 92
console.log(head, third);    // 85 78
console.log(top, rest);      // 85 [92, 78, 95]
```

---

## Medium Programs

**6. Write a program deduplicating an array with Set + spread.**

```javascript
const browsers = ["chrome", "firefox", "chrome", "webkit", "firefox"];
const unique = [...new Set(browsers)];
console.log(unique);   // ["chrome", "firefox", "webkit"]
```

**7. Write a program using `keys`, `values`, and `entries`.**

```javascript
const arr = ["a", "b", "c"];
console.log([...arr.keys()]);      // [0, 1, 2]
console.log([...arr.values()]);    // ["a", "b", "c"]
console.log([...arr.entries()]);   // [[0,"a"], [1,"b"], [2,"c"]]
```

**8. Write a program building a CSV line with `join`.**

```javascript
const headers = ["name", "browser", "status"];
const row = ["login", "chromium", "pass"];
console.log(headers.join(","));  // "name,browser,status"
console.log(row.join(","));      // "login,chromium,pass"
```

**9. Write a program with a 2D matrix and nested loop iteration.**

```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][2]);   // 6
for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        console.log(`[${row}][${col}] = ${matrix[row][col]}`);
    }
}
```

**10. Write a program sorting objects by score and name.**

```javascript
const users = [
    { name: "Rahul", score: 85 },
    { name: "Saanvi", score: 95 },
    { name: "Monu", score: 70 }
];
users.sort((a, b) => b.score - a.score);   // descending
console.log(users.map(u => u.name));       // ["Saanvi", "Rahul", "Monu"]
users.sort((a, b) => a.name.localeCompare(b.name));
console.log(users.map(u => u.name));       // ["Monu", "Rahul", "Saanvi"]
```

---

## Hard Programs

**11. Write a program swapping variables with destructuring.**

```javascript
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y);   // 2 1
```

**12. Write a program using `fill` to create test fixtures.**

```javascript
const fixture = new Array(3).fill({ status: "pending" });
console.log(fixture);   // [{status:"pending"}, {status:"pending"}, {status:"pending"}]
console.log(new Array(5).fill(0));   // [0, 0, 0, 0, 0]
```

**13. Write a program demonstrating ES2023 non-mutating methods.**

```javascript
const arr = [3, 1, 2];
console.log(arr.toSorted());     // [1, 2, 3]
console.log(arr.toReversed());   // [2, 1, 3]
console.log(arr);                // [3, 1, 2] — unchanged!
```

**14. Write a program flattening API-response nested data.**

```javascript
const apiResponse = {
    data: {
        users: [
            { name: "Rahul", tags: ["admin", "user"] },
            { name: "Saanvi", tags: ["user"] }
        ]
    }
};
const allTags = apiResponse.data.users.flatMap(u => u.tags);
console.log(allTags);   // ["admin", "user", "user"]
```

**15. Write a program using every/some for test assertions.**

```javascript
const testResults = [
    { name: "Login", status: "pass" },
    { name: "Checkout", status: "pass" },
    { name: "Signup", status: "fail" }
];

const allPassed = testResults.every(t => t.status === "pass");
const anyFailed = testResults.some(t => t.status === "fail");
console.log("All passed:", allPassed);   // false
console.log("Any failed:", anyFailed);   // true
```
