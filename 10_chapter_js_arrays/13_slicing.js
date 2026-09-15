//Slice(start,end) - returns new array,
//doestn't mutate actual -> (start,end-1). index=0
//Don't give the end, it will automatically take from start to end.


//Slice & Combination
let arr=[1,2,3,4,5,6,7,8];
console.log(arr.slice(1,3));
console.log(arr);
console.log(arr.slice(2));
console.log(arr.slice(-2));
console.log(arr.slice(0));
console.log(arr.slice(-3,-5));
console.log(arr.slice(-3,-3));