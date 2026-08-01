# Additional Topics — Interview Questions (Loops)

## Easy Questions

1. What does `continue` do?

2. What is the difference between `break` and `continue`?

3. What is `for...of` used for?

4. What is `for...in` used for?

5. Which loop iterates values and which iterates keys?

6. What is a labeled loop?

7. What is the most common loop in Playwright automation?

8. Can you `await` inside a `forEach`?

9. What is the difference between sequential and parallel loops?

10. What is the output of this code?
```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
}
```

---

## Medium Questions

11. What is the output of this code?
```javascript
const arr = ["a", "b"];
for (const i in arr) {
    console.log(i);
}
for (const v of arr) {
    console.log(v);
}
```

12. Why is `for...in` not recommended for arrays?

13. What is the output of this code?
```javascript
outer: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) break outer;
        console.log(`${i},${j}`);
    }
}
```

14. Why does `forEach` not wait for async callbacks?

15. What is the correct way to await inside a loop?

16. How do you run loop iterations in parallel?

17. Why cache `arr.length` in a loop condition?

18. What is the output of this code?
```javascript
const map = new Map([["a", 1], ["b", 2]]);
for (const [k, v] of map) console.log(k, v);
```

19. What is the output of this code?
```javascript
for (let i = 0; i < 5; i++) {
    if (i === 4) break;
    if (i === 1) continue;
    console.log(i);
}
```

20. What is the difference between `for...of` on an array vs a string?

---

## Hard Questions

21. How does `let` in a loop header fix the closure problem?

22. Why is `for...of` preferred over `forEach` in async code?

23. How do you remove elements from an array while iterating?

24. What is the time complexity of nested loops?

25. How would you poll a condition in a loop (retry pattern)?

26. What happens if you modify an array while iterating with `for...of`?

27. When would you use a labeled loop vs a flag variable?

28. Explain the difference between `for`, `for...of`, `for...in`, and `forEach`.

29. How does the event loop handle `await` inside loops?

30. What are the performance tradeoffs of `Promise.all` vs sequential awaits?
