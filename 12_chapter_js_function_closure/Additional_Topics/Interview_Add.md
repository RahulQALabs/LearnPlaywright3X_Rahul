# Missing Topics — Interview Questions

Questions covering the topics not in the main chapter: **block scope, closure internals, IIFE + closures (module pattern), the loop-closure bug, memoization, debounce, and run-once wrappers**.

---

## Easy Questions

1. What is block scope?

2. Are `let` and `const` block-scoped?

3. Is `var` block-scoped?

4. What happens if you use `let` inside an `if` block and then reference it outside the block?

5. What happens if you use `var` inside an `if` block and then reference it outside the block?

6. What is an IIFE?

7. What is the module pattern in JavaScript?

8. What is memoization?

9. What is a debounce function?

10. What is a run-once function?

---

## Medium Questions

11. What is the output of this code? (block scope)
```javascript
function checkScope() {
    if (true) {
        var withVar = "I escape";
        let withLet = "I stay";
    }
    console.log(withVar);
    // console.log(withLet);
}
```

12. What is the output of this code?
```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i));
}
```

13. What is the output of this code?
```javascript
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j));
}
```

14. Why does the `var` loop print 3, 3, 3 but the `let` loop prints 0, 1, 2?

15. What is the output of this code? (memoization)
```javascript
function memoize(fn) {
    const cache = {};
    return function (n) {
        if (cache[n] !== undefined) {
            console.log(`Cache hit for ${n}`);
            return cache[n];
        }
        const result = fn(n);
        cache[n] = result;
        return result;
    };
}
const memoSquare = memoize(n => n * n);
memoSquare(5);
memoSquare(5);
memoSquare(6);
```

16. What is the output of this code? (module pattern)
```javascript
const session = (function () {
    let token = null;
    return {
        setToken(t) { token = t; },
        getToken() { return token; }
    };
})();
session.setToken("abc123");
console.log(session.getToken());
```

17. Can the `token` variable above be accessed from outside? Why or why not?

18. What is the output of this code? (once)
```javascript
function once(fn) {
    let called = false;
    return function (...args) {
        if (called) {
            console.log("Already executed — skipping");
            return;
        }
        called = true;
        return fn(...args);
    };
}
const setup = once(() => console.log("Initializing..."));
setup();
setup();
```

19. What is the output of this code? (debounce)
```javascript
function debounce(fn, delay) {
    let timer = null;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
        console.log("Scheduled");
    };
}
const log = debounce(() => console.log("Fired!"), 500);
log();
log();
```

20. How does the closure inside `debounce` help it work?

---

## Hard Questions

21. Explain how closures work internally. What does the JavaScript engine keep alive?

22. What is a memory leak with closures? How can you avoid it?

23. How does the module pattern use closures to create private variables?

24. What is the difference between the module pattern and a plain object holding state?

25. Why does `var` cause the loop-closure bug but `let` doesn't?

26. How would you implement memoization for a slow recursive function like Fibonacci?

27. What is the difference between debounce and throttle?

28. How would you write a `once()` wrapper from scratch?

29. How do IIFEs relate to closures?

30. How would you use closures to create a private session token manager for your test framework?

31. What happens to captured variables when the outer function finishes? When are they garbage-collected?

32. How does memoization relate to pure functions?

---

## Bonus Interview Tips

- **Block scope**: `let`/`const` are block-scoped; `var` is function-scoped and ignores blocks.
- **Closure internals**: the engine keeps the captured environment alive while the closure exists.
- **IIFE + closure** = private state with no globals — the module pattern.
- **Loop bug**: `var` shares one binding across iterations; `let` creates a new binding per iteration.
- **Memoization**: cache expensive results in a closure variable — huge test-suite speedups.
- **Module pattern**: private data + public methods via an IIFE.
- **Debounce**: only the last call in a quiet window fires.
- **Once**: a closure flag makes a function run exactly once.
