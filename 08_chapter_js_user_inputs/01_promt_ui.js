let num=prompt("Enter the num : ");
num=Number(num);     //Convert string to number

if(num%2==0){
    console.log("The num is even : "+num)
}else{
    console.log("The num is odd : "+num)
}

// ❌ Why ReferenceError: prompt is not defined ?
//
// prompt() is a browser/web API — it belongs to the window object in browsers.
// Node.js is a server-side runtime, NOT a browser. It does not have a window or document object,
// so prompt(), alert(), confirm() etc. are NOT available in Node.js.
//
// ✅ How to take user input in Node.js instead:
//
// 1. Using readline (built-in module):
//    const readline = require("readline").createInterface({
//        input: process.stdin,
//        output: process.stdout
//    });
//    readline.question("Enter a num: ", (num) => { ... });
//
// 2. Using process.stdin directly:
//    process.stdin.on("data", (data) => { let num = data.toString().trim(); ... });
//
// 3. Using readlineSync (third-party npm package):
//    npm install readline-sync
//    const ps = require("readline-sync");
//    let num = ps.question("Enter a num: ");
//
// 4. Using prompt-sync (third-party npm package):
//    npm install prompt-sync
//    const prompt = require("prompt-sync")();
//    let num = prompt("Enter a num: ");   // This works!
//
// Key takeaway: prompt() is browser-only. In Node.js, use readline or third-party packages.