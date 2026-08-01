# Additional Topics — Reserved Words, Scope Chain, Naming Conventions (Identifiers)

Practical topics missing from the identifiers chapter that matter for interviews and Playwright framework creation.

## 1. Reserved Words in Depth

Your chapter listed reserved words but didn't explain the categories fully. The key groups:

### Future reserved words (can't be identifiers)
```javascript
// These are reserved for future use — illegal as variable names:
// implements, interface, package, private, protected, public, static, yield
// let static = 10;   // SyntaxError
```

### Strict-mode reserved words
```javascript
"use strict";
// implements, interface, package, private, protected, public, static, yield
// also: arguments, eval cannot be used as names
```

### Context-dependent keywords — legal in some contexts
```javascript
// `await` is only a keyword inside async functions:
async function fetchData() {
    const data = await getData();   // keyword here
}
const await = 10;                    // outside async, some engines allow... avoid it!

// `let` was not reserved in old sloppy mode
```

### `undefined`, `NaN`, `Infinity` — legal identifiers but dangerous
```javascript
let undefined = 5;       // legal but terrible — shadows the global undefined
let NaN = 10;            // shadows the real NaN
console.log(undefined);  // now prints 5, not undefined!
```
Never name variables after these globals.

## 2. Property Names vs Identifiers

Object property names are **much more flexible** than variable names — they can be keywords, numbers, or contain special characters:

```javascript
const obj = {
    class: "A",        // keyword as property — fine
    123: "number",     // numeric key
    "first-name": "Rahul",   // dash — must be quoted
    var: "keyword"     // fine as a property
};
console.log(obj.class);      // "A"
console.log(obj["first-name"]);  // bracket notation needed
console.log(obj[123]);       // "number"
```

**Why it matters in testing:** Playwright configs, locator objects, and API response data often have keys like `data-testid`, `class`, or numbers — you access them with bracket notation.

## 3. Scope Chain / Identifier Resolution

When code references an identifier, JS resolves it by walking the **scope chain**: current scope → outer scopes → global. If nowhere, you get `ReferenceError`.

```javascript
const baseUrl = "https://example.com";       // global

function setupTest() {
    const testName = "Login";                // setupTest scope

    function logDetails() {
        const step = 1;                      // logDetails scope
        console.log(step);                   // own scope
        console.log(testName);               // parent scope
        console.log(baseUrl);                // global scope
    }
    logDetails();
}
setupTest();
```

## 4. Shadowing (with identifiers)

```javascript
let count = 0;          // global

function runTest() {
    let count = 10;     // shadows the global — inner wins inside the function
    console.log(count); // 10
}
runTest();
console.log(count);     // 0
```

## 5. The `$` and `_` Conventions in Frameworks

- **`$`**: jQuery (`$("#id")`), Playwright uses `$`/`$$` for locators, template literals `${}`.
- **`_`**: Underscore/Lodash libraries, "unused parameter" convention (`_event`).

```javascript
// Playwright-style locator helpers
function $(selector) {
    return document.querySelector(selector);
}
const title = $("#main-title");

// Lodash-style utility
const _ = { map: (arr, fn) => arr.map(fn) };
```

## 6. Naming Conventions for Test Frameworks

The rules you learned apply directly to framework code:

| Convention | Where | Example |
|-----------|-------|---------|
| **camelCase** | variables, functions, test names | `loginTest`, `getBaseUrl` |
| **PascalCase** | classes / Page Objects | `class LoginPage` |
| **SCREAMING_SNAKE** | constants / env config | `BASE_URL`, `DEFAULT_TIMEOUT` |
| **lowercase + dash** | config files, folder names | `playwright.config.ts` |
| **`_` prefix** | private / unused | `_page`, `_event` |

```javascript
const DEFAULT_TIMEOUT = 5000;              // SCREAMING_SNAKE constant
class LoginPage {                          // PascalCase Page Object
    constructor(page) {
        this.page = page;
    }
    async login(username, password) {       // camelCase method
        await this.page.fill("#user", username);
        await this.page.fill("#pass", password);
        await this.page.click("#submit");
    }
}
```
