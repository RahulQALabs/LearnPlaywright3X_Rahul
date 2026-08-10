# JavaScript Scope & Closures – Interview Questions

## Easy Questions

1. What is scope in JavaScript?

2. What is the difference between global scope and local (function) scope?

3. Can a function access a variable declared outside it?

4. Can code outside a function access a variable declared inside that function?

5. What happens if you try to use a local variable outside its function?

6. What is the scope chain?

7. In a nested function, can the inner function access the outer function's variables?

8. Can the outer function access the inner function's variables?

9. What is a closure?

10. When does a closure "remember" variables?

11. Can a function be returned from another function?

12. What happens to the outer function's variables after the outer function finishes running?

---

## Medium Questions

13. What is the output of this code?
```javascript
let env = "Staging";
function setupConfig() {
    let timeout = 2000;
    console.log(timeout);
    console.log(env);
}
setupConfig();
```

14. What is the output of this code?
```javascript
let env = "Staging";
function setupConfig() {
    let timeout = 2000;
}
setupConfig();
console.log(timeout);
```

15. What is the output of this code?
```javascript
let g_x = 10;
function outer() {
    let x = 10;
    function inner() {
        let y = 20;
        console.log(x);
    }
    inner();
}
outer();
```

16. What is the output of this code?
```javascript
let g_x = 10;
function outer() {
    let x = 10;
    function inner() {
        let y = 20;
        console.log(x);
    }
    inner();
    console.log(y);
}
outer();
```

17. What is the output of this code?
```javascript
function startBrowser() {
    let name = "Rahul";
    function installBrowser() {
        console.log(name);
    }
    return installBrowser;
}
const runTC = startBrowser();
runTC();
```

18. Why does `runTC()` above print "Rahul" even though `startBrowser()` has already finished?

19. What is the output of this code?
```javascript
function makeCounter(start = 0) {
    let count = start;
    return {
        increment() { count++; },
        decrement() { count--; },
        get() { return count; }
    };
}
let counter = makeCounter(0);
counter.increment();
counter.increment();
console.log(counter.get());
```

20. Can the `count` variable in the counter above be changed from outside? Why or why not?

21. What is the output of this code?
```javascript
function maxRetryTracker(max) {
    let attempts = 0;
    function tryAgain(testCaseName) {
        attempts++;
        if (attempts > max) {
            return `${testCaseName} exceeded max retries (${max})`;
        }
        return `Attempt ${attempts}/${max} for ${testCaseName}`;
    }
    return tryAgain;
}
let tracker = maxRetryTracker(2);
console.log(tracker("Login"));
console.log(tracker("Login"));
console.log(tracker("Login"));
```

22. Why does `attempts` keep its value between calls to `tryAgain`?

23. What happens if you call `maxRetryTracker()` twice and use the two returned functions? Do they share the same `attempts`?

---

## Logical / Reasoning Questions

24. What is the output and why?
```javascript
let env = "Staging";
function setupConfig() {
    let timeout = 2000;
    console.log(env);    // ?
    console.log(timeout); // ?
}
setupConfig();
console.log(timeout);    // ?
```

25. What is the output and why?
```javascript
let g_x = 10;
function outer() {
    let x = 10;
    function inner() {
        let y = 20;
        console.log(x);   // ?
        console.log(g_x); // ?
    }
    inner();
}
outer();
```

26. What is the output and why?
```javascript
function startBrowser() {
    let name = "Rahul";
    return function () {
        console.log(name);
    };
}
const runTC = startBrowser();
runTC();
```

27. What is the output and why?
```javascript
function makeCounter(start = 0) {
    let count = start;
    return {
        increment() { count++; },
        get() { return count; }
    };
}
let counter = makeCounter(5);
counter.increment();
counter.increment();
console.log(counter.get());
```

28. What is the output and why?
```javascript
function maxRetryTracker(max) {
    let attempts = 0;
    return function (testCaseName) {
        attempts++;
        if (attempts > max) {
            return `exceeded ${max}`;
        }
        return `Attempt ${attempts}/${max}`;
    };
}
let tracker = maxRetryTracker(1);
console.log(tracker("A"));
console.log(tracker("A"));
```

29. What is the output and why?
```javascript
let count = 100;                       // global
function makeCounter() {
    let count = 0;                     // local — shadows the global
    return function () {
        count++;
        return count;
    };
}
let counter = makeCounter();
console.log(counter());   // ?
console.log(counter());   // ?
console.log(count);       // ?
```

30. What is the output and why?
```javascript
function outer() {
    let x = "outer";
    function inner() {
        let y = "inner";
        function deepest() {
            console.log(x);   // ?
            console.log(y);   // ?
        }
        deepest();
    }
    inner();
}
outer();
```

---

## Programming Questions

31. Write a function `setupConfig()` that declares a local variable and prints both a global and a local variable.

32. Write a function `startBrowser()` that returns an inner function which prints a variable from the outer function (a closure).

33. Write a function `makeCounter(start)` that returns an object with `increment()`, `decrement()`, and `get()` methods using a closure.

34. Write a function `maxRetryTracker(max)` that returns a function tracking retry attempts and stops after `max`.

35. Write a closure that generates unique test emails like `user_1000@test.com`, `user_1001@test.com`, etc.

36. Write a function that returns a counter — each call to the returned function increments and returns the count.

---

## Hard Questions

37. What is the difference between global scope, function scope, and block scope?

38. Explain how the scope chain works. What determines which variable an identifier refers to?

39. Explain how closures work internally. What does the inner function "remember"?

40. Why do closures "remember" variables even after the outer function has returned? What does the JavaScript engine keep alive?

41. What is the difference between closure state and global variables? Why prefer closures?

42. What is the difference between a closure and a plain returned function that uses no outer variables?

43. How do closures help create private variables in JavaScript (which has no native `private` keyword)?

44. What is the difference between closures and classes/objects for holding state?

45. What happens if you create a closure inside a loop? How does `let` fix the classic loop-closure bug?

46. What is the difference between `var` and `let` inside a closure in terms of captured state?

47. How would you create a closure that generates unique test emails?

48. What is a memory leak with closures? How can you avoid it?

49. What is the output and why?
```javascript
let counterA = makeCounter();
let counterB = makeCounter();
function makeCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
console.log(counterA());
console.log(counterA());
console.log(counterB());
```

50. What is the output and why?
```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i));
}
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j));
}
```

51. How do closures relate to the scope chain? Give an example.

52. What is the difference between a closure and a callback? Can a callback be a closure?

53. How would you use a closure to implement retry logic for a flaky test in Playwright?

54. What is a pure function, and how does it relate to closures?

55. How does hoisting interact with closures?

---

## Automation Testing — Scenario Based Questions

56. You need to track how many times a flaky test has been retried. How would you use a closure?

57. You need to generate unique email addresses for each test run. Write a closure-based generator.

58. Your test framework needs a private session token that only certain methods can access. How would you design it with closures?

59. You have a Playwright helper that must remember its configuration (like a timeout) across calls. How would closures help?

60. You need to count how many tests passed and failed across a suite. Write a closure-based counter.

---

## Bonus Interview Tips

- **Scope** = where a variable is accessible. Global vs local (function) scope.
- **Scope chain**: lookup goes outward — inner functions see outer variables, never the reverse.
- **Local variables are private** — outside access throws a `ReferenceError`.
- **Closure** = an inner function remembers the outer function's variables after the outer function returns.
- **Private state**: closures keep state without polluting globals.
- **Factory pattern**: functions returning objects/functions with closed-over state — counters, retry trackers, generators.
- **Independent closures**: each call to the outer function creates a fresh, independent state.
- **Real testing use**: retry tracking, test counters, unique test data, config-carrying helpers.
