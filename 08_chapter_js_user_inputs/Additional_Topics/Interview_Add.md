# Additional Topics — Interview Questions (User Inputs)

## Easy Questions

1. What does `Number()` return for an empty string?

2. What is the difference between `Number()` and `parseInt()`?

3. What does `parseInt("42px", 10)` return?

4. Why must you pass a radix to `parseInt`?

5. What is `process.env`?

6. How do you read a boolean from `process.env` correctly?

7. What is the async/await pattern for readline?

8. What does `.trim()` do?

9. Why should you validate user input before processing?

10. What is `process.stdin`?

---

## Medium Questions

11. What is the output of this code?
```javascript
console.log(Number("42px"));
console.log(parseInt("42px", 10));
console.log(Number(""));
console.log(Number("  10  "));
```

12. What is the output of this code?
```javascript
console.log(Boolean("false"));
console.log(process.env.DEBUG === "true");
```

13. How do you re-prompt until input is valid?

14. What is the difference between `parseInt` and `parseFloat`?

15. How do you read input in Node with a Promise?

16. What is the string concatenation trap with user input?

17. How do you check if user input is a valid number?

18. What does `fs.readFileSync(0, "utf-8")` do?

19. Why is `process.env.TIMEOUT` a string?

20. What happens if `process.env` variable is missing?

---

## Hard Questions

21. How would you build a config loader that reads from process.env?

22. What is the `"false"` boolean parsing bug and how do you avoid it?

23. How do you handle empty/whitespace-only input?

24. What is the difference between sync and async input reading in Node?

25. Why would you use `prompt-sync` vs `readline` vs `readFileSync(0)`?

26. How do you validate and convert multiple inputs from a single line?

27. What is the callback-hell problem with nested readline questions?

28. How do you use `process.env` defaults with `||` vs `??`?

29. When would you throw an error for a missing env variable?

30. How does Playwright read configuration from environment?
