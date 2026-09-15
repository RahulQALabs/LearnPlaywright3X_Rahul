//Searching & Checking......

let url = "https://statging.vwo.com/api/login?retry=true";

// includes() -> checks if a substring exists anywhere in the string (returns true/false)
console.log("url.includes('staging') :", url.includes("staging"));        // false (url has typo "statging")
console.log("url.includes('production') :", url.includes("production"));  // false


// startsWith() / endsWith() -> checks if string starts/ends with given substring (returns true/false)
console.log("url.startsWith('https') :", url.startsWith("https"));        // true
console.log("url.startsWith('https://') :", url.startsWith("https://"));  // true
console.log("url.endsWith('true') :", url.endsWith("true"));              // true

// indexOf() / lastIndexOf() -> returns index position of first/last occurrence (returns number, -1 if not found)
console.log("indexOf('a') - first occurrence :", url.indexOf("a"));       // 10
console.log("lastIndexOf('a') - last occurrence :", url.lastIndexOf("a")); // 25
console.log("indexOf('nothere') - not found :", url.indexOf("nothere")); // -1