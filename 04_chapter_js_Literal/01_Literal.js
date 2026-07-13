let name = "Rahul Gupta"; //String literal

let age = 25; //Number literal

let isStudent = true; //This is a Boolean literal assigned to a variable named isStudent. The value true indicates that the person is a student.

let pi = 3.14; //This is a Numeric literal assigned to pi. The value 3.14 represents the mathematical constant pi.

let nullValue = null; //This is a Null literal assigned to nullValue. The value null represents the absence of any object value.

let undefinedValue = undefined; //This is an Undefined literal assigned to undefinedValue. The value undefined indicates that the variable has not been assigned a value.

let person = { name: "Rahul Gupta", age: 25, isStudent: true }; //This is an Object literal assigned to a variable named person. It contains three properties: name, age, and isStudent.

let colors = ["red", "green", "blue"]; //This is an Array literal assigned to colors. It contains three string elements representing colors.

let regex = "^[a-zA-Z0-9]+$"; //This is a Regular Expression literal assigned to regex. It defines a pattern that matches alphanumeric characters.

let a = 10; //This is a Numeric literal assigned to a variable named a. The value 10 represents the number ten.

/* Numeric literals are used to represent numbers in JavaScript. 
They can be integers or floating-point numbers. 
In this case, the variable a is assigned the numeric literal 10, which is an integer value.
Numeric literals can be used in various mathematical operations and calculations within the code. */

/*  typeof says/works only for primitive data types. It returns the type of the variable as a string. 
 It will not work with function and operators. */

console.log(typeof name); // Output: string
console.log(typeof age); // Output: number
console.log(typeof isStudent);  // Output: boolean
console.log(typeof pi); // Output: number
console.log(typeof nullValue); // Output: object
console.log(typeof undefinedValue); // Output: undefined
console.log(typeof person); // Output: object
console.log(typeof colors); // Output: object
console.log(typeof regex);  // Output: string           
console.log(typeof a); // Output: number