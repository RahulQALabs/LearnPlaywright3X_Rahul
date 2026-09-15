# JavaScript Functions – Interview Questions

## Easy Questions

1. What is a function in JavaScript?

2. Why do we use functions?

3. How do you declare a function?

4. How do you call a function?

5. What is the difference between defining a function and calling it?

6. What happens if you call a function that only `console.log()`s something and then print its return value?

7. What is a parameter?

8. What is an argument?

9. What does the `return` keyword do?

10. Can a function have multiple parameters?

11. Can a function return multiple values?

12. What are the 4 types of functions based on parameters and return type?

13. What is a function without parameters and without a return type called?

14. What does a function return if it has no `return` statement?

15. What is a function expression?

---

## Medium Questions

16. What is the output of this code?
```javascript
function test() {
    console.log("Hello!");
}
console.log(test());
```

17. What is the output of this code?
```javascript
function sayHello() {
    console.log("Hi");
    return "Hello";
}
console.log(sayHello());
```

18. What is the difference between `console.log()` inside a function and `return` inside a function?

19. What is a template literal? How do you use variables inside it?

20. What is the output of this code?
```javascript
function greetByName(name) {
    return `Hello! ${name}`;
}
console.log(greetByName("Saanvi"));
```

21. What is the difference between a function declaration and a function expression?

22. What is an arrow function? What is its syntax?

23. What is the output of this code?
```javascript
const doubleB = () => "Staging";
console.log(doubleB());
```

24. How do you write an arrow function with one parameter?

25. How do you write an arrow function with multiple statements (multiline)?

26. Can an arrow function take no parameters?

27. What is the output of this code?
```javascript
const getResult = (score) => {
    if (score > 70) return "pass";
    return "fail";
}
console.log(getResult(98));
console.log(getResult(50));
```

28. What happens if you try to declare the same function name twice — once as a function and once as a `const` arrow function?

29. What is an IIFE?

30. Why would you use an IIFE?

31. What is the output of this code?
```javascript
(function () {
    console.log("Anonymous Function");
})();
```

32. What is the difference between a normal function call and an IIFE?

---

## Logical / Reasoning Questions

33. What is the output and why?
```javascript
function result(scr) {
    return scr > 70 ? "pass" : "fail";
}
console.log(result(70));
```

34. What is the output and why?
```javascript
function result(scr) {
    return scr > 70 ? "pass" : "fail";
}
console.log(result(80));
console.log(result(50));
```

35. What is the output and why?
```javascript
function greet() {
    console.log("Hi........");
}
let output = greet();
console.log(output);
```

36. What is the output and why?
```javascript
function greetByName(name) {
    console.log("Hi.." + name);
}
let result = greetByName("Rahul");
console.log(result);
```

37. What is the output and why?
```javascript
function sumOfTwoNumbers(a, b) {
    return a + b;
}
let result = sumOfTwoNumbers(4, 3);
console.log(result);
```

38. What is the output and why?
```javascript
function name1() {
    console.log("Hi I am Rahul Gupta!");
}
name1();
```

39. What is the output and why?
```javascript
(() => {
    console.log("Setup Complete");
})();
```

40. Why do we not need to call an IIFE?

41. What is the difference between `console.log(sayHello())` and `sayHello()` when the function only logs and has no return?

42. Can an arrow function be used before it is declared? Why or why not?

---

## Programming Questions

43. Write a program to create a function that returns "pass" if a score is greater than 70, otherwise "fail".

44. Write a function that takes a name and greets the person using a template literal.

45. Write a function that takes two numbers and returns their sum.

46. Write a function with no parameters and no return type that prints "Hello".

47. Write a function with a parameter but no return type that prints a greeting.

48. Write a function with no parameters but a return type that returns a fixed string.

49. Write a function with parameters and a return type that calculates a student's grade.

50. Write the same greeting function 3 ways: normal function, function expression, and arrow function.

51. Write an arrow function that doubles a number.

52. Write an arrow function that takes a status code and prints "Request is fine!" if it is between 200 and 300.

53. Write an IIFE that prints "Anonymous Function".

54. Write an arrow IIFE that prints "Setup Complete".

55. Write a function that converts a score to "pass"/"fail" using a ternary operator.

---

## Hard Questions

56. What is the difference between a function declaration and a function expression in terms of hoisting?

57. What is the difference between an arrow function and a normal function?

58. When would you use an arrow function over a normal function?

59. What is the `this` keyword? How does it behave differently in arrow functions vs normal functions?

60. What is the difference between `return` and `console.log()` in a function?

61. Why can't you use `break` inside a function that is not a loop?

62. What is a pure function? Give an example.

63. What is the default return value of a function?

64. How do you write a function that accepts an array and returns its length?

65. How do you use a function as a callback?

66. What is the purpose of `arguments` object in a normal function? Is it available in arrow functions?

67. What happens if you call a function with fewer arguments than parameters?

68. What happens if you call a function with more arguments than parameters?

69. How would you create a function that validates an HTTP status code?

70. What is the difference between `const` and `function` declarations in terms of reassignment?

---

## Tricky Output Based Questions

71. What is the output?
```javascript
function test() {
    console.log("Hello!");
}
test();
console.log(test());
```

72. What is the output?
```javascript
function greetByName(name) {
    return `Hello! ${name}`;
}
let result = greetByName("Saanvi");
console.log(result);
```

73. What is the output?
```javascript
const doubleMe = (a) => a * 2;
console.log(doubleMe(10));
```

74. What is the output?
```javascript
const doubleB = () => b * 2;
console.log(doubleB());
```

75. What is the output?
```javascript
function sum(a, b) {
    return a + b;
}
console.log(sum(4));
```

76. What is the output?
```javascript
function sum(a, b) {
    return a + b;
}
console.log(sum(4, 3, 5));
```

77. What is the output?
```javascript
function greet1(name) {
    return `Hello! ${name}`;
}
const greet2 = (name) => `Hello ${name}!`;
console.log(greet1("Rahul"));
console.log(greet2("Lucky"));
```

78. What is the output?
```javascript
console.log((() => "Hi")());
```

79. What is the output?
```javascript
function sayHello() {
    console.log("Hi");
    return "Hello";
}
console.log(sayHello());
let result = sayHello();
console.log(result);
```

80. What is the output?
```javascript
const getResult = (score) => score > 70 ? "pass" : "fail";
console.log(getResult(100));
console.log(getResult(70));
```

---

## Automation Testing — Scenario Based Questions

81. You need to validate that an API status code is between 200 and 300. Write a function to do this.

82. You need to return "pass" or "fail" based on a test score. Write an arrow function for this.

83. You have a list of test data. Write a function that takes a score and returns a grade using a ternary operator.

84. You need to initialize test setup once at the start of a test suite. Why might you use an IIFE?

85. Write a function that greets different test users by name using template literals.

86. You need to double each number in a test data array. Write an arrow function that does this.

87. How would you pass a function as an argument to another function (callback)? Give a testing example.

88. You need to write a helper that checks if a status code indicates success (200-300). Which function type would you choose and why?

89. Write a function that converts test results into "pass"/"fail" and test it with a score of 98.

90. How would you structure a reusable function for login validation in your test framework?

---

## Bonus Interview Tips

- **Functions are the building blocks**: They let you reuse code instead of repeating it.
- **4 types to remember**: No param/no return, param/no return, no param/return, param/return.
- **No `return` means `undefined`**: If a function doesn't return anything, it returns `undefined`.
- **`console.log` vs `return`**: `console.log` prints to the console, `return` gives a value back to the caller.
- **Function expression**: `const greet2 = function(name) {...}` — a function stored in a variable.
- **Arrow functions**: `(name) => \`Hello ${name}\`` — shorter syntax, no `function` keyword, no `return` needed for single expression.
- **Arrow with no params**: `() => "Staging"` — empty parentheses.
- **Multiline arrow**: Wrap in `{}` and use explicit `return`.
- **IIFE**: `(function(){...})()` — runs immediately, doesn't need a call.
- **Arrow IIFE**: `(() => {...})()` — the "crazy arrow."
- **Template literals**: Backticks with `${}` interpolation — cleaner than string concatenation.
- **API validation**: Arrow functions are great for short checks like `(status) => status >= 200 && status <= 300`.
