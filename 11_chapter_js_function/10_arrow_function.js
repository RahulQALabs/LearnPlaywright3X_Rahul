//Define
function doubleMe(a) {
    return a * 2;
}

//const doubleMe=(a)=> a*2;  ---------->    //SyntaxError: Identifier 'doubleMe' has already been declared
const doubleA = (a) => a * 2;

console.log(doubleA(10));

//No Argument Function ---> No argument but returning something
/* const doubleB=()=> b*2;  //ReferenceError: b is not defined
console.log(doubleB()); */

//No Argument Function ---> No argument but returning something
const doubleB = () => "Staging";
console.log(doubleB());

//Multiline
const getResult = (score) => {
    if (score > 70) return "pass";
    return "fail";
}

console.log(getResult(98));
console.log(getResult(50));