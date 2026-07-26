
// Run with terminal --- > PS D:\Rahul\testing-academy\LearnPlaywright3X_Rahul> node "coding_practice/02_User_Input.js"

const readline=require("readline");
const rl=readline.createInterface({input:process.stdin,output:process.stdout});

rl.question("Enter the number : ",(ans)=>{
    const n=Number(ans.trim());
    console.log("Entered number is :",n);
    rl.close();
});


/* The difference is subtle but good to know:

  - Comma (,): Passes multiple arguments. console.log automatically separates them with a space.
  - Plus (+): Concatenates into a single string first — no extra space added by console.log.

  Example with n = 42:

  console.log("Entered number is :", n);
    // Output: Entered number is : 42   (space after colon)

    console.log("Entered number is :" + n);
    // Output: Entered number is :42    (no space after colon)

  Winner: The comma version is cleaner — adds the space automatically, no manual string manipulation needed. */