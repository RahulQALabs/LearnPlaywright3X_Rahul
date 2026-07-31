let fruits=["banana","apple","grapes"];
fruits.sort();
console.log(fruits);

let num=[4,2,6,5,7,8,1,0];
console.log(num.sort());

//Natural Sorting Order
let num1=[10,1,21,3];
console.log(num1.sort());

//Ascending
num1.sort((a,b)=>a-b);
console.log(num1)

//Descending
num1.sort((a,b)=>b-a);
console.log(num1)

//Reverse
num1.reverse();
console.log(num1);

//Slice & Combination
let arr=[1,2,3,4,5,6,7,8];
console.log(arr.slice(1,3));
console.log(arr);
console.log(arr.slice(2));
console.log(arr.slice(-2));
console.log(arr.slice(0));
console.log(arr.slice(-3,-5));
console.log(arr.slice(-3,-3));