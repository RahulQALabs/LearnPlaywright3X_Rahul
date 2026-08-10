let g_x = 10;

function outer() {
    let x = 10;

    function inner() {
        let y = 20;
        console.log(x);  //Inner can access the outer's var
    }

    inner();
    console.log(y);     //Outer can't access the 
}