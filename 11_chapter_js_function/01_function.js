//Without Function
let score1 = 90;
let result1 = score1 > 70 ? "pass" : "fail";
console.log("Score1: " + result1);

let score2 = 50;
let result2 = score2 > 70 ? "pass" : "fail";
console.log("Score2: " + result2);

//With Function
console.log("=============== With Function ============")
function result(scr) {
    return scr > 70 ? "pass" : "fail";
}

//Calling.....
console.log(result(80));
console.log(result(50));
console.log(result(70));
console.log(result(40));
console.log(result(90));