# Additional Topics — Programming Practice (Statements)

## Easy Programs

**1. Write the FizzBuzz program.**

```javascript
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) console.log("FizzBuzz");
        else if (i % 3 === 0) console.log("Fizz");
        else if (i % 5 === 0) console.log("Buzz");
        else console.log(i);
    }
}
fizzBuzz(15);
```

**2. Write a program demonstrating guard clauses for login validation.**

```javascript
function login(user, pass) {
    if (!user) return "Username required";
    if (!pass) return "Password required";
    if (pass.length < 6) return "Password too short";
    return "Login OK";
}
console.log(login("", "abc123"));   // Username required
console.log(login("rahul", ""));    // Password required
console.log(login("rahul", "abc")); // Password too short
console.log(login("rahul", "abc123")); // Login OK
```

**3. Write a program demonstrating truthy/falsy checks.**

```javascript
if ("0") console.log('"0" is truthy');
if ("false") console.log('"false" is truthy');
if ([]) console.log("[] is truthy");
if ({}) console.log("{} is truthy");
if (!0) console.log("0 is falsy");
if (!"") console.log('"" is falsy');
```

**4. Write a program demonstrating `===` vs `==` in conditions.**

```javascript
function check(value) {
    if (value == 0) console.log("loose match");
    if (value === 0) console.log("strict match");
}
check(0);     // both
check("0");   // loose only
```

**5. Write a program with nested if/else that validates age ranges.**

```javascript
function ageGroup(age) {
    if (age < 0) return "Invalid";
    if (age < 13) return "Child";
    if (age < 20) return "Teenager";
    if (age < 60) return "Adult";
    return "Senior";
}
console.log(ageGroup(10));   // Child
console.log(ageGroup(25));   // Adult
```

---

## Medium Programs

**6. Write the corrected triangle classifier with guard clauses.**

```javascript
function classifyTriangle(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) return "Invalid — positive sides required";
    if (a + b <= c || b + c <= a || a + c <= b) return "Invalid — not a triangle";
    if (a === b && b === c) return "Equilateral";
    if (a === b || b === c || a === c) return "Isosceles";
    return "Scalene";
}
console.log(classifyTriangle(5, 5, 5));  // Equilateral
console.log(classifyTriangle(3, 4, 5));  // Scalene
console.log(classifyTriangle(1, 1, 5));  // Invalid
```

**7. Write a grade calculator with guard clauses.**

```javascript
function grade(marks) {
    if (marks < 0 || marks > 100) return "Invalid marks";
    if (marks >= 90) return "A";
    if (marks >= 80) return "B";
    if (marks >= 70) return "C";
    if (marks >= 40) return "D";
    return "F";
}
console.log(grade(95));  // A
console.log(grade(150)); // Invalid marks
```

**8. Write a program demonstrating the chained comparison bug and fix.**

```javascript
// Bug:
console.log(3 > 2 > 1);   // false

// Fix:
console.log(3 > 2 && 2 > 1);  // true

// Triangle-style bug:
console.log(1 == 1 == true);  // true (accident!)
```

**9. Write a program demonstrating ternary vs guard clause for validation.**

```javascript
// Ternary:
const result = (score >= 70) ? "pass" : "fail";
console.log(result);

// Guard clause (same logic, more readable for multiple checks):
function getResult(score) {
    if (score > 100) return "Invalid";
    if (score >= 70) return "pass";
    return "fail";
}
```

**10. Write a program demonstrating the assignment-in-condition trap.**

```javascript
let x = 0;
// if (x = 5) — would always be truthy! Never do this.
if (x === 0) console.log("x is zero");   // correct
```

---

## Hard Programs

**11. Write a FizzBuzz that returns an array instead of printing.**

```javascript
function fizzBuzzArray(n) {
    return Array.from({ length: n }, (_, i) => {
        const num = i + 1;
        if (num % 15 === 0) return "FizzBuzz";
        if (num % 3 === 0) return "Fizz";
        if (num % 5 === 0) return "Buzz";
        return num;
    });
}
console.log(fizzBuzzArray(15));
```

**12. Write a multi-condition validator with guard clauses (framework style).**

```javascript
function validateUser(user) {
    if (!user) return "User object required";
    if (!user.email) return "Email required";
    if (!user.email.includes("@")) return "Invalid email";
    if (user.age !== undefined && user.age < 18) return "Must be 18+";
    if (!user.roles || user.roles.length === 0) return "At least one role required";
    return "Valid";
}
console.log(validateUser({ email: "rahul@test.com", age: 25, roles: ["user"] }));  // Valid
console.log(validateUser({ email: "bad-email" }));  // Invalid email
```

**13. Write a nested condition program refactored to guard clauses.**

```javascript
// Nested version:
function process(a, b) {
    if (a) {
        if (b) {
            if (a > b) return "a wins";
            return "b wins";
        }
    }
    return "invalid";
}

// Guard clause version:
function process2(a, b) {
    if (!a || !b) return "invalid";
    return a > b ? "a wins" : "b wins";
}
```

**14. Write a program that uses truthy/falsy to validate form input.**

```javascript
function validateForm(form) {
    if (!form.name) return "Name is required";
    if (!form.email) return "Email is required";
    if (!form.age) return "Age is required";
    return "Form valid";
}
console.log(validateForm({ name: "Rahul" }));            // Email is required
console.log(validateForm({ name: "Rahul", email: "a@b.c", age: 25 }));  // Form valid
```

**15. Write a program demonstrating when to use switch vs if/else vs guard clauses.**

```javascript
// Guard clause — validation (return early):
function validate(status) {
    if (!status) return "Missing status";
    if (status < 200) return "Too early";
    return "OK";
}

// If/else if — ranges:
function category(score) {
    if (score >= 90) return "Excellent";
    if (score >= 70) return "Good";
    return "Needs work";
}

// Switch — exact values:
function browserName(code) {
    switch (code) {
        case "c": return "Chrome";
        case "f": return "Firefox";
        default: return "Unknown";
    }
}
```
