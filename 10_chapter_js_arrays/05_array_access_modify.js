let statuses = ["pass", "fail", "skip"];

console.log(statuses[0]);
console.log(statuses[2]);

console.log(statuses[-1]);
console.log(statuses[-2]);

console.log(statuses.at(-1));
console.log(statuses.at(-2));

console.log(statuses.at(-4));

statuses[0]="blocked";
console.log(statuses);
console.log(statuses.length);
console.log(statuses.at(0));