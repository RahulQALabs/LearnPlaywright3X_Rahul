
let num = [10, 20, 30, 40, 50];

let result = num.find(x => x > 20);
console.log("Element : " + result);

let index = num.findIndex(x => x > 20);
console.log("Index : " + index);

let last = num.findLast(x => x > 20);
console.log("Last Element : " + last);

let lastIndex = num.findLastIndex(x => x > 20);
console.log("Last Index : " + lastIndex);  