//Call By Value
//Primitive data type - double,string,boolean,number etc

let a = 10;
let b = a;
console.log(a);
console.log(b);
b = 99;
console.log(a);
console.log(b);

console.log("-------------------------");

//Objects - copied by Reference, call by ref.
//Reference - object, array, function

let obj1 = { val: 10 };
let obj2 = obj1;
obj2.val = 99;
console.log(obj1.val);