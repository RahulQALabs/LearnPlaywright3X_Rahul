
function add(a, b, c) {      //If you are using normal parameter (a,b,c) then it will take first 3 parameter only
    return a + b + c;
}

//Normal function
console.log("-------------------");
let d1 = [3, 4, 5];
let d2 = [3, 4, 5, 9];
console.log(add(d1));
console.log(add(d2));

console.log(add(...d1));
console.log(add(...d2));   //It will take the first 3 only

//Spead Function
console.log("-------------------");
let e = [1, 2, 3];
console.log(add(...e));


console.log("-------------------");

function hasError(...codes) {                     //If you are using spead parameter (...codes) then it will take all parameter
    return codes.some(c => c >= 400);
}

let responseCode1 = [200, 300, 304];
let responseCode2 = [200, 300, 201, 302, 310, 404];

hasError(...responseCode1);
hasError(...responseCode2);
console.log(hasError(...responseCode1));
console.log(hasError(...responseCode2));
