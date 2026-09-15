# Additional Topics — Strings, Coercion, RegExp, JSON, Symbols (Literals)

Practical topics missing from the literals chapter that matter for interviews and Playwright framework creation.

## 1. String Methods (Essential for Testing)

Playwright locators, assertions, and log messages are string-heavy.

```javascript
let url = "https://example.com/login";

url.length;                 // 25
url.toUpperCase();          // "HTTPS://EXAMPLE.COM/LOGIN"
url.toLowerCase();          // "https://example.com/login"
url.includes("login");      // true
url.startsWith("https");    // true
url.endsWith("/login");     // true
url.indexOf("example");     // 8
url.slice(8, 15);           // "example" — substring
url.split("/");             // ["https:", "", "example.com", "login"]
url.replace("login", "signup");  // "https://example.com/signup"
"  hi  ".trim();            // "hi"
"abc".charAt(1);            // "b"
"abc"[1];                   // "b"
"a,b,c".split(",");         // ["a", "b", "c"]
```

## 2. Escape Sequences & Multi-line Strings

```javascript
console.log("Line 1\nLine 2");     // \n newline
console.log("Tab\there");          // \t tab
console.log("It\'s");              // \' single quote
console.log("Backslash \\");       // \\ backslash
console.log("\u00A9");             // © unicode escape

// Multi-line with template literal (backticks):
const message = `
    Line one
    Line two
    ${url}
`;
```

## 3. Template Literals in Depth

```javascript
const name = "Rahul";
const score = 85;

// Interpolation with expressions:
console.log(`${name} scored ${score > 70 ? "pass" : "fail"}`);  // any expression allowed

// Nested templates:
const box = `${`inner ${name}`} outer`;   // "inner Rahul outer"

// Multi-line:
const html = `
    <div>
        <h1>${name}</h1>
    </div>
`;
```

## 4. Type Coercion & Truthy/Falsy (Top Interview Topic)

JavaScript converts types automatically — this causes most assertion bugs.

```javascript
// String + number → string concatenation
console.log("10" + 5);    // "105" — number converted to string
console.log(10 + 5);      // 15 — both numbers

// Number - string → number subtraction (converts string to number)
console.log("10" - 5);    // 5

// Boolean coercion
if ("hello") console.log("truthy");      // "hello" is truthy
if (0) console.log("never");             // 0 is falsy
```

**Falsy values** (everything else is truthy): `false`, `0`, `""`, `null`, `undefined`, `NaN`.

```javascript
console.log(Boolean("0"));     // true — non-empty string!
console.log(Boolean("false")); // true — non-empty string!
console.log(Boolean([]));      // true — empty array is truthy
console.log(Boolean({}));      // true — empty object is truthy
```

## 5. `==` vs `===` vs `Object.is`

```javascript
console.log(5 == "5");        // true — coercion happens
console.log(5 === "5");       // false — type must match
console.log(0 == false);      // true — coercion!
console.log(0 === false);     // false
console.log(null == undefined);  // true — special rule
console.log(null === undefined); // false

// Object.is — like === but handles NaN and -0:
console.log(NaN === NaN);          // false
console.log(Object.is(NaN, NaN));  // true
console.log(0 === -0);             // true
console.log(Object.is(0, -0));     // false
```

**Rule for frameworks:** always use `===` unless you specifically want coercion.

## 6. Number Utilities

```javascript
Number.isNaN(NaN);         // true — reliable
isNaN("abc");              // true — coerces first, unreliable
Number.isNaN("abc");       // false — checks type too

parseInt("42px", 10);      // 42
parseFloat("3.14rad");     // 3.14
Number("10");              // 10
+"10";                     // 10 — unary plus
Number.MAX_SAFE_INTEGER;   // 9007199254740991
Number.isFinite(10);       // true
Number.isInteger(10.5);    // false
```

## 7. RegExp Literals (Used Everywhere in Playwright)

```javascript
const pattern = /^[a-z]+$/;      // regex literal

// Flags:
const caseInsensitive = /login/i;   // i = ignore case
const global = /pass/g;             // g = all matches
const multiline = /^start/m;        // m = multiline

// Methods:
/abc/.test("xabcy");           // true — returns boolean
"hello world".match(/o/g);     // ["o", "o"]
"abc".replace(/b/, "X");       // "aXc"

// Playwright usage pattern:
const urlPattern = /api\/users\/\d+/;   // matches "api/users/123"
console.log(urlPattern.test("api/users/99"));  // true
```

Common patterns: `\d` digit, `\w` word char, `\s` whitespace, `*` zero+, `+` one+, `?` optional, `{2}` exactly 2, `[a-z]` character class.

## 8. JSON — The Playwright API Testing Core

```javascript
// Object → JSON string
const user = { name: "Rahul", active: true, scores: [85, 92] };
const json = JSON.stringify(user);
console.log(json);   // {"name":"Rahul","active":true,"scores":[85,92]}

// JSON string → object
const parsed = JSON.parse(json);
console.log(parsed.name);   // "Rahul"

// In Playwright API tests:
// const response = await request.get(url);
// const body = await response.json();   // JSON.parse in disguise
// expect(body.status).toBe("success");
```

## 9. Symbol Type

```javascript
const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log(sym1 === sym2);  // false — every Symbol is unique

// Used as unique object keys:
const obj = { [sym1]: "secret value" };
console.log(obj[sym1]);      // "secret value"
```

Symbols are unique keys for object properties — used by frameworks for internal metadata that shouldn't collide with user keys.

## 10. Wrapper Objects & Boxing

Primitives are temporarily "boxed" into objects when you call methods on them:

```javascript
"hello".toUpperCase();   // works — JS boxes the string temporarily

new Number(5) === 5;     // false — object vs primitive
new String("hi") == "hi";  // true (coerced)
Number(5) === 5;         // true — Number() as function returns primitive
```

Always use primitives (`5`, `"hi"`) — never `new Number()`/`new String()`.
