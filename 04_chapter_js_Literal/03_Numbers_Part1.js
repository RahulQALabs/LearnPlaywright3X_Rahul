/* // ==========================================================
//  Topic : All Number Types in Java Script

/* In JavaScript, numbers are always in "number", except BigInt. JavaScript has only one type of number. 
Numbers can be written with or without decimals. There is no seperate int,float,double,long etc. All are of type number.
JS uses the IEEE 754 standard to represent numbers, which means that numbers are stored in a binary format. */

// =============================================================== //
// 1 -  Integer Literals
// =============================================================== 

//Decimal (Base 10) - most common number system, uses digits 0-9
let decimalNum=42;
console.log("Decimal Number :"+decimalNum); // Output: 42

//Binary (Base 2) - uses digits 0 and 1, prefixed with "0b"
let binaryNum=0b10101;
console.log("Binary Number :"+binaryNum); // Output: 21

//Octal (Base 8) - uses digits 0-7, prefixed with "0o"
let octalNum=0o53;
console.log("Octal Number :"+octalNum); // Output: 43

//Hexadecimal (Base 16) - uses digits 0-9 and letters A-F, prefixed with "0x"
let hexNum=0x2A;
console.log("Hexadecimal Number :"+hexNum); // Output: 42



// =============================================================== 
// 2- Floating Point Literals
// =============================================================== 


let f1=10.2;
let f2=3.14;
let f3= -0.09
let f4= .5;     //valid, but not recommended, as it can be confusing. It's better to use 0.5 for clarity.
let f5=5.;     //valid, but not recommended, as it can be confusing. It's better to use 0.5 for clarity. */

console.log("Floating Point Number 1 :"+f1); // Output: 10.2
console.log("Floating Point Number 2 :"+f2);            
console.log("Floating Point Number 3 :"+f3); // Output: -0.09
console.log("Floating Point Number 4 :"+f4);

// =============================================================== 
// 3- Exponential Literals
// =============================================================== 

let e1=1.5e3; // 1.5 * 10^3 = 1500
let e2=2.5e-2; // 2.5 * 10^-2 = 0.025
let e3=2E10; // 2 * 10^10 = 20000000000

console.log("Exponential Number 1 :"+e1);
console.log("Exponential Number 2 :"+e2);
console.log("Exponential Number 3 :"+e3);