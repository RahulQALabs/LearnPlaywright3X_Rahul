var a = "Rahul";

if (true) {
    console.log(a);
    var a = "temp";
}

//ReferenceError: Cannot access 'a' before initialization

//No Temporal Dead Zone
//Global Scope
// Once it will enter in block and a is not initialized then var look out of block as it's functional scope
//Print 'Rahul'

//Not recommend for automation