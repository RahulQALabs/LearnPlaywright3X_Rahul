//Define
function test() {
    console.log("Hello!");
}

// Calling for test is null so it will not print any output because test() is not called

function sayHello() {
    console.log("Hello Rahul");
}

sayHello();                      // It will call the function but not print
console.log(sayHello());         // It will call the function but print of sayHello() function, but it is not return type so sayHello is undefined