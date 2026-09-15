// =============================================================== 
// 4- Numeric Seperator Literals
// =============================================================== 

let millionNum = 1_000_000; // 1 million
let billionNum = 1_000_000_000; // 1 billion  
let binaryNumWithSeparator = 0b1010_1101_0010; // Binary number with separators
let hexNumWithSeparator = 0xDEAD_BEEF; // Hexadecimal number with separators

console.log("Numeric Seperator Number 1 :" + millionNum); // Output: 1000000
console.log("Numeric Seperator Number 2 :" + billionNum);
console.log("Numeric Seperator Number 3 :" + binaryNumWithSeparator); // Output: 2770
console.log("Numeric Seperator Number 4 :" + hexNumWithSeparator); // Output: 3735928559

// =============================================================== 
// 5- Big Integer  Literals
// ===============================================================


let bigIntNum = 1234567890123456789012345678901234567890; // BigInt literal
let bigNum1 = 1234567890123456789012345678901234567890n; // BigInt literal with 'n' suffix
let bigNum2 = "1234567890123456789012345678901234567890"; // String representation of a large number
let bigNum3 = BigInt("1234567890123456789012345678901234567890"); // BigInt created from a string

console.log("Big Integer Number 1 :" + bigIntNum);
console.log("Big Integer Number 2 :" + bigNum1);
console.log("Big Integer Number 3 :" + bigNum2);
console.log("Big Integer Number 4 :" + bigNum3);

// =============================================================== 
// 6- Infinity  Literals
// ===============================================================

let positiveInfinity = Infinity; // Positive Infinity literal
let negativeInfinity = -Infinity; // Negative Infinity literal
let in1=1/0;
let in2=-1/0;

console.log("Positive Infinity :" + positiveInfinity);
console.log("Negative Infinity :" + negativeInfinity);
console.log("Infinity 1 :" + in1);
console.log("Infinity 2 :" + in2);


// =============================================================== 
// 6- NaN  Literals
// ===============================================================

let notANumber1 = NaN; // NaN literal
let notANumber2 = 0 / 0;    // NaN result from division by zero
let notANumber3 = Math.sqrt(-1); // NaN result from square root of a negative number
let notANumber4 = parseInt("abc"); // NaN result from parsing a non-numeric string
let notANumber5 = Number("xyz"); // NaN result from converting a non-numeric string to a number
let notAnumber6= "Rahul"*2; // NaN result from multiplying a string by a number

console.log("NaN Number 1 :" + notANumber1);
console.log("NaN Number 2 :" + notANumber2);
console.log("NaN Number 3 :" + notANumber3);
console.log("NaN Number 4 :" + notANumber4);
console.log("NaN Number 5 :" + notANumber5);
console.log("NaN Number 6 :" + notAnumber6);
