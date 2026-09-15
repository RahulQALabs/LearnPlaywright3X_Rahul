# Additional Topics — Interview Questions (Identifiers)

## Easy Questions

1. What are reserved words in JavaScript?

2. What is the difference between an identifier and a property name?

3. Can you use a reserved word as an object property?

4. What is `camelCase` used for?

5. What is `PascalCase` used for?

6. What is `SCREAMING_SNAKE_CASE` used for?

7. What does the `$` symbol mean in jQuery and Playwright?

8. What does `_` typically mean in JavaScript libraries?

9. Can `undefined` be used as a variable name?

10. What is identifier resolution?

---

## Medium Questions

11. What is the scope chain?

12. What is shadowing and how does it affect identifier resolution?

13. What is the output of this code?
```javascript
let count = 0;
function run() {
    let count = 10;
    console.log(count);
}
run();
console.log(count);
```

14. What is the output of this code?
```javascript
const obj = {
    class: "A",
    123: "number",
    "first-name": "Rahul"
};
console.log(obj.class);
console.log(obj["first-name"]);
```

15. Which of these are valid identifiers?
```javascript
let 1name;       // ?
let _name;       // ?
let $name;       // ?
let name-1;      // ?
let name1;       // ?
```

16. What is the difference between reserved words and future reserved words?

17. Why should you never name a variable `undefined` or `NaN`?

18. What is the `await` keyword? When is it a keyword?

19. What naming convention would you use for a Page Object class?

20. Why do Playwright selectors use `$`?

---

## Hard Questions

21. Explain identifier resolution in nested functions using the scope chain.

22. What happens when an identifier isn't found anywhere in the scope chain?

23. How does the parser distinguish an identifier from a keyword?

24. Why are some keywords context-dependent (like `await`)?

25. What is the difference between a property key `"class"` and a variable `class`?

26. How do minifiers rename identifiers safely?

27. What naming convention should env config constants use and why?

28. Why does `obj[123]` work but `obj.123` doesn't?

29. Explain the difference between `$` in jQuery vs template literals `${}`.

30. What is the significance of `_` as an unused parameter name in callbacks?
