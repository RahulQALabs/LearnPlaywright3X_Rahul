# JavaScript Loops – Interview Questions

## Easy Questions

1. What is a loop in JavaScript? Why do we need loops?

2. What are the different types of loops available in JavaScript?

3. What is a `for` loop? Write its syntax.

4. What are the three parts of a `for` loop? Explain each.

5. Are all three parts of a `for` loop mandatory?

6. What is a `while` loop? Write its syntax.

7. What is a `do...while` loop? Write its syntax.

8. What is the difference between `while` and `do...while`?

9. How many times does a `do...while` loop execute at minimum?

10. How many times does a `while` loop execute at minimum?

11. What is the difference between `i++` and `++i` inside a `for` loop?

12. What is an infinite loop? How do you create one?

13. What keyword is used to exit a loop immediately?

14. Can you use `break` inside a `while` loop?

15. What is a nested loop?

---

## Medium Questions

16. Explain the execution order of a `for` loop step by step.

17. What is the output of this code?
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

18. What is the output of this code?
```javascript
let j = 10;
while (j < 10) {
    console.log(j);
    j++;
}
```

19. What is the output of this code?
```javascript
let k = 10;
do {
    console.log("Value: " + k);
    k++;
} while (k < 10);
```

20. What happens if you forget the increment statement in a `while` loop?

21. What is the output of this code?
```javascript
for (let i = 0; i < 10; ++i) {
    console.log(i);
}
```

22. Can you declare the initialization variable outside a `for` loop? What are the risks?

23. What is the output of this code?
```javascript
let i = 7;
while (true) {
    if (i > 10) break;
    console.log(i);
    i++;
}
```

24. How many times does `console.log` run in this nested loop?
```javascript
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
        console.log(i, j);
    }
}
```

25. What is the output of this nested loop?
```javascript
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(i, j);
    }
}
```

26. Write a `for` loop that prints numbers from 1 to 10.

27. Write a `for` loop that prints numbers from 10 down to 1.

28. Write a `while` loop that prints even numbers from 0 to 10.

29. Write a `do...while` loop that prints "Hello" 3 times.

30. Write a `for` loop that sums numbers from 1 to 100.

---

## Logical / Reasoning Questions

31. What is the output and why?
```javascript
let i = 0;
for (; i < 5; i++) {
    console.log(i);
}
console.log(i);
```

32. What is the output and why?
```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
```

33. What is the output and why?
```javascript
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
```

34. Why do the above two code snippets produce different outputs?

35. What is the output and why?
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);
}
```

36. What is the output and why?
```javascript
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i);
}
```

37. What is the output and why?
```javascript
let x = 1;
while (x < 5) {
    console.log(x);
    x += 2;
}
```

38. What is the output and why?
```javascript
let count = 0;
do {
    console.log(count);
    count++;
} while (count < 0);
```

39. What is the output and why?
```javascript
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) break;
        console.log(i, j);
    }
}
```

40. What is the output and why?
```javascript
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}
console.log("After loop: " + i);
```

---

## Programming Questions

41. Write a program to print numbers from 1 to 10 using a `for` loop.

42. Write a program to print numbers from 1 to 10 using a `while` loop.

43. Write a program to print numbers from 1 to 10 using a `do...while` loop.

44. Write a program to print all even numbers between 1 and 20.

45. Write a program to print all odd numbers between 1 and 20.

46. Write a program to calculate the sum of numbers from 1 to N (user input).

47. Write a program to print the multiplication table of 5 (5×1 to 5×10).

48. Write a program to print a pattern using nested loops:
```
*
* *
* * *
* * * *
```

49. Write a program to reverse a number using a `while` loop (e.g., 123 → 321).

50. Write a program to count the number of digits in a number using a `while` loop.

51. Write a program to find the factorial of a number using a `for` loop.

52. Write a program to print the Fibonacci series up to N terms.

53. Write a program to check if a number is prime using a loop.

54. Write a program to print all elements of an array using a `for` loop.

55. Write a program to print all elements of an array using a `while` loop.

56. Write a program to find the largest element in an array using a loop.

57. Write a program using `while (true)` and `break` to exit when a condition is met.

58. Write a program using nested loops to generate a multiplication table (1 to 10).

59. Write a program that retries an operation 3 times using a `do...while` loop.

60. Write a program to print numbers from 10 down to 1 in reverse order.

---

## Hard Questions

61. Explain the difference between `for` and `while` loops. When would you use each?

62. What is the performance difference between `for`, `while`, and `do...while`?

63. How does `break` work inside nested loops? Does it exit all loops or just the inner one?

64. How would you break out of an outer loop from inside a nested loop?

65. What happens if you use `continue` inside a nested loop?

66. Can you use `for...of` on a plain object? Why or why not?

67. What is the difference between `for...in` and `for...of`?

68. How does V8 optimize `for` loops internally?

69. What is the "loop-invariant code motion" optimization?

70. When would you choose a `do...while` over a `while` loop in real-world code?

71. Explain how `var` vs `let` scoping affects loops with asynchronous callbacks.

72. What happens if a loop condition never becomes false?

73. How would you implement a "retry with backoff" logic using a loop?

74. Can you modify an array while iterating over it? What are the risks?

75. What is the difference between a `for` loop and the `forEach()` method?

76. How would you iterate over the properties of an object?

77. How do you handle `async/await` inside a `for` loop vs `forEach`?

78. What is the "off-by-one" error? Give an example.

79. How would you implement a loop that runs exactly N times using `while`?

80. Explain the concept of "loop unrolling" as a compiler optimization.

---

## Tricky Output Based Questions

81. What is the output?
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);
```

82. What is the output?
```javascript
let i = 0;
for (; ;) {
    if (i > 3) break;
    console.log(i);
    i++;
}
```

83. What is the output?
```javascript
let i = 0;
while (i++ < 5) {
    console.log(i);
}
```

84. What is the output?
```javascript
let i = 0;
while (++i < 5) {
    console.log(i);
}
```

85. What is the output?
```javascript
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (j === 1) continue;
        console.log(i, j);
    }
}
```

86. What is the output?
```javascript
for (let i = 0; i < 5; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
}
```

87. What is the output?
```javascript
let i = 10;
while (i--) {
    console.log(i);
}
```

88. What is the output?
```javascript
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log(sum);
```

89. What is the output?
```javascript
let x = 5;
do {
    console.log(x);
    x--;
} while (x > 0);
```

90. What is the output?
```javascript
for (let i = 1; i <= 3; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "* ";
    }
    console.log(line.trim());
}
```

---

## Automation Testing — Scenario Based Questions

91. You need to retry a test step 3 times before marking it as failed. Which loop would you use and why?

92. Write a loop to iterate over an array of test data and execute a test function for each element.

93. Your test needs to wait for an element to appear on the page, checking every 500ms up to 10 seconds. Which loop pattern would you use?

94. You have a list of test environments. Write a loop that prints each environment URL.

95. How would you use a loop to generate test data (e.g., 100 user objects)?

96. Write a loop that compares actual vs expected values from two arrays in a test assertion.

97. You need to run the same test case with different login credentials from an array. Which loop is most appropriate?

98. How would you use a `do...while` loop for a polling mechanism in test automation?

99. Write a nested loop to test all combinations of browser × viewport size.

100. You need to retry an API call with exponential backoff. Design a loop-based retry mechanism.

---

## Bonus Interview Tips

- **`for` loop order**: Initialization (once) → Condition (before each) → Body → Increment (after each). Memorize this.
- **`while` vs `do...while`**: `while` checks condition first (0+ runs), `do...while` checks after (1+ runs). This is a common interview question.
- **`let` vs `var` in loops**: `let` is block-scoped (per-iteration binding), `var` is function-scoped (shared). Critical for closures in loops.
- **`break` vs `continue`**: `break` exits the loop entirely, `continue` skips to the next iteration.
- **`while (true)` + `break`**: A valid pattern for mid-loop exits — be sure there's a guaranteed exit condition.
- **Nested loops**: Total iterations = outer × inner. This is O(n²) and can be slow for large datasets.
- **Pre/post increment**: In a `for` loop header, `i++` and `++i` behave the same. The difference matters in other contexts.
- **Infinite loops block JS**: Since JavaScript is single-threaded, an infinite loop freezes the browser/Node process.
- **Forgetting to increment**: A common bug in `while` loops — the counter variable must be updated inside the body.
- **Off-by-one errors**: `i < 10` runs 10 times (0-9), `i <= 10` runs 11 times (0-10). Double-check your bounds.
