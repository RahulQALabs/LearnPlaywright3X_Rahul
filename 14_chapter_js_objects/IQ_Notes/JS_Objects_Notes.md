# JavaScript Objects — Detailed Notes

## 1. Introduction

An **object** groups related data as **key → value** pairs — one variable that holds a whole record (a user, a test config, an API response). Objects are **reference types**: a variable stores a pointer to the object, not the object itself.

Objects are the backbone of test automation: test data, Playwright config, API payloads, fixtures, and the `page`/`browser` objects themselves are all just objects.

## 2. Learning Objectives

- Create objects with literals, `new Object()`, and — briefly — constructors.
- Read and write values with **dot** and **bracket** notation.
- Add, modify, and delete properties dynamically.
- Work with **nested** objects and object **methods** using `this`.
- Understand **call by value vs call by reference** and why it causes bugs.
- Compare objects correctly (`===`, `JSON.stringify`).
- Iterate with `for...in`, `Object.keys`, `Object.values`, `Object.entries`.
- Copy objects — **shallow** (spread, `Object.assign`) vs **deep** (`structuredClone`).
- Use destructuring, optional chaining, and `Object.freeze` / `hasOwnProperty`.

## 3. Creating Objects

From `01_objects.js`:

```javascript
let a = { status: "pass" };            // object literal (preferred)
let a1 = { status: 'pass' };           // single or double quotes both fine
let config = {};                       // empty object, filled later

const t_json = { "name": "Rahul", "age": 30 };   // keys as strings (JSON style)
const t_obj  = { name: "Rahul",  age: 30 };       // keys unquoted (normal object)
```

Both `t_json` and `t_obj` produce the **same** object — quoted keys are optional when the key is a valid identifier.

```javascript
let empty = new Object();              // rare — same as {}
let person = Object.create(null);      // no prototype (advanced)
```

| Creation | Example | Notes |
|----------|---------|-------|
| Literal | `{ name: "Rahul" }` | Preferred |
| Empty | `{}` | Fill properties later |
| `new Object()` | `new Object()` | Rarely used |
| `Object.create(proto)` | `Object.create(null)` | Prototype control (advanced) |

## 4. Accessing Properties

From `01_objects.js` and `04_object.js`:

```javascript
const user = { name: "rahul", age: 30, email: "rg@gmail.com" };

console.log(user.name);        // "rahul" — dot notation
console.log(user["age"]);      // 30 — bracket notation
console.log(user["email"]);    // "rg@gmail.com"
```

### Keys Are Case-Sensitive

From `01_objects.js`:

```javascript
let a2 = { status: "pass", Status: "fail" };   // two different keys!
console.log(a2["status"]);   // "pass"
console.log(a2["Status"]);   // "fail"
console.log(a2["STATUS"]);   // undefined
```

`status`, `Status`, and `STATUS` are three separate properties.

### Dot vs Bracket

| Notation | Syntax | Use When |
|----------|--------|----------|
| Dot | `user.name` | Key is a fixed, valid identifier |
| Bracket | `user["name"]` | Key is dynamic, has spaces, or comes from a variable |

```javascript
let key = "email";
console.log(user[key]);       // "rg@gmail.com" — dynamic access needs brackets
console.log(user.key);        // undefined — looks for a literal "key" property
```

⚠️ `user.key` looks for a property named `"key"`, **not** the variable's value. Bracket notation evaluates the variable.

## 5. Adding, Modifying & Deleting

From `04_object.js` and `05_object.js`:

```javascript
let config = {};
config.browser = "Chrome";    // add
config.timeout = 3000;        // add
config.timeout = 5000;        // modify — the latest value wins
console.log(config);          // { browser: "Chrome", timeout: 5000 }

delete config.browser;        // remove
console.log(config);          // { timeout: 5000 }
```

```javascript
const user = { name: "rahul", age: 30 };
user.city = "NYC";            // add a new property
user.age = 30;                // "modify" with the same value
console.log(user);            // { name: "rahul", age: 30, city: "NYC" }
```

⚠️ `const` prevents **reassigning** the variable, but object properties are still mutable: `const u = {}; u.x = 1;` is allowed.

## 6. Methods & `this`

From `03_object.js` and `02_object_person.js`:

```javascript
const user = {
    name: "rahul",
    getName() {
        return this.name;      // `this` = the object the method is called on
    }
};

console.log(user.getName());   // "rahul"
```

A **method** is a function stored as a property. Inside a method, `this` refers to the object before the dot:

```javascript
const person = {
    firstName: "rahul",
    lastName: "gupta",
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person.fullName());   // "rahul gupta"
```

⚠️ An **arrow function** does not get its own `this` — it inherits from the surrounding scope. For object methods that need `this`, use a regular function / method shorthand.

## 7. Nested Objects

From `02_object_person.js`:

```javascript
const user = {
    firstName: "rahul",
    address: {
        city: "Bengaluru",
        coordinates: { latitude: 12.9716, longitude: 77.5946 }
    },
    employment: {
        jobTitle: "Senior QA Architect",
        manager: { name: "Ananya Sharma" }
    }
};

console.log(user.address.city);                       // "Bengaluru"
console.log(user.address.coordinates.latitude);       // 12.9716
console.log(user.employment.manager.name);            // "Ananya Sharma"
```

Chain dots to reach deeper values. Objects can also hold **arrays of objects** — very common in API responses:

```javascript
const data = {
    users: [
        { name: "Rahul", tags: ["admin", "user"] },
        { name: "Saanvi", tags: ["user"] }
    ]
};
console.log(data.users[0].name);      // "Rahul"
console.log(data.users[1].tags[0]);   // "user"
```

## 8. Call by Value vs Call by Reference

From `06_callByValue_callByRef.js`:

### Primitives — Call by Value

```javascript
let a = 10;
let b = a;         // b gets a COPY of the value
b = 99;
console.log(a);    // 10 — unaffected
console.log(b);    // 99
```

### Objects — Call by Reference

```javascript
let obj1 = { val: 10 };
let obj2 = obj1;   // obj2 points to the SAME object
obj2.val = 99;
console.log(obj1.val);   // 99 — changed through obj2!
```

| Type | Copy Behaviour | Example Types |
|------|----------------|---------------|
| Primitive | Copy of the value | `number`, `string`, `boolean`, `null`, `undefined` |
| Reference | Copy of the pointer | `object`, `array`, `function` |

```javascript
let p = { status: "pass" };
let q = p;                 // SAME object
q.status = "fail";
console.log(p.status);     // "fail" — both point to the same data
```

To truly copy, spread it: `let q = { ...p };`.

## 9. Comparing Objects

From `01_objects.js`:

```javascript
let c = { status: "pass" };
let d = { status: "pass" };
console.log(c === d);      // false — different references, same content
```

`===` compares **references**, not contents. Two objects are equal only if they are the **same object**:

```javascript
let e = { status: "pass" };
let f = e;
console.log(e === f);      // true — same reference
```

**Content comparison** (simple, order-sensitive):

```javascript
console.log(JSON.stringify(c) === JSON.stringify(d));   // true
```

⚠️ `JSON.stringify` comparison fails if key order differs and can't handle functions, so use it only for simple data.

## 10. Iterating Objects

```javascript
const user = { name: "rahul", age: 30, city: "NYC" };

// for...in — keys
for (let key in user) {
    console.log(key, user[key]);
}
// name rahul, age 30, city NYC

// Object.keys / values / entries
console.log(Object.keys(user));      // ["name", "age", "city"]
console.log(Object.values(user));    // ["rahul", 30, "NYC"]
console.log(Object.entries(user));   // [["name","rahul"], ["age",30], ["city","NYC"]]

// entries with destructuring
for (const [key, value] of Object.entries(user)) {
    console.log(`${key} = ${value}`);
}
```

| Method | Returns | Use Case |
|--------|---------|----------|
| `for...in` | keys (incl. inherited) | Simple key iteration |
| `Object.keys(obj)` | array of keys | `map`/`filter`/`length` |
| `Object.values(obj)` | array of values | Value aggregation |
| `Object.entries(obj)` | array of `[key, value]` | Both at once |

## 11. Copying — Shallow vs Deep

```javascript
const original = { name: "rahul", address: { city: "NYC" } };

// Shallow copy — spread
const shallow = { ...original };
shallow.name = "gupta";
console.log(original.name);        // "rahul" — top level independent
shallow.address.city = "Delhi";
console.log(original.address.city); // "Delhi" — nested object SHARED!

// Shallow copy — Object.assign
const shallow2 = Object.assign({}, original);

// Deep copy — nested values are independent
const deep = structuredClone(original);
deep.address.city = "Mumbai";
console.log(original.address.city); // "Delhi" — unaffected
```

| Copy type | Methods | Nested objects |
|-----------|---------|----------------|
| Shallow | `{ ...obj }`, `Object.assign({}, obj)` | **Shared** (same reference) |
| Deep | `structuredClone(obj)`, `JSON.parse(JSON.stringify(obj))` | **Independent** |

⚠️ `JSON.parse(JSON.stringify(obj))` loses functions, `undefined`, and `Date` types. Prefer `structuredClone` in modern Node.

## 12. Destructuring & Optional Chaining

```javascript
const user = { name: "rahul", age: 30, city: "NYC" };

// Basic destructuring
const { name, age } = user;
console.log(name, age);        // "rahul" 30

// Rename and default
const { name: userName, role = "tester" } = user;
console.log(userName, role);   // "rahul" "tester"

// Nested destructuring
const { address: { city } = {} } = { address: { city: "NYC" } };
console.log(city);             // "NYC"

// Optional chaining — safe deep access
const data = { user: { profile: null } };
console.log(data.user?.profile?.name);   // undefined (no crash)
console.log(data.account?.id);           // undefined
```

Optional chaining `?.` returns `undefined` instead of throwing when a link is missing. `??` supplies a fallback:

```javascript
const timeout = user.timeout ?? 3000;   // 3000 only if timeout is null/undefined
```

## 13. Useful Object Utility Methods

```javascript
const config = { browser: "chrome" };

Object.freeze(config);          // properties become read-only
config.browser = "firefox";     // silently ignored (throws in strict mode)
console.log(config.browser);    // "chrome"

const sealed = { a: 1 };
Object.seal(sealed);            // can modify, cannot add/delete

console.log(user.hasOwnProperty("name"));   // true — own (not inherited)
console.log("name" in user);                // true — includes inherited
console.log(Object.entries(user).length);   // number of properties
```

| Method | Effect |
|--------|--------|
| `Object.freeze(obj)` | No add / modify / delete |
| `Object.seal(obj)` | Modify only |
| `Object.keys/values/entries(obj)` | Arrays of keys/values/pairs |
| `Object.assign(target, ...src)` | Shallow merge |
| `obj.hasOwnProperty(k)` | Is `k` an own property? |

## 14. Step-by-Step Execution Flow

Reading `obj2.val = 99` when `obj2 = obj1`:

```
obj1 ──┐
       ├──▶ { val: 10 }        (one object in memory)
obj2 ──┘
              │  obj2.val = 99
              ▼
obj1 ──┐
       ├──▶ { val: 99 }        (same object, updated once)
obj2 ──┘
```

1. `let obj1 = { val: 10 }` creates an object and stores its **address** in `obj1`.
2. `let obj2 = obj1` copies the **address**, not the data — both names point to one object.
3. `obj2.val = 99` follows the address and mutates the single shared object.
4. `obj1.val` reads the same object → `99`.

This is why "copying" an object with `=` is a common bug — use `{ ...obj }` for an independent copy.

## 15. Interview Tips, Common Mistakes & Key Takeaways

**Interview tips**

- Say it plainly: "objects are copied by reference; primitives by value."
- `===` on two objects compares references, never contents.
- Mention `this` depends on **how** a method is called (`obj.method()`).
- Know shallow vs deep copy and name `structuredClone`.
- Use optional chaining `?.` to describe safe nested access.

**Common mistakes**

- `let b = a;` and expecting an independent copy of an object.
- Comparing objects with `===` and expecting content equality.
- Using `user.key` when the key comes from a variable.
- Forgetting keys are case-sensitive.
- Spreading for a "deep" copy — nested objects stay shared.

**Key takeaways**

- Objects store **key → value** pairs and are **reference types**.
- Dot vs bracket: brackets for dynamic/odd keys.
- `const` locks the binding, not the properties.
- `this` inside a method = the object before the dot.
- Call by value for primitives, **call by reference** for objects/arrays.
- `[...]` spread / `Object.assign` = shallow; `structuredClone` = deep.
- Iterate with `for...in`, `Object.keys/values/entries`.
- Destructuring and `?.` make nested access clean and safe.
