# Additional Topics — Interview Questions (Basics)

## Easy Questions

1. What is the difference between `console.log` and `console.error`?

2. What does `console.table` do?

3. What is a Promise?

4. What is the `await` keyword used for?

5. What is a try/catch block?

6. What is an expression in JavaScript?

7. What is a statement in JavaScript?

8. What does `"use strict"` do?

9. What is the event loop?

10. What is a microtask?

---

## Medium Questions

11. What is the output of this code?
```javascript
console.log("1");
setTimeout(() => console.log("3"), 0);
Promise.resolve().then(() => console.log("2"));
```

12. What does ASI stand for and how can it cause bugs?

13. What is the difference between an expression and a statement? Give an example of each.

14. What happens when you assign to an undeclared variable in strict mode?

15. How do you handle errors from an async function?

16. What does `console.assert(false, "msg")` do?

17. What is the difference between `throw` and `console.error`?

18. What is the `finally` block used for?

19. What is the call stack?

20. What is the difference between microtasks and macrotasks?

---

## Hard Questions

21. Why does Playwright use `await` for everything?

22. Explain the event loop with an example of `setTimeout` and a Promise.

23. What is the difference between `Promise.then()` and `async/await`?

24. What happens if you `await` inside a `forEach`? Why is that a problem?

25. How would you make multiple API calls in parallel vs sequentially?

26. What is the purpose of `console.time` and `console.timeEnd`?

27. Why is strict mode recommended in framework code?

28. Explain how the call stack and event loop interact in a single-threaded language.

29. What is an unhandled promise rejection? How do you prevent it?

30. What is the output of this code and why?
```javascript
function getValue() {
    return
    { ok: true };
}
console.log(getValue());
```

---

## Automation Testing Scenario Questions

31. How would you log all browser console errors in a Playwright test?

32. Why is `try/catch` important in test utilities?

33. How do you add a delay in a test using a Promise?

34. How would you validate that an API call succeeded in an async test?

35. Why does `page.on("console", msg => console.log(msg.text()))` use a callback?
