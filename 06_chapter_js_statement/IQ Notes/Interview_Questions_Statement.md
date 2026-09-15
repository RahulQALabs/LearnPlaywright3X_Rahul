# JavaScript Control Statements (if-else) – Interview Questions

## Easy Questions

1. What is an `if` statement in JavaScript?

2. What is the difference between `if` and `if-else`?

3. What is a condition in an `if` statement?

4. What type of value does a condition return?

5. What is the use of `else` in an `if-else` statement?

6. Can we write an `if` statement without `else`?

7. What is the syntax of an `if-else` statement?

8. What happens if the condition in `if` is `false`?

9. What is the output of `if (true) { console.log("Hello"); }`?

10. What is the output of `if (false) { console.log("Hello"); }`?

---

## Medium Questions

11. What is a nested `if-else` statement?

12. What is an `if-else-if` ladder?

13. When should you use nested `if-else` over a ladder?

14. What will be the output of this code?

```javascript
let age = 16;
if (age > 18) {
    console.log("Go to goa");
} else {
    console.log("Not go to goa");
}
```

15. What will be the output of this code?

```javascript
let score = 85;
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else {
    console.log("C");
}
```

16. What will be the output of this code?

```javascript
let age = 30;
if (age > 18) {
    if (age > 25) {
        console.log("Can drink");
    } else {
        console.log("No drink");
    }
} else {
    console.log("No goa nor drink");
}
```

17. What is the difference between `if-else-if` ladder and multiple `if` statements?

18. Can we have an `else` without an `if`?

19. Does `else if` need to be in parentheses for the condition?

20. What happens if all conditions in an `if-else-if` ladder are `false` and there is no `else`?

---

## Logical / Reasoning Questions

21. What is the output of this code?

```javascript
let x = 10;
if (x = 5) {
    console.log("Hello");
} else {
    console.log("World");
}
```

22. What is the output of this code?

```javascript
if (0) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
```

23. What is the output of this code?

```javascript
if ("") {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
```

24. What is the output of this code?

```javascript
if ("Hello") {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
```

25. What is the output of this code?

```javascript
if (null) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
```

26. What is the output of this code?

```javascript
if (undefined) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
```

27. What is the output of this code?

```javascript
if (NaN) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
```

28. What is the output of this code?

```javascript
let score = 75;
if (score >= 50) {
    console.log("Pass");
} else if (score >= 75) {
    console.log("Good");
}
```

29. What is the output of this code?

```javascript
let num = -1;
if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}
```

30. What is the output of this code?

```javascript
let a = 10, b = 20;
if (a > b) {
    console.log("a is greater");
} else if (b > a) {
    console.log("b is greater");
} else {
    console.log("Both are equal");
}
```

---

## Programming Questions

31. Write a program to check if a number is positive or negative using `if-else`.

32. Write a program to check if a person is eligible to vote (age >= 18).

33. Write a program to find the largest of two numbers.

34. Write a program to find the largest of three numbers using nested `if-else`.

35. Write a program to check if a number is even or odd.

36. Write a program to assign grades (A, B, C, D, F) based on marks using `if-else-if` ladder.

37. Write a program to check if a year is a leap year.

38. Write a program to check if a character is a vowel or consonant.

39. Write a program to calculate the discount based on purchase amount:
   - Above 1000 → 20% discount
   - 500 to 1000 → 10% discount
   - Below 500 → no discount

40. Write a program to check if a number is divisible by both 3 and 5.

41. Write a program to determine the day of the week using a number (1-7) with `if-else-if` ladder.

42. Write a program to check if a triangle is valid based on three angles (sum = 180).

43. Write a program to calculate electricity bill:
   - Up to 100 units → ₹5 per unit
   - 101 to 300 units → ₹7 per unit
   - Above 300 units → ₹10 per unit

44. Write a program to check if a person can drive (age >= 18 and has a license).

45. Write a program that takes a number and prints whether it is between 10 and 20 (inclusive).

---

## Hard Questions

46. What is the difference between `if-else` and the ternary operator?

47. Can you replace `if-else` with `&&` and `||`? How?

48. What is the problem with deeply nested `if-else` statements?

49. How would you refactor a deeply nested `if-else` to make it more readable?

50. What is the output of this code and why?

```javascript
let x = 5;
if (x > 3 && x < 10) {
    console.log("Between 3 and 10");
} else if (x > 10 || x < 3) {
    console.log("Outside range");
}
```

51. What is the output of this code and why?

```javascript
let val = "10";
if (val == 10) {
    console.log("Equal");
} else {
    console.log("Not equal");
}
```

52. What is the output of this code and why?

```javascript
let val = "10";
if (val === 10) {
    console.log("Equal");
} else {
    console.log("Not equal");
}
```

53. Can an `if` condition run without curly braces? What are the risks?

54. Why does this code not work as expected?

```javascript
let score = 85;
if (score >= 90)
    console.log("A");
    console.log("Excellent");
else
    console.log("Not A");
```

55. How does JavaScript evaluate conditions like `if (0)`, `if (1)`, `if ("")`, `if ("0")`?

56. Explain the concept of "truthy" and "falsy" values in JavaScript conditions.

57. What is the difference between short-circuit evaluation and `if-else`?

58. How would you implement a multi-condition login system using nested `if-else`?

59. Write a program to find the roots of a quadratic equation using `if-else`.

60. What is better — `if-else-if` ladder or `switch` statement? When to use which?

---

## Bonus Interview Tips

- Practice writing conditions without curly braces to understand block scope.
- Always think about edge cases (negative numbers, zero, empty strings).
- Be comfortable explaining truthy/falsy behavior in conditions.
- In interviews, prefer `===` over `==` inside conditions.
- Nested `if-else` can often be simplified with logical operators.
- Remember: order of conditions in a ladder determines which block runs first.

---

## Easy Questions (Continued)

61. What is a "truthy" value?

62. What is a "falsy" value?

63. How many falsy values exist in JavaScript? List them.

64. Is `0` truthy or falsy?

65. Is `" "` (a space) truthy or falsy?

66. Is `"0"` (string zero) truthy or falsy?

67. Is `[]` (empty array) truthy or falsy?

68. Is `{}` (empty object) truthy or falsy?

69. Is `NaN` truthy or falsy?

70. Is `null` truthy or falsy?

71. What does the ternary operator `? :` do?

72. What is the `switch` statement used for?

73. What keyword is used in `switch` to stop checking further cases?

74. What is the `default` case in a `switch` statement?

75. What is the syntax of a ternary operator?

76. What does `&&` (AND) return when used as a short-circuit?

77. What does `||` (OR) return when used as a short-circuit?

78. Can you write `if (name)` when `name` is a string?

79. What will `if (1)` do — run or skip?

80. What will `if (0)` do — run or skip?

---

## Medium Questions (Continued)

81. What is the difference between `if-else` and a ternary operator?

82. When should you use a `switch` statement instead of `if-else-if` ladder?

83. What will be the output of this code?

```javascript
let a = 10, b = 5;
if (a > 5 && b > 2) {
    console.log("Both true");
} else {
    console.log("At least one false");
}
```

84. What will be the output of this code?

```javascript
let a = 10, b = 1;
if (a > 5 && b > 5) {
    console.log("Both true");
} else {
    console.log("At least one false");
}
```

85. What will be the output of this code?

```javascript
let a = 10, b = 1;
if (a > 5 || b > 5) {
    console.log("At least one true");
} else {
    console.log("Both false");
}
```

86. What will be the output of this code?

```javascript
let a = 2, b = 1;
if (a > 5 || b > 5) {
    console.log("At least one true");
} else {
    console.log("Both false");
}
```

87. What is the difference between these two approaches?

```javascript
// Approach 1
if (age >= 18) console.log("Adult");

// Approach 2
if (age >= 18) {
    console.log("Adult");
    console.log("Can vote");
}
```

88. What is the output of this code?

```javascript
let x = 10;
if (x % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}
```

89. What does the `break` keyword do inside a `switch` case?

90. What happens if you forget `break` in a `switch` case? (fall-through)

91. What is the output of this switch?

```javascript
let num = 2;
switch (num) {
    case 1: console.log("One");
    case 2: console.log("Two");
    case 3: console.log("Three");
    default: console.log("Default");
}
```

92. What is the output of this code?

```javascript
let val = 5;
if (val > 0 && val < 10) {
    console.log("Single digit");
}
```

93. What is the output of this code?

```javascript
let isLoggedIn = true;
let isAdmin = false;
if (isLoggedIn && isAdmin) {
    console.log("Admin panel");
} else {
    console.log("Access denied");
}
```

94. What happens if you declare a `let` variable inside an `if` block and try to access it outside?

95. What is the difference between `var` and `let` when used inside an `if` block?

96. What will be the output of this code?

```javascript
if (true) {
    var x = 10;
    let y = 20;
}
console.log(x);
console.log(y);
```

97. What is a guard clause (early return)?

98. Rewrite this using a guard clause:

```javascript
function process(user) {
    if (user) {
        if (user.isActive) {
            console.log("Processing");
        }
    }
}
```

99. What will be the output of this code?

```javascript
let role = "editor";
if (role === "admin") {
    console.log("Full access");
} else if (role === "editor") {
    console.log("Edit access");
} else if (role === "viewer") {
    console.log("View only");
} else {
    console.log("No access");
}
```

100. What will be the output of this code?

```javascript
let temperature = 30;
if (temperature > 40) {
    console.log("Very hot");
} else if (temperature > 30) {
    console.log("Hot");
} else if (temperature > 20) {
    console.log("Warm");
} else {
    console.log("Cool");
}
```

---

## Logical / Reasoning Questions (Continued)

101. What is the output of this code?

```javascript
if (null == undefined) {
    console.log("Equal");
} else {
    console.log("Not equal");
}
```

102. What is the output of this code?

```javascript
if (null === undefined) {
    console.log("Equal");
} else {
    console.log("Not equal");
}
```

103. What is the output of this code?

```javascript
if (0 == false) {
    console.log("Equal");
} else {
    console.log("Not equal");
}
```

104. What is the output of this code?

```javascript
if (0 === false) {
    console.log("Equal");
} else {
    console.log("Not equal");
}
```

105. What is the output of this code?

```javascript
if ("false") {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
```

106. What is the output of this code?

```javascript
let arr = [];
if (arr) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
```

107. What is the output of this code?

```javascript
let obj = {};
if (obj) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
```

108. What is the output of this code?

```javascript
if (1 == "1") {
    console.log("Equal");
} else {
    console.log("Not equal");
}
```

109. What is the output of this code?

```javascript
if (1 === "1") {
    console.log("Equal");
} else {
    console.log("Not equal");
}
```

110. What is the output of this code?

```javascript
let x;
if (x) {
    console.log("Defined");
} else {
    console.log("Undefined");
}
```

111. What is the output of this code?

```javascript
if (typeof x === "undefined") {
    console.log("Not defined");
} else {
    console.log("Defined");
}
```

112. What is the output of this code?

```javascript
let count = 0;
if (count) {
    console.log("Count is truthy");
} else if (count === 0) {
    console.log("Count is exactly zero");
}
```

113. What is the output of this code?

```javascript
let str = "0";
if (str) {
    console.log("String is truthy");
} else if (str === "0") {
    console.log("String is zero");
}
```

114. What is the output of this code?

```javascript
console.log(0 || "default");
console.log(1 || "default");
console.log(0 && "hello");
console.log(1 && "hello");
```

115. What is the output of this code?

```javascript
let name = "";
let displayName = name || "Guest";
console.log(displayName);
```

116. What is the output of this code?

```javascript
let name = "John";
let displayName = name || "Guest";
console.log(displayName);
```

117. What is the output of this code?

```javascript
let user = null;
let greeting = "Hello " + (user || "Stranger");
console.log(greeting);
```

118. What is the output of this code?

```javascript
let a = 5;
let result = a > 0 ? "Positive" : "Non-positive";
console.log(result);
```

119. What is the output of this code?

```javascript
let score = 75;
let grade = score >= 90 ? "A" : score >= 75 ? "B" : "C";
console.log(grade);
```

120. What is the output of this code?

```javascript
let isRaining = true;
!isRaining && console.log("Go outside");
isRaining && console.log("Stay inside");
```

---

## Programming Questions (Continued)

121. Write a program using `if-else-if` to categorize age groups: Child (0-12), Teen (13-19), Adult (20-59), Senior (60+).

122. Write a program to find the maximum of three numbers using nested `if-else`.

123. Write a program to check if a string is empty using truthy/falsy.

124. Write a program that uses a ternary operator to check if a number is even or odd.

125. Write a program using short-circuit `&&` to log a message only if a user is logged in.

126. Write a program using `||` to set a default username when none is provided.

127. Write a program to perform a simple calculator (add, subtract, multiply, divide) using `if-else-if` ladder.

128. Write a program to check if a number is a multiple of 2, 3, or both.

129. Write a program to determine the season based on month number (1-12).

130. Write a program to check if a password meets criteria (length >= 8 and contains a number).

131. Write a program using `switch` to print the number of days in a month (1-12).

132. Write a program to check if three sides form a valid triangle (sum of any two > third).

133. Write a program using guard clauses to validate user input before processing.

134. Write a program to calculate tax based on salary slabs using `if-else-if`.

135. Write a program to find whether a character is an alphabet, digit, or special character.

136. Write a program to determine the quadrant of a point (x, y) using nested `if-else`.

137. Write a program to check if a number is a palindrome (using reverse logic with if-else).

138. Write a program to simulate an ATM withdrawal with balance check and daily limit check.

139. Write a program to check if a student has passed (marks >= 40 in each of 3 subjects).

140. Write a program to find the middle number among three distinct numbers.

---

## Hard Questions (Continued)

141. What is the "dangling else" problem in JavaScript? How do you avoid it?

142. Explain the difference between short-circuit `&&` and `if` statement in terms of return value.

143. What happens when you use assignment `=` inside an `if` condition? Why is it dangerous?

144. Explain why `if (new Boolean(false))` runs but `if (false)` does not.

145. What is the output and why?

```javascript
let x = 10;
if (x = 0) {
    console.log("Zero");
} else {
    console.log("Non-zero");
}
```

146. How does JavaScript handle type coercion in `if (value)` conditions?

147. What is the difference between `if (value)` and `if (value === true)`?

148. Can you use `switch` with boolean conditions? Why or why not?

149. What is the output and why?

```javascript
if (!!"false") {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
```

150. What is the output and why?

```javascript
if (!!"") {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
```

151. Explain how `if (a && b)` is different from `if (a) { if (b) { ... } }`.

152. What is the output and why?

```javascript
let x = 1;
if (x) {
    function foo() { return "first"; }
} else {
    function foo() { return "second"; }
}
console.log(foo());
```

153. How would you refactor this deeply nested code?

```javascript
if (user) {
    if (user.role === "admin") {
        if (user.active) {
            if (user.verified) {
                showDashboard();
            }
        }
    }
}
```

154. What is the output and why?

```javascript
let val = "5";
if (val == 5) {
    console.log("Loose");
}
if (val === 5) {
    console.log("Strict");
}
```

155. Explain why this condition order fails:

```javascript
let marks = 95;
if (marks >= 50) {
    console.log("Pass");
} else if (marks >= 90) {
    console.log("Excellent");
}
```

156. What is the performance difference between `if-else-if` ladder and `switch`?

157. Can you use `||` inside an `if` condition to combine defaults? Show an example.

158. What is the output and why?

```javascript
let options = 0;
if (options || options === 0) {
    console.log("Valid options");
} else {
    console.log("No options");
}
```

159. How would you write a nested ternary that remains readable? When should you avoid it?

160. Explain the concept of fall-through in `switch` — when is it useful?

161. What is the output and why?

```javascript
let x = 3;
switch (x) {
    case 1:
    case 2:
        console.log("Small");
        break;
    case 3:
    case 4:
        console.log("Medium");
        break;
    default:
        console.log("Large");
}
```

162. How do you compare floating point numbers safely in `if` conditions?

163. What is the difference between `if (!condition)` and `if (condition === false)`?

164. How would you check if a variable exists (is defined) before using it in an `if` condition?

165. Write a single expression using short-circuit that calls functionA() if condition is true and functionB() if condition is false — without using `if-else` or ternary.

166. What is the output and why?

```javascript
let a, b = null, c = "hello";
if (a || b || c) {
    console.log("At least one is truthy");
} else {
    console.log("All are falsy");
}
```

167. Can you use `break` and `continue` inside an `if` statement? Where?

168. Explain how JavaScript's automatic semicolon insertion (ASI) can break `if` statements without braces.

169. What is the output and why?

```javascript
let value = "0";
if (value == false) {
    console.log("Coerced");
}
if (value === false) {
    console.log("Strict");
}
```

170. Write a program to solve the FizzBuzz problem using `if-else-if` ladder.

---

## Expert Level Questions

171. How does V8 or other JavaScript engines optimize `if-else` conditions?

172. Explain the difference between `if (value)` and `Boolean(value)`.

173. What happens when you use `return`, `break`, or `throw` inside different branches of `if-else`?

174. How does hoisting affect functions declared inside `if-else` blocks?

175. Explain the Concept "The Crockford Switch Statement" — why does Douglas Crockford avoid switch?

176. How would you implement pattern matching in JavaScript using only `if-else`?

177. What is the output and why?

```javascript
function test() {
    if (true) {
        let x = 5;
    }
    return typeof x;
}
console.log(test());
```

178. What is the output and why?

```javascript
function test() {
    if (true) {
        var x = 5;
    }
    return typeof x;
}
console.log(test());
```

179. How do you handle multiple asynchronous results using `if-else` conditions?

180. Compare and contrast: polymorphism through `if-else` vs polymorphism through OOP.

---

## Tricky Output Based Questions

181. What is the output?

```javascript
console.log(false || "hello");
console.log("" || "world");
console.log(null || "default");
```

182. What is the output?

```javascript
console.log("hello" && "world");
console.log(0 && "world");
console.log(null && "hello");
```

183. What is the output?

```javascript
let x = 0;
let y = x || 10;
let z = x ?? 10;
console.log(y, z);
```

184. What is the output?

```javascript
if (-1) {
    console.log("Negative truthy");
} else {
    console.log("Falsy");
}
```

185. What is the output?

```javascript
if (Infinity) {
    console.log("Infinity is truthy");
} else {
    console.log("Infinity is falsy");
}
```

186. What is the output?

```javascript
let x = 0;
if (x++) {
    console.log("x++ is truthy");
} else {
    console.log("x++ is falsy");
}
console.log("x after:", x);
```

187. What is the output?

```javascript
let x = 0;
if (++x) {
    console.log("++x is truthy");
} else {
    console.log("++x is falsy");
}
console.log("x after:", x);
```

188. What is the output?

```javascript
let grade = "B";
switch (grade) {
    case "A": console.log("Excellent"); break;
    case "B": console.log("Good"); break;
    case "C": console.log("Average"); break;
    default: console.log("Need improvement");
}
```

189. What is the output?

```javascript
let a = 5, b = 5;
if (a = b) {
    console.log("Equal");
} else {
    console.log("Not equal");
}
```

190. What is the output?

```javascript
let text = "JavaScript";
if (text.indexOf("Java")) {
    console.log("Found");
} else {
    console.log("Not found");
}
```

---

## Complete Bonus Interview Tips

- Practice writing conditions without curly braces to understand block scope.
- Always think about edge cases (negative numbers, zero, empty strings).
- Be comfortable explaining truthy/falsy behavior in conditions.
- In interviews, prefer `===` over `==` inside conditions.
- Nested `if-else` can often be simplified with logical operators.
- Remember: order of conditions in a ladder determines which block runs first.
- Know the 6 falsy values by heart — they are asked in almost every interview.
- Understand that `switch` uses strict comparison (`===`), not loose (`==`).
- Short-circuit evaluation is a favorite interview topic — practice `&&` and `||` logic.
- The ternary operator returns a value; `if-else` does not — this is a key distinction.
- `let` and `const` inside `if` blocks are not accessible outside (block scope).
- Use guard clauses to flatten nested code — interviewers love clean code.
- The dangling else problem shows why curly braces are important.
- `if (x = value)` is a common bug — always use `===` in conditions.
- For range-based conditions, `if-else-if` ladder is better than `switch`.
- For specific value comparisons, `switch` is often cleaner than a ladder.
- Memorize this trick: `if (!!value)` converts any value to its boolean equivalent.
- Be ready to explain type coercion in `if` conditions.
- Practice writing the same logic using `if-else`, ternary, and short-circuit — shows versatility.
