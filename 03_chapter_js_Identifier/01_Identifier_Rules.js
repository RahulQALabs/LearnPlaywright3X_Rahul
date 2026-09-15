console.log("Identifier Rules in JavaScript:");

var a=10;
console.log(a); // Valid identifier

var _b=20;
console.log(_b); // Valid identifier

var $c="RAHUL";
console.log($c); // Valid identifier

var _ =13;
console.log(_); // Valid identifier

var _o='ram';
console.log(_o); // Valid identifier

// var 43aa=89; // Invalid identifier, cannot start with a number - SyntaxError: Invalid or unexpected token

var aa45kk=61;
console.log(aa45kk); // Valid identifier

//No case sensitive
var name="rahul";
var Name="RAHUL";
console.log(name);  
console.log(Name); // Valid identifier, case sensitive

// var rah&&123=90;
// console.log(rah&&123);   //SyntaxError: Unexpected token '&&'

var rah$gpt=90;
console.log(rah$gpt);   // Valid identifier


var rah123gpt=98;
console.log(rah123gpt);   // Valid identifier