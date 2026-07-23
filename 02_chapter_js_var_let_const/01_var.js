
// 1 - Reassignment of a variable means changing the value of a variable after it has been declared. 

var a = "John Doe";
console.log("Reassignment of a variable means changing the value of a variable after it has been declared.");
console.log("Before reassignment: " + a);

a = "Rahul Gupta";
console.log("After reassignment: " + a);


console.log("============================================");
// 2- var can be redeclared as we can redeclared a same variable name using var keyword.

var b = "Hello";
var b = "World";
console.log(b); // Output: World


console.log("============================================");
/*
3 - Function Scope: Variables declared with var are function-scoped, 
meaning they are accessible within the function they are declared in, but not outside of it.
*/

function myFunction() {
    {
        if (true) {
            var a = 10;
            console.log("Inside if block: " + a); // Output: 10
        }

        //Declared variable 'a' in if block, is accessible outside the if block but within the function
        console.log("Outside if block: " + a); // Output: 10
    }
}

myFunction();


console.log("============================================");
/*  4 - Hoisting: Variables declared with var are hoisted to the top of their scope,
 meaning they can be used before they are declared. However, the value will be undefined until the line where the variable is assigned
 a value is executed. */

console.log("Value of c before declaration: " + c); // Output: undefined
var c = 20;
console.log("Value of c after declaration: " + c); // Output: 20