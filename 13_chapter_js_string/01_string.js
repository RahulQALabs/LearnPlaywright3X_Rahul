let url = "https://google.com";
let status = 'pass';
let message = `Test completed in ${320}ms`;

//single quote
let name = 'Rahul';

//double quote
let title = "Gupta";

//Template literals (backticks) - allows expression & multiline
let name1 = 'Rahul';
let msg = `Hello ${name1}! 2+2=${2 + 2}`;
console.log(name1);
console.log(msg);

//Multiline
let report = `
Test:Login
status:pass
Duration:320ms
`

console.log(String(200));
String(true);    //true will be converted into string true ="true"
String(null);    //null
String([1, 2]);     //[1,2];


//String Properties & Basic Access

let a = 'Rahul';
let b = "Gupta";
let c=`Hi! I am "a", Thank you!`
let d=`Hi! I am 'b', Thank you!`
console.log(a);
console.log(b);
console.log(c);
console.log(d);