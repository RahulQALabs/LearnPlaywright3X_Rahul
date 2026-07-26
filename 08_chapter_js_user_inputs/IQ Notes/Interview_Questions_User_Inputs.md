# JavaScript User Inputs – Interview Questions

## Easy Questions

1. What is the `prompt()` function used for?

2. What does `prompt()` return when the user clicks OK?

3. What does `prompt()` return when the user clicks Cancel?

4. What is the data type of the value returned by `prompt()`?

5. Does `prompt()` work in Node.js? Why or why not?

6. What is `readline` in Node.js?

7. How do you create a readline interface?

8. What method is used to ask a question with `readline`?

9. Why do you need to call `rl.close()` in `readline`?

10. What is `prompt-sync`?

11. How do you install `prompt-sync`?

12. How do you import and initialize `prompt-sync`?

---

## Medium Questions

13. Why does `prompt()` return a string even when the user types a number?

14. How do you convert a user input string to a number?

15. What happens if you add two `prompt()` values without converting them to numbers?

16. What is the output of this code?
```javascript
let a = prompt("Enter a: "); // user types 5
let b = prompt("Enter b: "); // user types 3
console.log(a + b);
```

17. Write code to take two numbers from the user and print their sum.

18. What is the difference between `readline` and `prompt-sync`?

19. Why is `prompt-sync` more convenient than `readline` for simple scripts?

20. How do you handle multiple user inputs with `readline`?

21. What is "callback hell" in the context of `readline`?

22. How would you take three names from a user using `prompt-sync`?

23. Write a program using `prompt-sync` that asks for a name and age, then prints a greeting.

24. What happens if the user presses Enter without typing anything in `prompt()`?

---

## Logical / Reasoning Questions

25. What is the output of this code?
```javascript
const prompt = require("prompt-sync")();
let x = prompt("Enter something: "); // user presses Enter without typing
console.log(typeof x, x.length);
```

26. What is the output of this code?
```javascript
const prompt = require("prompt-sync")();
let age = prompt("Age: "); // user types 25
console.log(age + 5);
```

27. What is the output of this code?
```javascript
let input = prompt("Enter a number:"); // user types 0
if (input) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
```

28. What is the output of this code (browser)?
```javascript
let input = prompt("Enter:"); // user clicks Cancel
console.log(input);
console.log(input === null);
```

29. What is the output of this code?
```javascript
let a = Number(prompt("Num:")); // user types "10"
let b = Number(prompt("Num:")); // user types "20"
console.log(a + b);
```

30. What is the output of this code?
```javascript
let input = prompt("Enter a number:"); // user types "abc"
let num = Number(input);
console.log(num);
```

31. What is the output of this code?
```javascript
const prompt = require("prompt-sync")();
let name = prompt("Name: ") || "Guest";
console.log("Hello, " + name);
// User presses Enter without typing
```

32. What is the output of this code?
```javascript
const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Num: ", (n) => {
    console.log(n * 2);
    rl.close();
});
// User types 5
```

33. Why does using `readline` for multiple questions result in nested code?

34. What is the difference between `prompt-sync` and `readline-sync`?

---

## Programming Questions

35. Write a program using `prompt-sync` to ask the user for their name and print a personalized greeting.

36. Write a program to take two numbers as input and print their sum, difference, product, and quotient.

37. Write a program to take a number as input and check if it is even or odd.

38. Write a program to take three numbers and find the largest using user input.

39. Write a program to take a user's age as input and check if they are eligible to vote (age >= 18).

40. Write a program using `readline` to ask for a user's name and print "Hello, [name]!".

41. Write a program to take a number as input and print its multiplication table up to 10.

42. Write a program that keeps asking for a number until the user enters 0 (sentinel loop).

43. Write a simple calculator using `prompt-sync` that takes two numbers and an operator (+, -, *, /).

44. Write a program to take a string input and count how many vowels it contains.

45. Write a program to take 5 numbers from the user and calculate their average.

46. Write a program that takes a temperature in Celsius and converts it to Fahrenheit (user input).

47. Write a program to take a number and print whether it is positive, negative, or zero.

48. Write a program using `prompt-sync` to simulate a simple ATM: check balance, deposit, withdraw.

49. Write a program that asks for a password and keeps asking until the correct password is entered.

50. Write a program to take a number and check if it is a palindrome.

---

## Hard Questions

51. What happens if you try to use `prompt()` in Node.js without any package?

52. How does `require("prompt-sync")()` return a function? Explain the double parentheses.

53. Why is user input always a string? Explain in terms of stdin/stdout.

54. How would you handle invalid number input (e.g., user types "abc") gracefully?

55. Compare and contrast browser input (`prompt()`) vs Node.js input (`readline`).

56. Explain why this code produces unexpected output:
```javascript
let a = prompt("First: ");  // 5
let b = prompt("Second: "); // 3
console.log("Sum: " + a + b);
```

57. How would you refactor deeply nested `readline` callbacks to make them readable?

58. Explain the difference between synchronous and asynchronous input. Why does it matter?

59. How would you implement a menu-driven program using `prompt-sync`?

60. What is the difference between `Number()`, `parseInt()`, `parseFloat()`, and unary `+` for converting input?

61. How does `prompt-sync` work under the hood? (Hint: it uses `fs.readFileSync` on `/dev/stdin`)

62. Write a program that takes comma-separated values as input and prints each value on a new line.

63. How would you mask password input in Node.js CLI? Does `prompt-sync` support this?

64. Compare `prompt-sync` vs `inquirer` npm package. When would you use each?

65. Explain the execution flow: what happens when `prompt("Enter name:")` is called in a browser?

66. How would you validate that user input is a valid number before processing?

67. Why is `readline` considered "event-driven"? What event does it listen to?

68. How would you handle Ctrl+C (SIGINT) when using `readline`?

69. What is the difference between `process.stdin` and `readline`?

70. Explain how input/output redirection (`<`, `>`) works with Node.js input programs.

---

## Tricky Output Based Questions

71. What is the output?
```javascript
console.log(typeof prompt("Test:"));
```

72. What is the output?
```javascript
let x = Number(prompt("Num:")); // user types ""
console.log(x);
```

73. What is the output?
```javascript
let x = Number(prompt("Num:")); // user types "  10  "
console.log(x);
```

74. What is the output?
```javascript
let x = parseInt(prompt("Num:")); // user types "10.7"
let y = Number(prompt("Num:"));   // user types "10.7"
console.log(x, y);
```

75. What is the output?
```javascript
const prompt = require("prompt-sync")();
let a = prompt("A: "); // user types "true"
let b = prompt("B: "); // user types "false"
console.log(a && b);
```

76. What is the output?
```javascript
let input = prompt("Enter:"); // user types "  "
console.log(input.length);
console.log(Boolean(input));
```

77. What is the output?
```javascript
const prompt = require("prompt-sync")();
let a = Number(prompt("A: ")); // user types "5"
let b = Number(prompt("B: ")); // user types 0
console.log(a / b);
```

78. What is the output?
```javascript
let input = prompt("Enter:"); // user types "null"
console.log(input === null);
```

79. What is the output?
```javascript
const prompt = require("prompt-sync")();
let x = prompt("X: "); // user types 42
console.log(x == 42);
console.log(x === 42);
```

80. What is the output?
```javascript
let input = prompt("Number:"); // user types "010"
console.log(Number(input));
console.log(parseInt(input));
```

---

## Bonus Tips

- `prompt()` is synchronous — it blocks execution until the user responds.
- `readline` is asynchronous — execution continues and the callback runs later.
- Use `Number()` for clean numeric conversion; avoid relying on loose equality coercion.
- `prompt-sync` mimics browser `prompt()` syntax and is great for learning.
- Always validate and sanitize user input — never trust what users type.
- In real browser apps, use HTML `<input>` + event listeners instead of `prompt()`.
- The 3 ways to get input in Node.js: `readline` (built-in), `prompt-sync` (npm), `process.stdin` (low-level).
- `prompt()` is a Web API, part of the `window` object — hence missing in Node.js.
