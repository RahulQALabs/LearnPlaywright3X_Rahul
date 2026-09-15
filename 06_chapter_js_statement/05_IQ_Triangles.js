const data = require('fs').readFileSync(0, 'utf8');
// Write your solution here

let sides = data.trim().split("").map(Number);

let side1 = sides[0];
let side2 = sides[1];
let side3 = sides[2];
console.log(side1);
console.log(side2);
console.log(side3);
if (side1 == side2 == side3) {
    conole.log("Equilateral");
}
else if (side1 == side2) { 
    conole.log("Isosceles");
}