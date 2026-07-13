# 03_Identifiers.md

## 1. Introduction

Every JavaScript program contains names that identify variables,
functions, classes, objects, parameters, and other entities. These names
are called **Identifiers**.

An identifier helps JavaScript recognize and distinguish one entity from
another during program execution.

Without identifiers, it would be impossible to reference values stored
in memory.

## 2. Learning Objectives

-   Understand what an identifier is.
-   Differentiate between identifiers, variables, and literals.
-   Learn JavaScript naming rules.
-   Understand reserved keywords.
-   Follow industry-standard naming conventions.
-   Avoid common naming mistakes.
-   Answer interview questions confidently.

## 3. Definition

An **Identifier** is the name given to a variable, function, class,
object, parameter, or any user-defined entity in JavaScript.

``` javascript
let age = 25;
```

Here: - `age` → Identifier - `25` → Literal

## 4. Why Do We Need Identifiers?

-   Improve readability
-   Improve maintainability
-   Make code reusable
-   Simplify debugging

## 5. Real-Life Analogy

A student's roll number identifies the student. Similarly, an identifier
identifies a variable or function.

## 6. Syntax

``` javascript
let age = 25;
const PI = 3.14;
function display() {}
class Student {}
```

## 7. Naming Rules

1.  Must start with a letter, `_`, or `$`.
2.  Cannot start with a number.
3.  Digits are allowed after the first character.
4.  No spaces allowed.
5.  Only `_` and `$` are allowed as special characters.
6.  Identifiers are case-sensitive.
7.  Reserved keywords cannot be used.
8.  Unicode characters are allowed.
9.  Use meaningful names.
10. Follow naming conventions.

## 8. Naming Conventions

-   camelCase
-   PascalCase
-   UPPER_CASE
-   snake_case

## 9. Examples

``` javascript
let age = 25;
function calculate(){}
class Student{}
const employee = {};
```

## 10. Internal Working

JavaScript stores identifiers in the current lexical environment and
associates them with memory locations.

## 11. Memory Representation

Stack stores primitive values directly.

Objects are stored in Heap, while the Stack stores their references.

## 12. Best Practices

-   Use meaningful names.
-   Prefer camelCase for variables and functions.
-   Use PascalCase for classes.
-   Use UPPER_CASE for constants.

## 13. Common Mistakes

-   Starting with numbers.
-   Using keywords.
-   Using spaces.
-   Using meaningless names.

## 14. FAQs

**Q:** Is an identifier the same as a variable?\
**A:** No. A variable is storage; an identifier is its name.

## 15. Interview Questions

1.  What is an identifier?
2.  What are the naming rules?
3.  Can identifiers start with `$`?
4.  Can keywords be used?
5.  Difference between identifier and variable?

## 16. Output-Based Questions

``` javascript
let Age = 10;
let age = 20;
console.log(Age, age);
```

Output:

    10 20

## 17. Practice Programs

-   Declare variables with valid identifiers.
-   Create a class.
-   Create a function.

## 18. Coding Challenges

Build an Employee object using proper naming conventions.

## 19. Real Interview Scenario

Explain why `employeeName` is better than `e`.

## 20. MCQs

**Which is a valid identifier?**

A. `1name`

B. `user-name`

C. `userName`

D. `class`

**Answer:** C

## 21. Tricky Questions

Can two identifiers differ only by case? **Yes.**

## 22. Quick Revision

-   Identifier = Name
-   Variable = Storage
-   Literal = Value

## 23. Cheat Sheet

  Item       Example
  ---------- ---------------
  Variable   `age`
  Function   `calculate()`
  Class      `Student`
  Constant   `MAX_SIZE`

## 24. Summary

Identifiers are names used to identify variables, functions, classes,
objects, and other entities in JavaScript.
