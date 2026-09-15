# Additional Topics — Interview Questions (Operators)

## Easy Questions

1. What is optional chaining (`?.`)?

2. What does the spread operator do?

3. What does the rest operator do?

4. What is the `in` operator used for?

5. What is `instanceof` used for?

6. What does `delete` do?

7. What does unary `+` do?

8. What is `!!` used for?

9. What is the difference between spread and rest?

10. What does `??=` do?

---

## Medium Questions

11. What is the output of this code?
```javascript
const config = { browser: { name: "chromium" } };
console.log(config.timeout?.ms);
console.log(config.browser?.name);
```

12. What is the output of this code?
```javascript
const base = { timeout: 5000, retries: 2 };
const test = { ...base, retries: 5 };
console.log(test);
```

13. What is the output of this code?
```javascript
function sum(...nums) {
    return nums.reduce((t, n) => t + n, 0);
}
console.log(sum(1, 2, 3, 4));
```

14. What is the output of this code?
```javascript
console.log(+"10");
console.log(+"abc");
console.log(!!"hello");
console.log(!!0);
```

15. What is the output of this code?
```javascript
console.log("status" in { status: 200 });
console.log([] instanceof Array);
console.log([] instanceof Object);
```

16. What is the output of this code?
```javascript
let timeout = null;
timeout ??= 5000;
console.log(timeout);
```

17. What is the output of this code?
```javascript
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
```

18. What is the difference between `?.` and `||` for defaults?

19. What is the output of this code?
```javascript
const user = { name: "Rahul", token: "secret" };
delete user.token;
console.log(user);
```

20. How does `instanceof` differ from `typeof`?

---

## Hard Questions

21. Why is chained comparison like `a < b < c` dangerous?

22. Explain how spread creates shallow copies. When does it fail?

23. What is the difference between `?.` and `??`?

24. Can `delete` remove array elements properly? Why not?

25. What is the output of this code?
```javascript
const a = { x: 1 };
const b = { ...a };
b.x = 99;
console.log(a.x);
```

26. Why would you use `instanceof` in error handling?

27. What happens when you spread a string?

28. What is the precedence of `?.` compared to other operators?

29. How do logical assignment operators differ from `=`?

30. When would you use the `in` operator vs `hasOwnProperty`?
