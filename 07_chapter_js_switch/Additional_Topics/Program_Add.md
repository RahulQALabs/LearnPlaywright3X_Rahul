# Additional Topics — Programming Practice (Switch)

## Easy Programs

**1. Write a program demonstrating the `default` in the middle trap.**

```javascript
function test(value) {
    switch (value) {
        case 1:
            console.log("Case 1");
            break;
        default:
            console.log("Default in middle");
        case 2:
            console.log("Case 2");
            break;
    }
}
test(1);   // Case 1
test(99);  // Default in middle, Case 2 (falls through!)
```

**2. Write a program with weekend/weekday grouping using fall-through.**

```javascript
function dayType(day) {
    switch (day) {
        case 6:
        case 7:
            return "Weekend";
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "Weekday";
        default:
            return "Invalid day";
    }
}
console.log(dayType(6));  // Weekend
console.log(dayType(3));  // Weekday
```

**3. Write a program showing the `NaN` case trap.**

```javascript
function check(value) {
    switch (value) {
        case NaN:
            console.log("Matched NaN");
            break;
        default:
            console.log("No match");
    }
}
check(NaN);   // No match — case NaN never matches
```

**4. Write a program with duplicate cases showing first-wins.**

```javascript
switch (10) {
    case 10:
        console.log("First 10 runs");
        break;
    case 10:
        console.log("Second 10 — dead code");
        break;
}
```

**5. Write a program wrapping cases in `{}` to allow `let` declarations.**

```javascript
function getMessage(x) {
    switch (x) {
        case 1: {
            let msg = "one";
            return msg;
        }
        case 2: {
            let msg = "two";
            return msg;
        }
        default:
            return "other";
    }
}
console.log(getMessage(1));  // one
console.log(getMessage(2));  // two
```

---

## Medium Programs

**6. Write an object map for environment URLs (switch alternative).**

```javascript
const URLS = {
    dev: "https://dev.example.com",
    staging: "https://staging.example.com",
    prod: "https://example.com"
};
function getUrl(env) {
    return URLS[env] ?? URLS.dev;
}
console.log(getUrl("staging"));  // "https://staging.example.com"
console.log(getUrl("qa"));       // "https://dev.example.com"
```

**7. Write an object map for browser selection.**

```javascript
const BROWSERS = {
    chrome: "chromium",
    firefox: "firefox",
    safari: "webkit"
};
function getBrowser(name) {
    return BROWSERS[name] ?? "chromium";
}
console.log(getBrowser("firefox"));  // firefox
console.log(getBrowser("edge"));     // chromium (default)
```

**8. Write a grade evaluator using `switch(true)`.**

```javascript
function grade(marks) {
    switch (true) {
        case marks >= 90: return "A";
        case marks >= 80: return "B";
        case marks >= 70: return "C";
        case marks >= 40: return "D";
        default: return "F";
    }
}
console.log(grade(95));  // A
console.log(grade(55));  // D
```

**9. Write a calculator using switch.**

```javascript
function calculator(a, b, op) {
    switch (op) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return b !== 0 ? a / b : "Cannot divide by zero";
        default: return "Invalid operator";
    }
}
console.log(calculator(10, 5, "+"));  // 15
console.log(calculator(10, 5, "/"));  // 2
```

**10. Write an HTTP status code mapper with switch.**

```javascript
function describeStatus(code) {
    switch (code) {
        case 200: return "OK";
        case 201: return "Created";
        case 400: return "Bad Request";
        case 401: return "Unauthorized";
        case 404: return "Not Found";
        case 500: return "Server Error";
        default: return "Unknown";
    }
}
console.log(describeStatus(404));  // Not Found
```

---

## Hard Programs

**11. Write a config selector using switch for multiple environments.**

```javascript
function getConfig(env) {
    switch (env) {
        case "dev":
            return { url: "https://dev.example.com", timeout: 5000, retries: 0 };
        case "staging":
            return { url: "https://staging.example.com", timeout: 10000, retries: 2 };
        case "prod":
            return { url: "https://example.com", timeout: 20000, retries: 3 };
        default:
            return { url: "https://dev.example.com", timeout: 5000, retries: 0 };
    }
}
console.log(getConfig("staging").timeout);  // 10000
```

**12. Write a program comparing switch vs object map performance patterns.**

```javascript
// Switch:
function viaSwitch(code) {
    switch (code) {
        case 200: return "OK";
        case 404: return "Not Found";
        default: return "Unknown";
    }
}

// Object map (faster lookup for many keys):
const STATUS = { 200: "OK", 404: "Not Found" };
function viaMap(code) {
    return STATUS[code] ?? "Unknown";
}

console.log(viaSwitch(200), viaMap(200));  // OK OK
console.log(viaSwitch(500), viaMap(500));  // Unknown Unknown
```

**13. Write a menu-driven program using switch (framework CLI pattern).**

```javascript
function handleCommand(command) {
    switch (command) {
        case "run": return "Running tests...";
        case "report": return "Generating report...";
        case "clean": return "Cleaning artifacts...";
        case "help":
        default:
            return "Commands: run, report, clean";
    }
}
console.log(handleCommand("run"));    // Running tests...
console.log(handleCommand("help"));   // Commands: run, report, clean
```

**14. Write a program demonstrating switch with grouped HTTP success/error handling.**

```javascript
function logStatus(code) {
    switch (code) {
        case 200:
        case 201:
        case 204:
            console.log("Success");
            break;
        case 400:
        case 401:
        case 403:
        case 404:
            console.log("Client error");
            break;
        case 500:
        case 502:
        case 503:
            console.log("Server error");
            break;
        default:
            console.log("Unknown");
    }
}
logStatus(204);  // Success
logStatus(404);  // Client error
logStatus(503);  // Server error
```

**15. Write a program showing switch fall-through as a feature vs a bug.**

```javascript
// Feature — grouping (intentional):
function isWeekend(day) {
    switch (day) {
        case 6:
        case 7:
            return true;
        default:
            return false;
    }
}

// Bug — missing break (accidental):
function accidental(day) {
    switch (day) {
        case 1:
            console.log("Case 1");
        case 2:
            console.log("Case 2");   // also runs!
    }
}
accidental(1);  // Case 1, Case 2 — missing break
```
