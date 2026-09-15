function greet1(name) {
    return `Hello! ${name}`;
}

//Arrow Function --->>
// If you want to make a normal function to arrow function --->>>
// Remove the keyword function and function name, remove the keyword return, remove the curly braces, and use this.



//Syntax ----> (parameter) => statement of return type(remove return keyword)
const greet2 = (name) => `Hello ${name}!`;

console.log(greet1("Rahul"));
console.log(greet2("Lucky"));