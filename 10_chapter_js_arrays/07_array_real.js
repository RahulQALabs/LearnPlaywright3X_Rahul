let browsers = ["chrome", "safari", "ie", "firefox", "chromium"];

console.log("============ BEFORE REMOVE THE ELEMENTS =============");
console.log(browsers);

//Remove the element fromn the last index
console.log("============ POP (REMOVE FROM LAST INDEX) FUNCTION =============");
browsers.pop();
console.log(browsers);

//Shift - 
console.log("============ SHIFT (REMOVE FROM FIRST INDEX) FUNCTION =============");
let remove = browsers.shift();
console.log(browsers);
console.log(remove);

//Now Iterate the elements
console.log("============ ITERATING THE ELEMENTS THROUGH FOR LOOP =============");
for (let index = 0; index < browsers.length; index++) {
    console.log(browsers[index]);
    if (browsers[index] === "safari") {
        console.log("Opera doesn't support automation");
    }
}