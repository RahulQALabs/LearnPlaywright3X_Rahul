# Additional Topics — Regex, Unicode, Padding, Sorting & URL Encoding (Strings)

The strings chapter covers creation, access, searching, extraction, case, replacement, splitting, and conversion. These are the missing pieces interviewers ask next — and the ones you'll actually reach for when validating UI text, parsing API responses, and building test-report filenames.

## 1. Regex in Depth — `search`, `match`, `matchAll`, `test`

```javascript
const log = "Order #10245 placed at 2026-07-25";

console.log(log.search(/\d+/));          // 7 — index of the first number
console.log(log.match(/#(\d+)/));        // ['#10245', '10245', index: 6, ...]
console.log(log.match(/\d+/g));          // ['10245', '2026', '07', '25'] — all matches
console.log(/^\d+$/.test("12345"));      // true — boolean check
console.log(/^\d+$/.test("12a45"));      // false

// matchAll — every match with its capture groups (needs /g)
const pairs = [..."a1b2c3".matchAll(/([a-z])(\d)/g)].map(m => m[0]);
console.log(pairs);                       // ['a1', 'b2', 'c3']
```

| Method | Takes | Returns |
|--------|-------|---------|
| `search(re)` | regex | first index or `-1` |
| `match(re)` | regex | array (first match + groups) or `null` |
| `match(re)` with `/g` | regex + `g` | array of all full matches |
| `matchAll(re)` with `/g` | regex + `g` | iterator of match objects |
| `test(re)` | regex (on the regex) | `true` / `false` |

**Named groups** make the output self-documenting:

```javascript
const m = "2026-07-25".match(/(?<y>\d{4})-(?<mo>\d{2})-(?<d>\d{2})/);
console.log(m.groups.y, m.groups.mo, m.groups.d);   // 2026 07 25
```

**Why it matters in testing:** extracting IDs, dates, and amounts from page text or API responses is daily work. `.test()` is the go-to for format validation.

## 2. String Comparison & Sorting

```javascript
console.log("a".localeCompare("b"));   // -1 — a sorts before b
console.log("b".localeCompare("a"));   //  1
console.log("a".localeCompare("a"));   //  0

// Default sort is code-unit based — uppercase sorts first:
console.log(["b", "a", "C"].sort());                          // ['C','a','b']
console.log(["b", "a", "C"].sort((x, y) => x.localeCompare(y))); // ['a','b','C']

// Numerical-aware sort for IDs like item2 vs item10:
console.log(["item10", "item9"].sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true })));       // ['item9','item10']

// Case-insensitive equality:
console.log("ABC".localeCompare("abc", undefined, { sensitivity: "base" }));  // 0
```

**Why it matters in testing:** browser names, test titles, and artifact names should sort the way a human expects — `localeCompare` delivers that.

## 3. Unicode, Emoji & Normalization

```javascript
console.log("😀".length);                 // 2 — UTF-16 code units
console.log([..."😀"].length);            // 1 — code points
console.log("😀".codePointAt(0));         // 128512
console.log(String.fromCodePoint(128512)); // "😀"

console.log([..."hey"]);                  // ['h','e','y'] — emoji-safe
console.log("😀".split(""));              // two broken surrogate halves — avoid!

// Canonical form for comparison of accented text:
console.log("é".normalize("NFC") === "e\u0301".normalize("NFC"));  // true

// Lone-surrogate safety (ES2024)
console.log("\uD800".isWellFormed());     // false
console.log("\uD800".toWellFormed());     // "�"
```

**Why it matters in testing:** UI text with emoji is common. Counting with `[...str]` and normalising accented characters avoids false failures.

## 4. Padding & Repeating

```javascript
console.log("7".padStart(3, "0"));         // "007"  — zero-pad IDs
console.log("Name".padEnd(10, "."));       // "Name......" — align console output
console.log("abcdef".padStart(3, "0"));    // "abcdef" — no-op if already long enough

console.log("=".repeat(20));               // "====================" — separators
console.log("ab".repeat(3));               // "ababab"
```

**Why it matters in testing:** formatting test IDs, timestamped filenames, and neat console/table output in reports.

## 5. Advanced Replacement — Capture Groups & Function Replacer

```javascript
// $& = whole match
console.log("abc".replace(/b/, "[$&]"));                        // "a[b]c"

// Reorder date parts with $1, $2, $3
console.log("2026-07-25".replace(/(\d+)-(\d+)-(\d+)/, "$3/$2/$1"));  // "25/07/2026"

// Function replacer — transform each match
console.log("a1b2".replace(/\d/g, d => d * 2));                 // "a2b4"
console.log("hello world".replace(/\b\w/g, c => c.toUpperCase())); // "Hello World"
```

**Why it matters in testing:** converting date formats, masking values, and title-casing labels are common assertion-prep steps.

## 6. `String.raw` and Tagged Templates

```javascript
console.log(String.raw`C:\new\test`);   // "C:\\new\\test" — escapes ignored
console.log(String.raw`\d{4}-\d{2}`);   // "\d{4}-\d{2}" — great for regex literals

function tag(strings, ...values) {
    return strings.map((s, i) => `${s}<${values[i] ?? ""}>`).join("");
}
console.log(tag`Hello ${"Rahul"}, score ${95}`);   // "Hello <Rahul>, score <95>"
```

**Why it matters in testing:** Windows paths in config and building dynamic regex patterns without double-escaping.

## 7. Static Methods

```javascript
console.log(String.fromCharCode(72, 105));    // "Hi" — code units → string
console.log(String.fromCodePoint(128512));    // "😀" — code point → string
console.log(String.raw`a\nb`);                // "a\\nb"
```

## 8. URL Encoding & Decoding

```javascript
const q = "playwright testing & JS";
console.log(encodeURIComponent(q));   // "playwright%20testing%20%26%20JS"
console.log(decodeURIComponent("playwright%20testing%20%26%20JS")); // original

console.log(encodeURI("https://qa.com/a b"));  // keeps :// and encodes the space
```

- `encodeURIComponent` encodes **everything** — use it for a single query **value**.
- `encodeURI` leaves reserved characters (`:`, `/`, `?`) intact — use it on a full URL.
- ⚠️ Never build a URL by concatenating an unencoded value into a query string.

**Why it matters in testing:** building deep-link test URLs with search terms that contain spaces or `&`.

## 9. SDET Recipes

```javascript
// Normalize UI text before asserting
const normalize = s => s.replace(/\s+/g, " ").trim().toLowerCase();
normalize("  LOGIN   Successful\n");            // "login successful"

// Currency string → number
const money = s => parseFloat(s.replace(/[^0-9.]/g, ""));
money("₹1,299.50");                             // 1299.5

// Extract an ID from a URL
"https://shop.com/order/10245?ref=x".match(/\/order\/(\d+)/)[1];   // "10245"

// Mask sensitive data in logs
const mask = s => s.slice(0, 2) + "*".repeat(Math.max(0, s.length - 4)) + s.slice(-2);
mask("4111111111111111");                       // "41************11"

// Slug for screenshot / artifact filenames
const slug = s => s.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
slug("  Add to Cart! Test #3 ");                // "add-to-cart-test-3"

// Count occurrences of a substring
("a-b-a-c".match(/a/g) || []).length;           // 2

// Truncate long failure messages
const truncate = (s, n) => s.length > n ? s.slice(0, n - 1) + "…" : s;
truncate("Element not visible on page", 15);    // "Element not vi…"
```

## 10. Key Takeaways

- **Regex** (`search`, `match`, `matchAll`, `test`) unlocks flexible searching and validation.
- `match` returns `null` on no match — guard with `?.[0]`.
- **`localeCompare`** gives human-correct sorting; add `{ numeric: true }` for IDs.
- **Emoji-safe** operations use `[...str]` and `codePointAt`, not `split("")`.
- **`padStart`/`padEnd`/`repeat`** format IDs, headings, and report lines.
- **Capture groups + function replacers** make `replace` far more powerful than a swap.
- **`encodeURIComponent`** for query values, **`encodeURI`** for whole URLs.
- Keep the **SDET recipes** handy — normalise, mask, slug, truncate, extract.
