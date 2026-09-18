# Strings, String Methods, Objects & 2D Arrays

> Extracted from the supplied 3x Playwright + AI Mastery notes. Content is organized by topic; the original wording/examples are retained.

# Strings

- Strings are sequences of characters.
- JavaScript provides many methods for string manipulation.
- A string is a sequence of characters used to represent text.
- In testing, strings are everywhere → **URLs, selectors, assertions, response messages, log parsing.**

## Creating Strings

    let url = "https://app.vwo.com";
    let status = 'pass';
    let message = `Test completed in ${320}ms`;  // template literal

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_M7lbm3enLgSPFYQNtEo1-.png?ixlib=js-3.8.0)

JavaScript Unicode/ASCII table for `A-Z` and `a-z`.

| **Character** | **Decimal** | **Hex** | **JavaScript** |
| --- | --- | --- | --- |
| A | 65 | 0x41 | `"A".charCodeAt(0)` |
| B | 66 | 0x42 | `"B".charCodeAt(0)` |
| C | 67 | 0x43 | `"C".charCodeAt(0)` |
| D | 68 | 0x44 | `"D".charCodeAt(0)` |
| E | 69 | 0x45 | `"E".charCodeAt(0)` |
| F | 70 | 0x46 | `"F".charCodeAt(0)` |
| G | 71 | 0x47 | `"G".charCodeAt(0)` |
| H | 72 | 0x48 | `"H".charCodeAt(0)` |
| I | 73 | 0x49 | `"I".charCodeAt(0)` |
| J | 74 | 0x4A | `"J".charCodeAt(0)` |
| K | 75 | 0x4B | `"K".charCodeAt(0)` |
| L | 76 | 0x4C | `"L".charCodeAt(0)` |
| M | 77 | 0x4D | `"M".charCodeAt(0)` |
| N | 78 | 0x4E | `"N".charCodeAt(0)` |
| O | 79 | 0x4F | `"O".charCodeAt(0)` |
| P | 80 | 0x50 | `"P".charCodeAt(0)` |
| Q | 81 | 0x51 | `"Q".charCodeAt(0)` |
| R | 82 | 0x52 | `"R".charCodeAt(0)` |
| S | 83 | 0x53 | `"S".charCodeAt(0)` |
| T | 84 | 0x54 | `"T".charCodeAt(0)` |
| U | 85 | 0x55 | `"U".charCodeAt(0)` |
| V | 86 | 0x56 | `"V".charCodeAt(0)` |
| W | 87 | 0x57 | `"W".charCodeAt(0)` |
| X | 88 | 0x58 | `"X".charCodeAt(0)` |
| Y | 89 | 0x59 | `"Y".charCodeAt(0)` |
| Z | 90 | 0x5A | `"Z".charCodeAt(0)` |
| **Character** | **Decimal** | **Hex** | **JavaScript** |
| a | 97 | 0x61 | `"a".charCodeAt(0)` |
| b | 98 | 0x62 | `"b".charCodeAt(0)` |
| c | 99 | 0x63 | `"c".charCodeAt(0)` |
| d | 100 | 0x64 | `"d".charCodeAt(0)` |
| e | 101 | 0x65 | `"e".charCodeAt(0)` |
| f | 102 | 0x66 | `"f".charCodeAt(0)` |
| g | 103 | 0x67 | `"g".charCodeAt(0)` |
| h | 104 | 0x68 | `"h".charCodeAt(0)` |
| i | 105 | 0x69 | `"i".charCodeAt(0)` |
| j | 106 | 0x6A | `"j".charCodeAt(0)` |
| k | 107 | 0x6B | `"k".charCodeAt(0)` |
| l | 108 | 0x6C | `"l".charCodeAt(0)` |
| m | 109 | 0x6D | `"m".charCodeAt(0)` |
| n | 110 | 0x6E | `"n".charCodeAt(0)` |
| o | 111 | 0x6F | `"o".charCodeAt(0)` |
| p | 112 | 0x70 | `"p".charCodeAt(0)` |
| q | 113 | 0x71 | `"q".charCodeAt(0)` |
| r | 114 | 0x72 | `"r".charCodeAt(0)` |
| s | 115 | 0x73 | `"s".charCodeAt(0)` |
| t | 116 | 0x74 | `"t".charCodeAt(0)` |
| u | 117 | 0x75 | `"u".charCodeAt(0)` |
| v | 118 | 0x76 | `"v".charCodeAt(0)` |
| w | 119 | 0x77 | `"w".charCodeAt(0)` |
| x | 120 | 0x78 | `"x".charCodeAt(0)` |
| y | 121 | 0x79 | `"y".charCodeAt(0)` |
| z | 122 | 0x7A | `"z".charCodeAt(0)` |

JavaScript example:

    console.log("A".charCodeAt(0)); // 65
    console.log("Z".charCodeAt(0)); // 90
    console.log("a".charCodeAt(0)); // 97
    console.log("z".charCodeAt(0)); // 122

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_b3cfkzTcNlXNcLR8Jf2VX.png?ixlib=js-3.8.0)

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_GmGF1E4AhMFmKYOtuZFtE.png?ixlib=js-3.8.0)

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_wnsX6eGoX79q7HpdSqIXK.png?ixlib=js-3.8.0)

## Extracting Substrings

> Regex - 101 - Extra - it is basically used to find a particular string in your own string in this case with the help of a pattern

[prmaod@gmail.com](mailto:prmaod@gmail.com) ->. pramod or if it is valid @[gmail.com](https://gmail.com/) or not,.

# JavaScript String Methods — Complete Cheatsheet (SDET)

All outputs verified on Node.js v22. Strings are **immutable** — every method returns a *new* string.

    let s = "abc";
    s[0] = "z";
    console.log(s);   // 'abc'  ← silently unchanged

---

## 1. Length & Character Access

| **Method** | **Purpose** | **Example** | **Result** |
| --- | --- | --- | --- |
| `.length` | character count (property, not a method) | `"Playwright".length` | `10` |
| `.charAt(i)` | char at index | `"Playwright".charAt(4)` | `'w'` |
| `[i]` | char at index (bracket) | `"Playwright"[4]` | `'w'` |
| `.at(i)` | char at index, **supports negative** | `"Playwright".at(-1)` | `'t'` |
| `.charCodeAt(i)` | UTF-16 code unit | `"A".charCodeAt(0)` | `65` |
| `.codePointAt(i)` | full code point (emoji-safe) | `"😀".codePointAt(0)` | `128512` |

**Out-of-range difference:** `"abc".charAt(99)` → `''` (empty string) but `"abc".at(99)` → `undefined`.

---

## 2. Searching

| **Method** | **Returns** | **Example** | **Result** |
| --- | --- | --- | --- |
| `.indexOf(sub, from?)` | first index, `-1` if absent | `"Login Successful".indexOf("Success")` | `6` |
| `.lastIndexOf(sub, from?)` | last index | `"a-b-a".lastIndexOf("a")` | `4` |
| `.includes(sub, pos?)` | `true` / `false` | `"Login Successful".includes("Login")` | `true` |
| `.startsWith(sub, pos?)` | `true` / `false` | `"https://qa.com".startsWith("https")` | `true` |
| `.endsWith(sub, len?)` | `true` / `false` | `"report.pdf".endsWith(".pdf")` | `true` |
| `.search(regex)` | index of first regex match, `-1` if none | `"Order #10245".search(/\d+/)` | `7` |
| `.match(regex)` | array of matches, or `null` | `"Order #10245".match(/#(\d+)/)` | `['#10245','10245']` |
| `.matchAll(regex)` | iterator of all matches (needs `/g`) | `[..."a1b2".matchAll(/([a-z])(\d)/g)].map(m => m[0])` | `['a1','b2']` |

⚠️ **All of these are case-sensitive.** `"Login Successful".includes("login")` → `false`. Lowercase both sides before comparing UI text.

⚠️ `.match()` returns `null` on no match — `"abc".match(/\d/)?.[0]` avoids the `TypeError`.

⚠️ `.match(/\d/g)` with the global flag returns only full matches, no capture groups: `"a1b2c3".match(/\d/g)` → `['1','2','3']`.

---

## 3. Extracting Substrings

| **Method** | **Negative index?** | **Swaps args?** | **Example** | **Result** |
| --- | --- | --- | --- | --- |
| `.slice(start, end?)` | ✅ counts from end | ❌ returns `''` | `"JavaScript".slice(-6)` | `'Script'` |
| `.substring(start, end?)` | ❌ clamps to `0` | ✅ auto-swaps | `"JavaScript".substring(-6)` | `'JavaScript'` |
| `.substr(start, length)` | ✅ | — | `"JavaScript".substr(4, 6)` | `'Script'` (**deprecated**) |

    "JavaScript".slice(0, 4);       // 'Java'
    "JavaScript".slice(4, 0);       // ''          ← end < start
    "JavaScript".substring(4, 0);   // 'Java'      ← args swapped silently

**Use `slice()` by default.** It's the only one with predictable negative-index behaviour.

---

## 4. Splitting & Joining

    "a,b,c".split(",");         // ['a', 'b', 'c']
    "a,b,c".split(",", 2);      // ['a', 'b']       ← limit
    "abc".split("");            // ['a', 'b', 'c']
    "abc".split();              // ['abc']          ← no separator = whole string
    "a1b22c".split(/\d+/);      // ['a', 'b', 'c']  ← regex separator
    "a1b2".split(/(\d)/);       // ['a','1','b','2',''] ← capture group is kept

    [..."hey"];                 // ['h','e','y']    ← emoji-safe, unlike split("")
    Array.from("hey");          // ['h','e','y']
    ["a","b"].join(" | ");      // 'a | b'
    "abc".split("").reverse().join("");  // 'cba'   ← reverse a string

⚠️ `"😀".split("")` breaks the emoji into two broken halves. Use `[..."😀"]` → `['😀']`.

---

## 5. Case & Whitespace

| **Method** | **Example** | **Result** |
| --- | --- | --- |
| `.toUpperCase()` | `"qa".toUpperCase()` | `'QA'` |
| `.toLowerCase()` | `"QA".toLowerCase()` | `'qa'` |
| `.toLocaleUpperCase(locale)` | `"i".toLocaleUpperCase("tr-TR")` | `'İ'` (vs `'I'`) |
| `.toLocaleLowerCase(locale)` | locale-aware lowercase | — |
| `.trim()` | `" QA ".trim()` | `'QA'` |
| `.trimStart()` | `" QA ".trimStart()` | `'QA '` |
| `.trimEnd()` | `" QA ".trimEnd()` | `' QA'` |

`trimLeft` / `trimRight` are legacy aliases — use `trimStart` / `trimEnd`.

---

## 6. Padding, Repeating, Concatenating

    "7".padStart(3, "0");        // '007'         ← zero-pad IDs
    "Name".padEnd(10, ".");      // 'Name......'  ← align console output
    "abcdef".padStart(3, "0");   // 'abcdef'      ← no-op if already long enough
    "ab".repeat(3);              // 'ababab'
    "ab".repeat(0);              // ''
    "a".concat("b", "c");        // 'abc'         ← `+` is clearer

---

## 7. Replacing

| **Method** | **Replaces** | **Example** | **Result** |
| --- | --- | --- | --- |
| `.replace(str, new)` | **first** occurrence only | `"banana".replace("a","X")` | `'bXnana'` |
| `.replace(/re/g, new)` | all (with `g` flag) | `"banana".replace(/a/g,"X")` | `'bXnXnX'` |
| `.replaceAll(str, new)` | all occurrences | `"banana".replaceAll("a","X")` | `'bXnXnX'` |

**Replacement patterns:**

    "abc".replace(/b/, "[$&]");                      // 'a[b]c'   ← $& = whole match
    "2026-07-25".replace(/(\d+)-(\d+)-(\d+)/, "$3/$2/$1");  // '25/07/2026'
    "a1b2".replace(/\d/g, d => d * 2);               // 'a2b4'    ← function replacer

⚠️ `.replaceAll()` with a **regex** requires the `g` flag or it throws a `TypeError`.

---

## 8. Comparing & Sorting

    "abc" === "abc";           // true
    "a" < "b";                 // true
    "10" < "9";                // true   ← lexicographic, not numeric!

    ["b","a","C"].sort();      // ['C','a','b']   ← uppercase sorts first (code units)
    ["b","a","C"].sort((x, y) => x.localeCompare(y));   // ['a','b','C']

    "a".localeCompare("b");    // -1  (negative = a before b, 0 = equal, positive = after)

    // Natural / numeric sort — essential for IDs like item2 vs item10
    ["item10","item9"].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
    // ['item9', 'item10']

    // Case-insensitive equality check
    "ABC".localeCompare("abc", undefined, { sensitivity: "base" });   // 0

`.normalize("NFC")` fixes accented characters that look identical but differ in bytes — worth adding before comparing text scraped from different sources.

---

## 9. Template Literals

    const name = "Pramod", count = 3;
    `User ${name} ran ${count} test${count > 1 ? "s" : ""}`;
    // 'User Pramod ran 3 tests'

    `line1
    line2`;                    // multi-line, preserves the newline

    // Tagged template
    function tag(strings, ...vals) { return strings.raw.join("|") + " :: " + vals.join(","); }
    tag`a${1}b${2}c`;          // 'a|b|c :: 1,2'

---

## 10. Static Methods & Conversions

| **Call** | **Purpose** | **Result** |
| --- | --- | --- |
| `String.fromCharCode(72, 105)` | code units → string | `'Hi'` |
| `String.fromCodePoint(128512)` | code point → string | `'😀'` |
| `` String.raw`C:\new\test` `` | ignore escape sequences | `'C:\\new\\test'` |
| `String(123)` | any value → string | `'123'` |
| `(255).toString(16)` | number → base-N string | `'ff'` |

**String → number:**

    Number("12");          // 12
    Number("12px");        // NaN     ← strict
    Number("");            // 0       ← watch out
    parseInt("12px", 10);  // 12      ← stops at first invalid char
    parseFloat("12.5px");  // 12.5
    +"42";                 // 42      ← unary plus, same rules as Number()

⚠️ `"5" + 3` → `'53'` (concatenation) but `"5" - 3` → `2`. Only `+` is overloaded.

---

## 11. Rarely Needed

| **Method** | **Note** |
| --- | --- |
| `.isWellFormed()` | `false` if the string has lone surrogates |
| `.toWellFormed()` | replaces lone surrogates with `�` |
| `.normalize(form)` | Unicode normalization: `NFC`, `NFD`, `NFKC`, `NFKD` |
| `.valueOf()` / `.toString()` | returns the primitive value |
| `.anchor()`, `.big()`, `.blink()`, `.bold()`, `.fixed()`, `.fontcolor()`, `.fontsize()`, `.italics()`, `.link()`, `.small()`, `.strike()`, `.sub()`, `.sup()` | legacy HTML wrappers — **never use these** |

---

## 12. SDET Recipes

    // Normalize UI text before asserting (kills stray \n and double spaces)
    const normalize = s => s.replace(/\s+/g, " ").trim().toLowerCase();
    normalize("  LOGIN   Successful\n");           // 'login successful'

    // Currency string → number
    const money = s => parseFloat(s.replace(/[^0-9.]/g, ""));
    money("₹1,299.50");                            // 1299.5

    // Extract an ID from a URL
    "https://shop.com/order/10245?ref=x".match(/\/order\/(\d+)/)[1];   // '10245'

    // Extract the first number from any label
    "Order #10245".match(/\d+/)[0];                // '10245'

    // Validate a format
    /^\d{4}-\d{2}-\d{2}$/.test("2026-07-25");      // true

    // Mask sensitive test data in logs
    const mask = s => s.slice(0, 2) + "*".repeat(Math.max(0, s.length - 4)) + s.slice(-2);
    mask("4111111111111111");                      // '41************11'

    // Slug for screenshot / test-artifact filenames
    const slug = s => s.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    slug("  Add to Cart! Test #3 ");               // 'add-to-cart-test-3'

    // Truncate long failure messages
    const truncate = (s, n) => s.length > n ? s.slice(0, n - 1) + "…" : s;
    truncate("Element not visible on page", 15);   // 'Element not vi…'

    // Clean a CSV-ish row
    "a, b ,c".split(",").map(s => s.trim());       // ['a', 'b', 'c']

    // Count occurrences
    ("a-b-a-c".match(/a/g) || []).length;          // 2

    // Title case
    "login page".replace(/\b\w/g, c => c.toUpperCase());   // 'Login Page'

---

## Gotcha Summary

| **Trap** | **Reality** |
| --- | --- |
| `s[0] = "z"` | silently does nothing — strings are immutable |
| `.replace("a", "X")` | first match only; use `replaceAll` or `/g` |
| `.includes("Login")` | case-sensitive |
| `.substring(-6)` | clamps to `0`; use `.slice(-6)` |
| `"10" < "9"` | `true` — string comparison, not numeric |
| `["b","a","C"].sort()` | `['C','a','b']` — use `localeCompare` |
| `.match(/x/)` with no match | returns `null`, not `[]` |
| `Number("12px")` | `NaN`; use `parseInt` |
| `Number("")` | `0`, not `NaN` |
| `"5" + 3` | `'53'`; every other operator coerces to number |
| `.split("")` on emoji | splits the surrogate pair; use `[...str]` |
| `.charAt(99)` vs `.at(99)` | `''` vs `undefined` |

---

*All snippets in this cheatsheet were executed on Node.js v22 and the outputs pasted verbatim.*

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_kTgUgV8Wuw4VCIiCuhv1A.png?ixlib=js-3.8.0)

---

# Objects in JS

- Key and value

    let student1 = { name: "Amit", age: 65 };
    let student2 = { name: "Pramod" };
    let student3 = { name: "Pramod", age: 87, phone: 987654320 };

    // Key will not be in the doubt quotes
    // below key in doubt is actually JSON
    let JSON_student4 = { "name": "Pramod", "age": 87, "phone": 987654320 };

    let a = { status: "pass" };
    console.log(a.status);
    console.log(a["status"]);

---

> 11th Aug 2026

## Multi-Dimensional Arrays in JavaScript

1. 1D
2. 2D
3. 3D

1D → array is a collection of similar elements

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_kHY0g5vNHNLMUASM0bb3z.png?ixlib=js-3.8.0)

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_qnjNQ4ykR3XESIgwAeRY1.png?ixlib=js-3.8.0)

[docs.google.com/spreadsheets/d/1o2QpjmOEMpX84SXhZEU-zq8NzBigSFbVu0QY31n8CcE/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1o2QpjmOEMpX84SXhZEU-zq8NzBigSFbVu0QY31n8CcE/edit?usp=sharing)

---

**`process.stdout.write`** → print raw, NO newline.

**`console.log`** — print + auto-append `\n` (newline).

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_PniBy2xlFriN0miPTghKE.png?ixlib=js-3.8.0)

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_WAyl48xeQeg-1TSr2atO3.png?ixlib=js-3.8.0)

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_eyFmnhVzQ4w6Gh04J6b9W.png?ixlib=js-3.8.0)

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_c7MkQpVx1v3QWIGjwG6MF.png?ixlib=js-3.8.0)

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_caN76AVlcUNKquxxfnPlL.png?ixlib=js-3.8.0)

Claude 101 - Part - 2

Skill master - Full - Wed 8 PM IST
