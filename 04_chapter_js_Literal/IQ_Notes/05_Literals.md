# 05_Literals.md

## 1. Introduction

In JavaScript, literals represent fixed values that you provide directly
in your source code, rather than variables. They are the shorthand way
of creating values without using constructor functions or complex logic.

## 2. Learning Objectives

-   Understand the distinction between a variable, an identifier, and a
    literal.
-   Identify every type of literal available in modern JavaScript
    (ES6+).
-   Visualize how literals are stored in memory (Stack vs. Heap).
-   Master interview-level edge cases regarding literal behavior.

## 3. Definition

A Literal is a syntactic notation for representing a value within
JavaScript code. It is a value that appears "literally" in the script
and is not computed from expressions or variables at that specific
point.

## 4. Why Do We Need Literals?

-   Readability: Writing `[1, 2]` is much clearer than
    `new Array(1, 2)`.
-   Performance: Literals are generally faster for the engine to parse
    than calling constructor functions.
-   Conciseness: Reduces boilerplate code significantly.

## 5. Real-Life Analogy

Imagine a recipe.

-   A Variable is a container labeled "Sugar."
-   A Literal is the actual physical sugar you pour into the bowl. You
    don't need a factory (Constructor) to make every grain; you simply
    use the raw substance (Literal) as it is.

## 6. Syntax

``` javascript
let count = 10;
let name = "Alice";
let colors = [];
```

## 7. Rules (10-15 Rules)

1.  String literals must be enclosed in single, double, or backtick
    quotes.
2.  Numeric literals cannot start with a zero unless followed by a
    decimal or x/b/o.
3.  Array literals use square brackets `[]`.
4.  Object literals use curly braces `{}` and key-value pairs.
5.  Boolean literals are `true` and `false`.
6.  `null` is a keyword.
7.  Template literals allow interpolation.
8.  BigInt literals end with `n`.
9.  RegExp literals use `/pattern/`.
10. Property names may be unquoted if valid identifiers.
11. Trailing commas are allowed.
12. Binary `0b`, Octal `0o`, Hex `0x`.
13. Literal is case sensitive.

## 8. Types of Literals

-   Numeric: `42`, `3.14`, `0b1010`
-   String: `'hello'`, `"world"`
-   Boolean: `true`, `false`
-   Null: `null`
-   Undefined: global property
-   Object: `{ name: "JS" }`
-   Array: `[1,2]`
-   Template: `` `Value ${x}` ``
-   RegExp: `/ab+c/i`
-   BigInt: `9007199254740991n`

## 9. Examples

``` javascript
const age = 25;
const isMember = true;

const user = {
  id: 101,
  tags: ['admin', 'editor'],
  lastLogin: null
};

const pattern = /ES\d+/g;
const largeNum = 1_000_000_000n;
const complexTemplate = `Result: ${2 + 2 * 5}`;
```

## 10. Internal Working

When the JavaScript engine parses a literal, it creates the
corresponding primitive or object in memory immediately.

## 11. Memory Representation

### Stack

Primitive literals are stored by value.

### Heap

Objects, Arrays and RegExp literals are stored in the Heap and
referenced from the Stack.

## 12. Best Practices

-   Use `const`.
-   Prefer template literals.
-   Use numeric separators.
-   Prefer object shorthand.

## 13. Common Mistakes

-   Confusing `null` and `undefined`.
-   Forgetting `n` for BigInt.
-   Using wrapper constructors.

## 14. FAQs

**Q:** Is `{}` the same as `new Object()`?\
**A:** Functionally yes, but `{}` is preferred.

## 15. Interview Questions

### Easy Questions
1. What is a literal in JavaScript?
2. Name five types of literals.
3. What is a string literal? Give an example.
4. What is a number literal? Give an example.
5. What is a boolean literal?
6. What is the difference between `null` and `undefined`?
7. What is a template literal? What symbol is used for it?
8. What is the `typeof` result for `null`?
9. What is the `typeof` result for an array `[]`?
10. Is `"5"` a string literal or number literal?
11. What is a BigInt literal? How do you write one?
12. What is an object literal? Give an example.
13. What is an array literal? Give an example.
14. What is a regular expression literal?
15. Is `true` a literal?
16. What is the difference between a variable and a literal?
17. What is the type of `NaN`?
18. Can you write a number with a decimal in JavaScript?
19. What is the result of `typeof 10.5`?
20. What is the result of `typeof Infinity`?

### Medium Questions
21. What are the different ways to write number literals? (binary, octal, hex, decimal)
22. What is the `0b` prefix used for in number literals?
23. What is the `0o` prefix used for in number literals?
24. What is the `0x` prefix used for in number literals?
25. What are numeric separators in JavaScript? Give an example.
26. Write `1_000_000` — what value does it represent?
27. What is the output of `typeof 12345678901234567890n`?
28. Can you mix BigInt and regular numbers in operations?
29. How do you create a BigInt from a string?
30. What is exponential notation? Write `1500` using exponential notation.
31. What is the output of `typeof NaN`?
32. Why is `NaN === NaN` `false`?
33. How do you properly check if a value is `NaN`?
34. What is the output of `0 / 0`?
35. What operations produce `NaN`?
36. What is the output of `"Rahul" * 2`?
37. What is `Infinity` in JavaScript?
38. What is the output of `1 / 0`?
39. What is the output of `-1 / 0`?
40. What is the difference between `.5` and `0.5` as literals?
41. What is the output of `typeof function(){}`?
42. Can you use Unicode characters in string literals?
43. What is the difference between single quotes, double quotes, and backticks for strings?
44. What is an empty string literal? Is it truthy or falsy?
45. Why is `typeof null` returning `"object"`?

### Hard Questions
46. Explain why `NaN !== NaN` is `true` in JavaScript.
47. Why does `typeof null` return `"object"` — what is the historical reason?
48. What is the difference between `null` and `undefined` in terms of developer intent?
49. What is the maximum safe integer in JavaScript before you need BigInt?
50. Explain how IEEE 754 affects floating point literals like `0.1 + 0.2`.
51. Why is `typeof []` returning `"object"`? How do you properly check for arrays?
52. Can an object literal have functions as property values? Give an example.
53. What is the difference between `Object literal` and `new Object()`?
54. What is a tagged template literal?
55. How do numeric separators work with binary, octal, and hex literals?
56. What happens when you add `n` to a very large integer?
57. Explain the output: `console.log(0.1 + 0.2 === 0.3)`.
58. Why does `typeof null` show `"object"` but `null instanceof Object` is `false`?
59. What is the difference between a primitive literal and a wrapper object?
60. Explain how `"use strict"` changes the behavior of `undefined` as a literal.

## 16. Output-Based Questions

```javascript
console.log(typeof null);          // object
console.log(0.1 + 0.2 === 0.3);    // false
console.log([1] == [1]);           // false
console.log(typeof NaN);           // number
console.log(NaN === NaN);          // false
console.log(1 / 0);                // Infinity
console.log(typeof Infinity);      // number
console.log(0 / 0);                // NaN
console.log(typeof BigInt(10));    // bigint
console.log(+"10" + 10);          // 20 (unary plus converts string to number)
console.log(10 + "10");           // "1010" (number + string = string)
console.log(typeof undefined);     // undefined
console.log(typeof function(){});  // function
console.log(!!"false");           // true (non-empty string is truthy)
console.log(!!"");                // false (empty string is falsy)
```

## 17. Practice Programs

-   Create a car object literal.
-   Write an email regex literal.
-   Use a tagged template literal.

## 18. Coding Challenges

Create a function that accepts a template literal and replaces keywords
from a Map.

## 19. Real Interview Scenarios

Why choose an object literal over a Map for configuration?

## 20. MCQs

**Which is a valid BigInt?**

A)  10B\
B)  10n\
C)  10L

**Answer:** B

## 21. Tricky Questions

**Q:** Is `NaN` a literal?\
**A:** No.

## 22. Quick Revision

-   Literals = Hardcoded values.
-   Primitives → Stack.
-   Objects → Heap.
-   Backticks for template literals.

## 23. Cheat Sheet

  Literal   Meaning
  --------- ---------
  `""`      String
  `1`       Number
  `{}`      Object
  `[]`      Array
  `/ /`     Regex
  `1n`      BigInt

## 24. Number Literals — Detailed

JavaScript numbers are always **64-bit floating point** (IEEE 754), except BigInt. There is no separate int, float, or double.

### Integer Types

| Type | Prefix | Example | Decimal Value |
|------|--------|---------|---------------|
| Decimal | None | `42` | 42 |
| Binary | `0b` | `0b10101` | 21 |
| Octal | `0o` | `0o53` | 43 |
| Hexadecimal | `0x` | `0x2A` | 42 |

```javascript
let decimalNum = 42;
let binaryNum = 0b10101;   // 21
let octalNum = 0o53;       // 43
let hexNum = 0x2A;         // 42
```

### Floating Point Literals

```javascript
let f1 = 10.2;
let f2 = 3.14;
let f3 = -0.09;
let f4 = .5;      // valid but not recommended — use 0.5
let f5 = 5.;      // valid but not recommended — use 5.0
```

### Exponential (Scientific) Notation

```javascript
let e1 = 1.5e3;   // 1.5 × 10³ = 1500
let e2 = 2.5e-2;  // 2.5 × 10⁻² = 0.025
let e3 = 2E10;    // 2 × 10¹⁰ = 20000000000
```

### Numeric Separators

Use `_` to make large numbers readable.

```javascript
let million = 1_000_000;                    // 1000000
let billion = 1_000_000_000;                // 1000000000
let binarySep = 0b1010_1101_0010;           // 2770
let hexSep = 0xDEAD_BEEF;                   // 3735928559
```

---

## 25. BigInt Literals

BigInt is used for numbers larger than `2⁵³ - 1`.

### Syntax

- Add `n` suffix to a number: `12345678901234567890n`
- Use `BigInt()` constructor: `BigInt("12345678901234567890")`

```javascript
let bigIntNum = 1234567890123456789012345678901234567890n;
let bigIntFromString = BigInt("1234567890123456789012345678901234567890");
```

### Rules

- Cannot mix BigInt with regular Number in operations.
- BigInts are of type `"bigint"`.

---

## 26. Infinity

Infinity represents a value greater than the largest finite number.

```javascript
let positiveInfinity = Infinity;
let negativeInfinity = -Infinity;
let in1 = 1 / 0;    // Infinity
let in2 = -1 / 0;   // -Infinity
```

---

## 27. NaN (Not a Number)

NaN represents a value that is not a valid number.

### How NaN is produced

```javascript
let n1 = NaN;                    // NaN literal
let n2 = 0 / 0;                  // division by zero
let n3 = Math.sqrt(-1);          // square root of negative
let n4 = parseInt("abc");        // parsing non-numeric string
let n5 = Number("xyz");          // converting non-numeric string
let n6 = "Rahul" * 2;            // multiplying string by number
```

### Important

- `typeof NaN` → `"number"`
- `NaN === NaN` → `false` (NaN is the only value not equal to itself)
- Use `Number.isNaN()` to check for NaN.

---

## 28. null vs undefined — Detailed Comparison

### null

- Represents **intentional absence** of any object value.
- Must be explicitly assigned by the developer.
- `typeof null` → `"object"` (historical JavaScript bug).

```javascript
let myVariable = null;
console.log(myVariable); // null
console.log(typeof myVariable); // object
```

### undefined

- Indicates a variable has been **declared but not assigned** a value.
- Default value assigned by JavaScript engine.
- `typeof undefined` → `"undefined"`.

```javascript
let anotherVariable;
console.log(anotherVariable); // undefined

function myFunction() {}
console.log(myFunction()); // undefined (no return value)
```

### Comparison Table

| Aspect | undefined | null |
|--------|-----------|------|
| Meaning | Variable declared but no value | Intentional absence of value |
| typeof result | `"undefined"` | `"object"` (historical bug) |
| Assignment | Default by JS engine | Explicitly assigned by developer |
| Loose equality | `undefined == null` → `true` | `null == undefined` → `true` |
| Strict equality | `undefined === null` → `false` | `null === undefined` → `false` |
| Usage intent | Uninitialized / missing | Empty / cleared / no object |
| Falsy value | Yes | Yes |

---

## 29. typeof with Different Literals

```javascript
console.log(typeof "Rahul");     // string
console.log(typeof 25);          // number
console.log(typeof true);        // boolean
console.log(typeof null);        // object (JS bug)
console.log(typeof undefined);   // undefined
console.log(typeof {name:"R"});  // object
console.log(typeof [1,2,3]);     // object (arrays are objects)
console.log(typeof /regex/);     // object (in older JS) or function
```

### Important Quirks

| Expression | Result | Reason |
|------------|--------|--------|
| `typeof null` | `"object"` | Known bug since JS was created |
| `typeof []` | `"object"` | Arrays are objects in JS |
| `typeof NaN` | `"number"` | NaN is still a number type |

---

## 30. Key Takeaways

- Literals are fixed values written directly in code — `25`, `"Hello"`, `true`, `null`, `{}`, `[]`.
- Numbers can be decimal, binary (`0b`), octal (`0o`), or hex (`0x`).
- Use numeric separators (`_`) for readability of large numbers.
- BigInt (`n` suffix) for numbers beyond `2⁵³ - 1`.
- `Infinity` comes from division by zero or exceeding Number limit.
- `NaN` means "Not a Number" but its type is `"number"`.
- `null` is intentionally empty; `undefined` means not assigned.
- `typeof null` returns `"object"` — this is a JavaScript bug.
- `NaN !== NaN` — use `Number.isNaN()` to check.
- The `typeof` operator works only for primitive types — arrays and null both show as `"object"`.
