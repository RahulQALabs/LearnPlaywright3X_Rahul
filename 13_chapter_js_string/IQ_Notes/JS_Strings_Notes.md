# JavaScript Strings — Detailed Notes

## 1. Introduction

A **string** is a sequence of characters used to store and work with text — names, URLs, API responses, error messages, and UI labels. In JavaScript, strings are **immutable**: every method returns a **new** string and the original never changes.

Strings are everywhere in test automation: reading titles, building URLs, comparing expected vs actual text, parsing responses, and writing readable logs.

## 2. Learning Objectives

- Create strings using single quotes, double quotes, backticks, and `String()`.
- Understand string **immutability** and why methods must be reassigned.
- Read characters with `.length`, `[]`, `.at()`, `.charAt()`, `.charCodeAt()`.
- Search text with `includes`, `startsWith`, `endsWith`, `indexOf`, `lastIndexOf`, `search`, `match`.
- Extract parts with `slice`, `substring`, and the deprecated `substr`.
- Clean text with `trim`, `trimStart`, `trimEnd`, `toUpperCase`, `toLowerCase`.
- Replace text with `replace`, `replaceAll`, and regex.
- Split and join with `split` and `join`.
- Convert between strings and other types with `String()`, `Number()`, `parseInt`, `parseFloat`.

## 3. Creating Strings

From `01_string.js`:

### Single, Double, and Backticks

```javascript
let status = 'pass';                              // single quotes
let title = "Gupta";                              // double quotes
let message = `Test completed in ${320}ms`;       // backticks (template literal)
```

Single and double quotes behave identically. Backticks enable **interpolation** and **multi-line** strings.

### Quotes Inside Quotes

```javascript
let c = `Hi! I am "a", Thank you!`;   // double quotes inside backticks
let d = `Hi! I am 'b', Thank you!`;   // single quotes inside backticks
```

Backticks let you embed both `"` and `'` without escaping.

### Template Literals — Expressions and Multi-line

```javascript
let name = 'Rahul';
let msg = `Hello ${name}! 2+2=${2 + 2}`;
console.log(msg);            // Hello Rahul! 2+2=4

let report = `
Test:Login
status:pass
Duration:320ms
`;
```

`${...}` embeds any expression. Backticks also preserve newlines, so multi-line reports need no `\n`.

### The `String()` Function

```javascript
String(200);      // "200"
String(true);     // "true"
String(null);     // "null"
String([1, 2]);   // "1,2"
```

`String(value)` converts almost anything to text. Arrays become comma-separated values.

| Creation | Syntax | Use When |
|----------|--------|----------|
| Single quotes | `'text'` | Simple text |
| Double quotes | `"text"` | Text containing `'` |
| Backticks | `` `text` `` | Interpolation / multi-line |
| `String(v)` | `String(123)` | Converting other types |

## 4. String Immutability

From `08_fn_string_conversion.js`:

```javascript
let str = "hello";
str[0] = "H";
console.log(str);   // "hello" — unchanged, silently ignored
```

Strings never change in place. Every transformation returns a new string:

```javascript
let str = "hello";
let upper = str.toUpperCase();
console.log(str);     // "hello"
console.log(upper);   // "HELLO"
```

⚠️ **This is the #1 string mistake.** A method without assignment does nothing:

```javascript
str.trim();            // discarded → no effect
str = str.trim();      // ✅ captured
```

## 5. Properties & Character Access

From `02_string_fn.js`:

```javascript
let str = "Hello World";

console.log(str.length);      // 11 — property, not a method
console.log(str[0]);          // "H" — index starts at 0
console.log(str[7]);          // "W"
console.log(str[-1]);         // undefined — bracket has no negative indexing
console.log(str.at(-1));      // "d" — .at() supports negative
console.log(str.at(-6));      // " " — counts back to the space
console.log(str.charAt(0));   // "H"
console.log(str.charCodeAt(0)); // 72 — UTF-16 code unit of "H"
```

| Access | Negative index | Out of range | Returns |
|--------|----------------|--------------|---------|
| `str[i]` | ❌ | `undefined` | character |
| `str.at(i)` | ✅ | `undefined` | character |
| `str.charAt(i)` | ❌ | `""` (empty string) | character |
| `str.charCodeAt(i)` | ❌ | `NaN` | number |

`.at(-1)` is the cleanest way to read the last character — much better than `str[str.length - 1]`.

### Escape Sequences

```javascript
let a = "dsadsdfd\ndsfffdf";   // \n = new line
let b = 'dscvcads"a"dfd';      // quotes can be embedded
```

Common escapes: `\n` (newline), `\t` (tab), `\\` (backslash), `\"` (double quote).

## 6. Searching & Checking

From `03_str_searching.js`:

```javascript
let url = "https://statging.vwo.com/api/login?retry=true";

console.log(url.includes("staging"));       // false — actual text is "statging" (typo)
console.log(url.startsWith("https"));       // true
console.log(url.startsWith("https://"));    // true
console.log(url.endsWith("true"));          // true
console.log(url.indexOf("a"));              // 10 — first "a"
console.log(url.lastIndexOf("a"));          // 25 — last "a"
console.log(url.indexOf("nothere"));        // -1 — not found
```

| Method | Returns | Use Case |
|--------|---------|----------|
| `includes(sub)` | `true` / `false` | Does the text exist? |
| `startsWith(sub)` | `true` / `false` | URL/protocol checks |
| `endsWith(sub)` | `true` / `false` | File extension checks |
| `indexOf(sub)` | index or `-1` | Where is the first match? |
| `lastIndexOf(sub)` | index or `-1` | Where is the last match? |
| `search(regex)` | index or `-1` | Regex search |

⚠️ **All of these are case-sensitive.** `"Pass".includes("pass")` is `false`. Lowercase both sides before comparing UI text.

## 7. Extracting Substrings

From `04_extraction.js`:

```javascript
let str = "Login_Test_Pass_001";

console.log(str.slice(0, 5));     // "Login" — start..end (end excluded)
console.log(str.slice(11));       // "Pass_001" — from index 11 to end
console.log(str.slice(-3));       // "001" — last 3 characters
console.log(str.substring(6, 10)); // "Test" — same range, no negatives
```

| Method | Negative index? | Swaps args? | Notes |
|--------|-----------------|-------------|-------|
| `slice(start, end)` | ✅ counts from end | ❌ | **Preferred** |
| `substring(start, end)` | ❌ clamps to 0 | ✅ auto-swaps | Predictable for positives |
| `substr(start, len)` | ✅ | ❌ | **Deprecated** — avoid |

```javascript
"JavaScript".slice(0, 4);       // "Java"
"JavaScript".slice(4, 0);       // ""        ← end < start
"JavaScript".substring(4, 0);   // "Java"    ← swapped silently
"JavaScript".substring(-6);     // "JavaScript" ← negative clamped to 0
```

Rule of thumb: use **`slice()`** by default — it's the only one with sane negative-index behaviour.

## 8. Case & Whitespace

From `06_string_more.js`:

```javascript
let str = "  Hello World!  ";

console.log(str.toUpperCase());   // "  HELLO WORLD!  "
console.log(str.toLowerCase());   // "  hello world!  "
console.log(str.trim());          // "Hello World!" — both ends
str.trimStart();                  // returns "Hello World!  " (must reassign!)
str.trimEnd();                    // returns "  Hello World!" (must reassign!)
```

```javascript
console.log("  QA  ".trim());        // "QA"
console.log("  QA  ".trimStart());   // "QA  "
console.log("  QA  ".trimEnd());     // "  QA"
```

⚠️ Lines 8-9 above have the immutability bug — `str.trimStart()` and `str.trimEnd()` are called but never stored, so `str` is unchanged. Always assign the result.

## 9. Replacing

From `06_string_more.js` and `07_extra_fn.js`:

```javascript
let msg = "Test:Fail. Retry:Fail.";

console.log(msg.replace("Fail", "Pass"));      // "Test:Pass. Retry:Fail." — FIRST only
console.log(msg.replaceAll("Fail", "Pass"));   // "Test:Pass. Retry:Pass." — ALL
console.log(msg.replace(/Fail/g, "Pass"));     // "Test:Pass. Retry:Pass." — regex /g
```

```javascript
let url = "https://app.vwo.con?app=pramod";
console.log(url.replace(/app/g, "qa"));        // "https://qa.vwo.con?qa=pramod"
```

| Method | Replaces | Example | Result |
|--------|----------|---------|--------|
| `replace(str, new)` | **first** match | `"banana".replace("a","X")` | `"bXnana"` |
| `replace(/re/g, new)` | all (regex global) | `"banana".replace(/a/g,"X")` | `"bXnXnX"` |
| `replaceAll(str, new)` | **all** matches | `"banana".replaceAll("a","X")` | `"bXnXnX"` |

**Advanced replacement:**

```javascript
"abc".replace(/b/, "[$&]");                            // "a[b]c" — $& = whole match
"2026-07-25".replace(/(\d+)-(\d+)-(\d+)/, "$3/$2/$1"); // "25/07/2026" — capture groups
"a1b2".replace(/\d/g, d => d * 2);                     // "a2b4" — function replacer
```

⚠️ `replaceAll()` with a **regex** requires the `g` flag or it throws a `TypeError`.

## 10. Splitting & Joining

From `07_extra_fn.js`:

```javascript
"pass,fail,skip".split(",");    // ["pass", "fail", "skip"]
"hello".split("");              // ["h", "e", "l", "l", "o"]

let parts = ["2024", "03", "07"];
let date = parts.join("-");
console.log(date);              // "2024-03-07"
```

```javascript
"a,b,c".split(",", 2);          // ["a", "b"]        ← limit
"abc".split();                  // ["abc"]           ← no separator = whole string
"a1b22c".split(/\d+/);          // ["a", "b", "c"]   ← regex separator
[..."hey"];                     // ["h", "e", "y"]   ← emoji-safe
"abc".split("").reverse().join(""); // "cba"         ← reverse a string
```

⚠️ `.split("")` breaks emoji (`"😀"` splits into two broken halves). Use `[...str]` or `Array.from(str)`.

## 11. Concatenation & Template Literals

From `06_string_more.js`:

```javascript
console.log("Hello" + " " + "World!");           // "Hello World!"
console.log("Hello".concat(" ", "World!"));      // "Hello World!"
console.log(`${"Hello"} ${"World"}`);            // "Hello World!"
```

Template literals are the modern, readable choice:

```javascript
const name = "Pramod", count = 3;
`User ${name} ran ${count} test${count > 1 ? "s" : ""}`;   // "User Pramod ran 3 tests"
```

## 12. Conversion & Parsing

From `08_fn_string_conversion.js`:

```javascript
(200).toString();        // "200"  ← note the parentheses — 200.toString() is a syntax error
true.toString();         // "true"

Number("42");            // 42
parseInt("42px");        // 42   ← stops at first invalid character
parseFloat("3.14rem");   // 3.14
```

```javascript
Number("12px");   // NaN    ← strict, rejects trailing text
Number("");       // 0      ← watch out
parseInt("12px", 10); // 12  ← always pass the radix
+"42";            // 42      ← unary plus, same rules as Number()
```

| From | Call | Result |
|------|------|--------|
| number → string | `String(123)` / `(123).toString()` | `"123"` |
| boolean → string | `String(true)` | `"true"` |
| string → integer | `parseInt("42px", 10)` | `42` |
| string → decimal | `parseFloat("3.14rem")` | `3.14` |
| string → number | `Number("42")` | `42` |
| number → base-N | `(255).toString(16)` | `"ff"` |

⚠️ `"5" + 3` → `"53"` (concatenation) but `"5" - 3` → `2`. Among arithmetic operators, `+` is the one that can concatenate.

## 13. Step-by-Step Execution Flow

A typical string-processing pipeline:

```
Raw UI text          "  LOGIN   successful\n"
      │
      ▼
.trim()              removes surrounding whitespace
      ▼
.replace(/\s+/g," ") collapses inner runs of spaces
      ▼
.toLowerCase()       normalise case
      ▼
.includes("login")   boolean check
      ▼
assertTrue(...)      test assertion
```

Tracing `msg = msg.replace("Fail", "Pass")`:

1. `msg` holds `"Test:Fail. Retry:Fail."`.
2. `.replace` scans left to right, finds `"Fail"` at index 5.
3. It builds a **new** string `"Test:Pass. Retry:Fail."`; the rest is copied unchanged.
4. The new string is returned, then assigned back to `msg`.
5. The old string is discarded (strings are immutable).

## 14. Interview Tips, Common Mistakes & Key Takeaways

**Interview tips**

- State clearly: "strings are immutable — methods return new strings."
- Know that `replace("a","b")` replaces only the **first** occurrence; use `replaceAll` or `/g`.
- Mention `.at(-1)` for the last character; `str[-1]` is `undefined`.
- `slice` supports negatives; `substring` clamps them to 0.
- String methods like `includes` are **case-sensitive** — normalise before comparing.

**Common mistakes**

- Calling `trim()`/`replace()`/`toUpperCase()` without assigning the result.
- Using `str[-1]` and expecting the last character.
- Assuming `.replace` replaces all matches.
- Sorting/comparing numbers as strings (`"10" < "9"` is `true`).
- Using `.split("")` on emoji instead of `[...str]`.

**Key takeaways**

- Three quote styles; backticks give interpolation and multi-line.
- **Strings are immutable** — always capture the return value.
- `.at()` handles negative indexing; `.charAt()` returns `""` out of range.
- `includes`/`startsWith`/`endsWith` give clean boolean checks.
- `slice` is the safe extraction choice; `substr` is deprecated.
- `replaceAll` / regex `/g` replace every match.
- `split` ↔ `join` convert between strings and arrays.
- `parseInt`/`parseFloat` tolerate trailing text; `Number()` is strict.
