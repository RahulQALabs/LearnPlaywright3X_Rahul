
// ============= # Not Prefer # =======================//

// Import the readline module (built-in Node.js module for reading input)
const readline = require("readline");

// Create a readline interface connecting to stdin (keyboard input) and 
// stdout (console output)
const rl = readline.Interface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

// Ask the user a question — the callback runs when they type and press Enter
rl.question("Enter the num:",
    (input) => {
let num=Number(input);

// Check if the number is even or odd
if(num%2==0){
console.log("Even");
}else{
console.log("Odd");
}

// Close the readline interface so the program exits cleanly
rl.close();
}
);