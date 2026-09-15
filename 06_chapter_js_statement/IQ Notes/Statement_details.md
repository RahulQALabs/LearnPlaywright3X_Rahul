# JavaScript Control Statements (if-else) – Detailed Notes

## 1. What is a Control Statement?

A control statement controls the flow of execution in a program.

- It decides which block of code runs based on a condition.
- The most common control statement is `if-else`.
- Conditions are written using comparison and logical operators.

---

## 2. The `if` Statement

The `if` statement runs a block of code only when the condition is `true`.

### Syntax

```javascript
if (condition) {
    // code runs if condition is true
}
```

### Example

```javascript
let age = 20;
if (age > 18) {
    console.log("You are an adult");
}
// Output: You are an adult
```

### Flow

- Condition is checked first.
- If `true` → block executes.
- If `false` → block is skipped.

---

## 3. The `if-else` Statement

The `if-else` statement runs one block if condition is `true`, and another block if condition is `false`.

### Syntax

```javascript
if (condition) {
    // runs if true
} else {
    // runs if false
}
```

### Example

```javascript
let age = 16;
if (age > 18) {
    console.log("Go to goa");
} else {
    console.log("Not go to goa");
}
// Output: Not go to goa
```

### Flow

- If `age > 18` is `true` → prints "Go to goa"
- If `age > 18` is `false` → prints "Not go to goa"

### Comparison table

| Condition | age > 18 | Output |
|-----------|----------|--------|
| age = 20 | `true` | Go to goa |
| age = 16 | `false` | Not go to goa |

---

## 4. Nested `if-else` Statements

Nested `if-else` means placing one `if-else` inside another `if` or `else` block.

### Use case

When you need to check multiple conditions step by step.

### Example

```javascript
let age = 11;
if (age > 18) {
    console.log("Go to goa");
    if (age > 25) {
        console.log("You can drink");
    } else {
        console.log("No drink");
    }
} else {
    console.log("No goa nor drink");
}
// Output: No goa nor drink
```

### Step-by-step flow

| age | age > 18 | Inside block | age > 25 | Output |
|-----|----------|-------------|----------|--------|
| 30 | `true` | enters if | `true` | "Go to goa", "You can drink" |
| 22 | `true` | enters if | `false` | "Go to goa", "No drink" |
| 11 | `false` | enters else | not checked | "No goa nor drink" |

### Key points

- The inner `if-else` only runs when the outer condition is `true`.
- If the outer condition is `false`, the entire inner block is skipped.
- Nesting can go many levels deep, but too much nesting makes code hard to read.

---

## 5. `if-else-if` Ladder

The `if-else-if` ladder checks multiple conditions in sequence.

### Syntax

```javascript
if (condition1) {
    // runs if condition1 is true
} else if (condition2) {
    // runs if condition1 is false and condition2 is true
} else if (condition3) {
    // runs if condition1 and condition2 are false and condition3 is true
} else {
    // runs if all conditions are false
}
```

### Example – Grade System

```javascript
let score = 95;

if (score >= 90) {
    console.log("Grade A : Excellent");
} else if (score >= 80 && score < 90) {
    console.log("Grade B : Good");
} else if (score >= 70 && score < 80) {
    console.log("Grade C : Can do better");
} else if (score >= 60 && score < 70) {
    console.log("Grade D : Needs Improvement");
} else if (score >= 50 && score < 60) {
    console.log("Grade E : Brings your Parents");
} else if (score >= 40 && score < 50) {
    console.log("Grade F : Poor, you need to pass 3 tests");
} else {
    console.log("Grade G : Fail");
}
```

### Condition flow table

| Score Range | Grade | Message |
|-------------|-------|---------|
| 90 and above | A | Excellent |
| 80 – 89 | B | Good |
| 70 – 79 | C | Can do better |
| 60 – 69 | D | Needs Improvement |
| 50 – 59 | E | Brings your Parents |
| 40 – 49 | F | Poor, you need to pass 3 tests |
| Below 40 | G | Fail |

### How the ladder works

1. Checks `score >= 90` → if `true`, prints Grade A and **stops**.
2. If `false`, checks `score >= 80 && score < 90` → if `true`, prints Grade B and **stops**.
3. Continues checking each `else if` in order.
4. If **none** of the conditions match, the final `else` block runs.

### Important note

- Once a condition matches, the ladder **stops** checking further conditions.
- The order of conditions matters. Put the most specific condition first.

---

## 6. Comparison Table – if, if-else, nested if-else, if-else-if ladder

| Type | Use case | Example |
|------|----------|---------|
| `if` | Run code only when condition is true | `if (age > 18) { ... }` |
| `if-else` | Two possible outcomes | `if (age > 18) { ... } else { ... }` |
| Nested `if-else` | Check sub-conditions inside a condition | `if (x > 0) { if (x > 10) { ... } }` |
| `if-else-if` ladder | Multiple conditions, one after another | Grade system, category checks |

---

## 7. Common Mistakes

### Using `=` instead of `==` or `===`

```javascript
// Wrong
if (age = 18) { ... }  // assigns 18 to age, always true

// Correct
if (age === 18) { ... }
```

### Missing curly braces

```javascript
// Without braces, only the first line is inside if
if (age > 18)
    console.log("Adult");    // part of if
    console.log("Can vote"); // NOT part of if, always runs
```

### Wrong condition order in ladder

- In a grade ladder, check higher ranges first.
- If you check `score >= 50` before `score >= 90`, Grade A will never be reached.

---

## 8. Truthy and Falsy Values in Conditions

JavaScript conditions don't need to return `true` or `false` directly. Any value can be used as a condition.

### Falsy values (treated as `false`)

Only 6 falsy values exist in JavaScript:

| Value | Type | Why it's falsy |
|-------|------|----------------|
| `false` | boolean | The actual false value |
| `0` | number | Zero is treated as false |
| `""` (empty string) | string | No characters → false |
| `null` | object | No value |
| `undefined` | undefined | Not defined |
| `NaN` | number | Not a valid number |

### Truthy values (everything else)

Everything that is NOT in the falsy list is truthy:

```javascript
if ("Hello")  // truthy → runs
if (" ")      // truthy (space is a character)
if (1)        // truthy
if (-1)       // truthy (negative number)
if ([])       // truthy (empty array)
if ({})       // truthy (empty object)
if ("0")      // truthy (string "0" is not empty)
if ("false")  // truthy (non-empty string)
```

### Example

```javascript
let name = "";
if (name) {
    console.log("Name exists");
} else {
    console.log("Name is empty");  // this runs
}

let count = 0;
if (count) {
    console.log("Count is non-zero");
} else {
    console.log("Count is zero");  // this runs
}
```

---

## 9. Type Coercion in Conditions

When a non-boolean value is used in a condition, JavaScript converts it to boolean automatically.

### How coercion works

- Falsy values become `false`.
- Truthy values become `true`.

### Common confusing cases

```javascript
if ("0")          // truthy → runs (string "0" is not empty)
if (0)            // falsy → does NOT run
if ("false")      // truthy → runs (non-empty string)
if (false)        // falsy → does NOT run
if ([])           // truthy → runs (empty array is still an object)
if ({})           // truthy → runs (empty object is still an object)
```

### Why this matters in interviews

```javascript
let value = "0";
if (value == false) {
    // runs because "0" == false is true (loose equality coercion)
}

if (value === false) {
    // does NOT run because types differ
}
```

---

## 10. Short-Circuit Evaluation with `&&` and `||`

Logical operators `&&` and `||` can sometimes replace `if-else`.

### `&&` as a mini-if

```javascript
// Instead of:
if (isLoggedIn) {
    console.log("Welcome");
}

// You can write:
isLoggedIn && console.log("Welcome");
```

### `||` for default values

```javascript
// Instead of:
let username;
if (user.input) {
    username = user.input;
} else {
    username = "Guest";
}

// You can write:
let username = user.input || "Guest";
```

### How short-circuit works

| Operator | Behavior |
|----------|----------|
| `&&` | If left is falsy, stop and return left. If left is truthy, return right. |
| `||` | If left is truthy, stop and return left. If left is falsy, return right. |

### Comparison table — `if-else` vs short-circuit

| Scenario | if-else | Short-circuit |
|----------|---------|---------------|
| Run code only if condition is true | `if (cond) { fn(); }` | `cond && fn()` |
| Set default value | `let x = val ? val : default` | `let x = val \|\| default` |
| Multiple conditions | `if (a && b) { ... }` | `a && b && fn()` |

---

## 11. Ternary Operator vs `if-else`

The ternary operator is a shorter way to write `if-else`.

### Syntax

```javascript
condition ? valueIfTrue : valueIfFalse
```

### Examples

```javascript
// if-else version
let status;
if (age >= 18) {
    status = "Adult";
} else {
    status = "Minor";
}

// Ternary version (shorter)
let status = age >= 18 ? "Adult" : "Minor";
```

### When to use ternary

- For simple, one-line assignments.
- When you need to return a value based on a condition inside an expression.

### When NOT to use ternary

- For complex logic with multiple statements.
- Nested ternaries (hard to read).

### Comparison table

| Aspect | if-else | Ternary |
|--------|---------|---------|
| Lines of code | 5+ lines | 1 line |
| Returns a value | No (must assign) | Yes (returns the value) |
| Multiple statements | Yes | No (only expressions) |
| Readability for simple cases | Verbose | Concise |
| Readability for complex cases | Clear | Confusing |

---

## 12. Switch Statement (Alternative to if-else-if Ladder)

The `switch` statement is another way to check multiple conditions, especially when comparing the same variable against specific values.

### Syntax

```javascript
switch (variable) {
    case value1:
        // runs if variable === value1
        break;
    case value2:
        // runs if variable === value2
        break;
    default:
        // runs if no case matches
}
```

### Example

```javascript
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}
console.log(dayName); // Wednesday
```

### Comparison — if-else-if ladder vs switch

| Aspect | if-else-if ladder | switch |
|--------|-------------------|--------|
| Best for | Ranges (grades, discounts) | Specific values (days, codes) |
| Comparison type | Any comparison (`>`, `<`, `===`, etc.) | Strict equality (`===`) only |
| Readability | Good for ranges | Good for many specific values |
| Performance | Checks all conditions until match | Can be optimized (jump table) |

---

## 13. Early Return / Guard Clause Pattern

A guard clause is an `if` at the top of a function that returns early if a condition is not met.

### Without guard clause (nested)

```javascript
function processUser(user) {
    if (user) {
        if (user.isActive) {
            if (user.hasPermission) {
                // do the work
                console.log("Processing...");
            }
        }
    }
}
```

### With guard clause (flat)

```javascript
function processUser(user) {
    if (!user) return;
    if (!user.isActive) return;
    if (!user.hasPermission) return;

    // do the work (no nesting!)
    console.log("Processing...");
}
```

### Benefits of guard clauses

- Reduces nesting (arrowhead anti-pattern).
- Code is easier to read and maintain.
- Each condition is independent and clear.

---

## 14. Block Scope with `let` and `const` in `if-else`

Variables declared with `let` or `const` inside `if` blocks are scoped to that block.

### Example

```javascript
let x = 10;

if (true) {
    let y = 20;
    const z = 30;
    console.log(x); // 10 (accessible — same scope or outer)
    console.log(y); // 20 (accessible — same block)
}

console.log(x); // 10 (accessible)
console.log(y); // ReferenceError: y is not defined (block-scoped)
console.log(z); // ReferenceError: z is not defined (block-scoped)
```

### `var` vs `let`/`const` in blocks

```javascript
if (true) {
    var a = 10;   // var ignores block scope
    let b = 20;   // let respects block scope
}
console.log(a); // 10 (accessible — var leaks out)
console.log(b); // ReferenceError: b is not defined
```

---

## 15. Multiple `if` Statements vs `else-if` Ladder

This is a common confusion. They behave differently.

### Multiple `if` statements

```javascript
let score = 95;

if (score >= 50) {
    console.log("Pass");
}
if (score >= 75) {
    console.log("Good");
}
if (score >= 90) {
    console.log("Excellent");
}
// Output: Pass, Good, Excellent   (ALL conditions run)
```

### `else-if` ladder

```javascript
let score = 95;

if (score >= 50) {
    console.log("Pass");
} else if (score >= 75) {
    console.log("Good");
} else if (score >= 90) {
    console.log("Excellent");
}
// Output: Pass   (only first match runs)
```

### Key difference

| Approach | Behavior |
|----------|----------|
| Multiple `if` | Every condition is checked independently |
| `else-if` ladder | Only the first matching condition runs, then stops |

---

## 16. Compound Conditions

You can combine multiple conditions inside a single `if` using logical operators.

### Using `&&` (all must be true)

```javascript
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You can drive");
}
```

### Using `||` (at least one must be true)

```javascript
let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
    console.log("No work today");
}
```

### Using `!` (negation)

```javascript
let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please log in");
}
```

### Combining multiple operators

```javascript
let age = 22;
let hasID = true;
let isBlacklisted = false;

if ((age >= 18 && hasID) && !isBlacklisted) {
    console.log("Entry allowed");
}
```

---

## 17. Dangling Else Problem

The "dangling else" problem happens when a nested `if` is written without braces, and it is unclear which `if` the `else` belongs to.

### Problem

```javascript
if (a > 0)
    if (b > 0)
        console.log("Both positive");
else
    console.log("a is not positive");
```

**Which `if` does `else` belong to?** JavaScript binds `else` to the **nearest** `if`, so this is actually:

```javascript
if (a > 0) {
    if (b > 0) {
        console.log("Both positive");
    } else {
        console.log("a is not positive");  // wrong meaning!
    }
}
```

### Solution — always use curly braces

```javascript
if (a > 0) {
    if (b > 0) {
        console.log("Both positive");
    }
} else {
    console.log("a is not positive");
}
```

---

## 18. Condition Ordering Best Practices

The order of conditions in a ladder affects correctness and performance.

### Rule 1: Check most specific condition first

```javascript
// BAD — specific case never reached
if (score >= 50) {
    console.log("Pass");
} else if (score >= 90) {
    console.log("Excellent"); // NEVER runs
}

// GOOD — specific case first
if (score >= 90) {
    console.log("Excellent");
} else if (score >= 50) {
    console.log("Pass");
}
```

### Rule 2: Check most likely condition first (performance)

```javascript
// If most users are students, check student first
if (user.type === "student") {
    // common case
} else if (user.type === "teacher") {
    // less common
} else if (user.type === "admin") {
    // rare
}
```

### Rule 3: Use inclusive ranges wisely

```javascript
// BAD — overlapping conditions
if (score > 80) { ... }
else if (score > 50) { ... }
else if (score > 0) { ... }

// GOOD — clear boundaries
if (score > 80 && score <= 100) { ... }
else if (score > 50 && score <= 80) { ... }
else if (score > 0 && score <= 50) { ... }
```

---

## 19. Conditional (Ternary) Chaining

Multiple ternary operators can be chained like an `if-else-if` ladder.

### Syntax

```javascript
let grade = score >= 90 ? "A"
           : score >= 80 ? "B"
           : score >= 70 ? "C"
           : score >= 60 ? "D"
           : "F";
```

### When to use

- Short, one-line value assignments.
- Only when it remains readable.

### When NOT to use

- If the logic is complex or has side effects (console.log, etc.).
- If it spans too many lines (stick to `if-else-if`).

---

## 20. `if-else` with Function Returns

You can use `if-else` inside functions to return different values.

### One return per path (clean)

```javascript
function getDiscount(amount) {
    if (amount >= 1000) return 0.2;
    if (amount >= 500) return 0.1;
    return 0;
}
```

### Equivalent ladder version

```javascript
function getDiscount(amount) {
    if (amount >= 1000) {
        return 0.2;
    } else if (amount >= 500) {
        return 0.1;
    } else {
        return 0;
    }
}
```

Both work exactly the same. The first version is cleaner because `return` exits the function immediately.

---

## 21. Comparison Table — All Control Flow Approaches

| Approach | Use case | Pros | Cons |
|----------|----------|------|------|
| `if` | Single condition, optional execution | Simple, clear | Only handles one branch |
| `if-else` | Two outcomes | Handles both branches | Gets long for many conditions |
| Nested `if-else` | Hierarchical checks | Precise control | Hard to read if deep |
| `if-else-if` ladder | Multiple ranges or conditions | Sequential checking | Must order carefully |
| Ternary `? :` | Simple value selection | Concise, returns value | Bad for complex logic |
| `switch` | Many specific value matches | Clean for enum-like values | Strict equality only |
| Guard clause (early return) | Input validation, pre-checks | Reduces nesting | Only works in functions |
| Short-circuit `&&` / `\|\|` | Mini condition or default | Very concise | Limited to expressions |

---

## 22. Key Takeaways (Complete)

- `if-else` controls which code runs based on conditions.
- Nested `if-else` is useful for multi-level checks.
- `if-else-if` ladder is best for range-based conditions like grades.
- Always use `===` for comparison, not `=` for assignment.
- Order of conditions matters in a ladder — most specific first.
- Indentation makes nested code readable.
- **Falsy values**: `false`, `0`, `""`, `null`, `undefined`, `NaN` — everything else is truthy.
- Short-circuit `&&` and `||` can replace simple `if-else`.
- Ternary `? :` is great for simple value selection.
- `switch` is best for matching one variable against many specific values.
- Guard clauses reduce nesting and improve readability.
- `let`/`const` inside `if` blocks are block-scoped (not accessible outside).
- Multiple `if` statements check ALL conditions — `else-if` ladder stops at first match.
- Always use curly braces `{}` to avoid the dangling else problem.
