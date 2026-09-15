# JavaScript Variables: var vs let vs const

These three keywords are used to create variables in JavaScript. They are similar, but they behave differently in important ways.

## Quick Comparison Table

| Feature | var | let | const |
|--------|-----|-----|-------|
| Reassignment | Allowed | Allowed | Not allowed |
| Redeclaration | Allowed | Not allowed | Not allowed |
| Scope | Function scope | Block scope | Block scope |
| Hoisting | Yes | Yes, but not initialized | Yes, but not initialized |
| Best use | Old style | Good for changing values | Best for fixed values |

## 1. var

### Simple explanation
- var is the old way to declare variables in JavaScript.
- It can be reassigned anytime.
- It can also be redeclared in the same scope.
- It is function-scoped, which means it is available inside the whole function.
- It is not very strict, so it can cause confusion in larger programs.

### Key points
- You can change its value later.
- You can declare the same variable name again.
- It works outside blocks more easily than let and const.
- It is not recommended in modern JavaScript.

### Example
```javascript
var name = "John";
name = "Rahul";
```

## 2. let

### Simple explanation
- let is a modern way to declare variables.
- It allows reassignment, so you can change its value later.
- It does not allow redeclaration in the same scope.
- It is block-scoped, which means it works only inside the block where it is declared.
- It is safer than var.

### Key points
- You can change its value later.
- You cannot declare the same name again in the same scope.
- It is better for variables that may change.
- It helps avoid common mistakes in code.

### Example
```javascript
let age = 20;
age = 25;
```

## 3. const

### Simple explanation
- const is used when the value should not change.
- It does not allow reassignment.
- It also does not allow redeclaration in the same scope.
- It is block-scoped like let.
- It is the safest choice for values that should remain fixed.

### Key points
- You cannot change its value later.
- You cannot declare the same name again in the same scope.
- It is best for constants like PI or fixed configuration values.
- It makes code more predictable and secure.

### Example
```javascript
const PI = 3.14;
// PI = 3.14159; // This will cause an error
```

## When to use which?

- Use var only if you are learning older JavaScript or working with old code.
- Use let when the value may change later.
- Use const when the value should stay the same.

## In short
- var = old, flexible, but less safe.
- let = modern, can change value.
- const = modern, cannot change value.

## Important note
In modern JavaScript, developers usually prefer let and const instead of var.

---

## 4. Hoisting — Detailed

Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution.

### var — Hoisted and initialized as `undefined`

```javascript
console.log(c); // undefined (NOT an error!)
var c = 20;
```

This is interpreted as:
```javascript
var c;        // hoisted to top, initialized as undefined
console.log(c); // undefined
c = 20;       // assignment stays here
```

### let — Hoisted but NOT initialized (Temporal Dead Zone)

```javascript
// console.log(c); // ReferenceError: Cannot access 'c' before initialization
let c = 20;
```

The variable exists in the scope but cannot be accessed until the declaration line is reached.

### const — Same as let (hoisted but not initialized)

```javascript
// console.log(PI); // ReferenceError
const PI = 3.14;
```

### Comparison Table

| Feature | var | let | const |
|---------|-----|-----|-------|
| Hoisted | ✅ Yes | ✅ Yes | ✅ Yes |
| Initialized as | `undefined` | Not initialized (TDZ) | Not initialized (TDZ) |
| Access before declaration | ✅ `undefined` | ❌ ReferenceError | ❌ ReferenceError |

---

## 5. Temporal Dead Zone (TDZ)

The TDZ is the time between entering a scope and the actual declaration of a `let` or `const` variable.

### How TDZ works

```javascript
{
    // TDZ starts for x
    // console.log(x); // ReferenceError — in TDZ
    let x = 10;       // TDZ ends here
    console.log(x);   // 10 — accessible
}
```

### TDZ with typeof

```javascript
console.log(typeof undeclaredVar); // "undefined" — no error, var doesn't exist at all

// console.log(typeof x); // ReferenceError! x is in TDZ
let x = 10;
```

This is an important difference — `typeof` on a TDZ variable throws an error, but on a completely undeclared variable it returns `"undefined"`.

---

## 6. Scope — Detailed Comparison

### Function Scope (var)

Variables declared with `var` are accessible anywhere inside the function they are declared in, regardless of block nesting.

```javascript
function myFunction() {
    if (true) {
        var a = 10;
        console.log("Inside if block:", a); // 10
    }
    console.log("Outside if block:", a); // 10 — accessible!
}
// console.log(a); // ReferenceError — not accessible outside function
```

### Block Scope (let / const)

Variables declared with `let` or `const` are only accessible within the block `{}` where they are declared.

```javascript
if (true) {
    let d = 30;
    console.log("Inside the if block:", d); // 30
}
// console.log("Outside the if block:", d); // ReferenceError: d is not defined
```

### Scope Diagram

```
┌─────────────────────────────────────┐
│           GLOBAL SCOPE              │
│                                     │
│  var globalVar = "visible"         │
│                                     │
│  ┌─────────────────────────────┐    │
│  │     FUNCTION SCOPE          │    │
│  │                             │    │
│  │  var functionVar → visible  │    │
│  │  anywhere in this function  │    │
│  │                             │    │
│  │  ┌───────────────────┐      │    │
│  │  │  BLOCK { }        │      │    │
│  │  │                   │      │    │
│  │  │  let blockVar →   │      │    │
│  │  │  ONLY in this { } │      │    │
│  │  │                   │      │    │
│  │  │  var stillVisible │      │    │
│  │  │  → yes, function  │      │    │
│  │  └───────────────────┘      │    │
│  └─────────────────────────────┘    │
└─────────────────────────────────────┘
```

---

## 7. Reassignment and Redeclaration — Full Examples

### var — Both allowed

```javascript
var a = "John Doe";
console.log("Before reassignment:", a); // John Doe
a = "Rahul Gupta";
console.log("After reassignment:", a); // Rahul Gupta

var b = "Hello";
var b = "World";   // Redeclaration allowed!
console.log(b);    // World
```

### let — Reassignment allowed, Redeclaration NOT allowed

```javascript
let a = 10;
a = 20;            // ✅ Reassignment allowed
console.log(a);    // 20

let b = 10;
// let b = 20;     // ❌ SyntaxError: Identifier 'b' has already been declared
```

### const — Neither allowed

```javascript
const PI = 3.14;
// PI = 3.14159;  // ❌ TypeError: Assignment to constant variable

const a = 10;
// const a = 30;  // ❌ SyntaxError: Identifier 'a' has already been declared
```

---

## 8. const with Objects and Arrays

### const prevents reassignment, not mutation

```javascript
const person = { name: "Rahul", age: 25 };

// ✅ Mutation allowed — properties can change
person.name = "Aman";
person.age = 30;
console.log(person); // { name: "Aman", age: 30 }

// ❌ Reassignment not allowed
// person = { name: "New" }; // TypeError

const numbers = [1, 2, 3];

// ✅ Mutation allowed
numbers.push(4);
numbers[0] = 100;
console.log(numbers); // [100, 2, 3, 4]

// ❌ Reassignment not allowed
// numbers = [5, 6, 7]; // TypeError
```

### Key insight

`const` means the **binding** (reference) cannot change, not that the **value** is immutable.

---

## 9. var in the Global Scope — window Property

When `var` is declared in the global scope, it becomes a property of the `window` object (in browsers).

```javascript
var globalVar = "I am global";
console.log(window.globalVar); // "I am global"

let globalLet = "I am also global";
console.log(window.globalLet); // undefined — let does NOT attach to window!
```

This is another reason `var` is problematic — it can accidentally override existing window properties.

---

## 10. Complete Comparison Table

| Feature | var | let | const |
|---------|-----|-----|-------|
| **Introduced in** | ES1 (1997) | ES6 (2015) | ES6 (2015) |
| **Reassignment** | ✅ Allowed | ✅ Allowed | ❌ Not allowed |
| **Redeclaration** | ✅ Allowed in same scope | ❌ Not allowed | ❌ Not allowed |
| **Scope** | Function scope | Block scope | Block scope |
| **Hoisting** | ✅ Hoisted, initialized as `undefined` | ✅ Hoisted, TDZ (not initialized) | ✅ Hoisted, TDZ (not initialized) |
| **TDZ** | ❌ No TDZ | ✅ Has TDZ | ✅ Has TDZ |
| **Window property** | ✅ Attaches to `window` | ❌ Does not attach | ❌ Does not attach |
| **Must be initialized** | ❌ Optional | ❌ Optional | ✅ Required |
| **Use case** | Legacy code | Values that change | Values that stay fixed |

---

## 11. When to Use Which — Best Practices

| Situation | Recommended Keyword | Reason |
|-----------|-------------------|--------|
| Value never changes | `const` | Enforces immutability of binding, prevents accidental changes |
| Value changes over time | `let` | Allows reassignment, block-scoped |
| Loop counters | `let` | Block-scoped, per-iteration binding |
| Working with old browsers | `var` | Only when ES6 is not supported |
| Legacy codebases | `var` | When maintaining older code |
| Constants (PI, API URLs) | `const` | Clear intent, predictable |
| Object/Array that doesn't get replaced | `const` | Reference stays constant, properties can change |
| Function declarations | `function` keyword | Hoisted fully (declaration + definition) |

### Golden Rule

> **Always use `const` by default. Use `let` only when you know the value needs to change. Never use `var` in modern code.**

---

## 12. Key Takeaways

- `var` is function-scoped, `let`/`const` are block-scoped.
- `var` allows redeclaration — `let`/`const` do not.
- `var` is hoisted and initialized as `undefined` — accessible before declaration.
- `let`/`const` are hoisted but NOT initialized — they are in the **Temporal Dead Zone** (TDZ).
- Accessing a variable in TDZ throws `ReferenceError`.
- `const` prevents reassignment, but does **not** make objects/arrays immutable.
- `const` must be initialized at declaration — `let` and `var` don't have to be.
- `var` at global scope creates a `window` property — `let`/`const` do not.
- Use `const` by default, `let` when reassignment is needed, avoid `var` in modern code.
- `typeof` on a TDZ variable throws an error — `typeof` on undeclared variable returns `"undefined"`.
