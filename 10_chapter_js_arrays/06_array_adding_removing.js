
let a = [1, 2, 3, 4, 5];

console.log("Before pushing the element : ");
console.log(a);

a.push(6);
console.log("After pushing the element 6 : ");
console.log(a);

a.push(7, 8, 9);
console.log("After pushing the multiple elements 7,8,9 : ");
console.log(a);


//Remove from end
a.pop();
console.log("After poping(remove) the element from the end : ");
console.log(a);

//Add to the beginning
a.unshift(0);
console.log("Add element at the beginning : ");
console.log(a);

a.unshift(3);
console.log("Add element at the beginning : ");
console.log(a);

//Remove from the beginning
a.shift(3);
console.log(a);

//splice(index,element)
a.splice(2, 1);
console.log("Splice : ", a);

//splice(index,element,add)
a.splice(2, 0, 99);
console.log("Splice : ", a);

a.splice(5, 2, 199);
console.log("Splice : ", a);

//splice supports the negative index
a.splice(-1,1,1);
console.log("Splice : ", a);