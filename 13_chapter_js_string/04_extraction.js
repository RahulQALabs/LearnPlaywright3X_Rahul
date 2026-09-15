//Extracting Substrings

let str = "Login_Test_Pass_001";

//slice(start,end) --- Negative index supported (start,end-1)
console.log(str.slice(0, 5));
console.log(str.slice(11));
console.log(str.slice(-3));

//substring(start,end) --- no negatives (treat as 0)
str.substring(6,10);     //Test

//at() for single char
str.at(0);     //L
str.at(-1);    //1