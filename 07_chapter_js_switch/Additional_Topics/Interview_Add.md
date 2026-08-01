# Additional Topics — Interview Questions (Switch)

## Easy Questions

1. What happens if `default` is in the middle of a switch?

2. Can you use `let` in adjacent cases without braces?

3. What is intentional fall-through?

4. What is an object map?

5. Why does `case NaN` never match?

6. Can you have duplicate cases in switch?

7. What operator does switch use for comparison?

8. When is switch preferred over if/else if?

9. What is the modern alternative to switch for lookups?

10. Why wrap each case in `{}`?

---

## Medium Questions

11. What is the output of this code?
```javascript
switch (99) {
    case 1:
        console.log("Case 1");
        break;
    default:
        console.log("Default");
    case 2:
        console.log("Case 2");
        break;
}
```

12. What is the output of this code?
```javascript
switch (10) {
    case 10:
        console.log("First");
        break;
    case 10:
        console.log("Second");
        break;
}
```

13. What is the output of this code?
```javascript
check(NaN);
function check(value) {
    switch (value) {
        case NaN:
            console.log("Matched");
            break;
        default:
            console.log("No match");
    }
}
```

14. How do you fix the `let` declaration error in adjacent cases?

15. What is the output of this code?
```javascript
function dayType(day) {
    switch (day) {
        case 6:
        case 7:
            return "Weekend";
        default:
            return "Weekday";
    }
}
console.log(dayType(6));
console.log(dayType(2));
```

16. Why does `case 0` match `0` but not `false`?

17. What is the output of this code?
```javascript
const URLS = { dev: "https://dev.example.com", prod: "https://example.com" };
console.log(URLS["staging"] ?? URLS.dev);
```

18. When would you choose an object map over switch?

19. What is fall-through and when is it a bug vs a feature?

20. Why does switch use strict comparison?

---

## Hard Questions

21. Explain the execution order when `default` is in the middle without break.

22. How do V8 engines optimize switch statements?

23. What is the difference between switch and object map for performance?

24. How would you handle environment-based config: switch or object map? Why?

25. What happens with `switch(true)` and why is it useful?

26. Can you use expressions in case statements?

27. What is the output of this code?
```javascript
switch (0) {
    case false:
        console.log("matched false");
        break;
    default:
        console.log("no match");
}
```

28. How do you make switch fall-through explicit and readable?

29. What are the downsides of using switch in large frameworks?

30. Explain the lexical scoping issue with `const` inside switch cases.
