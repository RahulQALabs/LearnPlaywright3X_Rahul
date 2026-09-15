# Additional Topics — Interview Questions (var/let/const)

## Easy Questions

1. What is variable shadowing?

2. What is a closure?

3. What is the difference between function hoisting and variable hoisting?

4. What is the scope chain?

5. What happens when you assign to a variable without declaring it?

6. What does `"use strict"` do to undeclared assignment?

7. Why is `let` preferred over `var` in loops?

8. What is an IIFE?

9. Can `const` variables be shadowed?

10. What is a lexical environment?

---

## Medium Questions

11. What is the output of this code?
```javascript
let x = 10;
function test() {
    let x = 20;
    console.log(x);
}
test();
console.log(x);
```

12. What is the output of this code?
```javascript
let x = 1;
{
    console.log(x);
    let x = 2;
}
```

13. What is the output of this code?
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

14. Why does `var` in a loop produce the "last value" bug with setTimeout?

15. How does an IIFE fix the `var` loop problem?

16. What is the output of this code?
```javascript
sayHello();
function sayHello() {
    console.log("Hi");
}
```

17. What is the output of this code?
```javascript
greet();
const greet = () => console.log("Hi");
```

18. What is the difference between hoisting `var` (undefined) and `let` (TDZ)?

19. What is the output of this code?
```javascript
function outer() {
    let a = 1;
    function inner() {
        let b = 2;
        console.log(a + b);
    }
    inner();
}
outer();
```

20. What is an implicit global?

---

## Hard Questions

21. Explain closures in terms of lexical environments.

22. Why does `let` create a new binding per loop iteration but `var` doesn't?

23. What is the output and why?
```javascript
var x = 1;
{
    var x = 2;
}
console.log(x);
```

24. What is the output and why?
```javascript
let x = 1;
{
    let x = 2;
}
console.log(x);
```

25. How does the scope chain resolve a variable referenced in a nested function?

26. Why do closures "remember" outer variables after the outer function returns?

27. What is the difference between shadowing and redeclaration?

28. How would you prevent accidental global creation in a large framework?

29. What is the temporal dead zone in relation to shadowing?

30. Explain the IIFE pattern and why it was needed before `let`.
