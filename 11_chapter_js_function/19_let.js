let a = "Rahul";

if (true) {
    console.log(a);
    let a = "temp";
}

//ReferenceError: Cannot access 'a' before initialization

//Temporal Dead Zone
//Global Scope
//Enter block, Block scope
//a= TDZ (Exist but not initialized)
//console.log(a);