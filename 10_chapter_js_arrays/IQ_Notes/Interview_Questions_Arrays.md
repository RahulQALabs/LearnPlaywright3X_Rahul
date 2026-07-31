# JavaScript Arrays – Interview Questions

## Easy Questions

1. What is an array in JavaScript?

2. How do you create an empty array?

3. How do you create an array with initial values?

4. What is the difference between array literal `[]` and `new Array()`?

5. How do you find the length of an array?

6. How do you access the first element of an array?

7. How do you access the last element of an array?

8. What does `array[index]` return if the index doesn't exist?

9. What is the `.at()` method? How is it different from bracket notation?

10. Can arrays in JavaScript hold mixed data types?

11. What is the index of the first element in an array?

12. What is `Array.of()` used for?

13. What is `Array.from()` used for?

14. How do you check if a value exists in an array?

15. What does `indexOf` return when an element is not found?

---

## Medium Questions

16. What is the output of this code?
```javascript
let arr = [10, 20, 30];
console.log(arr.length);
console.log(arr.at(-1));
console.log(arr.at(-3));
console.log(arr.at(-4));
```

17. What is the output of this code?
```javascript
let statuses = ("pass", "fail", "skip");
console.log(statuses[0]);
```

18. What is the output of this code?
```javascript
let statuses = ["pass", "fail", "skip"];
console.log(statuses[-1]);
console.log(statuses.at(-1));
```

19. What is the output of this code?
```javascript
let arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.pop();
console.log(arr);
```

20. What does `push()` return?

21. What does `pop()` return?

22. What is the difference between `push()` and `unshift()`?

23. What is the difference between `pop()` and `shift()`?

24. What does `splice(2, 1)` do?

25. What does `splice(2, 0, 99)` do?

26. What does `splice(-1, 1, 1)` do?

27. What is the difference between `splice()` and `slice()`?

28. What is the output of this code?
```javascript
let results = ["pass", "fail", "pass", "error"];
console.log(results.indexOf("pass"));
console.log(results.lastIndexOf("pass"));
console.log(results.includes("skip"));
```

29. What is the output of this code?
```javascript
let num = [10, 20, 30, 40, 50];
console.log(num.find(x => x > 20));
console.log(num.findIndex(x => x > 20));
```

30. What is the output of this code?
```javascript
let num = [10, 20, 30, 40, 50];
console.log(num.findLast(x => x > 20));
console.log(num.findLastIndex(x => x > 20));
```

31. What do `map()`, `filter()`, and `reduce()` have in common?

32. What is the output of this code?
```javascript
let scores = [45, 70, 85];
let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
console.log(grades);
```

33. What is the output of this code?
```javascript
let scores = [45, 70, 85, 93, 99];
let passing = scores.filter(s => s >= 70);
console.log(passing);
```

34. What is the output of this code?
```javascript
let scores = [45, 70, 85];
let total = scores.reduce((sum, s) => sum + s, 0);
console.log(total);
```

35. What is the output of this code?
```javascript
let fruits = ["banana", "apple", "grapes"];
fruits.sort();
console.log(fruits);
```

36. What is the output of this code?
```javascript
let num = [10, 1, 21, 3];
console.log(num.sort());
```

37. Why does `[10, 1, 21, 3].sort()` give unexpected results?

38. How do you sort numbers in ascending order?

39. How do you sort numbers in descending order?

40. What is the output of this code?
```javascript
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.slice(1, 3));
console.log(arr.slice(-2));
```

---

## Logical / Reasoning Questions

41. What is the output and why?
```javascript
let arr = new Array(3);
console.log(arr.length);
console.log(arr[0]);
```

42. What is the output and why?
```javascript
let arr = new Array(3, 4);
console.log(arr);
```

43. What is the difference between `new Array(3)` and `[3]`?

44. What is the output and why?
```javascript
let chars = Array.from("Hello");
console.log(chars);
```

45. What is the output and why?
```javascript
let a = [1, 2, 3];
a[10] = 99;
console.log(a.length);
console.log(a);
```

46. What is the output and why?
```javascript
let arr = [1, 2, 3];
arr.push(4, 5);
arr.unshift(0);
console.log(arr);
```

47. What is the output and why?
```javascript
let browsers = ["chrome", "safari", "ie"];
let removed = browsers.shift();
console.log(browsers);
console.log(removed);
```

48. What is the output and why?
```javascript
let tests = ["login", "checkout", "search"];
for (let test of tests) {
    console.log(test);
}
```

49. What is the output and why?
```javascript
let tests = ["login", "checkout", "search"];
for (let test of tests) {
    console.log(tests[test]);
}
```

50. Why does `for...of` give undefined when you use `array[value]`?

51. What is the output and why?
```javascript
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1);
console.log(arr);
```

52. What is the output and why?
```javascript
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 0, 99);
console.log(arr);
```

53. What is the output and why?
```javascript
let arr = [1, 2, 3, 4, 5];
let sliced = arr.slice(1, 3);
console.log(sliced);
console.log(arr);
```

54. What is the output and why?
```javascript
let arr = [1, 2, 3, 4, 5];
let spliced = arr.splice(1, 3);
console.log(spliced);
console.log(arr);
```

55. What is the output and why?
```javascript
let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a);
```

---

## Programming Questions

56. Write a program to create an array of 5 fruits and print each one.

57. Write a program to add an element to the end of an array.

58. Write a program to remove the last element of an array.

59. Write a program to add an element to the beginning of an array.

60. Write a program to remove the first element of an array.

61. Write a program to find the index of a specific element in an array.

62. Write a program to check if an element exists in an array.

63. Write a program to print all elements of an array using a `for` loop.

64. Write a program to print all elements of an array using `for...of`.

65. Write a program to print all elements of an array using `forEach`.

66. Write a program to transform an array of numbers into "Pass"/"Fail" using `map`.

67. Write a program to filter numbers greater than a threshold.

68. Write a program to calculate the sum of all numbers in an array using `reduce`.

69. Write a program to sort an array of strings alphabetically.

70. Write a program to sort an array of numbers in ascending order.

71. Write a program to sort an array of numbers in descending order.

72. Write a program to extract elements from index 2 to 5 using `slice`.

73. Write a program to remove the 3rd element from an array using `splice`.

74. Write a program to replace the 2nd element in an array using `splice`.

75. Write a program to find the first number greater than 50 in an array.

76. Write a program to find the index of the first number greater than 50.

77. Write a program to find the last even number in an array.

78. Write a program using `Array.from()` to convert a string to an array of characters.

79. Write a program using `Array.of()` to create an array of test scores.

80. Write a program to reverse an array using `reverse()`.

---

## Hard Questions

81. What is the difference between `for...of` and `forEach` for iterating arrays?

82. Can you use `break` inside `forEach`? Why or why not?

83. How does `map` differ from `forEach`?

84. What is the difference between `slice` and `splice`? Which one mutates the original?

85. How does `filter` decide which elements to keep?

86. What happens when you assign a value to an index beyond the array length?

87. What is the time complexity of `push()` vs `unshift()`? Why is one faster?

88. How does the default `sort()` work on numbers, and why does it fail?

89. How do `find`, `findIndex`, `findLast`, and `findLastIndex` differ?

90. What is the difference between `indexOf` and `findIndex`?

91. How would you remove duplicate values from an array?

92. How do you flatten a nested array?

93. How do you check if two arrays are equal in JavaScript?

94. What is shallow copy vs deep copy? Does `slice` create a shallow or deep copy?

95. How would you group an array of objects by a property?

96. What is the spread operator `...` with arrays? How is it different from `concat`?

97. How do you convert an array-like object (like `arguments`) into a real array?

98. What is destructuring with arrays? Give an example.

99. How does `reduce` work? Explain with an example that creates an object from an array.

100. What are the performance implications of using `shift` and `unshift` on large arrays?

---

## Tricky Output Based Questions

101. What is the output?
```javascript
console.log(typeof [1, 2, 3]);
console.log(Array.isArray([1, 2, 3]));
```

102. What is the output?
```javascript
let arr = [1, 2, 3];
arr.length = 0;
console.log(arr);
```

103. What is the output?
```javascript
let arr = [1, 2, 3];
arr.length = 5;
console.log(arr);
console.log(arr[4]);
```

104. What is the output?
```javascript
let a = [1, 2, 3];
let b = [1, 2, 3];
console.log(a === b);
console.log(a[0] === b[0]);
```

105. What is the output?
```javascript
let arr = [1, 2, 3, 4, 5];
let result = arr.filter(x => x > 10);
console.log(result);
console.log(result.length);
```

106. What is the output?
```javascript
let arr = [1, 2, 3];
arr.forEach((val, index) => {
    if (index === 1) break;
    console.log(val);
});
```

107. What is the output?
```javascript
let arr = [3, 1, 4, 1, 5, 9];
arr.sort();
console.log(arr);
```

108. What is the output?
```javascript
let arr = [5, 2, 8, 1, 9];
arr.sort((a, b) => a - b);
console.log(arr);
```

109. What is the output?
```javascript
let arr = [1, [2, 3], [4, [5, 6]]];
console.log(arr.flat());
console.log(arr.flat(2));
```

110. What is the output?
```javascript
let arr = [10, 20, 30, 40, 50];
let [first, second, ...rest] = arr;
console.log(first, second);
console.log(rest);
```

---

## Automation Testing — Scenario Based Questions

111. You have an array of test results: `["pass", "fail", "pass", "error"]`. How would you count how many are "pass"?

112. You need to check if all tests in an array passed. Which array method would you use?

113. Write code to transform an array of test case objects into just their names.

114. Your test data has browser names. Sort them alphabetically before running tests.

115. You need to extract only the failed tests from an array of results. Which method?

116. How would you combine two arrays of test data into one?

117. Write code to find the first test case that starts with "login" in an array.

118. You have test scores. Use `reduce` to calculate the average score.

119. How would you remove duplicate browser names from an array?

120. You need to run the same test with different data sets from an array. Which iteration method is most appropriate and why?

---

## Bonus Interview Tips

- **Arrays are objects**: `typeof []` returns `"object"` — use `Array.isArray()` to check.
- **`.at()` is newer than bracket notation**: Supports negative indexing, bracket `[-1]` returns `undefined`.
- **`push`/`pop` are O(1)**, `unshift`/`shift` are O(n) — the former work at the end, the latter shift all elements.
- **`splice` mutates, `slice` doesn't** — remember: splice = surgery (modifies), slice = copy (doesn't modify).
- **Default `sort()` converts to strings**: Always use a compare function for numbers.
- **`map` returns same length, `filter` returns same or smaller** — choose based on your need.
- **`reduce` is powerful**: Can sum, average, group, or convert an array to an object.
- **`find` vs `filter`**: `find` returns the first match (single value), `filter` returns all matches (array).
- **`forEach` can't `break`**: Use `for...of` if you need early exit.
- **Spreading arrays**: `[...arr1, ...arr2]` is cleaner than `concat`.
