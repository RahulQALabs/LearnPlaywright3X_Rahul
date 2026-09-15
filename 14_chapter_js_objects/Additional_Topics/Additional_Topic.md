# Additional Topics — `this`, Prototypes, Getters/Setters, Cloning & Object Utilities (Objects)

The objects chapter covers creation, access, mutation, nesting, methods, references, comparison, iteration, and copying. These are the deeper pieces interviewers ask next — and the ones you'll use when building request payloads, merging configs, and comparing API responses.

## 1. `this` Binding Rules

```javascript
const user = {
    name: "rahul",
    regular() { return this.name; },     // this = object before the dot
    arrow: () => this?.name              // this = surrounding scope, NOT the object
};

console.log(user.regular());   // "rahul"
console.log(user.arrow());     // undefined (in a module/browser: outer this)

// Borrowed method keeps the caller's this
const other = { name: "gupta", regular: user.regular };
console.log(other.regular());  // "gupta" — this follows the call site

// call / apply / bind set this explicitly
function greet(greeting) { return `${greeting}, ${this.name}`; }
console.log(greet.call({ name: "rahul" }, "Hi"));    // "Hi, rahul"
console.log(greet.apply({ name: "rahul" }, ["Hi"])); // "Hi, rahul"
const bound = greet.bind({ name: "rahul" });
console.log(bound("Hello"));                          // "Hello, rahul"
```

| Call form | What `this` is |
|-----------|----------------|
| `obj.method()` | `obj` |
| `fn()` (plain) | `undefined` (strict) / global object |
| `new Fn()` | the newly created object |
| `fn.call(ctx)` / `apply` | `ctx` |
| `fn.bind(ctx)` | `ctx` permanently |
| arrow function | enclosing scope's `this` |

**Why it matters in testing:** a helper detached from its object loses `this` — use `bind` when passing object methods as callbacks (e.g. Playwright event handlers).

## 2. Prototypes & the Prototype Chain

```javascript
const animal = { speaks: true };
const dog = Object.create(animal);       // dog's prototype is animal
dog.breed = "lab";

console.log(dog.breed);     // "lab" — own property
console.log(dog.speaks);    // true — inherited from the prototype
console.log(Object.getPrototypeOf(dog) === animal);   // true

// hasOwnProperty vs in
console.log(dog.hasOwnProperty("breed"));   // true
console.log(dog.hasOwnProperty("speaks"));  // false — inherited
console.log("speaks" in dog);               // true — in walks the chain
```

Every object links to a prototype; property lookup climbs that chain. This is why `{}` already has `toString`, `hasOwnProperty`, and friends.

**Why it matters in testing:** `for...in` also walks inherited keys, so prefer `Object.keys()` for own data.

## 3. Getters & Setters

```javascript
const user = {
    first: "rahul",
    last: "gupta",
    get fullName() {
        return `${this.first} ${this.last}`;      // runs on read
    },
    set fullName(value) {
        [this.first, this.last] = value.split(" "); // runs on write
    }
};

console.log(user.fullName);        // "rahul gupta" — no parentheses
user.fullName = "saanvi sharma";   // setter runs
console.log(user.first);           // "saanvi"
```

**Why it matters in testing:** computed values (full name from parts, masked card from a number) stay consistent automatically when the source data changes.

## 4. Computed Keys & Property Shorthand

```javascript
const key = "status";
const status = "pass";

const obj = { [key]: status };      // { status: "pass" } — computed key
console.log(obj);

const name = "rahul";
const user = { name };              // shorthand → { name: "rahul" }
console.log(user);
```

**Why it matters in testing:** building a payload key dynamically (e.g. `{ [fieldName]: value }`) is the clean way to add a single dynamic field.

## 5. Destructuring Deep Dive

```javascript
const user = { name: "rahul", age: 30, city: "NYC" };

const { name, age } = user;                 // basic
const { name: userName } = user;            // rename
const { role = "tester" } = user;           // default
const { address: { city } = {} } = user;    // nested with fallback
const { name: n, ...rest } = user;          // rest collects the remainder

// Function parameter destructuring
function login({ username, password = "secret" }) {
    return `${username}:${password}`;
}
console.log(login({ username: "rahul" }));  // "rahul:secret"
```

## 6. Optional Chaining & Nullish Coalescing

```javascript
const data = { user: { profile: null } };

console.log(data.user?.profile?.name);   // undefined — safe
console.log(data.account?.id ?? "n/a");  // "n/a" — fallback

// Optional call
const obj = {};
obj.fn?.();                              // no error if fn is missing

// Optional bracket
const key = "email";
console.log(data.user?.[key]);           // undefined
```

⚠️ `?.` returns `undefined`, so combine with `??` for a real default — not `||`, which would also replace `0`, `""`, and `false`.

## 7. Cloning — Shallow vs Deep

```javascript
const original = { name: "rahul", address: { city: "NYC" } };

const shallow = { ...original };              // nested shared
const shallow2 = Object.assign({}, original); // same as spread
const deep = structuredClone(original);       // fully independent

// Merge with override
const base = { browser: "chrome", timeout: 3000 };
const override = { timeout: 5000 };
console.log({ ...base, ...override });        // { browser: "chrome", timeout: 5000 }
```

⚠️ `JSON.parse(JSON.stringify(obj))` is a legacy deep clone — it drops functions/`undefined` and breaks `Date`, `Map`, and `Set`. Prefer `structuredClone`.

## 8. Object Utility Methods

```javascript
const user = { name: "rahul", age: 30 };

console.log(Object.keys(user));           // ["name", "age"]
console.log(Object.values(user));         // ["rahul", 30]
console.log(Object.entries(user));        // [["name","rahul"], ["age",30]]
console.log(Object.fromEntries([["a", 1]])); // { a: 1 }

Object.freeze(user);      // read-only (shallow)
Object.seal(user);        // modify only
Object.assign(user, { city: "NYC" });     // shallow merge into user
console.log(Object.getOwnPropertyDescriptor(user, "name"));
// { value: 'rahul', writable: false, enumerable: true, configurable: false } after freeze

// Invert keys/values
const codes = { pass: 1, fail: 0 };
console.log(Object.fromEntries(Object.entries(codes).map(([k, v]) => [v, k])));
// { '0': 'fail', '1': 'pass' }
```

## 9. Object ↔ JSON ↔ Map

```javascript
const user = { name: "rahul", age: 30 };

const json = JSON.stringify(user);        // '{"name":"rahul","age":30}'
console.log(JSON.parse(json));            // back to an object

const map = new Map(Object.entries(user));
console.log(map.get("name"));             // "rahul"
console.log(Object.fromEntries(map));     // back to an object
```

**Why it matters in testing:** converting between a payload object, its JSON wire format, and a `Map` is routine in API tests.

## 10. SDET Recipes

```javascript
// Build an API payload from field variables
const buildUser = (name, age) => ({ name, age, createdAt: new Date().toISOString() });

// Merge configs with test-specific overrides
const withOverrides = (base, over) => ({ ...base, ...over });

// Deep compare two responses (order-independent for values, not keys)
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// Count results by status
const countBy = results => results.reduce((acc, r) => {
    acc[r] = (acc[r] || 0) + 1;
    return acc;
}, {});
countBy(["pass", "fail", "pass"]);        // { pass: 2, fail: 1 }

// Pick only the fields you assert on
const pick = (obj, keys) => Object.fromEntries(
    keys.filter(k => k in obj).map(k => [k, obj[k]])
);
pick({ id: 1, name: "rahul", password: "x" }, ["id", "name"]);
// { id: 1, name: "rahul" }

// Omit sensitive fields before logging
const omit = (obj, keys) => Object.fromEntries(
    Object.entries(obj).filter(([k]) => !keys.includes(k))
);
omit({ user: "rahul", password: "x" }, ["password"]);   // { user: "rahul" }
```

## 11. Key Takeaways

- **`this`** depends on the call site (`obj.method()` → `obj`); arrows inherit it.
- **Prototype chain** provides inherited properties — `in` sees them, `hasOwnProperty` doesn't.
- **Getters/setters** compute values on read/write without changing the calling syntax.
- **Computed keys** and **shorthand** keep object literals concise and dynamic.
- **Destructuring** (with rename, defaults, rest, nested) makes extracting data clean.
- **`?.`** accesses safely; **`??`** supplies a real fallback for `null`/`undefined`.
- **`structuredClone`** is the modern deep clone; spread/`Object.assign` are shallow.
- **`Object.keys/values/entries/fromEntries`** convert between objects and arrays.
- Keep the **SDET recipes** — build, merge, pick, omit, count, compare.
