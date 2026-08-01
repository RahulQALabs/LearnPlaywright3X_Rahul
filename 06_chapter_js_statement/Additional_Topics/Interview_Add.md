# Additional Topics — Interview Questions (Statements)

## Easy Questions

1. What is FizzBuzz?

2. What is a guard clause?

3. What is early return?

4. What are the 6 falsy values?

5. Is an empty array truthy or falsy?

6. Is the string `"0"` truthy or falsy?

7. What is the difference between `==` and `===` in a condition?

8. What is a chained comparison bug?

9. Why should you check "divisible by 15" first in FizzBuzz?

10. What is a dangling else?

---

## Medium Questions

11. What is the output of this code?
```javascript
if ("0") console.log("A");
if ([]) console.log("B");
if ({}) console.log("C");
if (0) console.log("D");
```

12. What is the output of this code?
```javascript
console.log(1 == 1 == true);
console.log(1 == 2 == false);
```

13. What is the output of this code?
```javascript
function classify(a, b, c) {
    if (a === b && b === c) return "Equilateral";
    if (a === b || b === c || a === c) return "Isosceles";
    return "Scalene";
}
console.log(classify(5, 5, 7));
console.log(classify(3, 4, 5));
```

14. What is wrong with this code?
```javascript
if (a = 5) {
    console.log("always runs");
}
```

15. Why are guard clauses preferred over deep nesting?

16. What is the difference between a guard clause and an early return?

17. What is the output of this code?
```javascript
if (false == 0) console.log("A");
if (false === 0) console.log("B");
if (null == undefined) console.log("C");
```

18. How do you fix a chained comparison?

19. What is the output of this code?
```javascript
let name = "0";
if (name) console.log("has name");
```

20. What is the order of checks in a correct FizzBuzz?

---

## Hard Questions

21. Why does `if (value)` differ from `if (value !== undefined)`?

22. Explain the dangers of using `==` in test assertions.

23. What is the output of this code and why?
```javascript
if (2 > 1 > 0) console.log("A");
if (0 > 1 > 0) console.log("B");
```

24. How would you validate a triangle with guard clauses?

25. What is the difference between `if/else if` and multiple `if` statements?

26. Why does FizzBuzz check `% 15` first? What happens otherwise?

27. What is the output of this code?
```javascript
if (undefined == null) console.log("A");
if (NaN == NaN) console.log("B");
if (NaN !== NaN) console.log("C");
```

28. When would you use `switch` vs `if/else if` vs guard clauses?

29. What is the ternary operator equivalent of a guard clause?

30. How do you validate user input before processing in a condition?
