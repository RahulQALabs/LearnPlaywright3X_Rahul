# JavaScript Operators – Detailed Notes

## 1. What is an operator?

An operator is a symbol that performs an action on one or more values.

- Values used with operators are called operands.
- Example: `5 + 3`
  - `5` and `3` are operands
  - `+` is the operator

---

## 2. Arithmetic Operators

These operators are used for math operations.

### Common operators

- `+` → addition
- `-` → subtraction
- `*` → multiplication
- `/` → division
- `%` → modulus (remainder)
- `**` → exponentiation

### Examples

```javascript
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000
```

### Important note

- `+` can also join strings.

```javascript
console.log("Hello" + " World"); // Hello World
```

---

## 3. Assignment Operators

These operators assign values to variables.

### Common operators

- `=` → simple assignment
- `+=` → add and assign
- `-=` → subtract and assign
- `*=` → multiply and assign
- `/=` → divide and assign
- `%=` → modulus and assign
- `**=` → exponent and assign

### Examples

```javascript
let x = 10;
x += 5;   // x = x + 5
console.log(x); // 15
```

```javascript
let y = 20;
y *= 2;   // y = y * 2
console.log(y); // 40
```

---

## 4. Comparison Operators

These operators compare two values and return `true` or `false`.

### Common comparison operators

- `==` → equal after type conversion
- `===` → equal and same type
- `!=` → not equal after conversion
- `!==` → not equal and different type
- `>` → greater than
- `<` → less than
- `>=` → greater than or equal
- `<=` → less than or equal

### Simple explanation

- Use `==` only when you understand type coercion.
- Use `===` in most cases because it is safer and more predictable.

### Comparison table

| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| `==` | Equal after conversion | `10 == "10"` | `true` |
| `===` | Equal and same type | `10 === "10"` | `false` |
| `!=` | Not equal after conversion | `10 != "10"` | `false` |
| `!==` | Not equal and different type | `10 !== "10"` | `true` |
| `>` | Greater than | `10 > 5` | `true` |
| `<` | Less than | `10 < 5` | `false` |
| `>=` | Greater than or equal | `10 >= 10` | `true` |
| `<=` | Less than or equal | `10 <= 5` | `false` |

### Example

```javascript
console.log(10 == "10");   // true
console.log(10 === "10");  // false
```

---

## 5. Logical Operators

Logical operators are used to combine conditions.

### Common operators

- `&&` → Logical AND
- `||` → Logical OR
- `!` → Logical NOT

### Rules

- `&&` returns `true` only if both conditions are true.
- `||` returns `true` if at least one condition is true.
- `!` reverses the result.

### Examples

```javascript
let a = 10;
let b = true;

console.log(a > 9 && b);     // true
console.log(a > 9 && !b);    // false
console.log(a > 9 || b);     // true
console.log(a < 9 || !b);    // false
console.log(!b);             // false
```

### Short-circuit behavior

JavaScript stops evaluation when the result is already known.

```javascript
console.log(true || false); // true
console.log(false && true); // false
```

---

## 6. Increment and Decrement Operators

These operators increase or decrease a value by 1.

- `++a` → pre-increment
- `a++` → post-increment
- `--a` → pre-decrement
- `a--` → post-decrement

### Example

```javascript
let x = 5;
console.log(++x); // 6
console.log(x++); // 6
console.log(x);   // 7
```

### Important difference

- `++x` changes the value first and then returns it.
- `x++` returns the old value first and then changes it.

---

## 7. Ternary Operator

The ternary operator is a short form of `if-else`.

### Syntax

```javascript
condition ? expression1 : expression2
```

### Example

```javascript
let age = 18;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result); // Adult
```

---

## 8. Type Operators

### `typeof`

Used to check the type of a value.

```javascript
console.log(typeof 10);        // number
console.log(typeof "Hello");  // string
console.log(typeof true);      // boolean
console.log(typeof undefined); // undefined
```

---

## 9. Important Confusing Cases

### `null` and `undefined`

```javascript
console.log(null == undefined); // true
console.log(null === undefined); // false
```

### Empty string and 0

```javascript
console.log("" == 0);  // true (empty string becomes 0)
console.log("" === 0); // false (different types)
console.log("0" == 0); // true
console.log("0" === 0); // false
```

---

## 10. String Concatenation Operator (+)

The `+` operator can also join (concatenate) strings.

### Rules

- When both operands are strings → concatenation.
- When one operand is a string → JavaScript converts the other to a string and concatenates.
- When both are numbers → addition.

### Examples

```javascript
console.log("Hello" + "World");   // HelloWorld
console.log("Hello " + "World");  // Hello World

let i = "Hi, ";
i += "Rahul!";
console.log(i); // Hi, Rahul!

console.log(1, 2, 3, 4, "Hello"); // 1 2 3 4 Hello (comma separates)
```

### Important behavior

- `+` with a string and number always results in a string.
- Order matters: `2 + 3 + "4"` → `"54"` (left to right: 2+3=5, then 5+"4"="54")
- `"4" + 2 + 3` → `"423"` (left to right: "4"+2="42", then "42"+3="423")

---

## 11. Nested Ternary Operator

A ternary operator inside another ternary operator.

### Syntax

```javascript
condition1 ? (condition2 ? value1 : value2) : value3
```

### Use case

When you need to check multiple conditions in a single line.

### Example — Goa and Drink check

```javascript
let age = 27;
let condition = age > 18
    ? (age > 25 ? "Allow for drink" : "not allow")
    : "Not eligible for going to Goa as well drink";
console.log(condition); // Allow for drink
```

### Example — HTTP Status Codes

```javascript
let statusCode = 400;
let category = statusCode < 300 ? "Success" :
    statusCode < 400 ? "Redirect" :
        statusCode < 500 ? "Client Error" : "Internal Error";
console.log(category); // Client Error
```

### Example — Temperature categories

```javascript
let temperature = 25;
let condition = temperature >= 40 ? "Very Hot" :
    temperature >= 30 ? "Hot" :
        temperature >= 20 ? "Warm" :
            temperature >= 10 ? "Cool" : "Cold";
console.log(condition); // Warm
```

### Comparison table — if-else-if vs nested ternary

| Aspect | if-else-if ladder | Nested ternary |
|--------|-------------------|----------------|
| Readability | Easy to read for beginners | Compact but can be confusing |
| Lines of code | More lines | Single line |
| Best for | Complex logic with many lines | Simple value assignment |
| Return value | No (needs assignment) | Yes (returns directly) |

---

## 12. Nullish Coalescing Operator (??)

The `??` operator returns the right-side value only when the left-side value is `null` or `undefined`.

### Syntax

```javascript
let result = value ?? defaultValue;
```

### Difference from `||`

| Operator | Returns right side when left is | Example |
|----------|--------------------------------|---------|
| `??` | `null` or `undefined` only | `0 ?? 5` → `0` |
| `||` | Any falsy value (`0`, `""`, `false`, etc.) | `0 \|\| 5` → `5` |

### Examples

```javascript
let amul = null;
let milkVal = amul ?? "Nandini";
console.log(milkVal); // Nandini

let amul1 = "Amul Milk";
let milkVal1 = amul1 ?? "Nandini";
console.log(milkVal1); // Amul Milk
```

### Use case

- When you want to keep valid falsy values like `0` or `""` but replace only `null`/`undefined`.
- Prevents code from breaking when a value is missing.

---

## 13. Bitwise Operators

Bitwise operators work on 32-bit binary representations of numbers.

### Common bitwise operators

| Operator | Name | Description |
|----------|------|-------------|
| `&` | AND | 1 if both bits are 1 |
| `\|` | OR | 1 if at least one bit is 1 |
| `^` | XOR | 1 if bits are different |
| `~` | NOT | Inverts all bits |
| `<<` | Left shift | Shifts bits left |
| `>>` | Right shift | Shifts bits right |

### Note

- Bitwise operators are rarely used in automation/testing.
- They are more common in systems programming, cryptography, and performance-critical code.
- If you need to learn them in detail, refer to rapidtables.com or similar resources.

---

## 14. typeof Operator (Detailed)

The `typeof` operator returns the data type of a value as a string.

### Examples

```javascript
console.log(typeof "Rahul");    // string
console.log(typeof 10);         // number
console.log(typeof 10.70);      // number
console.log(typeof true);       // boolean
console.log(typeof false);      // boolean
console.log(typeof []);         // object (array is an object in JS)
console.log(typeof null);       // object (this is a known JS bug)
console.log(typeof undefined);  // undefined
```

### Important quirks

| Expression | Result | Reason |
|------------|--------|--------|
| `typeof null` | `"object"` | Known JavaScript bug since inception |
| `typeof []` | `"object"` | Arrays are objects in JavaScript |
| `typeof function` | `"function"` | Functions are special objects |

---

## 15. Data Types Overview

JavaScript has two categories of data types.

### Primitive Data Types (immutable)

| Type | Example | Description |
|------|---------|-------------|
| String | `"Hello"`, `'World'` | Text values |
| Number | `10`, `3.14` | Numeric values |
| Boolean | `true`, `false` | Logical values |
| Undefined | `let x;` | Declared but no value |
| Null | `let x = null;` | Intentional absence of value |
| BigInt | `10n` | Large integers |
| Symbol | `Symbol("id")` | Unique identifier |

### Reference Data Types (mutable)

| Type | Example | Description |
|------|---------|-------------|
| Object | `{ name: "Rahul", age: 25 }` | Collection of key-value pairs |
| Array | `[1, 2, 3, 4, 5]` | Ordered list of values |
| Function | `function() {}` | Reusable block of code |

### Primitive vs Reference

| Aspect | Primitive | Reference |
|--------|-----------|-----------|
| Stored in | Stack memory | Heap memory |
| Copied by | Value (independent copy) | Reference (shared) |
| Mutable | No (immutable) | Yes (mutable) |
| Example | `let a = 10; let b = a;` | `let a = [1,2]; let b = a;` |

---

## 16. Increment and Decrement — Interview IQ Patterns

### Pre-increment vs Post-increment

```javascript
let a = 10;
let b = ++a; // a becomes 11, then b = 11
console.log(b, a); // 11, 11

let c = 10;
let d = c++; // d = 10, then c becomes 11
console.log(d, c); // 10, 11
```

### Pre-decrement vs Post-decrement

```javascript
let a = 10;
let b = --a; // a becomes 9, then b = 9
console.log(b, a); // 9, 9

let c = 11;
let d = c--; // d = 11, then c becomes 10
console.log(d, c); // 11, 10
```

### Combined expression patterns

#### Pattern 1: `i++ + ++i`

```javascript
// ERT:
// ┌──────┬──────────┬───────────────┬──────────┬─────────────┬──────────────┐
// │ Step │Expression│ i (before)    │ Operation│ Value Used  │ i (after)    │
// ├──────┼──────────┼───────────────┼──────────┼─────────────┼──────────────┤
// │  1   │ i++      │     1         │ post-inc │     1       │     2        │
// │  2   │ ++i      │     2         │ pre-inc  │     3       │     3        │
// │  3   │ 1 + 3    │     -         │ addition │     4       │     -        │
// └──────┴──────────┴───────────────┴──────────┴─────────────┴──────────────┘

let i = 1;
let result = i++ + ++i; // 1 + 3 = 4, i = 3
console.log(result, i); // 4, 3
```

#### Pattern 2: `a++ + ++a`

```javascript
let a = 10;
let result = a++ + ++a; // 10 + 12 = 22, a = 12
console.log(result, a); // 22, 12
```

#### Pattern 3: `++a + a++`

```javascript
let b = 10;
let result = ++b + b++; // 11 + 11 = 22, b = 12
console.log(result, b); // 22, 12
```

#### Pattern 4: `++a + ++a`

```javascript
let c = 10;
let result = ++c + ++c; // 11 + 12 = 23, c = 12
console.log(result, c); // 23, 12
```

#### Pattern 5: Multiple increments together

```javascript
let a = 100;
let result = a++ + ++a + a++ + ++a;
// Step 1: a++ = 100, a = 101
// Step 2: ++a = 102, a = 102
// Step 3: a++ = 102, a = 103
// Step 4: ++a = 104, a = 104
// 100 + 102 + 102 + 104 = 408
console.log(result, a); // 408, 104
```

#### Pattern 6: Decrement combined

```javascript
let a = 37;
let result = --a + a--;
// Step 1: --a = 36, a = 36
// Step 2: a-- = 36, a = 35
// 36 + 36 = 72
console.log(result, a); // 72, 35

let b = 5;
let result2 = a-- + --a;
// Step 1: a-- = 5, a = 4
// Step 2: --a = 3, a = 3
// 5 + 3 = 8
console.log(result2, a); // 8, 3
```

#### Pattern 7: Increment with ternary

```javascript
let i = 10;
let result = i++ > 10 ? i++ : ++i;
// Step 1: i++ > 10 → 10 > 10 → false, i = 11
// Step 2: Since false → ++i → 12, i = 12
console.log(result, i); // 12, 12
```

---

## 17. Confusing Comparisons in JavaScript

JavaScript has several confusing comparison behaviors that are frequently asked in interviews.

### `"" == 0` — Empty string vs zero

```javascript
console.log("" == 0);  // true  (empty string converts to 0)
console.log("" === 0); // false (different types)
```

### `"0" == 0` — String zero vs number zero

```javascript
console.log("0" == 0);  // true  ("0" converts to 0)
console.log("0" === 0); // false (string vs number)
```

### `"" == "0"` — Empty string vs string zero

```javascript
console.log("" == "0");  // false (both strings, different values)
console.log("" === "0"); // false (both strings, different values)
```

### Complete comparison table

| Expression | Result | Reason |
|------------|--------|--------|
| `"" == 0` | `true` | Empty string is converted to 0 |
| `"0" == 0` | `true` | "0" is converted to 0 |
| `"0" === 0` | `false` | Different types (string vs number) |
| `"" == "0"` | `false` | Both strings, values differ |

### `null` and `undefined` comparisons

```javascript
console.log(null == undefined); // true  (special rule)
console.log(null === undefined); // false (different types)
console.log(null == 0);   // false (null is not 0)
console.log(null > 0);    // false (null converts to 0, 0 > 0 is false)
console.log(null >= 0);   // true  (null converts to 0, 0 >= 0 is true)
```

### Why `null >= 0` is true but `null == 0` is false?

- `null >= 0` → null is converted to 0, then `0 >= 0` → `true`.
- `null == 0` → null is NOT converted for `==` with numbers. Special rule: `null == undefined` only.
- This is one of the most confusing parts of JavaScript.

---

## 18. Ternary Operator — Real-World Examples (Automation Testing)

### Example 1: Status code validation

```javascript
let expectedStatusCode = 200;
let actualStatusCode = 200;
let statusCode = (expectedStatusCode === actualStatusCode) ? "Pass" : "Fail";
console.log("Verified Status Code : " + statusCode); // Verified Status Code : Pass
```

### Example 2: Environment-based URL selection

```javascript
let environment = "Staging";
let baseUrl = environment === "prod"
    ? "https://api.example.com" : "https://staging.com";
console.log("Url is : " + baseUrl); // Url is : https://staging.com
```

### Example 3: Browser mode selection

```javascript
let isBrowserMode = true;
let browser = isBrowserMode ? "Headed" : "Headless";
console.log("Browser is launching....." + browser); // Browser is launching.....Headed
```

### Example 4: SLA validation

```javascript
let responseTime = 850;
let sla = 1000;
let slaStatus = responseTime <= sla ? "Within SLA" : "SLA Breached";
console.log(`Response: ${responseTime}-${slaStatus}`);
// Response: 850-Within SLA
```

### Example 5: Simple boolean mapping

```javascript
let condition = true;
let isSKMale = condition ? true : false;
console.log(isSKMale); // true
```

---

## 19. Template Literals (Backtick Strings)

Template literals use backticks `` ` `` instead of quotes, and allow embedding variables with `${}`.

### Syntax

```javascript
let name = "Rahul";
console.log(`Hello ${name}`); // Hello Rahul
```

### Examples from codebase

```javascript
let sla = 1000;
console.log(`What is the SLA Time -----${sla}`); // What is the SLA Time -----1000

let condition = "Warm";
let temperature = 25;
console.log(`Temperature is --> ${temperature} which is lying in = ${condition}`);
```

### Advantages over string concatenation

| Feature | Template Literal | String Concatenation |
|---------|-----------------|---------------------|
| Variable embedding | `${var}` | `"text " + var` |
| Multi-line | Yes (natural) | Needs `\n` |
| Expressions | `${a + b}` | `"text " + (a + b)` |
| Readability | Cleaner | Messy for complex strings |

---

## 20. Operator Precedence

Operator precedence determines the order in which operators are evaluated.

### Simple precedence rules (highest to lowest)

| Level | Operators | Description |
|-------|-----------|-------------|
| 1 | `()` | Parentheses (highest) |
| 2 | `++` `--` `!` `typeof` | Unary operators |
| 3 | `*` `/` `%` | Multiplication, division, modulus |
| 4 | `+` `-` | Addition, subtraction |
| 5 | `<` `>` `<=` `>=` | Comparison |
| 6 | `==` `!=` `===` `!==` | Equality |
| 7 | `&&` | Logical AND |
| 8 | `\|\|` | Logical OR |
| 9 | `??` | Nullish coalescing |
| 10 | `=` `+=` `-=` etc. | Assignment (lowest) |

### Examples

```javascript
let result = 2 + 3 * 4;     // 2 + 12 = 14  (multiplication first)
let result2 = (2 + 3) * 4;  // 5 * 4 = 20   (parentheses first)
let mixed = 5 > 3 && 2 + 2; // true && 4 = 4 (arithmetic first, then comparison, then logical)
```

### Tip

- When in doubt, use parentheses `()` to make the order explicit.
- This is better than memorizing the full precedence table.

---

## 21. Key Takeaways

- **Arithmetic operators**: `+`, `-`, `*`, `/`, `%`, `**`
- **Assignment operators**: `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`
- **Comparison operators**: `==` (loose), `===` (strict), `!=`, `!==`, `>`, `<`, `>=`, `<=`
- **Logical operators**: `&&` (AND), `||` (OR), `!` (NOT)
- **String operator**: `+` concatenates strings
- **Ternary operator**: `condition ? value1 : value2` — shorthand for `if-else`
- **Nested ternary**: Ternary inside ternary — use sparingly
- **Nullish coalescing (`??`)**: Returns right side only for `null`/`undefined`
- **Bitwise operators**: Rarely used in automation — understand basics only
- **`typeof`**: Returns type as string — `typeof null` is `"object"` (JS bug)
- **Data types**: 7 primitives (String, Number, Boolean, Undefined, Null, BigInt, Symbol) + 3 reference types (Object, Array, Function)
- **Increment/Decrement**: Pre (`++a`) changes then returns; Post (`a++`) returns then changes
- **Template literals**: Backticks with `${}` for cleaner string interpolation
- **Operator precedence**: Use `()` to make evaluation order explicit
- **Confusing cases**: `null >= 0` is `true` but `null == 0` is `false`; `"" == 0` is `true`
- **Prefer `===`** over `==` to avoid unexpected type coercion