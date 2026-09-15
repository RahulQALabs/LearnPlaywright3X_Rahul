# JavaScript Switch Statement – Detailed Notes

## 1. What is a Switch Statement?

The `switch` statement is a control flow statement that executes different code blocks based on the value of an expression.

- It is an alternative to long `if-else-if` ladders.
- It compares the expression against multiple `case` values.
- Comparison is done using **strict equality** (`===`), not loose equality (`==`).

### Syntax

```javascript
switch (expression) {
    case value1:
        // runs if expression === value1
        break;
    case value2:
        // runs if expression === value2
        break;
    default:
        // runs if no case matches
}
```

### Simple example — Day of week

```javascript
let data = 3;

switch (data) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Input is wrong!");
}
// Output: Wednesday
```

### Flow diagram

```
         ┌─────────────┐
         │  data = 3   │
         └──────┬──────┘
                │
          ┌─────▼──────┐
          │ case 1?    │─── false
          └─────┬──────┘
                │ true
          ┌─────▼──────┐
          │ "Monday"   │
          └─────┬──────┘
                │ break → exit
                │
          ┌─────▼──────┐
          │ case 2?    │─── false
          └─────┬──────┘
                │ true
          ┌─────▼──────┐
          │ "Tuesday"  │
          └─────┬──────┘
                │ break → exit
                │
          ┌─────▼──────┐
          │ case 3?    │─── true → "Wednesday" → break → exit
          └────────────┘
```

---

## 2. The `break` Keyword

The `break` keyword stops execution of the switch and exits.

- Without `break`, execution **falls through** to the next case.
- `break` is optional — sometimes fall-through is intentional.

### Without `break` — Fall-through behavior

```javascript
let data = 3;

switch (data) {
    case 1:
        console.log("Monday - Sprint Planning");
    case 2:
        console.log("Tuesday - Development");
    case 3:
        console.log("Wednesday - Code Review");
    case 4:
        console.log("Thursday - Testing");
    case 5:
        console.log("Friday - Deployment & Retro");
    case 6:
        console.log("Saturday - Rest Day");
    case 7:
        console.log("Sunday - Rest Day");
    default:
        console.log("Input is wrong!");
}
// Output:
// Wednesday - Code Review
// Thursday - Testing
// Friday - Deployment & Retro
// Saturday - Rest Day
// Sunday - Rest Day
// Input is wrong!
```

### Why does this happen?

- When `data = 3`, it matches `case 3` and starts executing from there.
- Since there is no `break`, it continues executing **all subsequent cases** including `default`.
- This is called **fall-through**.

### Fall-through comparison table

| Scenario | With `break` | Without `break` |
|----------|-------------|-----------------|
| data = 1 | Only case 1 runs | case 1 + all after it |
| data = 3 | Only case 3 runs | case 3 + all after it |
| data = 7 | Only case 7 runs | case 7 + default runs |

---

## 3. Fall-through with Multiple Cases Grouping

You can group multiple cases together to run the same code block.

```javascript
let browserName = "Safari";

switch (browserName) {
    case "Chrome":
    case "Edge":
    case "Opera":
    case "Brave":
        console.log("Chromium Project!");
        break;
    case "Firefox":
        console.log("Mozilla Firefox Project!");
        break;
    case "Safari":
        console.log("Safari Project!");
        break;
    default:
        console.log("Unknown Browser");
        break;
}
// Output: Safari Project!
```

### How grouping works

- `case "Chrome"` → no matching → fall-through to next
- `case "Edge"` → no matching → fall-through to next
- `case "Opera"` → no matching → fall-through to next
- `case "Brave"` → no matching → fall-through to next
- None matched → `break` stops the fall-through sequence
- `case "Safari"` → matches → runs its block

If the input was `"Chrome"`:

| Case | Matches? | Action |
|------|----------|--------|
| Chrome | Yes | → fall-through (no break) |
| Edge | — | → fall-through (no break) |
| Opera | — | → fall-through (no break) |
| Brave | — | → "Chromium Project!" → break |

### Use case

- Grouping browsers by their rendering engine.
- Grouping HTTP status codes by category (2xx, 3xx, 4xx, 5xx).
- Grouping weekdays vs weekends.

---

## 4. Switch with Expression Inside Case

The expression in `switch` can be a boolean, and cases can use comparison expressions.

```javascript
let score = 58;

switch (true) {
    case (score >= 90):
        console.log("Outstanding : Top Performer");
        break;
    case (score >= 85):
        console.log("Excellent : Above Expectation");
        break;
    case (score >= 70):
        console.log("Good : Meet the Expectations");
        break;
    case (score >= 50):
        console.log("Average : Need Improvement");
        break;
    default:
        console.log("Unsatisfactory Result : Require Trainings");
        break;
}
// Output: Average : Need Improvement
```

### How it works

- `switch (true)` means each `case` is evaluated as a boolean expression.
- The first `case` that evaluates to `true` runs.
- This mimics an `if-else-if` ladder.

### Comparison — `switch(true)` vs `if-else-if` ladder

| Aspect | `switch(true)` | `if-else-if` ladder |
|--------|----------------|---------------------|
| Syntax | More verbose | Natural for ranges |
| Readability | Unusual pattern | Standard |
| Performance | Same | Same |
| Interview preference | Less common | Preferred |

---

## 5. Multiple Statements Inside a Case

You can execute multiple statements inside a single case.

```javascript
let data = 2;

switch (data) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        let a = 10;
        let b = 20;
        console.log(a + b); // 30
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Input is wrong!");
        break;
}
// Output:
// Tuesday
// 30
```

### Important notes

- Each case can have multiple lines of code.
- Variables declared with `let`/`const` inside a case are **block-scoped** only if the case is wrapped in `{}`.
- Without `{}`, `let` declarations in one case can conflict with another case (duplicate declaration error).

---

## 6. The `default` Case

The `default` case runs when **no other case matches**.

- `default` is optional.
- It can be placed anywhere in the switch, but conventionally at the end.
- If placed in the middle, it still works but needs a `break` to avoid fall-through.

### Rules for `default`

| Position | With `break` | Without `break` |
|----------|-------------|-----------------|
| At the end | Runs if no match, then exits | Runs if no match, then exits (no next case) |
| In the middle | Runs if no match, then exits | Runs and falls through to next case |

---

## 7. Duplicate Cases

Having duplicate `case` values is **allowed** in JavaScript, but only the **first match** runs.

```javascript
let x = 10;

switch (x) {
    case 10:
        console.log(1); // this runs
        break;
    case 10:  // duplicate case — never reached
        console.log(2);
        break;
    default:
        console.log("d");
        break;
}
// Output: 1
```

### Behavior table

| Value | First match | Second match | Result |
|-------|-------------|--------------|--------|
| x = 10 | case 10 (line 1) | case 10 (line 2) | Only first runs |
| x = 5 | — | — | default runs |

---

## 8. Strict Comparison in Switch

Switch uses **strict equality** (`===`), not loose equality (`==`).

```javascript
let a = 0;
console.log(typeof a); // number

switch (a) {
    case false:   // false is boolean → 0 === false is false
        console.log("false matched");
        break;
    case 0:       // 0 is number → 0 === 0 is true
        console.log("0 matched");
        break;
    default:
        break;
}
// Output: 0 matched
```

### Comparison table — `switch` vs `if-else`

| Expression | `switch` behavior | `if-else` with `==` | `if-else` with `===` |
|------------|-------------------|---------------------|----------------------|
| 0 vs false | No match (types differ) | Match (`0 == false` is true) | No match |
| "5" vs 5 | No match (types differ) | Match (`"5" == 5` is true) | No match |
| null vs undefined | No match | Match (`null == undefined`) | No match |

### Why strict comparison matters

- No unexpected type coercion.
- More predictable than `if` with `==`.
- You must match both value and type.

---

## 9. HTTP Status Code Example

```javascript
let responseCode = 404;

switch (responseCode) {
    case 200:
        console.log("OK");
        break;
    case 404:
        console.log("Page Not Found");
        break;
    case 500:
        console.log("Internal Error");
        break;
    default:
        break;
}
// Output: Page Not Found
```

### Common HTTP status codes for switch

| Code | Meaning | Case |
|------|---------|------|
| 200 | OK | Success |
| 301 | Moved Permanently | Redirect |
| 400 | Bad Request | Client Error |
| 404 | Not Found | Client Error |
| 500 | Internal Server Error | Server Error |

---

## 10. Handing Code Inside Case with `{}` (Block Scoping)

If you declare variables with `let`/`const` in a case, it's recommended to wrap the case in `{}` to create a block scope.

```javascript
let value = 1;

switch (value) {
    case 1: {
        let msg = "One";
        console.log(msg);
        break;
    }
    case 2: {
        let msg = "Two"; // No conflict — different block
        console.log(msg);
        break;
    }
    default:
        break;
}
```

Without `{}`, `let` declarations in adjacent cases cause a syntax error because they share the same block scope.

---

## 11. Switch vs if-else-if Ladder — Comparison Table

| Aspect | Switch | if-else-if ladder |
|--------|--------|-------------------|
| Comparison type | Strict (`===`) only | Any comparison (`>`, `<`, `===`, etc.) |
| Best for | Specific values (days, codes, enums) | Ranges (grades, scores) |
| Readability | Clean for many specific values | Clean for range-based logic |
| Fall-through | Possible (with/without break) | Not applicable |
| Performance | Can be optimized (jump table) | Linear (checks sequentially) |
| Expression | Single value | Any expression |
| Default case | `default` keyword | Final `else` block |

---

## 12. Common Interview IQ Patterns

### Pattern 1: Fall-through output prediction

```javascript
let fruit = "banana";

switch (fruit) {
    case "apple":
        console.log("apple");
    case "banana":
        console.log("banana");
    case "guava":
        console.log("guava");
    case "grapes":
        console.log("grapes");
    default:
        console.log("No Fruits");
        break;
}
// Output:
// banana
// guava
// grapes
// No Fruits
```

### Pattern 2: Strict comparison gotcha

```javascript
let a = 0;
switch (a) {
    case false:
        console.log("false");
        break;
    case 0:
        console.log("zero");
        break;
}
// Output: zero  (0 === false is false)
```

### Pattern 3: Duplicate cases

```javascript
let x = 10;
switch (x) {
    case 10:
        console.log("first");
        break;
    case 10:
        console.log("second");
        break;
}
// Output: first
```

### Pattern 4: `switch(true)` for range evaluation

```javascript
let score = 85;
switch (true) {
    case score >= 90: console.log("A"); break;
    case score >= 80: console.log("B"); break;
    case score >= 70: console.log("C"); break;
    default: console.log("D"); break;
}
// Output: B
```

---

## 13. Key Takeaways

- Switch uses **strict equality** (`===`) — no type coercion.
- `break` prevents fall-through; without it, execution continues to the next case.
- **Fall-through** can be intentional (grouping multiple cases).
- `default` runs when no case matches — optional but recommended.
- `switch(true)` pattern allows **range-based conditions** inside cases.
- **Duplicate cases** are allowed — first match wins.
- Variables in cases should use `{}` block scoping to avoid redeclaration errors.
- Switch is best for **specific value matching** (days, status codes, enums).
- `if-else-if` ladder is better for **range-based conditions** (grades, scores).
- Common use cases in automation testing:
  - Browser type selection (Chrome, Firefox, Safari)
  - HTTP status code handling (200, 404, 500)
  - Environment selection (dev, staging, prod)
  - Test data type switching
