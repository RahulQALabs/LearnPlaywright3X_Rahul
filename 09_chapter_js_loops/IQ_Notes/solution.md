# Interview Questions — Solutions

## Easy Questions (1–15)

**1. What is a loop in JavaScript? Why do we need loops?**
A loop lets you run the same block of code multiple times without writing it over and over. For example, if you want to print numbers 1 to 100, a loop saves you from writing 100 `console.log` statements.

**2. What are the different types of loops available in JavaScript?**
We have three main ones — `for`, `while`, and `do...while`. There's also `for...of` for arrays/iterables and `for...in` for object keys, but the first three are the classic looping constructs.

**3. What is a `for` loop? Write its syntax.**
A `for` loop bundles initialization, condition, and increment all in one line: `for (let i = 0; i < 5; i++) { ... }`. It's your go-to when you know exactly how many times you want to repeat something.

**4. What are the three parts of a `for` loop? Explain each.**
The first part sets up your counter (`let i = 0`), the second checks if we should keep going (`i < 5`), and the third updates the counter after each round (`i++`). Think of it as "start → check → run → step → check again."

**5. Are all three parts of a `for` loop mandatory?**
Nope, all three are optional. You can skip any of them, like `for (; i < 5; i++)` if the counter is already declared outside. Even `for (;;)` is valid — that just creates an infinite loop.

**6. What is a `while` loop? Write its syntax.**
A `while` loop keeps running as long as its condition stays true: `while (condition) { ... }`. You manage the counter yourself inside the body, so it's perfect when you don't know the exact number of iterations upfront.

**7. What is a `do...while` loop? Write its syntax.**
It's the same as `while` but flipped — the body runs first, then the condition is checked: `do { ... } while (condition);`. This guarantees the code inside runs at least once, even if the condition is false from the start.

**8. What is the difference between `while` and `do...while`?**
`while` checks the condition before running the body (might run 0 times), while `do...while` runs the body first and checks after (always runs at least once). Think of `do...while` like "try first, ask later."

**9. How many times does a `do...while` loop execute at minimum?**
At least once. Even if the condition is false on the first check, the body has already executed. For example, `do { console.log("Hi"); } while (false);` still prints "Hi" once.

**10. How many times does a `while` loop execute at minimum?**
Zero times. If the condition is false from the beginning, the body never runs. For example, `while (false) { console.log("Hi"); }` won't print anything.

**11. What is the difference between `i++` and `++i` inside a `for` loop?**
Inside a `for` loop header, they behave identically because the increment runs as its own separate statement. The difference only shows up when you use the result in an expression — like `let x = i++` vs `let x = ++i`.

**12. What is an infinite loop? How do you create one?**
An infinite loop is one whose condition never becomes false, so it runs forever. You can create one with `while (true) { }` or `for (;;) { }`. In JavaScript, this blocks everything because the thread is stuck.

**13. What keyword is used to exit a loop immediately?**
`break`. When JavaScript hits `break` inside a loop, it jumps out right away, no matter what the condition says. It's like an emergency exit door.

**14. Can you use `break` inside a `while` loop?**
Absolutely. `break` works in all loops — `for`, `while`, and `do...while`. It's especially useful with `while (true)` to exit based on a condition in the middle of the loop body.

**15. What is a nested loop?**
A loop inside another loop. The inner loop runs completely for every single iteration of the outer loop. For example, a nested `for` loop is how you'd print a 2D grid or a multiplication table.

---

## Medium Questions (16–30)

**16. Explain the execution order of a `for` loop step by step.**
First, initialization runs once (`let i = 0`). Then condition is checked — if true, the body runs, then the increment runs, then back to condition check. So the order is: init → condition → body → increment → condition → body → increment... until condition is false.

**17. What is the output of this code?**
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```
It prints 0, 1, 2, 3, 4. The loop runs 5 times because `i` goes from 0 to 4 (stops when `i` becomes 5 since `5 < 5` is false).

**18. What is the output of this code?**
```javascript
let j = 10;
while (j < 10) {
    console.log(j);
    j++;
}
```
Nothing prints. Since `j = 10` and the condition is `j < 10` (which is false), the `while` loop never enters the body. Zero executions.

**19. What is the output of this code?**
```javascript
let k = 10;
do {
    console.log("Value: " + k);
    k++;
} while (k < 10);
```
It prints `"Value: 10"` once. The body runs first, then the condition `10 < 10` is checked and fails, so the loop stops. This shows how `do...while` always runs at least once.

**20. What happens if you forget the increment statement in a `while` loop?**
The variable never changes, so the condition stays true forever — you get an infinite loop. For example, `let i = 0; while (i < 5) { console.log(i); }` without `i++` will print 0 infinitely and freeze your program.

**21. What is the output of this code?**
```javascript
for (let i = 0; i < 10; ++i) {
    console.log(i);
}
```
It prints 0 through 9, same as `i++`. In a `for` loop header, pre-increment (`++i`) and post-increment (`i++`) behave identically because the result isn't used anywhere.

**22. Can you declare the initialization variable outside a `for` loop? What are the risks?**
Yes, you can: `let i = 0; for (; i < 5; i++) { }`. But the risk is that `i` leaks into the outer scope and keeps its final value after the loop ends, which can cause unexpected bugs in larger code.

**23. What is the output of this code?**
```javascript
let i = 7;
while (true) {
    if (i > 10) break;
    console.log(i);
    i++;
}
```
It prints 7, 8, 9, 10. The loop runs forever (`while true`) until `i > 10` becomes true at 11, then `break` exits. A classic "run until done" pattern.

**24. How many times does `console.log` run in this nested loop?**
```javascript
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
        console.log(i, j);
    }
}
```
12 times. The outer loop runs 3 times, and for each of those, the inner loop runs 4 times. So 3 × 4 = 12 total executions.

**25. What is the output of this nested loop?**
```javascript
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(i, j);
    }
}
```
It prints 6 pairs: (0,0), (0,1), (1,0), (1,1), (2,0), (2,1). For each outer `i`, the inner `j` loops from 0 to 1, so you get all combinations.

**26. Write a `for` loop that prints numbers from 1 to 10.**
`for (let i = 1; i <= 10; i++) { console.log(i); }`. Start `i` at 1, run while `i <= 10`, and increment by 1 each time.

**27. Write a `for` loop that prints numbers from 10 down to 1.**
`for (let i = 10; i >= 1; i--) { console.log(i); }`. Start at 10, go while `i >= 1`, and decrement with `i--` each time.

**28. Write a `while` loop that prints even numbers from 0 to 10.**
```javascript
let i = 0;
while (i <= 10) {
    console.log(i);
    i += 2;
}
```
Start at 0, add 2 each time — you get 0, 2, 4, 6, 8, 10.

**29. Write a `do...while` loop that prints "Hello" 3 times.**
```javascript
let count = 0;
do {
    console.log("Hello");
    count++;
} while (count < 3);
```
Runs the body, increments count, checks if `count < 3`, and repeats until count hits 3.

**30. Write a `for` loop that sums numbers from 1 to 100.**
```javascript
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum); // 5050
```
Add each number from 1 to 100 to `sum`. The result is 5050.

---

## Logical / Reasoning Questions (31–40)

**31. What is the output and why?**
```javascript
let i = 0;
for (; i < 5; i++) {
    console.log(i);
}
console.log(i);
```
Prints 0, 1, 2, 3, 4 then 5. Since `i` is declared outside with `let`, it's accessible after the loop. When the loop stops, `i` is 5 (the condition `5 < 5` failed).

**32. What is the output and why?**
```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
```
Prints 3, 3, 3. `var` is function-scoped, so all three callbacks share the same `i`. By the time they run after 100ms, the loop is done and `i` is 3.

**33. What is the output and why?**
```javascript
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
```
Prints 0, 1, 2. `let` creates a new binding for each iteration, so each callback gets its own copy of `i` at the moment it was created.

**34. Why do the above two code snippets produce different outputs?**
`var` is function-scoped (one shared `i` that becomes 3), while `let` is block-scoped (a fresh `i` per iteration). This is the classic interview gotcha about closures in loops.

**35. What is the output and why?**
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);
}
```
Prints 0, 1, 2, 3, 4. When `i` hits 5, `break` immediately exits the loop, so 5 onwards never get printed.

**36. What is the output and why?**
```javascript
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i);
}
```
Prints 0, 1, 3, 4. `continue` skips the rest of the current iteration when `i` is 2, so `console.log` is never called for that value.

**37. What is the output and why?**
```javascript
let x = 1;
while (x < 5) {
    console.log(x);
    x += 2;
}
```
Prints 1, 3. Start at 1, add 2 each time: 1 → prints, becomes 3 → prints, becomes 5 → condition `5 < 5` fails → exits.

**38. What is the output and why?**
```javascript
let count = 0;
do {
    console.log(count);
    count++;
} while (count < 0);
```
Prints 0 once. The body runs first (prints 0, count becomes 1), then the condition `1 < 0` is false, so the loop stops. Classic demo of "runs at least once."

**39. What is the output and why?**
```javascript
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) break;
        console.log(i, j);
    }
}
```
Prints (0,0), (0,1), (0,2), (1,0), (2,0), (2,1), (2,2). Notice (1,1) and (1,2) are missing — when `i=1, j=1`, `break` exits the inner loop only, but outer continues.

**40. What is the output and why?**
```javascript
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}
console.log("After loop: " + i);
```
Prints 0, 1, 2 then `"After loop: 3"`. Since `i` is declared with `let` outside the loop, it's still accessible after — and its final value is 3.

---

## Programming Questions (41–60)

**41. Write a program to print numbers from 1 to 10 using a `for` loop.**
```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```
Start at 1, go up to and including 10, increment by 1.

**42. Write a program to print numbers from 1 to 10 using a `while` loop.**
```javascript
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
```
Initialize outside, check condition before each run, increment inside the body.

**43. Write a program to print numbers from 1 to 10 using a `do...while` loop.**
```javascript
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);
```
Same as while, but the body runs first — though it doesn't matter here since the condition is true from the start.

**44. Write a program to print all even numbers between 1 and 20.**
```javascript
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
```
Start at 2, add 2 each step: 2, 4, 6, ... 20. You could also use an `if (i % 2 === 0)` check with `i++`.

**45. Write a program to print all odd numbers between 1 and 20.**
```javascript
for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}
```
Start at 1, add 2 each step: 1, 3, 5, ... 19. Or loop all numbers and filter with `if (i % 2 !== 0)`.

**46. Write a program to calculate the sum of numbers from 1 to N (user input).**
```javascript
let n = 10, sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log(sum); // 55
```
Keep adding each number to a running total. For `n = 10`, the result is 55.

**47. Write a program to print the multiplication table of 5 (5×1 to 5×10).**
```javascript
for (let i = 1; i <= 10; i++) {
    console.log(`5 × ${i} = ${5 * i}`);
}
```
Loop from 1 to 10, multiply 5 by the current number, and print a nice formatted message each time.

**48. Write a program to print a star pattern using nested loops.**
```javascript
for (let i = 1; i <= 4; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "* ";
    }
    console.log(stars.trim());
}
```
Outer loop controls rows (4), inner loop adds stars equal to the current row number. Row 1 gets 1 star, row 2 gets 2, etc.

**49. Write a program to reverse a number using a `while` loop (e.g., 123 → 321).**
```javascript
let num = 123, reversed = 0;
while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
}
console.log(reversed); // 321
```
Repeatedly grab the last digit (`% 10`), append it to `reversed`, and chop off that digit (`/ 10`). The loop processes one digit per iteration.

**50. Write a program to count the number of digits in a number using a `while` loop.**
```javascript
let num = 12345, count = 0;
while (num > 0) {
    count++;
    num = Math.floor(num / 10);
}
console.log(count); // 5
```
Chop off one digit per iteration and increment the counter until nothing's left. For 12345, it takes 5 chops.

**51. Write a program to find the factorial of a number using a `for` loop.**
```javascript
let n = 5, fact = 1;
for (let i = 2; i <= n; i++) {
    fact *= i;
}
console.log(fact); // 120
```
Multiply 1 × 2 × 3 × 4 × 5. Start from 2 (multiplying by 1 does nothing) and go up to `n`. 5! = 120.

**52. Write a program to print the Fibonacci series up to N terms.**
```javascript
let a = 0, b = 1, n = 7;
for (let i = 0; i < n; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}
```
Start with 0 and 1, each next number is the sum of the previous two. For 7 terms: 0, 1, 1, 2, 3, 5, 8.

**53. Write a program to check if a number is prime using a loop.**
```javascript
let num = 17, isPrime = true;
for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(isPrime); // true
```
Check if any number from 2 to num-1 divides evenly. If you find one, it's not prime and you `break` early.

**54. Write a program to print all elements of an array using a `for` loop.**
```javascript
let arr = ["a", "b", "c"];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```
Use the index `i` to access each element from position 0 up to `arr.length - 1`.

**55. Write a program to print all elements of an array using a `while` loop.**
```javascript
let arr = ["a", "b", "c"], i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}
```
Same idea as `for` loop, but you manage the index variable yourself outside and update it inside the body.

**56. Write a program to find the largest element in an array using a loop.**
```javascript
let arr = [3, 7, 2, 9, 5], max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
}
console.log(max); // 9
```
Start with the first element as the max, then compare each remaining element — update max if you find a bigger one.

**57. Write a program using `while (true)` and `break` to exit when a condition is met.**
```javascript
let i = 0;
while (true) {
    if (i > 3) break;
    console.log(i);
    i++;
}
```
Run forever (`while true`), but `break` out when `i` exceeds 3. Prints 0, 1, 2, 3.

**58. Write a program using nested loops to generate a multiplication table (1 to 10).**
```javascript
for (let i = 1; i <= 10; i++) {
    let row = "";
    for (let j = 1; j <= 10; j++) {
        row += (i * j).toString().padStart(4, " ");
    }
    console.log(row);
}
```
Outer loop picks the row number, inner loop calculates each column. It prints a full 10×10 grid.

**59. Write a program that retries an operation 3 times using a `do...while` loop.**
```javascript
let attempts = 0, success = false;
do {
    attempts++;
    console.log(`Attempt ${attempts}`);
    // try operation here
    success = Math.random() > 0.7; // random success
} while (!success && attempts < 3);
```
The body runs first (attempt 1), checks if success or max attempts reached, and retries if needed. `do...while` is perfect for this because you always try at least once.

**60. Write a program to print numbers from 10 down to 1 in reverse order.**
```javascript
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
```
Start at 10, keep going while `i >= 1`, and decrement with `i--`. Prints 10, 9, 8, ... 1.

---

## Hard Questions (61–80)

**61. Explain the difference between `for` and `while` loops. When would you use each?**
`for` is best when you know the exact count upfront — like iterating an array with `for (let i = 0; i < arr.length; i++)`. `while` is better when you're waiting for something uncertain, like `while (!userLoggedIn) { wait(); }`.

**62. What is the performance difference between `for`, `while`, and `do...while`?**
There's basically no performance difference between them — they're all equally fast. Your choice should be based on readability and which one makes the code clearer, not speed.

**63. How does `break` work inside nested loops? Does it exit all loops or just the inner one?**
`break` only exits the loop it's directly inside — the innermost one. The outer loop keeps running normally. To break out of all loops, you'd need a labeled statement or a flag variable.

**64. How would you break out of an outer loop from inside a nested loop?**
Use a label: `outer: for (...) { for (...) { if (condition) break outer; } }`. The label names the outer loop, so `break outer;` exits both loops at once.

**65. What happens if you use `continue` inside a nested loop?**
`continue` skips the rest of the current iteration of the innermost loop only. The outer loop doesn't care — it keeps going with its next value.

**66. Can you use `for...of` on a plain object? Why or why not?**
No. `for...of` works on iterables (arrays, strings, Maps, Sets), but plain objects aren't iterable by default. You'd get a TypeError. Use `for...in` or `Object.keys()` for objects.

**67. What is the difference between `for...in` and `for...of`?**
`for...in` gives you the **keys** (property names) — for arrays that's the indices as strings ("0", "1", "2"). `for...of` gives you the **values**. Use `for...in` for objects, `for...of` for arrays.

**68. How does V8 optimize `for` loops internally?**
V8 does things like caching `arr.length` so it's not re-evaluated, moving calculations that don't change out of the loop, removing bounds checks when it knows the access is safe, and compiling hot loops with TurboFan.

**69. What is the "loop-invariant code motion" optimization?**
If you have a calculation inside a loop that produces the same result every iteration, V8 moves it outside automatically. For example, `let x = Math.PI * 2;` inside a loop gets hoisted out so it runs once, not 1000 times.

**70. When would you choose a `do...while` over a `while` loop in real-world code?**
Whenever the action needs to happen before you can check the condition. Like retry logic — "try this API call, and if it fails, retry up to 3 times." Or polling — "check the status, and if it's not done, wait and check again."

**71. Explain how `var` vs `let` scoping affects loops with asynchronous callbacks.**
`var` is function-scoped, so all callbacks share one variable — when they fire later, they all see the final value. `let` is block-scoped and creates a fresh binding per iteration, so each callback gets its own correct value.

**72. What happens if a loop condition never becomes false?**
You get an infinite loop. Since JavaScript runs on a single thread, the loop hogs the CPU forever — no other code runs, the browser freezes, `setTimeout` callbacks never fire, and you'll have to kill the process.

**73. How would you implement a "retry with backoff" logic using a loop?**
Use a `for` loop or `while` loop with a delay that increases each attempt: wait 1s, then 2s, then 4s (exponential). Inside the loop, try the operation, if it fails, `await sleep(delay)` and double the delay for next time.

**74. Can you modify an array while iterating over it? What are the risks?**
You can, but it's risky. If you remove an element with `splice()`, all later indices shift left — so you might skip elements or access out-of-bounds. If you must modify in-place, iterate backwards or use `filter()`.

**75. What is the difference between a `for` loop and the `forEach()` method?**
`for` is a language construct — it works with `break`, `continue`, and `await`. `forEach()` is an array method that takes a callback — it can't be broken early and doesn't work with `await` (it fires all callbacks without waiting).

**76. How would you iterate over the properties of an object?**
Use `for...in` for enumerable properties (including inherited ones), or get your own keys with `Object.keys(obj)` and loop with `for...of` or `forEach`. `Object.entries()` gives you both key and value.

**77. How do you handle `async/await` inside a `for` loop vs `forEach`?**
`for` loop properly awaits each iteration sequentially — it's the right choice for async operations. `forEach` fires all callbacks immediately without awaiting, so operations run in parallel, not in sequence. Use `for...of` for sequential async.

**78. What is the "off-by-one" error? Give an example.**
It's when your loop runs one time too many or one too few. Common example: using `i <= arr.length` instead of `i < arr.length` — you access `arr[arr.length]` which is `undefined`. Or starting at 1 instead of 0.

**79. How would you implement a loop that runs exactly N times using `while`?**
```javascript
let count = 0;
while (count < N) {
    // do something
    count++;
}
```
Keep a counter, increment it each iteration, and stop when it reaches N.

**80. Explain the concept of "loop unrolling" as a compiler optimization.**
Instead of running a loop body 4 times with a condition check each time, the compiler duplicates the body 4 times in a row without the loop overhead. It's faster but makes the code bigger. V8 does this automatically for small loops.

---

## Tricky Output Based Questions (81–90)

**81. What is the output?**
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);
```
Prints 0, 1, 2, 3, 4 then throws a ReferenceError. `let` is block-scoped to the `for` loop, so `i` doesn't exist outside — you can't access it after the loop ends.

**82. What is the output?**
```javascript
let i = 0;
for (; ;) {
    if (i > 3) break;
    console.log(i);
    i++;
}
```
Prints 0, 1, 2, 3. All three `for` parts are empty, making it infinite — but `break` saves us when `i` exceeds 3.

**83. What is the output?**
```javascript
let i = 0;
while (i++ < 5) {
    console.log(i);
}
```
Prints 1, 2, 3, 4, 5. `i++` uses the current value for comparison, then increments. So the condition checks 0 < 5, then `i` becomes 1 before the body runs. Sneaky, right?

**84. What is the output?**
```javascript
let i = 0;
while (++i < 5) {
    console.log(i);
}
```
Prints 1, 2, 3, 4. `++i` increments first (i becomes 1), then checks `1 < 5`. When `i` becomes 5, `5 < 5` is false, so the body never runs for 5.

**85. What is the output?**
```javascript
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (j === 1) continue;
        console.log(i, j);
    }
}
```
Prints: (0,0), (0,2), (1,0), (1,2), (2,0), (2,2). When `j` is 1, `continue` skips that inner iteration. So each row only prints columns 0 and 2.

**86. What is the output?**
```javascript
for (let i = 0; i < 5; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
}
```
Prints 1, 3. `i % 2 === 0` checks if the number is even — if so, skip it. Only odd numbers (1 and 3) get printed. 5 is excluded because the loop stops at `i < 5`.

**87. What is the output?**
```javascript
let i = 10;
while (i--) {
    console.log(i);
}
```
Prints 9, 8, 7, ... 0. The condition checks `i` (which is truthy for 10 to 1), then decrements. When `i` becomes 0, it's falsy, so the loop stops after printing 0.

**88. What is the output?**
```javascript
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log(sum);
```
Prints 15. Running total: 0+1=1, +2=3, +3=6, +4=10, +5=15.

**89. What is the output?**
```javascript
let x = 5;
do {
    console.log(x);
    x--;
} while (x > 0);
```
Prints 5, 4, 3, 2, 1. The body runs first (x=5), then checks condition, decrements each time. When x becomes 0, `0 > 0` is false and the loop stops.

**90. What is the output?**
```javascript
for (let i = 1; i <= 3; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "* ";
    }
    console.log(line.trim());
}
```
Prints a triangle:
```
*
* *
* * *
```
Row 1 gets 1 star, row 2 gets 2 stars, row 3 gets 3 stars.

---

## Automation Testing — Scenario Based Questions (91–100)

**91. You need to retry a test step 3 times before marking it as failed. Which loop would you use and why?**
A `for` loop with a counter — `for (let attempt = 1; attempt <= 3; attempt++)`. You know exactly how many retries you need, and `for` keeps the counter clean and readable.

**92. Write a loop to iterate over an array of test data and execute a test function for each element.**
```javascript
for (const testCase of testData) {
    runTest(testCase);
}
```
`for...of` is perfect here — it gives you each value directly without worrying about indices.

**93. Your test needs to wait for an element to appear on the page, checking every 500ms up to 10 seconds. Which loop pattern would you use?**
A `while` loop with a timeout: `let elapsed = 0; while (elapsed < 10000 && !elementFound) { wait(500); elapsed += 500; }`. You don't know how many checks you'll need, so `while` fits best.

**94. You have a list of test environments. Write a loop that prints each environment URL.**
```javascript
const envs = ["dev", "staging", "prod"];
for (const env of envs) {
    console.log(`https://${env}.example.com`);
}
```
Just loop over the array and build each URL with a template literal.

**95. How would you use a loop to generate test data (e.g., 100 user objects)?**
```javascript
const users = [];
for (let i = 1; i <= 100; i++) {
    users.push({ id: i, name: `User${i}`, email: `user${i}@test.com` });
}
```
A straightforward `for` loop that pushes a new object each iteration. Great for creating bulk test fixtures.

**96. Write a loop that compares actual vs expected values from two arrays in a test assertion.**
```javascript
for (let i = 0; i < expected.length; i++) {
    console.log(actual[i] === expected[i] ? "PASS" : "FAIL");
}
```
Use an indexed `for` loop so you can compare matching positions from both arrays side by side.

**97. You need to run the same test case with different login credentials from an array. Which loop is most appropriate?**
`for...of` — it's clean and readable: `for (const creds of credentials) { login(creds); runTest(); }`. Each iteration gets the next set of credentials and runs the test.

**98. How would you use a `do...while` loop for a polling mechanism in test automation?**
```javascript
let response;
do {
    response = await pollForResult();
} while (!response && retries < 5);
```
`do...while` guarantees you poll at least once — perfect because you can't check the result before making the first call.

**99. Write a nested loop to test all combinations of browser × viewport size.**
```javascript
const browsers = ["Chrome", "Firefox", "Safari"];
const viewports = [375, 768, 1440];
for (const browser of browsers) {
    for (const width of viewports) {
        console.log(`Testing ${browser} at ${width}px`);
    }
}
```
Nested loop gives you every combination — 3 browsers × 3 viewports = 9 test scenarios.

**100. You need to retry an API call with exponential backoff. Design a loop-based retry mechanism.**
```javascript
for (let attempt = 1; attempt <= 5; attempt++) {
    try { return await apiCall(); }
    catch (err) {
        if (attempt === 5) throw err;
        await new Promise(r => setTimeout(r, Math.pow(2, attempt) * 1000));
    }
}
```
Each failed attempt waits 2^attempt seconds (2s, 4s, 8s, 16s) before retrying. After 5 failures, it gives up and throws.
