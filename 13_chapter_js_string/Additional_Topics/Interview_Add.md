# Additional Topics — Interview Questions (Strings)

Questions covering the topics not in the main chapter: **regex (`search`/`match`/`matchAll`/`test`), string comparison & sorting, Unicode & emoji, padding & repeating, advanced replacement, `String.raw`, static methods, and URL encoding**.

---

## Easy Questions

1. What does `.search()` do?

2. What does `.match()` do?

3. What does `RegExp.test()` return?

4. What is the difference between `search` and `indexOf`?

5. What does `padStart()` do?

6. What does `padEnd()` do?

7. What does `repeat()` do?

8. What does `String.raw` do?

9. What does `encodeURIComponent()` do?

10. What does `decodeURIComponent()` do?

---

## Medium Questions

11. What is the output of this code?
```javascript
const log = "Order #10245 placed at 2026-07-25";
console.log(log.search(/\d+/));
console.log(log.match(/\d+/g));
```

12. What is the output of this code?
```javascript
console.log(/^\d+$/.test("12345"));
console.log(/^\d+$/.test("12a45"));
```

13. What is the output of this code?
```javascript
const pairs = [..."a1b2c3".matchAll(/([a-z])(\d)/g)].map(m => m[0]);
console.log(pairs);
```

14. What is the output of this code?
```javascript
console.log("7".padStart(3, "0"));
console.log("Name".padEnd(10, "."));
console.log("abcdef".padStart(3, "0"));
```

15. What is the output of this code?
```javascript
console.log("ab".repeat(3));
console.log("=".repeat(5));
```

16. What is the output of this code?
```javascript
console.log("abc".replace(/b/, "[$&]"));
console.log("2026-07-25".replace(/(\d+)-(\d+)-(\d+)/, "$3/$2/$1"));
```

17. What is the output of this code?
```javascript
console.log("a1b2".replace(/\d/g, d => d * 2));
```

18. What is the output of this code?
```javascript
console.log("😀".length);
console.log([..."😀"].length);
```

19. What is the output of this code?
```javascript
console.log(["b", "a", "C"].sort());
console.log(["b", "a", "C"].sort((x, y) => x.localeCompare(y)));
```

20. What does `"a".localeCompare("b")` return?

21. What is the output of this code?
```javascript
console.log(encodeURIComponent("playwright testing & JS"));
```

22. What is the output of this code?
```javascript
console.log(String.raw`C:\new\test`);
console.log(String.fromCharCode(72, 105));
```

---

## Hard Questions

23. What is the difference between `match()` with and without the `g` flag?

24. When does `match()` return `null`, and how do you safely access the result?

25. What is the difference between `match` and `matchAll`?

26. How do named capture groups work? Give an example.

27. How does the function replacer in `replace` work, and what arguments does it receive?

28. What do `$&`, `$1`, and `$2` mean in a replacement string?

29. How does `localeCompare` compare strings? What does its return value mean?

30. How do you sort `["item10", "item9"]` in natural numeric order?

31. Why is `["b","a","C"].sort()` not alphabetical, and how do you fix it?

32. What is Unicode normalization, and why would two visually identical strings compare as unequal?

33. How do `codePointAt` and `charCodeAt` differ for emoji?

34. Why does `"😀".split("")` break the emoji, and what should you use instead?

35. What is a tagged template literal? Give an example.

36. When is `String.raw` useful?

37. What is the difference between `encodeURI` and `encodeURIComponent`?

38. What is the output and why?
```javascript
console.log("é".normalize("NFC") === "e\u0301".normalize("NFC"));
```

39. How would you count how many times a substring appears using regex?

40. How would you validate that a string contains only digits?

41. How would you pad a number to a fixed width of 8 with leading zeros?

42. What is the output and why?
```javascript
console.log(String.fromCodePoint(128512));
console.log("😀".codePointAt(0));
```

---

## Bonus Interview Tips

- **Regex validation** is regex `.test()`, not string method — `/^\d+$/.test(s)`.
- **`match` returns `null`** on no match; `matchAll` needs the `g` flag.
- **Capture groups** `$1`, `$2` and `$&` (whole match) make `replace` powerful.
- **Function replacer** lets you transform each match programmatically.
- **`localeCompare`** returns negative / zero / positive — use it for correct sorting.
- **`{ numeric: true }`** gives natural ordering for IDs like `item9` before `item10`.
- **Emoji**: use `[...str]` and `codePointAt`, never `split("")`.
- **URL encoding**: `encodeURIComponent` for values, `encodeURI` for whole URLs.
