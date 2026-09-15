let scores = [45, 70, 85, 93, 99];

//Map uses for transform the new array with same size
let grades = scores.map(item_score => item_score > 70 ? "Pass" : "Fail");
console.log(grades);

//Filter - > No same size of new array
let passing = scores.filter(s => s >= 70);
console.log(passing);

//Reduce ---> reduce in one entity which is total
let total = scores.reduce((sum, s) => sum + s, 0);
console.log(total);