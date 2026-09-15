/* console.log("Enter the number : ");
const score = require('fs').readFileSync(0, 'utf8').trim();
console.log("Hi, " + score); */

let score = 58;


switch (true) {
    case (score >= 90):
        console.log("Outstanding : Top Performer");
        break;
    case (score >= 85):
        console.log("Excellent : Above Expectation");
        break;
    case (score >= 70):
        console.log("Good : Meet the Expectations");
        break;
    case (score >= 50):
        console.log("Average : Need Improvement");
        break;
    default:
        console.log("Unsatisfactory Result : Require Trainings");
        break;
}