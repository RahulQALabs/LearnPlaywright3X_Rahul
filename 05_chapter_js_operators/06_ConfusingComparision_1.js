
console.log("" == 0); // Empty string becomes 0 in loose comparison

console.log("0" == 0); // "0" becomes 0, so true
console.log("0" === 0); // Different type, so false

console.log("" == "0"); // Both are strings, compare as it is so false

console.log("" === "0");

/*
Comparison Table

| Expression | Result | Reason                             |
|------------|--------|------------------------------------|
| "" == 0    | true   | Empty string is converted to 0     |
| "0" == 0   | true   | "0" is converted to 0              |
| "0" === 0  | false  | Different types                    |
| "" == "0"  | false  | Both are strings and values differ |
*/