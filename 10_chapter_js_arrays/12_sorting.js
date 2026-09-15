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