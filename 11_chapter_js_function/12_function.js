//Immediate invoke function (IIFE)
//They don't need to be called.

function name1() {
    console.log("Hi I am Rahul Gupta!");
}

name1();

//IIFW
//Anonymous Function - Call itself
(function () {
    console.log("Anonymous Function");
})();

//Arrow Crazy (Empty Arrow)

(() => {
    console.log("Setup Complete");
})();