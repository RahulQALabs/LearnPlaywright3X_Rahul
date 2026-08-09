
/* Print numbers from 1 to n. For multiples of 3, print 'Fizz'. For multiples of 5, print 'Buzz'. 
For multiples of both 3 and 5, print 'FizzBuzz'.

Example 1
Input
5
Output
1
2
Fizz
4
Buzz
Numbers 1-5 with 3→Fizz, 5→Buzz */


/*
npm install prompt-sync - THis command should be run then you can see the ouput

Terminal - 
PS coding_practice\04_FizzBuzz.js

*/


console.log("Enter the num : ");
let num = Number(require("fs").readFileSync(0, "utf8").trim());

for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}

const data = require('fs').readFileSync(0, 'utf8');

for (let i = 1; i <=data; i++) { 
    if (i % 3 == 0 && data % 5 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}