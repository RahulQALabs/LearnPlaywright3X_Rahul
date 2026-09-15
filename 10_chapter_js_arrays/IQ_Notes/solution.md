# Interview Questions — Solutions

## Easy Questions (1–15)

**1. What is an array in JavaScript?**
An array is a container that holds multiple values in a single variable, with each value stored at a numbered position called an index. For example, `["chrome", "firefox", "ie"]` is an array of browser names — instead of having three separate variables, you store them all together.

**2. How do you create an empty array?**
Just use square brackets with nothing inside: `let arr = [];`. That's it — you now have an empty array ready to be filled.

**3. How do you create an array with initial values?**
Put the values inside square brackets separated by commas: `let browsers = ["chrome", "firefox", "ie"];`. You can have strings, numbers, booleans, or even mix them all together.

**4. What is the difference between array literal `[]` and `new Array()`?**
`[]` is the preferred way — it's shorter, faster, and avoids confusion. `new Array(3)` creates an array with 3 empty slots (not `[3]`), while `[3]` creates an array containing the number 3. Stick with `[]`.

**5. How do you find the length of an array?**
Use the `.length` property: `["chrome", "firefox", "ie"].length` returns `3`. It tells you how many elements are currently in the array.

**6. How do you access the first element of an array?**
Use index `0`: `browsers[0]`. Arrays are zero-indexed, so the first element is always at position 0. For `["chrome", "firefox", "ie"]`, `browsers[0]` gives `"chrome"`.

**7. How do you access the last element of an array?**
You can use `browsers[browsers.length - 1]`, or more cleanly with `.at(-1)`: `browsers.at(-1)` gives the last element. The `.at()` method is newer and way more readable.

**8. What does `array[index]` return if the index doesn't exist?**
It returns `undefined`. Arrays don't throw errors for out-of-bounds access — they just give you `undefined` and move on.

**9. What is the `.at()` method? How is it different from bracket notation?**
`.at()` supports negative indexing, so `arr.at(-1)` gives the last element and `arr.at(-2)` gives the second-to-last. Bracket notation `arr[-1]` doesn't work — it treats `-1` as a property name, not a position.

**10. Can arrays in JavaScript hold mixed data types?**
Yes. You can have `[1, "hello", true, null, {name: "test"}]` in the same array. JavaScript doesn't enforce type consistency, so mixing types is perfectly valid.

**11. What is the index of the first element in an array?**
0. Arrays are zero-indexed, so position 0 is first, position 1 is second, and so on.

**12. What is `Array.of()` used for?**
It creates an array from its arguments without the length gotcha. `Array.of(10, 20, 30)` gives `[10, 20, 30]`, while `new Array(10)` gives an array of 10 empty slots. Use `Array.of()` when you want to be explicit about values.

**13. What is `Array.from()` used for?**
It converts iterable things (like strings, Sets, Maps) into real arrays. `Array.from("Hello")` gives `['H', 'e', 'l', 'l', 'o']`. Handy when you're dealing with DOM node lists or other array-like structures.

**14. How do you check if a value exists in an array?**
Use `.includes()`: `["pass", "fail"].includes("pass")` returns `true`. It's the cleanest way for a simple yes/no check.

**15. What does `indexOf` return when an element is not found?**
It returns `-1`. So `["pass", "fail"].indexOf("skip")` gives `-1`, which means "not found."

---

## Medium Questions (16–40)

**16. What is the output of this code?**
```javascript
let arr = [10, 20, 30];
console.log(arr.length);   // 3
console.log(arr.at(-1));   // 30 — last element
console.log(arr.at(-3));   // 10 — first element (3rd from end)
console.log(arr.at(-4));   // undefined — only 3 elements, -4 is out of bounds
```

**17. What is the output of this code?**
```javascript
let statuses = ("pass", "fail", "skip");
console.log(statuses[0]);  // "skip"
```
Wait, that's using parentheses `()` not square brackets `[]`. The comma operator inside `()` returns the last value, so `statuses` is actually just `"skip"`, not an array. `statuses[0]` gives `"s"` — the first character of the string.

**18. What is the output of this code?**
```javascript
let statuses = ["pass", "fail", "skip"];
console.log(statuses[-1]);  // undefined — bracket doesn't support negative
console.log(statuses.at(-1)); // "skip" — .at() does support negative
```
Bracket notation treats `-1` as a property key (which doesn't exist), so it returns `undefined`. `.at(-1)` properly counts from the end and gives `"skip"`.

**19. What is the output of this code?**
```javascript
let arr = [1, 2, 3, 4, 5];
arr.push(6);   // [1, 2, 3, 4, 5, 6]
arr.pop();     // back to [1, 2, 3, 4, 5]
console.log(arr);  // [1, 2, 3, 4, 5]
```
Push adds 6 to the end, pop removes it from the end — net effect is nothing changes.

**20. What does `push()` return?**
It returns the **new length** of the array. `[1, 2].push(3)` returns `3` because the array now has 3 elements.

**21. What does `pop()` return?**
It returns the **removed element** itself. `[1, 2, 3].pop()` returns `3` — the value that was removed from the end.

**22. What is the difference between `push()` and `unshift()`?**
`push()` adds to the **end** of the array, `unshift()` adds to the **beginning**. So `push(4)` on `[1,2,3]` gives `[1,2,3,4]`, while `unshift(0)` gives `[0,1,2,3]`.

**23. What is the difference between `pop()` and `shift()`?**
`pop()` removes from the **end** (fast), `shift()` removes from the **beginning** (slower — shifts all other elements left). `[1,2,3].pop()` removes 3, `[1,2,3].shift()` removes 1.

**24. What does `splice(2, 1)` do?**
Starting at index 2, it removes 1 element. So `[1,2,3,4,5].splice(2, 1)` removes the element at index 2 (that's `3`), leaving `[1,2,4,5]`.

**25. What does `splice(2, 0, 99)` do?**
Starting at index 2, it removes 0 elements and inserts 99. So `[1,2,3,4,5].splice(2, 0, 99)` gives `[1,2,99,3,4,5]` — 99 is inserted at position 2 without removing anything.

**26. What does `splice(-1, 1, 1)` do?**
Starting at the last element (index -1), it removes 1 element and inserts 1. So `[1,2,3,4,5].splice(-1, 1, 1)` replaces the last element (5) with 1, giving `[1,2,3,4,1]`.

**27. What is the difference between `splice()` and `slice()`?**
`splice` **mutates** the original array (adds/removes elements), while `slice` returns a **copy** without changing the original. `splice` is for surgery, `slice` is for copying.

**28. What is the output of this code?**
```javascript
let results = ["pass", "fail", "pass", "error"];
console.log(results.indexOf("pass"));      // 0 — first "pass" is at index 0
console.log(results.lastIndexOf("pass"));  // 2 — last "pass" is at index 2
console.log(results.includes("skip"));     // false — "skip" isn't in the array
```

**29. What is the output of this code?**
```javascript
let num = [10, 20, 30, 40, 50];
console.log(num.find(x => x > 20));        // 30 — first element greater than 20
console.log(num.findIndex(x => x > 20));   // 2 — index of that element
```
`find` returns the actual value (30), `findIndex` returns the position (2).

**30. What is the output of this code?**
```javascript
let num = [10, 20, 30, 40, 50];
console.log(num.findLast(x => x > 20));       // 50 — last element > 20
console.log(num.findLastIndex(x => x > 20));  // 4 — index of 50
```
`findLast` searches from the end, so it finds 50 instead of 30. `findLastIndex` gives the position of that last match.

**31. What do `map()`, `filter()`, and `reduce()` have in common?**
They all create new arrays or values without mutating the original. They're the functional trio — `map` transforms, `filter` selects, `reduce` combines.

**32. What is the output of this code?**
```javascript
let scores = [45, 70, 85];
let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
console.log(grades);  // ["Fail", "Fail", "Pass"]
```
45 > 70? No → "Fail". 70 > 70? No → "Fail". 85 > 70? Yes → "Pass".

**33. What is the output of this code?**
```javascript
let scores = [45, 70, 85, 93, 99];
let passing = scores.filter(s => s >= 70);
console.log(passing);  // [70, 85, 93, 99]
```
45 is filtered out (it's < 70), the rest pass through. Result is a smaller array.

**34. What is the output of this code?**
```javascript
let scores = [45, 70, 85];
let total = scores.reduce((sum, s) => sum + s, 0);
console.log(total);  // 200
```
Start at 0, add each score: 0+45=45, +70=115, +85=200.

**35. What is the output of this code?**
```javascript
let fruits = ["banana", "apple", "grapes"];
fruits.sort();
console.log(fruits);  // ["apple", "banana", "grapes"]
```
Strings sort alphabetically by default. Apple comes first, then banana, then grapes. Works as expected.

**36. What is the output of this code?**
```javascript
let num = [10, 1, 21, 3];
console.log(num.sort());  // [1, 10, 21, 3]
```
Wait, 3 at the end? Yes — because default sort converts numbers to strings and sorts alphabetically. "10" comes before "3" alphabetically because "1" < "3".

**37. Why does `[10, 1, 21, 3].sort()` give unexpected results?**
Because `sort()` converts everything to strings first. So 10 becomes "10", 3 becomes "3", and alphabetically "10" < "3" because "1" < "3". Always use a compare function for numbers.

**38. How do you sort numbers in ascending order?**
Use a compare function: `num.sort((a, b) => a - b)`. This tells JavaScript to sort numerically. `a - b` gives negative if a comes first, positive if b comes first.

**39. How do you sort numbers in descending order?**
Flip the compare function: `num.sort((a, b) => b - a)`. Biggest numbers first, smallest last.

**40. What is the output of this code?**
```javascript
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.slice(1, 3));  // [2, 3] — from index 1 up to (not including) 3
console.log(arr.slice(-2));    // [7, 8] — last 2 elements
```
`slice(1, 3)` grabs elements at positions 1 and 2 (3 is excluded). `slice(-2)` grabs the last 2 elements.

---

## Logical / Reasoning Questions (41–55)

**41. What is the output and why?**
```javascript
let arr = new Array(3);
console.log(arr.length);  // 3
console.log(arr[0]);      // undefined
```
`new Array(3)` creates an array of length 3 with empty slots. The slots exist (length is 3) but they're empty, so accessing `arr[0]` gives `undefined`.

**42. What is the output and why?**
```javascript
let arr = new Array(3, 4);
console.log(arr);  // [3, 4]
```
When you pass two or more arguments to `new Array()`, it creates an array with those values. Single number argument = length, multiple arguments = values.

**43. What is the difference between `new Array(3)` and `[3]`?**
`new Array(3)` creates an array with 3 empty slots (length 3, no values). `[3]` creates an array with one element: the number 3. Huge difference — one is "three empty spots," the other is "one spot with the value 3."

**44. What is the output and why?**
```javascript
let chars = Array.from("Hello");
console.log(chars);  // ['H', 'e', 'l', 'l', 'o']
```
`Array.from()` converts the string "Hello" character by character into an array. Each letter becomes its own array element.

**45. What is the output and why?**
```javascript
let a = [1, 2, 3];
a[10] = 99;
console.log(a.length);  // 11
console.log(a);         // [1, 2, 3, empty × 7, 99]
```
Assigning to index 10 forces the array to grow. Length becomes 11 (index 0-10), and the slots between 3 and 10 are empty. JavaScript arrays are sparse — they can have gaps.

**46. What is the output and why?**
```javascript
let arr = [1, 2, 3];
arr.push(4, 5);   // end: [1, 2, 3, 4, 5]
arr.unshift(0);   // front: [0, 1, 2, 3, 4, 5]
console.log(arr); // [0, 1, 2, 3, 4, 5]
```
`push` adds to the end, `unshift` adds to the front. Combined, 0 is at position 0 and 4,5 are at the end.

**47. What is the output and why?**
```javascript
let browsers = ["chrome", "safari", "ie"];
let removed = browsers.shift();
console.log(browsers);  // ["safari", "ie"]
console.log(removed);   // "chrome"
```
`shift()` removes the first element and returns it. So `browsers` loses "chrome" and `removed` gets "chrome" as its value.

**48. What is the output and why?**
```javascript
let tests = ["login", "checkout", "search"];
for (let test of tests) {
    console.log(test);
}
// login, checkout, search (each on its own line)
```
`for...of` iterates over the **values** of the array. Each `test` variable holds the actual string value, not the index.

**49. What is the output and why?**
```javascript
let tests = ["login", "checkout", "search"];
for (let test of tests) {
    console.log(tests[test]);
}
// undefined, undefined, undefined
```
`for...of` gives you values, not indices. So `test` is `"login"`, and `tests["login"]` doesn't exist as an index. You're looking up a string property that doesn't exist, so you get `undefined`.

**50. Why does `for...of` give undefined when you use `array[value]`?**
Because `for...of` gives values, not indices. If you need the index, use a regular `for` loop with `i`, or `arr.entries()` with `for (let [i, val] of arr.entries())`.

**51. What is the output and why?**
```javascript
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1);     // remove 1 element at index 2
console.log(arr);     // [1, 2, 4, 5]
```
Index 2 is the value 3. Removing it shifts 4 and 5 left one position.

**52. What is the output and why?**
```javascript
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 0, 99); // remove 0, insert 99 at index 2
console.log(arr);     // [1, 2, 99, 3, 4, 5]
```
99 is inserted at position 2, and all elements from 3 onwards shift right one spot.

**53. What is the output and why?**
```javascript
let arr = [1, 2, 3, 4, 5];
let sliced = arr.slice(1, 3);
console.log(sliced);  // [2, 3]
console.log(arr);     // [1, 2, 3, 4, 5] — original unchanged!
```
`slice(1, 3)` grabs indices 1 and 2 (3 is excluded). The original array `arr` is untouched because `slice` creates a copy.

**54. What is the output and why?**
```javascript
let arr = [1, 2, 3, 4, 5];
let spliced = arr.splice(1, 3);
console.log(spliced);  // [2, 3, 4] — the removed elements
console.log(arr);      // [1, 5] — original modified!
```
`splice(1, 3)` removes 3 elements starting at index 1 (values 2, 3, 4). It returns the removed values, and the original array is now `[1, 5]`. This is why `splice` is "surgery" — it permanently changes the array.

**55. What is the output and why?**
```javascript
let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a);  // [1, 2, 3, 4]
```
`b = a` doesn't copy the array — it creates a reference to the same array in memory. So modifying `b` also modifies `a`. They're both pointing to the same data.

---

## Programming Questions (56–80)

**56. Write a program to create an array of 5 fruits and print each one.**
```javascript
let fruits = ["apple", "banana", "cherry", "dates", "elderberry"];
for (let fruit of fruits) {
    console.log(fruit);
}
```
Create the array with literals, then loop with `for...of` to print each fruit.

**57. Write a program to add an element to the end of an array.**
```javascript
let arr = [1, 2, 3];
arr.push(4);
console.log(arr);  // [1, 2, 3, 4]
```
`push()` adds to the end. Simple and fast.

**58. Write a program to remove the last element of an array.**
```javascript
let arr = [1, 2, 3];
arr.pop();
console.log(arr);  // [1, 2]
```
`pop()` removes and returns the last element. Here we just want to remove it.

**59. Write a program to add an element to the beginning of an array.**
```javascript
let arr = [2, 3, 4];
arr.unshift(1);
console.log(arr);  // [1, 2, 3, 4]
```
`unshift()` adds to the front and shifts everything right.

**60. Write a program to remove the first element of an array.**
```javascript
let arr = [1, 2, 3];
arr.shift();
console.log(arr);  // [2, 3]
```
`shift()` removes the first element and shifts everything left.

**61. Write a program to find the index of a specific element in an array.**
```javascript
let arr = ["a", "b", "c", "b"];
console.log(arr.indexOf("b"));   // 1 — first occurrence
console.log(arr.lastIndexOf("b")); // 3 — last occurrence
```
`indexOf` finds the first match, `lastIndexOf` finds the last.

**62. Write a program to check if an element exists in an array.**
```javascript
let arr = ["pass", "fail", "skip"];
console.log(arr.includes("fail"));  // true
console.log(arr.includes("error")); // false
```
`includes()` gives a clean true/false answer. No comparing with -1 needed.

**63. Write a program to print all elements of an array using a `for` loop.**
```javascript
let arr = [10, 20, 30, 40, 50];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```
Traditional indexed loop. Gives you the index `i` and the value `arr[i]`.

**64. Write a program to print all elements of an array using `for...of`.**
```javascript
let arr = [10, 20, 30, 40, 50];
for (let val of arr) {
    console.log(val);
}
```
Cleanest way when you only need values, not indices.

**65. Write a program to print all elements of an array using `forEach`.**
```javascript
let arr = [10, 20, 30, 40, 50];
arr.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});
```
`forEach` gives you both value and index through callback parameters.

**66. Write a program to transform an array of numbers into "Pass"/"Fail" using `map`.**
```javascript
let scores = [45, 70, 85, 93, 99];
let grades = scores.map(s => s >= 70 ? "Pass" : "Fail");
console.log(grades);  // ["Fail", "Pass", "Pass", "Pass", "Pass"]
```
`map` transforms each element. The result array has the same length as the original.

**67. Write a program to filter numbers greater than a threshold.**
```javascript
let numbers = [10, 25, 30, 45, 50, 65];
let big = numbers.filter(n => n > 30);
console.log(big);  // [45, 50, 65]
```
`filter` keeps elements where the callback returns true. Result may be smaller than original.

**68. Write a program to calculate the sum of all numbers in an array using `reduce`.**
```javascript
let numbers = [10, 20, 30, 40, 50];
let total = numbers.reduce((sum, n) => sum + n, 0);
console.log(total);  // 150
```
`reduce` starts at 0 and adds each number. The accumulator `sum` grows with each iteration.

**69. Write a program to sort an array of strings alphabetically.**
```javascript
let fruits = ["banana", "apple", "grapes", "cherry"];
fruits.sort();
console.log(fruits);  // ["apple", "banana", "cherry", "grapes"]
```
Default `sort()` works perfectly for strings in alphabetical order.

**70. Write a program to sort an array of numbers in ascending order.**
```javascript
let nums = [10, 1, 21, 3, 5];
nums.sort((a, b) => a - b);
console.log(nums);  // [1, 3, 5, 10, 21]
```
The compare function `a - b` gives ascending order. Without it, 10 and 21 would come before 3.

**71. Write a program to sort an array of numbers in descending order.**
```javascript
let nums = [10, 1, 21, 3, 5];
nums.sort((a, b) => b - a);
console.log(nums);  // [21, 10, 5, 3, 1]
```
Flip the compare to `b - a` and you get biggest first.

**72. Write a program to extract elements from index 2 to 5 using `slice`.**
```javascript
let arr = [0, 1, 2, 3, 4, 5, 6, 7];
let extracted = arr.slice(2, 5);
console.log(extracted);  // [2, 3, 4]
```
`slice(2, 5)` grabs indices 2, 3, and 4 (5 is excluded). Original array stays as is.

**73. Write a program to remove the 3rd element from an array using `splice`.**
```javascript
let arr = [10, 20, 30, 40, 50];
arr.splice(2, 1);  // index 2 = third element, remove 1
console.log(arr);  // [10, 20, 40, 50]
```
Index 2 is the third position. Removing it shifts everything right of it left by one.

**74. Write a program to replace the 2nd element in an array using `splice`.**
```javascript
let arr = [10, 20, 30, 40, 50];
arr.splice(1, 1, 25);  // index 1 = second element, remove 1, insert 25
console.log(arr);      // [10, 25, 30, 40, 50]
```
Remove the element at index 1 (20) and put 25 in its place.

**75. Write a program to find the first number greater than 50 in an array.**
```javascript
let nums = [10, 25, 55, 30, 60];
let found = nums.find(n => n > 50);
console.log(found);  // 55
```
`find` returns the first match and stops. 55 is the first number > 50.

**76. Write a program to find the index of the first number greater than 50.**
```javascript
let nums = [10, 25, 55, 30, 60];
let idx = nums.findIndex(n => n > 50);
console.log(idx);  // 2
```
Same as find, but returns the position (index 2) instead of the value.

**77. Write a program to find the last even number in an array.**
```javascript
let nums = [1, 4, 7, 10, 15, 20];
let lastEven = nums.findLast(n => n % 2 === 0);
console.log(lastEven);  // 20
```
`findLast` searches from the end, so it finds 20 (the last even number) instead of 4 or 10.

**78. Write a program using `Array.from()` to convert a string to an array of characters.**
```javascript
let word = "JavaScript";
let chars = Array.from(word);
console.log(chars);  // ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
```
Each character in the string becomes an element in the array.

**79. Write a program using `Array.of()` to create an array of test scores.**
```javascript
let scores = Array.of(85, 92, 78, 95, 88);
console.log(scores);  // [85, 92, 78, 95, 88]
```
`Array.of` creates an array from its arguments. Safer than `new Array()` because it treats single numbers as values, not length.

**80. Write a program to reverse an array using `reverse()`.**
```javascript
let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr);  // [5, 4, 3, 2, 1]
```
`reverse()` reverses the array in place. The original array is modified.

---

## Hard Questions (81–100)

**81. What is the difference between `for...of` and `forEach` for iterating arrays?**
`for...of` is a language construct — you can `break` or `continue` with it, and it works with `await`. `forEach` is a method that takes a callback — you can't break out of it, and it doesn't handle `await` properly (all callbacks fire without waiting).

**82. Can you use `break` inside `forEach`? Why or why not?**
No. `forEach` takes a callback function, and `break` isn't valid inside a function unless it's inside a loop. If you need to stop early, use `for...of` or `some()`/`every()`.

**83. How does `map` differ from `forEach`?**
`map` returns a new array with transformed values — it's for mapping one array to another. `forEach` just executes a function for each element and returns `undefined`. Use `map` when you want a result, `forEach` when you just want to do something with each item.

**84. What is the difference between `slice` and `splice`? Which one mutates the original?**
`slice` creates a copy (doesn't modify original), `splice` modifies the original. Remember: sli**c**e = **c**opy, spl**i**ce = **i**n-place modification.

**85. How does `filter` decide which elements to keep?**
It runs a callback on each element. If the callback returns `true` (truthy), the element goes into the new array. If `false` (falsy), it's skipped. The result is a new array with only the elements that passed the test.

**86. What happens when you assign a value to an index beyond the array length?**
The array grows to accommodate the new index. Any gaps between the old length and new index are filled with empty slots. For example, `[1].length` is 1, then `arr[100] = 5` makes length 101 with 99 empty slots in between.

**87. What is the time complexity of `push()` vs `unshift()`? Why is one faster?**
`push` is O(1) — it just adds to the end with no shifting. `unshift` is O(n) — it has to shift every existing element one position to the right. For large arrays, `push` is much faster.

**88. How does the default `sort()` work on numbers, and why does it fail?**
Default `sort()` converts every element to a string and compares them alphabetically. So 10 becomes "10" and 3 becomes "3" — alphabetically "10" comes before "3" because "1" < "3". This is why `[10, 1, 21, 3].sort()` gives `[1, 10, 21, 3]`.

**89. How do `find`, `findIndex`, `findLast`, and `findLastIndex` differ?**
`find` returns the first matching value, `findIndex` returns its index. `findLast` returns the last matching value, `findLastIndex` returns its index. First two search left-to-right, last two search right-to-left.

**90. What is the difference between `indexOf` and `findIndex`?**
`indexOf` compares by value (`===`) — it finds the first occurrence of an exact value. `findIndex` uses a callback function — you can search by condition. For example, `findIndex(x => x > 20)` can't be done with `indexOf`.

**91. How would you remove duplicate values from an array?**
```javascript
let arr = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(arr)];
console.log(unique);  // [1, 2, 3, 4, 5]
```
Pass the array to `new Set()` (which only keeps unique values), then spread it back into an array. One-liner.

**92. How do you flatten a nested array?**
Use `.flat()`: `[1, [2, 3], [4, [5, 6]]].flat()` gives `[1, 2, 3, 4, [5, 6]]`. For deeper nesting, pass a depth: `.flat(2)` gives `[1, 2, 3, 4, 5, 6]`.

**93. How do you check if two arrays are equal in JavaScript?**
You can't use `===` — it checks reference equality, not contents. You need to compare lengths and then each element: `arr1.length === arr2.length && arr1.every((val, i) => val === arr2[i])`. Or use `JSON.stringify(arr1) === JSON.stringify(arr2)` for simple cases.

**94. What is shallow copy vs deep copy? Does `slice` create a shallow or deep copy?**
Shallow copy copies references to nested objects, deep copy creates entirely new objects. `slice` creates a shallow copy — for primitive values it's fine, but if the array contains objects, both the original and copy still point to the same objects.

**95. How would you group an array of objects by a property?**
Use `reduce`:
```javascript
let students = [{grade: "A", name: "John"}, {grade: "B", name: "Jane"}, {grade: "A", name: "Jack"}];
let grouped = students.reduce((acc, s) => {
    (acc[s.grade] = acc[s.grade] || []).push(s);
    return acc;
}, {});
// { A: [{grade:"A", name:"John"}, {grade:"A", name:"Jack"}], B: [{grade:"B", name:"Jane"}] }
```
Each iteration adds the student to the correct grade bucket in the accumulator object.

**96. What is the spread operator `...` with arrays? How is it different from `concat`?**
The spread operator expands an array into individual elements: `let combined = [...arr1, ...arr2]`. It's cleaner than `concat` and more flexible — you can insert elements in the middle: `[1, ...arr, 5]`. `concat` only appends at the end.

**97. How do you convert an array-like object (like `arguments`) into a real array?**
Use `Array.from(arguments)` or `[...arguments]`. Before ES6, people used `Array.prototype.slice.call(arguments)`. `Array.from` is the modern, readable way.

**98. What is destructuring with arrays? Give an example.**
It's unpacking array values into variables: `let [first, second] = [10, 20, 30]` gives `first = 10`, `second = 20`. You can skip elements: `let [first, , third] = [10, 20, 30]` gives `first = 10`, `third = 30`. Or use rest: `let [head, ...tail] = [1, 2, 3, 4]` gives `head = 1`, `tail = [2, 3, 4]`.

**99. How does `reduce` work? Explain with an example that creates an object from an array.**
```javascript
let pairs = [["name", "John"], ["age", 30], ["city", "NYC"]];
let obj = pairs.reduce((acc, [key, val]) => {
    acc[key] = val;
    return acc;
}, {});
// { name: "John", age: 30, city: "NYC" }
```
Start with an empty object `{}`, and for each key-value pair, add it to the object. The accumulator `acc` grows with each iteration.

**100. What are the performance implications of using `shift` and `unshift` on large arrays?**
They're O(n) operations — every call shifts all existing elements one position. For a 10,000-element array, `shift` moves 9,999 elements. If you're frequently adding/removing from the front, consider using a different data structure or reverse the array and use `push`/`pop`.

---

## Tricky Output Based Questions (101–110)

**101. What is the output?**
```javascript
console.log(typeof [1, 2, 3]);          // "object"
console.log(Array.isArray([1, 2, 3]));  // true
```
`typeof` can't distinguish arrays from objects — it just says "object". Use `Array.isArray()` for a proper check.

**102. What is the output?**
```javascript
let arr = [1, 2, 3];
arr.length = 0;
console.log(arr);  // []
```
Setting `length` to 0 clears the array. All elements are gone. This is a (controversial) way to empty an array without creating a new one.

**103. What is the output?**
```javascript
let arr = [1, 2, 3];
arr.length = 5;
console.log(arr);   // [1, 2, 3, empty × 2]
console.log(arr[4]); // undefined
```
Increasing length creates empty slots. The array has space for 5 but indices 3 and 4 are empty.

**104. What is the output?**
```javascript
let a = [1, 2, 3];
let b = [1, 2, 3];
console.log(a === b);       // false — different references
console.log(a[0] === b[0]); // true — same primitive value
```
Two separate arrays are never `===` even if they have the same contents, because `===` compares references, not values. But individual elements are primitives, so `a[0] === b[0]` is true.

**105. What is the output?**
```javascript
let arr = [1, 2, 3, 4, 5];
let result = arr.filter(x => x > 10);
console.log(result);       // []
console.log(result.length); // 0
```
No element is greater than 10, so `filter` returns an empty array. It never returns `null` or `undefined` — always an array.

**106. What is the output?**
```javascript
let arr = [1, 2, 3];
arr.forEach((val, index) => {
    if (index === 1) break;
    console.log(val);
});
```
This throws a SyntaxError. `break` is not allowed inside `forEach` because the callback is a function, not a loop construct.

**107. What is the output?**
```javascript
let arr = [3, 1, 4, 1, 5, 9];
arr.sort();
console.log(arr);  // [1, 1, 3, 4, 5, 9]
```
Wait, this one actually works correctly! Because there are no double-digit numbers, string sorting happens to match numeric sorting. Lucky coincidence.

**108. What is the output?**
```javascript
let arr = [5, 2, 8, 1, 9];
arr.sort((a, b) => a - b);
console.log(arr);  // [1, 2, 5, 8, 9]
```
With a proper compare function, numbers sort numerically in ascending order.

**109. What is the output?**
```javascript
let arr = [1, [2, 3], [4, [5, 6]]];
console.log(arr.flat());   // [1, 2, 3, 4, [5, 6]] — 1 level deep
console.log(arr.flat(2));  // [1, 2, 3, 4, 5, 6] — 2 levels deep
```
`flat()` with no argument flattens one level. `flat(2)` goes two levels deep and fully flattens the nested structure.

**110. What is the output?**
```javascript
let arr = [10, 20, 30, 40, 50];
let [first, second, ...rest] = arr;
console.log(first, second);  // 10 20
console.log(rest);           // [30, 40, 50]
```
Destructuring unpacks the first two values into `first` and `second`. The rest operator `...rest` grabs everything else into a new array.

---

## Automation Testing — Scenario Based Questions (111–120)

**111. You have an array of test results: `["pass", "fail", "pass", "error"]`. How would you count how many are "pass"?**
```javascript
let results = ["pass", "fail", "pass", "error"];
let passCount = results.filter(r => r === "pass").length;
console.log(passCount);  // 2
```
Filter to keep only "pass" values, then check the length. Or use `reduce` if you want to do it in one pass.

**112. You need to check if all tests in an array passed. Which array method would you use?**
`every()` — it checks if every element passes a condition: `results.every(r => r === "pass")`. Returns `true` only if all are "pass". For "any passed," use `some()`.

**113. Write code to transform an array of test case objects into just their names.**
```javascript
let testCases = [{name: "Login", status: "pass"}, {name: "Checkout", status: "fail"}];
let names = testCases.map(tc => tc.name);
console.log(names);  // ["Login", "Checkout"]
```
`map` extracts the `name` property from each object into a new array of strings.

**114. Your test data has browser names. Sort them alphabetically before running tests.**
```javascript
let browsers = ["firefox", "chrome", "safari", "edge"];
browsers.sort();
console.log(browsers);  // ["chrome", "edge", "firefox", "safari"]
```
Default sort works perfectly for strings. Good to go.

**115. You need to extract only the failed tests from an array of results. Which method?**
`filter()`: `results.filter(r => r.status === "fail")` or `results.filter(r => r === "fail")` for simple arrays. It gives you a new array with only the failures.

**116. How would you combine two arrays of test data into one?**
Use the spread operator: `let combined = [...array1, ...array2]`. Or `concat`: `let combined = array1.concat(array2)`. Spread is more modern and lets you insert between other elements.

**117. Write code to find the first test case that starts with "login" in an array.**
```javascript
let tests = ["signup", "login_test", "checkout", "login_flow"];
let found = tests.find(t => t.startsWith("login"));
console.log(found);  // "login_test"
```
`find` stops at the first match. `startsWith` checks the beginning of the string.

**118. You have test scores. Use `reduce` to calculate the average score.**
```javascript
let scores = [85, 92, 78, 95, 88];
let avg = scores.reduce((sum, s) => sum + s, 0) / scores.length;
console.log(avg);  // 87.6
```
Sum all scores with `reduce`, then divide by the number of scores.

**119. How would you remove duplicate browser names from an array?**
```javascript
let browsers = ["chrome", "firefox", "chrome", "safari", "firefox"];
let unique = [...new Set(browsers)];
console.log(unique);  // ["chrome", "firefox", "safari"]
```
`new Set()` automatically removes duplicates. Spread it back into an array.

**120. You need to run the same test with different data sets from an array. Which iteration method is most appropriate and why?**
`for...of` — it's clean, supports `await` if tests are async, and you can `break` early if needed. `forEach` wouldn't work properly with async tests, and a traditional `for` loop is more verbose for just iterating values.
