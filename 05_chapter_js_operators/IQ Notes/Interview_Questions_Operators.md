# JavaScript Operators – Interview Questions

## Easy Questions

1. What is an operator in JavaScript?
2. What is the difference between `=` and `==`?
3. What is the difference between `==` and `===`?
4. What does `&&` mean?
5. What does `||` mean?
6. What does `!` mean?
7. What is the result of `10 + 5`?
8. What is the result of `10 % 3`?
9. What is the use of `typeof`?
10. What is the difference between `null` and `undefined`?

## Medium Questions

11. Why is `10 === "10"` false?
12. Why is `10 == "10"` true?
13. What is the difference between `a++` and `++a`?
14. What is a ternary operator?
15. Write a ternary expression to check if a number is even or odd.
16. What will be the output of `console.log(true && false)`?
17. What will be the output of `console.log(true || false)`?
18. What will be the output of `console.log(!true)`?
19. What is short-circuiting in logical operators?
20. What is the difference between loose equality and strict equality?

## Logical / Reasoning Questions

21. What is the output of `console.log(5 > 3 && 2 < 4)`?
22. What is the output of `console.log(5 > 3 || 2 > 4)`?
23. What is the output of `console.log(!(5 > 3))`?
24. What is the output of `console.log(0 == false)`?
25. What is the output of `console.log(0 === false)`?
26. What is the output of `console.log("" == 0)`?
27. What is the output of `console.log("" === 0)`?
28. What is the output of `console.log(null == undefined)`?
29. What is the output of `console.log(null === undefined)`?
30. What is the output of `console.log(null == 0)`?

## Programming Questions

31. Write a program to check whether a number is positive, negative, or zero using ternary operator.
32. Write a program to check whether a person is eligible to vote using logical operators.
33. Write a program to compare two numbers and print the greater one.
34. Write a program to find whether a number is divisible by 2 and 3.
35. Write a program to print the remainder of two numbers using modulus operator.
36. Write a program to swap two values using assignment operators.
37. Write a program to check whether a string is empty using logical operators.
38. Write a program to check if a user is logged in and has admin access.
39. Write a program to check if a number is even using the `%` operator.
40. Write a program to use `&&` and `||` to implement a simple login condition.

## Hard Questions

41. Why does `null == 0` return `false` but `null >= 0` return `true`?
42. Why is `==` considered dangerous in JavaScript?
43. Explain how JavaScript handles type coercion in comparison operators.
44. What happens when you use `+` with numbers and strings together?
45. How does short-circuit evaluation work with `&&` and `||`?
46. Explain the difference between `a = b` and `a === b` in a real-world example.
47. What is the output of `console.log(2 + 3 + "4")`? Explain.
48. What is the output of `console.log("4" + 2 + 3)`? Explain.
49. How would you avoid confusion while using comparison operators in real projects?
50. Explain why `false == 0` is `true` in JavaScript.

## Bonus Interview Tips

- Prefer `===` over `==` in interviews and real code.
- Always explain your reasoning clearly.
- Be ready to discuss type coercion and truthy/falsy values.
- Practice both syntax-based and logic-based questions.

---

## Easy Questions (Continued)

51. What is the `typeof` operator used for?

52. What is the result of `typeof "Hello"`?

53. What is the result of `typeof 10`?

54. What is the result of `typeof true`?

55. What is the result of `typeof undefined`?

56. What is the result of `typeof null`? Is it correct?

57. What is the result of `typeof []` (empty array)?

58. What is a template literal in JavaScript?

59. What symbol is used for template literals?

60. How do you embed a variable in a template literal?

61. What is the `??` (nullish coalescing) operator?

62. What is the difference between `??` and `||`?

63. What is the result of `null ?? "default"`?

64. What is the result of `0 ?? 5`?

65. What is the result of `0 || 5`?

66. What is a bitwise operator?

67. Name two bitwise operators.

68. What is the result of `typeof function() {}`?

69. Is a string a primitive or reference data type?

70. Is an array a primitive or reference data type?

71. What is the result of `"Hello" + " World"`?

72. What is the result of `5 + "5"`?

73. What does the `**` operator do in JavaScript?

74. What is the result of `4 ** 3`?

75. What is the result of `10 % 3`?

76. What is the result of `++a` if `a = 5`?

77. What is the result of `a++` if `a = 5`?

78. What is `NaN` in JavaScript?

79. Is `NaN` a data type?

80. What is a BigInt in JavaScript?

---

## Medium Questions (Continued)

81. What is the output of `console.log(2 + 3 + "4")`? Explain step-by-step.

82. What is the output of `console.log("4" + 2 + 3)`? Explain step-by-step.

83. What is the output of `console.log("Hello" + 5 + 5)`?

84. What is the output of `console.log(5 + 5 + "Hello")`?

85. What is the difference between primitive and reference data types?

86. Why is `typeof null` returning `"object"`?

87. Why is `typeof []` returning `"object"`?

88. How do you check if a value is an array?

89. What is the difference between `String(10)` and `10 + ""`?

90. What is the difference between `Number("10")` and `+"10"`?

91. What is the output of `console.log(1 + "2" + 3 - 1)`?

92. What is the output of `console.log(10 - "5")`?

93. What is the output of `console.log(10 - "abc")`?

94. What is the difference between pre-increment (`++a`) and post-increment (`a++`)?

95. What is the output of `console.log(++a + a++)` when `a = 10`?

96. What is the output of `console.log(a++ + ++a)` when `a = 10`?

97. What is the output of `console.log(++a + ++a)` when `a = 10`?

98. What is the output of `console.log(--a + a--)` when `a = 37`?

99. What is the output of `console.log(a-- + --a)` when `a = 5`?

100. What is the output of `console.log(--a + a++)` when `a = 10`?

101. What is the nested ternary operator?

102. When should you use nested ternary over `if-else-if` ladder?

103. What is the output of this code?

```javascript
let statusCode = 400;
let category = statusCode < 300 ? "Success" :
    statusCode < 400 ? "Redirect" :
        statusCode < 500 ? "Client Error" : "Internal Error";
console.log(category);
```

104. What is the output of this code?

```javascript
let temp = 25;
let condition = temp >= 40 ? "Very Hot" :
    temp >= 30 ? "Hot" :
        temp >= 20 ? "Warm" : "Cold";
console.log(condition);
```

105. What is the output of `console.log(null ?? "default")` vs `console.log(null || "default")`?

106. What is the output of `console.log("" ?? "default")` vs `console.log("" || "default")`?

107. What is the output of `console.log(0 ?? 10)` vs `console.log(0 || 10)`?

108. What is the output of `console.log(false ?? true)` vs `console.log(false || true)`?

109. What is the output of `console.log(10 >= 10)` and `console.log(10 <= 10)`?

110. What is the output of `console.log(10 != "10")` and `console.log(10 !== "10")`?

111. What does the `+=` operator do in JavaScript?

112. What does the `%=` operator do? Give an example.

113. What does the `**=` operator do? Give an example.

114. What is the output of `let x = 10; x -= 3; console.log(x)`?

115. What is the difference between `console.log("Hello", "World")` and `console.log("Hello" + "World")`?

116. What is a Symbol in JavaScript?

117. What is the output of `console.log(typeof Symbol("id"))`?

118. What is the output of `console.log(undefined == null)`?

119. What is the output of `console.log(undefined === null)`?

120. What is the output of `console.log(10 > 20 && 5 < 10)`?

---

## Logical / Reasoning Questions (Continued)

121. What is the output and why?

```javascript
console.log(null == 0);
console.log(null >= 0);
console.log(null > 0);
```

122. Why does `null >= 0` return `true` but `null == 0` returns `false`?

123. What is the output and why?

```javascript
console.log("" == 0);
console.log("" === 0);
console.log("0" == 0);
console.log("0" === 0);
```

124. What is the output and why?

```javascript
console.log("" == "0");
console.log("" === "0");
```

125. What is the output and why?

```javascript
let a = 100;
let result = a++ + ++a + a++ + ++a;
console.log(result, a);
```

126. What is the output and why?

```javascript
let i = 10;
let result = i++ > 10 ? i++ : ++i;
console.log(result, i);
```

127. What is the output and why?

```javascript
console.log(typeof NaN);
console.log(NaN == NaN);
console.log(NaN === NaN);
```

128. What is the output and why?

```javascript
console.log(!!"");
console.log(!!"Hello");
console.log(!!0);
console.log(!!1);
```

129. What is the output and why?

```javascript
console.log(1 + 2 + "3" + 4 + 5);
```

130. What is the output and why?

```javascript
console.log(10 - "5" - "2");
```

131. What is the output and why?

```javascript
console.log(true + true);
console.log(true + false);
console.log(10 + true);
```

132. What is the output and why?

```javascript
let x = 5;
let y = x++ + ++x + x++;
console.log(x, y);
```

133. What is the output and why?

```javascript
console.log(3 ** 2 ** 1);
```

134. What is the output and why?

```javascript
console.log(!"true");
console.log(!"false");
console.log(!"");
console.log(!"0");
```

135. What is the output and why?

```javascript
let a = "10";
let b = 10;
console.log(a + b);
console.log(a - b);
```

136. What is the output and why?

```javascript
console.log(10 && 20);
console.log(0 && 20);
console.log(10 || 20);
console.log(0 || 20);
```

137. What is the output and why?

```javascript
console.log("" && "hello");
console.log("" || "hello");
console.log(" " && "hello");
```

138. What is the output and why?

```javascript
console.log(null || undefined || 0 || "hello");
```

139. What is the output and why?

```javascript
console.log(1 && 2 && 3);
console.log(1 && 0 && 3);
```

140. What is the output and why?

```javascript
let value = "10.00";
console.log(value == 10);
console.log(value === 10);
```

---

## Programming Questions (Continued)

141. Write a program to check if a number is even or odd using the ternary operator.

142. Write a program to calculate the absolute value of a number using a ternary operator.

143. Write a program that uses `??` to provide a default value when a variable is `null`.

144. Write a program using nested ternary to categorize HTTP status codes (1xx, 2xx, 3xx, 4xx, 5xx).

145. Write a program to validate API response status code using a ternary operator.

146. Write a program to select the browser mode (headed/headless) using a ternary operator.

147. Write a program to switch between production and staging URLs using a ternary operator.

148. Write a program to check SLA compliance using comparison and ternary operators.

149. Write a program that uses `+=` to build a string step by step.

150. Write a program to calculate compound growth using `**=` operator.

151. Write a program to swap two numbers without a temporary variable (using `+` and `-` assignment).

152. Write a program to find the maximum of two numbers using a ternary operator.

153. Write a program that uses template literals to format a test result message.

154. Write a program to check if a number is divisible by 3 and 5 using logical operators.

155. Write a program to toggle a boolean value using `!` operator.

156. Write a program that demonstrates short-circuit evaluation to avoid calling a function.

157. Write a program to check if a value is an array using `Array.isArray()`.

158. Write a program to validate form inputs (username and password) using logical operators.

159. Write a program to convert a number to a string using string concatenation.

160. Write a program to calculate the price after discount using assignment operators.

161. Write a program to generate a greeting message based on time of day using a ternary operator.

162. Write a program to check if a string contains a substring using `includes()` with a ternary.

163. Write a program to map boolean values to "Pass"/"Fail" strings using a ternary operator.

164. Write a program to demonstrate the difference between `==` and `===` with different data types.

165. Write a program that uses `??` to safely access nested properties without breaking.

---

## Hard Questions (Continued)

166. Why is `typeof null` equal to `"object"`? Explain the historical reason.

167. What is the difference between `+a` (unary plus) and `Number(a)`?

168. Explain how the `+` operator decides whether to add or concatenate.

169. Why is `NaN === NaN` `false`? How do you check if a value is `NaN`?

170. What is the output of `console.log(1 < 2 < 3)`? Why?

171. What is the output of `console.log(3 < 2 < 1)`? Why?

172. Explain the difference between `a++` and `++a` in terms of operator precedence.

173. What is operator precedence? Give an example where it matters.

174. Why does `console.log(0.1 + 0.2 === 0.3)` return `false`? How do you fix it?

175. How does JavaScript handle type coercion in `==` compared to `===`?

176. What is the ToPrimitive algorithm in JavaScript?

177. Explain how `valueOf()` and `toString()` affect comparison operators.

178. What is the output and why?

```javascript
let a = 10;
console.log(a++ + a);
console.log(++a - a);
```

179. Compare and contrast `??`, `||`, and `&&` — when to use which?

180. What is the output of `console.log(10, 20, 30)` vs `console.log(10 + 20 + 30)`?

181. Explain how the `typeof` operator handles `null`, `undefined`, `[]`, and `function`.

182. What happens when you compare an object with a primitive using `==`?

183. Explain the difference between `undefined` and `null` using `==` and `===`.

184. What is the output and why?

```javascript
console.log([1, 2] == [1, 2]);
console.log([1, 2] === [1, 2]);
```

185. How do you compare two arrays for equality in JavaScript?

186. What is the difference between `a = b` and `a === b`?

187. Why does `10 > 5 > 2` evaluate to `false`?

188. What is the output and why?

```javascript
let x = "5";
console.log(x++);
console.log(x);
```

189. How does the `**` operator evaluate `2 ** 3 ** 2`?

190. Explain the concept of "short-circuit evaluation" with practical examples in testing.

---

## Expert Level Questions

191. Explain the difference between `ToNumber`, `ToPrimitive`, and `ToString` abstract operations.

192. How does the `==` operator use `ToPrimitive` when comparing an object to a primitive?

193. What is the output and why?

```javascript
console.log([] == 0);
console.log([] == false);
console.log([] == "");
```

194. What is the output and why?

```javascript
console.log({} == "[object Object]");
console.log({} == 0);
console.log({}.toString());
```

195. Explain how JavaScript handles `null >= 0` being `true` but `null == 0` being `false`.

196. What is the internal difference between `a++` and `a += 1`?

197. How does V8 optimize common operator patterns like `++a` in loops?

198. Explain how the comma operator `,` works in JavaScript — give an example.

199. What is the output and why?

```javascript
let a = (1, 2, 3);
console.log(a);
```

200. How would you implement a custom `valueOf()` to change comparison behavior of an object?

201. What is the difference between `Object.is()` and `===`?

202. Show an example where `Object.is()` gives a different result than `===`.

203. What is the output of `Object.is(NaN, NaN)`?

204. What is the output of `Object.is(0, -0)`?

205. Explain how `typeof` works with undeclared variables — is it safe to use?

---

## Automation Testing — Scenario Based Questions

206. You are writing an API test. How would you use a ternary operator to validate response status codes?

207. Your test needs to run in different environments. Write a ternary expression to pick the base URL.

208. You need to check if an element exists before interacting with it. How would you use `&&` short-circuit for this?

209. Your test has a configurable timeout. Use `??` to provide a default when the config is `null`.

210. Write a test assertion that uses `!==` to check if a value is not undefined.

211. You need to log whether a test passed or failed. Use a ternary operator to generate the message.

212. Your test data might be empty. Use `||` to provide fallback test data.

213. How would you use the `typeof` operator to validate that a response field is a string?

214. Write an expression that checks if a response time is within SLA using comparison operators.

215. Your test framework has headed and headless modes. Use a ternary to switch between them.

---

## Tricky Output Based Questions

216. What is the output?

```javascript
console.log(!!"false" === !!"true");
```

217. What is the output?

```javascript
let a = 37;
let result = --a + a--;
console.log(result, a);
```

218. What is the output?

```javascript
console.log(0 || "" || null || undefined || "last");
```

219. What is the output?

```javascript
console.log(1 && 2 && null && 4 && 5);
```

220. What is the output?

```javascript
let x = 5;
let y = x++ + ++x + x++ + ++x;
console.log(x, y);
```

221. What is the output?

```javascript
console.log(typeof typeof 10);
```

222. What is the output?

```javascript
console.log(10 + "10" - 5);
```

223. What is the output?

```javascript
console.log(3 + 4 + "5" - 2);
```

224. What is the output?

```javascript
console.log(+"10" + +"20");
```

225. What is the output?

```javascript
console.log("5" - "3" + "2");
```

226. What is the output?

```javascript
let a = 10;
console.log(++a + a++ + a);
```

227. What is the output?

```javascript
console.log(null || undefined ?? "hello");
```

228. What is the output?

```javascript
console.log(!!(null || undefined || 0));
```

229. What is the output?

```javascript
console.log([] + []);
console.log([] + {});
console.log({} + []);
```

230. What is the output?

```javascript
let a = 1;
let b = ++a + a++ + ++a;
console.log(a, b);
```

---

## Complete Bonus Interview Tips

- Prefer `===` over `==` in interviews and real code.
- Always explain your reasoning clearly.
- Be ready to discuss type coercion and truthy/falsy values.
- Practice both syntax-based and logic-based questions.
- **Know the 6 falsy values**: `false`, `0`, `""`, `null`, `undefined`, `NaN`.
- **Remember `typeof null` returns `"object"`** — this is a classic interview question.
- **Pre-increment vs Post-increment** (`++a` vs `a++`) is a favorite topic.
- **Short-circuit evaluation** with `&&` and `||` shows deep understanding.
- **Template literals** with `${}` are preferred over string concatenation in modern JS.
- **`??` vs `||`** — understand when to use each (0 vs null distinction).
- **Operator precedence** — when in doubt, use `()` to be explicit.
- **NaN is the only value not equal to itself** — use `Number.isNaN()` to check.
- **`null >= 0` is `true` but `null == 0` is `false`** — this trick question appears often.
- **`0.1 + 0.2 !== 0.3`** — floating point precision is a common interview topic.
- **Primitive vs Reference** — understand how values are copied and compared.
- **Nested ternary** is powerful but use sparingly — readability matters.
