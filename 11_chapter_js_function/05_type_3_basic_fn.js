// Type 3 - No param/arg but return type

function sayHello() {
    console.log("Hi");
    return "Hello";
}

console.log("------------------");

console.log(sayHello());
let result = sayHello();
console.log(result);


console.log("------------------");

function greetByHi() {
    return "Hi";
}

let res = greetByHi();
console.log(res);