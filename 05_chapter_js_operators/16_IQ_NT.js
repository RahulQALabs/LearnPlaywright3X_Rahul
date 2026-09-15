
// <300 - success , <400 - redirect, <500 - Client Error, 500 -> Internal Error

let statusCode = 400;
let category = statusCode < 300 ? "Success" :
    statusCode < 400 ? "Redirect" :
        statusCode < 500 ? "Client Error" : "Internal Error";

console.log(`StatusCode --> ${statusCode} is ${category}`);