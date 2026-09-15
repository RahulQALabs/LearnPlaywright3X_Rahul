# JavaScript Identifiers – Interview Questions

## Easy Questions

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

16. What is the maximum length of an identifier?

17. Is `π` a valid identifier in JavaScript?

18. Is `café` a valid identifier?

19. Can you use numbers in identifiers?

20. Can you use spaces in identifiers?

---

## Medium Questions

21. Identify which of these are valid identifiers: `firstName`, `first-name`, `first_name`, `1stName`, `$name`.

22. Why is `class` not a valid identifier?

23. Why is `first-name` not a valid identifier?

24. Why is `my name` not a valid identifier?

25. Why is `user@name` not a valid identifier?

26. Why is `rah&&123` not a valid identifier?

27. What are the different naming conventions in JavaScript?

28. What is camelCase? Give an example. Where is it used?

29. What is PascalCase? Give an example. Where is it used?

30. What is snake_case? Give an example. Where is it used?

31. What is SCREAMING_SNAKE_CASE? Give an example. Where is it used?

32. What is Hungarian Notation? Is it recommended in modern JavaScript?

33. Which naming convention is used for JavaScript variables and functions?

34. Which naming convention is used for JavaScript classes?

35. Which naming convention is used for constants?

36. Can you use Unicode characters in identifiers? Give an example.

37. What special characters are allowed in identifiers besides letters and digits?

38. Why is `@` not allowed in an identifier?

39. Why is `-` (hyphen) not allowed in an identifier?

40. Is `await` a valid identifier? Does it depend on context?

41. What are reserved keywords? List 5 of them.

42. Why does `let delete = 10` throw an error but `let deletex = 10` works?

43. What is the difference between `$name` and `_name` as identifiers?

44. Can an identifier be just a single character like `a`? Is it recommended?

45. Is `null` a valid identifier?

---

## Logical / Reasoning Questions

46. What is the output of this code?

```javascript
let Age = 10;
let age = 20;
console.log(Age, age);
```

47. What is the output of this code?

```javascript
let _ = 5;
let $ = 10;
console.log(_, $);
```

48. What is the output of this code?

```javascript
let π = 3.14;
let PI = 3.14;
console.log(π === PI);
```

49. What is the output of this code?

```javascript
let name = "Rahul";
let Name = "Aman";
console.log(name === Name);
```

50. What is the output of this code?

```javascript
let userName = "Rahul";
let user_name = "Aman";
console.log(userName, user_name);
```

51. Which of these are invalid and why?
   - `let 1stPlace = "Gold";`
   - `let first-place = "Gold";`
   - `let first_place = "Gold";`
   - `let $firstPlace = "Gold";`

52. What is the output of this code?

```javascript
let _123 = 10;
console.log(_123);
```

53. Can two identifiers differ only by case? What are the risks?

54. Why is `undefined` not a reserved keyword but can still cause issues?

55. Can `let` be used as an identifier in non-strict mode? What about strict mode?

---

## Programming Questions

56. Write a program that declares variables using all naming conventions (camelCase, PascalCase, snake_case, SCREAMING_SNAKE).

57. Write a program that shows identifiers are case-sensitive.

58. Write a program that demonstrates valid identifiers starting with `_` and `$`.

59. Write a program that uses Unicode characters as identifiers.

60. Write a program that uses meaningful identifiers instead of meaningless ones.

61. Write a program to show that reserved keywords cannot be used as identifiers.

62. Write a program that declares a class using PascalCase and a function using camelCase.

63. Write a program to show constants using SCREAMING_SNAKE_CASE.

64. Write a program that uses Hungarian Notation to prefix variable names with their types.

65. Write a program that demonstrates a naming collision (shadowing) in nested scopes.

---

## Hard Questions

66. How does JavaScript internally store identifiers?

67. What is a lexical environment in relation to identifiers?

68. How does scope affect identifier resolution?

69. What happens when two identifiers have the same name but are in different scopes?

70. Why is it bad practice to use short meaningless names like `a`, `b`, `x`?

71. How do you fix a naming collision in JavaScript?

72. What is the difference between `user-name` (invalid) and `user_name` (valid) — explain the parsing difference?

73. Explain the concept of "identifier resolution" in the scope chain.

74. How do you choose between camelCase and snake_case for a JavaScript project?

75. What is the difference between an identifier and a property name in an object?

76. Why does `typeof` work on identifiers but not on literals directly in some cases?

77. Can you use a number as an object property name but not as a variable identifier? Why?

78. Explain how JavaScript's parser differentiates between an identifier and a keyword.

79. What is the significance of `$` in JavaScript frameworks like jQuery or Angular?

80. How do minifiers rename identifiers? Why is this possible?

---

## Tricky Output Based Questions

81. What is the output of this code?

```javascript
let 日本語 = "Japanese";
console.log(日本語);
```

82. What is the output of this code?

```javascript
let user = "Rahul";
let User = "Aman";
let USER = "Suresh";
console.log(user, User, USER);
```

83. What is the output of this code?

```javascript
let $ = "dollar";
let _ = "underscore";
console.log($, _);
```

84. What is the output of this code?

```javascript
let firstName = "Rahul";
let first_name = "Aman";
console.log(firstName === first_name);
console.log(typeof firstName, typeof first_name);
```

85. What is the output of this code?

```javascript
// let class = "test"; // Uncommenting this will cause an error. Why?
let className = "test";
console.log(className);
```

86. What is the output of this code?

```javascript
let Δ = 5;
let Δvalue = Δ + 10;
console.log(Δvalue);
```

87. What is the output of this code?

```javascript
let foo = "bar";
let Foo = "Bar";
let FOO = "BAR";
console.log(window.foo); // In browser only
```

88. What is the output of this code?

```javascript
const π = 3.14159;
const circumference = 2 * π * 5;
console.log(circumference);
```

89. What is the output of this code?

```javascript
let let = 10; // What happens?
```

90. What is the output of this code?

```javascript
let score = 95;
let Score = 85;
let sCore = 75;
console.log(score > sCore);
console.log(Score < sCore);
```

---

## Bonus Interview Tips

- Always use meaningful, descriptive names for identifiers.
- Follow camelCase for variables/functions, PascalCase for classes.
- Remember: identifiers are case-sensitive — `name` and `Name` are different.
- Reserved keywords cannot be used as identifiers.
- Only `_`, `$`, letters, digits, and Unicode characters are allowed.
- Avoid Hungarian Notation in modern JavaScript.
- Use SCREAMING_SNAKE_CASE for constants that never change.
- Unicode identifiers work but reduce code portability — avoid in professional code.
- Short names like `a`, `b`, `x` are fine for loops but not for meaningful variables.
- Identifier resolution follows the scope chain — inner scope first, then outer.
