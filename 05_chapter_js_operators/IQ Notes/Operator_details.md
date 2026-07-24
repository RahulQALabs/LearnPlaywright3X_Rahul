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
console.log("\