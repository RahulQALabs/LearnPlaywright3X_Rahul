let str = "  Hello World!  ";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//Trim Whitespaces
console.log(str.trim());

str.trimStart();
str.trimEnd();

//Replace
let msg = "Test:Fail. Retry:Fail.";

// msg.replace("Fail", "Pass") isn't "not replacing" — it does return a new replaced string. The problem is you're throwing that returned string away.
// The original msg is never touched, because strings in JavaScript are immutable.

msg = msg.replace("Fail", "Pass");  //Replace method will replace only first occurenece
console.log(msg);

msg = msg.replaceAll("Fail", "Pass");
console.log(msg);

msg=msg.replace(/Fail/g, "Pass");
console.log(msg);              // replace all with Regex

//Concatenation
console.log("Hello" + " " + "World!");
console.log("Hello".concat(" ", "World!"));
console.log(`${"Hello"} ${"World"}`);