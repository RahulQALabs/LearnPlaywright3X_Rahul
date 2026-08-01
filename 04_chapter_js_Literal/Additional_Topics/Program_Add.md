# Additional Topics — Programming Practice (Literals)

## Easy Programs

**1. Write a program demonstrating common string methods.**

```javascript
let url = "https://example.com/login";
console.log(url.length);             // 25
console.log(url.includes("login"));  // true
console.log(url.startsWith("https")); // true
console.log(url.endsWith("/login")); // true
console.log(url.split("/"));         // ["https:", "", "example.com", "login"]
console.log(url.slice(8, 15));       // "example"
console.log(url.replace("login", "signup"));  // "https://example.com/signup"
```

**2. Write a program demonstrating escape sequences.**

```javascript
console.log("Line 1\nLine 2");   // newline
console.log("Tab\there");        // tab
console.log("It\'s easy");       // single quote
console.log("Backslash \\");     // backslash
```

**3. Write a program demonstrating template literal expressions.**

```javascript
const name = "Rahul";
const score = 85;
console.log(`${name} scored ${score > 70 ? "pass" : "fail"}`);  // "Rahul scored pass"
console.log(`Sum: ${2 + 3}`);   // "Sum: 5"
```

**4. Write a program demonstrating truthy/falsy values.**

```javascript
const falsyValues = [false, 0, "", null, undefined, NaN];
falsyValues.forEach(v => console.log(v, "is falsy:", !v));

console.log(Boolean("0"));      // true
console.log(Boolean([]));       // true
console.log(Boolean({}));       // true
```

**5. Write a program comparing `==`, `===`, and `Object.is`.**

```javascript
console.log(5 == "5");          // true
console.log(5 === "5");         // false
console.log(0 == false);        // true
console.log(null == undefined); // true
console.log(Object.is(NaN, NaN));  // true
console.log(NaN === NaN);          // false
```

---

## Medium Programs

**6. Write a program demonstrating Number conversion utilities.**

```javascript
console.log(Number("42"));       // 42
console.log(+"42");              // 42
console.log(parseInt("42px", 10));   // 42
console.log(parseFloat("3.14rad"));  // 3.14
console.log(Number.isNaN("abc"));    // false
console.log(isNaN("abc"));           // true — coerces!
```

**7. Write a program demonstrating regex literals.**

```javascript
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(emailPattern.test("rahul@test.com"));   // true
console.log(emailPattern.test("invalid-email"));    // false

const urlPattern = /api\/users\/\d+/;
console.log(urlPattern.test("api/users/123"));  // true
console.log(urlPattern.test("api/users/abc"));  // false
```

**8. Write a program demonstrating JSON stringify/parse.**

```javascript
const user = { name: "Rahul", active: true, scores: [85, 92] };
const json = JSON.stringify(user);
console.log(json);   // {"name":"Rahul","active":true,"scores":[85,92]}

const parsed = JSON.parse(json);
console.log(parsed.name);        // "Rahul"
console.log(parsed.scores[0]);   // 85
```

**9. Write a program demonstrating Symbols as unique keys.**

```javascript
const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log(sym1 === sym2);   // false

const obj = { [sym1]: "secret" };
console.log(obj[sym1]);       // "secret"
console.log(obj[sym2]);       // undefined
```

**10. Write a program demonstrating multi-line template literals.**

```javascript
const name = "Rahul";
const html = `
    <div>
        <h1>Welcome ${name}</h1>
    </div>
`;
console.log(html);
```

---

## Hard Programs

**11. Write a function that validates an email with regex (framework helper).**

```javascript
function isValidEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}
console.log(isValidEmail("rahul@test.com"));  // true
console.log(isValidEmail("bad@@"));           // false
```

**12. Write a function that parses a JSON response safely.**

```javascript
function safeParse(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        return null;
    }
}
console.log(safeParse('{"ok":true}'));  // { ok: true }
console.log(safeParse("not json"));     // null
```

**13. Write a function that builds a dynamic URL using template literals.**

```javascript
function buildUrl(base, endpoint, params) {
    const query = Object.entries(params)
        .map(([k, v]) => `${k}=${v}`)
        .join("&");
    return `${base}/${endpoint}?${query}`;
}
console.log(buildUrl("https://api.example.com", "users", { id: 5, active: true }));
// "https://api.example.com/users?id=5&active=true"
```

**14. Write a program demonstrating string to number coercion pitfalls.**

```javascript
console.log("5" + 5);      // "55" — string concat
console.log("5" - 5);      // 0 — subtraction coerces
console.log("5" * 2);      // 10 — multiplication coerces
console.log("abc" - 5);    // NaN
console.log(Number("5") + 5);  // 10 — explicit conversion
```

**15. Write a program demonstrating regex extraction with match.**

```javascript
const logLine = "2026-08-01 10:30:45 ERROR: Test failed";
const datePattern = /^\d{4}-\d{2}-\d{2}/;
console.log(logLine.match(datePattern)[0]);   // "2026-08-01"

const errorLevel = /(INFO|WARN|ERROR)/;
console.log(logLine.match(errorLevel)[1]);    // "ERROR"
```
