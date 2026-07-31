
//indexOf - Return first index, or -1 if not found
let results = ["pass", "fail", "pass", "error", "pass", "fail"];

results.indexOf("pass");
results.indexOf("fail");
results.indexOf("skip");
results.indexOf("error");

console.log(results.indexOf("pass"));
console.log(results.indexOf("fail"));
console.log(results.indexOf("skip"));
console.log(results.indexOf("error"));

console.log(results.lastIndexOf("pass"));

console.log(results.includes("error"));
console.log(results.includes("skip"));