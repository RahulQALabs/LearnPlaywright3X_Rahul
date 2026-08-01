# Additional Topics — Interview Questions (Literals)

## Easy Questions

1. What is type coercion?

2. What are the 6 falsy values in JavaScript?

3. What is the difference between `==` and `===`?

4. How do you convert a number to a string?

5. How do you convert a string to a number?

6. What does `JSON.stringify` do?

7. What does `JSON.parse` do?

8. What is a template literal?

9. What is a Symbol?

10. What does `.trim()` do?

---

## Medium Questions

11. What is the output of this code?
```javascript
console.log("10" + 5);
console.log("10" - 5);
```

12. What is the output of this code?
```javascript
console.log(Boolean("0"));
console.log(Boolean("false"));
console.log(Boolean([]));
console.log(Boolean({}));
```

13. What is the difference between `isNaN` and `Number.isNaN`?

14. What is the output of this code?
```javascript
console.log(0 == false);
console.log(0 === false);
console.log(null == undefined);
console.log(null === undefined);
```

15. What is the output of this code?
```javascript
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));
```

16. How do you extract "example" from "https://example.com/login"?

17. What does `parseInt("42px", 10)` return?

18. What is the output of this code?
```javascript
const user = { name: "Rahul" };
const json = JSON.stringify(user);
console.log(json);
```

19. What is the output of this code?
```javascript
const pattern = /^[a-z]+$/;
console.log(pattern.test("hello"));
console.log(pattern.test("Hello123"));
```

20. What is the difference between `new Number(5)` and `Number(5)`?

---

## Hard Questions

21. Explain how JavaScript type coercion works with the `+` operator.

22. What is the difference between `==`, `===`, and `Object.is`?

23. Why does `0.1 + 0.2 !== 0.3`?

24. What is a tagged template? How is it used?

25. How does boxing work when you call `.toUpperCase()` on a string?

26. Why is `Number.isNaN` preferred over global `isNaN` in assertions?

27. What are regex flags `g`, `i`, `m` used for?

28. Why can't `Symbol("a") === Symbol("a")`?

29. What is the difference between `"10" + 5` and `Number("10") + 5`?

30. When would you use `JSON.parse` in a Playwright API test?

---

## Automation Testing Scenario Questions

31. How would you validate a URL matches a pattern in Playwright?

32. Why is `===` preferred over `==` in test assertions?

33. How do you send a JSON payload in a Playwright API request?

34. How would you parse an API response body?

35. Why is understanding falsy values important when writing test conditions?
