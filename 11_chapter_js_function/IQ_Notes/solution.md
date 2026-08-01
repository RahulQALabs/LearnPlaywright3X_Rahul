# Interview Questions — Solutions

## Easy Questions (1–15)

**1. What is a function in JavaScript?**
A function is a reusable block of code that performs a specific task. You define it once with `function`, then call it whenever you need that behavior. For example, `function result(scr) { return scr > 70 ? "pass" : "fail"; }` is a function that converts any score into a pass/fail verdict.

**2. Why do we use functions?**
For reusability and maintainability. Instead of writing the same logic repeatedly (like checking `score > 70` for every score), you write it once inside a function and call it many times. If the logic changes, you update it in only one place.

**3. How do you declare a function?**
Using the `function` keyword: `function greet() { console.log("Hi"); }`. The keyword, the name, parentheses for parameters, and curly braces for the body. Note that declaring only *creates* it — nothing runs until you call it.

**4. How do you call a function?**
By using its name followed by parentheses: `greet();`. The `()` triggers execution. If the function takes parameters, pass them inside: `result(80);`.

**5. What is the difference between defining a function and calling it?**
Defining creates the function (the code doesn't run). Calling executes the code inside. From `02_function.js`: defining `function test() {...}` does nothing visible, but `sayHello();` actually prints "Hello Rahul".

**6. What happens if you call a function that only `console.log()`s something and then print its return value?**
The log runs, but the function returns `undefined`, so printing the call gives `undefined`. `console.log(sayHello())` prints "Hello Rahul" (from inside) followed by `undefined`.

**7. What is a parameter?**
A variable listed in the function definition that acts as a placeholder for input. In `function greetByName(name)`, `name` is the parameter — a slot that receives whatever value is passed when called.

**8. What is an argument?**
The actual value passed when calling the function. In `greetByName("Rahul")`, `"Rahul"` is the argument — it fills the `name` parameter.

**9. What does the `return` keyword do?**
It sends a value back to the caller and ends the function. `return "Hello"` hands the string "Hello" back, so `let result = sayHello()` stores it. Without `return`, the function returns `undefined`.

**10. Can a function have multiple parameters?**
Yes. Separate them with commas: `function sumOfTwoNumbers(a, b) { return a + b; }` takes two parameters and adds them.

**11. Can a function return multiple values?**
Not directly — `return` returns a single value. But you can return an array or object: `return [a, b];` or `return {sum: a + b};`.

**12. What are the 4 types of functions based on parameters and return type?**
1. No parameter, no return
2. With parameter, no return
3. No parameter, with return
4. With parameter, with return

Examples: `greet()` (type 1), `greetByName(name)` (type 2), `greetByHi()` (type 3), `sumOfTwoNumbers(a, b)` (type 4).

**13. What is a function without parameters and without a return type called?**
Type 1 — like `function greet() { console.log("Hi........"); }`. It takes no input and returns nothing; it just performs an action (usually printing).

**14. What does a function return if it has no `return` statement?**
`undefined`. The function still runs its body, but there's nothing to hand back to the caller.

**15. What is a function expression?**
A function stored in a variable: `const greet2 = function(name) { return \`Hello! ${name}\`; };`. The function itself is anonymous (no name) — the variable name is how you call it: `greet2("Lucky")`.

---

## Medium Questions (16–32)

**16. What is the output of this code?**
```javascript
function test() {
    console.log("Hello!");
}
console.log(test());  // "Hello!" then undefined
```
The call runs the body (prints "Hello!") and since there's no `return`, `test()` evaluates to `undefined`, which `console.log` prints second.

**17. What is the output of this code?**
```javascript
function sayHello() {
    console.log("Hi");
    return "Hello";
}
console.log(sayHello());  // "Hi" then "Hello"
```
`console.log` inside runs first (prints "Hi"), then `return "Hello"` hands back the value, so the outer `console.log` prints "Hello".

**18. What is the difference between `console.log()` inside a function and `return` inside a function?**
`console.log()` prints to the console but returns nothing — the caller can't use the value. `return` hands the value back so the caller can store or use it. `console.log` is a side effect; `return` is the function's output.

**19. What is a template literal? How do you use variables inside it?**
A template literal is a string wrapped in backticks `` ` `` that supports `${}` interpolation: `` return `Hello! ${name}`; ``. Variables are inserted directly inside `${}` — no `+` concatenation needed.

**20. What is the output of this code?**
```javascript
function greetByName(name) {
    return `Hello! ${name}`;
}
console.log(greetByName("Saanvi"));  // "Hello! Saanvi"
```
The template literal fills `name` with "Saanvi", producing the string "Hello! Saanvi".

**21. What is the difference between a function declaration and a function expression?**
A declaration uses the `function` keyword with a name: `function greet1(name) {...}`. An expression assigns an anonymous function to a variable: `const greet2 = function(name) {...}`. Declarations are hoisted (usable before their line), expressions are not.

**22. What is an arrow function? What is its syntax?**
A shorter function syntax: `(parameter) => expression`. Example: `const greet2 = (name) => \`Hello ${name}!\`;`. You drop `function`, the name, and for single expressions also drop `return` and `{}` — the result is returned implicitly.

**23. What is the output of this code?**
```javascript
const doubleB = () => "Staging";
console.log(doubleB());  // "Staging"
```
An arrow with empty parentheses `()` takes no parameters. Called with `()`, it returns the string "Staging" implicitly.

**24. How do you write an arrow function with one parameter?**
`const doubleA = (a) => a * 2;` — parentheses around the single parameter are optional: `const doubleA = a => a * 2;` also works.

**25. How do you write an arrow function with multiple statements (multiline)?**
Wrap the body in curly braces and use an explicit `return`:
```javascript
const getResult = (score) => {
    if (score > 70) return "pass";
    return "fail";
}
```

**26. Can an arrow function take no parameters?**
Yes — use empty parentheses: `const doubleB = () => "Staging";`. Without the parentheses it would be invalid syntax.

**27. What is the output of this code?**
```javascript
const getResult = (score) => {
    if (score > 70) return "pass";
    return "fail";
}
console.log(getResult(98));  // "pass"
console.log(getResult(50));  // "fail"
```
98 > 70 → "pass". 50 > 70 → falls through to "fail".

**28. What happens if you try to declare the same function name twice — once as a function and once as a `const` arrow function?**
You get a `SyntaxError`. From `10_arrow_function.js`:
```javascript
function doubleMe(a) { return a * 2; }
const doubleMe = (a) => a * 2;  // SyntaxError: Identifier 'doubleMe' has already been declared
```
The name is already taken by the function declaration, so the `const` can't reuse it.

**29. What is an IIFE?**
An Immediately Invoked Function Expression — an anonymous function wrapped in parentheses and immediately called: `(function () { console.log("Anonymous Function"); })();`. The trailing `()` invokes it right away.

**30. Why would you use an IIFE?**
For one-time initialization that runs immediately — like setting up test data, config, or logging at the start of a test suite. It runs without needing an explicit call, and it keeps the logic contained (no global name pollution).

**31. What is the output of this code?**
```javascript
(function () {
    console.log("Anonymous Function");
})();  // "Anonymous Function"
```
The function is defined, wrapped in `(...)` so it's treated as an expression, and the trailing `()` invokes it instantly — printing "Anonymous Function".

**32. What is the difference between a normal function call and an IIFE?**
A normal function must be named and explicitly called later (`name1();`). An IIFE is anonymous, wrapped in parentheses, and calls itself immediately via the trailing `()` — no separate call step needed.

---

## Logical / Reasoning Questions (33–42)

**33. What is the output and why?**
```javascript
function result(scr) {
    return scr > 70 ? "pass" : "fail";
}
console.log(result(70));  // "fail"
```
70 > 70 is false (not greater than, only equal), so the ternary picks "fail". The comparison is strictly `>`, not `>=`.

**34. What is the output and why?**
```javascript
function result(scr) {
    return scr > 70 ? "pass" : "fail";
}
console.log(result(80));  // "pass"
console.log(result(50));  // "fail"
```
80 > 70 is true → "pass". 50 > 70 is false → "fail". Same function, different inputs, different outputs — that's the whole point of parameters.

**35. What is the output and why?**
```javascript
function greet() {
    console.log("Hi........");
}
let output = greet();  // prints "Hi........"
console.log(output);   // undefined
```
`greet()` runs the body (prints "Hi........") but returns nothing, so `output` gets `undefined`. Type 1 function: no parameter, no return.

**36. What is the output and why?**
```javascript
function greetByName(name) {
    console.log("Hi.." + name);
}
let result = greetByName("Rahul");  // prints "Hi..Rahul"
console.log(result);                // undefined
```
The parameter works and the greeting prints, but there's no `return` (Type 2), so `result` is `undefined`.

**37. What is the output and why?**
```javascript
function sumOfTwoNumbers(a, b) {
    return a + b;
}
let result = sumOfTwoNumbers(4, 3);
console.log(result);  // 7
```
Type 4 function — parameters and return. `a` gets 4, `b` gets 3, `4 + 3 = 7` is returned and stored in `result`.

**38. What is the output and why?**
```javascript
function name1() {
    console.log("Hi I am Rahul Gupta!");
}
name1();  // "Hi I am Rahul Gupta!"
```
A normal function that must be called. Calling `name1()` executes the body, which prints the message once.

**39. What is the output and why?**
```javascript
(() => {
    console.log("Setup Complete");
})();  // "Setup Complete"
```
This is an arrow IIFE — the arrow function is wrapped in parentheses and immediately invoked with `()`. It runs the moment the line executes, printing "Setup Complete".

**40. Why do we not need to call an IIFE?**
Because the trailing `()` after the closing parenthesis invokes it immediately. The function is wrapped in `(...)` to make it an expression, then called on the spot — there's no name to call later and no need to.

**41. What is the difference between `console.log(sayHello())` and `sayHello()` when the function only logs and has no return?**
Both run the function body (printing whatever it logs). The difference: `sayHello()` alone just runs it, while `console.log(sayHello())` additionally prints the function's return value — which is `undefined` since there's no `return`.

**42. Can an arrow function be used before it is declared? Why or why not?**
No — arrow functions are stored in `const` variables, and `const` declarations are not hoisted (they exist in a temporal dead zone until the line executes). Function declarations, by contrast, are hoisted and can be called earlier in the file.

---

## Programming Questions (43–55)

**43. Write a program to create a function that returns "pass" if a score is greater than 70, otherwise "fail".**
```javascript
function result(scr) {
    return scr > 70 ? "pass" : "fail";
}
console.log(result(80));  // "pass"
console.log(result(50));  // "fail"
```
Type 4 function — takes a score, returns the verdict using a ternary.

**44. Write a function that takes a name and greets the person using a template literal.**
```javascript
function greetByName(name) {
    return `Hello! ${name}`;
}
console.log(greetByName("Saanvi"));  // "Hello! Saanvi"
```
Template literal interpolation with `${name}` — no string concatenation needed.

**45. Write a function that takes two numbers and returns their sum.**
```javascript
function sumOfTwoNumbers(a, b) {
    return a + b;
}
let result = sumOfTwoNumbers(4, 3);
console.log(result);  // 7
```

**46. Write a function with no parameters and no return type that prints "Hello".**
```javascript
function greet() {
    console.log("Hello");
}
greet();  // "Hello"
```
Type 1 function — no params, no return, just a side effect.

**47. Write a function with a parameter but no return type that prints a greeting.**
```javascript
function greetByName(name) {
    console.log("Hi.." + name);
}
greetByName("Rahul");  // "Hi..Rahul"
```
Type 2 function — uses the parameter but returns nothing.

**48. Write a function with no parameters but a return type that returns a fixed string.**
```javascript
function greetByHi() {
    return "Hi";
}
let res = greetByHi();
console.log(res);  // "Hi"
```
Type 3 function — no input, returns a constant value.

**49. Write a function with parameters and a return type that calculates a student's grade.**
```javascript
function getResult(score) {
    if (score > 70) return "pass";
    return "fail";
}
console.log(getResult(98));  // "pass"
console.log(getResult(50));  // "fail"
```
Type 4 function — full input → processing → output flow.

**50. Write the same greeting function 3 ways: normal function, function expression, and arrow function.**
```javascript
// Normal function
function greet1(name) {
    return `Hello! ${name}`;
}

// Function expression
const greet2 = function(name) {
    return `Hello! ${name}`;
}

// Arrow function
const greet3 = (name) => `Hello ${name}!`;

console.log(greet1("Rahul"));  // "Hello! Rahul"
console.log(greet2("Lucky"));  // "Hello! Lucky"
console.log(greet3("Saanvi")); // "Hello Saanvi!"
```
All three produce the same kind of result — just different syntax.

**51. Write an arrow function that doubles a number.**
```javascript
const doubleA = (a) => a * 2;
console.log(doubleA(10));  // 20
```
Single expression, so the `return` and braces are dropped — implicit return.

**52. Write an arrow function that takes a status code and prints "Request is fine!" if it is between 200 and 300.**
```javascript
const validateStatusCode = (status) => {
    if (status >= 200 && status <= 300)
        console.log("Request is fine!");
}
validateStatusCode(200);  // "Request is fine!"
validateStatusCode(404);  // (nothing printed)
```
The real-world API validation pattern from `11_api_real.js`.

**53. Write an IIFE that prints "Anonymous Function".**
```javascript
(function () {
    console.log("Anonymous Function");
})();  // "Anonymous Function"
```
Wrapped in parentheses + trailing `()` = runs immediately.

**54. Write an arrow IIFE that prints "Setup Complete".**
```javascript
(() => {
    console.log("Setup Complete");
})();  // "Setup Complete"
```
The arrow version of an IIFE — "arrow crazy."

**55. Write a function that converts a score to "pass"/"fail" using a ternary operator.**
```javascript
function result(scr) {
    return scr > 70 ? "pass" : "fail";
}
console.log(result(80));  // "pass"
console.log(result(70));  // "fail"
```
The ternary `scr > 70 ? "pass" : "fail"` picks the value in a single expression.

---

## Hard Questions (56–70)

**56. What is the difference between a function declaration and a function expression in terms of hoisting?**
Function declarations are hoisted — they can be called before the line where they're defined. Function expressions (stored in `const`) are not — the variable is in a temporal dead zone until its line runs, so calling before that line throws a `ReferenceError`.

**57. What is the difference between an arrow function and a normal function?**
Arrow functions have shorter syntax with an implicit return for single expressions, they don't have their own `this` (they inherit it from the surrounding scope), and they can't be used as constructors. Normal functions have their own `this` and can be used with `new`.

**58. When would you use an arrow function over a normal function?**
For short, single-purpose transformations and callbacks — like `(status) => status >= 200 && status <= 300`. Arrow functions are concise and perfect for inline logic. Use normal functions for methods that need their own `this`.

**59. What is the `this` keyword? How does it behave differently in arrow functions vs normal functions?**
`this` refers to the object the function belongs to at call time. In a normal function, `this` is dynamic (depends on how it's called). Arrow functions don't bind their own `this` — they inherit it from the enclosing scope, which makes them predictable in callbacks.

**60. What is the difference between `return` and `console.log()` in a function?**
`return` sends a value back to the caller so it can be stored or used; it ends the function. `console.log()` just prints to the console — the caller receives `undefined` either way. You can have both: `console.log("Hi"); return "Hello";` prints and returns.

**61. Why can't you use `break` inside a function that is not a loop?**
`break` is a control-flow statement for loops (and `switch`). A function body is not a loop — `break` outside a loop is a `SyntaxError`. This is also why you can't `break` inside `forEach` (its callback is a function, not a loop).

**62. What is a pure function? Give an example.**
A pure function always returns the same output for the same input and has no side effects (no printing, no modifying external state). `function sum(a, b) { return a + b; }` is pure — `sum(4, 3)` is always `7` and nothing else is touched.

**63. What is the default return value of a function?**
`undefined`. Every function that reaches the end without a `return` (or has a bare `return;`) returns `undefined` to the caller.

**64. How do you write a function that accepts an array and returns its length?**
```javascript
function getLength(arr) {
    return arr.length;
}
console.log(getLength(["chrome", "firefox", "ie"]));  // 3
```

**65. How do you use a function as a callback?**
Pass it as an argument to another function, which calls it later:
```javascript
function validate(score, callback) {
    callback(score);
}
validate(85, (s) => console.log(s > 70 ? "pass" : "fail"));  // "pass"
```
This is how array methods like `find`, `map`, and `filter` work.

**66. What is the purpose of `arguments` object in a normal function? Is it available in arrow functions?**
`arguments` holds all values passed to a normal function, even beyond declared parameters. Arrow functions do **not** have their own `arguments` object — you'd use rest parameters (`...args`) instead.

**67. What happens if you call a function with fewer arguments than parameters?**
The missing parameters get `undefined`. `function sum(a, b) { return a + b; } sum(4)` gives `4 + undefined = NaN`.

**68. What happens if you call a function with more arguments than parameters?**
The extra arguments are ignored by the parameter list. `sum(4, 3, 5)` still returns `7` — but the extra value is accessible via `arguments`.

**69. How would you create a function that validates an HTTP status code?**
```javascript
const validateStatusCode = (status) => {
    if (status >= 200 && status <= 300)
        console.log("Request is fine!");
}
validateStatusCode(200);  // "Request is fine!"
```
Or return a boolean instead of logging: `const isSuccess = (status) => status >= 200 && status <= 300;`.

**70. What is the difference between `const` and `function` declarations in terms of reassignment?**
A `const` variable cannot be reassigned — `const greet2 = ...` can never point to a different function. A `function` declaration creates a named, hoisted binding. Trying to redeclare a name that already exists (function + `const` with the same name) throws a `SyntaxError`.

---

## Tricky Output Based Questions (71–80)

**71. What is the output?**
```javascript
function test() {
    console.log("Hello!");
}
test();              // "Hello!"
console.log(test()); // "Hello!" then undefined
```
The first call prints "Hello!". The second call also prints "Hello!" (from inside), and since there's no `return`, the call evaluates to `undefined` which gets printed.

**72. What is the output?**
```javascript
function greetByName(name) {
    return `Hello! ${name}`;
}
let result = greetByName("Saanvi");
console.log(result);  // "Hello! Saanvi"
```
The template literal fills in the parameter and the returned string is stored in `result`.

**73. What is the output?**
```javascript
const doubleMe = (a) => a * 2;
console.log(doubleMe(10));  // 20
```
Single-expression arrow — implicit return of `10 * 2`.

**74. What is the output?**
```javascript
const doubleB = () => b * 2;
console.log(doubleB());  // ReferenceError: b is not defined
```
The arrow references `b`, which was never declared. Arrow functions don't magically know about `b` — it's an undefined variable, so this throws a `ReferenceError`.

**75. What is the output?**
```javascript
function sum(a, b) {
    return a + b;
}
console.log(sum(4));  // NaN
```
Only one argument is passed, so `b` is `undefined`. `4 + undefined = NaN` (Not a Number).

**76. What is the output?**
```javascript
function sum(a, b) {
    return a + b;
}
console.log(sum(4, 3, 5));  // 7
```
The first two arguments fill `a` and `b`. The third argument (5) is ignored because the function only declares two parameters.

**77. What is the output?**
```javascript
function greet1(name) {
    return `Hello! ${name}`;
}
const greet2 = (name) => `Hello ${name}!`;
console.log(greet1("Rahul"));  // "Hello! Rahul"
console.log(greet2("Lucky"));  // "Hello Lucky!"
```
Both do the same job — declaration vs arrow — just with slightly different templates.

**78. What is the output?**
```javascript
console.log((() => "Hi")());  // "Hi"
```
An arrow IIFE inside `console.log`. The `(() => "Hi")` is an arrow function, and the trailing `()` invokes it immediately, returning "Hi" for the outer `console.log`.

**79. What is the output?**
```javascript
function sayHello() {
    console.log("Hi");
    return "Hello";
}
console.log(sayHello());  // "Hi" then "Hello"
let result = sayHello();  // "Hi"
console.log(result);      // "Hello"
```
Each call runs the body (printing "Hi") and returns "Hello". The first call prints both; the second stores "Hello" in `result`.

**80. What is the output?**
```javascript
const getResult = (score) => score > 70 ? "pass" : "fail";
console.log(getResult(100));  // "pass"
console.log(getResult(70));   // "fail"
```
100 > 70 → "pass". 70 > 70 is false → "fail". The ternary runs inside the arrow's implicit return.

---

## Automation Testing — Scenario Based Questions (81–90)

**81. You need to validate that an API status code is between 200 and 300. Write a function to do this.**
```javascript
const validateStatusCode = (status) => {
    if (status >= 200 && status <= 300)
        console.log("Request is fine!");
}
validateStatusCode(200);  // "Request is fine!"
validateStatusCode(404);  // (nothing)
```
Better for assertions: return a boolean — `const isSuccess = (status) => status >= 200 && status <= 300;`.

**82. You need to return "pass" or "fail" based on a test score. Write an arrow function for this.**
```javascript
const getResult = (score) => score > 70 ? "pass" : "fail";
console.log(getResult(98));  // "pass"
console.log(getResult(50));  // "fail"
```
A one-line arrow with a ternary — implicit return keeps it short.

**83. You have a list of test data. Write a function that takes a score and returns a grade using a ternary operator.**
```javascript
const getGrade = (score) => score > 70 ? "pass" : "fail";
let scores = [90, 50, 80, 40];
let grades = scores.map(getGrade);
console.log(grades);  // ["pass", "fail", "pass", "fail"]
```
The function can be passed directly to `map` — that's the beauty of simple functions.

**84. You need to initialize test setup once at the start of a test suite. Why might you use an IIFE?**
Because an IIFE runs immediately when the file loads — no explicit call needed. Setup like configuration, environment variables, or one-time logging executes right away. It also keeps the setup code out of the global scope (anonymous, no name pollution).

**85. Write a function that greets different test users by name using template literals.**
```javascript
function greetByName(name) {
    return `Hello! ${name}`;
}
let users = ["Saanvi", "Rahul", "Monu", "Archana", "Lucky"];
users.forEach(user => console.log(greetByName(user)));
// "Hello! Saanvi", "Hello! Rahul", etc.
```
Template literals make the message readable, and the function is reusable for every user.

**86. You need to double each number in a test data array. Write an arrow function that does this.**
```javascript
const doubleA = (a) => a * 2;
let data = [1, 2, 3, 4];
console.log(data.map(doubleA));  // [2, 4, 6, 8]
```
The arrow is a perfect fit for `map` — short, pure, one expression.

**87. How would you pass a function as an argument to another function (callback)? Give a testing example.**
```javascript
function validateResult(score, onComplete) {
    let result = score > 70 ? "pass" : "fail";
    onComplete(result);  // call the callback
}
validateResult(85, (r) => console.log(`Test ${r}`));  // "Test pass"
```
Callbacks let you customize behavior — the validation stays generic, and the callback decides what happens with the result.

**88. You need to write a helper that checks if a status code indicates success (200-300). Which function type would you choose and why?**
An arrow function returning a boolean:
```javascript
const isSuccess = (status) => status >= 200 && status <= 300;
```
Type 4 (parameter + return). The arrow keeps it to one readable line, and returning a boolean makes it usable in assertions like `expect(isSuccess(response.status)).toBe(true)`.

**89. Write a function that converts test results into "pass"/"fail" and test it with a score of 98.**
```javascript
const getResult = (score) => {
    if (score > 70) return "pass";
    return "fail";
}
console.log(getResult(98));  // "pass"
```
98 > 70, so the function returns "pass".

**90. How would you structure a reusable function for login validation in your test framework?**
```javascript
const validateLogin = (username, password) => {
    if (!username || !password) return "Invalid credentials";
    return "Login successful";
}
console.log(validateLogin("rahul", "pass123"));  // "Login successful"
console.log(validateLogin("", "pass123"));       // "Invalid credentials"
```
Keep it a pure Type 4 function: inputs in (username, password), verdict out. Test it with valid and invalid data sets — reusable anywhere in the framework.
