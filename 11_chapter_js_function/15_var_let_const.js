//================================ ## var is function scoped.It is traitor. ## ======================================//
console.log("================================ ## var is function scoped.It is traitor.... ## ======================================");
var a = 10;
console.log(a);

//Define the function
function printHello() {
    console.log("The Testing Academy");
    var a = 20;
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a);
    }
    console.log(a);   //30 because var is function scoped so 'a' value always overidden in function
}

printHello();



//================================ ## let is blocked scoped. ## ======================================//

console.log("================================ ## let is blocked scoped.... ## ======================================");
let b = 10;
console.log(b);

//Define the function
function printHello() {
    console.log("The Testing Academy");
    let b = 20;
    console.log(b);
    if (true) {
        let b = 30;
        console.log(b);
    }
    console.log("let --->", b);   //20 because let is block scoped so 'a' value always return in block
}

printHello();
console.log(b);

/* 
let nn="Rahul";              // Not Allowed
var nn="Rahul";                       
*/

const pi = 3.14;
console.log(pi);
/* 
pi=3.14159;
console.log(pi);  // TypeError: Assignment to constant variable.
*/

const a1=[1,2,3,4];
a1.push(10);
console.log(a1);