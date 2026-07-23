
/* 1- Reassigment of a let keyword identifier is not allowed. Once a variable is declared using let, it cannot be reassigned to a new value. */

console.log("Reassignment of a variable means changing the value of a variable after it has been declared.");
let a = 10;
console.log("Before reassignment: " + a);
a = 20;
console.log("After reassigment of a: " + a); // Output: 20


console.log("============================================");
/* 2- Redeclaration of a let keyword identifier is not allowed. Once a variable is declared using let, 
it cannot be redeclared within the same scope. */

console.log("Redeclaration of a let keyword identifier is not allowed. Once a variable is declared using let, it cannot be redeclared within the same scope.");
let b = 10;
console.log("Before redeclaration: " + b);

//let b=20; // ===================== >>>>>> // This will throw an error: SyntaxError: Identifier 'a' has already been declared
//console.log("After redeclaration of b: " + b); // Output: 20


console.log("============================================");

/* 3 - Hoisting of let keyword identifier is not allowed. Variables declared with let are hoisted to the top of their block scope, 
but they are not initialized until the line where they are declared is executed. */

//console.log(c); // Output: ReferenceError: Cannot access 'c' before initialization
let c = 20;

console.log("============================================");

/* 4- Block Scope: Variables declared with let are block-scoped, meaning they are only accessible within the block they are declared in/* . */

/* function myFunction() {
    if (true) {
        let d = 30;
        console.log("Inside the if block: " + d); // Output: 30
    }
    console.log("Outside the if block: " + d); // Output: ReferenceError: d is not defined
}

myFunction(); */
