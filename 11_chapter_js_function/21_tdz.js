/* 
Temporal Dead Zone (TDZ) in JavaScript

When we use 'let' / 'const', the variable is HOISTED (registered in memory)
but it is NOT initialized (no value, not even 'undefined').

The area between the START of the scope and the DECLARATION line
is called the Temporal Dead Zone (TDZ).

Accessing a variable inside the TDZ throws:
ReferenceError: Cannot access 'a' before initialization
*/

//--------------- Pipeline Diagram : What happens behind the scene ---------------------//

/*

PIPELINE - Phase 1 : Memory Creation (Compilation)

    Block Scope Starts  {                       
    ---------------------
    |  a  ->  TDZ      |   <----- 'a' is hoisted but UNINITIALIZED (dead zone)
    ---------------------
    
PIPELINE - Phase 2 : Execution (Code Run Line by Line)

    {                       Step 1 : Enter the block, 'a' is in TDZ
        console.log(a);     Step 2 : ACCESS 'a'  --->  inside TDZ
                                       |
                                       v
                        ReferenceError: Cannot access 'a' before initialization
                                       |
        let a = 10;         Step 3 : (Never reached - program crashes at Step 2)
    }

PIPELINE - Visual View

    Block starts
        |
        v
    [ a is in TDZ ]  <---  cannot read, cannot write
        |
        v
    console.log(a)  ====>  ReferenceError (BOOM!)
        |
        v
    let a = 10;  --->  TDZ ends here, 'a' = 10 (but we never reached this line)

*/

//--------------- Actual Code ---------------------//

{
    console.log(a);   // ReferenceError: Cannot access 'a' before initialization
    let a = 10;       // Declaration line - TDZ ends here
}

/* 
Why does this happen?

1. 'let' IS hoisted - the engine knows 'a' exists from the start of the block.
2. But unlike 'var', 'let' is NOT given the value 'undefined' during memory creation.
3. So 'a' sits in the TDZ - exists but not initialized.
4. Any access (read or write) before the declaration line = ReferenceError.

Compare with 'var' (see 20_var.js):
   var a;  -->  hoisted with 'undefined', so console.log(a) prints 'undefined'

Compare with 'let' AFTER declaration:
   let a = 10;  -->  TDZ ends, 'a' = 10, console.log(a) prints 10

Takeaway:
   - TDZ exists only BEFORE the 'let' / 'const' declaration line.
   - After the declaration line, the variable is fully usable.
   - Always declare variables at the TOP of the block to avoid the TDZ.
*/
