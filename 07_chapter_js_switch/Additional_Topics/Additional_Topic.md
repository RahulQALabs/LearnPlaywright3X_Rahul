# Additional Topics — Switch Tricks, Object Maps, Default-in-Middle (Switch)

The switch chapter is already strong. These are the few tricky behaviors that were only asked in questions but never demonstrated in code.

## 1. `default` in the Middle of a Switch

The `default` case doesn't have to be last. If it appears in the middle and a case falls through, execution continues **after** default:

```javascript
function test(value) {
    switch (value) {
        case 1:
            console.log("Case 1");
            break;
        default:
            console.log("Default — in the middle");
        case 2:
            console.log("Case 2");
            break;
    }
}
test(1);   // "Case 1"
test(2);   // "Case 2" — default is skipped
test(99);  // "Default — in the middle" then "Case 2" — falls through!
```

**Why:** unmatched values jump to `default`, and since there's no `break` after it, execution continues into `case 2`. This is a classic interview trap.

## 2. Lexical Declaration Error — `let` in Adjacent Cases

Declaring `let`/`const` in one case without braces causes a SyntaxError, because all cases share one block:

```javascript
// This throws: "SyntaxError: Identifier 'msg' has already been declared"
// switch (x) {
//     case 1:
//         let msg = "one";
//         break;
//     case 2:
//         let msg = "two";   // duplicate — same block!
//         break;
// }

// Fix: wrap each case in { } to create its own scope
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
console.log(getMessage(1));  // "one"
```

## 3. Intentional Fall-Through — Weekend Grouping

The *useful* fall-through: multiple cases sharing one body.

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

## 4. Object Map — The Modern Switch Alternative

For simple value lookups, an object map is cleaner and faster than switch — very common in test frameworks (env config, browser selection):

```javascript
// Switch version:
function getUrl(env) {
    switch (env) {
        case "dev": return "https://dev.example.com";
        case "staging": return "https://staging.example.com";
        case "prod": return "https://example.com";
        default: return "https://dev.example.com";
    }
}

// Object map version — same result, cleaner:
const URLS = {
    dev: "https://dev.example.com",
    staging: "https://staging.example.com",
    prod: "https://example.com"
};
function getUrl(env) {
    return URLS[env] ?? URLS.dev;   // ?? default
}

console.log(getUrl("staging"));  // "https://staging.example.com"
console.log(getUrl("qa"));       // "https://dev.example.com" (default)
```

**Why it matters in testing:** Playwright configs, env-based base URLs, browser lists, and locator strategies are all object-map shaped.

## 5. The `NaN` Never Matches Trap

`switch` uses strict `===`, and `NaN === NaN` is `false` — so `case NaN` never matches:

```javascript
function check(value) {
    switch (value) {
        case NaN:
            console.log("Matched NaN");   // NEVER runs
            break;
        default:
            console.log("No match");       // NaN always lands here
    }
}
check(NaN);  // "No match"
```

## 6. Duplicate Cases — First Wins

```javascript
switch (10) {
    case 10:
        console.log("First 10");   // this runs
        break;
    case 10:
        console.log("Second 10");  // dead code — never runs
        break;
}
```

JavaScript allows duplicate cases (unlike some languages); only the first executes.
