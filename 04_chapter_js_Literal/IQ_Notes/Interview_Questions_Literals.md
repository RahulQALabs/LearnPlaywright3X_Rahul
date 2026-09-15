# JavaScript Literals – Interview Questions

## Easy Questions

1. What is a literal in JavaScript?

2. Name five types of literals.

3. What is a string literal? Give an example.

4. What is a number literal? Give an example.

5. What is a boolean literal?

6. What is the difference between `null` and `undefined`?

7. What is a template literal? What symbol is used for it?

8. What is the `typeof` result for `null`?

9. What is the `typeof` result for an array `[]`?

10. Is `"5"` a string literal or number literal?

11. What is a BigInt literal? How do you write one?

12. What is an object literal? Give an example.

13. What is an array literal? Give an example.

14. What is a regular expression literal?

15. Is `true` a literal?

16. What is the difference between a variable and a literal?

17. What is the type of `NaN`?

18. Can you write a number with a decimal in JavaScript?

19. What is the result of `typeof 10.5`?

20. What is the result of `typeof Infinity`?

21. What is the difference between single quotes, double quotes, and backticks for strings?

22. What is an empty string literal? Is it truthy or falsy?

23. Is `.5` a valid number literal in JavaScript?

24. Is `5.` a valid number literal in JavaScript?

25. What is the result of `typeof 25`?

---

## Medium Questions

26. What are the different ways to write number literals? (binary, octal, hex, decimal)

27. What is the `0b` prefix used for in number literals?

28. What is the `0o` prefix used for in number literals?

29. What is the `0x` prefix used for in number literals?

30. What are numeric separators in JavaScript? Give an example.

31. Write `1_000_000` — what value does it represent?

32. What is the output of `typeof 12345678901234567890n`?

33. Can you mix BigInt and regular numbers in operations?

34. How do you create a BigInt from a string?

35. What is exponential notation? Write `1500` using exponential notation.

36. What is the output of `typeof NaN`?

37. Why is `NaN === NaN` `false`?

38. How do you properly check if a value is `NaN`?

39. What is the output of `0 / 0`?

40. What operations produce `NaN`?

41. What is the output of `"Rahul" * 2`?

42. What is `Infinity` in JavaScript?

43. What is the output of `1 / 0`?

44. What is the output of `-1 / 0`?

45. What is the difference between `.5` and `0.5` as literals?

46. What is the output of `typeof function(){}`?

47. Can you use Unicode characters in string literals?

48. What is the difference between a primitive literal and a wrapper object?

49. What is a template literal? Give an example with variable interpolation.

50. What is the difference between `null` and `undefined` in terms of `typeof`?

51. What is the output of `typeof 0b1010`?

52. What is the output of `typeof 0xFF`?

53. What is the output of `typeof undefined`?

54. What is a Symbol literal in JavaScript?

55. How do you create a Symbol literal?

---

## Logical / Reasoning Questions

56. What is the output and why?

```javascript
console.log(typeof null);
```

57. What is the output and why?

```javascript
console.log(NaN === NaN);
```

58. What is the output and why?

```javascript
console.log(typeof NaN);
```

59. What is the output and why?

```javascript
console.log(!!"");
console.log(!!"Hello");
```

60. What is the output and why?

```javascript
console.log(1 / 0);
console.log(-1 / 0);
```

61. What is the output and why?

```javascript
console.log(0 / 0);
```

62. What is the output and why?

```javascript
console.log(10 + "10");
console.log(+"10" + 10);
```

63. What is the output and why?

```javascript
console.log(typeof typeof 10);
```

64. What is the output and why?

```javascript
let x;
console.log(x);
console.log(typeof x);
```

65. What is the output and why?

```javascript
console.log([] + []);
console.log({} + []);
```

66. What is the output and why?

```javascript
console.log(0.1 + 0.2 === 0.3);
```

67. What is the output and why?

```javascript
console.log([1] == [1]);
```

68. What is the output and why?

```javascript
console.log(!!"false");
console.log(!!false);
```

69. What is the output and why?

```javascript
console.log(0b10101 + 0o53);
```

70. What is the output and why?

```javascript
console.log(Number.isNaN("abc"));
console.log(isNaN("abc"));
```

---

## Programming Questions

71. Write a program that declares all types of literals (string, number, boolean, null, undefined, object, array, BigInt).

72. Write a program to demonstrate binary, octal, and hexadecimal number literals.

73. Write a program that uses numeric separators to make large numbers readable.

74. Write a program to create a person object using an object literal with name, age, and isStudent properties.

75. Write a program that checks if a value is `NaN` using `Number.isNaN()`.

76. Write a program that uses a BigInt literal for a number larger than `Number.MAX_SAFE_INTEGER`.

77. Write a program to generate `Infinity` by dividing by zero.

78. Write a program that uses a template literal to display a user's name and age.

79. Write a program that shows the difference between `null` and `undefined` using `typeof`.

80. Write a program that creates an array literal with 5 elements and logs each one.

81. Write a program to check if a variable is `null` or `undefined` using loose equality.

82. Write a program that uses a regular expression literal to test if a string contains digits.

83. Write a program that demonstrates the difference between `null == undefined` and `null === undefined`.

84. Write a program that uses exponential notation for very large and very small numbers.

85. Write a program that converts a number to different bases (binary, octal, hex) and logs them.

---

## Hard Questions

86. Explain why `NaN !== NaN` is `true` in JavaScript.

87. Why does `typeof null` return `"object"` — what is the historical reason?

88. What is the maximum safe integer in JavaScript before you need BigInt?

89. Explain how IEEE 754 affects floating point literals like `0.1 + 0.2`.

90. Why is `typeof []` returning `"object"`? How do you properly check for arrays?

91. Can an object literal have functions as property values? Give an example.

92. What is the difference between `Object literal` and `new Object()`?

93. What is a tagged template literal?

94. How do numeric separators work with binary, octal, and hex literals?

95. What happens when you add `n` to a very large integer?

96. Why does `typeof null` show `"object"` but `null instanceof Object` is `false`?

97. Explain how `"use strict"` changes the behavior of `undefined` as a literal.

98. Is `NaN` a literal in JavaScript? Why or why not?

99. Explain the difference between `String(10)` (constructor) and `"10"` (literal).

100. What is the difference between `new Array(1, 2, 3)` and `[1, 2, 3]`?

---

## Tricky Output Based Questions

101. What is the output?

```javascript
console.log(typeof BigInt(10));
console.log(typeof 10n);
```

102. What is the output?

```javascript
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.30000000000000004);
```

103. What is the output?

```javascript
let a = 1_000_000;
let b = 1000000;
console.log(a === b);
```

104. What is the output?

```javascript
console.log(typeof Infinity);
console.log(typeof -Infinity);
```

105. What is the output?

```javascript
console.log(null == undefined);
console.log(null === undefined);
```

106. What is the output?

```javascript
console.log(Number("xyz"));
console.log(parseInt("abc"));
console.log("Rahul" * 2);
```

107. What is the output?

```javascript
console.log(typeof typeof typeof 10);
```

108. What is the output?

```javascript
console.log(!!"false" === !!"true");
```

109. What is the output?

```javascript
let str = `Hello ${2 + 3 * 2}`;
console.log(str);
```

110. What is the output?

```javascript
console.log(0xFF + 0b11);
console.log(0xFF === 255);
console.log(0b11 === 3);
```

---

## Expert Level Questions

111. How does V8 handle literal optimization internally? (e.g., string interning, number boxing)

112. What is the difference between a literal and a constant variable?

113. Explain how JavaScript's parser distinguishes between an object literal `{}` and a block statement `{}`.

114. What is the literal representation of `-0` in JavaScript? How does it differ from `0`?

115. How does `Object.is()` handle `0` and `-0` differently from `===`?

116. What is the difference between `null` literal and the global `null` property?

117. Can you use template literals to create tagged templates? How does the tag function receive arguments?

118. Explain how BigInt interacts with JSON serialization.

119. What is the difference between `5` (number literal) and `new Number(5)` (Number object)?

120. How do you create a BigInt literal that is too large for the native number type?

---

## Automation Testing — Scenario Based Questions

121. You are writing an API test. How would you use template literals to construct a dynamic API endpoint URL?

122. Your test data contains phone numbers. Should you store them as number literals or string literals? Why?

123. How would you use numeric separators to make test assertion values more readable?

124. You need to parse a response body. How does knowing that `typeof null` is `"object"` affect your test assertions?

125. Your test framework needs to handle very large transaction IDs. What type of literal should you use?

126. How would you use `Infinity` in a timeout or limit test scenario?

127. Your test expects `NaN` for invalid calculations. How do you correctly assert against `NaN`?

128. Write a test assertion that checks if a value is `null` vs `undefined` using `===`.

129. How would you use an object literal to define test data for multiple test cases?

130. Your test logs variable values. How would you use template literals for clear, informative log messages?

---

## Bonus Interview Tips

- Know the 6 falsy values: `false`, `0`, `""`, `null`, `undefined`, `NaN`.
- `typeof null` returns `"object"` — this is a JavaScript bug, not intentional.
- `NaN` is the only value not equal to itself — use `Number.isNaN()` to check.
- BigInt literals end with `n` — cannot mix with regular numbers.
- Use numeric separators (`_`) for large numbers — improves readability.
- Object literals `{}` are preferred over `new Object()`.
- Template literals (backticks) support multi-line strings and `${}` interpolation.
- IEEE 754 floating point means `0.1 + 0.2 !== 0.3` — be aware in comparisons.
- Arrays are objects in JavaScript — `typeof []` returns `"object"`.
- `0b` (binary), `0o` (octal), `0x` (hex) — know all three prefixes.
