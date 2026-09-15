let tests = ["login", "checkout", "search", "logout"];

for (let index = 0; index < tests.length; index++) {
    console.log(index, tests[index]);
}

console.log("------------");

//JS is very nutorious
//for...of(cleanest of the value)
for (let test of tests) {
    console.log(test);
}


console.log("------------");

//forEach (no return value)
tests.forEach((test, index) => {
    console.log(`${index} ------ ${test}`);
})

console.log("------------");

//entries() - index + value
for (let [i, test] of tests.entries()) {
    console.log(i, test);
}

console.log("------------");

//in function
let students = ["mathis", "james", "john", "alter"];
for (let student of students) {
    console.log(student, "---->>>>", students[student]);
}
