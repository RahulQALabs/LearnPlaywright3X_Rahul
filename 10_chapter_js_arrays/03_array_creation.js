//Array Literal Preffered
let browsers = ["chrome", "firefox", "ie"];

//Array Constructor
let score1 = new Array(3);  // create 3 length
score1[0]=1;
let score2 = new Array(1, 2, 3);  // create elements


let numbers = new Array(10, 20, 30, 40);
let test = Array.of(10, 20, 30, 40);
console.log(test.length);

let chars=Array.from("Hello");
console.log(chars);