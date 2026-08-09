
/* 
Hoisting in JavaScript is a behavior where you can sometimes use a variable before it is declared in the code. 
During the compilation phase, JavaScript moves the declarations to the top of their scope, 
but it does not move the initializations (assigned values). 
As a result, the variable declaration is processed first, 
and the value is assigned only when the execution reaches that line. 
*/

//--------------- Phase 1 : Memory Creation ---------------------//

console.log(a);
var a = "Rahul";
console.log(a);

/* Hoisting does not physically move your code. 
It is simply a mental model that helps us understand how the JavaScript engine processes declarations during the compilation phase. 
Internally, the engine registers variable and function declarations before the execution phase begins. */


console.log(greetings);
var greetings = "Hello!";
console.log(greetings);

//Behind The Scene ----->>>
// var greetings                   <<------ Hosited with undefined
// console.log(greetings);         <<----- Undefined
// var greetings = "Hello!";       <<----- Assignment stays in place
// console.log(greetings);         <<---------- "Hello!"
