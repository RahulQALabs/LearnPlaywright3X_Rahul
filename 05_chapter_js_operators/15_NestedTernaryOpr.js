// Multiple Condition

// 1- If age is greater than 18 ---> He/she will allow go to goa.
// 2- If age is greater than 25 ---> He/She will allow to drink.

let age1 = 17;
var condition = age1 > 18 ? (age1 > 25 ? "Allow for drink" : "not allow") : "Not eligible for going to Goa as well drink";

console.log(`Now condition is saying ---${condition}`);


let age2 = 27;
var condition = age2 > 18 ? (age2 > 25 ? "Allow for drink" : "not allow") : "Not eligible for going to Goa as well drink";

console.log(`Now condition is saying ---${condition}`);


// var - redeclare and reassign are allowed