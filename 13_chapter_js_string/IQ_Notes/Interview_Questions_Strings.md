# JavaScript Strings – Interview Questions

## Easy Questions

1. What is a string in JavaScript?

2. How do you create a string in JavaScript?

3. What is the difference between single quotes, double quotes, and backticks?

4. What is a template literal?

5. How do you embed a variable inside a string?

6. How do you write a multi-line string?

7. How do you find the length of a string?

8. What is the index of the first character in a string?

9. How do you access the first character of a string?

10. How do you access the last character of a string?

11. What are strings immutable?

12. What does `str[0] = "H"` do to a string?

13. How do you convert a number to a string?

14. How do you convert a string to a number?

15. How do you convert a string to uppercase and lowercase?

16. How do you remove whitespace from both ends of a string?

17. What does `trimStart()` do?

18. What does `trimEnd()` do?

---

## Medium Questions

19. What is the output of this code?
```javascript
let s = "Hello World";
console.log(s.length);
console.log(s[0]);
console.log(s[7]);
console.log(s[-1]);
```

20. What is the output of this code?
```javascript
let s = "Hello World";
console.log(s.at(-1));
console.log(s.at(-6));
console.log(s.charAt(0));
console.log(s.charCodeAt(0));
```

21. What is the difference between `str.charAt(99)` and `str.at(99)`?

22. What is the output of this code?
```javascript
let url = "https://statging.vwo.com/api/login?retry=true";
console.log(url.includes("staging"));
console.log(url.startsWith("https"));
console.log(url.endsWith("true"));
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
console.log(url.indexOf("nothere"));
```

23. What is the difference between `indexOf` and `search`?

24. What is the output of this code?
```javascript
let str = "Login_Test_Pass_001";
console.log(str.slice(0, 5));
console.log(str.slice(11));
console.log(str.slice(-3));
console.log(str.substring(6, 10));
```

25. What is the difference between `slice()` and `substring()`?

26. What is `substr()` and why should you avoid it?

27. What is the output of this code?
```javascript
let msg = "Test:Fail. Retry:Fail.";
console.log(msg.replace("Fail", "Pass"));
console.log(msg.replaceAll("Fail", "Pass"));
console.log(msg.replace(/Fail/g, "Pass"));
```

28. Why does `replace("Fail", "Pass")` replace only the first occurrence?

29. What is the difference between `replace` and `replaceAll`?

30. What is the output of this code?
```javascript
let url = "https://app.vwo.con?app=pramod";
console.log(url.replace(/app/g, "qa"));
```

31. What is the output of this code?
```javascript
console.log("pass,fail,skip".split(","));
console.log("hello".split(""));
console.log(["2024", "03", "07"].join("-"));
```

32. What does `split()` return when called with no arguments?

33. How do you reverse a string?

34. How do you concatenate strings? Give three ways.

35. What is the output of this code?
```javascript
String(200);
String(true);
String(null);
String([1, 2]);
```

36. What is the output of this code?
```javascript
console.log(Number("42"));
console.log(parseInt("42px"));
console.log(parseFloat("3.14rem"));
console.log(Number("12px"));
```

37. What is the difference between `parseInt` and `Number`?

38. What is the difference between `parseInt` and `parseFloat`?

39. What is the output of this code?
```javascript
let str = "  Hello World!  ";
console.log(str.trim());
str.trimStart();
str.trimEnd();
console.log(str);
```

40. What is the output of this code?
```javascript
let str = "hello";
str[0] = "H";
console.log(str);
let upper = str.toUpperCase();
console.log(str);
console.log(upper);
```

41. What does `concat()` do?

42. What is the output of this code?
```javascript
console.log("Hello" + " " + "World!");
console.log("Hello".concat(" ", "World!"));
console.log(`${"Hello"} ${"World"}`);
```

---

## Logical / Reasoning Questions

43. What is the output and why?
```javascript
console.log("10" + 5);
console.log("10" - 5);
console.log("10" * "2");
```

44. What is the output and why?
```javascript
console.log("5" + 3 + 2);
console.log(3 + 2 + "5");
```

45. What is the output and why?
```javascript
console.log("".length);
console.log(" ".length);
console.log("".trim().length);
```

46. What is the output and why?
```javascript
let a = "abc";
let b = "abc";
console.log(a === b);
console.log(a == b);
```

47. What is the output and why?
```javascript
let s = "JavaScript";
console.log(s.slice(0, 4));
console.log(s.slice(4, 0));
console.log(s.substring(4, 0));
console.log(s.substring(-6));
```

48. What is the output and why?
```javascript
console.log("banana".replace("a", "X"));
console.log("banana".replaceAll("a", "X"));
```

49. What is the output and why?
```javascript
console.log("a-b-c".split("-"));
console.log("a-b-c".split("-", 2));
console.log("abc".split());
```

50. What is the output and why?
```javascript
console.log([..."hey"]);
console.log("hey".split(""));
```

51. What is the output and why?
```javascript
console.log("😀".split(""));
console.log([..."😀"]);
```

52. What is the output and why?
```javascript
let name = "Rahul";
console.log(`Hi ${name}! 2+2=${2 + 2}`);
```

53. What is the output and why?
```javascript
console.log("Pass".includes("pass"));
console.log("Pass".toLowerCase().includes("pass"));
```

54. What is the output and why?
```javascript
console.log("10" < "9");
console.log(10 < 9);
```

55. What is the output and why?
```javascript
console.log(parseInt("42px"));
console.log(parseInt("px42"));
console.log(Number("px42"));
```

56. What is the output and why?
```javascript
let str = "abc";
str.toUpperCase();
console.log(str);
```

---

## Programming Questions

57. Write a program to print the length of a string.

58. Write a program to convert a string to uppercase.

59. Write a program to reverse a string.

60. Write a program to check whether a string is a palindrome.

61. Write a program to count the number of characters in a string without using `.length`.

62. Write a program to count how many times a character appears in a string.

63. Write a program to replace all spaces in a sentence with `_`.

64. Write a program to extract the domain name from a URL.

65. Write a program to check whether a string starts with `https`.

66. Write a program to get the file extension from a filename.

67. Write a program to capitalize the first letter of a string.

68. Write a program to convert `"hello world"` to `"Hello World"` (title case).

69. Write a program to remove all whitespace from a string.

70. Write a program to check whether a string contains a substring.

71. Write a program to split a comma-separated string into an array.

72. Write a program to join an array of words into a sentence.

73. Write a program to truncate a long string to a given length with `...`.

74. Write a program to mask all but the last 4 characters of a card number.

75. Write a program to find the first occurrence of a character in a string.

76. Write a program to validate that a string matches a date format `YYYY-MM-DD`.

77. Write a program to extract all digits from a string.

78. Write a program to convert a string to a number using `parseInt` and `parseFloat`.

79. Write a program to compare two strings ignoring case.

80. Write a program to generate a URL slug from a title.

---

## Hard Questions

81. Why are strings immutable in JavaScript? What are the benefits?

82. What is the difference between `str.length` and `[...str].length`?

83. How does `slice` handle negative indices internally?

84. What is the difference between `slice`, `substring`, and `substr`? Which are deprecated?

85. How do `indexOf`, `lastIndexOf`, `search`, and `match` differ?

86. When does `match()` return `null`, and how do you guard against it?

87. What does the `g` flag do in a regex, and how does it change `match`?

88. How do capture groups work in `replace`? Explain `$1`, `$2`, and `$&`.

89. How does the function replacer in `replace` work?

90. What is the difference between `replaceAll` with a string vs a regex?

91. How do you compare strings with `localeCompare`? What does it return?

92. Why is `["b","a","C"].sort()` not what you expect, and how does `localeCompare` fix it?

93. How do you perform a numeric-aware string sort for values like `item2` and `item10`?

94. What is Unicode normalization (`normalize()`) and when do you need it?

95. How do `codePointAt` and `charCodeAt` differ? Why does it matter for emoji?

96. What is `String.raw` and when is it useful?

97. What is a tagged template literal? Give an example.

98. How do you count occurrences of a substring using regex?

99. How would you check whether a string contains only digits?

100. What is the difference between `decodeURIComponent` and `decodeURI`?

---

## Tricky Output Based Questions

101. What is the output?
```javascript
console.log(typeof "hello");
console.log(typeof new String("hello"));
```

102. What is the output?
```javascript
console.log("abc".charAt(99));
console.log("abc".at(99));
console.log("abc"[99]);
```

103. What is the output?
```javascript
console.log("2026-07-25".replace(/(\d+)-(\d+)-(\d+)/, "$3/$2/$1"));
```

104. What is the output?
```javascript
console.log("a1b2".replace(/\d/g, d => d * 2));
```

105. What is the output?
```javascript
console.log("abc".replace(/b/, "[$&]"));
```

106. What is the output?
```javascript
console.log("a,b,,c".split(","));
console.log("a,b,,c".split(",").length);
```

107. What is the output?
```javascript
console.log("7".padStart(3, "0"));
console.log("Name".padEnd(10, "."));
console.log("abcdef".padStart(3, "0"));
```

108. What is the output?
```javascript
console.log("ab".repeat(3));
console.log("ab".repeat(0));
```

109. What is the output?
```javascript
console.log("abc".match(/\d/));
console.log("abc".match(/\d/)?.[0]);
```

110. What is the output?
```javascript
console.log("a1b2c3".match(/\d/g));
console.log([..."a1b2".matchAll(/([a-z])(\d)/g)].map(m => m[0]));
```

---

## Automation Testing — Scenario Based Questions

111. You scraped the text `"  Login Successful  "` from a page. How do you safely compare it to `"login successful"`?

112. A test reads `"₹1,299.50"` from the UI. How do you convert it to the number `1299.5`?

113. You need to extract the order ID from `"https://shop.com/order/10245?ref=x"`. How?

114. You want to validate that a date field matches `YYYY-MM-DD`. Which approach would you use?

115. How would you mask a credit card number before writing it to the test log?

116. Screenshot filenames must be unique and filesystem-safe. How do you convert a test title into a slug?

117. A failure message is very long. How do you truncate it for a report?

118. How would you count how many tests appear in a comma-separated result string?

119. How do you check whether an API response URL contains a query parameter?

120. Why should you normalise text before asserting it in Playwright?

---

## Bonus Interview Tips

- **Strings are immutable**: every method returns a new string — always capture the result.
- **`.at()` vs `[]`**: `.at(-1)` gives the last character; `str[-1]` is `undefined`.
- **`replace` vs `replaceAll`**: `replace` with a string hits the **first** match only.
- **Case sensitivity**: `includes`/`startsWith`/`endsWith` are all case-sensitive.
- **`slice` over `substring`**: only `slice` handles negatives sensibly; `substr` is deprecated.
- **`Number` vs `parseInt`**: `Number("12px")` is `NaN`, `parseInt("12px")` is `12`.
- **Emoji**: use `[...str]` instead of `split("")` to avoid breaking surrogate pairs.
- **Sorting strings**: default `sort()` is code-unit based — use `localeCompare` for real alphabetical order.
