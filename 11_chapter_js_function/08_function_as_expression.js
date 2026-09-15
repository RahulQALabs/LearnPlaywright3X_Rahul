function greet1(name) {
    return `Hello! ${name}`;
}

//Function as Expression
const greet2=function(name){
     return `Hello! ${name}`;
}

//Above both functions are same
console.log(greet1("Rahul"));
console.log(greet2("Lucky"));