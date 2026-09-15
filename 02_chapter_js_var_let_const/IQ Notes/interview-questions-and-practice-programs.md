# Interview Questions and Practice Programs: var vs let vs const

This file contains interview-style questions and small JavaScript practice programs related to variables, scope, hoisting, and declaration rules.

## Interview Questions

### Basic Questions
- What is the difference between var, let, and const?
- Which keyword is used to declare a variable that can be reassigned?
- Which keyword is used for values that should not change?
- What is the difference between block scope and function scope?
- What happens when you declare a variable using var inside an if block?

### Intermediate Questions
- Why is let considered safer than var?
- What is hoisting in JavaScript?
- What is the difference between hoisting and initialization?
- Can you redeclare a variable declared with let?
- Can you redeclare a variable declared with const?

### Advanced Questions
- Why do developers prefer let and const over var in modern JavaScript?
- What is the Temporal Dead Zone (TDZ)?
- How does block scope affect variable accessibility?
- What are the best practices for choosing var, let, or const?
- How would you explain scope and hoisting to a beginner?

## Short Answer Questions

1. What keyword should you use for a value that never changes?
   - Answer: const

2. Which keyword allows reassignment but not redeclaration?
   - Answer: let

3. Which keyword is function-scoped and can be redeclared?
   - Answer: var

4. What is block scope?
   - Answer: A variable is accessible only inside the block where it is declared.

## Practice Programs

### Level 1: Basic Practice

#### Program 1: Reassign a variable
```javascript
let name = "Rahul";
name = "Aman";
console.log(name);
```

#### Program 2: Use const for fixed values
```javascript
const PI = 3.14;
console.log(PI);
```

#### Program 3: Demonstrate var scope
```javascript
function test() {
  var x = 10;
  console.log(x);
}

test();
```

### Level 2: Intermediate Practice

#### Program 4: Compare let and const
```javascript
let age = 20;
age = 25;
console.log(age);

const city = "Delhi";
console.log(city);
```

#### Program 5: Block scope example
```javascript
if (true) {
  let message = "Hello";
  console.log(message);
}

// console.log(message); // Error
```

#### Program 6: Redeclaration example
```javascript
var a = 1;
var a = 2;
console.log(a);
```

### Level 3: Advanced Practice

#### Program 7: Try to reassign const
```javascript
const number = 10;
// number = 20; // This will throw an error
console.log(number);
```

#### Program 8: Scope confusion with var
```javascript
function sample() {
  if (true) {
    var value = 100;
  }
  console.log(value);
}

sample();
```

#### Program 9: Use let inside a loop
```javascript
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// console.log(i); // Error
```

## Practice Tasks for Interview Preparation

- Write a program to declare a variable using var, let, and const.
- Write a program that shows that let is block-scoped.
- Write a program that shows that const cannot be reassigned.
- Explain in your own words what hoisting means.
- Create a small example where var behaves differently from let.

## Bonus Interview Tip

When answering questions about var, let, and const, always mention:
- reassignment
- redeclaration
- scope
- hoisting
- modern JavaScript best practices

---

## Expanded Interview Questions

### Easy Questions
1. What is the difference between var, let, and const?
2. Which keyword should you use for a value that never changes?
3. Which keyword allows reassignment but not redeclaration?
4. Which keyword is function-scoped?
5. Which keywords are block-scoped?
6. What is the difference between block scope and function scope?
7. What happens when you declare a variable using var inside an if block?
8. Can you reassign a const variable?
9. Can you redeclare a variable declared with let?
10. Can you redeclare a variable declared with var?
11. Which keyword must be initialized at declaration time?
12. Is `let x;` valid? Is `const y;` valid?
13. What is the default value of a variable declared with `var` but not assigned?
14. What is the default value of a variable declared with `let` but not assigned?
15. Can you use a variable before declaring it with `var`?

### Medium Questions
16. Why is let considered safer than var?
17. What is hoisting in JavaScript?
18. What is the difference between hoisting and initialization?
19. What is the Temporal Dead Zone (TDZ)?
20. How does TDZ affect let and const?
21. What is the output of `console.log(x); var x = 5;`?
22. What is the output of `console.log(x); let x = 5;`?
23. Why does `typeof x` with `let x` throw a ReferenceError?
24. What is the output of `typeof undeclaredVariable`?
25. How does block scope affect variable accessibility?
26. Can you access a `let` variable outside an `if` block?
27. Can you access a `var` variable outside an `if` block?
28. What is the output of this code?

```javascript
if (true) {
    var a = 10;
    let b = 20;
}
console.log(a);
console.log(b);
```

29. What is the output of this code?

```javascript
for (var i = 0; i < 3; i++) {}
console.log(i);
```

30. What is the output of this code?

```javascript
for (let i = 0; i < 3; i++) {}
console.log(i);
```

### Advanced Questions
31. Why do developers prefer let and const over var in modern JavaScript?
32. What are the best practices for choosing var, let, or const?
33. How would you explain scope and hoisting to a beginner?
34. What is the output of this code and why?

```javascript
console.log(typeof x);
let x = 10;
```

35. What is the output and why?

```javascript
var x = 10;
var x = 20;
console.log(x);
```

36. What is the output and why?

```javascript
let x = 10;
let x = 20;
console.log(x);
```

37. What is the output of this code?

```javascript
const obj = { name: "Rahul" };
obj.name = "Aman";
console.log(obj.name);
```

38. Why does this code work?

```javascript
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
```

39. Why doesn't this code work?

```javascript
const arr = [1, 2, 3];
arr = [4, 5, 6];
```

40. What is the difference between "immutable binding" and "immutable value" with const?

### Hard Questions
41. Explain the concept of Temporal Dead Zone with a real code example.
42. What is the output of this code and why?

```javascript
let x = 1;
{
    console.log(x);
    let x = 2;
}
```

43. What is the output of this code and why?

```javascript
var x = 1;
{
    var x = 2;
}
console.log(x);
```

44. What is the output of this code and why?

```javascript
function test() {
    console.log(a);
    var a = 10;
}
test();
```

45. What is the output of this code and why?

```javascript
function test() {
    console.log(a);
    let a = 10;
}
test();
```

46. What is the difference between `var` in global scope and `let` in global scope regarding the `window` object?

47. How does `const` work with objects? Why can you modify properties but not reassign?

48. Write a program that demonstrates the closure problem with `var` in a loop and fix it using `let`.

49. Explain how the TDZ interacts with `typeof`.

50. What are the pros and cons of using `var` for hoisting intentionally?

### Tricky Output Based Questions
51. What is the output?

```javascript
var a = 1;
var a = 2;
let b = 3;
// let b = 4;
console.log(a, b);
```

52. What is the output?

```javascript
const PI = 3.14;
// PI = 3.14159;
console.log(PI);
```

53. What is the output?

```javascript
let x = 10;
if (true) {
    let x = 20;
    console.log(x);
}
console.log(x);
```

54. What is the output?

```javascript
var x = 10;
if (true) {
    var x = 20;
    console.log(x);
}
console.log(x);
```

55. What is the output?

```javascript
function test() {
    if (true) {
        var x = 5;
    }
    return x;
}
console.log(test());
```

56. What is the output?

```javascript
function test() {
    if (true) {
        let x = 5;
    }
    return typeof x;
}
console.log(test());
```

57. What is the output?

```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
```

58. What is the output?

```javascript
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
```

59. What is the output?

```javascript
console.log(a);
var a = 5;
console.log(b);
let b = 10;
```

60. What is the output?

```javascript
const user = {
    name: "Rahul",
    age: 25
};
user.age = 26;
console.log(user);
// user = { name: "Aman" };
// console.log(user);
```

### Programming Questions
61. Write a program using `const` to store a configuration object with database credentials.

62. Write a program that demonstrates `let` is block-scoped by declaring inside an `if` block.

63. Write a program that demonstrates `var` ignores block scope.

64. Write a program that shows the difference between `var`, `let`, and `const` in terms of reassignment.

65. Write a program using a `for` loop with `let` that correctly logs 0, 1, 2 with setTimeout.

66. Write a program using `var` that shows the problem with closures in loops.

67. Write a program using `const` with an array and show that mutation works (push, pop, index assignment).

68. Write a program using `let` inside nested blocks to demonstrate scope hierarchy.

69. Write a program that shows hoisting with `var` (access before declaration).

70. Write a program that shows TDZ error with `let` or `const`.
