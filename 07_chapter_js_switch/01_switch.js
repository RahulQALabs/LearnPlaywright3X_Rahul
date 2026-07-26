

// 1- Monday, 2- Tuesday, 3- Wednesday, ........

//let data = require("fs").readFileSync(0, "utf8").trim();

let data =10;

console.log("Enter the data:", data);

switch (data) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Input is wrong!")
        break;
}