//We can use if else-if as wll
function statusCode(code) {
    if (code >= 200 && code < 300) return "success";
    if (code >= 400 && code < 500) return "client error";
    if (code >= 500) return "internal server";
}

console.log(statusCode(201));
console.log(statusCode(404));
console.log(statusCode(500));

console.log("-------------------------------------------");

//Non return type function - Return nothing -> undefined
function logTest(name) {
    console.log(`Running --> ${name}`);
}

logTest("Hi I am Rahul!");
console.log(logTest(201));


//Can we return array or object ---> yes we can

function aaa() {
    return [1, 2, 3, 4, 5];
    //return {name:rahul};  ----> Object(key value pair is object in js)
}