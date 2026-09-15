# Additional Topics — Programs (HackerRank Style, Strings)

Each program follows the HackerRank format: **Problem Statement → Input Format → Output Format → Sample Input → Sample Output → Solution**.

Topics covered: **regex, comparison & sorting, Unicode & emoji, padding & repeating, advanced replacement, `String.raw`, static methods, and URL encoding**.

---

## Easy Programs

### 1. Validate a Date Format

**Problem Statement:** Write a function `isValidDate(str)` that returns `true` if `str` matches the `YYYY-MM-DD` format.

**Input Format:** A string `str`.

**Output Format:** Print `true` or `false`.

**Sample Input:**
```
isValidDate("2026-07-25")
isValidDate("25-07-2026")
```

**Sample Output:**
```
true
false
```

**Solution:**
```javascript
function isValidDate(str) {
    return /^\d{4}-\d{2}-\d{2}$/.test(str);
}
```

---

### 2. Extract the First Number

**Problem Statement:** Write a function `firstNumber(str)` that returns the first run of digits in the string, or `"none"` if there is no number.

**Input Format:** A string `str`.

**Output Format:** Print the first number as a string, or `none`.

**Sample Input:**
```
firstNumber("Order #10245 placed")
firstNumber("No digits here")
```

**Sample Output:**
```
10245
none
```

**Solution:**
```javascript
function firstNumber(str) {
    const m = str.match(/\d+/);
    return m ? m[0] : "none";
}
```

---

### 3. Zero-Pad an ID

**Problem Statement:** Write a function `padId(n)` that pads a number to 5 characters with leading zeros.

**Input Format:** An integer `n`.

**Output Format:** Print the padded string.

**Sample Input:**
```
padId(7)
padId(1024)
```

**Sample Output:**
```
00007
01024
```

**Solution:**
```javascript
function padId(n) {
    return String(n).padStart(5, "0");
}
```

---

### 4. Repeat a Separator

**Problem Statement:** Write a function `separator(n)` that returns a line of `n` `=` characters.

**Input Format:** An integer `n`.

**Output Format:** Print the separator line.

**Sample Input:**
```
separator(10)
```

**Sample Output:**
```
==========
```

**Solution:**
```javascript
function separator(n) {
    return "=".repeat(n);
}
```

---

### 5. Safe Windows Path

**Problem Statement:** Write a function `windowsPath(path)` that returns the path as-is, ignoring escape sequences, using `String.raw`.

**Input Format:** A string path.

**Output Format:** Print the raw path.

**Sample Input:**
```
windowsPath("C:\\new\\test")
```

**Sample Output:**
```
C:\new\test
```

**Solution:**
```javascript
function windowsPath(path) {
    return String.raw`${path}`;
}
```

---

### 6. Encode a Search Query

**Problem Statement:** Write a function `encodeQuery(term)` that URL-encodes a search term for safe use in a query string.

**Input Format:** A string `term`.

**Output Format:** Print the encoded string.

**Sample Input:**
```
encodeQuery("playwright testing & JS")
```

**Sample Output:**
```
playwright%20testing%20%26%20JS
```

**Solution:**
```javascript
function encodeQuery(term) {
    return encodeURIComponent(term);
}
```

---

## Medium Programs

### 7. Extract All Numbers

**Problem Statement:** Write a function `allNumbers(str)` that returns every run of digits in the string as an array.

**Input Format:** A string `str`.

**Output Format:** Print the array of numbers found.

**Sample Input:**
```
allNumbers("a1b22c333")
```

**Sample Output:**
```
[ '1', '22', '333' ]
```

**Solution:**
```javascript
function allNumbers(str) {
    return str.match(/\d+/g) || [];
}
```

---

### 8. Convert Date Format

**Problem Statement:** Write a function `toDMY(date)` that converts a `YYYY-MM-DD` string into `DD/MM/YYYY` using capture groups.

**Input Format:** A string `date` in `YYYY-MM-DD` format.

**Output Format:** Print the converted date.

**Sample Input:**
```
toDMY("2026-07-25")
```

**Sample Output:**
```
25/07/2026
```

**Solution:**
```javascript
function toDMY(date) {
    return date.replace(/(\d+)-(\d+)-(\d+)/, "$3/$2/$1");
}
```

---

### 9. Double Every Digit

**Problem Statement:** Write a function `doubleDigits(str)` that replaces every digit with twice its value using a function replacer.

**Input Format:** A string `str`.

**Output Format:** Print the transformed string.

**Sample Input:**
```
doubleDigits("a1b2")
```

**Sample Output:**
```
a2b4
```

**Solution:**
```javascript
function doubleDigits(str) {
    return str.replace(/\d/g, d => d * 2);
}
```

---

### 10. Natural Sort of Item IDs

**Problem Statement:** Write a function `sortItems(items)` that sorts IDs like `item9` before `item10`.

**Input Format:** An array of strings `items`.

**Output Format:** Print the sorted array.

**Sample Input:**
```
sortItems(["item10", "item2", "item9"])
```

**Sample Output:**
```
[ 'item2', 'item9', 'item10' ]
```

**Solution:**
```javascript
function sortItems(items) {
    return [...items].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}
```

---

### 11. Count Word Occurrences

**Problem Statement:** Write a function `countWord(text, word)` that counts how many times `word` appears in `text`.

**Input Format:** A string `text` and a string `word`.

**Output Format:** Print the count.

**Sample Input:**
```
countWord("pass fail pass pass", "pass")
```

**Sample Output:**
```
3
```

**Solution:**
```javascript
function countWord(text, word) {
    return (text.match(new RegExp(word, "g")) || []).length;
}
```

---

### 12. Emoji-Safe Character Count

**Problem Statement:** Write a function `charCount(str)` that counts **code points** so emoji count as one character.

**Input Format:** A string `str`.

**Output Format:** Print the code-point count.

**Sample Input:**
```
charCount("hi😀")
```

**Sample Output:**
```
3
```

**Solution:**
```javascript
function charCount(str) {
    return [...str].length;
}
```

---

### 13. Flag Format Normalizer

**Problem Statement:** Write a function `normalizeText(str)` that collapses whitespace, trims, and lowercases text for comparison.

**Input Format:** A string `str`.

**Output Format:** Print the normalized string.

**Sample Input:**
```
normalizeText("  LOGIN   Successful\n")
```

**Sample Output:**
```
login successful
```

**Solution:**
```javascript
function normalizeText(str) {
    return str.replace(/\s+/g, " ").trim().toLowerCase();
}
```

---

## Hard Programs

### 14. Parse a Date with Named Groups

**Problem Statement:** Write a function `parseDate(date)` that uses named capture groups to return an object `{ year, month, day }`.

**Input Format:** A string `date` in `YYYY-MM-DD` format.

**Output Format:** Print the object.

**Sample Input:**
```
parseDate("2026-07-25")
```

**Sample Output:**
```
{ year: '2026', month: '07', day: '25' }
```

**Solution:**
```javascript
function parseDate(date) {
    const m = date.match(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/);
    return { year: m.groups.year, month: m.groups.month, day: m.groups.day };
}
```

---

### 15. Slug Generator

**Problem Statement:** Write a function `slugify(title)` that converts a test title into a filesystem-safe slug (lowercase, hyphen-separated, no leading/trailing hyphens).

**Input Format:** A string `title`.

**Output Format:** Print the slug.

**Sample Input:**
```
slugify("  Add to Cart! Test #3 ")
```

**Sample Output:**
```
add-to-cart-test-3
```

**Solution:**
```javascript
function slugify(title) {
    return title.trim().toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
}
```

---

### 16. Mask Sensitive Data

**Problem Statement:** Write a function `maskCard(card)` that keeps the first 2 and last 2 characters and replaces everything in between with `*`, preserving the length.

**Input Format:** A string `card`.

**Output Format:** Print the masked value.

**Sample Input:**
```
maskCard("4111111111111111")
```

**Sample Output:**
```
41************11
```

**Solution:**
```javascript
function maskCard(card) {
    return card.slice(0, 2) + "*".repeat(Math.max(0, card.length - 4)) + card.slice(-2);
}
```

---

### 17. Extract a URL Parameter

**Problem Statement:** Write a function `getParam(url, key)` that returns the value of a query parameter, or `null` if absent. Decode the value.

**Input Format:** A string `url` and a string `key`.

**Output Format:** Print the decoded value or `null`.

**Sample Input:**
```
getParam("https://qa.com/api?retry=true&q=hello%20world", "q")
getParam("https://qa.com/api?retry=true", "missing")
```

**Sample Output:**
```
hello world
null
```

**Solution:**
```javascript
function getParam(url, key) {
    const m = url.match(new RegExp(`[?&]${key}=([^&]+)`));
    return m ? decodeURIComponent(m[1]) : null;
}
```

---

### 18. Flag Parser

**Problem Statement:** Write a function `parseTags(str)` that splits a comma-separated tag string, trims each tag, drops empty ones, and lowercases them.

**Input Format:** A string `str` of comma-separated tags.

**Output Format:** Print the array of cleaned tags.

**Sample Input:**
```
parseTags(" Smoke, Regression ,, Login ")
```

**Sample Output:**
```
[ 'smoke', 'regression', 'login' ]
```

**Solution:**
```javascript
function parseTags(str) {
    return str.split(",").map(t => t.trim().toLowerCase()).filter(Boolean);
}
```

---

## Bonus Practice Tips

- **Validate with regex** (`/^\d+$/.test(s)`) rather than a chain of character checks.
- **`match`** returns `null` on no match — always guard before indexing.
- **Named groups** make regex results readable and self-documenting.
- **`padStart`/`repeat`** are the clean way to format IDs and report lines.
- **`localeCompare` + `{ numeric: true }`** gives natural, human-friendly sorts.
- **`[...str]`** is the emoji-safe way to count or reverse characters.
- **`encodeURIComponent`** before putting user text into a query string.
