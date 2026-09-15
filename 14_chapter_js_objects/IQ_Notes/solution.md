# Interview Questions — Objects (Solutions)

## Easy Questions (1–18)

**1. What is an object in JavaScript?**
An object is a collection of **key → value** pairs used to group related data — like a user record or a test config. It's a reference type, so variables hold a pointer to it.

**2. How do you create an object in JavaScript?**
The normal way is an object literal: `{ name: "rahul", age: 30 }`. You can also use `new Object()` or `Object.create()`, but literals are preferred.

**3. Difference between quoted and unquoted keys in a literal?**
They produce the same object. `{ name: "Rahul" }` and `{ "name": "Rahul" }` are identical — quotes are optional when the key is a valid identifier.

**4. What is a key-value pair?**
A property name and its value, like `status: "pass"`. The key is the label; the value is the data stored under it.

**5. How do you access a property using dot notation?**
`user.name` or `user.age`. It's the clean, readable style for fixed, valid keys.

**6. How do you access a property using bracket notation?**
`user["name"]` or `user[key]`. It works with any key, including dynamic ones.

**7. When must you use bracket notation instead of dot notation?**
When the key comes from a variable, contains spaces/special characters, or starts with a digit: `user[key]`, `obj["first name"]`, `obj["1st"]`.

**8. Are object keys case-sensitive?**
Yes. `status`, `Status`, and `STATUS` are three different properties.

**9. How do you add a new property to an object?**
Assign it: `user.city = "NYC"` or `user["city"] = "NYC"`. If the key doesn't exist, it's created.

**10. How do you modify an existing property?**
Assign a new value to the same key: `user.age = 31`. The latest value wins.

**11. How do you delete a property from an object?**
Use `delete`: `delete user.city;`. The property is removed from the object.

**12. What does `delete` return?**
A boolean — `true` if the deletion succeeded (or the key didn't matter), `false` only in unusual cases. Usually people ignore the return value.

**13. Can an object hold values of different data types?**
Yes. `{ name: "rahul", age: 30, active: true, tags: ["a"] }` mixes strings, numbers, booleans, and arrays.

**14. Can an object hold functions?**
Yes. A function stored as a property is called a **method**: `{ greet() { return "hi"; } }`.

**15. What is a method in an object?**
A function that lives as a property. Inside it, `this` refers to the object it's called on: `user.getName()`.

**16. What is the difference between `{}` and `new Object()`?**
Functionally the same — both create an empty object. `{}` is shorter and preferred; `new Object()` is rarely used.

**17. How do you check if a property exists on an object?**
`"name" in user` or `user.hasOwnProperty("name")`. Both return `true`/`false`. `in` also sees inherited keys.

**18. How do you get the number of properties in an object?**
`Object.keys(obj).length`. An object has no `.length` of its own.

---

## Medium Questions (19–42)

**19. What is the output of this code?**
```javascript
let a = { status: "pass" };
console.log(a.status);      // "pass" — dot
console.log(a["status"]);   // "pass" — bracket, same property
```

**20. What is the output of this code?**
```javascript
let a2 = { status: "pass", Status: "fail" };
console.log(a2["status"]);   // "pass"
console.log(a2["Status"]);   // "fail" — different key
console.log(a2["STATUS"]);   // undefined — no such key
```

**21. What is the output of this code?**
```javascript
const user = { name: "rahul", age: 30 };
let key = "name";
console.log(user.key);    // undefined — looks for a literal "key"
console.log(user[key]);   // "rahul" — evaluates the variable
```

**22. What is the difference between `user.key` and `user[key]`?**
`user.key` looks up the property literally named `"key"`. `user[key]` evaluates the variable `key` first and looks up that value. Dot is static; bracket is dynamic.

**23. What is the output of this code?**
```javascript
let config = {};
config.browser = "Chrome";
config.timeout = 3000;
config.timeout = 5000;     // overwrites
console.log(config);       // { browser: "Chrome", timeout: 5000 }
delete config.browser;
console.log(config);       // { timeout: 5000 }
```

**24. What is the output of this code?**
```javascript
const user = { name: "rahul" };
user.city = "NYC";         // adding is allowed even with const
console.log(user);         // { name: "rahul", city: "NYC" }
```

**25. Can you add a property to a `const` object? Why?**
Yes. `const` prevents reassigning the **variable** to a new object, but the object's properties remain mutable. `user.city = "NYC"` is fine.

**26. What is the output of this code?**
```javascript
const user = {
    name: "rahul",
    getName() { return this.name; }
};
console.log(user.getName());   // "rahul"
```

**27. What does `this` refer to inside an object method?**
The object the method is called on — here `user`. It's determined by **how** the method is called (`obj.method()`), not where it's defined.

**28. What is the output of this code?**
```javascript
let obj1 = { val: 10 };
let obj2 = obj1;           // same reference
obj2.val = 99;
console.log(obj1.val);     // 99 — changed through obj2
console.log(obj2.val);     // 99
```

**29. What is the output of this code?**
```javascript
let a = 10;
let b = a;                 // copy of the value
b = 99;
console.log(a);            // 10
console.log(b);            // 99
```

**30. Difference between assigning a primitive and an object?**
A primitive copy carries the **value**, so changes don't affect the original. An object copy carries the **reference**, so both names mutate the same object.

**31. What is the output of this code?**
```javascript
let c = { status: "pass" };
let d = { status: "pass" };
console.log(c === d);   // false — different references
```

**32. How do you compare two objects by content?**
For simple data: `JSON.stringify(c) === JSON.stringify(d)`. For robust checks use a deep-equal helper (e.g. Node's `assert.deepStrictEqual`). Plain `===` only compares references.

**33. What is the output of this code?**
```javascript
const user = { name: "rahul", age: 30, city: "NYC" };
console.log(Object.keys(user));    // ["name", "age", "city"]
console.log(Object.values(user));  // ["rahul", 30, "NYC"]
console.log(Object.entries(user)); // [["name","rahul"], ["age",30], ["city","NYC"]]
```

**34. Difference between `for...in` and `for...of` for objects?**
`for...in` iterates **keys** (including inherited ones). `for...of` doesn't work directly on plain objects — it needs an iterable, so use `Object.entries(obj)` with it.

**35. What is the output of this code?**
```javascript
const user = { name: "rahul", age: 30 };
const { name, age } = user;
console.log(name, age);   // "rahul" 30
```

**36. What is object destructuring?**
Unpacking properties into variables: `const { name, age } = user`. It's a shorter, cleaner alternative to `user.name` / `user.age`.

**37. What is the output of this code?**
```javascript
const { name: userName, role = "tester" } = { name: "rahul" };
console.log(userName, role);   // "rahul" "tester"
```
`: userName` renames the variable; `= "tester"` is the default when the property is missing.

**38. What is optional chaining?**
The `?.` operator safely accesses nested properties — if a link is `null`/`undefined`, it returns `undefined` instead of throwing.

**39. What is the output of this code?**
```javascript
const data = { user: { profile: null } };
console.log(data.user?.profile?.name);   // undefined — no crash
console.log(data.account?.id);           // undefined
```

**40. Difference between `?.` and `??`?**
`?.` guards **access** and returns `undefined` when a link is missing. `??` supplies a **fallback** value when the left side is `null`/`undefined`.

**41. How do you make a shallow copy of an object?**
Spread: `{ ...original }`, or `Object.assign({}, original)`. Nested objects are still shared after a shallow copy.

**42. What is the output of this code?**
```javascript
const original = { name: "rahul", address: { city: "NYC" } };
const shallow = { ...original };
shallow.address.city = "Delhi";
console.log(original.address.city);   // "Delhi" — nested object is shared
```
Shallow copy duplicates only the top level; `address` still points to the same object.

---

## Logical / Reasoning Questions (43–56)

**43. What is the output and why?**
```javascript
let b = { status: "pass" };
let a = b;
b.status = "fail";
console.log(a.status);   // "fail" — a and b are the same object
```

**44. What is the output and why?**
```javascript
const x = {};
const y = {};
console.log(x === y);   // false — two distinct objects
console.log(x == y);    // false — == still compares references for objects
```

**45. What is the output and why?**
```javascript
const user = { name: "rahul" };
const copy = { ...user };
copy.name = "gupta";
console.log(user.name);   // "rahul" — spread made an independent top level
console.log(copy.name);   // "gupta"
```

**46. What is the output and why?**
```javascript
const a = { x: 1 };
const b = { x: 1 };
console.log(JSON.stringify(a) === JSON.stringify(b));   // true — same content
```
`JSON.stringify` serialises both to `'{"x":1}'`, so the strings match.

**47. What is the output and why?**
```javascript
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj).length);   // 3 — three own properties
```

**48. What is the output and why?**
```javascript
const user = { name: "rahul" };
console.log("name" in user);                 // true
console.log(user.hasOwnProperty("age"));     // false — no "age" key
```

**49. What is the output and why?**
```javascript
const key = "status";
const obj = { [key]: "pass" };
console.log(obj.status);   // "pass"
```
`[key]` is a computed property name — the key becomes the variable's value `"status"`.

**50. What is the output and why?**
```javascript
const name = "rahul";
const age = 30;
const user = { name, age };
console.log(user);   // { name: "rahul", age: 30 }
```
Property shorthand: `{ name }` means `{ name: name }`.

**51. What is the output and why?**
```javascript
const user = { name: "rahul", address: { city: "NYC" } };
const { address: { city } } = user;
console.log(city);   // "NYC" — nested destructuring
```

**52. What is the output and why?**
```javascript
const config = { browser: "chrome" };
Object.freeze(config);
config.browser = "firefox";   // silently ignored
console.log(config.browser);  // "chrome" — frozen
```

**53. What is the output and why?**
```javascript
const obj = { a: 1 };
obj = { a: 2 };   // TypeError: Assignment to constant variable
```
`const` locks the binding — you can't reassign the variable, though you can still mutate its properties.

**54. What is the output and why?**
```javascript
const a = { n: 1 };
const b = { ...a };
b.n = 2;
console.log(a.n, b.n);   // 1 2 — spread gave b its own top-level property
```

**55. What is the output and why?**
```javascript
console.log(typeof {});     // "object"
console.log(typeof []);     // "object" — arrays are objects too
console.log(typeof null);   // "object" — historical bug in JavaScript
```

**56. What is the output and why?**
```javascript
const user = { name: "rahul" };
console.log(user.toString());   // "[object Object]"
```
Every object inherits `toString` from `Object.prototype`.

---

## Programming Questions (57–80)

**57. Create a test-case object with `id`, `name`, `status`.**
```javascript
const testCase = { id: 1, name: "Login", status: "pass" };
console.log(testCase);
```

**58. Access and print all properties using dot notation.**
```javascript
const tc = { id: 1, name: "Login", status: "pass" };
console.log(tc.id, tc.name, tc.status);   // 1 Login pass
```

**59. Add a new property to an existing object.**
```javascript
const user = { name: "rahul" };
user.city = "NYC";
console.log(user);   // { name: "rahul", city: "NYC" }
```

**60. Update the value of a property.**
```javascript
const user = { age: 30 };
user.age = 31;
console.log(user.age);   // 31
```

**61. Delete a property from an object.**
```javascript
const user = { name: "rahul", city: "NYC" };
delete user.city;
console.log(user);   // { name: "rahul" }
```

**62. Loop through an object and print each key and value.**
```javascript
const user = { name: "rahul", age: 30 };
for (const [key, value] of Object.entries(user)) {
    console.log(`${key} = ${value}`);
}
```

**63. Count the number of properties in an object.**
```javascript
console.log(Object.keys({ a: 1, b: 2, c: 3 }).length);   // 3
```

**64. Check whether a given key exists in an object.**
```javascript
const user = { name: "rahul" };
console.log("name" in user);   // true
console.log("age" in user);    // false
```

**65. Merge two objects into one.**
```javascript
const a = { x: 1 };
const b = { y: 2 };
console.log({ ...a, ...b });        // { x: 1, y: 2 }
```
`Object.assign({}, a, b)` gives the same result.

**66. Copy an object without affecting the original.**
```javascript
const original = { name: "rahul" };
const copy = { ...original };
copy.name = "gupta";
console.log(original.name, copy.name);   // "rahul" "gupta"
```

**67. Deep-clone a nested object.**
```javascript
const original = { name: "rahul", address: { city: "NYC" } };
const deep = structuredClone(original);
deep.address.city = "Delhi";
console.log(original.address.city);   // "NYC" — independent
```

**68. Extract specific properties using destructuring.**
```javascript
const user = { name: "rahul", age: 30, city: "NYC" };
const { name, city } = user;
console.log(name, city);   // "rahul" "NYC"
```

**69. Create an object method that returns a full name.**
```javascript
const person = {
    first: "rahul",
    last: "gupta",
    fullName() { return `${this.first} ${this.last}`; }
};
console.log(person.fullName());   // "rahul gupta"
```

**70. Convert an object into an array of its entries.**
```javascript
const user = { name: "rahul", age: 30 };
console.log(Object.entries(user));   // [["name","rahul"], ["age",30]]
```

**71. Convert an array of `[key, value]` pairs back into an object.**
```javascript
const pairs = [["name", "rahul"], ["age", 30]];
console.log(Object.fromEntries(pairs));   // { name: "rahul", age: 30 }
```

**72. Count word occurrences using an object as a counter.**
```javascript
const words = "pass fail pass error pass".split(" ");
const counts = {};
for (const w of words) {
    counts[w] = (counts[w] || 0) + 1;
}
console.log(counts);   // { pass: 3, fail: 1, error: 1 }
```

**73. Build a test-report object from an array of results.**
```javascript
const results = ["pass", "fail", "pass", "error"];
const report = {};
for (const r of results) {
    report[r] = (report[r] || 0) + 1;
}
console.log(report);   // { pass: 2, fail: 1, error: 1 }
```

**74. Safely read a deeply nested property.**
```javascript
const data = { user: { profile: null } };
console.log(data.user?.profile?.name ?? "not found");   // "not found"
```

**75. Rename a key in an object.**
```javascript
const user = { name: "rahul" };
user.username = user.name;
delete user.name;
console.log(user);   // { username: "rahul" }
```

**76. Sort an array of objects by a numeric property.**
```javascript
const tests = [{ n: "A", score: 90 }, { n: "B", score: 70 }];
tests.sort((a, b) => a.score - b.score);
console.log(tests.map(t => t.n));   // ["B", "A"]
```

**77. Group an array of objects by a property.**
```javascript
const items = [{ grade: "A" }, { grade: "B" }, { grade: "A" }];
const grouped = items.reduce((acc, item) => {
    (acc[item.grade] = acc[item.grade] || []).push(item);
    return acc;
}, {});
console.log(Object.keys(grouped));   // ["A", "B"]
```

**78. Get only the properties whose values are numbers.**
```javascript
const obj = { a: 1, b: "x", c: 3, d: true };
const numbers = Object.entries(obj).filter(([, v]) => typeof v === "number");
console.log(Object.fromEntries(numbers));   // { a: 1, c: 3 }
```

**79. Freeze a config object so it cannot be changed.**
```javascript
const config = { browser: "chrome" };
Object.freeze(config);
config.browser = "firefox";   // ignored
console.log(config.browser);  // "chrome"
```

**80. Produce a formatted report string from a user object.**
```javascript
const user = { name: "rahul", age: 30 };
const report = `${user.name} is ${user.age} years old`;
console.log(report);   // "rahul is 30 years old"
```

---

## Hard Questions (81–100)

**81. Explain call by value vs call by reference.**
Primitives (`number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`) are passed by **value** — the copy is independent. Objects, arrays, and functions are passed by **reference** — copying shares the same underlying object.

**82. Why does `obj2 = obj1` not create a copy?**
It copies the **reference** (the memory address), not the data. Both names now point to one object, so changes through either are visible through both.

**83. What is a shallow copy vs a deep copy?**
Shallow copy duplicates only the top level — nested objects stay shared (`{ ...obj }`, `Object.assign`). Deep copy recreates every level so nothing is shared (`structuredClone`).

**84. Limitations of `JSON.parse(JSON.stringify(obj))`?**
It drops functions and `undefined`, converts `Date` to strings, throws on circular references, and mangles `Map`/`Set`/`RegExp`. Fine for plain data, unsafe in general.

**85. How does `structuredClone()` improve on the JSON approach?**
It's a real deep clone that preserves `Date`, `Map`, `Set`, `RegExp`, and handles circular references — no functions, but far safer than the JSON round-trip.

**86. How does `this` behave in an arrow function inside an object?**
An arrow function doesn't bind its own `this` — it takes `this` from the surrounding scope. So `this` in `{ fn: () => this.name }` is **not** the object (it's the outer scope, often `undefined`).

**87. Why does `const` not make properties immutable?**
`const` only prevents reassigning the **variable**. The object it points to is still mutable — property changes are allowed.

**88. How do you make an object's properties truly immutable?**
`Object.freeze(obj)` makes existing properties non-writable and non-configurable (shallow). For deep immutability you'd freeze nested objects too.

**89. Difference between `Object.freeze` and `Object.seal`?**
`freeze` — no add, modify, or delete. `seal` — can **modify** existing properties but cannot add or delete. Both are shallow.

**90. Difference between `hasOwnProperty` and `in`?**
`hasOwnProperty` checks only the object's own properties. `in` also returns `true` for properties inherited from the prototype chain.

**91. How do prototype properties affect `for...in`?**
`for...in` walks inherited enumerable properties too, so it can show prototype keys. Use `Object.keys()` or `hasOwnProperty` to iterate own keys only.

**92. How does key order work in an object?**
Integer-like keys come first in ascending numeric order, then string keys in insertion order, then symbols. That's why `{b:1, 2:2, a:3}` lists `"2"` first.

**93. How do you compare two objects for deep equality without a library?**
Recursively compare keys and values, or use `JSON.stringify` for plain data, or Node's `assert.deepStrictEqual` / `util.isDeepStrictEqual` in tests.

**94. What is a computed property name?**
Using `[expr]` as a key: `const key = "status"; { [key]: "pass" }` creates a `status` property. The expression is evaluated first.

**95. What is property shorthand?**
When the variable name matches the key, you can write `{ name }` instead of `{ name: name }`.

**96. What is `Object.create(null)`?**
An object with **no prototype** — it has no inherited methods like `toString` or `hasOwnProperty`. Useful as a clean dictionary, safe from prototype pollution.

**97. How do you convert a Map to an object and back?**
Map → object: `Object.fromEntries(map)`. Object → Map: `new Map(Object.entries(obj))`.

**98. What are getters and setters?**
Special methods that run on property access. `get fullName()` runs when reading; `set fullName(v)` runs when writing — letting you compute or validate values.

**99. How would you implement a deep merge of two objects?**
Recurse over the source's keys; if both sides hold plain objects, merge them; otherwise overwrite. Libraries like lodash's `merge` do this, and `structuredClone` plus custom logic is common.

**100. How does optional chaining work with function calls?**
`obj.fn?.()` calls `fn` only if it exists — otherwise returns `undefined`. Without `?.`, calling a missing function throws.

---

## Tricky Output Based Questions (101–110)

**101. What is the output?**
```javascript
console.log({} + []);   // "[object Object]" — {} → text, [] → ""
console.log([] + {});   // "[object Object]" — "" + "[object Object]"
```

**102. What is the output?**
```javascript
console.log({ a: 1 } === { a: 1 });   // false — different references
console.log([] === []);               // false — different references
```

**103. What is the output?**
```javascript
const obj = { 1: "a", "2": "b", true: "c" };
console.log(Object.keys(obj));   // ["1", "2", "true"]
```
Integer-like keys sort first in ascending numeric order; the rest follow insertion order.

**104. What is the output?**
```javascript
const user = { name: "rahul" };
const copy = Object.assign({}, user);
copy.name = "gupta";
console.log(user.name, copy.name);   // "rahul" "gupta"
```

**105. What is the output?**
```javascript
const a = { n: 1 };
const b = a;
b = { n: 2 };      // reassigns b only — does NOT touch the object
console.log(a.n);  // 1
```
Reassigning `b` breaks the link; it doesn't mutate the shared object.

**106. What is the output?**
```javascript
const user = { name: "rahul", age: undefined };
console.log(JSON.stringify(user));   // {"name":"rahul"}
```
`JSON.stringify` drops properties whose value is `undefined`.

**107. What is the output?**
```javascript
const obj = { a: 1, b: 2 };
const { a, ...rest } = obj;
console.log(a);      // 1
console.log(rest);   // { b: 2 }
```

**108. What is the output?**
```javascript
const obj = { a: { b: { c: 1 } } };
const shallow = { ...obj };
shallow.a.b.c = 99;
console.log(obj.a.b.c);   // 99 — nested object is shared by a shallow copy
```

**109. What is the output?**
```javascript
const user = { name: "rahul" };
console.log(user?.address?.city);   // undefined
console.log(user.address?.city);    // undefined — ?. still guards the second link
```
Note: `user.address.city` (no `?.` at all) would throw.

**110. What is the output?**
```javascript
const config = { browser: "chrome" };
Object.freeze(config);
config.browser = "firefox";   // ignored
config.timeout = 3000;        // ignored — can't add either
console.log(config);          // { browser: "chrome" }
```

---

## Automation Testing — Scenario Based Questions (111–120)

**111. Safely read an optional `middleName`.**
`const middle = user.middleName ?? "";` — or `user.middleName?.trim()`. `??` supplies a fallback for `null`/`undefined` without treating `""` or `0` as missing.

**112. Why does mutating a shared config affect other tests?**
Objects are passed by **reference**, so all tests point to the same object. Fix it by spreading per test: `const cfg = { ...sharedConfig }`, or `Object.freeze` the shared one.

**113. Pass test data and destructure only what you need.**
```javascript
function login({ username, password }) { /* use them */ }
login({ username: "rahul", password: "secret", role: "admin" });
```

**114. Safely access `response.data.user.email`.**
`response.data?.user?.email ?? "missing"`. Optional chaining returns `undefined` instead of throwing when any link is absent.

**115. Build a fresh fixture copy per test.**
`const fixture = structuredClone(baseFixture);` — a deep clone so nested changes don't leak between tests.

**116. Count test results using an object as a counter.**
```javascript
const counts = {};
for (const r of ["pass", "fail", "pass"]) counts[r] = (counts[r] || 0) + 1;
console.log(counts);   // { pass: 2, fail: 1 }
```

**117. Convert a results object into an array to map/filter.**
`Object.entries(results)` → array of `[key, value]` pairs, then `.filter()` / `.map()` as needed.

**118. Why does `assert.deepStrictEqual()` matter?**
Plain `===` on objects compares references, so two identical-looking objects are never equal. `deepStrictEqual` compares keys and values recursively — the correct way to assert on objects.

**119. Freeze a shared config to prevent mutation.**
```javascript
const config = Object.freeze({ browser: "chrome", timeout: 3000 });
```
Accidental writes are silently ignored (and throw in strict mode), protecting the shared object.

**120. Convert form field values into an object.**
```javascript
const form = { username: "rahul", password: "secret" };
console.log(form);   // compare with expected via assert.deepStrictEqual
```
Read each field into a key on one object, then deep-compare against the expected data.
