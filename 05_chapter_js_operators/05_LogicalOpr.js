/* =========== Logical Operators ==========
Logical operators are used to combine two or more conditions (Boolean expressions). They return either:
true
false */


//1. Logical AND (&&) --- > Returns true only if both conditions are true.
console.log("=================== # Logical AND (&&) # =========================");
let a = 10;
let b = true;

console.log(a > 9 && b);
console.log(a > 9 && !b);

//2. Logical OR (||) --- > Returns true if at least one condition is true.
console.log("=================== # Logical OR (||) # =========================");
let c = 10;
let d = false;

console.log(c > 9 || d);
console.log(c < 9 || d);


// 3. Logical NOT (!) ---> Reverses the Boolean value.
console.log("=================== # Logical NOT (!) # =========================");
let e = true;
let f = false;

console.log(!e);
console.log(!f);

/*
Logical Operator Summary Table

| Operator | Meaning | Example       | Result |
|----------|---------|---------------|--------|
| &&       | AND     | true && false | false  |
| ||       | OR      | true || false | true   |
| !        | NOT     | !true         | false  |
*/

