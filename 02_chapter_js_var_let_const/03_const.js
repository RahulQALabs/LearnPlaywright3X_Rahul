
/* 1- Reassigment of a const keyword identifier is not allowed. Once a variable is declared using const,
 it cannot be reassigned to a new value. */

const PI = 3.14;
// PI = 3.14159; // This will throw an error: TypeError: Assignment to constant variable.

console.log("After reassigment of PI:" + PI);

console.log("============================================");

/* 2 - Redeclared of const keyword identifier is not allowed. 
Once a variable is declared using const, it cannot be redeclared within the same scope. */

const a = 10;
// const a = 30; // This will throw an error: SyntaxError: Identifier 'a' has already been declared
console.log("After redeclaration of a: " + a);
