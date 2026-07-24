//Comparison operators are used to compare two values. They always return a Boolean value.

// 1. Equal to (==) --- > Checks if two values are equal after type conversion (type coercion). loose equality

let a = 10;
let b = 10;
let c = "10";
let d = "10.00";
let e = 7;

console.log(" ==================== # Equal To ( == ) | Loose Equality ================ ");
console.log(a == b);
console.log(a == c);
console.log(c == d);   /* c == d → "10" == "10.00" → both are strings, so JavaScript compares the strings directly → false */
console.log(a == d);
console.log(a == e);


// 2. Strict Equal to (===) -- > Checks both value and data type.

console.log(" ==================== # Strict Equal To ( === ) | Tight Equality ================ ");
console.log(a === b);
console.log(a === c);
console.log(c === d);   /* c == d → "10" == "10.00" → both are strings, so JavaScript compares the strings directly → false */
console.log(a === d);
console.log(a === e);

// 3. Not Equal (!=) -----> Checks if two values are not equal. It will check either datatype or value is equal.

console.log(" ==================== # Not Equal (!=) ================ ");
console.log(a != b);
console.log(a != c);
console.log(c != d);   /* c == d → "10" == "10.00" → both are strings, so JavaScript compares the strings directly → false */
console.log(a != d);
console.log(a != e);

console.log(10 != 20);   // true
console.log(10 != "10"); // false

// 4. Strict Not Equal (!==) ----------> Checks if either the value or the data type is different.

console.log(" ==================== # Strict Not Equal (!==) ================ ");
console.log(a !== b);
console.log(a !== c);
console.log(c !== d);   /* c == d → "10" == "10.00" → both are strings, so JavaScript compares the strings directly → false */
console.log(a !== d);
console.log(a !== e);

console.log(10 !== 20);   // true
console.log(10 !== "10"); // false

//5. Greater Than (>)

console.log(" ==================== # Greater Than (>) ================ ");
console.log(10 > 20);
console.log(10 < 20);

//5. Less Than (>)

console.log(" ==================== # Less Than (<) ================ ");
console.log(10 > 20);
console.log(10 < 20);

//7. Greater Than or Equal (>=)

console.log(" ==================== # Greater Than or Equal (>=) ================ ");
console.log(10 >= 20);
console.log(60 >= 50);

//7. Less Than or Equal (<=)

console.log(" ==================== # Less Than or Equal (<=) ================ ");
console.log(10 <= 20);
console.log(60 <= 50);  // ( 60< 50 or 60=50 --> OR Gate)

/*
Comparison Summary Table

| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| ==       | Equal after type conversion | 10 == "10" | true |
| ===      | Equal with same type | 10 === "10" | false |
| !=       | Not equal after conversion | 10 != "10" | false |
| !==      | Not equal with same type | 10 !== "10" | true |
| >        | Greater than | 10 > 7 | true |
| <        | Less than | 10 < 7 | false |
| >=       | Greater than or equal | 10 >= 10 | true |
| <=       | Less than or equal | 10 <= 7 | false |
*/