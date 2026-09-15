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

### camelCase
- First word lowercase, subsequent words capitalized.
- Used for: variables, function names, object properties.

```javascript
let firstName = "Rahul";
let lastName = "Gupta";
function getFullName() { return "Hello! Rahul Gupta"; }
```

### PascalCase
- Every word starts with a capital letter.
- Used for: class names, constructor functions.

```javascript
let RollNumber = 987;  // for class/constructor names
class Student {}
```

### snake_case
- Words separated by underscores, all lowercase.
- Used for: variable names (less common in JS, more in Python/databases).

```javascript
let first_name = "Rahul";
let last_name = "Gupta";
```

### SCREAMING_SNAKE_CASE (UPPER_CASE)
- All uppercase with underscores between words.
- Used for: constants, environment variables, configuration values.

```javascript
const PI = 3.14;
const API_KEY = "1234567890";
const DB_URL = "mongodb://localhost:27017/mydatabase";
```

### Hungarian Notation
- Prefix variable name with its data type.
- Not commonly used in modern JavaScript.

```javascript
let strName = "Rahul";
let intAge = 25;
let boolIsStudent = true;
let arrNumbers = [1, 2, 3, 4, 5];
```

### Comparison Table

| Convention | Example | Used For |
|------------|---------|----------|
| camelCase | `firstName` | Variables, functions |
| PascalCase | `StudentClass` | Classes, constructors |
| snake_case | `first_name` | Databases, Python interop |
| SCREAMING_SNAKE | `API_KEY` | Constants, env variables |
| Hungarian | `strName` | Not recommended (legacy) |

---

## 9. Valid and Invalid Identifiers — Reference Table

### Valid Identifiers
```
a         _b        $c        _
_o        aa45kk    name      Name
rah$gpt   rah123gpt user_name $salary
totalAmount  a1b2c3  fullName  _123
Name123   first_name  $value
姓名      café      naïve     π
Δ        日本語    Δvalue
```

### Invalid Identifiers
```
123abc    → Cannot start with number
first-name → Cannot contain hyphens
class     → Reserved keyword
if        → Reserved keyword
var       → Reserved keyword
const     → Reserved keyword
my name   → Cannot contain spaces
user@name → Cannot contain @
rah&&123  → Cannot contain operators
```

---

## 10. Rules (Complete with Edge Cases)

1. Must start with a letter, `_`, or `$`.
2. Cannot start with a number.
3. Digits are allowed after the first character.
4. No spaces allowed.
5. Only `_` and `$` are allowed as special characters.
6. Identifiers are **case-sensitive** — `name` and `Name` are different.
7. Reserved keywords cannot be used (`class`, `if`, `var`, `const`, `let`, `function`, etc.).
8. **Unicode characters are allowed** — you can use letters from any language.
9. Use meaningful names that describe the purpose.
10. Follow naming conventions (camelCase, PascalCase, etc.).

---

## 11. Reserved Keywords (Cannot Be Used as Identifiers)

| Category | Keywords |
|----------|----------|
| Declaration | `var`, `let`, `const`, `function`, `class`, `import`, `export` |
| Flow control | `if`, `else`, `switch`, `case`, `break`, `continue`, `return` |
| Iteration | `for`, `while`, `do`, `in`, `of` |
| Exception | `try`, `catch`, `finally`, `throw` |
| Other | `this`, `new`, `typeof`, `instanceof`, `void`, `delete`, `with` |

---

## 12. Unicode in Identifiers

JavaScript allows Unicode letters in identifiers. This means you can use non-English characters.

```javascript
let 姓名 = "Rahul";    // Chinese characters
let café = "coffee";   // Accented characters
let naïve = "value";   // Special characters
let π = 3.14;          // Greek letters
let Δ = 10;            // Mathematical symbols
let 日本語 = "Japanese";
let Δvalue = 5;
```

This is valid JavaScript but is **not recommended** in professional code as it reduces readability for international teams.

---

## 13. Common Mistakes — Expanded

| Mistake | Example | Why It's Wrong |
|---------|---------|----------------|
| Start with number | `let 123abc = 12` | SyntaxError: Invalid token |
| Contains hyphen | `let first-name = 14` | JavaScript interprets `-` as subtraction |
| Reserved keyword | `let class = 15` | `class` is a reserved keyword |
| Contains space | `let my name = 21` | Space is not allowed |
| Contains `@` | `let user@name = 24` | `@` is not a valid identifier character |
| Contains `&&` | `let rah&&123 = 90` | `&&` is an operator |
| Confusing similar names | `let l = 1; let I = 2;` | Hard to read and debug |
| Meaningless names | `let xyz = "data"` | No semantic meaning |

---

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

## 24. Interview Questions (Expanded)

### Easy Questions
1. What is an identifier in JavaScript?
2. What are the rules for naming identifiers?
3. Can an identifier start with a number?
4. Can identifiers start with `$`?
5. Can identifiers start with `_`?
6. Can keywords be used as identifiers?
7. Are identifiers case-sensitive? Give an example.
8. What is the difference between an identifier and a variable?
9. What is the difference between an identifier and a literal?
10. Is `name` a valid identifier?
11. Is `Name` the same as `name`?
12. Is `_` a valid identifier?
13. Is `$` a valid identifier?
14. Is `123abc` a valid identifier?
15. Is `user_name` a valid identifier?

### Medium Questions
16. Identify which of these are valid identifiers: `firstName`, `first-name`, `first_name`, `1stName`, `$name`.
17. Why is `class` not a valid identifier?
18. Why is `first-name` not a valid identifier?
19. What are the different naming conventions in JavaScript?
20. What is camelCase? Give an example.
21. What is PascalCase? Give an example.
22. What is snake_case? Give an example.
23. What is SCREAMING_SNAKE_CASE? Give an example.
24. What is Hungarian Notation? Is it recommended?
25. Which naming convention is used for JavaScript variables?
26. Which naming convention is used for JavaScript classes?
27. Which naming convention is used for constants?
28. Can you use Unicode characters in identifiers? Give an example.
29. Is `π` a valid identifier in JavaScript?
30. Is `café` a valid identifier?
31. What special characters are allowed in identifiers?
32. Why is `@` not allowed in an identifier?
33. Why is space not allowed in an identifier?
34. Why is `-` (hyphen) not allowed in an identifier?
35. What is the maximum length of an identifier?

### Hard Questions
36. Can two identifiers differ only by case? What are the risks?
37. What are reserved keywords? List 10 of them.
38. Why is `undefined` not a reserved keyword but can still cause issues?
39. Can `let` be used as an identifier in non-strict mode? What about strict mode?
40. How does JavaScript internally store identifiers?
41. What is a lexical environment in relation to identifiers?
42. How does scope affect identifier resolution?
43. What happens when two identifiers have the same name but are in different scopes?
44. Why is it bad practice to use short meaningless names like `a`, `b`, `x`?
45. How do you fix a naming collision in JavaScript?
46. What is the difference between `user-name` (invalid) and `user_name` (valid) — explain the parsing difference?
47. Why does `let delete = 10` throw an error but `let deletex = 10` works?
48. Explain the concept of "identifier resolution" in the scope chain.
49. Can you use `await` as an identifier? Does it depend on the context?
50. How do you choose between camelCase and snake_case for a JavaScript project?
