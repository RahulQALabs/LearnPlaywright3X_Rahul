//Scope in functions

let env = "Staging";   //Global Scope

function setupConfig() {
    let timeout = 2000;                    //Local Scope
    console.log(timeout);                //Can access local
    console.log(env);                //Can access global
}

setupConfig();
console.log(timeout);                     //ReferenceError: timeout is not defined
console.log(env);    
