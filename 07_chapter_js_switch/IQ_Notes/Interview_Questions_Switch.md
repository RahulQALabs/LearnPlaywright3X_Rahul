# JavaScript Switch Statement – Interview Questions

## Easy Questions

1. What is a `switch` statement in JavaScript?

2. What is the syntax of a `switch` statement?

3. What keyword is used to stop execution in a switch case?

4. What is the `default` case in a switch statement?

5. Is the `default` case mandatory?

6. What happens if no `case` matches in a switch?

7. What type of comparison does `switch` use?

8. Can a `switch` statement compare strings?

9. Can a `switch` statement have multiple cases with the same value?

10. What is the output of this code?
```javascript
let x = 2;
switch (x) {
    case 1: console.log("One"); break;
    case 2: console.log("Two"); break;
    case 3: console.log("Three"); break;
    default: console.log("Other");
}
```

---

## Medium Questions

11. What happens if you forget the `break` statement in a switch case?

12. What is "fall-through" in a switch statement?

13. How can you group multiple cases together in switch?

14. What is the output of this code?
```javascript
let data = 3;
switch (data) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Wrong!");
}
```

15. What is the output of this code?
```javascript
let data = 3;
switch (data) {
    case 1: console.log("Monday");
    case 2: console.log("Tuesday");
    case 3: console.log("Wednesday");
    case 4: console.log("Thursday");
    case 5: console.log("Friday");
    case 6: console.log("Saturday");
    case 7: console.log("Sunday");
    default: console.log("Wrong!");
}
```

16. What is the output of this code?
```javascript
let browser = "Safari";
switch (browser) {
    case "Chrome":
    case "Edge":
    case "Opera": console.log("Chromium"); break;
    case "Firefox": console.log("Mozilla"); break;
    case "Safari": console.log("Safari"); break;
    default: console.log("Unknown");
}
```

17. What is the output of this code?
```javascript
let fruit = "banana";
switch (fruit) {
    case "apple": console.log("apple");
    case "banana": console.log("banana");
    case "guava": console.log("guava");
    default: console.log("No Fruits");
}
```

18. Can we use expressions inside switch cases?

19. Can we use logical operators inside switch cases?

20. What is the difference between `switch` and `if-else-if` ladder?

---

## Logical / Reasoning Questions

21. What is the output of this code?
```javascript
let a = 0;
switch (a) {
    case false: console.log("false"); break;
    case 0: console.log("zero"); break;
    default: console.log("other");
}
```

22. Why does the above code output "zero" instead of "false"?

23. What is the output of this code?
```javascript
let x = 10;
switch (x) {
    case 10: console.log(1); break;
    case 10: console.log(2); break;
    default: console.log("d");
}
```

24. What is the output of this code?
```javascript
let score = 58;
switch (true) {
    case (score >= 90): console.log("A"); break;
    case (score >= 70): console.log("B"); break;
    case (score >= 50): console.log("C"); break;
    default: console.log("D");
}
```

25. How does `switch(true)` work? Why is it used?

26. What is the output of this code?
```javascript
let val = "5";
switch (val) {
    case 5: console.log("number"); break;
    case "5": console.log("string"); break;
    default: console.log("other");
}
```

27. Why does the above code output "string" instead of "number"?

28. What is the output of this code?
```javascript
let code = 404;
switch (code) {
    case 200: console.log("OK"); break;
    case 404: console.log("Not Found"); break;
    case 500: console.log("Server Error"); break;
    default: console.log("Unknown");
}
```

29. Can `default` case be placed at the beginning or middle of a switch?

30. What happens if `default` is placed in the middle without a `break`?

---

## Programming Questions

31. Write a switch statement to print the day name based on a number (1-7).

32. Write a switch statement to categorize a browser as Chromium-based, Mozilla-based, or WebKit-based.

33. Write a switch statement to return HTTP status code descriptions (200, 201, 301, 404, 500).

34. Write a switch statement to map a grade letter (A, B, C, D, F) to a description.

35. Write a switch statement to determine the number of days in a month (1-12).

36. Write a program using `switch(true)` to categorize a score into grades.

37. Write a switch statement to handle different environment names (dev, staging, prod).

38. Write a switch statement to map traffic light colors (red, yellow, green) to actions.

39. Write a switch statement to convert a number (1-4) to a season name.

40. Write a program using fall-through to print weekdays vs weekends.

41. Write a switch statement to determine the type of a triangle based on side count.

42. Write a switch statement to map a numeric month to its name.

43. Write a program that uses switch with multiple statements inside a case.

44. Write a switch statement to handle different user roles (admin, editor, viewer, guest).

45. Write a switch statement to map payment methods (credit card, debit card, UPI, net banking) to processing messages.

46. Write a program to demonstrate fall-through grouping for HTTP status categories (2xx, 3xx, 4xx, 5xx).

47. Write a switch statement to convert a numeric rating (1-5) to a text review.

48. Write a switch statement to select a test environment URL based on environment name.

49. Write a program using `switch(true)` to determine if a number is positive, negative, or zero.

50. Write a switch statement to map a country code to a language.

---

## Hard Questions

51. Why does switch use strict comparison (`===`) instead of loose (`==`)?

52. What is the performance difference between `switch` and `if-else-if` ladder?

53. Can you use `switch` with boolean conditions? How?

54. What happens if a case has `let` or `const` declarations without block scoping `{}`?

55. How would you refactor a long `if-else-if` ladder into a switch statement?

56. What are the limitations of the switch statement?

57. Can you nest switch statements inside each other? Is it recommended?

58. What is the output of this code and why?
```javascript
let x = 1;
switch (x) {
    case 1: {
        let msg = "One";
        console.log(msg);
        break;
    }
    case 2: {
        let msg = "Two";
        console.log(msg);
        break;
    }
}
```

59. What is the output of this code and why?
```javascript
let x = 0;
switch (x) {
    case 0: console.log("Zero");
    default: console.log("Default");
}
```

60. Why does the above code print both "Zero" and "Default"?

61. How does the JavaScript engine optimize switch statements internally (jump tables)?

62. When would you prefer `switch` over `if-else-if` ladder in a real project?

63. Can you use `return` inside a switch case? How is it different from `break`?

64. What is the output of this code and why?
```javascript
function test(val) {
    switch (val) {
        case 1: return "One";
        case 2: return "Two";
        default: return "Other";
    }
}
console.log(test(2));
```

65. How would you implement a switch-like behavior using an object map?

66. Compare and contrast: switch vs object map vs if-else-if ladder.

67. What is the output of this code and why?
```javascript
let a = 1, b = 2;
switch (a) {
    case b: console.log("Match"); break;
    default: console.log("No match");
}
```

68. Can variables be used as case labels? What are the rules?

69. What happens if you use a floating-point number in a switch case?

70. How would you handle a switch with 50+ cases efficiently?

---

## Expert Level Questions

71. How does V8 optimize switch statements with sparse vs dense case values?

72. What is the concept of a "jump table" and when does JavaScript create one for switch?

73. Explain the difference between a switch statement and a lookup table (object map) in terms of performance.

74. What is the output of this code and why?
```javascript
switch (1) {
    default: console.log("default");
    case 1: console.log("one");
    case 2: console.log("two");
}
```

75. Why does the above code output "one" and "two" but not "default"?

76. Can a switch case use `null` or `undefined` as a value?

77. What is the output of this code and why?
```javascript
switch (null) {
    case null: console.log("null"); break;
    case undefined: console.log("undefined"); break;
    default: console.log("other");
}
```

78. How does the `break` keyword interact with labeled statements in a switch?

79. Can you use `continue` inside a switch? If yes, where?

80. What is the output of this code and why?
```javascript
let arr = [1, 2, 3];
switch (arr.length) {
    case 1: console.log("One"); break;
    case 2: console.log("Two"); break;
    case 3: console.log("Three"); break;
    default: console.log("Many");
}
```

81. Explain how the `ToNumber` or `ToPrimitive` abstract operation interacts with switch.

82. What happens when a switch expression evaluates to an object?

83. What is the output of this code and why?
```javascript
switch (NaN) {
    case NaN: console.log("NaN"); break;
    default: console.log("not NaN");
}
```

84. How would you implement range-based conditions without `switch(true)`?

85. What are the edge cases of using `switch` with `undefined` or undeclared variables?

86. Compare switch-case with pattern matching in other languages (Rust, Python 3.10+ match).

87. How does the comma operator interact with switch cases?

88. What is the output of this code and why?
```javascript
switch (1) {
    case 1: console.log("one"); // no break
    case 1: console.log("one again"); break;
    default: console.log("default");
}
```

89. Can a `switch` case have a function call as its expression? Is it evaluated once or each time?

90. Explain the concept of "Duff's Device" — what does it do and why is it relevant to switch?

---

## Automation Testing — Scenario Based Questions

91. You are writing a cross-browser test. How would you use a switch statement to select browser-specific code paths?

92. Your test needs to handle different API response codes. Write a switch statement to handle 200, 201, 400, 401, 403, 404, and 500.

93. You need to run the same test in different environments. Use a switch statement to select the base URL based on environment.

94. Your test data varies by region. Use a switch statement to select test data sets for different regions.

95. You need to map test priority levels (P0, P1, P2, P3) to execution strategies. Write a switch for this.

96. Write a switch statement to handle different element locator strategies (id, class, xpath, css, text).

97. Your test framework supports multiple report formats. Use switch to generate the appropriate report format.

98. Write a switch statement to map test status codes (PASS, FAIL, SKIP, ERROR) to console colors or icons.

99. You need to handle different file formats for test data import (JSON, CSV, XML, Excel). Use switch to route to the correct parser.

100. Write a switch statement to select the correct page object model class based on the application page name.

---

## Tricky Output Based Questions

101. What is the output?
```javascript
switch (0) {
    case -0: console.log("negative zero"); break;
    case 0: console.log("zero"); break;
}
```

102. What is the output?
```javascript
switch ("1") {
    case 1: console.log("number"); break;
    case "1": console.log("string"); break;
}
```

103. What is the output?
```javascript
let x = 5;
switch (x) {
    case x > 3: console.log("greater"); break;
    case x > 1: console.log("smaller"); break;
    default: console.log("default");
}
```

104. What is the output?
```javascript
let i = 0;
switch (i++) {
    case 0: console.log("zero"); break;
    case 1: console.log("one"); break;
}
console.log("i =", i);
```

105. What is the output?
```javascript
let i = 0;
switch (++i) {
    case 0: console.log("zero"); break;
    case 1: console.log("one"); break;
}
console.log("i =", i);
```

106. What is the output?
```javascript
let value = 1;
switch (value) {
    case 1:
        console.log("A");
    case 2:
        console.log("B");
        break;
    case 3:
        console.log("C");
        break;
    default:
        console.log("D");
}
```

107. What is the output?
```javascript
switch (typeof 42) {
    case "number": console.log("number"); break;
    case "string": console.log("string"); break;
    default: console.log("other");
}
```

108. What is the output?
```javascript
let x = "10";
switch (x) {
    case 10: console.log("ten"); break;
    default: console.log("not ten");
}
```

109. What is the output?
```javascript
let x = 10;
switch (x) {
    case 10: console.log("ten");
    default: console.log("default");
    case 20: console.log("twenty");
}
```

110. What is the output?
```javascript
function getDay(n) {
    switch (n) {
        case 1: return "Mon";
        case 2: return "Tue";
        case 3: return "Wed";
    }
}
console.log(getDay(2));
console.log(getDay(5));
```

---

## Bonus Interview Tips

- Switch uses **strict comparison (`===`)** — always match both value and type.
- **Fall-through** is both a feature and a danger — use `break` unless you intentionally want fall-through.
- **Grouping cases** without `break` is a clean way to share logic across multiple values.
- `switch(true)` pattern allows **range-based conditions** — useful but unconventional.
- **Object map** (lookup object) is often a cleaner alternative to long switch statements.
- **Duplicate case values** — first match wins, second is dead code.
- `default` can be placed anywhere but is conventionally at the end.
- In **interviews**, prefer `if-else-if` for ranges and `switch` for specific values.
- **Guard with `{}`** when declaring `let`/`const` inside a case to avoid redeclaration errors.
- Switch is **not suitable** for complex boolean logic — stick to `if-else` for that.
- Common interview trick: switch with `0` vs `false`, or `"5"` vs `5` to test strict comparison knowledge.
- **Fall-through without break** is a commonly tested concept — practice predicting output.
- Switch can be **nested**, but readability suffers — avoid in practice.
- `return` inside a switch case exits both the case and the function — no `break` needed.
- For **automation testing**: browser selection, status code handling, environment configs are perfect switch use cases.
