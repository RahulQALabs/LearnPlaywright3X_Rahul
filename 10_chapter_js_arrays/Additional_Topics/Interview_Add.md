# Additional Topics — Interview Questions (Arrays)

## Easy Questions

1. What does `every()` do?

2. What does `some()` do?

3. What is the difference between `every` and `some`?

4. What does `flat()` do?

5. What does `flatMap()` do?

6. What is array destructuring?

7. What does `Array.isArray()` do?

8. What is the spread operator for arrays?

9. What does `join()` do?

10. How do you create a 2D array?

---

## Medium Questions

11. What is the output of this code?
```javascript
const results = ["pass", "pass"];
console.log(results.every(r => r === "pass"));
console.log(results.some(r => r === "fail"));
```

12. What is the output of this code?
```javascript
console.log([].every(x => x > 0));
console.log([].some(x => x > 0));
```

13. What is the output of this code?
```javascript
const nested = [1, [2, 3], [4, [5, 6]]];
console.log(nested.flat());
console.log(nested.flat(2));
```

14. What is the output of this code?
```javascript
const words = ["hi there", "bye now"];
console.log(words.flatMap(w => w.split(" ")));
```

15. What is the output of this code?
```javascript
const a = [1, 2];
const b = [3, 4];
console.log([...a, 99, ...b]);
```

16. What is the output of this code?
```javascript
const scores = [85, 92, 78];
const [first, , third] = scores;
console.log(first, third);
```

17. What is the output of this code?
```javascript
const dupes = [1, 2, 2, 3];
console.log([...new Set(dupes)]);
```

18. What is the output of this code?
```javascript
console.log(typeof [1, 2]);
console.log(Array.isArray([1, 2]));
```

19. What does `for...of arr.entries()` give you?

20. How do you sort an array of objects by a property?

---

## Hard Questions

21. Why does `[].every()` return true?

22. What is the difference between `flat` and `flatMap`?

23. How does spread create a shallow copy? When does it fail?

24. What is the time complexity of `sort` on an array?

25. How would you deduplicate an array of objects?

26. What is the difference between `slice` and destructuring?

27. How do you iterate a 2D array?

28. What is the difference between `toSorted` and `sort`?

29. How does `localeCompare` improve string sorting?

30. What happens if you spread a string into an array?
