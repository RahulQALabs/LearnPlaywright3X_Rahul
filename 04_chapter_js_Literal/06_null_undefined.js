// ============== Simple Defination of Null and Undefined in JavaScript ============== //

/* Null: 
In JavaScript, null is a special value that represents the intentional absence of any object value. 
It is often used to indicate that a variable should have no value or that an object property is intentionally empty.
Variable exist but explicitly assigned as null */

/* Undefined: In JavaScript, undefined is a primitive value that indicates that a variable has been declared but has not been assigned
a value. */

// Example of Null
let myVariable = null; // Assigning null to a variable
console.log(myVariable); // Output: null

// Example of Undefined
let anotherVariable; // Variable declared but not assigned a value
console.log(anotherVariable); // Output: undefined

// Undefined

let x; // Variable declared but not assigned a value
console.log(x); // Output: undefined


function myFunction() {
}
console.log("Function output :"+myFunction()); // Output: undefined


// Example of Null

let n=null; // Variable explicitly assigned null
console.log("Before assigning null :"+n); // Output: 10
console.log(typeof n); // Output: object

// ============== Key Differences: undefined vs null ============== //

/* 
| Aspect            | undefined                          | null                              |
|-------------------|------------------------------------|-----------------------------------|
| Meaning           | Variable declared but not assigned | Intentional absence of a value    |
| typeof result     | "undefined"                        | "object" (historical JS bug)      |
| Assignment        | Default by JS engine               | Explicitly assigned by developer  |
| Loose equality    | undefined == null → true           | null == undefined → true          |
| Strict equality   | undefined === null → false         | null === undefined → false        |
| Usage intent      | Uninitialized / missing            | Empty / cleared / no object       |
| Falsy value       | Yes                                | Yes                               |
*/