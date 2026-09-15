# Missing Topics — Interview Questions

Questions covering the topics not in the main chapter: **default parameters, rest parameters, callbacks, scope, closures, hoisting, `this`, and recursion**.

---

## Easy Questions

1. What is a default parameter?

2. What happens if you call a function that has a default parameter without passing that argument?

3. What is a rest parameter? What syntax is used?

4. Where must the rest parameter appear in the parameter list?

5. What is a callback function?

6. Can a function be passed as an argument to another function?

7. What is scope in JavaScript?

8. What is the difference between global scope and local (function) scope?

9. What is a closure?

10. What is hoisting?

11. Which functions are fully hoisted — declarations or expressions?

12. What is the `this` keyword?

13. What is recursion?

14. What is a base case in recursion?

15. Can a function call itself?

---

## Medium Questions

16. What is the output of this code?
```javascript
function launchBrowser(name = "chrome") {
    console.log(name);
}
launchBrowser("firefox");
launchBrowser();
```

17. What is the output of this code?
```javascript
function totalScore(...scores) {
    return scores.reduce((sum, s) => sum + s, 0);
}
console.log(totalScore(85, 92, 78));
```

18. Is the rest parameter a real array? How do you check?

19. What is the difference between the `arguments` object and rest parameters?

20. What is the output of this code?
```javascript
let globalEnv = "staging";
function getEnv() {
    let localEnv = "production";
    return globalEnv + " and " + localEnv;
}
console.log(getEnv());
// console.log(localEnv);
```

21. What is the output of this code? (block scope)
```javascript
if (true) {
    var withVar = "I escape";
    let withLet = "I stay";
}
console.log(withVar);
// console.log(withLet);
```

22. What is the output of this code?
```javascript
function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
const counter = createCounter();
counter();
counter();
console.log(counter());
```

23. Why does the counter above remember its value between calls?

24. What is the output of this code?
```javascript
console.log(greet("Rahul"));
function greet(name) {
    return `Hello ${name}`;
}
```

25. What is the output of this code?
```javascript
// console.log(greet2("Rahul"));
const greet2 = (name) => `Hello ${name}`;
```

26. What is the output of this code?
```javascript
const testRunner = {
    name: "Regression Suite",
    run: function () {
        console.log(this.name);
    }
};
testRunner.run();
```

27. What is the output of this code?
```javascript
const testRunner = {
    name: "Smoke Suite",
    run: () => {
        console.log(this.name);
    }
};
testRunner.run();
```

28. What is the output of this code?
```javascript
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(4));
```

29. What is the output of this code?
```javascript
function countdown(n) {
    if (n <= 0) {
        console.log("Done!");
        return;
    }
    console.log(n);
    countdown(n - 1);
}
countdown(3);
```

30. What is the output of this code?
```javascript
console.log(score);
var score = 85;
```

31. What is the output of this code?
```javascript
// console.log(score);
let score = 85;
```

32. How do you write a function that greets a user with a default name?

33. What is the output of this code?
```javascript
function logTestCase(name, ...steps) {
    console.log(name + ": " + steps.join(" -> "));
}
logTestCase("Login", "open page", "enter email", "click login");
```

34. What is the difference between `var`, `let`, and `const` in terms of scope?

35. What is the output of this code?
```javascript
function waitFor(callback) {
    return callback() ? "met" : "timeout";
}
console.log(waitFor(() => true));
console.log(waitFor(() => false));
```

---

## Hard Questions

36. How does hoisting work for function declarations vs function expressions stored in `const`?

37. What is the temporal dead zone (TDZ)?

38. What is the difference between `var` hoisting and `let`/`const` hoisting?

39. Explain how closures work internally. What does the inner function "remember"?

40. What is the difference between closure state and global variables?

41. How does `this` behave in arrow functions vs normal functions?

42. Why would you use an arrow function in a Playwright event handler (like `page.on("console", ...)`) instead of a normal function?

43. What is the scope chain? Give an example.

44. What happens if a recursive function has no base case?

45. What is the difference between recursion and iteration? When would you choose each?

46. What is a pure function, and how does it relate to closures?

47. How would you create a closure that generates unique test emails?

48. What is the output and why?
```javascript
function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
const counterA = createCounter();
const counterB = createCounter();
counterA();
counterA();
console.log(counterB());
```

49. What is the difference between `this` in a method call vs a standalone function call?

50. What is callback hell? How do modern features (promises/async) help?

51. What is the maximum safe recursion depth in JavaScript?

52. How does hoisting interact with closures?

53. What is the difference between a rest parameter and the spread operator?

54. Why can't arrow functions use the `arguments` object?

55. How would you use a callback to implement retry logic for a flaky test?

---

## Bonus Interview Tips

- **Default params**: `name = "chrome"` — kicks in only when the argument is `undefined`.
- **Rest params**: `...scores` — must be last, collects the rest into a real array.
- **Callbacks**: functions passed as arguments — the foundation of Playwright waits and events.
- **Scope**: `let`/`const` are block-scoped; `var` is function-scoped. Inner scopes can see outer, not vice versa.
- **Closures**: inner functions "carry a backpack" of outer variables — perfect for counters, generators, factories.
- **Hoisting**: declarations move to the top. Function declarations are fully usable; `const` arrows are not.
- **`this`**: normal functions = dynamic `this`; arrows = lexical `this` (inherited from where they're defined).
- **Recursion**: base case + recursive case. Great for nested structures; beware stack depth.
