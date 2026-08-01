# Additional Topics — Programming Practice (Identifiers)

## Easy Programs

**1. Write a program testing valid and invalid identifiers.**

```javascript
let _name = "Rahul";      // valid — underscore start
let $name = "Saanvi";     // valid — dollar start
let name1 = "Monu";       // valid — digit after
console.log(_name, $name, name1);

// let 1name = "x";       // SyntaxError — can't start with digit
// let name-1 = "x";      // SyntaxError — hyphen not allowed
```

**2. Write a program demonstrating naming conventions.**

```javascript
const BASE_URL = "https://example.com";   // SCREAMING_SNAKE — constant
let userName = "Rahul";                    // camelCase — variable
function getLoginPage() { return BASE_URL + "/login"; }  // camelCase — function

class LoginPage {                          // PascalCase — class
    constructor() {}
}
console.log(getLoginPage());
```

**3. Write a program using reserved words as object properties.**

```javascript
const obj = {
    class: "A",
    function: "helper",
    var: "keyword"
};
console.log(obj.class);       // "A"
console.log(obj["function"]); // "helper"
```

**4. Write a program accessing properties with special characters using bracket notation.**

```javascript
const element = {
    "data-testid": "login-button",
    "first name": "Rahul",
    123: "numeric"
};
console.log(element["data-testid"]);  // "login-button"
console.log(element["first name"]);   // "Rahul"
console.log(element[123]);            // "numeric"
```

**5. Write a program demonstrating the scope chain.**

```javascript
const appName = "MyApp";
function outer() {
    const outerMsg = "outer";
    function inner() {
        console.log(outerMsg);   // found in outer scope
        console.log(appName);    // found in global scope
    }
    inner();
}
outer();
```

---

## Medium Programs

**6. Write a program demonstrating shadowing.**

```javascript
let count = 0;
function runTest() {
    let count = 10;          // shadows global
    console.log(count);      // 10
}
runTest();
console.log(count);          // 0
```

**7. Write a Playwright-style `$` selector helper.**

```javascript
function $(selector) {
    return document.querySelector(selector);
}
// Usage (browser context): const button = $("#submit");
console.log(typeof $);   // function
```

**8. Write a program showing that `undefined`/`NaN` shadowing is dangerous.**

```javascript
// Don't do this in real code!
let undefined = 5;          // legal but bad
console.log(undefined);     // 5 — the global undefined is hidden
```

**9. Write a program showing identifier resolution failure.**

```javascript
try {
    console.log(notDefinedAnywhere);   // ReferenceError
} catch (error) {
    console.log("ReferenceError:", error.message);
}
```

**10. Write a Page Object skeleton with correct naming conventions.**

```javascript
const DEFAULT_TIMEOUT = 5000;              // SCREAMING_SNAKE

class LoginPage {                          // PascalCase
    constructor(page) {
        this.page = page;
    }
    async login(username, password) {       // camelCase
        await this.page.fill("#user", username);
        await this.page.fill("#pass", password);
        await this.page.click("#login");
    }
}
```

---

## Hard Programs

**11. Write a program demonstrating multi-level scope chain resolution.**

```javascript
const globalVar = "global";
function level1() {
    const var1 = "level1";
    function level2() {
        const var2 = "level2";
        function level3() {
            const var3 = "level3";
            console.log(var3);   // own
            console.log(var2);   // level2
            console.log(var1);   // level1
            console.log(globalVar);  // global
        }
        level3();
    }
    level2();
}
level1();
```

**12. Write a function that uses `_` for unused callback parameters.**

```javascript
["login", "checkout"].forEach((_, index) => {
    console.log(`Test #${index + 1}`);
});
// Test #1
// Test #2
```

**13. Write a config object accessed with bracket notation (framework pattern).**

```javascript
const config = {
    "base-url": "https://example.com",
    "default-timeout": 5000,
    env: "staging"
};
function getConfig(key) {
    return config[key];        // dynamic key access
}
console.log(getConfig("base-url"));       // "https://example.com"
console.log(getConfig("default-timeout")); // 5000
```

**14. Write a program showing context-dependent `await` usage.**

```javascript
async function getData() {
    const data = await Promise.resolve("payload");  // await is a keyword here
    return data;
}
getData().then(d => console.log(d));   // "payload"
```

**15. Write a program demonstrating that minifiers rename identifiers but not property keys.**

```javascript
// Long names get shortened by minifiers:
function calculateTotalPrice(quantity, unitPrice) {
    return quantity * unitPrice;   // becomes: function a(b,c){return b*c}
}
// But object keys like obj["data-testid"] must stay — that's why
// framework configs use quoted keys.
console.log(calculateTotalPrice(3, 50));  // 150
```
