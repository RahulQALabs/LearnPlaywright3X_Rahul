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

-   What is a literal?
-   Name five literal types.
-   What is a template literal?
-   Explain BigInt literals.
-   What is a tagged template literal?

## 16. Output-Based Questions

``` javascript
console.log(typeof null);
console.log(0.1 + 0.2 === 0.3);
console.log([1] == [1]);
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

## 24. Summary

Literals are the foundation of data representation in JavaScript.
