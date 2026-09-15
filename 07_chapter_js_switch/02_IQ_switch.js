

// 1- Monday, 2- Tuesday, 3- Wednesday, ........

//let data = require("fs").readFileSync(0, "utf8").trim();

let data = 3;

console.log("Enter the data:", data);

switch (data) {
    case 1:
        console.log("Monday - Sprint Planning");
    case 2:
        console.log("Tuesday - Development");
    case 3:
        console.log("Wednesday - Code Review");
    case 4:
        console.log("Thursday - Testing");
    case 5:
        console.log("Friday - Deployment & Retro");
    case 6:
        console.log("Saturday - Rest Day");
    case 7:
        console.log("Sunday - Rest Day");
    default:
        console.log("Input is wrong!")

}