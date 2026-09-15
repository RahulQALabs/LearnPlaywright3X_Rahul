# JavaScript Objects – Interview Questions

## Easy Questions

1. What is an object in JavaScript?

2. How do you create an object in JavaScript?

3. What is the difference between a quoted key and an unquoted key in an object literal?

4. What is a key-value pair?

5. How do you access a property using dot notation?

6. How do you access a property using bracket notation?

7. When must you use bracket notation instead of dot notation?

8. Are object keys case-sensitive?

9. How do you add a new property to an object?

10. How do you modify an existing property?

11. How do you delete a property from an object?

12. What does `delete` return?

13. Can an object hold values of different data types?

14. Can an object hold functions?

15. What is a method in an object?

16. What is the difference between `{}` and `new Object()`?

17. How do you check if a property exists on an object?

18. How do you get the number of properties in an object?

---

## Medium Questions

19. What is the output of this code?
```javascript
let a = { status: "pass" };
console.log(a.status);
console.log(a["status"]);
```

20. What is the output of this code?
```javascript
let a2 = { status: "pass", Status: "fail" };
console.log(a2["status"]);
console.log(a2["Status"]);
console.log(a2["STATUS"]);
```

21. What is the output of this code?
```javascript
const user = { name: "rahul", age: 30 };
let key = "name";
console.log(user.key);
console.log(user[key]);
```

22. What is the difference between `user.key` and `user[key]`?

23. What is the output of this code?
```javascript
let config = {};
config.browser = "Chrome";
config.timeout = 3000;
config.timeout = 5000;
console.log(config);
delete config.browser;
console.log(config);
```

24. What is the output of this code?
```javascript
const user = { name: "rahul" };
user.city = "NYC";
console.log(user);
```

25. Can you add a property to an object declared with `const`? Why or why not?

26. What is the output of this code?
```javascript
const user = {
    name: "rahul",
    getName() {
        return this.name;
    }
};
console.log(user.getName());
```

27. What does `this` refer to inside an object method?

28. What is the output of this code?
```javascript
let obj1 = { val: 10 };
let obj2 = obj1;
obj2.val = 99;
console.log(obj1.val);
console.log(obj2.val);
```

29. What is the output of this code?
```javascript
let a = 10;
let b = a;
b = 99;
console.log(a);
console.log(b);
```

30. What is the difference between assigning a primitive and assigning an object to another variable?

31. What is the output of this code?
```javascript
let c = { status: "pass" };
let d = { status: "pass" };
console.log(c === d);
```

32. How do you compare two objects by content?

33. What is the output of this code?
```javascript
const user = { name: "rahul", age: 30, city: "NYC" };
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
```

34. What is the difference between `for...in` and `for...of` for objects?

35. What is the output of this code?
```javascript
const user = { name: "rahul", age: 30 };
const { name, age } = user;
console.log(name, age);
```

36. What is object destructuring?

37. What is the output of this code?
```javascript
const { name: userName, role = "tester" } = { name: "rahul" };
console.log(userName, role);
```

38. What is optional chaining?

39. What is the output of this code?
```javascript
const data = { user: { profile: null } };
console.log(data.user?.profile?.name);
console.log(data.account?.id);
```

40. What is the difference between `?.` and `??`?

41. How do you make a shallow copy of an object?

42. What is the output of this code?
```javascript
const original = { name: "rahul", address: { city: "NYC" } };
const shallow = { ...original };
shallow.address.city = "Delhi";
console.log(original.address.city);
```

---

## Logical / Reasoning Questions

43. What is the output and why?
```javascript
let b = { status: "pass" };
let a = b;
b.status = "fail";
console.log(a.status);
```

44. What is the output and why?
```javascript
const x = {};
const y = {};
console.log(x === y);
console.log(x == y);
```

45. What is the output and why?
```javascript
const user = { name: "rahul" };
const copy = { ...user };
copy.name = "gupta";
console.log(user.name);
console.log(copy.name);
```

46. What is the output and why?
```javascript
const a = { x: 1 };
const b = { x: 1 };
console.log(JSON.stringify(a) === JSON.stringify(b));
```

47. What is the output and why?
```javascript
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj).length);
```

48. What is the output and why?
```javascript
const user = { name: "rahul" };
console.log("name" in user);
console.log(user.hasOwnProperty("age"));
```

49. What is the output and why?
```javascript
const key = "status";
const obj = { [key]: "pass" };
console.log(obj.status);
```

50. What is the output and why?
```javascript
const name = "rahul";
const age = 30;
const user = { name, age };
console.log(user);
```

51. What is the output and why?
```javascript
const user = { name: "rahul", address: { city: "NYC" } };
const { address: { city } } = user;
console.log(city);
```

52. What is the output and why?
```javascript
const config = { browser: "chrome" };
Object.freeze(config);
config.browser = "firefox";
console.log(config.browser);
```

53. What is the output and why?
```javascript
const obj = { a: 1 };
obj = { a: 2 };
```

54. What is the output and why?
```javascript
const a = { n: 1 };
const b = { ...a };
b.n = 2;
console.log(a.n, b.n);
```

55. What is the output and why?
```javascript
console.log(typeof {});
console.log(typeof []);
console.log(typeof null);
```

56. What is the output and why?
```javascript
const user = { name: "rahul" };
console.log(user.toString());
```

---

## Programming Questions

57. Write a program to create an object for a test case with `id`, `name`, and `status`.

58. Write a program to access and print all properties using dot notation.

59. Write a program to add a new property to an existing object.

60. Write a program to update the value of a property.

61. Write a program to delete a property from an object.

62. Write a program to loop through an object and print each key and value.

63. Write a program to count the number of properties in an object.

64. Write a program to check whether a given key exists in an object.

65. Write a program to merge two objects into one.

66. Write a program to copy an object without affecting the original.

67. Write a program to deep-clone a nested object.

68. Write a program to extract specific properties using destructuring.

69. Write a program to create an object method that returns a full name.

70. Write a program to convert an object into an array of its entries.

71. Write a program to convert an array of `[key, value]` pairs back into an object.

72. Write a program to find the number of occurrences of each word, using an object as a counter.

73. Write a program to build a test-report object from an array of test results.

74. Write a program to safely read a deeply nested property using optional chaining.

75. Write a program to rename a key in an object.

76. Write a program to sort an array of objects by a numeric property.

77. Write a program to group an array of objects by a property.

78. Write a program to get only the properties whose values are numbers.

79. Write a program to freeze a config object so it cannot be changed.

80. Write a program to take a user object and produce a formatted report string.

---

## Hard Questions

81. Explain call by value vs call by reference in JavaScript. Which types are which?

82. Why does `obj2 = obj1` not create a copy?

83. What is a shallow copy vs a deep copy? Give examples of each.

84. What are the limitations of `JSON.parse(JSON.stringify(obj))` for deep copying?

85. How does `structuredClone()` improve on the JSON approach?

86. How does `this` behave in an arrow function stored inside an object?

87. Why does `const` not make an object's properties immutable?

88. How do you make an object's properties truly immutable?

89. What is the difference between `Object.freeze` and `Object.seal`?

90. What is the difference between `hasOwnProperty` and the `in` operator?

91. How do prototype properties affect `for...in` iteration, and how do you avoid them?

92. How does key order work in a JavaScript object?

93. How do you compare two objects for deep equality without a library?

94. What is a computed property name? Give an example.

95. What is property shorthand in an object literal?

96. What is the `Object.create(null)` object, and how is it different from `{}`?

97. How do you convert a Map to an object and back?

98. What are getters and setters on an object?

99. How would you implement a deep merge of two objects?

100. How does optional chaining interact with function calls, e.g. `obj.fn?.()`?

---

## Tricky Output Based Questions

101. What is the output?
```javascript
console.log({} + []);
console.log([] + {});
```

102. What is the output?
```javascript
console.log({ a: 1 } === { a: 1 });
console.log([] === []);
```

103. What is the output?
```javascript
const obj = { 1: "a", "2": "b", true: "c" };
console.log(Object.keys(obj));
```

104. What is the output?
```javascript
const user = { name: "rahul" };
const copy = Object.assign({}, user);
copy.name = "gupta";
console.log(user.name, copy.name);
```

105. What is the output?
```javascript
const a = { n: 1 };
const b = a;
b = { n: 2 };
console.log(a.n);
```

106. What is the output?
```javascript
const user = { name: "rahul", age: undefined };
console.log(JSON.stringify(user));
```

107. What is the output?
```javascript
const obj = { a: 1, b: 2 };
const { a, ...rest } = obj;
console.log(a);
console.log(rest);
```

108. What is the output?
```javascript
const obj = { a: { b: { c: 1 } } };
const shallow = { ...obj };
shallow.a.b.c = 99;
console.log(obj.a.b.c);
```

109. What is the output?
```javascript
const user = { name: "rahul" };
console.log(user?.address?.city);
console.log(user.address?.city);
```

110. What is the output?
```javascript
const config = { browser: "chrome" };
Object.freeze(config);
config.browser = "firefox";
config.timeout = 3000;
console.log(config);
```

---

## Automation Testing — Scenario Based Questions

111. You have a test-data object for login. How do you safely read an optional `middleName`?

112. Your Playwright config object is shared across tests. Why does mutating it in one test affect another?

113. How would you pass test data into a test as an object and destructure only what you need?

114. An API returns a deeply nested response. How do you safely access `response.data.user.email`?

115. You need to build a fresh copy of a fixture object per test so tests don't interfere. How?

116. How would you count test results (pass/fail/skip) using an object as a counter?

117. How would you convert a test-results object into an array so you can `map`/`filter` it?

118. Why does `assert.deepStrictEqual()` matter when comparing objects in tests?

119. How would you freeze a shared config object to prevent accidental mutation in tests?

120. How do you convert a form's field values into an object for comparison against expected data?

---

## Bonus Interview Tips

- **Reference types**: objects/arrays are copied by reference — `=` does not clone.
- **`===` compares references**, not contents — use deep equality to compare data.
- **Dot vs bracket**: bracket for dynamic keys; `obj.key` looks for a literal `"key"`.
- **`this`** = the object before the dot; arrow functions don't bind their own `this`.
- **Shallow vs deep**: spread/`Object.assign` shallow; `structuredClone` deep.
- **`const`** protects the binding, not the properties — use `Object.freeze` for that.
- **`for...in`** walks inherited keys too; `Object.keys` gives own keys only.
- **Optional chaining `?.`** prevents crashes on missing nested properties.
