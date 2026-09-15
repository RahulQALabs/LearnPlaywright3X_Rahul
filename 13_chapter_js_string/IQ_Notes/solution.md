# Interview Questions — Strings (Solutions)

## Easy Questions (1–18)

**1. What is a string in JavaScript?**
A string is a sequence of characters used to represent text — like `"pass"`, `"https://qa.com"`, or a UI label. Strings are immutable: once created, they never change.

**2. How do you create a string in JavaScript?**
Three ways: `'single'`, `"double"`, or `` `backticks` ``. You can also use `String(value)` to convert another type. Literals (`'...'` / `"..."`) are the normal choice.

**3. What is the difference between single quotes, double quotes, and backticks?**
Single and double quotes are interchangeable. Backticks add two things: `${...}` interpolation and multi-line support. So `` `Hi ${name}` `` works, but `'Hi ${name}'` prints the literal text.

**4. What is a template literal?**
A string written with backticks that can embed expressions using `${...}`. Example: `` `Total: ${2 + 2}` `` gives `"Total: 4"`.

**5. How do you embed a variable inside a string?**
Use a template literal: `` `Hello ${name}` ``. With quotes you'd have to concatenate: `"Hello " + name`.

**6. How do you write a multi-line string?**
Use backticks — newlines are preserved: `` `line1\nline2` `` written across actual lines. With quotes you'd need explicit `\n`.

**7. How do you find the length of a string?**
Use the `.length` property: `"Hello".length` → `5`. It's a property, not a method — no parentheses.

**8. What is the index of the first character in a string?**
`0`. Strings are zero-indexed, so `"Hello"[0]` is `"H"`.

**9. How do you access the first character of a string?**
`str[0]`, `str.charAt(0)`, or `str.at(0)`. All three return `"H"` for `"Hello"`.

**10. How do you access the last character of a string?**
`str.at(-1)` is cleanest. Or `str[str.length - 1]`. Bracket notation with `str[-1]` returns `undefined`.

**11. What are strings immutable?**
It means a string's characters can never be changed after creation. Any "modifying" method actually returns a **new** string, leaving the original untouched.

**12. What does `str[0] = "H"` do to a string?**
Nothing — it's silently ignored. `"hello"` stays `"hello"`. To get a changed string you must create a new one, e.g. `"H" + str.slice(1)`.

**13. How do you convert a number to a string?**
`String(200)` → `"200"`, or `(200).toString()` → `"200"`. Note the parentheses — `200.toString()` is a syntax error.

**14. How do you convert a string to a number?**
`Number("42")` → `42`, `parseInt("42px", 10)` → `42`, `parseFloat("3.14")` → `3.14`, or unary plus `+"42"` → `42`.

**15. How do you convert a string to uppercase and lowercase?**
`"qa".toUpperCase()` → `"QA"` and `"QA".toLowerCase()` → `"qa"`. Both return a new string.

**16. How do you remove whitespace from both ends of a string?**
`str.trim()`: `"  QA  ".trim()` → `"QA"`. It returns a new string, so assign it: `str = str.trim()`.

**17. What does `trimStart()` do?**
Removes whitespace only from the **beginning**: `"  QA  ".trimStart()` → `"QA  "`. (Old name: `trimLeft`.)

**18. What does `trimEnd()` do?**
Removes whitespace only from the **end**: `"  QA  ".trimEnd()` → `"  QA"`. (Old name: `trimRight`.)

---

## Medium Questions (19–42)

**19. What is the output of this code?**
```javascript
let s = "Hello World";
console.log(s.length);   // 11
console.log(s[0]);       // "H"
console.log(s[7]);       // "W"
console.log(s[-1]);      // undefined — bracket notation has no negative indexing
```

**20. What is the output of this code?**
```javascript
let s = "Hello World";
console.log(s.at(-1));      // "d" — last character
console.log(s.at(-6));      // " " — the space, 6th from end
console.log(s.charAt(0));   // "H"
console.log(s.charCodeAt(0)); // 72 — UTF-16 code of "H"
```

**21. What is the difference between `str.charAt(99)` and `str.at(99)`?**
`charAt` returns an empty string `""` when out of range. `.at` returns `undefined`. So `"abc".charAt(99)` → `""`, `"abc".at(99)` → `undefined`.

**22. What is the output of this code?**
```javascript
let url = "https://statging.vwo.com/api/login?retry=true";
console.log(url.includes("staging"));    // false — text is "statging" (typo)
console.log(url.startsWith("https"));    // true
console.log(url.endsWith("true"));       // true
console.log(url.indexOf("a"));           // 10 — first "a"
console.log(url.lastIndexOf("a"));       // 25 — last "a"
console.log(url.indexOf("nothere"));     // -1
```

**23. What is the difference between `indexOf` and `search`?**
`indexOf` takes a plain substring; `search` takes a **regex**. Both return the index of the first match or `-1`. `search` can't take a start position; `indexOf` can.

**24. What is the output of this code?**
```javascript
let str = "Login_Test_Pass_001";
console.log(str.slice(0, 5));      // "Login"
console.log(str.slice(11));        // "Pass_001"
console.log(str.slice(-3));        // "001"
console.log(str.substring(6, 10)); // "Test"
```

**25. What is the difference between `slice()` and `substring()`?**
`slice` accepts negative indices (counts from the end) and returns `""` if start > end. `substring` clamps negatives to `0` and swaps arguments if start > end.

**26. What is `substr()` and why should you avoid it?**
`substr(start, length)` extracts by start and **length**, not end index. It's deprecated and behaves inconsistently — use `slice` instead.

**27. What is the output of this code?**
```javascript
let msg = "Test:Fail. Retry:Fail.";
console.log(msg.replace("Fail", "Pass"));    // "Test:Pass. Retry:Fail."
console.log(msg.replaceAll("Fail", "Pass")); // "Test:Pass. Retry:Pass."
console.log(msg.replace(/Fail/g, "Pass"));   // "Test:Pass. Retry:Pass."
```

**28. Why does `replace("Fail", "Pass")` replace only the first occurrence?**
That's the documented behaviour — with a plain string, `replace` hits the first match only. To replace all, use `replaceAll` or a regex with the `/g` flag.

**29. What is the difference between `replace` and `replaceAll`?**
`replace` changes only the first match when given a string. `replaceAll` changes every match. With a regex, `replaceAll` requires the `g` flag or it throws.

**30. What is the output of this code?**
```javascript
let url = "https://app.vwo.con?app=pramod";
console.log(url.replace(/app/g, "qa"));  // "https://qa.vwo.con?qa=pramod"
```

**31. What is the output of this code?**
```javascript
console.log("pass,fail,skip".split(","));   // ["pass", "fail", "skip"]
console.log("hello".split(""));             // ["h", "e", "l", "l", "o"]
console.log(["2024", "03", "07"].join("-")); // "2024-03-07"
```

**32. What does `split()` return when called with no arguments?**
It returns the whole string as a single-element array: `"abc".split()` → `["abc"]`.

**33. How do you reverse a string?**
Split into characters, reverse the array, join back: `str.split("").reverse().join("")`. For emoji-safe reversal use `[...str].reverse().join("")`.

**34. How do you concatenate strings? Give three ways.**
`+`: `"a" + "b"`; `concat`: `"a".concat("b")`; template literal: `` `${a}${b}` ``. Template literals are preferred for readability.

**35. What is the output of this code?**
```javascript
String(200);      // "200"
String(true);     // "true"
String(null);     // "null"
String([1, 2]);   // "1,2"
```

**36. What is the output of this code?**
```javascript
console.log(Number("42"));       // 42
console.log(parseInt("42px"));   // 42 — stops at "px"
console.log(parseFloat("3.14rem")); // 3.14
console.log(Number("12px"));     // NaN — strict
```

**37. What is the difference between `parseInt` and `Number`?**
`parseInt` reads digits until an invalid character: `parseInt("12px")` → `12`. `Number` requires the entire string to be numeric: `Number("12px")` → `NaN`. Also `Number("")` is `0`.

**38. What is the difference between `parseInt` and `parseFloat`?**
`parseInt` returns an integer, dropping the decimal: `parseInt("3.14")` → `3`. `parseFloat` keeps the decimal: `parseFloat("3.14")` → `3.14`.

**39. What is the output of this code?**
```javascript
let str = "  Hello World!  ";
console.log(str.trim());   // "Hello World!"
str.trimStart();           // result discarded — str unchanged
str.trimEnd();             // result discarded — str unchanged
console.log(str);          // "  Hello World!  " — the immutability trap
```

**40. What is the output of this code?**
```javascript
let str = "hello";
str[0] = "H";              // silently ignored
console.log(str);          // "hello"
let upper = str.toUpperCase();
console.log(str);          // "hello" — original untouched
console.log(upper);        // "HELLO"
```

**41. What does `concat()` do?**
Joins strings and returns a new one: `"Hello".concat(" ", "World!")` → `"Hello World!"`. It's equivalent to `+` but less commonly used.

**42. What is the output of this code?**
```javascript
console.log("Hello" + " " + "World!");      // "Hello World!"
console.log("Hello".concat(" ", "World!")); // "Hello World!"
console.log(`${"Hello"} ${"World"}`);       // "Hello World!"
```

---

## Logical / Reasoning Questions (43–56)

**43. What is the output and why?**
```javascript
console.log("10" + 5);     // "105" — + concatenates when a string is involved
console.log("10" - 5);     // 5 — - coerces the string to a number
console.log("10" * "2");   // 20 — * coerces both
```

**44. What is the output and why?**
```javascript
console.log("5" + 3 + 2);  // "532" — left to right: "5"+3="53", then +2
console.log(3 + 2 + "5");  // "55" — 3+2=5, then 5+"5" concatenates
```
Evaluation is left-to-right, and `+` switches to concatenation once a string is involved.

**45. What is the output and why?**
```javascript
console.log("".length);          // 0
console.log(" ".length);         // 1 — a space is a character
console.log("".trim().length);   // 0
```

**46. What is the output and why?**
```javascript
console.log("abc" === "abc");  // true — same primitive value
console.log("abc" == "abc");   // true
```
Primitive strings are compared by **value**, unlike objects/arrays.

**47. What is the output and why?**
```javascript
let s = "JavaScript";
console.log(s.slice(0, 4));      // "Java"
console.log(s.slice(4, 0));      // "" — end < start
console.log(s.substring(4, 0));  // "Java" — args swapped
console.log(s.substring(-6));    // "JavaScript" — negative clamped to 0
```

**48. What is the output and why?**
```javascript
console.log("banana".replace("a", "X"));    // "bXnana" — first only
console.log("banana".replaceAll("a", "X")); // "bXnXnX" — all
```

**49. What is the output and why?**
```javascript
console.log("a-b-c".split("-"));      // ["a", "b", "c"]
console.log("a-b-c".split("-", 2));   // ["a", "b"] — limit
console.log("abc".split());           // ["abc"] — no separator
```

**50. What is the output and why?**
```javascript
console.log([..."hey"]);            // ["h", "e", "y"]
console.log("hey".split(""));       // ["h", "e", "y"]
```
Both give the same result for plain characters, but split("") breaks emoji.

**51. What is the output and why?**
```javascript
console.log("😀".split(""));  // two broken surrogate halves (garbled), length 2
console.log([..."😀"]);       // ["😀"] — spread respects code points
```

**52. What is the output and why?**
```javascript
let name = "Rahul";
console.log(`Hi ${name}! 2+2=${2 + 2}`);  // "Hi Rahul! 2+2=4"
```
`${...}` evaluates any expression inside a template literal.

**53. What is the output and why?**
```javascript
console.log("Pass".includes("pass"));                 // false — case-sensitive
console.log("Pass".toLowerCase().includes("pass"));   // true — normalised
```

**54. What is the output and why?**
```javascript
console.log("10" < "9");  // true — lexicographic: "1" < "9"
console.log(10 < 9);      // false — numeric
```
String comparison is character by character, not numeric.

**55. What is the output and why?**
```javascript
console.log(parseInt("42px"));  // 42 — stops at "px"
console.log(parseInt("px42"));  // NaN — nothing numeric at the start
console.log(Number("px42"));    // NaN — strict
```

**56. What is the output and why?**
```javascript
let str = "abc";
str.toUpperCase();   // returns "ABC" but the result is discarded
console.log(str);    // "abc" — strings are immutable
```

---

## Programming Questions (57–80)

**57. Print the length of a string.**
```javascript
let s = "Playwright";
console.log(s.length);   // 10
```

**58. Convert a string to uppercase.**
```javascript
let s = "login";
console.log(s.toUpperCase());   // "LOGIN"
```

**59. Reverse a string.**
```javascript
let s = "hello";
console.log(s.split("").reverse().join(""));   // "olleh"
```

**60. Check whether a string is a palindrome.**
```javascript
let s = "madam";
let rev = s.split("").reverse().join("");
console.log(s === rev);   // true
```

**61. Count characters without using `.length`.**
```javascript
let s = "hello", count = 0;
for (let ch of s) count++;
console.log(count);   // 5
```

**62. Count how many times a character appears.**
```javascript
let s = "banana";
console.log(s.split("a").length - 1);   // 3
```

**63. Replace all spaces with `_`.**
```javascript
let s = "hello world again";
console.log(s.replaceAll(" ", "_"));   // "hello_world_again"
```

**64. Extract the domain from a URL.**
```javascript
let url = "https://qa.example.com/login";
console.log(url.split("/")[2]);   // "qa.example.com"
```

**65. Check whether a string starts with `https`.**
```javascript
console.log("https://qa.com".startsWith("https"));   // true
```

**66. Get the file extension from a filename.**
```javascript
let file = "report.pdf";
console.log(file.slice(file.lastIndexOf(".") + 1));   // "pdf"
```

**67. Capitalize the first letter.**
```javascript
let s = "rahul";
console.log(s.charAt(0).toUpperCase() + s.slice(1));   // "Rahul"
```

**68. Convert to title case.**
```javascript
let s = "hello world";
console.log(s.replace(/\b\w/g, c => c.toUpperCase()));   // "Hello World"
```

**69. Remove all whitespace.**
```javascript
console.log("a b c".replace(/\s+/g, ""));   // "abc"
```

**70. Check whether a string contains a substring.**
```javascript
console.log("Login Successful".includes("Successful"));   // true
```

**71. Split a comma-separated string into an array.**
```javascript
console.log("pass,fail,skip".split(","));   // ["pass", "fail", "skip"]
```

**72. Join an array of words into a sentence.**
```javascript
console.log(["Hello", "World"].join(" "));   // "Hello World"
```

**73. Truncate a string with `...`.**
```javascript
let s = "Element not visible on page";
console.log(s.length > 15 ? s.slice(0, 12) + "..." : s);   // "Element not ..."
```

**74. Mask all but the last 4 characters of a card number.**
```javascript
let card = "4111111111111111";
console.log("*".repeat(card.length - 4) + card.slice(-4));   // "************1111"
```

**75. Find the first occurrence of a character.**
```javascript
console.log("banana".indexOf("n"));   // 2
```

**76. Validate a `YYYY-MM-DD` date format.**
```javascript
console.log(/^\d{4}-\d{2}-\d{2}$/.test("2026-07-25"));   // true
```

**77. Extract all digits from a string.**
```javascript
console.log("Order #10245".match(/\d+/)[0]);   // "10245"
```

**78. Convert a string to a number.**
```javascript
console.log(parseInt("42px", 10));   // 42
console.log(parseFloat("3.14rem"));  // 3.14
```

**79. Compare two strings ignoring case.**
```javascript
console.log("Pass".toLowerCase() === "pass".toLowerCase());   // true
```

**80. Generate a URL slug from a title.**
```javascript
let slug = "  Add to Cart! Test #3 ".trim().toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
console.log(slug);   // "add-to-cart-test-3"
```

---

## Hard Questions (81–100)

**81. Why are strings immutable? What are the benefits?**
Strings are stored as fixed primitive values, so they can be safely shared and cached. Benefits: predictable code, thread-safe sharing, reliable keys in objects/Sets, and no accidental mutation through references.

**82. What is the difference between `str.length` and `[...str].length`?**
`str.length` counts UTF-16 code units; `[...str].length` counts code points. For emoji like `"😀"`, `.length` is `2` but `[...str].length` is `1`.

**83. How does `slice` handle negative indices internally?**
A negative index is treated as `length + index`. `slice(-3)` on a length-10 string starts at position `7`, counting from the end.

**84. Difference between `slice`, `substring`, and `substr`?**
`slice` supports negatives and returns `""` when start > end. `substring` clamps negatives to 0 and swaps args. `substr(start, length)` is deprecated. Prefer `slice`.

**85. How do `indexOf`, `lastIndexOf`, `search`, and `match` differ?**
`indexOf`/`lastIndexOf` take substrings and return a first/last index. `search` takes a regex and returns the first index. `match` returns an array of matched text (or `null`).

**86. When does `match()` return `null`, and how do you guard against it?**
It returns `null` when nothing matches. Guard with optional chaining: `"abc".match(/\d/)?.[0]` gives `undefined` instead of throwing on `null[0]`.

**87. What does the `g` flag do, and how does it change `match`?**
It makes the regex find all matches. With `/g`, `"a1b2".match(/\d/g)` returns `["1","2"]`; without `/g`, it returns the full match plus capture groups for the first hit only.

**88. How do capture groups work in `replace`?**
Parentheses capture parts of the match, referenced in the replacement as `$1`, `$2`, etc. `$&` is the whole match. `"2026-07-25".replace(/(\d+)-(\d+)-(\d+)/, "$3/$2/$1")` → `"25/07/2026"`.

**89. How does the function replacer in `replace` work?**
You pass a function instead of a string; it receives the match and returns the replacement. `"a1b2".replace(/\d/g, d => d * 2)` → `"a2b4"`.

**90. `replaceAll` with a string vs a regex?**
With a string, `replaceAll` replaces every exact occurrence, no regex escaping needed. With a regex it **requires** the `g` flag or it throws a `TypeError`.

**91. How do you compare strings with `localeCompare`?**
`a.localeCompare(b)` returns a negative number if `a` sorts before `b`, `0` if equal, positive if after. Example: `"a".localeCompare("b")` → `-1`.

**92. Why is `["b","a","C"].sort()` unexpected, and how does `localeCompare` fix it?**
Default sort compares UTF-16 code units, so uppercase `"C"` (67) comes before lowercase `"a"` (97). Use `.sort((a, b) => a.localeCompare(b))` → `["a","b","C"]`.

**93. How do you sort numerically for values like `item2` and `item10`?**
Use locale-aware numeric sorting: `["item10","item9"].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))` → `["item9","item10"]`.

**94. What is Unicode normalization (`normalize()`) and when do you need it?**
It converts visually identical accented characters to a canonical form. Use `str.normalize("NFC")` before comparing text scraped from different sources.

**95. How do `codePointAt` and `charCodeAt` differ?**
`charCodeAt` gives one UTF-16 code unit (emoji → partial value). `codePointAt` gives the full code point: `"😀".codePointAt(0)` → `128512`.

**96. What is `String.raw` and when is it useful?**
A tagged template that ignores escape sequences: ``String.raw`C:\new\test` `` → `"C:\\new\\test"`. Handy for Windows paths and regex patterns.

**97. What is a tagged template literal? Give an example.**
A function called with a template literal: `tag\`a${1}b\``. It receives the static parts and the interpolated values separately, letting you customise output. Used by libraries like styled-components.

**98. How do you count occurrences of a substring using regex?**
Match all and count: `("a-b-a-c".match(/a/g) || []).length` → `2`. The `|| []` guards against `null` when there are no matches.

**99. How would you check whether a string contains only digits?**
`/^\d+$/.test(str)`. For `"12345"` it's `true`, for `"12a"` it's `false`.

**100. Difference between `decodeURIComponent` and `decodeURI`?**
`decodeURI` decodes a full URI but leaves reserved characters (`:`, `/`, `?`) encoded. `decodeURIComponent` decodes everything, so use it on individual query values.

---

## Tricky Output Based Questions (101–110)

**101. What is the output?**
```javascript
console.log(typeof "hello");              // "string"
console.log(typeof new String("hello"));  // "object" — String object, not primitive
```
`new String(...)` creates an object wrapper — rarely what you want.

**102. What is the output?**
```javascript
console.log("abc".charAt(99));  // ""
console.log("abc".at(99));      // undefined
console.log("abc"[99]);         // undefined
```

**103. What is the output?**
```javascript
console.log("2026-07-25".replace(/(\d+)-(\d+)-(\d+)/, "$3/$2/$1"));  // "25/07/2026"
```

**104. What is the output?**
```javascript
console.log("a1b2".replace(/\d/g, d => d * 2));  // "a2b4"
```
Each digit is doubled by the function replacer.

**105. What is the output?**
```javascript
console.log("abc".replace(/b/, "[$&]"));  // "a[b]c" — $& is the whole match
```

**106. What is the output?**
```javascript
console.log("a,b,,c".split(","));          // ["a", "b", "", "c"]
console.log("a,b,,c".split(",").length);   // 4 — empty strings count
```

**107. What is the output?**
```javascript
console.log("7".padStart(3, "0"));       // "007"
console.log("Name".padEnd(10, "."));     // "Name......"
console.log("abcdef".padStart(3, "0"));  // "abcdef" — no-op if already long
```

**108. What is the output?**
```javascript
console.log("ab".repeat(3));  // "ababab"
console.log("ab".repeat(0));  // ""
```

**109. What is the output?**
```javascript
console.log("abc".match(/\d/));       // null
console.log("abc".match(/\d/)?.[0]);  // undefined — safe access
```

**110. What is the output?**
```javascript
console.log("a1b2c3".match(/\d/g));  // ["1", "2", "3"]
console.log([..."a1b2".matchAll(/([a-z])(\d)/g)].map(m => m[0]));  // ["a1", "b2"]
```

---

## Automation Testing — Scenario Based Questions (111–120)

**111. Safely compare scraped text to `"login successful"`.**
Normalise both sides: `const norm = s => s.replace(/\s+/g, " ").trim().toLowerCase();` then `norm(scraped) === "login successful"`. This kills stray whitespace and case differences.

**112. Convert `"₹1,299.50"` to `1299.5`.**
```javascript
const money = s => parseFloat(s.replace(/[^0-9.]/g, ""));
money("₹1,299.50");   // 1299.5
```

**113. Extract the order ID from a URL.**
```javascript
let id = "https://shop.com/order/10245?ref=x".match(/\/order\/(\d+)/)[1];
console.log(id);   // "10245"
```

**114. Validate a `YYYY-MM-DD` date field.**
Use a regex: `/^\d{4}-\d{2}-\d{2}$/.test(value)`. It's `true` only for that exact shape.

**115. Mask a credit card number for the log.**
```javascript
const mask = s => "*".repeat(s.length - 4) + s.slice(-4);
mask("4111111111111111");   // "************1111"
```

**116. Convert a test title into a filesystem-safe slug.**
```javascript
const slug = s => s.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
slug("  Add to Cart! Test #3 ");   // "add-to-cart-test-3"
```

**117. Truncate a long failure message.**
```javascript
const truncate = (s, n) => s.length > n ? s.slice(0, n - 1) + "…" : s;
truncate("Element not visible on page", 15);   // "Element not vi…"
```

**118. Count how many tests appear in a comma-separated result string.**
```javascript
let results = "pass,fail,pass,error";
console.log(results.split(",").length);   // 4
```

**119. Check whether an API URL contains a query parameter.**
```javascript
"https://qa.com/api?retry=true".includes("retry=");   // true
```
Or parse it properly with `new URL(...).searchParams.has("retry")` in real code.

**120. Why normalise text before asserting in Playwright?**
The DOM often contains extra whitespace, newlines, or inconsistent casing. Normalising (`replace(/\s+/g, " ").trim().toLowerCase()`) prevents flaky assertions caused by formatting rather than real differences.
